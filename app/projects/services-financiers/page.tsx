import Navbar from '@/components/Navbar'
import Link from 'next/link'

export default function SerieTemporelleFintechs() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pt-16 p-4 sm:p-6 md:p-12">
        <div className="max-w-4xl mx-auto">

          {/* Bouton retour */}
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 mb-8 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Retour aux projets
          </Link>

          {/* En-tête */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-4 py-1 bg-violet-600/20 text-violet-400 rounded-full text-sm font-semibold border border-violet-600/30">
                Série Temporelle
              </span>
              <span className="px-4 py-1 bg-indigo-600/20 text-indigo-400 rounded-full text-sm font-semibold border border-indigo-600/30">
                Économétrie
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-violet-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Adoption des FinTechs en Côte d'Ivoire
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-6">
              Analyse temporelle du taux de pénétration des services financiers numériques
              sur la période 2000–2024, avec modélisation ARIMA et prévisions à court terme.
            </p>

            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                2025
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Koffi Koffi Ambroise — Projet Série Temporelle
              </div>
            </div>
          </div>

          {/* Contexte */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-violet-500 to-indigo-500 rounded-full"></div>
              Contexte et Problématique
            </h2>

            <div className="bg-gray-900/50 border border-violet-900/30 rounded-2xl p-6 mb-6">
              <h3 className="text-xl font-semibold text-violet-400 mb-4">Enjeu Économique</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Le paysage financier ivoirien a profondément changé ces dernières années, porté par
                l'essor des services financiers numériques. Alors que les banques traditionnelles peinent
                encore à toucher une large part de la population, les solutions comme le Mobile Money,
                les FinTechs et les paiements mobiles se sont rapidement imposées, en particulier chez
                les jeunes et les populations non bancarisées.
              </p>
              <div className="bg-violet-900/20 border-l-4 border-violet-500 p-4 rounded">
                <p className="text-violet-300 font-semibold">
                  Comment modéliser l'évolution du taux de pénétration des FinTechs en Côte d'Ivoire
                  et projeter son évolution future dans un contexte régional de plus en plus compétitif ?
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-900/50 border border-indigo-900/30 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-indigo-400 mb-3">Objectifs</h3>
                <ul className="space-y-2 text-gray-300">
                  {[
                    "Retracer l'évolution de l'adoption FinTech (2000–2024)",
                    "Identifier les phases de croissance et de ralentissement",
                    "Tester la stationnarité de la série",
                    "Construire et comparer deux modèles ARIMA",
                    "Prévoir l'évolution à court terme (2025–2028)",
                  ].map((obj) => (
                    <li key={obj} className="flex items-start gap-2">
                      <span className="text-indigo-400 mt-1">▸</span>
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-900/50 border border-purple-900/30 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-purple-400 mb-3">Variables Clés</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  {[
                    ['TauxPenetrationFintechs', 'Variable cible (%)'],
                    ['ServiceFintechPopulaire', 'Crypto, épargne, prêts, paiements'],
                    ['AccesInternetSmartphone', '% population connectée'],
                    ['BancarisationTraditionnelle', 'Taux bancarisation classique'],
                    ['FreinAdoption', "Obstacles à l'adoption"],
                    ['NombreUtilisateurs', "Volume d'utilisateurs actifs"],
                  ].map(([name, desc]) => (
                    <li key={name} className="flex items-start gap-2">
                      <span className="text-purple-400 mt-0.5">▸</span>
                      <span><strong className="text-white">{name}</strong> — {desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Exploration */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-indigo-500 to-violet-500 rounded-full"></div>
              Exploration de la Série
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-gradient-to-br from-violet-900/30 to-indigo-900/20 border-2 border-violet-600/50 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-violet-400 mb-2">25 ans</div>
                <div className="text-gray-300 text-sm">Période couverte</div>
                <div className="text-gray-400 text-xs mt-1">2000 – 2024</div>
              </div>
              <div className="bg-gradient-to-br from-indigo-900/30 to-purple-900/20 border-2 border-indigo-600/50 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-indigo-400 mb-2">55%</div>
                <div className="text-gray-300 text-sm">Pic historique</div>
                <div className="text-gray-400 text-xs mt-1">Atteint en 2019</div>
              </div>
              <div className="bg-gradient-to-br from-purple-900/30 to-violet-900/20 border-2 border-purple-600/50 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">41.4%</div>
                <div className="text-gray-300 text-sm">Moyenne stable</div>
                <div className="text-gray-400 text-xs mt-1">Depuis 2020</div>
              </div>
            </div>

            <div className="bg-gray-900/50 border border-violet-900/30 rounded-xl p-6 mb-6">
              <h3 className="text-lg font-semibold text-violet-400 mb-3">Comportement de la Série</h3>
              <p className="text-gray-300 leading-relaxed text-sm">
                L'adoption des services financiers numériques évolue en <strong className="text-white">dents de scie</strong>,
                oscillant entre 35 % et 55 % sur la période. Cette volatilité traduit la sensibilité du
                secteur aux facteurs externes : crises économiques, évolutions réglementaires et changements
                dans les habitudes de consommation. Le pic de 2019 (55 %), suivi d'une chute significative,
                illustre cette vulnérabilité. Depuis 2020, le marché semble avoir trouvé un équilibre
                autour de 40–45 %, suggérant une <strong className="text-white">phase de maturation</strong>.
              </p>
            </div>

            {/* Services */}
            <div className="bg-gray-900/50 border border-indigo-900/30 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-indigo-400 mb-4">Évolution par Service FinTech</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { name: 'Crypto', start: '45.9%', end: '35.8%', pic: '71.8% (2018)', evolution: '-10.1 pts', color: 'text-red-400' },
                  { name: 'Paiements', start: '43.6%', end: '42.2%', pic: '76.4% (2001)', evolution: '-1.4 pts', color: 'text-orange-400' },
                  { name: 'Épargne', start: '29.8%', end: '39.8%', pic: '69.1% (2010)', evolution: '+10.0 pts', color: 'text-green-400' },
                  { name: 'Prêts', start: '27.0%', end: '31.4%', pic: '65.3% (2019)', evolution: '+4.5 pts', color: 'text-emerald-400' },
                ].map((s) => (
                  <div key={s.name} className="bg-gray-800/50 rounded-lg p-4 text-sm">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-semibold">{s.name}</span>
                      <span className={`font-bold ${s.color}`}>{s.evolution}</span>
                    </div>
                    <div className="text-gray-400 space-y-0.5">
                      <div>Début 2000 : {s.start} → Fin 2024 : {s.end}</div>
                      <div>Pic : {s.pic}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 bg-indigo-900/20 border-l-4 border-indigo-500 p-4 rounded text-sm text-gray-300">
                <strong className="text-indigo-300">Diagnostic comportemental :</strong> aucun service ne maintient
                une dominance stable. Les utilisateurs migrent massivement d'un service à l'autre selon les
                opportunités du moment — le pic de 2019 s'explique par l'effondrement du crypto (24.23%) et
                la montée soudaine des prêts (65.30%).
              </div>
            </div>
          </section>

          {/* Analyse économétrique */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-indigo-500 rounded-full"></div>
              Analyse Économétrique
            </h2>

            {/* Tests stationnarité */}
            <div className="space-y-5 mb-6">
              <div className="bg-gradient-to-r from-violet-900/20 to-violet-800/10 border-2 border-violet-700/30 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-violet-500 rounded-full"></div>
                  <h3 className="text-xl font-bold text-violet-400">Tests de Stationnarité</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-violet-900/20 rounded-lg p-4 text-sm">
                    <div className="text-violet-300 font-semibold mb-2">Test ADF (Dickey-Fuller Augmenté)</div>
                    <div className="text-gray-300 space-y-1">
                      <div>Statistique : <span className="text-white font-mono">-26.2862</span></div>
                      <div>p-value : <span className="text-white font-mono">0.0000</span></div>
                    </div>
                  </div>
                  <div className="bg-indigo-900/20 rounded-lg p-4 text-sm">
                    <div className="text-indigo-300 font-semibold mb-2">Test KPSS</div>
                    <div className="text-gray-300 space-y-1">
                      <div>Statistique : <span className="text-white font-mono">0.1627</span></div>
                      <div>p-value : <span className="text-white font-mono">0.1000</span></div>
                    </div>
                  </div>
                </div>
                <div className="bg-violet-900/20 border-l-4 border-violet-500 p-3 rounded text-sm text-violet-300">
                  ✓ Les deux tests confirment la <strong>stationnarité</strong> de la série — ses propriétés
                  statistiques sont invariantes dans le temps. Aucune transformation nécessaire avant modélisation.
                </div>
              </div>

              {/* ACF/PACF */}
              <div className="bg-gradient-to-r from-indigo-900/20 to-indigo-800/10 border-2 border-indigo-700/30 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                  <h3 className="text-xl font-bold text-indigo-400">Analyse ACF / PACF</h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  L'analyse des fonctions d'autocorrélation révèle une structure de <strong className="text-white">bruit blanc parfait</strong> :
                  absence totale de corrélations significatives à tous les retards temporels. Chaque observation
                  est statistiquement indépendante des valeurs passées. Ce résultat oriente vers un modèle
                  ARIMA simple, sans composante saisonnière.
                </p>
              </div>
            </div>
          </section>

          {/* Modèles */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full"></div>
              Modélisation ARIMA
            </h2>

            <div className="space-y-5">
              <div className="bg-gradient-to-r from-indigo-900/20 to-indigo-800/10 border-2 border-indigo-700/30 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                  <h3 className="text-2xl font-bold text-indigo-400">Modèle 1 — ARIMA(0,0,0)</h3>
                </div>
                <p className="text-gray-300 mb-4 text-sm">
                  Modèle de référence avec constante uniquement. Suppose que le taux de pénétration
                  évolue comme un phénomène aléatoire stable autour d'une moyenne. Les diagnostics
                  confirment l'absence d'autocorrélation et d'hétéroscédasticité.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-4">
                  {[
                    { label: 'Constante', value: '41.37%' },
                    { label: 'AIC', value: '5 551.96' },
                    { label: 'BIC', value: '5 560.82' },
                    { label: 'RMSE', value: '3.796' },
                  ].map((m) => (
                    <div key={m.label}>
                      <div className="text-indigo-400 font-semibold">{m.label}</div>
                      <div className="text-gray-300">{m.value}</div>
                    </div>
                  ))}
                </div>
                <div className="bg-indigo-900/20 border-l-4 border-indigo-500 p-3 rounded text-sm font-mono text-indigo-300">
                  Prévisions 2025–2028 : 41.61% &nbsp;[IC : 32.74% – 50.47%]
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-900/20 to-purple-800/10 border-2 border-purple-700/30 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <h3 className="text-2xl font-bold text-purple-400">Modèle 2 — ARIMA avec mémoire ✦ Retenu</h3>
                </div>
                <p className="text-gray-300 mb-4 text-sm">
                  Modèle enrichi intégrant l'influence des valeurs passées. Permet de capter d'éventuelles
                  régularités ou cycles et d'obtenir des prévisions plus précises. Légèrement supérieur
                  au modèle 1 sur les deux métriques d'erreur.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-4">
                  {[
                    { label: '2025', value: '41.06%' },
                    { label: '2026', value: '41.48%' },
                    { label: '2027', value: '41.54%' },
                    { label: '2028', value: '41.55%' },
                  ].map((m) => (
                    <div key={m.label}>
                      <div className="text-purple-400 font-semibold">{m.label}</div>
                      <div className="text-gray-300">{m.value}</div>
                    </div>
                  ))}
                </div>
                <div className="bg-purple-900/20 border-l-4 border-purple-500 p-3 rounded text-sm font-mono text-purple-300">
                  Intervalle de confiance : [32.32% – 50.39%] &nbsp;·&nbsp; RMSE : 3.768 &nbsp;·&nbsp; MAE : 2.691
                </div>
              </div>
            </div>
          </section>

          {/* Comparaison modèles */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-violet-500 to-purple-500 rounded-full"></div>
              Comparaison des Modèles
            </h2>

            <div className="bg-gray-900/50 border border-violet-900/30 rounded-xl p-6">
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="py-3 pr-6 text-gray-400 font-medium">Métrique</th>
                      <th className="py-3 pr-6 text-indigo-400 font-medium">ARIMA(0,0,0)</th>
                      <th className="py-3 text-purple-400 font-semibold">ARIMA avec mémoire ✦</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800">
                    {[
                      ['RMSE', '3.796', '3.768'],
                      ['MAE', '2.699', '2.691'],
                      ['Prévision 2025', '41.61%', '41.06%'],
                      ['Prévision 2028', '41.61%', '41.55%'],
                      ['Borne inf. IC', '32.74%', '32.32%'],
                      ['Borne sup. IC', '50.47%', '50.39%'],
                    ].map(([metric, m1, m2]) => (
                      <tr key={metric} className="hover:bg-gray-800/30">
                        <td className="py-3 pr-6 text-gray-400">{metric}</td>
                        <td className="py-3 pr-6 text-gray-300">{m1}</td>
                        <td className="py-3 text-purple-300 font-medium">{m2}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-gray-500 text-xs mt-4">
                Le modèle 2 apporte une légère amélioration — les deux modèles restent très proches,
                ce qui reflète la nature bruit blanc de la série.
              </p>
            </div>
          </section>

          {/* Stack */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-violet-500 rounded-full"></div>
              Technologies et Compétences
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-900/50 border border-violet-900/30 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-violet-400 mb-4">Stack Technique</h3>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'Pandas', 'statsmodels', 'ARIMA', 'Matplotlib', 'Seaborn', 'Quarto'].map((t) => (
                    <span key={t} className="px-3 py-1 bg-violet-600/20 text-violet-400 rounded-lg text-sm border border-violet-600/30">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-gray-900/50 border border-indigo-900/30 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-indigo-400 mb-4">Compétences Développées</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  {[
                    'Analyse exploratoire de séries temporelles',
                    'Tests de stationnarité (ADF, KPSS)',
                    'Analyse ACF/PACF et détection du bruit blanc',
                    'Modélisation et comparaison ARIMA',
                    'Prévisions avec intervalles de confiance',
                    'Interprétation économique des résultats',
                  ].map((c) => (
                    <li key={c} className="flex items-start gap-2">
                      <span className="text-indigo-400 mt-1">✓</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-violet-900/20 to-indigo-900/20 border-2 border-violet-600/50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-violet-400 mb-4">Conclusion et Perspectives</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Cette étude montre que le taux de pénétration des FinTechs en Côte d'Ivoire se comporte
                comme un bruit blanc stationnaire, sans tendance ni saisonnalité marquée. Les deux modèles
                ARIMA projettent une stabilisation autour de <strong className="text-white">41–42 %</strong> sur
                les quatre prochaines années, avec une incertitude notable (IC : 32 %–50 %). Le modèle avec
                mémoire apporte une légère amélioration mais confirme que l'évolution future dépendra
                surtout de <strong className="text-white">facteurs externes</strong> au simple historique des données.
              </p>
              <div className="bg-violet-900/20 border-l-4 border-violet-500 p-4 rounded">
                <h3 className="text-white font-semibold mb-2">Perspectives Futures</h3>
                <ul className="space-y-1 text-gray-300 text-sm">
                  <li>• Intégration de variables exogènes (réglementation, PIB, accès internet)</li>
                  <li>• Modèle VAR pour analyser les interactions entre services</li>
                  <li>• Étude comparative avec d'autres pays d'Afrique de l'Ouest</li>
                  <li>• Analyse des ruptures structurelles (COVID-19, crises politiques)</li>
                </ul>
              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  )
}