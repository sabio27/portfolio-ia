import Navbar from '@/components/Navbar'
import Link from 'next/link'

export default function DefiIAAriel() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-16 p-4 sm:p-6 md:p-12">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link href="/projects" className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Retour aux projets
            </Link>
          </div>

          {/* En-tête du projet */}
          <div className="mb-12">
            <div className="flex items-start gap-6 mb-6">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-yellow-500 to-amber-600 flex items-center justify-center flex-shrink-0 shadow-xl">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <div className="flex-1">
                <h1 className="text-4xl font-bold text-white mb-4">
                  Défi IA 2025 - Détection d'eau et nuages dans atmosphères d'exoplanètes
                </h1>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-blue-900/30 border border-blue-800/30 rounded-full text-blue-300 font-medium">
                    Compétition IA - Mission ARIEL (ESA)
                  </span>
                  <span className="px-4 py-2 bg-blue-900/20 rounded-full text-gray-400">
                    Janvier 2025
                  </span>
                </div>
              </div>
            </div>

            {/* Badges de réalisation */}
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              {/* Badge National - Plus mis en avant */}
              <div className="bg-gradient-to-br from-green-900/40 to-emerald-900/30 border-2 border-green-600/50 rounded-xl p-6 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <div className="text-5xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">
                  3ème
                </div>
                <div className="text-gray-300 font-semibold">Classement National</div>
              </div>
              
              {/* Badge International */}
              <div className="bg-gradient-to-br from-yellow-900/30 to-amber-900/20 border-2 border-yellow-600/40 rounded-xl p-6 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="text-5xl font-bold bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent mb-2">
                  12ème
                </div>
                <div className="text-gray-300 font-semibold">Classement International</div>
              </div>
              
              {/* Score */}
              <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/20 border-2 border-blue-600/40 rounded-xl p-6 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                  0.974
                </div>
                <div className="text-gray-300 font-semibold">Score de prédiction</div>
              </div>
            </div>
          </div>

          {/* Contexte scientifique */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              Contexte scientifique
            </h2>
            <div className="bg-gray-900/50 border border-blue-900/30 rounded-xl p-6 space-y-4">
              <p className="text-gray-300 leading-relaxed">
                La <span className="text-blue-400 font-semibold">mission ARIEL</span> (Atmospheric Remote-sensing Infrared Exoplanet Laboratory) 
                est une mission spatiale de l'<span className="text-blue-400 font-semibold">ESA</span> (Agence Spatiale Européenne) 
                destinée à étudier les atmosphères des exoplanètes.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Prévue pour <span className="text-blue-400 font-semibold">2029</span>, ARIEL vise à révéler les compositions 
                chimiques et physiques de ces atmosphères ainsi que leur structure, en observant des planètes autour d'étoiles 
                différentes du Soleil. Ces observations permettront de mieux comprendre la diversité des exoplanètes et les 
                conditions nécessaires pour la formation et l'évolution des mondes habitables.
              </p>
            </div>
          </section>

          {/* Objectif du défi */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              Objectif du défi
            </h2>
            <div className="bg-gray-900/50 border border-blue-900/30 rounded-xl p-6 space-y-4">
              <p className="text-gray-300 leading-relaxed">
                Les données du Défi IA sont des <span className="text-blue-400 font-semibold">spectres simulés d'ARIEL</span> représentant 
                le produit final des observations de transits planétaires.
              </p>
              <p className="text-gray-300 leading-relaxed">
                L'objectif est de <span className="text-blue-400 font-semibold">détecter dans ces spectres la présence ou l'absence d'eau 
                et de nuages</span>. C'est donc une <span className="text-blue-400 font-semibold">classification à deux classes binaires</span>.
              </p>
              <div className="bg-blue-900/20 border border-blue-800/30 rounded-lg p-4 mt-4">
                <h3 className="text-lg font-semibold text-white mb-2">Classes à prédire :</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Présence ou absence d'eau (H₂O)
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                    Présence ou absence de nuages
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Approche technique */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              Technologies utilisées
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Python',
                'Machine Learning',
                'Classification binaire',
                'Traitement du signal',
                'Analyse spectrale',
                'Astrophysique'
              ].map((tech, index) => (
                <div key={index} className="bg-gray-900/50 border border-blue-900/30 rounded-lg p-4 hover:border-blue-600/50 transition-all">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-300 font-medium">{tech}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Résultats */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-600 to-amber-600 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              Résultats obtenus
            </h2>
            <div className="bg-gradient-to-br from-gray-900/70 to-gray-800/50 border-2 border-blue-600/40 rounded-xl p-8">
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-white mb-4">Classements</h3>
                <div className="flex flex-wrap justify-center gap-4">
                  <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    3ème place - National
                  </div>
                  <div className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-500 to-amber-600 text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
                    </svg>
                    12ème place - International
                  </div>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-blue-900/20 border border-blue-700/30 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">0.974</div>
                  <div className="text-sm text-gray-400">Score de prédiction</div>
                </div>
                <div className="bg-green-900/20 border border-green-700/30 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">Top 3</div>
                  <div className="text-sm text-gray-400">National</div>
                </div>
                <div className="bg-yellow-900/20 border border-yellow-700/30 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">Top 15%</div>
                  <div className="text-sm text-gray-400">International</div>
                </div>
              </div>
            </div>
          </section>

          {/* Compétences développées */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-600 to-blue-600 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              Compétences développées
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: 'Machine Learning', desc: 'Classification binaire multi-labels' },
                { title: 'Traitement du signal', desc: 'Analyse de spectres atmosphériques' },
                { title: 'Optimisation', desc: 'Tuning et validation croisée' },
                { title: 'Travail en équipe', desc: 'Collaboration et partage d\'idées' },
                { title: 'Astrophysique appliquée', desc: 'Compréhension des données ARIEL' },
                { title: 'Data Science', desc: 'Pipeline complet ML en compétition' }
              ].map((skill, index) => (
                <div key={index} className="bg-gray-900/50 border border-blue-900/30 rounded-lg p-4 hover:border-blue-600/50 transition-all group">
                  <h3 className="text-white font-semibold mb-1 group-hover:text-blue-400 transition-colors">{skill.title}</h3>
                  <p className="text-sm text-gray-400">{skill.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-blue-900/30">
            <Link href="/projects" className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Tous les projets
            </Link>
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all hover:shadow-lg hover:shadow-blue-600/50">
              Me contacter
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}