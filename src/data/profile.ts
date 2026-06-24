import type { Profile } from './types';

export const profile: Profile = {
  name: 'Andrés Gerardo Márquez González',
  initials: 'AM',
  email: 'andres.gmg1997@gmail.com',
  phone: '+56 9 9127 9911',
  phoneHref: 'tel:+56991279911',
  location: {
    en: 'Santiago, Chile',
    es: 'Santiago, Chile',
  },
  headline: {
    en: 'Senior Full-Stack Developer & Electronics Engineer',
    es: 'Senior Full-Stack Developer e Ingeniero en Electrónica',
  },
  tagline: {
    en: 'Python · TypeScript · Generative AI · Scalable architectures',
    es: 'Python · TypeScript · IA Generativa · Arquitecturas escalables',
  },
  summary: {
    en: 'Electronics Engineer and Senior Full-Stack Developer with 5+ years of experience designing and leading scalable, high-availability architectures. Specialized in the Python and TypeScript ecosystems with a strong focus on Generative AI solutions (Gemini, LangChain). Proven track record managing international clients and communicating technically in English, with a solid background in embedded systems bridging software and robotics.',
    es: 'Ingeniero en Electrónica y Senior Full-Stack Developer con más de 5 años de experiencia diseñando y liderando arquitecturas escalables y de alta disponibilidad. Especializado en los ecosistemas de Python y TypeScript, con un fuerte enfoque en soluciones de IA Generativa (Gemini, LangChain). Trayectoria comprobada gestionando clientes internacionales y comunicando técnicamente en inglés, con una sólida base en sistemas embebidos que conecta software y robótica.',
  },
  socials: [
    {
      icon: 'github',
      label: 'GitHub',
      href: 'https://github.com/andresgmg',
      handle: '@andresgmg',
    },
    {
      icon: 'linkedin',
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/andresgmg',
      handle: 'in/andresgmg',
    },
    {
      icon: 'email',
      label: 'Email',
      href: 'mailto:andres.gmg1997@gmail.com',
      handle: 'andres.gmg1997@gmail.com',
    },
    {
      icon: 'whatsapp',
      label: 'WhatsApp',
      href: 'https://wa.me/56991279911',
      handle: '+56 9 9127 9911',
    },
    {
      icon: 'instagram',
      label: 'Instagram',
      href: 'https://instagram.com/andres.gmg',
      handle: '@andres.gmg',
    },
  ],
  cv: {
    en: '/CV_2026_AMG_EN.pdf',
    es: '/CV_2026_AMG_ES.pdf',
  },
};
