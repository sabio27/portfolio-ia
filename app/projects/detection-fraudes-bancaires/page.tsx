import Navbar from '@/components/Navbar'
import Link from 'next/link'

export default function SimulationFraude() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pt-16 p-4 sm:p-6 md:p-12">
        <div className="max-w-4xl mx-auto">

          {/* Bouton retour */}
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 mb-8 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Retour aux projets
          </Link>

          {/* En-tête */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-4 py-1 bg-red-600/20 text-red-400 rounded-full text-sm font-semibold border border-red-600/30">
                Multi-Agents
              </span>
              <span className="px-4 py-1 bg-orange-600/20 text-orange-400 rounded-full text-sm font-semibold border border-orange-600/30">
                Parallélisme
              </span>
              <span className="px-4 py-1 bg-yellow-600/20 text-yellow-400 rounded-full text-sm font-semibold border border-yellow-600/30">
                Q-Learning
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                Simulation Multi-Agents de Détection de Fraude Bancaire
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-6">
              Système parallèle de détection de fraude inspiré du Mobile Money africain —
              Orange Money, Wave, MTN MoMo — avec agents fraudeurs adaptatifs par Q-Learning.
            </p>

            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                2025 – 2026
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Master 2 — Architecture et Algorithmes Parallèles
              </div>
            </div>
          </div>

          {/* Contexte */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-red-500 to-orange-500 rounded-full"></div>
              Contexte et Problématique
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gray-900/50 border border-red-900/30 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-red-400 mb-3">Le Problème</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">▸</span>
                    <span>Mobile Money en Afrique génère des millions de transactions par jour</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">▸</span>
                    <span>La fraude évolue en temps réel : usurpation, fragmentation, round-tripping...</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">▸</span>
                    <span>Un seul détecteur = goulot d'étranglement, incapable de traiter le volume</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-900/50 border border-orange-900/30 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-orange-400 mb-3">La Solution</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400 mt-1">▸</span>
                    <span>Système multi-agents PARALLÈLE sur N cœurs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400 mt-1">▸</span>
                    <span>Agents fraudeurs avec Q-Learning adaptatif</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400 mt-1">▸</span>
                    <span>Base de données SQLite persistante inter-simulations</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Métriques clés */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { value: '98.5%', label: 'Taux de détection', color: 'text-green-400', border: 'border-green-600/50', bg: 'from-green-900/30 to-emerald-900/20' },
                { value: '0%', label: 'Faux positifs', color: 'text-blue-400', border: 'border-blue-600/50', bg: 'from-blue-900/30 to-cyan-900/20' },
                { value: '3.50x', label: 'Speedup parallèle', color: 'text-orange-400', border: 'border-orange-600/50', bg: 'from-orange-900/30 to-red-900/20' },
                { value: '10', label: 'Stratégies de fraude', color: 'text-red-400', border: 'border-red-600/50', bg: 'from-red-900/30 to-orange-900/20' },
              ].map((m) => (
                <div key={m.label} className={`bg-gradient-to-br ${m.bg} border-2 ${m.border} rounded-xl p-5 text-center`}>
                  <div className={`text-4xl font-bold ${m.color} mb-2`}>{m.value}</div>
                  <div className="text-gray-300 text-xs">{m.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Architecture */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-orange-500 to-red-500 rounded-full"></div>
              Architecture du Système
            </h2>

            <div className="grid md:grid-cols-5 gap-3 mb-6">
              {[
                { name: 'Agent Client', desc: "Génère des transactions légitimes avec profil bancaire stable", color: 'text-green-400', border: 'border-green-900/40' },
                { name: 'Agent Fraudeur', desc: '10 stratégies — Q-Learning Epsilon-Greedy — apprend à contourner', color: 'text-red-400', border: 'border-red-900/40' },
                { name: 'Agent Détecteur', desc: 'Analyse en PARALLÈLE — 10 règles métier calibrées — Pool persistant', color: 'text-blue-400', border: 'border-blue-900/40' },
                { name: 'Superviseur', desc: 'Coordination centrale — collecte décisions — détecte doublons ID', color: 'text-yellow-400', border: 'border-yellow-900/40' },
                { name: 'Base SQLite', desc: 'Persistance inter-simulations — profils clients — historique fraudes', color: 'text-purple-400', border: 'border-purple-900/40' },
              ].map((agent) => (
                <div key={agent.name} className={`bg-gray-900/50 border ${agent.border} rounded-xl p-4`}>
                  <div className={`font-semibold text-sm mb-2 ${agent.color}`}>{agent.name}</div>
                  <p className="text-gray-400 text-xs leading-relaxed">{agent.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-gray-900/50 border border-orange-900/30 rounded-xl p-5">
              <h3 className="text-orange-400 font-semibold mb-2">Modèle PRAM CREW — Concurrent Read / Exclusive Write</h3>
              <div className="text-gray-300 text-sm space-y-1">
                <div><span className="text-white font-medium">Concurrent Read :</span> Plusieurs détecteurs lisent les transactions simultanément</div>
                <div><span className="text-white font-medium">Exclusive Write :</span> Le processus principal collecte et agrège les résultats</div>
                <div><span className="text-white font-medium">Implémentation :</span> <code className="bg-gray-800 px-1 rounded">multiprocessing.Pool</code> persistant | <code className="bg-gray-800 px-1 rounded">fork()</code> Linux / <code className="bg-gray-800 px-1 rounded">spawn()</code> Windows</div>
              </div>
            </div>
          </section>

          {/* Stratégies de fraude */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-red-500 to-yellow-500 rounded-full"></div>
              Agents Fraudeurs et Q-Learning
            </h2>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {[
                { name: 'montant_explosif', desc: 'Virement énorme et inhabituel' },
                { name: 'fragmentation', desc: 'Découpage en petites transactions' },
                { name: 'usurpation', desc: "Copie du profil d'un client normal" },
                { name: 'rapidite', desc: 'Transactions en très grande fréquence' },
                { name: 'localisation', desc: 'Ville géographiquement impossible' },
                { name: 'compte_dormant', desc: 'Compte inactif soudainement actif' },
                { name: 'micro_transactions', desc: 'Milliers de petits prélèvements' },
                { name: 'horaires_suspects', desc: 'Transactions en pleine nuit (0h–4h)' },
                { name: 'round_tripping', desc: 'Même argent en boucle via intermédiaires' },
                { name: 'mule_account', desc: 'Compte tiers comme relais financier' },
              ].map((s) => (
                <div key={s.name} className="bg-gray-900/50 border border-red-900/20 rounded-lg p-4 flex items-start gap-3">
                  <span className="text-red-400 font-mono text-xs mt-0.5 shrink-0">{s.name}</span>
                  <span className="text-gray-400 text-sm">{s.desc}</span>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-red-900/20 to-orange-900/10 border-2 border-red-700/30 rounded-xl p-6">
              <h3 className="text-red-400 font-bold text-lg mb-3">Algorithme Q-Learning Epsilon-Greedy</h3>
              <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm text-orange-300 mb-4">
                Q(s) = Q(s) + α × (reward − Q(s)) &nbsp;|&nbsp; α = 0.1 &nbsp;|&nbsp; ε = 0.2
              </div>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <div className="text-white font-semibold mb-1">Exploitation (80%)</div>
                  <div className="text-gray-400">Choisit la meilleure stratégie connue (score Q maximum)</div>
                </div>
                <div>
                  <div className="text-white font-semibold mb-1">Exploration (20%)</div>
                  <div className="text-gray-400">Essaie une stratégie aléatoire pour découvrir de meilleures options</div>
                </div>
                <div>
                  <div className="text-white font-semibold mb-1">Résultat</div>
                  <div className="text-gray-400">Tous les scores Q finissent négatifs → système de détection très efficace</div>
                </div>
              </div>
            </div>
          </section>

          {/* Règles de détection */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-yellow-500 to-orange-500 rounded-full"></div>
              Règles de Détection Calibrées
            </h2>

            <div className="grid md:grid-cols-2 gap-3 mb-5">
              {[
                { num: 1, condition: 'montant ≥ 1 000 000 FCFA', pts: '+60 pts', type: 'montant_explosif' },
                { num: 2, condition: 'fréquence ≥ 20 transactions', pts: '+60 pts', type: 'rapidité' },
                { num: 3, condition: 'montant < 1000 ET freq > 6', pts: '+60 pts', type: 'micro_transactions' },
                { num: 4, condition: 'heure ≤ 4h du matin', pts: '+50 pts', type: 'horaires_suspects' },
                { num: 5, condition: 'montant > 500k ET freq ≥ 4', pts: '+50 pts', type: 'round_tripping' },
                { num: 6, condition: 'freq ≥ 8 ET montant ≤ 50k', pts: '+40 pts', type: 'fragmentation' },
                { num: 7, condition: 'montant > 240k ET freq ≥ 3', pts: '+25 pts', type: 'mule_account' },
                { num: 8, condition: 'heure ≥ 22h (tardif)', pts: '+15 pts', type: 'signal faible' },
                { num: 9, condition: 'ID dupliqué dans le round', pts: '+50 pts', type: 'usurpation' },
                { num: 10, condition: 'ville inhabituelle du client', pts: '+50 pts', type: 'localisation' },
              ].map((r) => (
                <div key={r.num} className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 flex items-center justify-between">
                  <div>
                    <span className="text-orange-400 text-xs font-semibold">Règle {r.num} — </span>
                    <span className="text-gray-500 text-xs italic">{r.type}</span>
                    <div className="text-gray-300 text-sm mt-1">{r.condition}</div>
                  </div>
                  <span className="text-yellow-400 font-bold text-sm shrink-0 ml-4">{r.pts}</span>
                </div>
              ))}
            </div>

            <div className="bg-orange-900/20 border-2 border-orange-600/50 rounded-xl p-4 text-center">
              <span className="text-orange-300 font-semibold">Seuil de décision : score ≥ 30 points</span>
              <span className="text-gray-400 mx-3">|</span>
              <span className="text-gray-300 text-sm">Calibré pour éliminer les faux positifs</span>
            </div>
          </section>

          {/* Résultats */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-green-500 to-orange-500 rounded-full"></div>
              Résultats et Performances
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gradient-to-r from-orange-900/20 to-orange-800/10 border-2 border-orange-700/30 rounded-xl p-6">
                <h3 className="text-orange-400 font-bold text-lg mb-4">Analyse Speedup — Loi d'Amdahl</h3>
                <div className="space-y-2 text-sm text-gray-300">
                  <div className="flex justify-between"><span>Partie séquentielle</span><span className="text-white font-mono">15%</span></div>
                  <div className="flex justify-between"><span>Partie parallélisable</span><span className="text-white font-mono">85%</span></div>
                  <div className="flex justify-between"><span>Speedup max théorique</span><span className="text-white font-mono">4.5x</span></div>
                  <div className="flex justify-between"><span>Speedup obtenu</span><span className="text-orange-400 font-bold font-mono">3.50x</span></div>
                  <div className="flex justify-between"><span>Efficacité parallèle</span><span className="text-yellow-400 font-mono">77.8%</span></div>
                </div>
                <div className="mt-3 text-xs text-gray-500">Écart dû à l'overhead Windows spawn() — Linux fork() attendu à 5x–6x</div>
              </div>

              <div className="bg-gradient-to-r from-green-900/20 to-green-800/10 border-2 border-green-700/30 rounded-xl p-6">
                <h3 className="text-green-400 font-bold text-lg mb-4">Performances de Détection</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Fraudes détectées</span>
                    <span className="text-green-400 font-bold">1 478 / 1 500 (98.5%)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Fraudes ratées</span>
                    <span className="text-red-400 font-bold">22 / 1 500 (1.5%)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Faux positifs</span>
                    <span className="text-blue-400 font-bold">0 (0%)</span>
                  </div>
                  <div className="border-t border-gray-700 pt-3 text-gray-400 text-xs space-y-1">
                    <div>✓ Q-Learning converge : tous scores Q {"<"} 0</div>
                    <div>✓ Impossible Travel : usurpation détectée</div>
                    <div>✓ SQLite : amélioration inter-simulations</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Comparaison environnements */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
              <h3 className="text-white font-semibold mb-4">Comparaison des Environnements</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                {[
                  { env: 'Windows natif', detail: '6 cœurs physiques', speedup: '3.50x', color: 'text-orange-400' },
                  { env: 'Docker / WSL2', detail: '6 cœurs virtuels', speedup: '3.02x', color: 'text-yellow-400' },
                  { env: 'Linux natif', detail: 'fork() au lieu de spawn()', speedup: '5x–6x*', color: 'text-green-400' },
                ].map((e) => (
                  <div key={e.env} className="bg-gray-800/50 rounded-lg p-4 flex justify-between items-center">
                    <div>
                      <div className="text-white font-medium">{e.env}</div>
                      <div className="text-gray-500 text-xs">{e.detail}</div>
                    </div>
                    <span className={`text-2xl font-bold ${e.color}`}>{e.speedup}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 text-xs mt-3">* Estimation théorique — fork() réduit l'overhead de 60%</p>
            </div>
          </section>

          {/* Difficultés / Solutions */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-orange-500 to-yellow-500 rounded-full"></div>
              Difficultés et Solutions
            </h2>

            <div className="bg-gray-900/50 border border-orange-900/30 rounded-xl overflow-hidden">
              <div className="grid grid-cols-3 bg-gray-800/50 text-sm font-semibold">
                <div className="p-4 text-orange-400">Difficulté</div>
                <div className="p-4 text-gray-400">Problème</div>
                <div className="p-4 text-green-400">Solution</div>
              </div>
              {[
                ['GIL Python', 'threading inutile pour CPU', 'multiprocessing contourne le GIL'],
                ['Overhead spawn', 'Respawn à chaque round = lent', 'Pool persistant → spawn unique'],
                ['Mémoire distribuée', 'Chaque processus = mémoire séparée', 'SQLite partagée + retour des données'],
                ['Détection usurpation', 'Fraudeur copie profil exact', 'Doublon ID centralisé AVANT distribution'],
                ['Faux positifs', 'Règles trop larges', 'Calibration zones client vs fraudeur'],
              ].map(([diff, pb, sol], i) => (
                <div key={i} className="grid grid-cols-3 border-t border-gray-800 text-sm hover:bg-gray-800/20">
                  <div className="p-4 text-orange-300 font-medium">{diff}</div>
                  <div className="p-4 text-gray-400">{pb}</div>
                  <div className="p-4 text-green-400">{sol}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Stack + Compétences */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-red-500 to-orange-500 rounded-full"></div>
              Technologies et Compétences
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-900/50 border border-red-900/30 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-red-400 mb-4">Stack Technique</h3>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'multiprocessing', 'Q-Learning', 'SQLite', 'PRAM CREW', 'Loi d\'Amdahl', 'Matplotlib'].map((t) => (
                    <span key={t} className="px-3 py-1 bg-red-600/20 text-red-400 rounded-lg text-sm border border-red-600/30">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-gray-900/50 border border-orange-900/30 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-orange-400 mb-4">Compétences Développées</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  {[
                    'Programmation parallèle multiprocessing',
                    'Systèmes multi-agents et coordination',
                    'Reinforcement Learning (Q-Learning)',
                    'Modélisation PRAM et analyse Amdahl',
                    'Persistance SQLite inter-processus',
                    'Détection de fraude par règles métier',
                  ].map((c) => (
                    <li key={c} className="flex items-start gap-2">
                      <span className="text-orange-400 mt-1">✓</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-red-900/20 to-orange-900/20 border-2 border-red-600/50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-red-400 mb-4">Conclusion et Perspectives</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Ce projet démontre qu'un système multi-agents parallèle peut atteindre un taux de
                détection de <strong className="text-white">98.5%</strong> avec <strong className="text-white">0% de faux positifs</strong>,
                en combinant des règles métier calibrées et des agents fraudeurs adaptatifs par Q-Learning.
                Le speedup de <strong className="text-white">3.50x</strong> sur 6 cœurs valide l'approche parallèle, avec
                un potentiel de 5x–6x sur Linux natif.
              </p>
              <div className="bg-red-900/20 border-l-4 border-red-500 p-4 rounded">
                <h3 className="text-white font-semibold mb-2">Perspectives Futures</h3>
                <div className="grid md:grid-cols-2 gap-2 text-gray-300 text-sm">
                  <div>• Linux natif → fork() → speedup 5x–6x</div>
                  <div>• Docker cluster → multi-nœuds → 20x+</div>
                  <div>• XGBoost / ML pour remplacer les règles</div>
                  <div>• API Orange Money / Wave en production</div>
                  <div>• Spark / Dask pour passage à grande échelle</div>
                </div>
              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  )
}