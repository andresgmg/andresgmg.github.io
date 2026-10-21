/**
 * Generate the downloadable CV PDFs (EN + ES) and, on demand, the social share image.
 *
 * Renders the print-optimized /cv/en and /cv/es routes from the built `dist/` folder with
 * headless Chromium (Playwright) and writes the PDFs **into `dist/`** so they are published
 * together with the site. They are generated on every deploy by CI and are never committed.
 *
 *   npm run build && npm run cv:pdf   → dist/Andres_Marquez_CV_EN.pdf, dist/Andres_Marquez_CV_ES.pdf
 *   npm run cv:og                     → public/og-image.png (committed; regenerate when the hero changes)
 *
 * The script fails (exit 1) when a CV exceeds MAX_PAGES so CI blocks content that overflows.
 */
import { createServer } from 'node:http';
import { readFile, writeFile } from 'node:fs/promises';
import { existsSync, statSync } from 'node:fs';
import { extname, join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';
import { PDFDocument } from 'pdf-lib';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const distDir = join(root, 'dist');
const publicDir = join(root, 'public');
const args = new Set(process.argv.slice(2));
const onlyOg = args.has('--only-og');

/** Hard limit for the CV length. Keep in sync with the "2 pages" goal in README. */
const MAX_PAGES = 2;

/**
 * Output file names. Must match `profile.cv` in src/data/profile.ts (the site links to them).
 */
const CV_TARGETS = [
  {
    lang: 'en',
    path: '/cv/en/',
    out: 'Andres_Marquez_CV_EN.pdf',
    title: 'Andrés Márquez — CV (English)',
    subject: 'Senior Full-Stack Developer & Electronics Engineer — Curriculum Vitae',
  },
  {
    lang: 'es',
    path: '/cv/es/',
    out: 'Andres_Marquez_CV_ES.pdf',
    title: 'Andrés Márquez — CV (Español)',
    subject: 'Senior Full-Stack Developer e Ingeniero en Electrónica — Currículum Vitae',
  },
];
const AUTHOR = 'Andrés Gerardo Márquez González';
const KEYWORDS = [
  'Andrés Márquez',
  'Senior Full-Stack Developer',
  'Electronics Engineer',
  'Python',
  'TypeScript',
  'FastAPI',
  'Django',
  'Generative AI',
  'LangChain',
  'AWS',
  'Docker',
  'Santiago, Chile',
];

if (!onlyOg && !existsSync(distDir)) {
  console.error('✗ dist/ not found. Run `npm run build` first.');
  process.exit(1);
}

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.xml': 'application/xml',
  '.json': 'application/json',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain; charset=utf-8',
};

function resolveFile(urlPath) {
  const pathName = decodeURIComponent(urlPath.split('?')[0]);

  const fromDist = tryResolveInDir(distDir, pathName);
  if (fromDist) return fromDist;

  const fromPublic = tryResolveInDir(publicDir, pathName);
  if (fromPublic) return fromPublic;

  return join(distDir, pathName);
}

function tryResolveInDir(baseDir, pathName) {
  let filePath = join(baseDir, pathName);
  if (existsSync(filePath) && statSync(filePath).isDirectory()) {
    const indexPath = join(filePath, 'index.html');
    if (existsSync(indexPath)) return indexPath;
  }

  if (!existsSync(filePath)) {
    const htmlPath = `${filePath}.html`;
    if (existsSync(htmlPath)) return htmlPath;
    return null;
  }

  return filePath;
}

const server = createServer(async (req, res) => {
  try {
    const filePath = resolveFile(req.url ?? '/');
    if (!existsSync(filePath)) {
      res.statusCode = 404;
      res.end('Not found');
      return;
    }
    const body = await readFile(filePath);
    res.setHeader('Content-Type', MIME[extname(filePath)] ?? 'application/octet-stream');
    res.end(body);
  } catch (err) {
    res.statusCode = 500;
    res.end(String(err));
  }
});

await new Promise((resolve) => server.listen(0, resolve));
const { port } = server.address();
const base = `http://localhost:${port}`;

