import Navbar from '@/components/Navbar'
import Link from 'next/link'

export default function ScoringClientAerien() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pt-16 p-4 sm:p-6 md:p-12">
        <div className="max-w-4xl mx-auto">

          {/* Bouton retour */}
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-8 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Retour aux projets
          </Link>

          {/* En-tête */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-4 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm font-semibold border border-blue-600/30">
                Machine Learning
              </span>
              <span className="px-4 py-1 bg-cyan-600/20 text-cyan-400 rounded-full text-sm font-semibold border border-cyan-600/30">
                Scoring
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                Système de Scoring — Satisfaction Client Aérien
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-6">
              Modèle prédictif de satisfaction passager à partir de données réelles d'expérience client,
              comparant régression logistique et Random Forest avec optimisation du seuil de décision.
            </p>

            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Avril 2026
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Koffi Koffi Ambroise — Projet Scoring
              </div>
            </div>
          </div>

          {/* Contexte */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full"></div>
              Contexte et Problématique
            </h2>

            <div className="bg-gray-900/50 border border-blue-900/30 rounded-2xl p-6 mb-6">
              <h3 className="text-xl font-semibold text-blue-400 mb-4">Enjeu Métier</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Ce projet de fin de module "Projet Scoring" vise à développer un système de prédiction
                de la satisfaction des clients d'une compagnie aérienne. À partir de données réelles
                couvrant l'expérience client (services à bord, ponctualité, confort, etc.), l'objectif
                est d'identifier en amont les passagers à risque d'insatisfaction et d'adapter les
                services en conséquence.
              </p>
              <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded">
                <p className="text-blue-300 font-semibold">
                  Comment prédire la satisfaction d'un passager à partir de ses évaluations de service,
                  avec un seuil de décision optimisé pour le contexte métier ?
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-900/50 border border-cyan-900/30 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-cyan-400 mb-3">Objectifs Principaux</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">▸</span>
                    <span>Prédire la satisfaction (satisfait / non satisfait)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">▸</span>
                    <span>Comparer régression logistique et Random Forest</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">▸</span>
                    <span>Sélectionner les variables significatives</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">▸</span>
                    <span>Définir un seuil de décision métier optimal</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-900/50 border border-teal-900/30 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-teal-400 mb-3">Défis Majeurs</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-teal-400 mt-1">▸</span>
                    <span>Valeurs aberrantes significatives dans les données</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-400 mt-1">▸</span>
                    <span>Multicolinéarité entre retards départ / arrivée</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-400 mt-1">▸</span>
                    <span>Équilibre précision / rappel selon l'usage métier</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-400 mt-1">▸</span>
                    <span>Codes catégoriels erronés (MMMMM, XXXXXXXX)</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Dataset */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-cyan-500 to-teal-500 rounded-full"></div>
              Dataset et Prétraitement
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/20 border-2 border-blue-600/50 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">103 900</div>
                <div className="text-gray-300 text-sm">Observations nettoyées</div>
                <div className="text-gray-400 text-xs mt-1">24 variables</div>
              </div>
              <div className="bg-gradient-to-br from-cyan-900/30 to-teal-900/20 border-2 border-cyan-600/50 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">56.7%</div>
                <div className="text-gray-300 text-sm">Clients non satisfaits</div>
                <div className="text-gray-400 text-xs mt-1">Classe majoritaire</div>
              </div>
              <div className="bg-gradient-to-br from-teal-900/30 to-green-900/20 border-2 border-teal-600/50 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-teal-400 mb-2">5</div>
                <div className="text-gray-300 text-sm">Lignes supprimées</div>
                <div className="text-gray-400 text-xs mt-1">Soit 0.005% du dataset</div>
              </div>
            </div>

            <div className="bg-gray-900/50 border border-cyan-900/30 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-cyan-400 mb-4">Pipeline de Nettoyage</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <h4 className="text-white font-semibold mb-2">Valeurs manquantes</h4>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    <li>• Médiane pour les variables numériques</li>
                    <li>• Mode pour les catégorielles</li>
                    <li>• Lignes entièrement vides supprimées</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Valeurs aberrantes</h4>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    <li>• Notes filtrées dans [0, 5]</li>
                    <li>• Retards bornés à 1 000 min</li>
                    <li>• Distance de vol ≤ 20 000 km</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Catégorielles</h4>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    <li>• Suppression des codes erronés</li>
                    <li>• Encodage dummy (drop_first)</li>
                    <li>• Binarisation de la cible (0/1)</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Modèles */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-teal-500 to-blue-500 rounded-full"></div>
              Construction des Modèles
            </h2>

            <div className="space-y-6">
              {/* Régression logistique */}
              <div className="bg-gradient-to-r from-blue-900/20 to-blue-800/10 border-2 border-blue-700/30 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <h3 className="text-2xl font-bold text-blue-400">Régression Logistique</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Premier modèle exploratoire via <code className="bg-blue-900/30 px-1 rounded">sm.Logit</code> pour
                  identifier les variables significatives (p-value {'<'} 0.05). Flight Distance retirée (non significative),
                  Departure Delay retiré (forte corrélation avec Arrival Delay : r = 0.96). Modèle réduit à
                  10 variables comparé au modèle complet.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <div className="text-blue-400 font-semibold">Accuracy</div>
                    <div className="text-gray-300">87.5%</div>
                  </div>
                  <div>
                    <div className="text-blue-400 font-semibold">F1 classe 0</div>
                    <div className="text-gray-300">0.89</div>
                  </div>
                  <div>
                    <div className="text-blue-400 font-semibold">F1 classe 1</div>
                    <div className="text-gray-300">0.85</div>
                  </div>
                  <div>
                    <div className="text-blue-400 font-semibold">ROC AUC</div>
                    <div className="text-gray-300">0.925</div>
                  </div>
                </div>
              </div>

              {/* Random Forest */}
              <div className="bg-gradient-to-r from-teal-900/20 to-teal-800/10 border-2 border-teal-700/30 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                  <h3 className="text-2xl font-bold text-teal-400">Random Forest ✦ Modèle retenu</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  100 estimateurs, critère entropie, profondeur max 20. Capture les interactions non linéaires
                  entre variables. Distribution des scores quasi bimodale : clients insatisfaits concentrés
                  près de 0, satisfaits près de 1 — chevauchement quasi nul.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <div className="text-teal-400 font-semibold">Accuracy</div>
                    <div className="text-gray-300">96.1%</div>
                  </div>
                  <div>
                    <div className="text-teal-400 font-semibold">F1 classe 0</div>
                    <div className="text-gray-300">0.97</div>
                  </div>
                  <div>
                    <div className="text-teal-400 font-semibold">F1 classe 1</div>
                    <div className="text-gray-300">0.95</div>
                  </div>
                  <div>
                    <div className="text-teal-400 font-semibold">ROC AUC</div>
                    <div className="text-gray-300">0.993</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Résultats */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-green-500 to-teal-500 rounded-full"></div>
              Résultats Clés
            </h2>

            <div className="grid md:grid-cols-4 gap-4 mb-8">
              <div className="bg-gradient-to-br from-teal-900/30 to-green-900/20 border-2 border-teal-600/50 rounded-xl p-6 text-center">
                <div className="text-5xl font-bold text-teal-400 mb-2">96%</div>
                <div className="text-gray-300 text-sm font-semibold">Accuracy Globale</div>
                <div className="text-teal-400 text-xs mt-2">+8.6 pts vs Logistique</div>
              </div>
              <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/20 border-2 border-blue-600/50 rounded-xl p-6 text-center">
                <div className="text-5xl font-bold text-blue-400 mb-2">0.99</div>
                <div className="text-gray-300 text-sm font-semibold">ROC AUC</div>
                <div className="text-blue-400 text-xs mt-2">Quasi parfait</div>
              </div>
              <div className="bg-gradient-to-br from-cyan-900/30 to-teal-900/20 border-2 border-cyan-600/50 rounded-xl p-6 text-center">
                <div className="text-5xl font-bold text-cyan-400 mb-2">0.97</div>
                <div className="text-gray-300 text-sm font-semibold">F1 Insatisfaits</div>
                <div className="text-cyan-400 text-xs mt-2">Classe 0</div>
              </div>
              <div className="bg-gradient-to-br from-green-900/30 to-teal-900/20 border-2 border-green-600/50 rounded-xl p-6 text-center">
                <div className="text-5xl font-bold text-green-400 mb-2">0.50</div>
                <div className="text-gray-300 text-sm font-semibold">Seuil Optimal</div>
                <div className="text-green-400 text-xs mt-2">F1 = 0.9536</div>
              </div>
            </div>

            {/* Variables importantes */}
            <div className="bg-gray-900/50 border border-teal-900/30 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-teal-400 mb-4">Variables les Plus Importantes (Random Forest)</h3>
              <div className="space-y-3">
                {[
                  { name: 'Online boarding', pct: 92 },
                  { name: 'Inflight wifi service', pct: 84 },
                  { name: 'Type of Travel (Personnel)', pct: 58 },
                  { name: 'Class (Eco)', pct: 30 },
                  { name: 'Inflight entertainment', pct: 28 },
                  { name: 'Seat comfort', pct: 25 },
                ].map((v) => (
                  <div key={v.name} className="flex items-center gap-4">
                    <span className="text-gray-300 text-sm w-56 shrink-0">{v.name}</span>
                    <div className="flex-1 bg-gray-800 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-teal-500 h-2 rounded-full"
                        style={{ width: `${v.pct}%` }}
                      />
                    </div>
                    <span className="text-gray-400 text-xs w-8 text-right">{v.pct}%</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 text-xs mt-4">Échelle relative basée sur les importances du modèle RF</p>
            </div>
          </section>

          {/* Seuil de décision */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-teal-500 rounded-full"></div>
              Optimisation du Seuil de Décision
            </h2>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-cyan-900/20 to-teal-900/20 border-2 border-cyan-700/30 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                  <h3 className="text-2xl font-bold text-cyan-400">Analyse des Seuils (0.10 → 0.90)</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Le seuil par défaut de <strong className="text-white">0.50</strong> maximise le F1-score
                  à <strong className="text-white">0.9536</strong>, avec précision 96.9 % et rappel 93.8 %.
                  Il peut être ajusté selon les priorités métier.
                </p>
                <div className="bg-cyan-900/20 border-l-4 border-cyan-500 p-4 rounded">
                  <div className="text-cyan-300 text-sm space-y-1">
                    <div>Seuil <strong>0.45</strong> → Rappel ↑ : détecte plus de clients à risque</div>
                    <div>Seuil <strong>0.50</strong> → F1 maximal : meilleur équilibre global ✦</div>
                    <div>Seuil <strong>0.55–0.60</strong> → Précision ↑ : limite les faux positifs</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Comparaison */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full"></div>
              Comparaison des Modèles
            </h2>

            <div className="bg-gray-900/50 border border-blue-900/30 rounded-xl p-6">
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="py-3 pr-6 text-gray-400 font-medium">Métrique</th>
                      <th className="py-3 pr-6 text-blue-400 font-medium">Logistique</th>
                      <th className="py-3 pr-6 text-blue-300 font-medium">Logistique réduit</th>
                      <th className="py-3 text-teal-400 font-semibold">Random Forest ✦</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800">
                    {[
                      ['Accuracy', '87.5%', '86.6%', '96.1%'],
                      ['F1 (insatisfaits)', '0.89', '0.88', '0.97'],
                      ['F1 (satisfaits)', '0.85', '0.84', '0.95'],
                      ['ROC AUC', '0.925', '0.919', '0.993'],
                      ['Nb paramètres', '23', '11', '—'],
                    ].map(([metric, log, logR, rf]) => (
                      <tr key={metric} className="hover:bg-gray-800/30">
                        <td className="py-3 pr-6 text-gray-400">{metric}</td>
                        <td className="py-3 pr-6 text-gray-300">{log}</td>
                        <td className="py-3 pr-6 text-gray-300">{logR}</td>
                        <td className="py-3 text-teal-300 font-semibold">{rf}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Technologies et compétences */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-teal-500 to-cyan-500 rounded-full"></div>
              Technologies et Compétences
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gray-900/50 border border-blue-900/30 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-blue-400 mb-4">Stack Technique</h3>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'Pandas', 'NumPy', 'scikit-learn', 'statsmodels', 'Matplotlib', 'Seaborn'].map((t) => (
                    <span key={t} className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-lg text-sm border border-blue-600/30">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-gray-900/50 border border-teal-900/30 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-teal-400 mb-4">Compétences Développées</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-teal-400 mt-1">✓</span>
                    <span>Régression logistique et analyse des p-values</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-400 mt-1">✓</span>
                    <span>Modèles d'ensemble (Random Forest)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-400 mt-1">✓</span>
                    <span>Traitement de données réelles (outliers, NA)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-400 mt-1">✓</span>
                    <span>Optimisation du seuil de décision métier</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-teal-900/20 to-blue-900/20 border-2 border-teal-600/50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-teal-400 mb-4">Conclusion et Perspectives</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Le Random Forest s'impose comme le modèle final avec une précision de 96 % et un AUC de 0.99,
                surpassant nettement la régression logistique sur tous les indicateurs. La combinaison entre
                analyse statistique (logit) pour la sélection de variables et modèle non-linéaire pour la
                prédiction finale s'avère très efficace. Le seuil de 0.50 est conservé pour un usage général,
                mais reste ajustable selon les priorités métier.
              </p>
              <div className="bg-teal-900/20 border-l-4 border-teal-500 p-4 rounded">
                <h3 className="text-white font-semibold mb-2">Perspectives Futures</h3>
                <ul className="space-y-1 text-gray-300 text-sm">
                  <li>• Intégration d'un modèle XGBoost ou LightGBM pour comparaison</li>
                  <li>• Analyse SHAP pour l'explicabilité des prédictions individuelles</li>
                  <li>• Déploiement d'une API de scoring en temps réel</li>
                  <li>• Segmentation des clients selon le score de satisfaction</li>
                </ul>
              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  )
}