# andresgmg.github.io — Personal Portfolio

Professional, minimalist and ATS-friendly portfolio for **Andrés Gerardo Márquez González** —
Senior Full-Stack Developer & Electronics Engineer. Built with [Astro](https://astro.build),
bilingual (English / Spanish), and continuously deployed to **GitHub Pages** via GitHub Actions.

🌐 Live site: <https://andresgmg.github.io>

![Open Graph preview](public/og-image.png)

## ✨ Features

- **Bilingual (EN/ES)** with Astro i18n — English at `/`, Spanish at `/es/`.
- **SEO & ATS optimized** — semantic HTML, Open Graph/Twitter cards, canonical + `hreflang`,
  `sitemap`, `robots.txt`, and JSON-LD `Person` structured data.
- **Light / dark theme** with system preference detection and no flash on load.
- **Downloadable CVs** (EN + ES) as selectable, tagged, ATS-readable 2-page PDFs generated in CI
  from the same content source as the website — they can never drift from the site.
- **Single content source** — everything renders from typed data in `src/data/`.
- Zero UI frameworks: Astro + plain CSS for maximum performance.

## 🧱 Tech stack

Astro · TypeScript · CSS · `@astrojs/sitemap` · `@fontsource-variable/inter` (self-hosted font) ·
Playwright + `pdf-lib` (CV PDF generation) · Prettier · GitHub Actions · GitHub Pages.

## 📁 Project structure

```text
/
├── public/                 # Static assets (og-image, favicon, photo, robots.txt, certificates/)
├── scripts/
│   └── generate-cv-pdf.mjs # Renders /cv/* routes to dist/*.pdf (CI) + builds og-image (Playwright)
├── src/
│   ├── components/         # UI sections (Hero, Experience, Skills, …) + Icon
│   ├── data/               # Single source of truth (profile, experience, skills, …)
│   ├── i18n/               # UI strings dictionary + helpers
│   ├── layouts/            # Layout.astro (site) + CvLayout.astro (print)
│   ├── pages/              # index.astro (EN), es/index.astro (ES), cv/en, cv/es
│   └── styles/             # global.css design system
├── astro.config.mjs        # site + i18n + sitemap
└── .github/workflows/      # ci.yml (PRs) + deploy.yml (Pages)
```

## 🧞 Commands

| Command                | Action                                      |
| :--------------------- | :------------------------------------------ |
| `npm install`          | Install dependencies                        |
| `npm run dev`          | Start the dev server at `localhost:4321`    |
| `npm run build`        | Build the production site to `./dist/`      |
| `npm run preview`      | Preview the production build locally        |
| `npm run check`        | Type-check with `astro check`               |
| `npm run format`       | Format the codebase with Prettier           |
| `npm run format:check` | Verify formatting (used by CI)              |
| `npm run cv:pdf`       | Render the CV PDFs into `dist/` (see below) |
| `npm run cv:og`        | Regenerate `public/og-image.png`            |

## ✏️ Editing content

All content lives in `src/data/` (typed, bilingual). Edit these and both the website and the
CV update from the same source:

- `profile.ts` — name, contact, headline, summary, socials, CV file paths.
- `experience.ts` — work & freelance roles (EN/ES highlights + stack).
- `skills.ts` — skill categories + spoken languages (`cvSkills` = shorter list used only in the PDF).
- `education.ts` — degrees + certifications (optional `year`, `url`, `file` under `public/certificates/`).
- `projects.ts` — featured projects (add your own here).

UI labels (buttons, section titles) live in `src/i18n/ui.ts`.

## 📄 CV PDFs

The downloadable CVs (`/Andres_Marquez_CV_EN.pdf`, `/Andres_Marquez_CV_ES.pdf`) are **not committed**.
On every deploy, CI renders the print routes `/cv/en` and `/cv/es` with headless Chromium into
`dist/`, stamps PDF metadata (title, author, subject, keywords, language) and **fails the build if a
CV exceeds 2 pages**, so content changes in `src/data/` can never silently overflow.

To preview them locally:

```sh
npm run build                    # build the site first
npx playwright install chromium  # one-time: install the browser
npm run cv:pdf                   # writes dist/*.pdf and prints the page count of each
```

Use `CHROMIUM_PATH=/path/to/chrome npm run cv:pdf` to reuse a locally installed Chromium instead.
The share image is separate: `npm run cv:og` writes `public/og-image.png`, which is committed.

The PDFs are excluded from search engines via `robots.txt` (they contain contact details) but stay
downloadable from the site.

## 🚀 Deployment (CI/CD)

- **`ci.yml`** runs on pull requests and feature branches: install → format check →
  `astro check` → build.
- **`deploy.yml`** runs on every push to `main` (and manual dispatch): builds the site and
  deploys it to GitHub Pages with the official Pages actions.

### One-time setup required

GitHub Pages on the free plan requires a **public** repository, and the Pages source must be
set to **GitHub Actions**:

1. **Make the repository public** — Settings → General → Danger Zone → _Change visibility_.
   (User sites served at `username.github.io` are public websites. Private Pages requires a
   paid plan.)
2. **Set the Pages source** — Settings → Pages → _Build and deployment_ → Source: **GitHub Actions**.

After that, every push to `main` publishes automatically to <https://andresgmg.github.io>.

## 📝 License

See [LICENSE](./LICENSE).