// CHROMIUM_PATH lets you point at a locally installed Chromium instead of the Playwright-managed one.
const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || undefined });
let failed = false;
try {
  if (onlyOg) {
    await generateOgImage(browser);
    console.log('✓ public/og-image.png');
  } else {
    for (const target of CV_TARGETS) {
      const page = await browser.newPage();
      await page.goto(`${base}${target.path}`, { waitUntil: 'networkidle' });
      await page.evaluate(() => document.fonts.ready);
      await page.emulateMedia({ media: 'print' });
      const bytes = await page.pdf({
        format: 'A4',
        printBackground: true,
        preferCSSPageSize: true,
        tagged: true,
      });
      await page.close();

      const { pages, output } = await finalizePdf(bytes, target);
      const outPath = join(distDir, target.out);
      await writeFile(outPath, output);

      const status = pages <= MAX_PAGES ? '✓' : '✗';
      console.log(`${status} dist/${target.out} — ${pages} page${pages === 1 ? '' : 's'}`);
      if (pages > MAX_PAGES) {
        failed = true;
        console.error(
          `  CV (${target.lang.toUpperCase()}) exceeds ${MAX_PAGES} pages. Trim content in src/data/ or tighten src/components/CvDocument.astro.`,
        );
      }
    }
  }
} finally {
  await browser.close();
  server.close();
}

if (failed) process.exit(1);

/** Count pages and stamp document metadata (title, author, subject, keywords, language). */
async function finalizePdf(bytes, target) {
  const doc = await PDFDocument.load(bytes, { updateMetadata: false });
  const pages = doc.getPageCount();
  doc.setTitle(target.title);
  doc.setAuthor(AUTHOR);
  doc.setSubject(target.subject);
  doc.setKeywords(KEYWORDS);
  doc.setLanguage(target.lang);
  doc.setCreator('andresgmg.github.io — Astro + Playwright');
  const output = await doc.save();
  return { pages, output };
}

async function generateOgImage(browserInstance) {
  // Same self-hosted font as the site, inlined so no network access is needed.
  const fontPath = join(
    root,
    'node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2',
  );
  const fontData = (await readFile(fontPath)).toString('base64');
  const photoData = (await readFile(join(root, 'src/assets/profile.jpg'))).toString('base64');

  const html = `<!doctype html><html><head><meta charset="utf-8" />
    <style>
      @font-face {
        font-family: 'Inter Variable';
        font-style: normal;
        font-weight: 100 900;
        src: url(data:font/woff2;base64,${fontData}) format('woff2');
      }
      * { margin: 0; box-sizing: border-box; }
      body {
        width: 1200px; height: 630px;
        font-family: 'Inter Variable', system-ui, sans-serif;
        background: radial-gradient(120% 120% at 0% 0%, #1e1b4b 0%, #0b0f1a 55%, #020617 100%);
        color: #f4f6fb; display: flex; flex-direction: column;
        justify-content: center; padding: 88px 96px; position: relative;
      }
      .grid { display: grid; grid-template-columns: 1fr 276px; align-items: center; gap: 48px; }
      .top { display: flex; align-items: center; gap: 22px; margin-bottom: 30px; }
      .mark { width: 74px; height: 74px; border-radius: 16px; box-shadow: 0 12px 30px rgba(67, 56, 202, 0.45); }
      h1 { font-size: 68px; font-weight: 700; letter-spacing: -0.02em; line-height: 1.05; }
      p.role { font-size: 32px; font-weight: 600; color: #c7d2fe; margin-top: 22px; }
      p.tag { font-size: 23px; color: #94a3b8; margin-top: 18px; }
      .avatar-wrap { display: flex; justify-content: flex-end; }
      .avatar {
        width: 260px;
        height: 260px;
        object-fit: cover;
        border-radius: 28px;
        border: 3px solid rgba(148, 163, 184, 0.38);
        box-shadow: 0 18px 54px rgba(2, 6, 23, 0.55);
      }
      .url { position: absolute; bottom: 56px; left: 96px; font-size: 22px;
        font-weight: 600; color: #818cf8; }
    </style></head>
    <body>
      <div class="grid">
        <section>
          <div class="top">
            <img class="mark" src="${base}/favicon.svg" alt="AGMG logo" />
          </div>
          <h1>Andrés Márquez González</h1>
          <p class="role">Senior Full-Stack Developer &amp; Electronics Engineer</p>
          <p class="tag">Python · TypeScript · Generative AI · Scalable architectures</p>
        </section>
        <aside class="avatar-wrap">
          <img class="avatar" src="data:image/jpeg;base64,${photoData}" alt="Andrés Márquez" />
        </aside>
      </div>
      <div class="url">andresgmg.github.io</div>
    </body></html>`;

  const page = await browserInstance.newPage({ viewport: { width: 1200, height: 630 } });
  await page.setContent(html, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({
    path: join(publicDir, 'og-image.png'),
    clip: { x: 0, y: 0, width: 1200, height: 630 },
  });
  await page.close();
}
