import type { Project } from './types';

/**
 * Featured projects. Only verifiable, real items are listed here.
 *
 * TODO (Andrés): add your own featured projects/repositories. Copy the shape below:
 *   {
 *     name: 'Project name',
 *     description: { en: 'What it does and your impact.', es: 'Qué hace y tu impacto.' },
 *     url: 'https://live-demo.com',        // optional
 *     repo: 'https://github.com/you/repo', // optional
 *     tags: ['Python', 'FastAPI'],
 *     featured: true,
 *   },
 */
export const projects: Project[] = [
  {
    name: 'Facelad',
    description: {
      en: 'Digital solutions studio I co-founded as CTO — building web products and automation for 20+ clients with a multidisciplinary team.',
      es: 'Estudio de soluciones digitales que cofundé como CTO — productos web y automatización para más de 20 clientes con un equipo multidisciplinario.',
    },
    url: 'https://facelad.com',
    tags: ['Next.js', 'TypeScript', 'FastAPI', 'Python'],
    featured: true,
  },
  {
    name: 'Personal Portfolio',
    description: {
      en: 'This bilingual (EN/ES) portfolio, built with Astro and continuously deployed to GitHub Pages via GitHub Actions.',
      es: 'Este portafolio bilingüe (EN/ES), construido con Astro y desplegado de forma continua en GitHub Pages mediante GitHub Actions.',
    },
    url: 'https://andresgmg.github.io',
    repo: 'https://github.com/andresgmg/andresgmg.github.io',
    tags: ['Astro', 'TypeScript', 'GitHub Actions', 'CI/CD'],
    featured: true,
  },
];
