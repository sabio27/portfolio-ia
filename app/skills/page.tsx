'use client'

import { useLang, type T } from '@/lib/i18n'
import PageHeader from '@/components/PageHeader'

type Skill = { name: T; desc: T }

const categories: { title: T; skills: Skill[] }[] = [
  {
    title: { fr: 'Deep learning & vision par ordinateur', en: 'Deep learning & computer vision' },
    skills: [
      { name: 'PyTorch', desc: { fr: 'Réseaux de neurones, entraînement et évaluation', en: 'Neural networks, training and evaluation' } },
      { name: 'YOLOv8 / YOLOv11', desc: { fr: "Détection d'objets — maladies du cacao, pathologies oculaires", en: 'Object detection — cocoa diseases, eye conditions' } },
      { name: 'TensorFlow / Keras', desc: { fr: 'Modèles de deep learning', en: 'Deep learning models' } },
      { name: 'OpenCV', desc: { fr: "Prétraitement et traitement d'images", en: 'Image preprocessing and processing' } },
      { name: 'Eigen-CAM', desc: { fr: 'Cartes de saillance pour expliquer les prédictions', en: 'Saliency maps to explain predictions' } },
      { name: { fr: 'Auto-encodeurs', en: 'Autoencoders' }, desc: { fr: "Détection d'anomalies", en: 'Anomaly detection' } },
    ],
  },
  {
    title: 'Machine Learning',
    skills: [
      { name: 'scikit-learn', desc: { fr: 'Modélisation prédictive, clustering (DBSCAN)', en: 'Predictive modelling, clustering (DBSCAN)' } },
      { name: 'LightGBM', desc: { fr: 'Gradient boosting, ensembling', en: 'Gradient boosting, ensembling' } },
      { name: 'imbalanced-learn', desc: { fr: 'Classes déséquilibrées (SMOTE, RUS)', en: 'Imbalanced classes (SMOTE, RUS)' } },
      { name: 'statsmodels', desc: { fr: 'Régression logistique, ARIMA, tests statistiques', en: 'Logistic regression, ARIMA, statistical tests' } },
    ],
  },
  {
    title: { fr: 'NLP & séries temporelles', en: 'NLP & time series' },
    skills: [
      { name: 'spaCy', desc: { fr: 'Prétraitement et lemmatisation de textes', en: 'Text preprocessing and lemmatisation' } },
      { name: 'Transformers', desc: { fr: 'Modèles de langage pré-entraînés', en: 'Pre-trained language models' } },
      { name: 'TF-IDF', desc: { fr: 'Vectorisation et classification de textes', en: 'Text vectorisation and classification' } },
      { name: 'ARIMA / LSTM', desc: { fr: 'Prévision de séries temporelles', en: 'Time series forecasting' } },
    ],
  },
  {
    title: { fr: 'MLOps & mise en production', en: 'MLOps & deployment' },
    skills: [
      { name: 'FastAPI', desc: { fr: 'Services REST pour exposer les modèles', en: 'REST services to serve models' } },
      { name: 'Docker', desc: { fr: 'Conteneurisation, Docker Compose', en: 'Containerisation, Docker Compose' } },
      { name: 'MLflow', desc: { fr: 'Suivi des expériences et registre de modèles', en: 'Experiment tracking and model registry' } },
      { name: 'GitHub Actions', desc: { fr: 'Intégration continue : lint, tests, build', en: 'Continuous integration: lint, tests, build' } },
      { name: 'Git / GitHub', desc: { fr: 'Versionnage et collaboration', en: 'Version control and collaboration' } },
      { name: 'Gradio / Streamlit', desc: { fr: 'Interfaces de démonstration', en: 'Demo interfaces' } },
    ],
  },
  {
    title: { fr: 'Données & bases de données', en: 'Data & databases' },
    skills: [
      { name: 'Python', desc: { fr: 'Langage principal — pandas, NumPy', en: 'Main language — pandas, NumPy' } },
      { name: 'R', desc: { fr: 'Analyse statistique, ggplot2, Shiny', en: 'Statistical analysis, ggplot2, Shiny' } },
      { name: 'SQL / NoSQL', desc: { fr: 'Bases relationnelles, MongoDB, InfluxDB', en: 'Relational databases, MongoDB, InfluxDB' } },
      { name: 'Spark', desc: { fr: 'Traitement distribué de données', en: 'Distributed data processing' } },
    ],
  },
  {
    title: { fr: 'Visualisation & BI', en: 'Visualisation & BI' },
    skills: [
      { name: 'Power BI', desc: { fr: 'Tableaux de bord interactifs', en: 'Interactive dashboards' } },
      { name: 'Tableau', desc: { fr: 'Visualisation et reporting', en: 'Visualisation and reporting' } },
      { name: 'Matplotlib / Seaborn / Plotly', desc: { fr: 'Visualisation Python', en: 'Python visualisation' } },
      { name: 'R Shiny', desc: { fr: 'Applications web interactives', en: 'Interactive web apps' } },
    ],
  },
]

const methods: T[] = [
  { fr: 'Détection d’objets', en: 'Object detection' },
  { fr: 'Classification d’images', en: 'Image classification' },
  { fr: 'Apprentissage supervisé', en: 'Supervised learning' },
  { fr: 'Apprentissage non supervisé', en: 'Unsupervised learning' },
  'Feature engineering',
  { fr: 'Analyse exploratoire', en: 'Exploratory analysis' },
  { fr: 'Séries temporelles', en: 'Time series' },
  { fr: 'Analyse de sentiments', en: 'Sentiment analysis' },
  { fr: 'Évaluation & intervalles de confiance', en: 'Evaluation & confidence intervals' },
  { fr: 'Clustering spatial', en: 'Spatial clustering' },
  { fr: 'Calcul parallèle (HPC)', en: 'Parallel computing (HPC)' },
  'IoT',
]

export default function Skills() {
  const { t, lang } = useLang()
  return (
    <div className="container-page py-12 md:py-16">
      <PageHeader
        title={{ fr: 'Compétences', en: 'Skills' }}
        intro={{
          fr: 'Compétences mises en œuvre en entreprise et dans mes projets de Master.',
          en: "Skills applied in industry and in my Master's projects.",
        }}
      />

      <div className="mb-16 grid gap-6 lg:grid-cols-2">
        {categories.map((c, i) => (
          <section key={i} className="card card-hover p-6 md:p-7">
            <div className="mb-5 flex items-center gap-3">
              <span className={`h-9 w-1.5 rounded-full bg-brand-500`} />
              <h2 className="text-xl font-bold text-white">{t(c.title)}</h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {c.skills.map((s, j) => (
                <div key={j} className="rounded-lg border border-brand-900/30 bg-dark-800/50 p-4 transition-colors hover:border-brand-600/40">
                  <h3 className="mb-1 font-semibold text-brand-400">{t(s.name)}</h3>
                  <p className="text-sm text-gray-400">{t(s.desc)}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <section className="rounded-2xl border border-brand-700/50 bg-gradient-to-r from-brand-900/30 to-gold-900/20 p-6 md:p-8">
        <h2 className="section-title">{lang === 'fr' ? 'Compétences méthodologiques' : 'Methods'}</h2>
        <div className="flex flex-wrap gap-2.5">
          {methods.map((m, i) => (
            <span key={i} className="rounded-lg border border-brand-800/40 bg-dark-900/60 px-4 py-2 text-sm font-medium text-gray-200">
              {t(m)}
            </span>
          ))}
        </div>
      </section>
    </div>
  )
}
