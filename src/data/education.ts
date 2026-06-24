import type { Certification, Education } from './types';

export const education: Education[] = [
  {
    institution: 'Universidad Simón Bolívar',
    degree: {
      en: 'B.S. in Electronics Engineering',
      es: 'Ingeniería en Electrónica',
    },
    location: { en: 'Venezuela', es: 'Venezuela' },
    start: '2014',
    end: '2019',
  },
];

export const certifications: Certification[] = [
  {
    name: { en: 'English Proficiency (B2)', es: 'Inglés nivel B2' },
    issuer: 'Centro Venezolano Americano',
  },
  {
    name: { en: 'Python for Everybody', es: 'Python for Everybody' },
    issuer: 'University of Michigan',
  },
  {
    name: { en: 'Cloud Computing', es: 'Cloud Computing' },
    issuer: 'Escuela de Organización Industrial · Google Activate',
  },
  {
    name: { en: 'Mobile App Development', es: 'Desarrollo de apps móviles' },
    issuer: 'Universidad Complutense de Madrid · Google Activate',
  },
  {
    name: {
      en: 'Cybersecurity in Telework',
      es: 'Ciberseguridad en el teletrabajo',
    },
    issuer: 'INCIBE · Google Activate',
  },
  {
    name: {
      en: 'Digital Transformation for Employment',
      es: 'Transformación digital para el empleo',
    },
    issuer: 'Escuela de Organización Industrial · Google Activate',
  },
  {
    name: { en: 'Personal Productivity', es: 'Productividad personal' },
    issuer: 'Fundación Santa María la Real · Google Activate',
  },
  {
    name: {
      en: 'Digital Skills for Professionals',
      es: 'Competencias digitales para profesionales',
    },
    issuer: 'Fundación Santa María la Real · Google Activate',
  },
];
