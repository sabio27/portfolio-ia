import Navbar from '@/components/Navbar'
import Link from 'next/link'

export default function Projects() {
  const projects = [
    {
      id: 1,
      slug: 'defi-ia-ariel-2025',
      title: 'Défi IA 2025 - Détection d\'eau et nuages dans atmosphères d\'exoplanètes',
      module: 'Compétition IA - Mission ARIEL (ESA)',
      period: 'Janvier 2025',
      description: 'Classification binaire pour détecter la présence d\'eau et de nuages dans les spectres atmosphériques d\'exoplanètes simulés par la mission spatiale ARIEL de l\'ESA. Classements : 3ème place au niveau national et 12ème place au niveau international avec un score de prédiction de 0.974.',
      technologies: ['Python', 'Machine Learning', 'Classification', 'Traitement du Signal', 'Astrophysique'],
      color: 'from-yellow-500 to-amber-600',
      badge: {
        rankNational: '3ème',
        rankInternational: '12ème',
        score: '0.974'
      }
    },
    {
      id: 2,
      slug: 'detection-maladies-oculaires',
      title: 'Détection de maladies oculaires par Deep Learning',
      module: 'Module Deep Learning',
      period: 'Master 2 - 2025/2026',
      description: 'Système de détection automatique de pathologies oculaires combinant YOLO-EyeNet et auto-encodeur pour la classification rapide et la détection d\'anomalies.',
      technologies: ['Python', 'YOLO', 'Deep Learning', 'Computer Vision', 'Auto-encodeur'],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 3,
      slug: 'analyse-sentiments-fast-food',
      title: 'Analyse de sentiments - Fast Food (Burger King, McDonald\'s, KFC)',
      module: 'Module NLP',
      period: 'Master 2 - 2025/2026',
      description: 'Étude comparative des sentiments clients sur les produits de trois chaînes de fast food, avec développement d\'un modèle NLP et déploiement sur application.',
      technologies: ['Python', 'NLP', 'Analyse de Sentiments', 'Machine Learning', 'Déploiement'],
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 4,
      slug: 'reussite-academique',
      title: 'Analyse des facteurs influençant la réussite académique',
      module: 'Module R avec Machine Learning',
      period: 'Master 1 - 2024/2025',
      description: 'Développement d\'un système de prédiction de la réussite académique avec identification des variables clés et déploiement d\'une application interactive R-Shiny.',
      technologies: ['R', 'Machine Learning', 'R-Shiny', 'Visualisation'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 5,
      slug: 'projet-scoring',
      title: 'Projet Scoring - Satisfaction clients compagnie aérienne',
      module: 'Module Projet Scoring',
      period: 'Master 1 - 2024/2025',
      description: 'Conception d\'un système de scoring pour évaluer et prédire la satisfaction des clients d\'une compagnie aérienne par modélisation statistique et Machine Learning.',
      technologies: ['Python', 'Machine Learning', 'Modélisation Statistique', 'Feature Engineering'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 6,
      slug: 'services-financiers',
      title: 'Analyse temporelle - Services financiers numériques en Côte d\'Ivoire',
      module: 'Module Séries Temporelles',
      period: 'Master 1 - 2024/2025',
      description: 'Modélisation des tendances d\'adoption des services financiers numériques et projection de leur évolution future dans un contexte régional compétitif.',
      technologies: ['Python', 'Séries Temporelles', 'Machine Learning', 'Analyse Prédictive'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 7,
      slug: 'analyse-retours-produits',
      title: 'Analyse des retours produits via la visualisation',
      module: 'Module Visualisation',
      period: 'Master 1 - 2024/2025',
      description: 'Exploration et analyse des causes de retours produits selon multiples facteurs (catégories, géographie, moyens de paiement) avec Power BI.',
      technologies: ['Power BI', 'Visualisation', 'Analyse de Données'],
      color: 'from-orange-500 to-red-500'
    },
  ]

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-16 p-4 sm:p-6 md:p-12">
        <div className="max-w-6xl mx-auto">
          {/* En-tête de page */}
          <div className="mb-12">
            <h1 className="text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                Mes Projets
              </span>
            </h1>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
            <p className="text-gray-400 mt-4 text-lg">
              Projets académiques et compétitions d'IA réalisés dans le cadre de mon Master en Intelligence Artificielle
            </p>
          </div>

          {/* Statistiques */}
          <div className="grid grid-cols-3 gap-6 mb-12">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-blue-900/30 rounded-xl p-6 text-center hover:border-blue-600/50 transition-all">
              <div className="text-4xl font-bold text-blue-500 mb-2">{projects.length}</div>
              <div className="text-gray-400">Projets réalisés</div>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-blue-900/30 rounded-xl p-6 text-center hover:border-blue-600/50 transition-all">
              <div className="text-4xl font-bold text-blue-500 mb-2">7</div>
              <div className="text-gray-400">Domaines d'expertise</div>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-blue-900/30 rounded-xl p-6 text-center hover:border-blue-600/50 transition-all">
              <div className="text-4xl font-bold text-blue-500 mb-2">2</div>
              <div className="text-gray-400">Années de formation</div>
            </div>
          </div>

          {/* Liste des projets */}
          <div className="space-y-8">
            {projects.map((project) => (
              <Link 
                key={project.id}
                href={`/projects/${project.slug}`}
                className="group block"
              >
                <div className="relative bg-gradient-to-br from-gray-900/70 to-gray-800/50 border-2 border-gray-700/30 rounded-2xl p-8 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-900/20 transition-all duration-300">
                  {/* Badge de réalisation - Position optimisée */}
                  {project.badge && (
                    <div className="absolute top-8 right-8 flex flex-col gap-2">
                      {/* Badge National */}
                      <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-xl text-sm font-bold shadow-lg flex items-center gap-2">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span>{project.badge.rankNational} National</span>
                      </div>
                      {/* Badge International */}
                      <div className="bg-gradient-to-r from-yellow-500 to-amber-600 text-white px-4 py-2 rounded-xl text-sm font-bold shadow-lg flex items-center gap-2">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
                        </svg>
                        <span>{project.badge.rankInternational} International</span>
                      </div>
                    </div>
                  )}

                  <div className="flex flex-col md:flex-row gap-8">
                    {/* Icône du projet - Plus grande et élégante */}
                    <div className="flex-shrink-0">
                      <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                        {project.id === 1 ? (
                          <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                          </svg>
                        ) : project.id === 2 ? (
                          <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        ) : project.id === 3 ? (
                          <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                          </svg>
                        ) : project.id === 4 ? (
                          <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                        ) : project.id === 5 ? (
                          <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                        ) : project.id === 6 ? (
                          <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        ) : (
                          <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                        )}
                      </div>
                    </div>

                    {/* Contenu du projet */}
                    <div className="flex-1 space-y-6">
                      {/* Titre et badges */}
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors leading-tight">
                          {project.title}
                        </h3>
                        <div className="flex flex-wrap gap-3">
                          <span className="px-4 py-2 bg-blue-900/40 border border-blue-700/50 rounded-lg text-blue-300 text-sm font-medium">
                            {project.module}
                          </span>
                          <span className="px-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-lg text-gray-400 text-sm">
                            {project.period}
                          </span>
                        </div>
                      </div>

                      {/* Score pour le défi IA */}
                      {project.badge && (
                        <div className="bg-gradient-to-r from-yellow-900/30 to-amber-900/20 border-2 border-yellow-600/40 rounded-xl p-5">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-300 font-semibold">Score de prédiction</span>
                            <span className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">
                              {project.badge.score}
                            </span>
                          </div>
                        </div>
                      )}

                      {/* Description */}
                      <p className="text-gray-300 leading-relaxed text-base">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, index) => (
                            <span 
                              key={index}
                              className="px-3 py-1.5 bg-gray-800/60 border border-gray-700/40 rounded-lg text-sm text-gray-300 hover:border-blue-600/50 hover:bg-gray-800/80 transition-all"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Lien vers détails */}
                      <div className="pt-2">
                        <div className="inline-flex items-center gap-2 text-blue-400 group-hover:text-blue-300 transition-colors font-medium">
                          <span>Voir les détails du projet</span>
                          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Call to action */}
          <div className="mt-12 bg-gradient-to-r from-blue-900/30 to-cyan-900/20 border border-blue-700/50 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-3">Intéressé par mes travaux ?</h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Ces projets démontrent ma capacité à résoudre des problèmes complexes en IA et Data Science. 
              Je suis disponible pour un stage de 6 mois à partir d'Avril 2026.
            </p>
            <Link href="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all hover:shadow-lg hover:shadow-blue-600/50">
              Me contacter
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}