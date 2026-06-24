/**
 * Generate the downloadable CV PDFs (EN + ES) and the social share image.
 *
 * Renders the print-optimized /cv/en and /cv/es routes from the built `dist/`
 * folder with headless Chromium (Playwright) and writes:
 *   - public/CV_2026_AGMG_EN.pdf
 *   - public/CV_2026_AGMG_ES.pdf
 *   - public/og-image.png
 *
 * Run `npm run build` first, then `npm run cv:pdf`. The PDFs are committed so
 * downloads stay stable and the deploy build stays lightweight.
 */
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { existsSync, statSync } from 'node:fs';
import { extname, join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const distDir = join(root, 'dist');
const publicDir = join(root, 'public');
const args = new Set(process.argv.slice(2));
const onlyOg = args.has('--only-og');

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

const browser = await chromium.launch();
try {
  if (!onlyOg) {
    const cvTargets = [
      { path: '/cv/en/', out: 'CV_2026_AGMG_EN.pdf' },
      { path: '/cv/es/', out: 'CV_2026_AGMG_ES.pdf' },
    ];

    for (const target of cvTargets) {
      const page = await browser.newPage();
      await page.goto(`${base}${target.path}`, { waitUntil: 'networkidle' });
      await page.emulateMedia({ media: 'print' });
      await page.pdf({
        path: join(publicDir, target.out),
        format: 'A4',
        printBackground: true,
        preferCSSPageSize: true,
      });
      await page.close();
      console.log(`✓ ${target.out}`);
    }
  }

  await generateOgImage(browser);
  console.log('✓ og-image.png');
} finally {
  await browser.close();
  server.close();
}

async function generateOgImage(browserInstance) {
  const html = `<!doctype html><html><head><meta charset="utf-8" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
    <style>
      * { margin: 0; box-sizing: border-box; }
      body {
        width: 1200px; height: 630px;
        font-family: 'Inter', system-ui, sans-serif;
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
          <img class="avatar" src="${base}/profile.jpg" alt="Andrés Márquez" />
        </aside>
      </div>
      <div class="url">andresgmg.github.io</div>
    </body></html>`;

  const page = await browserInstance.newPage({ viewport: { width: 1200, height: 630 } });
  await page.setContent(html, { waitUntil: 'networkidle' });
  await page.screenshot({
    path: join(publicDir, 'og-image.png'),
    clip: { x: 0, y: 0, width: 1200, height: 630 },
  });
  await page.close();
}
