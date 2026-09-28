'use client'

import Link from 'next/link'
import { useLang, type T } from '@/lib/i18n'
import PageHeader from '@/components/PageHeader'
import { ArrowIcon } from '@/components/Icons'

/* Contenu tiré du mémoire de fin d'études (LYNK SARL, avril – septembre 2026). */

const pipeline: { title: T; body: T }[] = [
  {
    title: { fr: 'Détection', en: 'Detection' },
    body: {
      fr: 'YOLOv8 à 5 classes (cabosses et feuilles) sur une photo de cacaoyer, avec carte de saillance Eigen-CAM.',
      en: 'Five-class YOLOv8 (pods and leaves) on a cocoa tree photo, with an Eigen-CAM saliency map.',
    },
  },
  {
    title: { fr: 'Zonage', en: 'Zoning' },
    body: {
      fr: 'Regroupement des détections géolocalisées par densité (DBSCAN, distance haversine).',
      en: 'Geotagged detections grouped by density (DBSCAN, haversine distance).',
    },
  },
  {
    title: { fr: 'Estimation des pertes', en: 'Loss estimate' },
    body: {
      fr: 'Taux de perte par zone de parcelle, avec intervalle de confiance de Wilson.',
      en: 'Loss rate per plot zone, with a Wilson confidence interval.',
    },
  },
  {
    title: { fr: 'Pression climatique', en: 'Climate pressure' },
    body: {
      fr: "Indice de pression d'infection de la pourriture brune, construit sur 30 ans de climatologie régionale.",
      en: 'Black pod infection pressure index, built on 30 years of regional climate data.',
    },
  },
  {
    title: { fr: 'Recommandation', en: 'Recommendation' },
    body: {
      fr: 'Consolidation des résultats en une recommandation de traitement pour la parcelle.',
      en: 'Results consolidated into a treatment recommendation for the plot.',
    },
  },
]

const results = [
  { value: '20 196', label: { fr: 'images annotées', en: 'annotated images' } },
  { value: '5', label: { fr: 'classes — cabosses & feuilles', en: 'classes — pods & leaves' } },
  { value: '0,850', label: { fr: 'mAP@50 sur le jeu de test', en: 'mAP@50 on the test set' } },
  { value: '3', label: { fr: 'services REST conteneurisés', en: 'containerized REST services' } },
]

const perClass = [
  ['black_pod', { fr: 'Pourriture brune (cabosse)', en: 'Black pod (pod)' }, '0,889'],
  ['cssvd_leaf', { fr: 'Swollen shoot (feuille)', en: 'Swollen shoot (leaf)' }, '0,817'],
  ['cssvd_pod', { fr: 'Swollen shoot (cabosse)', en: 'Swollen shoot (pod)' }, '0,800'],
  ['healthy_leaf', { fr: 'Feuille saine', en: 'Healthy leaf' }, '0,848'],
  ['healthy_pod', { fr: 'Cabosse saine', en: 'Healthy pod' }, '0,897'],
] as const

const missions: T[] = [
  {
    fr: "Constitution d'un corpus de 20 196 images par fusion et nettoyage de plusieurs jeux de données (doublons, images floues, annotations incohérentes).",
    en: 'Built a 20,196-image corpus by merging and cleaning several datasets (duplicates, blurry images, inconsistent labels).',
  },
  {
    fr: "Entraînement et comparaison de détecteurs YOLO (modèle conjoint contre modèles dédiés, suréchantillonnage de la classe rare, choix du seuil de confiance).",
    en: 'Trained and compared YOLO detectors (joint vs dedicated models, oversampling of the rare class, confidence threshold selection).',
  },
  {
    fr: "Conception du module d'estimation des pertes et de l'indice de pression d'infection à partir de données climatiques.",
    en: 'Designed the loss estimation module and the infection pressure index from climate data.',
  },
  {
    fr: "Industrialisation : trois API FastAPI indépendantes, images Docker, registre de modèles MLflow, intégration continue GitHub Actions, interface de démonstration Gradio.",
    en: 'Productionisation: three independent FastAPI services, Docker images, MLflow model registry, GitHub Actions CI, Gradio demo interface.',
  },
]

const stack = ['Python', 'PyTorch', 'Ultralytics YOLOv8', 'OpenCV', 'Eigen-CAM', 'scikit-learn', 'DBSCAN', 'FastAPI', 'Pydantic', 'Docker Compose', 'MLflow', 'GitHub Actions', 'Gradio', 'Plotly']

