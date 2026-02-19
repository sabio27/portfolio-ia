import Navbar from '@/components/Navbar'

export default function Skills() {
  // Catégories de compétences
  const skillsCategories = [
    {
      title: "Langages de Programmation",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "Python", description: "Maîtrise solide - Projets académiques et analyse de données" },
        { name: "R", description: "Analyse statistique et visualisation (ggplot2, Shiny)" },
        { name: "SQL", description: "Requêtes et gestion de bases de données" },
        { name: "NoSQL", description: "Requêtes et gestion de bases de données" },
      ]
    },
    {
      title: "Intelligence Artificielle & Machine Learning",
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "TensorFlow", description: "Framework de Deep Learning" },
        { name: "PyTorch", description: "Réseaux de neurones et apprentissage profond" },
        { name: "scikit-learn", description: "Machine Learning et modélisation prédictive" },
        { name: "Keras", description: "API haut niveau pour le Deep Learning" },
        { name: "NLP", description: "Traitement du langage naturel" },
        { name: "Computer Vision", description: "Détection de maladies oculaires par Deep Learning" },
      ]
    },
    {
      title: "Visualisation & Business Intelligence",
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Power BI", description: "Dashboards interactifs et analyse des retours produits" },
        { name: "Matplotlib / Seaborn", description: "Visualisation Python" },
        { name: "ggplot2", description: "Visualisation avancée avec R" },
        { name: "R Shiny", description: "Applications web interactives pour présentation de résultats" },
      ]
    },
    {
      title: "Bases de Données",
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "MongoDB", description: "Base de données NoSQL" },
        { name: "InfluxDB", description: "Base de données de séries temporelles (projet)" },
        { name: "SQL", description: "Bases de données relationnelles" },
        { name: "NoSQL", description: "Concepts et architectures non-relationnelles" },
      ]
    },
    {
      title: "Outils & Technologies",
      color: "from-indigo-500 to-purple-500",
      skills: [
        { name: "Git / GitHub", description: "Contrôle de version et collaboration" },
        { name: "Jupyter Notebook", description: "Environnement de développement interactif (Anaconda)" },
        { name: "VS Code", description: "Environnement de développement" },
        { name: "Anaconda", description: "Distribution Python pour Data Science" },
        { name: "Docker", description: "Conteneurisation d'applications (notions)" },
      ]
    },
    {
      title: "Bibliothèques Python",
      color: "from-yellow-500 to-orange-500",
      skills: [
        { name: "Pandas", description: "Manipulation et analyse de données" },
        { name: "NumPy", description: "Calcul numérique et matrices" },
        { name: "Matplotlib", description: "Visualisation de données" },
        { name: "Seaborn", description: "Visualisation statistique" },
        { name: "OpenCV", description: "Traitement d'images (Computer Vision)" },
      ]
    },
  ]

  // Compétences méthodologiques
  const methodologies = [
    "Modélisation Statistique",
    "Analyse Prédictive",
    "Feature Engineering",
    "Analyse Exploratoire",
    "Séries Temporelles",
    "Machine Learning Supervisé",
    "Machine Learning Non-supervisé",
    "Deep Learning",
    "Traitement du Langage Naturel (NLP)",  
    "Computer Vision",
    "IoT",
    "HPC (High Performance Computing)",
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
                Compétences
              </span>
            </h1>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
            <p className="text-gray-400 mt-4 text-lg">
              Compétences techniques acquises à travers mon parcours académique et mes projets
            </p>
          </div>

          {/* Catégories de compétences */}
          <div className="space-y-8 mb-16">
            {skillsCategories.map((category, index) => (
              <div key={index} className="bg-dark-900/50 backdrop-blur-sm border border-blue-900/30 rounded-xl p-8 hover:border-blue-700/50 transition-all">
                {/* En-tête de catégorie */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center`}>
                    <div className="w-6 h-6 border-2 border-white rounded"></div>
                  </div>
                  <h2 className="text-2xl font-bold text-white">{category.title}</h2>
                </div>

                {/* Grille de compétences */}
                <div className="grid md:grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="bg-dark-800/50 border border-blue-900/20 rounded-lg p-4 hover:border-blue-600/40 hover:bg-dark-800/70 transition-all"
                    >
                      <h3 className="text-lg font-semibold text-blue-400 mb-2">
                        {skill.name}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {skill.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Compétences méthodologiques */}
          <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/20 border border-blue-700/50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              Compétences Méthodologiques
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {methodologies.map((method, index) => (
                <div 
                  key={index}
                  className="bg-dark-900/50 border border-blue-800/30 rounded-lg p-4 text-center hover:border-blue-600/50 hover:bg-dark-900/70 transition-all"
                >
                  <div className="w-10 h-10 mx-auto mb-2 bg-blue-600 rounded-lg flex items-center justify-center">
                    <div className="w-5 h-5 bg-white rounded-sm"></div>
                  </div>
                  <p className="text-gray-300 text-sm font-medium">{method}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Note de personnalisation */}
          <div className="mt-8 bg-blue-900/10 border border-blue-800/30 rounded-lg p-6">
            <p className="text-gray-400 text-sm">
              <span className="text-blue-400 font-semibold">Note :</span> Ces compétences reflètent mon parcours académique en Master IA/Data Science. 
              Je continue à développer et approfondir ces compétences à travers de nouveaux projets et formations.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}