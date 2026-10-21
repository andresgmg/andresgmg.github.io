import {
  certifications,
  education,
  experience,
  profile,
  projects,
  skillCategories,
  spokenLanguages,
} from '../data';
import type { Lang } from '../data/types';
import { formatDateRange, useTranslations } from '../i18n/utils';

/**
 * Plain-text / Markdown renderers of the same content that powers the site and the PDF CV.
 * Used by the AI-friendly endpoints (`/llms.txt`, `/llms-full.txt`) and `/resume.json`.
 */

const SITE = profile.website.replace(/\/$/, '');

const lines = (...parts: (string | false | null | undefined)[]) =>
  parts.filter((p): p is string => typeof p === 'string').join('\n');

/** Full CV as Markdown, one language. */
export function cvMarkdown(lang: Lang): string {
  const t = useTranslations(lang);
  const work = experience.filter((e) => e.kind === 'work');
  const freelance = experience.filter((e) => e.kind === 'freelance');

  const role = (e: (typeof experience)[number]) =>
    lines(
      `### ${e.title[lang]} — ${e.company}`,
      `${formatDateRange(e.start, e.end, lang)} · ${e.location[lang]}${e.url ? ` · ${e.url}` : ''}`,
      '',
      ...e.highlights[lang].map((h) => `- ${h}`),
      '',
      `${t('experience.stack')}: ${e.stack.join(', ')}`,
      '',
    );

  return lines(
    `# ${profile.name}`,
    '',
    `**${profile.headline[lang]}** — ${profile.tagline[lang]}`,
    '',
    `- ${profile.location[lang]}`,
    `- ${profile.email}`,
    `- ${SITE}`,
    ...profile.socials
      .filter((s) => s.href.startsWith('http'))
      .map((s) => `- ${s.label}: ${s.href}`),
    `- CV (PDF): ${SITE}${profile.cv.en} · ${SITE}${profile.cv.es}`,
    '',
    `## ${t('cv.summary')}`,
    '',
    profile.summary[lang],
    '',
    `## ${t('cv.competencies')}`,
    '',
    ...skillCategories.map((c) => `- **${c.name[lang]}:** ${c.skills.join(', ')}`),
    '',
    `## ${t('cv.experience')}`,
    '',
    ...work.map(role),
    `## ${t('experience.freelance')}`,
    '',
    ...freelance.map(role),
    `## ${t('section.projects')}`,
    '',
    ...projects.map(
      (p) =>
        `- **${p.name}** — ${p.description[lang]}${p.url ? ` (${p.url})` : ''}${p.repo ? ` · ${p.repo}` : ''}`,
    ),
    '',
    `## ${t('cv.education')}`,
    '',
    ...education.map(
      (ed) =>
        `- ${ed.degree[lang]} — ${ed.institution}, ${ed.location[lang]} (${ed.start}–${ed.end})`,
    ),
    '',
    `## ${t('cv.certifications')}`,
    '',
    ...certifications.map(
      (c) =>
        `- ${c.name[lang]} — ${c.issuer}${c.year ? ` (${c.year})` : ''}${c.url ? ` · ${c.url}` : ''}`,
    ),
    '',
    `## ${t('cv.languages')}`,
    '',
    ...spokenLanguages.map((l) => `- ${l.name[lang]}: ${l.level[lang]}`),
    '',
  );
}

/** Short `/llms.txt` index following the llmstxt.org convention. */
export function llmsIndex(): string {
  const current = experience.filter((e) => e.end === null);
  const linkedin = profile.socials.find((s) => s.icon === 'linkedin');
  const github = profile.socials.find((s) => s.icon === 'github');

  return lines(
    `# ${profile.name}`,
    '',
    `> ${profile.headline.en}. ${profile.summary.en}`,
    '',
    `${profile.name} (Andrés Márquez, @andresgmg) is based in ${profile.location.en}. Bilingual portfolio: English at ${SITE}/ and Spanish at ${SITE}/es/.`,
    '',
    '## Current roles',
    '',
    ...current.map(
      (e) => `- ${e.title.en} at ${e.company} (${formatDateRange(e.start, e.end, 'en')})`,
    ),
    '',
    '## Core skills',
    '',
    ...skillCategories.map((c) => `- ${c.name.en}: ${c.skills.join(', ')}`),
    '',
    '## Resources',
    '',
    `- [Full CV (Markdown, EN + ES)](${SITE}/llms-full.txt): every role, highlight, skill, degree and certification`,
    `- [JSON Resume](${SITE}/resume.json): machine-readable CV (jsonresume.org schema)`,
    `- [CV PDF — English](${SITE}${profile.cv.en})`,
    `- [CV PDF — Spanish](${SITE}${profile.cv.es})`,
    github && `- [GitHub](${github.href})`,
    linkedin && `- [LinkedIn](${linkedin.href})`,
    `- Contact: ${profile.email}`,
    '',
    '## Optional',
    '',
    `- [Portfolio (English)](${SITE}/)`,
    `- [Portafolio (Español)](${SITE}/es/)`,
    '',
  );
}

/** CV in the JSON Resume schema (https://jsonresume.org/schema). English strings. */
export function jsonResume(imageUrl?: string) {
  const lang: Lang = 'en';
  const toDate = (ym: string) => `${ym}-01`;
  const linkedin = profile.socials.find((s) => s.icon === 'linkedin');
  const github = profile.socials.find((s) => s.icon === 'github');

  return {
    $schema: 'https://raw.githubusercontent.com/jsonresume/resume-schema/v1.0.0/schema.json',
    basics: {
      name: profile.name,
      label: profile.headline[lang],
      image: imageUrl,
      email: profile.email,
      phone: profile.phone,
      url: SITE,
      summary: profile.summary[lang],
      location: { city: 'Santiago', countryCode: 'CL' },
      profiles: [
        github && { network: 'GitHub', username: 'andresgmg', url: github.href },
        linkedin && { network: 'LinkedIn', username: 'andresgmg', url: linkedin.href },
      ].filter(Boolean),
    },
    work: experience.map((e) => ({
      name: e.company,
      position: e.title[lang],
      url: e.url,
      location: e.location[lang],
      startDate: toDate(e.start),
      endDate: e.end ? toDate(e.end) : undefined,
      summary: e.kind === 'freelance' ? 'Freelance / consulting' : undefined,
      highlights: e.highlights[lang],
      keywords: e.stack,
    })),
    education: education.map((ed) => ({
      institution: ed.institution,
      area: 'Electronics Engineering',
      studyType: 'Bachelor',
      startDate: ed.start,
      endDate: ed.end,
    })),
    certificates: certifications.map((c) => ({
      name: c.name[lang],
      issuer: c.issuer,
      date: c.year,
      url: c.url,
    })),
    skills: skillCategories.map((c) => ({ name: c.name[lang], keywords: c.skills })),
    languages: spokenLanguages.map((l) => ({ language: l.name[lang], fluency: l.level[lang] })),
    projects: projects.map((p) => ({
      name: p.name,
      description: p.description[lang],
      url: p.url ?? p.repo,
      keywords: p.tags,
    })),
    meta: { canonical: `${SITE}/resume.json`, lastModified: new Date().toISOString() },
  };
}
