import Navbar from '@/components/Navbar'
import Link from 'next/link'

export default function DetectionMaladiesOculaires() {
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
              <span className="px-4 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm font-semibold border border-purple-600/30">
                Deep Learning
              </span>
              <span className="px-4 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm font-semibold border border-blue-600/30">
                Computer Vision
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r text-blue-400 mb-3">
                Détection de Maladies Oculaires par Deep Learning
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-6">
              Système automatique de détection de pathologies oculaires combinant YOLO-EyeNet et autoencodeur convolutionnel
            </p>

            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Janvier 2026
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Encadré par Dr. AYIKPA
              </div>
            </div>
          </div>

          {/* Contexte et Objectifs */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
              Contexte et Problématique
            </h2>
            
            <div className="bg-gray-900/50 border border-purple-900/30 rounded-2xl p-6 mb-6">
              <h3 className="text-xl font-semibold text-purple-400 mb-4">Enjeu Médical</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Les maladies oculaires représentent un enjeu majeur de santé publique mondiale. La détection tardive entraîne des pertes de vision sévères et irréversibles. L'accès limité aux ophtalmologistes, particulièrement dans les pays en développement, renforce l'urgence de systèmes de screening automatisés.
              </p>
              <div className="bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded">
                <p className="text-purple-300 font-semibold">
                  Comment détecter automatiquement 9 pathologies oculaires à partir d'images rétiniennes avec un dataset hautement déséquilibré (ratio 88:1) ?
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-900/50 border border-blue-900/30 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-blue-400 mb-3">Objectifs Principaux</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">▸</span>
                    <span>Identifier 10 classes de pathologies oculaires</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">▸</span>
                    <span>Classification rapide avec YOLO-EyeNet</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">▸</span>
                    <span>Détection d'anomalies par autoencodeur</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">▸</span>
                    <span>Fusion des embeddings pour améliorer les performances</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-900/50 border border-pink-900/30 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-pink-400 mb-3">Défis Majeurs</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-pink-400 mt-1">▸</span>
                    <span>Déséquilibre extrême : ratio 88:1</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-400 mt-1">▸</span>
                    <span>Classes ultra-rares (Pterygium : 17 images)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-400 mt-1">▸</span>
                    <span>Performance clinique critique exigée</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-400 mt-1">▸</span>
                    <span>Détection d'anomalies sans supervision</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Dataset */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full"></div>
              Dataset et Prétraitement
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/20 border-2 border-blue-600/50 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">5 335</div>
                <div className="text-gray-300 text-sm">Images rétiniennes RGB</div>
                <div className="text-gray-400 text-xs mt-1">2004×1690 pixels</div>
              </div>
              <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/20 border-2 border-purple-600/50 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">10</div>
                <div className="text-gray-300 text-sm">Classes pathologiques</div>
                <div className="text-gray-400 text-xs mt-1">9 pathologies + Sain</div>
              </div>
              <div className="bg-gradient-to-br from-pink-900/30 to-red-900/20 border-2 border-pink-600/50 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-pink-400 mb-2">88:1</div>
                <div className="text-gray-300 text-sm">Ratio de déséquilibre</div>
                <div className="text-gray-400 text-xs mt-1">Défi majeur</div>
              </div>
            </div>

            <div className="bg-gray-900/50 border border-cyan-900/30 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-cyan-400 mb-4">Pipeline de Prétraitement</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-white font-semibold mb-2">Transformations</h4>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    <li>• Redimensionnement : 640×640 (YOLO) / 224×224 (AE)</li>
                    <li>• Normalisation CLAHE pour contraste</li>
                    <li>• Normalisation pixels : [0, 255] → [0, 1]</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Augmentation Ciblée</h4>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    <li>• Rotation ±15°, Flip H/V, Zoom ±10%</li>
                    <li>• Ajustements HSV (H:0.015, S:0.7, V:0.4)</li>
                    <li>• Augmentation ×3-5 sur classes rares</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Architecture */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-pink-500 to-purple-500 rounded-full"></div>
              Architecture Hybride
            </h2>

            <div className="space-y-6">
              {/* YOLO-EyeNet */}
              <div className="bg-gradient-to-r from-blue-900/20 to-blue-800/10 border-2 border-blue-700/30 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <h3 className="text-2xl font-bold text-blue-400">YOLO-EyeNet</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Basé sur YOLOv11s, optimisé spécifiquement pour les pathologies rétiniennes avec 80 epochs, LR de 0.005 et AdamW.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <div className="text-blue-400 font-semibold">Couches</div>
                    <div className="text-gray-300">47</div>
                  </div>
                  <div>
                    <div className="text-blue-400 font-semibold">Paramètres</div>
                    <div className="text-gray-300">5.45M</div>
                  </div>
                  <div>
                    <div className="text-blue-400 font-semibold">Vitesse</div>
                    <div className="text-gray-300">13.5ms/img</div>
                  </div>
                  <div>
                    <div className="text-blue-400 font-semibold">Top-1</div>
                    <div className="text-gray-300">77.41%</div>
                  </div>
                </div>
              </div>

              {/* Autoencodeur */}
              <div className="bg-gradient-to-r from-purple-900/20 to-purple-800/10 border-2 border-purple-700/30 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <h3 className="text-2xl font-bold text-purple-400">Autoencodeur Convolutionnel</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Entraîné sur 4 classes (Diabetic Retinopathy, Glaucoma, Healthy, Myopia) pour apprendre la distribution normale et détecter les anomalies.
                </p>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <div className="text-purple-400 font-semibold mb-2">Encodeur</div>
                    <div className="text-gray-300">5 Conv2d → Latent 512-d</div>
                  </div>
                  <div>
                    <div className="text-purple-400 font-semibold mb-2">Décodeur</div>
                    <div className="text-gray-300">5 ConvTranspose2d</div>
                  </div>
                  <div>
                    <div className="text-purple-400 font-semibold mb-2">Loss</div>
                    <div className="text-gray-300">MSE + SSIM + CE×0.1</div>
                  </div>
                </div>
              </div>

              {/* Fusion */}
              <div className="bg-gradient-to-r from-pink-900/20 to-pink-800/10 border-2 border-pink-700/30 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                  <h3 className="text-2xl font-bold text-pink-400">Fusion YOLO-AE (MLP)</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Concaténation des embeddings YOLO (25 088-d) et AE (512-d) = 25 600-d → Classification finale 10 classes.
                </p>
                <div className="bg-pink-900/20 border-l-4 border-pink-500 p-4 rounded">
                  <div className="text-pink-300 font-mono text-sm">
                    Linear(25600→1024) + ReLU + Dropout(0.3)<br/>
                    Linear(1024→256) + ReLU + Dropout(0.3)<br/>
                    Linear(256→10) → Softmax
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Résultats */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-green-500 to-emerald-500 rounded-full"></div>
              Résultats Exceptionnels
            </h2>

            {/* Métriques clés */}
            <div className="grid md:grid-cols-4 gap-4 mb-8">
              <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/20 border-2 border-green-600/50 rounded-xl p-6 text-center">
                <div className="text-5xl font-bold text-green-400 mb-2">93%</div>
                <div className="text-gray-300 text-sm font-semibold">Accuracy Globale</div>
                <div className="text-green-400 text-xs mt-2">+15.2 pts vs YOLO</div>
              </div>
              <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/20 border-2 border-blue-600/50 rounded-xl p-6 text-center">
                <div className="text-5xl font-bold text-blue-400 mb-2">0.94</div>
                <div className="text-gray-300 text-sm font-semibold">F1-Score Macro</div>
                <div className="text-blue-400 text-xs mt-2">Performance équilibrée</div>
              </div>
              <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/20 border-2 border-purple-600/50 rounded-xl p-6 text-center">
                <div className="text-5xl font-bold text-purple-400 mb-2">100%</div>
                <div className="text-gray-300 text-sm font-semibold">Classes Rares</div>
                <div className="text-purple-400 text-xs mt-2">Pterygium, Retinal Det.</div>
              </div>
              <div className="bg-gradient-to-br from-pink-900/30 to-red-900/20 border-2 border-pink-600/50 rounded-xl p-6 text-center">
                <div className="text-5xl font-bold text-pink-400 mb-2">6.8%</div>
                <div className="text-gray-300 text-sm font-semibold">Taux d'Erreur</div>
                <div className="text-pink-400 text-xs mt-2">55/810 images</div>
              </div>
            </div>

            {/* Performances par classe */}
            <div className="bg-gray-900/50 border border-green-900/30 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-green-400 mb-4">Top Performances par Classe</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Pterygium</span>
                    <span className="text-green-400 font-bold">F1 = 1.00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Retinal Detachment</span>
                    <span className="text-green-400 font-bold">F1 = 1.00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Diabetic Retinopathy</span>
                    <span className="text-green-400 font-bold">F1 = 0.98</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Retinitis Pigmentosa</span>
                    <span className="text-green-400 font-bold">F1 = 0.98</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Macular Scar</span>
                    <span className="text-blue-400 font-bold">F1 = 0.92</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Glaucoma</span>
                    <span className="text-blue-400 font-bold">F1 = 0.91</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Healthy</span>
                    <span className="text-blue-400 font-bold">F1 = 0.91</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">CSC</span>
                    <span className="text-blue-400 font-bold">F1 = 0.90</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Impact et Technologies */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full"></div>
              Technologies et Impact
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gray-900/50 border border-blue-900/30 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-blue-400 mb-4">Stack Technique</h3>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'PyTorch', 'YOLOv11', 'OpenCV', 'NumPy', 'Pandas', 'Matplotlib', 'scikit-learn'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-lg text-sm border border-blue-600/30">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-gray-900/50 border border-cyan-900/30 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Impact Clinique Potentiel</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">✓</span>
                    <span>Aide au triage pour ophtalmologistes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">✓</span>
                    <span>Dépistage automatique accessible</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">✓</span>
                    <span>Applicable en zones mal desservies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">✓</span>
                    <span>Inférence temps réel (13.5ms/image)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Points clés */}
            <div className="bg-gradient-to-r from-purple-900/20 via-pink-900/20 to-blue-900/20 border-2 border-purple-600/30 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-purple-400 mb-4">Points Clés du Projet</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-white font-semibold mb-2">Approche Hybride</h4>
                  <p className="text-gray-300 text-sm">
                    Combinaison de YOLO (features locales) et autoencodeur (structures globales) pour une vision multi-échelle.
                  </p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Gestion Déséquilibre</h4>
                  <p className="text-gray-300 text-sm">
                    Stratégies multiples : augmentation ciblée, fusion embeddings, détection d'anomalies, split stratifié.
                  </p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Détection Anomalies</h4>
                  <p className="text-gray-300 text-sm">
                    27 cas atypiques détectés automatiquement via erreur de reconstruction élevée (MSE {'>'} seuil 99e percentile).
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Compétences et Livrables */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-yellow-500 to-orange-500 rounded-full"></div>
              Compétences Développées
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-900/50 border border-yellow-900/30 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-yellow-400 mb-4">Compétences Techniques</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Architectures Deep Learning (YOLO, Autoencodeur)</li>
                  <li>• Computer Vision & Traitement d'images médicales</li>
                  <li>• Feature fusion & Apprentissage multi-tâches</li>
                  <li>• Gestion datasets déséquilibrés</li>
                  <li>• Détection d'anomalies non supervisée</li>
                  <li>• Évaluation modèles (métriques cliniques)</li>
                </ul>
              </div>

              <div className="bg-gray-900/50 border border-orange-900/30 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-orange-400 mb-4">Livrables</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• 3 modèles YOLO (v8, v11, EyeNet)</li>
                  <li>• Autoencodeur convolutionnel + détecteur anomalies</li>
                  <li>• Modèle fusion MLP (Accuracy 93%)</li>
                  <li>• Pipeline complet prétraitement + augmentation</li>
                  <li>• Rapport technique détaillé (14 pages)</li>
                  <li>• Présentation soutenance (17 slides)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 border-2 border-green-600/50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-green-400 mb-4">Conclusion et Perspectives</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Ce projet démontre qu'une approche hybride combinant classification temps réel (YOLO) et analyse de représentations latentes (autoencodeur) permet d'atteindre des performances exceptionnelles (93% d'accuracy) même sur des datasets hautement déséquilibrés. La fusion des embeddings apporte un gain de +15.2 points par rapport aux modèles YOLO seuls, validant l'intérêt de la complémentarité entre features locales et structures globales.
              </p>
              <div className="bg-green-900/20 border-l-4 border-green-500 p-4 rounded">
                <h3 className="text-white font-semibold mb-2">Perspectives Futures</h3>
                <ul className="space-y-1 text-gray-300 text-sm">
                  <li>• Intégration Grad-CAM pour interprétabilité clinique</li>
                  <li>• Validation sur datasets externes (ODIR, Kaggle DR)</li>
                  <li>• Collecte annotations localisation pour calcul mAP</li>
                  <li>• Déploiement système screening temps réel</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
