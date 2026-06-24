import type { SkillCategory, SpokenLanguage } from './types';

export const skillCategories: SkillCategory[] = [
  {
    name: { en: 'Languages', es: 'Lenguajes' },
    skills: ['Python', 'JavaScript', 'TypeScript', 'C', 'C++', 'Rust', 'Java', 'PHP', 'C#', 'Ruby'],
  },
  {
    name: { en: 'Frameworks & Libraries', es: 'Frameworks y librerías' },
    skills: [
      'Django',
      'Django REST Framework',
      'FastAPI',
      'Flask',
      'Node.js',
      'Serverless',
      'React',
      'Next.js',
      'Angular',
      'Ionic',
      'Pandas',
      'Selenium',
      'Pytest',
      'Spark',
    ],
  },
  {
    name: { en: 'AI / Generative AI', es: 'IA / IA Generativa' },
    skills: ['Generative AI Agents', 'Google Gemini', 'LangChain', 'Web Scraping'],
  },
  {
    name: { en: 'Databases', es: 'Bases de datos' },
    skills: ['PostgreSQL', 'MySQL', 'MariaDB', 'SQLite', 'MongoDB', 'DynamoDB'],
  },
  {
    name: { en: 'Cloud & DevOps', es: 'Cloud y DevOps' },
    skills: [
      'AWS',
      'Docker',
      'CI/CD',
      'Git',
      'Vercel',
      'Render',
      'Railway',
      'Hostinger',
      'DNS',
      'SSL',
    ],
  },
  {
    name: { en: 'Methodologies & Tools', es: 'Metodologías y herramientas' },
    skills: [
      'Scrum',
      'Kanban',
      'Jira',
      'Trello',
      'Notion',
      'ClickUp',
      'Confluence',
      'Postman',
      'Swagger',
      'Stakeholder Management',
    ],
  },
];

export const spokenLanguages: SpokenLanguage[] = [
  {
    name: { en: 'Spanish', es: 'Español' },
    level: { en: 'Native', es: 'Nativo' },
  },
  {
    name: { en: 'English', es: 'Inglés' },
    level: { en: 'Advanced (B2)', es: 'Avanzado (B2)' },
  },
  {
    name: { en: 'Portuguese', es: 'Portugués' },
    level: { en: 'Intermediate', es: 'Intermedio' },
  },
  {
    name: { en: 'Chinnese', es: 'Chino Mandarín' },
    level: { en: 'Basic', es: 'Basico' },
  },
];
