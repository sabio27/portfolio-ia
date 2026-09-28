'use client'

import Link from 'next/link'
import { useLang } from '@/lib/i18n'
import { person, ui } from '@/lib/site'
import CvLink from '@/components/CvLink'
import { ArrowIcon, GithubIcon, GridIcon, LinkedinIcon, MailIcon, PhoneIcon } from '@/components/Icons'

const stack = ['Python', 'PyTorch', 'YOLO', 'scikit-learn', 'LightGBM', 'spaCy', 'FastAPI', 'Docker', 'MLflow']

const expertise = [
  {
    title: { fr: 'Vision par ordinateur', en: 'Computer vision' },
    body: {
      fr: "Détection d'objets, classification d'images, cartes de saillance.",
      en: 'Object detection, image classification, saliency maps.',
    },
  },
  {
    title: { fr: 'Machine learning', en: 'Machine learning' },
    body: {
      fr: 'Modèles prédictifs, scoring, données déséquilibrées.',
      en: 'Predictive models, scoring, imbalanced data.',
    },
  },
  {
    title: { fr: 'NLP & séries temporelles', en: 'NLP & time series' },
    body: {
      fr: 'Analyse de sentiments, classification de textes, prévision.',
      en: 'Sentiment analysis, text classification, forecasting.',
    },
  },
  {
    title: { fr: 'MLOps', en: 'MLOps' },
    body: {
      fr: 'API, conteneurs, versionnage des modèles, intégration continue.',
      en: 'APIs, containers, model versioning, continuous integration.',
    },
  },
]

export default function Home() {
  const { t, lang } = useLang()

  const stats = [
    {
      value: { fr: '6 mois', en: '6 months' },
      label: { fr: 'en R&D chez LYNK, de la donnée au déploiement', en: 'in R&D at LYNK, from data to deployment' },
    },
    { value: '8', label: { fr: 'projets IA documentés', en: 'documented AI projects' } },
    { value: '3ᵉ', label: { fr: 'national — Défi IA ESA-Ariel', en: 'nationally — ESA-Ariel AI Challenge' } },
  ]

  const contacts = [
    { icon: MailIcon, label: person.email, href: `mailto:${person.email}` },
    { icon: PhoneIcon, label: person.phones[0].label, href: person.phones[0].href },
    { icon: LinkedinIcon, label: 'ambroisekoffi', href: person.linkedin },
    { icon: GithubIcon, label: 'sabio27', href: person.github },
  ]

  return (
    <div className="container-page flex min-h-[calc(100vh-4rem)] items-center py-12 md:py-16">
      <div className="w-full">
        <div className="grid items-center gap-10 lg:grid-cols-5 lg:gap-14">
          {/* Photo */}
          <div className="order-1 lg:order-1 lg:col-span-2">
            <div className="relative mx-auto w-60 sm:w-72 lg:w-full lg:max-w-sm">
              <div className="absolute -inset-6 rounded-full bg-brand-600/20 blur-3xl" aria-hidden />
              <img
                src="/phot1.webp"
                width={640}
                height={640}
                fetchPriority="high"
                alt={lang === 'fr' ? 'Koffi Ambroise, ingénieur IA & Data Science' : 'Koffi Ambroise, AI & Data Science Engineer'}
                className="relative aspect-square w-full rounded-full object-cover object-[50%_25%] shadow-2xl shadow-brand-950/60"
              />
            </div>
          </div>

          {/* Texte */}
          <div className="order-2 space-y-6 lg:col-span-3">
            <div className="inline-flex items-start gap-3 rounded-2xl border border-brand-600/40 bg-brand-900/30 px-4 py-2.5">
              <span className="relative mt-1.5 flex h-2.5 w-2.5 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
              </span>
              <span className="text-sm leading-snug">
                <span className="block font-semibold text-white">{t(ui.available)}</span>
                <span className="block text-gray-400">{t(ui.workMode)}</span>
              </span>
            </div>

            <div className="space-y-3">
              <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl xl:text-6xl">
                <span className="mb-2 block text-gray-200">{lang === 'fr' ? 'Bonjour, je suis' : "Hi, I'm"}</span>
                <span className="gradient-text">{person.displayName}</span>
              </h1>
              <h2 className="text-xl font-semibold text-gray-100 sm:text-2xl md:text-3xl">{t(person.role)}</h2>
            </div>

            <p className="max-w-2xl text-base leading-relaxed text-gray-300 md:text-lg">
              {lang === 'fr' ? (
                <>
                  Des photos de cacaoyers, des tweets, des flux de transactions : j’aime faire parler les données. Je
                  construis des modèles de <span className="font-semibold text-brand-400">vision par ordinateur</span>, de{' '}
                  <span className="font-semibold text-brand-400">machine learning</span> et de{' '}
                  <span className="font-semibold text-brand-400">NLP</span>, et je veille à ce qu’ils ne restent pas
                  dans un notebook. Mathématicien de formation, j’ai gardé un réflexe : vérifier ce que vaut vraiment
                  un modèle avant de le mettre entre les mains de quelqu’un.
                </>
              ) : (
                <>
                  Cocoa leaves, tweets, streams of transactions: I like making data talk. I build{' '}
                  <span className="font-semibold text-brand-400">computer vision</span>,{' '}
                  <span className="font-semibold text-brand-400">machine learning</span> and{' '}
                  <span className="font-semibold text-brand-400">NLP</span> models, and I make sure they don’t stay
                  stuck in a notebook. Trained as a mathematician, I kept one habit: checking what a model is really
                  worth before putting it in someone’s hands.
                </>
              )}
            </p>

            <ul className="flex flex-wrap gap-2" aria-label="Stack">
              {stack.map((s) => (
                <li key={s} className="chip-muted text-xs md:text-sm">{s}</li>
              ))}
            </ul>

            <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:flex-wrap">
              <Link href="/projects" className="btn-primary">
                <GridIcon className="h-4 w-4 md:h-5 md:w-5" />
                {t(ui.seeProjects)}
              </Link>
              <CvLink className="btn-secondary" />
            </div>

            {/* Contacts visibles */}
            <ul className="grid gap-x-6 gap-y-2 pt-1 text-sm sm:grid-cols-2">
              {contacts.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="inline-flex min-h-[44px] items-center gap-2.5 text-gray-300 transition-colors hover:text-brand-400"
                    {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-brand-900/50 bg-dark-900/70 text-brand-400">
                      <Icon className="h-4 w-4" />
                    </span>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Chiffres clés */}
        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          {stats.map((s) => (
            <div key={t(s.label)} className="card card-hover p-5 text-center md:p-6">
              <div className="metric-text mb-2 text-4xl font-extrabold md:text-5xl">{t(s.value)}</div>
              <div className="text-sm font-medium text-gray-300">{t(s.label)}</div>
            </div>
          ))}
        </div>

        {/* Domaines */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {expertise.map((e) => (
            <div key={t(e.title)} className="card card-hover p-5">
              <h3 className="mb-1.5 font-bold text-white">{t(e.title)}</h3>
              <p className="text-sm leading-relaxed text-gray-400">{t(e.body)}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm">
          <Link href="/experience" className="inline-flex min-h-[44px] items-center gap-2 font-semibold text-brand-400 hover:text-brand-300">
            {lang === 'fr' ? 'Mon expérience chez LYNK' : 'My experience at LYNK'} <ArrowIcon className="h-4 w-4" />
          </Link>
          <Link href="/contact" className="inline-flex min-h-[44px] items-center gap-2 font-semibold text-brand-400 hover:text-brand-300">
            {t(ui.contactMe)} <ArrowIcon className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
