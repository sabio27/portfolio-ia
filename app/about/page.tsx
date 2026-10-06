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
      fr: "Détection d'objets et classification d'images avec YOLO, auto-encodeurs, cartes de saillance. Des jeux de données où certaines classes n'ont que quelques images.",
      en: 'Object detection and image classification with YOLO, autoencoders, saliency maps. Datasets where some classes have only a handful of images.',
    },
  },
  {
    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
    title: { fr: 'Machine learning & statistiques', en: 'Machine learning & statistics' },
    body: {
      fr: "Scoring, classification de textes, boosting. Je fais attention à la façon d'évaluer : jeux train, validation et test bien séparés, métriques adaptées aux classes déséquilibrées.",
      en: 'Scoring, text classification, boosting. I pay attention to how things are evaluated: properly separated train, validation and test sets, metrics suited to imbalanced classes.',
    },
  },
  {
    icon: 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01',
    title: { fr: 'Mise en production', en: 'Production deployment' },
    body: {
      fr: "Chez LYNK : API FastAPI, conteneurs Docker, registre de modèles MLflow, tests automatiques avec GitHub Actions.",
      en: 'At LYNK: FastAPI services, Docker containers, an MLflow model registry, automated tests with GitHub Actions.',
    },
  },
  {
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    title: { fr: 'Autonomie', en: 'Working on my own' },
    body: {
      fr: "Chez LYNK, j'étais seul sur le projet, de la collecte des images à la mise en service des API. J'ai appris à trancher et à expliquer mes choix par écrit.",
      en: 'At LYNK I was alone on the project, from collecting images to running the APIs. I learned to make decisions and explain them in writing.',
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
                fr: "Je suis ingénieur IA & Data Science, diplômé d'un Master en Intelligence Artificielle de l'Université Félix Houphouët-Boigny, en partenariat avec l'Université Rennes 2. J'aime surtout la partie où un modèle quitte le notebook pour servir à quelqu'un : une API, une application, un outil qu'on peut tester.",
                en: "I am an AI & Data Science Engineer with a Master's in Artificial Intelligence from Félix Houphouët-Boigny University, in partnership with Rennes 2 University. The part I enjoy most is when a model leaves the notebook and becomes useful to someone: an API, an app, a tool people can try.",
              })}
            </p>
            <p>
              {t({
                fr: "J'ai commencé par une licence de mathématiques, ce qui m'a laissé de bonnes bases en statistiques. Depuis, j'ai travaillé sur des images de rétine et de cacaoyers, des tweets, des spectres d'exoplanètes et une simulation de fraude en calcul parallèle.",
                en: 'I started with a degree in mathematics, which left me with solid grounding in statistics. Since then I have worked on retina and cocoa tree images, tweets, exoplanet spectra and a parallel fraud simulation.',
              })}
            </p>
            <p>
              {t({
                fr: "Pendant mon stage de fin d'études chez LYNK SARL, j'ai construit seul un système qui part d'une photo de cacaoyer pour arriver à une recommandation de traitement. Il tourne sous forme de trois API dans des conteneurs Docker.",
                en: 'During my final internship at LYNK SARL, I built on my own a system that goes from a photo of a cocoa tree to a treatment recommendation. It runs as three APIs in Docker containers.',
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
