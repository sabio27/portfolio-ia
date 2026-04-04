import Navbar from '@/components/Navbar'
import Link from 'next/link'

export default function AnalyseSentimentsFastFood() {
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
            <div className="flex flex-wrap gap-3 mb-4">
              <span className="px-4 py-1 bg-green-600/20 text-green-400 rounded-full text-sm font-semibold border border-green-600/30">
                NLP
              </span>
              <span className="px-4 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm font-semibold border border-purple-600/30">
                Sentiment Analysis
              </span>
              <span className="px-4 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm font-semibold border border-blue-600/30">
                Machine Learning
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r text-blue-400 mb-3">
                Analyse de Sentiments Fast Food
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-6">
              Classification automatique des sentiments clients sur Twitter pour KFC, McDonald's et Burger King
            </p>

            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Novembre 2025
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
                Module NLP
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Encadré par Dr. Soma
              </div>
            </div>
          </div>

          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-green-500 to-blue-500 rounded-full"></div>
              Introduction et Contexte
            </h2>
            
            <div className="bg-gray-900/50 border border-green-900/30 rounded-2xl p-6 mb-6">
              <h3 className="text-xl font-semibold text-green-400 mb-4">Problématique</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Les réseaux sociaux contiennent des retours immédiats des consommateurs sur les marques de fast-food. L'objectif de ce projet est de <span className="text-green-400 font-semibold">classifier automatiquement la polarité des tweets</span> pour quantifier la satisfaction globale, comparer l'image des marques, et fournir des axes d'amélioration concrets.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/20 border-2 border-green-600/50 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">145 550</div>
                <div className="text-gray-300 text-sm">Tweets analysés</div>
              </div>
              <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/20 border-2 border-blue-600/50 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">3</div>
                <div className="text-gray-300 text-sm">Marques comparées</div>
              </div>
              <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/20 border-2 border-purple-600/50 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">92%</div>
                <div className="text-gray-300 text-sm">Accuracy finale</div>
              </div>
            </div>
          </section>

          {/* Dataset */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
              Dataset et Prétraitement
            </h2>

            <div className="bg-gray-900/50 border border-blue-900/30 rounded-xl p-6 mb-6">
              <h3 className="text-lg font-semibold text-blue-400 mb-4">Caractéristiques du Dataset</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-white font-semibold mb-2">Source</h4>
                  <p className="text-gray-300 text-sm">English dataset.xlsx - Tweets en anglais sur 3 marques</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Répartition</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• McDonald's : 60% (marque la plus commentée)</li>
                    <li>• KFC : 23%</li>
                    <li>• Burger King : 12%</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 border border-purple-900/30 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-purple-400 mb-4">Pipeline de Prétraitement</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
                  <div>
                    <h4 className="text-white font-semibold">Nettoyage Textuel</h4>
                    <p className="text-gray-400 text-sm">Conversion minuscules, suppression ponctuation, accents et caractères spéciaux</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
                  <div>
                    <h4 className="text-white font-semibold">Lemmatisation</h4>
                    <p className="text-gray-400 text-sm">SpaCy (en_core_web_sm) pour réduction des mots à leur forme canonique</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold flex-shrink-0">3</div>
                  <div>
                    <h4 className="text-white font-semibold">Encodage Sentiment</h4>
                    <p className="text-gray-400 text-sm">Polarité transformée en classes binaires : 0 (négatif) / 1 (positif)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold flex-shrink-0">4</div>
                  <div>
                    <h4 className="text-white font-semibold">Vectorisation TF-IDF</h4>
                    <p className="text-gray-400 text-sm">Unigrams + Bigrams, max_df=0.75, vocabulaire de 551 197 features</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Déséquilibre des Classes */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-pink-500 to-red-500 rounded-full"></div>
              Gestion du Déséquilibre
            </h2>

            <div className="bg-gradient-to-r from-pink-900/20 to-red-900/20 border-2 border-pink-700/30 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-semibold text-pink-400 mb-4">Problème Identifié</h3>
              <p className="text-gray-300 mb-4">
                Dataset initial déséquilibré : <span className="text-pink-400 font-bold">64% positifs</span> vs <span className="text-red-400 font-bold">36% négatifs</span>
              </p>
              <div className="bg-pink-900/20 border-l-4 border-pink-500 p-4 rounded">
                <p className="text-pink-300 font-semibold">
                  Risque de biais : le modèle pourrait sur-prédire la classe majoritaire (positifs) au détriment des négatifs
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-900/50 border border-green-900/30 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-green-400 mb-3">SMOTE (Oversampling)</h3>
                <p className="text-gray-300 text-sm mb-3">
                  Génération synthétique d'exemples pour la classe minoritaire
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Accuracy Test</span>
                    <span className="text-green-400 font-bold">92.0%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">F1-Score</span>
                    <span className="text-green-400 font-bold">0.938</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">TNR (Négatifs)</span>
                    <span className="text-yellow-400">87%</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900/50 border border-blue-900/30 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-blue-400 mb-3">RUS (Undersampling) ✓</h3>
                <p className="text-gray-300 text-sm mb-3">
                  Réduction aléatoire de la classe majoritaire
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Accuracy Test</span>
                    <span className="text-blue-400 font-bold">91.6%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">F1-Score</span>
                    <span className="text-blue-400 font-bold">0.933</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">TNR (Négatifs)</span>
                    <span className="text-green-400 font-bold">92%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded">
              <h4 className="text-white font-semibold mb-2">✓ Modèle Retenu : RUS (RandomUnderSampler)</h4>
              <p className="text-gray-300 text-sm">
                Meilleur équilibre entre classes (TNR 92% vs 87% pour SMOTE). Performance homogène sur positifs ET négatifs, essentielle pour une analyse de sentiment non biaisée.
              </p>
            </div>
          </section>

          {/* Modélisation */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full"></div>
              Modélisation et Résultats
            </h2>

            <div className="space-y-6">
              {/* Modèle Final */}
              <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 border-2 border-blue-700/30 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <h3 className="text-2xl font-bold text-blue-400">Régression Logistique + RUS (Modèle Final)</h3>
                </div>
                <div className="grid md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <div className="text-blue-400 font-semibold">Accuracy</div>
                    <div className="text-gray-300 text-2xl font-bold">91.6%</div>
                  </div>
                  <div>
                    <div className="text-blue-400 font-semibold">F1-Score</div>
                    <div className="text-gray-300 text-2xl font-bold">0.933</div>
                  </div>
                  <div>
                    <div className="text-blue-400 font-semibold">Précision</div>
                    <div className="text-gray-300 text-2xl font-bold">92%</div>
                  </div>
                  <div>
                    <div className="text-blue-400 font-semibold">Rappel</div>
                    <div className="text-gray-300 text-2xl font-bold">91%</div>
                  </div>
                </div>
              </div>

              {/* Comparaison Modèles */}
              <div className="bg-gray-900/50 border border-purple-900/30 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-purple-400 mb-4">Comparaison des Modèles</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-left py-3 text-gray-400">Modèle</th>
                        <th className="text-center py-3 text-gray-400">Accuracy</th>
                        <th className="text-center py-3 text-gray-400">F1-Score</th>
                        <th className="text-center py-3 text-gray-400">Équilibre</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-300">
                      <tr className="border-b border-gray-800">
                        <td className="py-3">Logistic Regression (baseline)</td>
                        <td className="text-center">92.3%</td>
                        <td className="text-center">0.940</td>
                        <td className="text-center text-red-400">✗ Biaisé</td>
                      </tr>
                      <tr className="border-b border-gray-800">
                        <td className="py-3">Logistic Regression + SMOTE</td>
                        <td className="text-center">92.0%</td>
                        <td className="text-center">0.938</td>
                        <td className="text-center text-yellow-400">~ Acceptable</td>
                      </tr>
                      <tr className="border-b border-gray-800 bg-blue-900/20">
                        <td className="py-3 font-bold text-blue-400">Logistic Regression + RUS ✓</td>
                        <td className="text-center font-bold">91.6%</td>
                        <td className="text-center font-bold">0.933</td>
                        <td className="text-center text-green-400 font-bold">✓ Équilibré</td>
                      </tr>
                      <tr className="border-b border-gray-800">
                        <td className="py-3">LightGBM + SMOTE</td>
                        <td className="text-center">91.3%</td>
                        <td className="text-center">0.933</td>
                        <td className="text-center text-yellow-400">~ Acceptable</td>
                      </tr>
                      <tr>
                        <td className="py-3">MultinomialNB + SMOTE</td>
                        <td className="text-center">88.0%</td>
                        <td className="text-center">0.907</td>
                        <td className="text-center text-red-400">✗ Faible</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          {/* Analyse par Marque */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-yellow-500 to-orange-500 rounded-full"></div>
              Performance par Marque
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-gradient-to-br from-yellow-900/30 to-amber-900/20 border-2 border-yellow-600/50 rounded-xl p-6 text-center">
                <h3 className="text-lg font-semibold text-yellow-400 mb-3">McDonald's</h3>
                <div className="text-4xl font-bold text-yellow-400 mb-2">94.5%</div>
                <div className="text-gray-300 text-sm mb-3">Accuracy</div>
                <div className="text-xs text-gray-400">F1-Score : 0.959</div>
                <div className="mt-3 text-green-400 text-sm font-semibold">🏆 Meilleure classification</div>
              </div>

              <div className="bg-gradient-to-br from-orange-900/30 to-red-900/20 border-2 border-orange-600/50 rounded-xl p-6 text-center">
                <h3 className="text-lg font-semibold text-orange-400 mb-3">Burger King</h3>
                <div className="text-4xl font-bold text-orange-400 mb-2">93.9%</div>
                <div className="text-gray-300 text-sm mb-3">Accuracy</div>
                <div className="text-xs text-gray-400">F1-Score : 0.947</div>
                <div className="mt-3 text-blue-400 text-sm font-semibold">Performance robuste</div>
              </div>

              <div className="bg-gradient-to-br from-red-900/30 to-pink-900/20 border-2 border-red-600/50 rounded-xl p-6 text-center">
                <h3 className="text-lg font-semibold text-red-400 mb-3">KFC</h3>
                <div className="text-4xl font-bold text-red-400 mb-2">93.4%</div>
                <div className="text-gray-300 text-sm mb-3">Accuracy</div>
                <div className="text-xs text-gray-400">F1-Score : 0.941</div>
                <div className="mt-3 text-yellow-400 text-sm font-semibold">Classification + difficile</div>
              </div>
            </div>

            <div className="bg-gray-900/50 border border-yellow-900/30 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-yellow-400 mb-4">Insights Clés par Marque</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-white font-semibold mb-2">🍟 McDonald's</h4>
                  <ul className="text-gray-300 text-sm space-y-1 ml-4">
                    <li>• Problème récurrent : <span className="text-red-400">machines à glace/milkshake défectueuses</span> (mème viral)</li>
                    <li>• Amélioration urgente : rapidité du service</li>
                    <li>• N-grams fréquents : "happy meal", "adult happy meal"</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">🍗 KFC</h4>
                  <ul className="text-gray-300 text-sm space-y-1 ml-4">
                    <li>• Problème : <span className="text-red-400">contrôle qualité incohérent</span>, portions jugées petites</li>
                    <li>• Erreurs fréquentes dans l'exactitude des commandes</li>
                    <li>• N-grams fréquents : "kfc chicken", "eat kfc"</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">🍔 Burger King</h4>
                  <ul className="text-gray-300 text-sm space-y-1 ml-4">
                    <li>• <span className="text-green-400">Perception positive</span> sur valeur et promotions</li>
                    <li>• Opportunité : capitaliser sur rapport qualité-prix</li>
                    <li>• N-grams fréquents : "burger king", "fast food"</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Technologies */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
              Technologies et Compétences
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-900/50 border border-purple-900/30 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-purple-400 mb-4">Stack Technique</h3>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'SpaCy', 'scikit-learn', 'imbalanced-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'WordCloud', 'Plotly', 'LightGBM'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded-lg text-sm border border-purple-600/30">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-gray-900/50 border border-pink-900/30 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-pink-400 mb-4">Compétences Développées</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-pink-400 mt-1">•</span>
                    <span>NLP & Prétraitement textuel avancé</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-400 mt-1">•</span>
                    <span>Gestion déséquilibre de classes (SMOTE, RUS)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-400 mt-1">•</span>
                    <span>Feature Engineering (TF-IDF, N-grams)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-400 mt-1">•</span>
                    <span>Évaluation modèles classification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-400 mt-1">•</span>
                    <span>Analyse qualitative des erreurs</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-green-900/20 to-blue-900/20 border-2 border-green-600/50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-green-400 mb-4">Conclusion et Recommandations</h2>
              
              <div className="space-y-4 text-gray-300 leading-relaxed mb-6">
                <p>
                  L'approche par <span className="text-green-400 font-semibold">Régression Logistique + RUS</span> est techniquement validée avec un score de test de <span className="font-bold">91.6%</span> et une bonne capacité de généralisation. Le modèle maintient un équilibre optimal entre précision et rappel sur les deux classes.
                </p>
                <p>
                  Au-delà de la validation technique, <span className="text-blue-400 font-semibold">les marques doivent concentrer leurs efforts sur des problèmes clients très spécifiques</span> identifiés par l'analyse qualitative des erreurs et des n-grams fréquents.
                </p>
              </div>

              <div className="bg-green-900/20 border-l-4 border-green-500 p-4 rounded">
                <h3 className="text-white font-semibold mb-3">🎯 Actions Prioritaires par Marque</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li><span className="text-yellow-400 font-bold">McDonald's :</span> Résoudre problème machines à glace + améliorer rapidité service</li>
                  <li><span className="text-red-400 font-bold">KFC :</span> Renforcer contrôle qualité + standardisation produits + exactitude commandes</li>
                  <li><span className="text-orange-400 font-bold">Burger King :</span> Capitaliser sur perception positive valeur/promotions pour différenciation</li>
                </ul>
              </div>
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
