'use client'

import Link from 'next/link'
import { useLang } from '@/lib/i18n'
import { education } from '@/lib/content'
import PageHeader from '@/components/PageHeader'
import CvLink, { OtherCvLink } from '@/components/CvLink'

const strengths = [
  {
    icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z',
    title: { fr: 'Vision par ordinateur', en: 'Computer vision' },
    body: {
      fr: "Détection d'objets (YOLOv8, YOLOv11), classification d'images, auto-encodeurs et cartes de saillance, sur des jeux de données réels et déséquilibrés.",
      en: 'Object detection (YOLOv8, YOLOv11), image classification, autoencoders and saliency maps, on real-world, imbalanced datasets.',
    },
  },
  {
    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
    title: { fr: 'Machine learning & statistiques', en: 'Machine learning & statistics' },
    body: {
      fr: "Modélisation prédictive, scoring, NLP et séries temporelles, avec une évaluation rigoureuse : métriques adaptées au métier et intervalles de confiance.",
      en: 'Predictive modelling, scoring, NLP and time series, with rigorous evaluation: business-relevant metrics and confidence intervals.',
    },
  },
  {
    icon: 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01',
    title: { fr: 'Mise en production', en: 'Production deployment' },
    body: {
      fr: "Services REST avec FastAPI, conteneurisation Docker, versionnage des modèles avec MLflow et intégration continue avec GitHub Actions.",
      en: 'REST services with FastAPI, Docker containers, model versioning with MLflow and continuous integration with GitHub Actions.',
    },
  },
  {
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    title: { fr: 'Rigueur et autonomie', en: 'Rigour and autonomy' },
    body: {
      fr: "Démarche méthodique, choix techniques argumentés et documentés. Chez LYNK, j'ai porté seul le projet, de la collecte des images à la mise en service des API.",
      en: 'A methodical approach with well-argued, documented technical choices. At LYNK, I carried the project on my own, from collecting images to running the APIs in production.',
    },
  },
]

