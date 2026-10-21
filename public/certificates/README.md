# Certificates

Drop certificate files here and reference them from `src/data/education.ts`:

```ts
{
  name: { en: 'Python for Everybody', es: 'Python for Everybody' },
  issuer: 'University of Michigan',
  year: '2020',                                   // optional, shown on the site and in the CV
  url: 'https://coursera.org/verify/XXXX',        // optional: external verification link
  file: '/certificates/2020-umich-python-for-everybody.pdf', // optional: file in this folder
}
```

Naming convention: `YYYY-issuer-course-name.pdf` (lowercase, hyphens, no spaces or accents).
PDF or JPG/PNG. Keep each file under ~1 MB so the site stays fast.

The site shows a "View certificate" link when `url` or `file` is present (`url` wins).
