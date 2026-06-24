import type { Experience } from './types';

/**
 * Professional experience, rewritten for ATS readability (strong action verbs +
 * quantified impact). Facts (companies, dates, metrics, stacks) come straight from
 * the source CVs and must not be altered.
 */
export const experience: Experience[] = [
  {
    company: 'Zenta Group',
    url: 'https://zentagroup.com/',
    location: { en: 'Santiago, Chile', es: 'Santiago, Chile' },
    start: '2025-03',
    end: null,
    kind: 'work',
    title: {
      en: 'Senior Software Engineer — Copec Suyay Project',
      es: 'Senior Software Engineer — Proyecto Copec Suyay',
    },
    highlights: {
      en: [
        'Build and scale the Copec Suyay application under Agile methodologies, ensuring a maintainable and scalable architecture.',
        'Designed and implemented robust JWT + Django authentication, hardening security across user session management.',
        'Developed Generative AI agents with Gemini and LangChain that automate the creation of user profiles and technical descriptions from user data.',
      ],
      es: [
        'Desarrollo y escalo la aplicación del proyecto Copec Suyay bajo metodologías Agile, asegurando una arquitectura mantenible y escalable.',
        'Diseñé e implementé autenticación robusta con JWT y Django, reforzando la seguridad en el manejo de sesiones de usuario.',
        'Desarrollé agentes de IA Generativa con Gemini y LangChain que automatizan la creación de perfiles y descripciones técnicas a partir de datos de usuario.',
      ],
    },
    stack: ['FastAPI', 'Django', 'LangChain', 'Docker', 'Jira', 'GitHub'],
  },
  {
    company: 'Sendos.ai',
    location: { en: 'Mexico · Remote', es: 'México · Remoto' },
    start: '2024-10',
    end: '2025-03',
    kind: 'work',
    title: {
      en: 'Senior Software Engineer',
      es: 'Senior Software Engineer',
    },
    highlights: {
      en: [
        'Designed and implemented the authentication and identity-management ecosystem with Django and JWT, ensuring session integrity and scalability.',
        'Built a Generative AI agent (Gemini, LangChain) that auto-generates job descriptions personalized to each user’s experience.',
        'Optimized the software development life cycle with Docker and Agile coordination, enabling continuous software delivery.',
      ],
      es: [
        'Diseñé e implementé el ecosistema de autenticación y gestión de identidades con Django y JWT, asegurando integridad y escalabilidad de las sesiones.',
        'Construí un agente de IA Generativa (Gemini, LangChain) que genera descripciones de puestos personalizadas según la experiencia de cada usuario.',
        'Optimicé el ciclo de vida de desarrollo con Docker y coordinación Agile, habilitando la entrega continua de software.',
      ],
    },
    stack: ['FastAPI', 'Django', 'LangChain', 'Docker', 'Jira', 'GitHub'],
  },
  {
    company: 'Next4',
    location: { en: 'Santiago, Chile', es: 'Santiago, Chile' },
    start: '2024-01',
    end: '2024-10',
    kind: 'work',
    title: {
      en: 'IT Support & Systems Coordinator',
      es: 'Coordinador de TI y Sistemas',
    },
    highlights: {
      en: [
        'Coordinated Agile squads, leading communication and goal alignment across multidisciplinary engineering teams.',
        'Managed end-to-end IT infrastructure, including systems-integration administration, preventive-maintenance plans, and advanced technical support.',
        'Consulted on and optimized bidirectional integrations for critical logistics flows: fulfillment, crossdock, overflow, and distribution networks.',
      ],
      es: [
        'Coordiné células de desarrollo Agile, liderando la comunicación y la alineación de objetivos entre equipos de ingeniería multidisciplinarios.',
        'Gestioné la infraestructura de TI de extremo a extremo: administración de integraciones de sistemas, planes de mantenimiento preventivo y soporte técnico avanzado.',
        'Asesoré y optimicé integraciones bidireccionales para flujos logísticos críticos: fulfillment, crossdock, overflow y redes de distribución.',
      ],
    },
    stack: ['Jira', 'Trello', 'Notion', 'Git', 'Beetrack', 'EcartAPI', 'REST APIs'],
  },
  {
    company: 'Next4',
    location: { en: 'Santiago, Chile', es: 'Santiago, Chile' },
    start: '2022-07',
    end: '2023-12',
    kind: 'work',
    title: {
      en: 'Full-Stack Developer',
      es: 'Desarrollador Full-Stack',
    },
    highlights: {
      en: [
        'Architected and built 50% of the front-end ecosystem for the company’s core logistics application, focusing on use-case definition and UX/UI.',
        'Restructured and optimized back-end logic — adding advanced validation and pagination — improving code efficiency and architectural precision.',
        'Designed a cascading deactivation system that automates provider-status management across the logistics flow, improving operational efficiency.',
      ],
      es: [
        'Diseñé y desarrollé el 50% del ecosistema front-end de la aplicación logística principal, con foco en la definición de casos de uso y UX/UI.',
        'Reestructuré y optimicé la lógica back-end —validaciones avanzadas y paginación— mejorando la eficiencia del código y la precisión arquitectónica.',
        'Diseñé un sistema de desactivación en cascada que automatiza la gestión de estados de proveedores en el flujo logístico, mejorando la eficiencia operativa.',
      ],
    },
    stack: ['Node.js', 'Serverless', 'Python', 'Flask', 'Angular', 'Ionic', 'REST APIs'],
  },
  {
    company: 'Haintech Solution',
    location: { en: 'Chile', es: 'Chile' },
    start: '2022-02',
    end: '2022-05',
    kind: 'work',
    title: {
      en: 'Mid-Level Python Developer',
      es: 'Desarrollador Python Semi-Senior',
    },
    highlights: {
      en: [
        'Built REST API endpoints for internal and external consumption.',
        'Implemented Web Scraping pipelines in Python (BeautifulSoup) for data collection.',
        'Generated QA test cases from use-case analysis using Python and Excel.',
        'Improved team workflow by contributing creative technical proposals.',
      ],
      es: [
        'Construí endpoints de API REST para consumo interno y externo.',
        'Implementé procesos de Web Scraping en Python (BeautifulSoup) para la recolección de datos.',
        'Generé casos de prueba QA a partir del análisis de casos de uso con Python y Excel.',
        'Mejoré el flujo de trabajo del equipo aportando propuestas técnicas creativas.',
      ],
    },
    stack: ['Python', 'Pandas', 'BeautifulSoup', 'Flask', 'Swagger', 'Node.js', 'JavaScript'],
  },
  {
    company: 'Arawato Media',
    location: { en: 'Venezuela', es: 'Venezuela' },
    start: '2019-07',
    end: '2019-12',
    kind: 'work',
    title: {
      en: 'Junior Python Developer',
      es: 'Desarrollador Python Junior',
    },
    highlights: {
      en: [
        'Created REST APIs for internal consumption in a movie-rental platform.',
        'Contributed technical insights grounded in research and data collection.',
        'Applied Kanban methodology throughout client project delivery.',
      ],
      es: [
        'Creé APIs REST para consumo interno en una plataforma de alquiler de películas.',
        'Aporté insights técnicos basados en investigación y recopilación de datos.',
        'Apliqué metodología Kanban durante la entrega del proyecto del cliente.',
      ],
    },
    stack: ['Python', 'Django', 'Django REST Framework', 'Tkinter', 'Pandas'],
  },
  {
    company: 'Facelad SPA',
    url: 'https://facelad.com',
    location: { en: 'International · Remote', es: 'Internacional · Remoto' },
    start: '2022-04',
    end: null,
    kind: 'freelance',
    title: {
      en: 'Co-Founder / CTO',
      es: 'Co-Founder / CTO',
    },
    highlights: {
      en: [
        'Grew the client portfolio by 75% under Agile delivery while sustaining a 100% satisfaction rate.',
        'Built and led a multidisciplinary team of 7 specialists, fostering a high-performance environment.',
        'Advised 20+ business owners on process automation, digitalization, and UX optimization.',
      ],
      es: [
        'Aumenté la cartera de clientes en un 75% con entrega Agile, manteniendo una tasa de satisfacción del 100%.',
        'Formé y lideré un equipo multidisciplinario de 7 especialistas, fomentando un entorno de alto rendimiento.',
        'Asesoré a más de 20 empresarios en automatización de procesos, digitalización y optimización de UX.',
      ],
    },
    stack: ['JavaScript', 'Next.js', 'TypeScript', 'Python', 'Flask', 'FastAPI'],
  },
  {
    company: 'Astroluv',
    location: { en: 'Spain · Remote', es: 'España · Remoto' },
    start: '2025-01',
    end: null,
    kind: 'freelance',
    title: {
      en: 'Software Engineer & DevOps Consultant',
      es: 'Software Engineer y Consultor DevOps',
    },
    highlights: {
      en: [
        'Develop custom software solutions and provide specialized technical support for the Astroluv ecosystem.',
        'Drive DevOps and database administration (DBA), ensuring service stability and efficient deployments.',
        'Lead technical communication and status reporting in English across international milestone meetings.',
        'Optimize workflows and data persistence to guarantee information integrity and infrastructure scalability.',
      ],
      es: [
        'Desarrollo soluciones de software a medida y brindo soporte técnico especializado para el ecosistema Astroluv.',
        'Lidero DevOps y la administración de bases de datos (DBA), asegurando la estabilidad del servicio y despliegues eficientes.',
        'Gestiono la comunicación técnica y los reportes de estado en inglés en reuniones internacionales de seguimiento.',
        'Optimizo flujos de trabajo y la persistencia de datos para garantizar la integridad de la información y la escalabilidad de la infraestructura.',
      ],
    },
    stack: ['Python', 'DevOps', 'SQL', 'Database Management'],
  },
  {
    company: 'Vedhome',
    location: { en: 'Chile', es: 'Chile' },
    start: '2021-01',
    end: '2022-01',
    kind: 'freelance',
    title: {
      en: 'IT Support',
      es: 'Soporte TI',
    },
    highlights: {
      en: [
        'Enhanced e-commerce UX and checkout flow, increasing conversion efficiency.',
        'Reduced system errors and warnings, driving a 46% improvement in store performance.',
        'Maintained AWS infrastructure (LightSail, Route 53) and implemented Git-based CI/CD with GitHub, Vercel, and AWS pipelines.',
        'Optimized front-end/back-end communication by introducing GraphQL over a WordPress/WooCommerce backend.',
      ],
      es: [
        'Mejoré la UX y el flujo de checkout del e-commerce, aumentando la eficiencia de conversión.',
        'Reduje errores y advertencias del sistema, logrando una mejora del 46% en el rendimiento de la tienda.',
        'Mantuve infraestructura AWS (LightSail, Route 53) e implementé CI/CD basado en Git con GitHub, Vercel y pipelines de AWS.',
        'Optimicé la comunicación front-end/back-end introduciendo GraphQL sobre un backend WordPress/WooCommerce.',
      ],
    },
    stack: ['Next.js', 'JavaScript', 'TypeScript', 'WordPress', 'WooCommerce', 'AWS'],
  },
];
