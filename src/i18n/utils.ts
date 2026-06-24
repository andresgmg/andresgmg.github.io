import type { Lang } from '../data/types';
import { defaultLang, ui, type UiKey } from './ui';

/** Detect the active language from the URL (`/es/...` → 'es', otherwise 'en'). */
export function getLangFromUrl(url: URL): Lang {
  const segments = url.pathname.split('/').filter(Boolean);
  return segments[0] === 'es' ? 'es' : 'en';
}

/** Returns a `t(key)` function bound to a language, falling back to the default. */
export function useTranslations(lang: Lang) {
  return function t(key: UiKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/** Root path for a language: 'en' → '/', 'es' → '/es/'. */
export function basePath(lang: Lang): string {
  return lang === 'es' ? '/es/' : '/';
}

/** Anchor link to an on-page section in the correct language. */
export function anchor(lang: Lang, id: string): string {
  return `${basePath(lang)}#${id}`;
}

/** The other language. */
export function altLang(lang: Lang): Lang {
  return lang === 'es' ? 'en' : 'es';
}

const monthFormatters: Record<Lang, Intl.DateTimeFormat> = {
  en: new Intl.DateTimeFormat('en-US', { month: 'short', year: 'numeric', timeZone: 'UTC' }),
  es: new Intl.DateTimeFormat('es-ES', { month: 'short', year: 'numeric', timeZone: 'UTC' }),
};

/** Format a 'YYYY-MM' string as a localized "Mon YYYY" label. */
export function formatMonth(ym: string, lang: Lang): string {
  const [year, month] = ym.split('-').map(Number);
  const date = new Date(Date.UTC(year ?? 1970, (month ?? 1) - 1, 1));
  const formatted = monthFormatters[lang].format(date).replace(/\./g, '');
  return formatted.charAt(0).toUpperCase() + formatted.slice(1);
}

/** Format a start/end range; a null end renders as "Present"/"Presente". */
export function formatDateRange(start: string, end: string | null, lang: Lang): string {
  const t = useTranslations(lang);
  const endLabel = end ? formatMonth(end, lang) : t('present');
  return `${formatMonth(start, lang)} – ${endLabel}`;
}
