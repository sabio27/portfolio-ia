import type { T } from './i18n'

/* ------------------------------------------------------------------ */
/* Parcours académique (page À propos)                                  */
/* ------------------------------------------------------------------ */

export const education: { title: T; school: T; period: T; tags: T[] }[] = [
  {
    title: { fr: 'Master 2 — Intelligence Artificielle', en: "Master's Degree (M2) — Artificial Intelligence" },
    school: {
      fr: 'Université Félix Houphouët-Boigny & Université Rennes 2 · Abidjan',
      en: 'Félix Houphouët-Boigny University & Rennes 2 University · Abidjan',
    },
    period: '2025 – 2026',
    tags: [
      'Deep Learning',
      { fr: 'Traitement du langage naturel', en: 'Natural Language Processing' },
      { fr: 'Calcul haute performance', en: 'High-performance computing' },
      'NoSQL',
      'IoT',
    ],
  },
  {
    title: { fr: 'Master 1 — Data Science / Intelligence Artificielle', en: "Master's Degree (M1) — Data Science / AI" },
    school: {
      fr: 'Université Félix Houphouët-Boigny & Université Rennes 2 · Abidjan',
      en: 'Félix Houphouët-Boigny University & Rennes 2 University · Abidjan',
    },
    period: '2024 – 2025',
    tags: [
      { fr: 'Apprentissage statistique', en: 'Statistical learning' },
      { fr: 'Séries temporelles', en: 'Time series' },
      { fr: 'Économétrie', en: 'Econometrics' },
      'Data mining',
    ],
  },
  {
    title: { fr: 'Licence — Mathématiques appliquées', en: "Bachelor's Degree — Applied Mathematics" },
    school: { fr: 'Université Félix Houphouët-Boigny · Abidjan', en: 'Félix Houphouët-Boigny University · Abidjan' },
    period: '2018 – 2019',
    tags: [
      { fr: 'Mathématiques discrètes', en: 'Discrete mathematics' },
      { fr: 'Calcul scientifique', en: 'Scientific computing' },
      { fr: 'Statistiques', en: 'Statistics' },
    ],
  },
]
