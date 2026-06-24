import type { Lang } from '../data/types';

export const languages: Record<Lang, string> = {
  en: 'English',
  es: 'Español',
};

export const defaultLang: Lang = 'en';

type Dict = Record<string, string>;

const en = {
  'skip.toContent': 'Skip to content',

  'nav.about': 'About',
  'nav.experience': 'Experience',
  'nav.skills': 'Skills',
  'nav.projects': 'Projects',
  'nav.education': 'Education',
  'nav.contact': 'Contact',

  'hero.greeting': 'Hi, I’m',
  'hero.cta.contact': 'Get in touch',
  'hero.cta.projects': 'View projects',
  'hero.cta.downloadEn': 'Download CV (EN)',
  'hero.cta.downloadEs': 'Download CV (ES)',
  'hero.location': 'Based in',

  'section.about': 'About',
  'section.experience': 'Experience',
  'section.skills': 'Skills',
  'section.projects': 'Featured Projects',
  'section.education': 'Education',
  'section.contact': 'Contact',

  'experience.work': 'Work Experience',
  'experience.freelance': 'Freelance & Consulting',
  'experience.stack': 'Stack',

  'education.degrees': 'Education',
  'education.certifications': 'Certifications',

  'skills.languages': 'Languages',

  'projects.visit': 'Visit',
  'projects.code': 'Code',

  'contact.lead': 'Open to senior full-stack and AI engineering roles. Let’s talk.',
  'contact.emailMe': 'Email me',

  present: 'Present',

  'theme.toggle': 'Toggle dark mode',
  'theme.dark': 'Dark',
  'theme.light': 'Light',
  'theme.switchToDark': 'Switch to dark mode',
  'theme.switchToLight': 'Switch to light mode',
  'lang.switch': 'Switch language',
  'lang.switchToSpanish': 'Switch to Spanish',
  'lang.switchToEnglish': 'Switch to English',

  'footer.builtWith': 'Built with Astro · Deployed on GitHub Pages',
  'footer.rights': 'All rights reserved.',

  'meta.description':
    'Andrés Márquez — Senior Full-Stack Developer & Electronics Engineer specialized in Python, TypeScript and Generative AI. Building scalable, high-availability software.',

  'cv.summary': 'Professional Summary',
  'cv.competencies': 'Core Competencies',
  'cv.experience': 'Professional Experience',
  'cv.education': 'Education',
  'cv.certifications': 'Certifications',
  'cv.languages': 'Languages',
  'cv.backToSite': 'Back to portfolio',
  'cv.print': 'Print / Save as PDF',
} satisfies Dict;

export type UiKey = keyof typeof en;

const es: Record<UiKey, string> = {
  'skip.toContent': 'Saltar al contenido',

  'nav.about': 'Sobre mí',
  'nav.experience': 'Experiencia',
  'nav.skills': 'Habilidades',
  'nav.projects': 'Proyectos',
  'nav.education': 'Educación',
  'nav.contact': 'Contacto',

  'hero.greeting': 'Hola, soy',
  'hero.cta.contact': 'Contáctame',
  'hero.cta.projects': 'Ver proyectos',
  'hero.cta.downloadEn': 'Descargar CV (EN)',
  'hero.cta.downloadEs': 'Descargar CV (ES)',
  'hero.location': 'Ubicado en',

  'section.about': 'Sobre mí',
  'section.experience': 'Experiencia',
  'section.skills': 'Habilidades',
  'section.projects': 'Proyectos destacados',
  'section.education': 'Educación',
  'section.contact': 'Contacto',

  'experience.work': 'Experiencia laboral',
  'experience.freelance': 'Freelance y consultoría',
  'experience.stack': 'Stack',

  'education.degrees': 'Educación',
  'education.certifications': 'Certificaciones',

  'skills.languages': 'Idiomas',

  'projects.visit': 'Visitar',
  'projects.code': 'Código',

  'contact.lead':
    'Disponible para roles senior de desarrollo full-stack e ingeniería de IA. Conversemos.',
  'contact.emailMe': 'Escríbeme',

  present: 'Presente',

  'theme.toggle': 'Alternar modo oscuro',
  'theme.dark': 'Oscuro',
  'theme.light': 'Claro',
  'theme.switchToDark': 'Cambiar a modo oscuro',
  'theme.switchToLight': 'Cambiar a modo claro',
  'lang.switch': 'Cambiar idioma',
  'lang.switchToSpanish': 'Cambiar a Español',
  'lang.switchToEnglish': 'Cambiar a Inglés',

  'footer.builtWith': 'Hecho con Astro · Desplegado en GitHub Pages',
  'footer.rights': 'Todos los derechos reservados.',

  'meta.description':
    'Andrés Márquez — Senior Full-Stack Developer e Ingeniero en Electrónica, especializado en Python, TypeScript e IA Generativa. Software escalable y de alta disponibilidad.',

  'cv.summary': 'Resumen Profesional',
  'cv.competencies': 'Competencias Clave',
  'cv.experience': 'Experiencia Profesional',
  'cv.education': 'Educación',
  'cv.certifications': 'Certificaciones',
  'cv.languages': 'Idiomas',
  'cv.backToSite': 'Volver al portafolio',
  'cv.print': 'Imprimir / Guardar como PDF',
};

export const ui: Record<Lang, Record<UiKey, string>> = { en, es };
