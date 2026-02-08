import Sidebar from '@/components/Sidebar'

export default function About() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      
      <main className="flex-1 ml-64 p-12">
        <div className="max-w-4xl mx-auto">
          {/* En-tête de page */}
          <div className="mb-12">
            <h1 className="text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                À propos
              </span>
            </h1>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
          </div>

          {/* Présentation principale */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">Qui suis-je ?</h2>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-blue-900/30 rounded-xl p-8">
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Ingénieur en formation spécialisé en Intelligence Artificielle et Data Science, 
                je possède des compétences solides en apprentissage profond, traitement du langage 
                naturel et systèmes intelligents, validées par des projets académiques d'envergure 
                professionnelle.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Rigoureux et passionné, je mobilise des connaissances théoriques en mathématiques 
                appliquées pour résoudre des problèmes complexes, générer des insights stratégiques 
                et développer des solutions innovantes.
              </p>
            </div>
          </section>

          {/* Parcours académique */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">Parcours Académique</h2>
            
            <div className="space-y-6">
              {/* Master 2 */}
              <div className="relative pl-8 pb-8 border-l-2 border-blue-600">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                <div className="bg-gray-900/50 backdrop-blur-sm border border-blue-900/30 rounded-xl p-6 hover:border-blue-700/50 transition-all">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-blue-400">Master 2 – Intelligence Artificielle</h3>
                    <span className="text-sm text-gray-500 bg-blue-900/20 px-3 py-1 rounded-full">
                      2025-2026 (en cours)
                    </span>
                  </div>
                  <p className="text-gray-400 mb-3">
                    Université Félix Houphouët-Boigny | Abidjan, Côte d'Ivoire
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-3 py-1 bg-blue-900/20 border border-blue-800/30 rounded-full text-blue-300">
                      Apprentissage Profond
                    </span>
                    <span className="text-xs px-3 py-1 bg-blue-900/20 border border-blue-800/30 rounded-full text-blue-300">
                      Traitement du Langage Naturel
                    </span>
                    <span className="text-xs px-3 py-1 bg-blue-900/20 border border-blue-800/30 rounded-full text-blue-300">
                      Systèmes Intelligents
                    </span>
                    <span className="text-xs px-3 py-1 bg-blue-900/20 border border-blue-800/30 rounded-full text-blue-300">
                      Deep Learning
                    </span>
                  </div>
                </div>
              </div>

              {/* Master 1 */}
              <div className="relative pl-8 pb-8 border-l-2 border-blue-700">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-700 rounded-full"></div>
                <div className="bg-gray-900/50 backdrop-blur-sm border border-blue-900/30 rounded-xl p-6 hover:border-blue-700/50 transition-all">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-blue-400">Master 1 – Data Science / Intelligence Artificielle</h3>
                    <span className="text-sm text-gray-500 bg-blue-900/20 px-3 py-1 rounded-full">
                      2024-2025
                    </span>
                  </div>
                  <p className="text-gray-400 mb-3">
                    Université Félix Houphouët-Boigny | Abidjan, Côte d'Ivoire
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-3 py-1 bg-blue-900/20 border border-blue-800/30 rounded-full text-blue-300">
                      Machine Learning
                    </span>
                    <span className="text-xs px-3 py-1 bg-blue-900/20 border border-blue-800/30 rounded-full text-blue-300">
                      Modélisation Statistique
                    </span>
                    <span className="text-xs px-3 py-1 bg-blue-900/20 border border-blue-800/30 rounded-full text-blue-300">
                      Analyse Prédictive
                    </span>
                    <span className="text-xs px-3 py-1 bg-blue-900/20 border border-blue-800/30 rounded-full text-blue-300">
                      Visualisation de Données
                    </span>
                  </div>
                </div>
              </div>

              {/* Licence */}
              <div className="relative pl-8 pb-8 border-l-2 border-blue-800">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-800 rounded-full"></div>
                <div className="bg-gray-900/50 backdrop-blur-sm border border-blue-900/30 rounded-xl p-6 hover:border-blue-700/50 transition-all">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-blue-400">Licence – Mathématiques Appliquées</h3>
                    <span className="text-sm text-gray-500 bg-blue-900/20 px-3 py-1 rounded-full">
                      2018-2019
                    </span>
                  </div>
                  <p className="text-gray-400 mb-3">
                    Université Félix Houphouët-Boigny | Abidjan, Côte d'Ivoire
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-3 py-1 bg-blue-900/20 border border-blue-800/30 rounded-full text-blue-300">
                      Mathématiques Discrètes
                    </span>
                    <span className="text-xs px-3 py-1 bg-blue-900/20 border border-blue-800/30 rounded-full text-blue-300">
                      Calcul Scientifique
                    </span>
                    <span className="text-xs px-3 py-1 bg-blue-900/20 border border-blue-800/30 rounded-full text-blue-300">
                      Statistiques
                    </span>
                  </div>
                </div>
              </div>

              {/* Baccalauréat */}
              <div className="relative pl-8">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-900 rounded-full"></div>
                <div className="bg-gray-900/50 backdrop-blur-sm border border-blue-900/30 rounded-xl p-6 hover:border-blue-700/50 transition-all">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-blue-400">Diplôme du Baccalauréat – Série D</h3>
                    <span className="text-sm text-gray-500 bg-blue-900/20 px-3 py-1 rounded-full">
                      2013-2014
                    </span>
                  </div>
                  <p className="text-gray-400">
                    Lycée Moderne de Divo | Divo, Côte d'Ivoire
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Points forts */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">Mes Points Forts</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-900/50 backdrop-blur-sm border border-blue-900/30 rounded-xl p-6 hover:border-blue-600/50 transition-all group">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Formation Solide</h3>
                <p className="text-gray-400">
                  Parcours académique complet en mathématiques appliquées, Data Science et IA
                </p>
              </div>

              <div className="bg-gray-900/50 backdrop-blur-sm border border-blue-900/30 rounded-xl p-6 hover:border-blue-600/50 transition-all group">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Compétences Techniques</h3>
                <p className="text-gray-400">
                  Maîtrise de l'apprentissage profond, NLP et systèmes intelligents
                </p>
              </div>

              <div className="bg-gray-900/50 backdrop-blur-sm border border-blue-900/30 rounded-xl p-6 hover:border-blue-600/50 transition-all group">
                <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Projets Concrets</h3>
                <p className="text-gray-400">
                  Expérience pratique validée par des projets académiques d'envergure professionnelle
                </p>
              </div>

              <div className="bg-gray-900/50 backdrop-blur-sm border border-blue-900/30 rounded-xl p-6 hover:border-blue-600/50 transition-all group">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-600 to-amber-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Rigueur & Passion</h3>
                <p className="text-gray-400">
                  Approche méthodique combinée à une passion pour l'innovation technologique
                </p>
              </div>
            </div>
          </section>

          {/* Objectif professionnel */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6">Objectif Professionnel</h2>
            <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/20 border border-blue-700/50 rounded-xl p-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    Recherche de Stage en Intelligence Artificielle
                  </h3>
                  <div className="space-y-2 text-gray-300">
                    <p className="flex items-center gap-2">
                      <span className="text-blue-400">•</span>
                      <span><strong>Durée :</strong> 6 mois</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-blue-400">•</span>
                      <span><strong>Disponibilité :</strong> À partir d'Avril 2026</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-blue-400">•</span>
                      <span><strong>Domaines :</strong> Intelligence Artificielle, Data Science, Machine Learning, Deep Learning</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-blue-400">•</span>
                      <span><strong>Localisation :</strong> Abidjan, Côte d'Ivoire (ou à distance)</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}