import Sidebar from '@/components/Sidebar'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      
      {/* Contenu principal avec marge pour le sidebar */}
      <main className="flex-1 ml-64">
        {/* Particules d'arrière-plan animées */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-1/4 w-2 h-2 bg-blue-400/30 rounded-full animate-[float_6s_ease-in-out_infinite]"></div>
          <div className="absolute top-40 right-1/3 w-1 h-1 bg-cyan-400/40 rounded-full animate-[float_8s_ease-in-out_infinite_1s]"></div>
          <div className="absolute bottom-32 left-1/3 w-1.5 h-1.5 bg-blue-300/30 rounded-full animate-[float_10s_ease-in-out_infinite_2s]"></div>
          <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-cyan-300/40 rounded-full animate-[float_6s_ease-in-out_infinite]"></div>
        </div>

        <div className="min-h-screen flex items-center justify-center p-6 md:p-12 relative">
          <div className="max-w-6xl w-full">
            <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-center">
              
              {/* Photo - Prend 2 colonnes sur desktop */}
              <div className="md:col-span-2 order-2 md:order-1">
                <div className="relative max-w-md mx-auto px-4">
                  {/* Photo principale circulaire */}
                  <div className="relative z-10 group">
                    {/* Cercle de bordure animé gradient */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 via-blue-600 to-cyan-500 animate-pulse"></div>
                    
                    {/* Cercle intermédiaire pour créer l'effet de bordure */}
                    <div className="absolute inset-2 rounded-full bg-gray-900"></div>
                    
                    {/* Conteneur de l'image circulaire */}
                    <div className="relative w-full aspect-square rounded-full overflow-hidden border-8 border-gray-900 shadow-2xl shadow-blue-600/50 group-hover:shadow-blue-500/70 transition-all duration-500">
                      <img 
                        src="/phot1.png" 
                        alt="Koffi Ambroise - Spécialiste IA & Data Science"
                        className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                      />
                      
                      {/* Overlay gradient subtil */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-cyan-600/20 opacity-50 group-hover:opacity-0 transition-opacity duration-500"></div>
                    </div>
                  </div>
                  
                  {/* Cercles décoratifs en arrière-plan */}
                  <div className="absolute -z-10 top-0 left-0 w-full h-full">
                    {/* Grand cercle flou */}
                    <div className="absolute top-1/4 -right-12 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-1/4 -left-12 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl animate-pulse [animation-delay:1s]"></div>
                  </div>
                </div>
              </div>

              {/* Texte - Prend 3 colonnes sur desktop */}
              <div className="md:col-span-3 order-1 md:order-2 space-y-6">
                {/* Badge de statut amélioré */}
                <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-900/40 to-cyan-900/30 border-2 border-blue-600/50 rounded-full backdrop-blur-sm hover:border-blue-500/70 hover:shadow-lg hover:shadow-blue-600/30 transition-all duration-300 group">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 shadow-lg shadow-green-500/50"></span>
                  </span>
                  <span className="text-sm font-semibold text-gray-200 group-hover:text-white transition-colors">
                    Disponible pour un stage de 6 mois
                  </span>
                </div>

                {/* Titre principal avec animation */}
                <div className="space-y-4">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                    <span className="text-gray-200 block mb-3">Bonjour, je suis</span>
                    <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent inline-block">
                      Koffi K. Ambroise
                    </span>
                  </h1>

                  {/* Sous-titre avec meilleur contraste */}
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-100 leading-snug">
                    Spécialiste Intelligence Artificielle & Data Science
                  </h2>
                </div>

                {/* Description améliorée */}
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
                  Ingénieur en formation spécialisé en <span className="text-blue-400 font-semibold">IA</span> et <span className="text-blue-400 font-semibold">Data Science</span>. 
                  Passionné par l'apprentissage profond, le traitement du langage naturel 
                  et le développement de solutions innovantes basées sur les données.
                </p>

                {/* Boutons d'action améliorés avec icônes */}
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <Link 
                    href="/projects" 
                    className="group relative bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3.5 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-600/50 text-center overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                      </svg>
                      Voir mes projets
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </Link>
                  
                  <Link 
                    href="/contact" 
                    className="group relative border-2 border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-3.5 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-600/30 text-center"
                  >
                    <span className="flex items-center justify-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Me contacter
                    </span>
                  </Link>
                </div>

                {/* Statistiques améliorées avec cartes */}
                <div className="grid grid-cols-3 gap-4 md:gap-6 pt-10 border-t-2 border-blue-800/40">
                  <div className="text-center group cursor-default bg-gradient-to-br from-blue-900/30 to-blue-800/10 p-5 md:p-6 rounded-2xl border-2 border-blue-700/30 hover:border-blue-600/60 hover:bg-blue-900/40 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-600/20">
                    <div className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                      2+
                    </div>
                    <div className="text-xs md:text-sm text-gray-300 font-semibold leading-tight">
                      Années d'études<br className="hidden sm:block" /> spécialisées
                    </div>
                  </div>
                  
                  <div className="text-center group cursor-default bg-gradient-to-br from-blue-900/30 to-blue-800/10 p-5 md:p-6 rounded-2xl border-2 border-blue-700/30 hover:border-blue-600/60 hover:bg-blue-900/40 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-600/20">
                    <div className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                      10+
                    </div>
                    <div className="text-xs md:text-sm text-gray-300 font-semibold leading-tight">
                      Projets<br className="hidden sm:block" /> réalisés
                    </div>
                  </div>
                  
                  <div className="text-center group cursor-default bg-gradient-to-br from-blue-900/30 to-blue-800/10 p-5 md:p-6 rounded-2xl border-2 border-blue-700/30 hover:border-blue-600/60 hover:bg-blue-900/40 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-600/20">
                    <div className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                      6
                    </div>
                    <div className="text-xs md:text-sm text-gray-300 font-semibold leading-tight">
                      Certifications
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}