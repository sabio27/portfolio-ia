import Navbar from '@/components/Navbar'
import Image from 'next/image'

export default function Certifications() {
  const certifications = [
    {
      id: 1,
      title: "Apply AI: Analyze Customer Reviews",
      organization: "Cisco",
      date: "26 oct. 2025",
      image: "/badges/cisco-ai-reviews.png",
      credlyUrl: "https://www.credly.com/badges/e8280e8e-024f-44e3-9808-280d3c54c9d0/public_url",
      color: "from-green-500 to-green-600"
    },
    {
      id: 2,
      title: "Introduction to Cybersecurity",
      organization: "Cisco",
      date: "26 sept. 2025",
      image: "/badges/cisco-intro-cyber.png",
      credlyUrl: "https://www.credly.com/badges/8bf8bae3-5cf5-4511-af68-748247725c4a/public_url",
      color: "from-green-500 to-green-600"
    },
    {
      id: 3,
      title: "Junior Cybersecurity Analyst Career Path",
      organization: "Cisco",
      date: "12 déc. 2025",
      image: "/badges/cisco-junior-analyst.png",
      credlyUrl: "https://www.credly.com/badges/1ddc94dd-c55d-4c7d-a5d3-75d00bf6ead1/public_url",
      color: "from-cyan-500 to-blue-600"
    },
    {
      id: 4,
      title: "Networking Academy Learn-A-Thon 2025",
      organization: "Cisco",
      date: "14 janv. 2026",
      image: "/badges/cisco-learnathon.png",
      credlyUrl: "https://www.credly.com/badges/04ce72ae-184e-4f33-a448-7fbd54a7935b/public_url",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 5,
      title: "Network Technician Career Path",
      organization: "Cisco",
      date: "4 déc. 2025",
      image: "/badges/cisco-network-tech.png",
      credlyUrl: "https://www.credly.com/badges/1f767dbf-b086-465c-bc1f-1605875d25c8/public_url",
      color: "from-cyan-500 to-blue-600"
    },
  ]

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-16 bg-gray-900">
        {/* En-tête de la page */}
        <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/20 border-b border-blue-800/30">
          <div className="max-w-7xl mx-auto px-8 py-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                  Mes Certifications
                </h1>
                <p className="text-lg text-gray-300">
                  Validation de mes compétences techniques
                </p>
              </div>
            </div>

            {/* Statistiques */}
            <div className="flex gap-6 mt-8">
              <div className="flex items-center gap-3 bg-blue-900/40 px-6 py-3 rounded-xl border border-blue-700/40">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                <div>
                  <div className="text-2xl font-bold text-white">{certifications.length}</div>
                  <div className="text-sm text-gray-400">Certifications</div>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-blue-900/40 px-6 py-3 rounded-xl border border-blue-700/40">
                <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <div>
                  <div className="text-2xl font-bold text-white">1</div>
                  <div className="text-sm text-gray-400">Organisations</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Grille des certifications */}
        <div className="max-w-7xl mx-auto px-8 py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border-2 border-gray-700/30 hover:border-blue-600/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-600/20 overflow-hidden"
              >
                {/* Image du badge */}
                <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center p-6 border-b border-gray-700/30">
                  <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  <div className="relative w-40 h-40 flex items-center justify-center">
                    <img 
                      src={cert.image} 
                      alt={cert.title}
                      className="w-full h-full object-contain drop-shadow-2xl group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Contenu */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-sm font-semibold text-gray-400">
                      {cert.organization}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>Délivré {cert.date}</span>
                  </div>

                  {/* Bouton Credly */}
                  <a
                    href={cert.credlyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white text-center py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/50"
                  >
                    Voir sur Credly
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Section pour ajouter plus de certifications */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-4 bg-blue-900/20 border-2 border-dashed border-blue-700/40 rounded-xl">
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              <span className="text-gray-400 font-medium">
                D'autres certifications seront ajoutées prochainement
              </span>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}