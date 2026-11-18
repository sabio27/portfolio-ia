import type { T } from './i18n'

export const person = {
  name: 'Koffi Ambroise',
  displayName: 'Koffi K. Ambroise',
  fullName: 'Koffi Koffi Ambroise',
  role: { fr: 'Ingénieur IA et Data Science', en: 'AI and Data Science Engineer' } as T,
  email: 'ambroise.kf@gmail.com',
  phones: [
    { label: '+225 05 44 80 17 44', href: 'tel:+2250544801744' },
    { label: '+225 01 73 08 26 62', href: 'tel:+2250173082662' },
  ],
  whatsapp: 'https://wa.me/message/ORM6MH5AYGLML1',
  linkedin: 'https://linkedin.com/in/ambroisekoffi',
  linkedinLabel: 'ambroisekoffi',
  github: 'https://github.com/sabio27',
  githubLabel: 'sabio27',
  location: "Abidjan, Côte d'Ivoire",
}

export const nav: { path: string; label: T }[] = [
  { path: '/', label: { fr: 'Accueil', en: 'Home' } },
  { path: '/about', label: { fr: 'À propos', en: 'About' } },
  { path: '/experience', label: { fr: 'Expérience', en: 'Experience' } },
  { path: '/skills', label: { fr: 'Compétences', en: 'Skills' } },
  { path: '/projects', label: { fr: 'Projets', en: 'Projects' } },
  { path: '/certifications', label: { fr: 'Certifications', en: 'Certifications' } },
  { path: '/contact', label: { fr: 'Contact', en: 'Contact' } },
]

export const ui = {
  downloadCv: { fr: 'Télécharger mon CV', en: 'Download my resume' },
  cvShort: { fr: 'CV', en: 'CV' },
  otherCv: { fr: 'English version', en: 'Version française' },
  contactMe: { fr: 'Me contacter', en: 'Contact me' },
  seeProjects: { fr: 'Voir mes projets', en: 'View my projects' },
  allProjects: { fr: 'Tous les projets', en: 'All projects' },
  backToProjects: { fr: 'Retour aux projets', en: 'Back to projects' },
  currentRole: {
    fr: 'Ingénieur IA et Data chez Lynk',
    en: 'AI and Data Engineer at Lynk',
  },
  currentDetail: {
    fr: "Agritech · Abidjan · depuis avril 2026",
    en: 'Agritech · Abidjan · since April 2026',
  },
} satisfies Record<string, T>