export default function About() {
  const { t, lang } = useLang()

  return (
    <div className="container-page py-12 md:py-16">
      <div className="mx-auto max-w-4xl">
        <PageHeader title={{ fr: 'À propos', en: 'About' }} />

        {/* Présentation */}
        <section className="mb-16">
          <h2 className="section-title">{lang === 'fr' ? 'Profil' : 'Profile'}</h2>
          <div className="card space-y-4 p-6 text-base leading-relaxed text-gray-300 md:p-8 md:text-lg">
            <p>
              {t({
                fr: "Ingénieur IA & Data Science, titulaire d'un Master en Intelligence Artificielle de l'Université Félix Houphouët-Boigny, délivré en partenariat avec l'Université Rennes 2. Ce qui m'intéresse, c'est le moment où un modèle cesse d'être une expérience pour devenir un outil : utilisé, suivi et amélioré par ceux qui en ont besoin.",
                en: "AI & Data Science Engineer holding a Master's degree in Artificial Intelligence from Félix Houphouët-Boigny University, awarded in partnership with Rennes 2 University. What interests me is the moment a model stops being an experiment and becomes a tool: used, monitored and improved by the people who need it.",
              })}
            </p>
            <p>
              {t({
                fr: "Ma formation initiale en mathématiques appliquées m'apporte une base solide en statistiques et en modélisation. Je l'ai mise en pratique sur des projets variés : vision par ordinateur appliquée au diagnostic médical et à l'agriculture, traitement du langage naturel, prévision de séries temporelles et calcul parallèle.",
                en: 'My background in applied mathematics gives me a strong foundation in statistics and modelling. I have applied it to a range of projects: computer vision for medical diagnosis and agriculture, natural language processing, time series forecasting and parallel computing.',
              })}
            </p>
            <p>
              {t({
                fr: "Lors de mon stage de fin d'études chez LYNK SARL, j'ai conçu un système de surveillance phytosanitaire du cacaoyer, livré sous forme de services REST conteneurisés, versionnés avec MLflow et vérifiés par intégration continue.",
                en: 'During my final internship at LYNK SARL, I designed a plant-health monitoring system for cocoa, delivered as containerized REST services, versioned with MLflow and checked through continuous integration.',
              })}{' '}
              <Link href="/experience" className="font-semibold text-brand-400 hover:text-brand-300">
                {lang === 'fr' ? 'Voir le détail →' : 'See details →'}
              </Link>
            </p>
          </div>
        </section>

        {/* Parcours académique */}
        <section className="mb-16">
          <h2 className="section-title">{lang === 'fr' ? 'Parcours académique' : 'Education'}</h2>
          <ol className="space-y-6">
            {education.map((e, i) => (
              <li key={i} className={`relative border-l-2 pl-8 ${i === 0 ? 'border-brand-600' : i === 1 ? 'border-brand-700' : 'border-brand-800'} ${i < education.length - 1 ? 'pb-2' : ''}`}>
                <span className={`absolute -left-[9px] top-1 h-4 w-4 rounded-full ring-4 ring-dark-950 ${i === 0 ? 'bg-brand-600' : i === 1 ? 'bg-brand-700' : 'bg-brand-800'}`} />
                <div className="card card-hover p-6">
                  <div className="mb-2 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <h3 className="text-lg font-bold text-brand-400 md:text-xl">{t(e.title)}</h3>
                    <span className="w-fit shrink-0 rounded-full bg-brand-900/40 px-3 py-1 text-sm text-gray-300">{t(e.period)}</span>
                  </div>
                  <p className="mb-4 text-gray-400">{t(e.school)}</p>
                  <div className="flex flex-wrap gap-2">
                    {e.tags.map((tag, j) => (
                      <span key={j} className="chip text-xs">{t(tag)}</span>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Points forts */}
        <section className="mb-16">
          <h2 className="section-title">{lang === 'fr' ? 'Points forts' : 'Strengths'}</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {strengths.map((s, i) => (
              <div key={i} className="card card-hover group p-6">
                <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-brand-600/35 bg-brand-600/15 text-brand-300 transition-transform group-hover:scale-105`}>
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {s.icon.split(' M').map((d, k) => (
                      <path key={k} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={k === 0 ? d : 'M' + d} />
                    ))}
                  </svg>
                </div>
                <h3 className="mb-2 text-lg font-bold text-white">{t(s.title)}</h3>
                <p className="leading-relaxed text-gray-400">{t(s.body)}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Objectif professionnel */}
        <section>
          <h2 className="section-title">{lang === 'fr' ? 'Objectif professionnel' : 'Career goal'}</h2>
          <div className="rounded-2xl border border-brand-700/50 bg-gradient-to-r from-brand-900/40 to-gold-900/20 p-6 md:p-8">
            <h3 className="mb-4 text-xl font-bold text-white">
              {t({ fr: 'Poste en IA, Data, Machine Learning ou Vision par ordinateur', en: 'Role in AI, Data, Machine Learning or Computer Vision' })}
            </h3>
            <dl className="grid gap-3 text-gray-300 sm:grid-cols-2">
              {[
                [{ fr: 'Postes visés', en: 'Target roles' }, { fr: 'Ingénieur IA, Data Scientist, ML Engineer, Ingénieur Computer Vision', en: 'AI Engineer, Data Scientist, ML Engineer, Computer Vision Engineer' }],
                [{ fr: 'Modalités', en: 'Work mode' }, { fr: 'Sur site ou en télétravail', en: 'On-site or remote' }],
                [{ fr: 'Localisation', en: 'Location' }, "Abidjan, Côte d'Ivoire"],
                [{ fr: 'Langues', en: 'Languages' }, { fr: 'Français (natif), anglais (B1)', en: 'French (native), English (B1)' }],
              ].map(([k, v], i) => (
                <div key={i}>
                  <dt className="text-sm font-semibold text-brand-400">{t(k)}</dt>
                  <dd>{t(v)}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <CvLink className="btn-primary" />
              <OtherCvLink />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
