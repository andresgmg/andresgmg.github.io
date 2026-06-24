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
  location: Localized<string>;
  headline: Localized<string>;
  /** Short tagline shown under the name in the hero. */
  tagline: Localized<string>;
  summary: Localized<string>;
  socials: SocialLink[];
  /** Downloadable CV files per language, served from /public. */
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
  skills: string[];
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
}

export interface Project {
  name: string;
  description: Localized<string>;
  url?: string;
  repo?: string;
  tags: string[];
  featured: boolean;
}
