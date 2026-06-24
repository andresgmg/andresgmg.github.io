# andresgmg.github.io — Personal Portfolio

Professional, minimalist and ATS-friendly portfolio for **Andrés Gerardo Márquez González** —
Senior Full-Stack Developer & Electronics Engineer. Built with [Astro](https://astro.build),
bilingual (English / Spanish), and continuously deployed to **GitHub Pages** via GitHub Actions.

🌐 Live site: <https://andresgmg.github.io>

## ✨ Features

- **Bilingual (EN/ES)** with Astro i18n — English at `/`, Spanish at `/es/`.
- **SEO & ATS optimized** — semantic HTML, Open Graph/Twitter cards, canonical + `hreflang`,
  `sitemap`, `robots.txt`, and JSON-LD `Person` structured data.
- **Light / dark theme** with system preference detection and no flash on load.
- **Downloadable CVs** (EN + ES) as selectable, ATS-readable PDFs generated from the same
  content source as the website.
- **Single content source** — everything renders from typed data in `src/data/`.
- Zero UI frameworks: Astro + plain CSS for maximum performance.

## 🧱 Tech stack

Astro · TypeScript · CSS · `@astrojs/sitemap` · Playwright (CV PDF generation) ·
Prettier · GitHub Actions · GitHub Pages.

## 📁 Project structure

```text
/
├── public/                 # Static assets (CV PDFs, og-image, favicon, photo, robots.txt)
├── scripts/
│   └── generate-cv-pdf.mjs # Renders /cv/* routes to PDFs + builds og-image (Playwright)
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

| Command                | Action                                                |
| :--------------------- | :---------------------------------------------------- |
| `npm install`          | Install dependencies                                  |
| `npm run dev`          | Start the dev server at `localhost:4321`              |
| `npm run build`        | Build the production site to `./dist/`                |
| `npm run preview`      | Preview the production build locally                  |
| `npm run check`        | Type-check with `astro check`                         |
| `npm run format`       | Format the codebase with Prettier                     |
| `npm run format:check` | Verify formatting (used by CI)                        |
| `npm run cv:pdf`       | Regenerate the CV PDFs and `og-image.png` (see below) |

## ✏️ Editing content

All content lives in `src/data/` (typed, bilingual). Edit these and both the website and the
CV update from the same source:

- `profile.ts` — name, contact, headline, summary, socials, CV file paths.
- `experience.ts` — work & freelance roles (EN/ES highlights + stack).
- `skills.ts` — skill categories + spoken languages.
- `education.ts` — degrees + certifications.
- `projects.ts` — featured projects (add your own here).

UI labels (buttons, section titles) live in `src/i18n/ui.ts`.

## 📄 Regenerating the CVs

The downloadable CVs (`public/CV_2026_AMG_EN.pdf` / `_ES.pdf`) and the social share image are
generated from the print routes `/cv/en` and `/cv/es` using headless Chromium.

```sh
npm run build                  # build the site first
npx playwright install chromium # one-time: install the browser
npm run cv:pdf                 # writes the PDFs + og-image.png into public/
```

Commit the regenerated files so download links stay stable and the deploy stays lightweight.

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