export default function ExperiencePage() {
  const { t, lang } = useLang()

  return (
    <div className="container-page py-12 md:py-16">
      <div className="mx-auto max-w-5xl">
        <PageHeader
          title={{ fr: 'Expérience professionnelle', en: 'Professional experience' }}
          intro={{
            fr: 'Mes missions en entreprise, les problèmes traités et les résultats obtenus.',
            en: 'My work in industry: the problems I tackled and the results I delivered.',
          }}
        />

        <article className="card overflow-hidden">
          {/* En-tête */}
          <header className="border-b border-brand-900/40 bg-gradient-to-r from-brand-900/40 to-gold-900/10 p-6 md:p-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="mb-1 text-sm font-semibold uppercase tracking-wider text-gold-400">LYNK SARL · Agritech</p>
                <h2 className="text-2xl font-extrabold text-white md:text-3xl">
                  {t({ fr: 'Stagiaire Ingénieur IA — Computer Vision', en: 'AI Engineer Intern — Computer Vision' })}
                </h2>
                <p className="mt-2 text-gray-400">
                  {t({ fr: "Pôle Recherche & Développement · Abidjan, Côte d'Ivoire", en: "Research & Development team · Abidjan, Côte d'Ivoire" })}
                </p>
              </div>
              <span className="w-fit shrink-0 rounded-full border border-brand-700/50 bg-brand-900/40 px-4 py-1.5 text-sm font-semibold text-brand-300">
                {t({ fr: 'Avril – Septembre 2026', en: 'April – September 2026' })}
              </span>
            </div>
          </header>

          <div className="space-y-12 p-6 md:p-8">
            {/* Contexte */}
            <section>
              <h3 className="section-title !text-xl md:!text-2xl">
                {t({ fr: 'Surveillance phytosanitaire de la cacaoculture', en: 'Plant-health monitoring for cocoa farming' })}
              </h3>
              <p className="max-w-3xl leading-relaxed text-gray-300">
                {t({
                  fr: "La cacaoculture ivoirienne subit d'importantes pertes dues à la pourriture brune et au swollen shoot (CSSV). Leur détection repose encore sur l'inspection visuelle des parcelles : souvent tardive, variable d'un observateur à l'autre et difficile à mener sur de grandes surfaces. J'ai conçu et implémenté un système qui mène d'une simple photo de cacaoyer à une recommandation de traitement.",
                  en: "Ivorian cocoa farming suffers heavy losses from black pod and cocoa swollen shoot virus (CSSV). Detection still relies on visual inspection of plots, which is often late, varies between observers and is hard to scale to large areas. I designed and built a system that goes from a single photo of a cocoa tree to a treatment recommendation.",
                })}
              </p>
            </section>

            {/* Chiffres */}
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
              {results.map((r) => (
                <div key={r.value} className="rounded-xl border border-brand-800/40 bg-dark-800/60 p-5 text-center">
                  <div className="metric-text mb-1 text-3xl font-extrabold md:text-4xl">{r.value}</div>
                  <div className="text-sm text-gray-400">{t(r.label)}</div>
                </div>
              ))}
            </div>

            {/* Chaîne de traitement */}
            <section>
              <h3 className="section-title !text-xl md:!text-2xl">{t({ fr: 'Chaîne de traitement', en: 'Pipeline' })}</h3>
              <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
                {pipeline.map((p, i) => (
                  <li key={i} className="relative rounded-xl border border-brand-900/40 bg-dark-800/50 p-4">
                    <span className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-sm font-bold text-on-brand">
                      {i + 1}
                    </span>
                    <p className="mb-1 font-bold text-white">{t(p.title)}</p>
                    <p className="text-sm leading-relaxed text-gray-400">{t(p.body)}</p>
                  </li>
                ))}
              </ol>
            </section>

            {/* Missions + résultats par classe */}
            <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
              <section>
                <h3 className="section-title !text-xl md:!text-2xl">{t({ fr: 'Missions réalisées', en: 'What I did' })}</h3>
                <ul className="space-y-4">
                  {missions.map((m, i) => (
                    <li key={i} className="flex gap-3 leading-relaxed text-gray-300">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                      <span>{t(m)}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h3 className="section-title !text-xl md:!text-2xl">{t({ fr: 'mAP@50 par classe', en: 'mAP@50 per class' })}</h3>
                <div className="space-y-3">
                  {perClass.map(([code, label, v]) => (
                    <div key={code}>
                      <div className="mb-1 flex justify-between text-sm">
                        <span className="text-gray-300">{t(label)}</span>
                        <span className="font-semibold text-brand-400">{v}</span>
                      </div>
                      <div className="h-2 rounded-full bg-dark-700">
                        <div className="h-2 rounded-full bg-gradient-to-r from-brand-600 to-gold-400" style={{ width: `${parseFloat(v.replace(',', '.')) * 100}%` }} />
                      </div>
                    </div>
                  ))}
                  <p className="pt-2 text-xs leading-relaxed text-gray-400">
                    {t({
                      fr: 'Jeu de test : 3 694 instances. Précision globale 0,827, rappel 0,770.',
                      en: 'Test set: 3,694 instances. Overall precision 0.827, recall 0.770.',
                    })}
                  </p>
                </div>
              </section>
            </div>

            {/* Stack */}
            <section>
              <h3 className="section-title !text-xl md:!text-2xl">{t({ fr: 'Technologies', en: 'Tech stack' })}</h3>
              <div className="flex flex-wrap gap-2">
                {stack.map((s) => (
                  <span key={s} className="chip">{s}</span>
                ))}
              </div>
            </section>
          </div>
        </article>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl border border-brand-700/40 bg-gradient-to-r from-brand-900/30 to-gold-900/10 p-6 text-center md:flex-row md:text-left">
          <p className="text-gray-300">
            {t({
              fr: 'Formation, points forts et objectif professionnel : tout est sur la page À propos.',
              en: 'Education, strengths and career goal are on the About page.',
            })}
          </p>
          <Link href="/about" className="inline-flex shrink-0 items-center gap-2 font-semibold text-brand-400 hover:text-brand-300">
            {lang === 'fr' ? 'À propos' : 'About'} <ArrowIcon className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
