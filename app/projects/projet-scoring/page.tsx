import Navbar from '@/components/Navbar'
import Link from 'next/link'

export default function NomDuProjet() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-16 p-4 sm:p-6 md:p-12">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link href="/projects" className="text-blue-400 hover:text-blue-300 transition-colors">
              ← Retour aux projets
            </Link>
          </div>

          {/* En-tête */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">
              TITRE DU PROJET
            </h1>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-900/30 border border-blue-800/30 rounded-full text-blue-300 text-sm">
                Module XXX
              </span>
              <span className="px-3 py-1 bg-blue-900/20 rounded-full text-gray-400 text-sm">
                Master X - Année
              </span>
            </div>
          </div>

          {/* Contexte */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Contexte du projet</h2>
            <div className="bg-dark-900/50 backdrop-blur-sm border border-blue-900/30 rounded-xl p-6">
              <p className="text-gray-300 leading-relaxed">
                Description du contexte du projet...
              </p>
            </div>
          </section>

          {/* Objectifs */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Objectifs</h2>
            <div className="space-y-4">
              <div className="bg-dark-900/50 backdrop-blur-sm border border-blue-900/30 rounded-xl p-6">
                <h3 className="font-semibold text-white mb-2">Objectif 1</h3>
                <p className="text-gray-400">Description...</p>
              </div>
              <div className="bg-dark-900/50 backdrop-blur-sm border border-blue-900/30 rounded-xl p-6">
                <h3 className="font-semibold text-white mb-2">Objectif 2</h3>
                <p className="text-gray-400">Description...</p>
              </div>
              <div className="bg-dark-900/50 backdrop-blur-sm border border-blue-900/30 rounded-xl p-6">
                <h3 className="font-semibold text-white mb-2">Objectif 3</h3>
                <p className="text-gray-400">Description...</p>
              </div>
            </div>
          </section>

          {/* Technologies */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Technologies utilisées</h2>
            <div className="bg-dark-900/50 backdrop-blur-sm border border-blue-900/30 rounded-xl p-6">
              <div className="flex flex-wrap gap-3">
                {['Tech1', 'Tech2', 'Tech3', 'Tech4'].map(tech => (
                  <span key={tech} className="px-4 py-2 bg-blue-900/20 border border-blue-800/30 rounded-lg text-blue-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* Méthodologie (optionnel) */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Méthodologie</h2>
            <div className="space-y-4">
              <div className="bg-dark-900/50 backdrop-blur-sm border border-blue-900/30 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Étape 1</h3>
                    <p className="text-gray-400">Description de l'étape...</p>
                  </div>
                </div>
              </div>
              <div className="bg-dark-900/50 backdrop-blur-sm border border-blue-900/30 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Étape 2</h3>
                    <p className="text-gray-400">Description de l'étape...</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Résultats (optionnel) */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Résultats</h2>
            <div className="bg-dark-900/50 backdrop-blur-sm border border-blue-900/30 rounded-xl p-6">
              <p className="text-gray-300 mb-4">
                Description des résultats obtenus...
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-blue-900/20 rounded-lg">
                  <div className="text-3xl font-bold text-blue-400 mb-2">XX%</div>
                  <div className="text-sm text-gray-400">Métrique 1</div>
                </div>
                <div className="text-center p-4 bg-blue-900/20 rounded-lg">
                  <div className="text-3xl font-bold text-blue-400 mb-2">XX</div>
                  <div className="text-sm text-gray-400">Métrique 2</div>
                </div>
              </div>
            </div>
          </section>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-blue-900/30">
            <Link 
              href="/projects" 
              className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Tous les projets
            </Link>
            <Link 
              href="/contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-all"
            >
              Me contacter
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}