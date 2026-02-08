import Sidebar from '@/components/Sidebar'
import Link from 'next/link'

export default function ReussiteAcademique() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      
      <main className="flex-1 ml-64 p-12">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link href="/projects" className="text-blue-400 hover:text-blue-300 transition-colors">
              ← Retour aux projets
            </Link>
          </div>

          {/* En-tête */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">
              Analyse des facteurs influençant la réussite académique
            </h1>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-900/30 border border-blue-800/30 rounded-full text-blue-300 text-sm">
                Module R avec Machine Learning
              </span>
              <span className="px-3 py-1 bg-blue-900/20 rounded-full text-gray-400 text-sm">
                Master 1 - 2024/2025
              </span>
            </div>
          </div>

          {/* Description */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Contexte du projet</h2>
            <div className="bg-dark-900/50 backdrop-blur-sm border border-blue-900/30 rounded-xl p-6">
              <p className="text-gray-300 leading-relaxed mb-4">
                Projet du module R avec Machine Learning visant à identifier les facteurs clés 
                de la réussite scolaire et développer un modèle prédictif déployé sur R-Shiny.
              </p>
            </div>
          </section>

          {/* Objectifs */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Objectifs</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-dark-900/50 backdrop-blur-sm border border-blue-900/30 rounded-xl p-6">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-6 h-6 border-2 border-white rounded"></div>
                </div>
                <h3 className="font-semibold text-white mb-2">Visualisation</h3>
                <p className="text-gray-400 text-sm">
                  Identifier les variables les plus liées à la réussite scolaire par la visualisation
                </p>
              </div>
              <div className="bg-dark-900/50 backdrop-blur-sm border border-blue-900/30 rounded-xl p-6">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-6 h-6 border-2 border-white rounded-sm"></div>
                </div>
                <h3 className="font-semibold text-white mb-2">Modèle ML</h3>
                <p className="text-gray-400 text-sm">
                  Construire un modèle de machine learning pour prédire la réussite académique
                </p>
              </div>
              <div className="bg-dark-900/50 backdrop-blur-sm border border-blue-900/30 rounded-xl p-6">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-6 h-6 border-2 border-white rounded-full"></div>
                </div>
                <h3 className="font-semibold text-white mb-2">Application R-Shiny</h3>
                <p className="text-gray-400 text-sm">
                  Concevoir une application avec R-Shiny pour présenter les résultats
                </p>
              </div>
            </div>
          </section>

          {/* Technologies */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Technologies utilisées</h2>
            <div className="bg-dark-900/50 backdrop-blur-sm border border-blue-900/30 rounded-xl p-6">
              <div className="flex flex-wrap gap-3">
                {['R', 'Machine Learning', 'R-Shiny', 'ggplot2', 'tidyverse', 'caret'].map(tech => (
                  <span key={tech} className="px-4 py-2 bg-blue-900/20 border border-blue-800/30 rounded-lg text-blue-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* Application interactive */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Application interactive</h2>
            <div className="bg-dark-900/50 backdrop-blur-sm border border-blue-900/30 rounded-xl p-6">
              <p className="text-gray-300 mb-4">
                L'application R-Shiny permet d'explorer les données et de faire des prédictions 
                en temps réel sur la réussite académique.
              </p>
              <div className="w-full h-[800px] border border-blue-900/30 rounded-xl overflow-hidden">
                <iframe 
                  src="https://sabio-27.shinyapps.io/projet_r_exam/"
                  width="100%"
                  height="100%"
                  className="bg-white"
                  title="Application R-Shiny - Réussite Académique"
                />
              </div>
              <p className="text-gray-400 text-sm mt-4">
                Si l'application ne s'affiche pas, vous pouvez{' '}
                <a 
                  href="https://sabio-27.shinyapps.io/projet_r_exam/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  l'ouvrir dans un nouvel onglet
                </a>
              </p>
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