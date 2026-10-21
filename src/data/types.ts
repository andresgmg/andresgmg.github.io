export type Lang = 'en' | 'es';

export type Localized<T> = Record<Lang, T>;

export interface SocialLink {
  /** Stable key used to pick an inline icon. */
  icon: 'github' | 'linkedin' | 'instagram' | 'whatsapp' | 'email' | 'website';
  label: string;
  href: string;
  handle?: string;
}

export interface Profile {
  name: string;
  initials: string;
  email: string;
  phone: string;
  phoneHref: string;
  /** Canonical public URL of the portfolio (used in the CV header, JSON-LD and llms.txt). */
  website: string;
  location: Localized<string>;
  headline: Localized<string>;
  /** Short tagline shown under the name in the hero. */
  tagline: Localized<string>;
  summary: Localized<string>;
  /** Headline figures shown in the hero (years of experience is computed from `experience`). */
  stats: { value: string; label: Localized<string> }[];
  socials: SocialLink[];
  /**
   * Downloadable CV files per language. Served from the site root; generated into `dist/`
   * by `scripts/generate-cv-pdf.mjs` (never committed).
   */
  cv: Record<Lang, string>;
}

export type ExperienceKind = 'work' | 'freelance';

export interface Experience {
  company: string;
  url?: string;
  location: Localized<string>;
  /** Format: 'YYYY-MM'. */
  start: string;
  /** Format: 'YYYY-MM', or null when the role is current. */
  end: string | null;
  kind: ExperienceKind;
  title: Localized<string>;
  highlights: Localized<string[]>;
  stack: string[];
}

export interface SkillCategory {
  name: Localized<string>;
  /** Full list, shown on the website. */
  skills: string[];
  /** Optional shorter list used only in the PDF CV. Falls back to `skills`. */
  cvSkills?: string[];
}

export interface SpokenLanguage {
  name: Localized<string>;
  level: Localized<string>;
}

export interface Education {
  institution: string;
  degree: Localized<string>;
  location: Localized<string>;
  /** Format: 'YYYY'. */
  start: string;
  /** Format: 'YYYY'. */
  end: string;
}

export interface Certification {
  name: Localized<string>;
  issuer: string;
  /** Format: 'YYYY'. Optional until known. */
  year?: string;
  /** External verification URL (Coursera, Google Activate, etc.). */
  url?: string;
  /** Path of the certificate file under `public/certificates/`, e.g. '/certificates/2020-umich-python.pdf'. */
  file?: string;
}

export interface Project {
  name: string;
  description: Localized<string>;
  url?: string;
  repo?: string;
  tags: string[];
  featured: boolean;
}
