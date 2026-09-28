import type { T } from './i18n'

/* ------------------------------------------------------------------ */
/* Types                                                                */
/* ------------------------------------------------------------------ */

export type Domain = 'vision' | 'nlp' | 'ml' | 'ts' | 'hpc' | 'viz'

export const domains: Record<Domain, T> = {
  vision: { fr: 'Vision', en: 'Vision' },
  nlp: 'NLP',
  ml: 'Machine Learning',
  ts: { fr: 'Séries temporelles', en: 'Time series' },
  hpc: { fr: 'Calcul parallèle', en: 'Parallel computing' },
  viz: { fr: 'Visualisation', en: 'Visualisation' },
}

export type Block =
  | { type: 'text'; body: T }
  | { type: 'question'; body: T }
  | { type: 'lists'; columns: { title: T; items: T[] }[] }
  | { type: 'stats'; items: { value: T; label: T; note?: T }[] }
  | { type: 'table'; head: T[]; rows: T[][]; highlight?: number; note?: T }
  | { type: 'steps'; items: { title: T; body: T }[] }
  | { type: 'defs'; items: { term: T; desc: T; aside?: T }[]; mono?: boolean }
  | { type: 'bars'; items: { label: string; pct: number }[]; note?: T }
  | { type: 'code'; body: string }
  | { type: 'iframe'; src: string; title: T }
  | { type: 'tags'; items: string[] }

export type Section = { title: T; blocks: Block[] }

export type Project = {
  slug: string
  title: T
  short: T
  summary: T
  context: T
  period: T
  sort: number
  domains: Domain[]
  tech: string[]
  meta?: T[]
  award?: T
  featured?: boolean
  sections: Section[]
}

/* ------------------------------------------------------------------ */
/* Projets                                                              */
/* ------------------------------------------------------------------ */

const eye: Project = {
  slug: 'detection-maladies-oculaires',
  sort: 202601,
  featured: true,
  title: {
    fr: 'Détection de maladies oculaires par deep learning',
    en: 'Eye disease detection with deep learning',
  },
  short: {
    fr: "YOLO-EyeNet et auto-encodeur convolutionnel combinés pour classer 10 classes de pathologies rétiniennes sur un jeu de données très déséquilibré. 93 % d'accuracy.",
    en: 'YOLO-EyeNet and a convolutional autoencoder combined to classify 10 retinal conditions on a heavily imbalanced dataset. 93% accuracy.',
  },
  summary: {
    fr: 'Système automatique de détection de pathologies oculaires combinant YOLO-EyeNet et un auto-encodeur convolutionnel.',
    en: 'An automated eye disease detection system combining YOLO-EyeNet with a convolutional autoencoder.',
  },
  context: { fr: 'Module Deep Learning', en: 'Deep Learning module' },
  period: { fr: 'Master 2 · janvier 2026', en: "Master's year 2 · January 2026" },
  meta: [{ fr: 'Encadré par Dr. Ayikpa', en: 'Supervised by Dr. Ayikpa' }],
  domains: ['vision', 'ml'],
  tech: ['Python', 'PyTorch', 'YOLOv11', 'YOLOv8', 'OpenCV', 'NumPy', 'Pandas', 'scikit-learn'],
  sections: [
    {
      title: { fr: 'Contexte', en: 'Context' },
      blocks: [
        {
          type: 'text',
          body: {
            fr: "Les maladies oculaires sont un enjeu majeur de santé publique. Détectées tard, elles entraînent des pertes de vision sévères et irréversibles. L'accès limité aux ophtalmologistes, en particulier dans les pays en développement, rend les systèmes de dépistage automatisé d'autant plus utiles.",
            en: 'Eye diseases are a major public health issue. Detected late, they cause severe and irreversible vision loss. Limited access to ophthalmologists, especially in developing countries, makes automated screening systems all the more valuable.',
          },
        },
        {
          type: 'question',
          body: {
            fr: "Comment détecter automatiquement 9 pathologies oculaires à partir d'images rétiniennes, avec un jeu de données déséquilibré dans un rapport de 88 pour 1 ?",
            en: 'How can we automatically detect 9 eye conditions from retinal images when the dataset is imbalanced by a ratio of 88 to 1?',
          },
        },
        {
          type: 'lists',
          columns: [
            {
              title: { fr: 'Objectifs', en: 'Goals' },
              items: [
                { fr: 'Identifier 10 classes (9 pathologies + sain)', en: 'Identify 10 classes (9 conditions + healthy)' },
                { fr: 'Classification rapide avec YOLO-EyeNet', en: 'Fast classification with YOLO-EyeNet' },
                { fr: "Détection d'anomalies par auto-encodeur", en: 'Anomaly detection with an autoencoder' },
                { fr: 'Fusion des embeddings pour gagner en performance', en: 'Embedding fusion to improve performance' },
              ],
            },
            {
              title: { fr: 'Difficultés', en: 'Challenges' },
              items: [
                { fr: 'Déséquilibre extrême : 88:1', en: 'Extreme imbalance: 88:1' },
                { fr: 'Classes très rares (Pterygium : 17 images)', en: 'Very rare classes (Pterygium: 17 images)' },
                { fr: 'Exigence de fiabilité clinique', en: 'Clinical-grade reliability required' },
                { fr: "Détection d'anomalies sans supervision", en: 'Unsupervised anomaly detection' },
              ],
            },
          ],
        },
      ],
    },
    {
      title: { fr: 'Données et prétraitement', en: 'Data and preprocessing' },
      blocks: [
        {
          type: 'stats',
          items: [
            { value: '5 335', label: { fr: 'images rétiniennes RGB', en: 'RGB retinal images' }, note: '2004 × 1690 px' },
            { value: '10', label: { fr: 'classes', en: 'classes' }, note: { fr: '9 pathologies + sain', en: '9 conditions + healthy' } },
            { value: '88:1', label: { fr: 'ratio de déséquilibre', en: 'imbalance ratio' } },
          ],
        },
        {
          type: 'lists',
          columns: [
            {
              title: { fr: 'Transformations', en: 'Transforms' },
              items: [
                { fr: 'Redimensionnement : 640×640 (YOLO) / 224×224 (AE)', en: 'Resize: 640×640 (YOLO) / 224×224 (AE)' },
                { fr: 'CLAHE pour le contraste', en: 'CLAHE for contrast' },
                { fr: 'Normalisation des pixels : [0, 255] → [0, 1]', en: 'Pixel scaling: [0, 255] → [0, 1]' },
              ],
            },
            {
              title: { fr: 'Augmentation ciblée', en: 'Targeted augmentation' },
              items: [
                { fr: 'Rotation ±15°, flips H/V, zoom ±10 %', en: 'Rotation ±15°, H/V flips, zoom ±10%' },
                { fr: 'Ajustements HSV (H 0.015, S 0.7, V 0.4)', en: 'HSV jitter (H 0.015, S 0.7, V 0.4)' },
                { fr: 'Augmentation ×3 à ×5 sur les classes rares', en: '×3 to ×5 augmentation on rare classes' },
              ],
            },
          ],
        },
      ],
    },
    {
      title: { fr: 'Architecture hybride', en: 'Hybrid architecture' },
      blocks: [
        {
          type: 'defs',
          items: [
            {
              term: 'YOLO-EyeNet',
              desc: {
                fr: 'Basé sur YOLOv11s, ajusté pour les pathologies rétiniennes : 80 epochs, learning rate 0.005, AdamW. 47 couches, 5,45 M de paramètres, 13,5 ms par image, top-1 à 77,41 %.',
                en: 'Built on YOLOv11s and tuned for retinal conditions: 80 epochs, learning rate 0.005, AdamW. 47 layers, 5.45M parameters, 13.5 ms per image, 77.41% top-1.',
              },
            },
            {
              term: { fr: 'Auto-encodeur convolutionnel', en: 'Convolutional autoencoder' },
              desc: {
                fr: "Entraîné sur 4 classes (rétinopathie diabétique, glaucome, sain, myopie) pour apprendre la distribution normale et repérer les anomalies. Encodeur 5 Conv2d → espace latent 512-d, décodeur 5 ConvTranspose2d, perte MSE + SSIM + CE×0.1.",
                en: 'Trained on 4 classes (diabetic retinopathy, glaucoma, healthy, myopia) to learn the normal distribution and flag anomalies. Encoder 5 Conv2d → 512-d latent space, decoder 5 ConvTranspose2d, loss MSE + SSIM + CE×0.1.',
              },
            },
            {
              term: { fr: 'Fusion YOLO + AE (MLP)', en: 'YOLO + AE fusion (MLP)' },
              desc: {
                fr: 'Concaténation des embeddings YOLO (25 088-d) et AE (512-d), soit 25 600-d, puis classification finale sur 10 classes.',
                en: 'YOLO embeddings (25,088-d) and AE embeddings (512-d) are concatenated into 25,600-d, then classified into 10 classes.',
              },
            },
          ],
        },
        {
          type: 'code',
          body: 'Linear(25600 → 1024) + ReLU + Dropout(0.3)\nLinear(1024 → 256)   + ReLU + Dropout(0.3)\nLinear(256 → 10)     → Softmax',
        },
      ],
    },
    {
      title: { fr: 'Résultats', en: 'Results' },
      blocks: [
        {
          type: 'stats',
          items: [
            { value: '93 %', label: { fr: 'accuracy globale', en: 'overall accuracy' }, note: { fr: '+15,2 pts vs YOLO seul', en: '+15.2 pts vs YOLO alone' } },
            { value: '0,94', label: { fr: 'F1 macro', en: 'macro F1' } },
            { value: '100 %', label: { fr: 'sur les classes rares', en: 'on rare classes' }, note: 'Pterygium, Retinal Det.' },
            { value: '6,8 %', label: { fr: "taux d'erreur", en: 'error rate' }, note: { fr: '55 images sur 810', en: '55 of 810 images' } },
          ],
        },
        {
          type: 'table',
          head: [{ fr: 'Classe', en: 'Class' }, 'F1'],
          rows: [
            ['Pterygium', '1.00'],
            ['Retinal Detachment', '1.00'],
            ['Diabetic Retinopathy', '0.98'],
            ['Retinitis Pigmentosa', '0.98'],
            ['Macular Scar', '0.92'],
            ['Glaucoma', '0.91'],
            ['Healthy', '0.91'],
            ['CSC', '0.90'],
          ],
        },
        {
          type: 'text',
          body: {
            fr: "27 cas atypiques ont été repérés automatiquement grâce à une erreur de reconstruction élevée (MSE au-delà du 99e percentile).",
            en: '27 atypical cases were flagged automatically through high reconstruction error (MSE above the 99th percentile).',
          },
        },
      ],
    },
    {
      title: { fr: 'Ce que je retiens', en: 'Takeaways' },
      blocks: [
        {
          type: 'text',
          body: {
            fr: "Combiner une classification rapide (YOLO, caractéristiques locales) et une représentation latente (auto-encodeur, structure globale) permet d'atteindre 93 % d'accuracy malgré un déséquilibre extrême. La fusion apporte +15,2 points par rapport à YOLO seul. Côté usage, le modèle pourrait servir d'aide au tri pour les ophtalmologistes et au dépistage dans les zones mal desservies, avec une inférence en temps réel.",
            en: 'Pairing fast classification (YOLO, local features) with a latent representation (autoencoder, global structure) reaches 93% accuracy despite extreme imbalance. Fusion adds 15.2 points over YOLO alone. In practice, the model could help ophthalmologists triage cases and support screening in underserved areas, with real-time inference.',
          },
        },
        {
          type: 'lists',
          columns: [
            {
              title: { fr: 'Livrables', en: 'Deliverables' },
              items: [
                { fr: '3 modèles YOLO (v8, v11, EyeNet)', en: '3 YOLO models (v8, v11, EyeNet)' },
                { fr: "Auto-encodeur + détecteur d'anomalies", en: 'Autoencoder + anomaly detector' },
                { fr: 'Modèle de fusion MLP (93 %)', en: 'MLP fusion model (93%)' },
                { fr: 'Rapport technique (14 pages) et soutenance', en: 'Technical report (14 pages) and defence' },
              ],
            },
            {
              title: { fr: 'Pistes', en: 'Next steps' },
              items: [
                { fr: "Grad-CAM pour l'interprétabilité clinique", en: 'Grad-CAM for clinical interpretability' },
                { fr: 'Validation externe (ODIR, Kaggle DR)', en: 'External validation (ODIR, Kaggle DR)' },
                { fr: 'Annotations de localisation pour le mAP', en: 'Localisation labels to compute mAP' },
                { fr: 'Déploiement en dépistage temps réel', en: 'Real-time screening deployment' },
              ],
            },
          ],
        },
      ],
    },
  ],
}

const fraud: Project = {
  slug: 'detection-fraudes-bancaires',
  sort: 202512,
  featured: true,
  title: {
    fr: 'Détection de fraude Mobile Money par système multi-agents parallèle',
    en: 'Mobile Money fraud detection with a parallel multi-agent system',
  },
  short: {
    fr: 'Simulation inspirée d’Orange Money, Wave et MTN MoMo : détecteurs parallèles contre fraudeurs qui apprennent par Q-Learning. 98,5 % de détection, 0 faux positif, speedup ×3,5.',
    en: 'A simulation inspired by Orange Money, Wave and MTN MoMo: parallel detectors versus fraudsters that learn with Q-Learning. 98.5% detection, zero false positives, 3.5× speedup.',
  },
  summary: {
    fr: 'Système parallèle de détection de fraude inspiré du Mobile Money africain (Orange Money, Wave, MTN MoMo), avec des agents fraudeurs qui s’adaptent par Q-Learning.',
    en: 'A parallel fraud detection system inspired by African Mobile Money (Orange Money, Wave, MTN MoMo), with fraudster agents that adapt through Q-Learning.',
  },
  context: { fr: 'Architecture et algorithmes parallèles', en: 'Parallel architectures & algorithms' },
  period: { fr: 'Master 2 · 2025–2026', en: "Master's year 2 · 2025–2026" },
  domains: ['hpc', 'ml'],
  tech: ['Python', 'multiprocessing', 'Q-Learning', 'SQLite', 'PRAM CREW', 'Matplotlib'],
  sections: [
    {
      title: { fr: 'Contexte', en: 'Context' },
      blocks: [
        {
          type: 'lists',
          columns: [
            {
              title: { fr: 'Le problème', en: 'The problem' },
              items: [
                { fr: 'Le Mobile Money génère des millions de transactions par jour en Afrique', en: 'Mobile Money generates millions of transactions a day across Africa' },
                { fr: 'La fraude évolue en temps réel : usurpation, fragmentation, round-tripping…', en: 'Fraud evolves in real time: identity theft, structuring, round-tripping…' },
                { fr: "Un détecteur unique devient un goulot d'étranglement", en: 'A single detector becomes a bottleneck' },
              ],
            },
            {
              title: { fr: 'La réponse', en: 'The approach' },
              items: [
                { fr: 'Système multi-agents exécuté en parallèle sur N cœurs', en: 'A multi-agent system running in parallel on N cores' },
                { fr: 'Agents fraudeurs adaptatifs (Q-Learning)', en: 'Adaptive fraudster agents (Q-Learning)' },
                { fr: 'Base SQLite persistante entre simulations', en: 'SQLite store persisted across simulations' },
              ],
            },
          ],
        },
        {
          type: 'stats',
          items: [
            { value: '98,5 %', label: { fr: 'taux de détection', en: 'detection rate' } },
            { value: '0 %', label: { fr: 'faux positifs', en: 'false positives' } },
            { value: '×3,5', label: { fr: 'speedup parallèle', en: 'parallel speedup' } },
            { value: '10', label: { fr: 'stratégies de fraude', en: 'fraud strategies' } },
          ],
        },
      ],
    },
    {
      title: { fr: 'Architecture', en: 'Architecture' },
      blocks: [
        {
          type: 'defs',
          items: [
            { term: { fr: 'Agent client', en: 'Client agent' }, desc: { fr: 'Génère des transactions légitimes avec un profil stable.', en: 'Generates legitimate transactions with a stable profile.' } },
            { term: { fr: 'Agent fraudeur', en: 'Fraudster agent' }, desc: { fr: '10 stratégies, Q-Learning epsilon-greedy : il apprend à contourner le système.', en: '10 strategies, epsilon-greedy Q-Learning: it learns to evade the system.' } },
            { term: { fr: 'Agent détecteur', en: 'Detector agent' }, desc: { fr: 'Analyse en parallèle avec 10 règles métier calibrées et un pool de processus persistant.', en: 'Analyses in parallel with 10 calibrated business rules and a persistent process pool.' } },
            { term: { fr: 'Superviseur', en: 'Supervisor' }, desc: { fr: 'Coordination centrale : collecte des décisions, détection des identifiants dupliqués.', en: 'Central coordination: collects decisions, detects duplicate IDs.' } },
            { term: { fr: 'Base SQLite', en: 'SQLite store' }, desc: { fr: 'Persistance entre simulations : profils clients, historique des fraudes.', en: 'Persistence across simulations: client profiles, fraud history.' } },
          ],
        },
        {
          type: 'text',
          body: {
            fr: 'Modèle PRAM CREW (lecture concurrente, écriture exclusive) : plusieurs détecteurs lisent les transactions en même temps, le processus principal agrège les résultats. Implémentation avec un multiprocessing.Pool persistant (fork() sous Linux, spawn() sous Windows).',
            en: 'PRAM CREW model (concurrent read, exclusive write): several detectors read transactions at once, and the main process aggregates the results. Implemented with a persistent multiprocessing.Pool (fork() on Linux, spawn() on Windows).',
          },
        },
      ],
    },
    {
      title: { fr: 'Fraudeurs et Q-Learning', en: 'Fraudsters and Q-Learning' },
      blocks: [
        {
          type: 'defs',
          mono: true,
          items: [
            { term: 'montant_explosif', desc: { fr: 'Virement énorme et inhabituel', en: 'Huge, unusual transfer' } },
            { term: 'fragmentation', desc: { fr: 'Découpage en petites transactions', en: 'Split into small transactions' } },
            { term: 'usurpation', desc: { fr: "Copie du profil d'un client", en: "Copies a real client's profile" } },
            { term: 'rapidite', desc: { fr: 'Très haute fréquence de transactions', en: 'Very high transaction frequency' } },
            { term: 'localisation', desc: { fr: 'Ville géographiquement impossible', en: 'Geographically impossible city' } },
            { term: 'compte_dormant', desc: { fr: 'Compte inactif soudain actif', en: 'Dormant account suddenly active' } },
            { term: 'micro_transactions', desc: { fr: 'Milliers de petits prélèvements', en: 'Thousands of tiny debits' } },
            { term: 'horaires_suspects', desc: { fr: 'Transactions entre 0 h et 4 h', en: 'Transactions between midnight and 4 a.m.' } },
            { term: 'round_tripping', desc: { fr: "Même argent en boucle via des intermédiaires", en: 'Same money looped through intermediaries' } },
            { term: 'mule_account', desc: { fr: 'Compte tiers utilisé comme relais', en: 'Third-party account used as a relay' } },
          ],
        },
        { type: 'code', body: 'Q(s) ← Q(s) + α · (reward − Q(s))     α = 0.1   ε = 0.2' },
        {
          type: 'text',
          body: {
            fr: "80 % du temps, le fraudeur exploite la meilleure stratégie connue ; 20 % du temps, il en essaie une au hasard. À la fin, tous les scores Q sont négatifs : aucune stratégie ne paie, signe que la détection tient.",
            en: 'Eighty percent of the time the fraudster exploits its best known strategy; twenty percent of the time it tries a random one. By the end, every Q-score is negative: no strategy pays off, which shows the detection holds.',
          },
        },
      ],
    },
    {
      title: { fr: 'Règles de détection', en: 'Detection rules' },
      blocks: [
        {
          type: 'table',
          head: [{ fr: 'Règle', en: 'Rule' }, { fr: 'Condition', en: 'Condition' }, { fr: 'Points', en: 'Points' }],
          rows: [
            ['montant_explosif', { fr: 'montant ≥ 1 000 000 FCFA', en: 'amount ≥ 1,000,000 FCFA' }, '+60'],
            ['rapidite', { fr: 'fréquence ≥ 20 transactions', en: 'frequency ≥ 20 transactions' }, '+60'],
            ['micro_transactions', { fr: 'montant < 1000 et fréquence > 6', en: 'amount < 1000 and frequency > 6' }, '+60'],
            ['horaires_suspects', { fr: 'heure ≤ 4 h', en: 'hour ≤ 4 a.m.' }, '+50'],
            ['round_tripping', { fr: 'montant > 500k et fréquence ≥ 4', en: 'amount > 500k and frequency ≥ 4' }, '+50'],
            ['usurpation', { fr: 'identifiant dupliqué dans le tour', en: 'duplicate ID in the round' }, '+50'],
            ['localisation', { fr: 'ville inhabituelle pour le client', en: 'unusual city for the client' }, '+50'],
            ['fragmentation', { fr: 'fréquence ≥ 8 et montant ≤ 50k', en: 'frequency ≥ 8 and amount ≤ 50k' }, '+40'],
            ['mule_account', { fr: 'montant > 240k et fréquence ≥ 3', en: 'amount > 240k and frequency ≥ 3' }, '+25'],
            [{ fr: 'signal faible', en: 'weak signal' }, { fr: 'heure ≥ 22 h', en: 'hour ≥ 10 p.m.' }, '+15'],
          ],
          note: {
            fr: 'Seuil de décision : score ≥ 30 points, calibré pour éliminer les faux positifs.',
            en: 'Decision threshold: score ≥ 30 points, calibrated to eliminate false positives.',
          },
        },
      ],
    },
    {
      title: { fr: 'Performances', en: 'Performance' },
      blocks: [
        {
          type: 'lists',
          columns: [
            {
              title: { fr: "Speedup (loi d'Amdahl)", en: "Speedup (Amdahl's law)" },
              items: [
                { fr: 'Partie séquentielle : 15 %', en: 'Sequential part: 15%' },
                { fr: 'Speedup maximal théorique : ×4,5', en: 'Theoretical max speedup: 4.5×' },
                { fr: 'Speedup obtenu : ×3,5 (6 cœurs)', en: 'Measured speedup: 3.5× (6 cores)' },
                { fr: 'Efficacité parallèle : 77,8 %', en: 'Parallel efficiency: 77.8%' },
              ],
            },
            {
              title: { fr: 'Détection', en: 'Detection' },
              items: [
                { fr: 'Fraudes détectées : 1 478 / 1 500', en: 'Frauds caught: 1,478 / 1,500' },
                { fr: 'Fraudes manquées : 22 (1,5 %)', en: 'Frauds missed: 22 (1.5%)' },
                { fr: 'Faux positifs : 0', en: 'False positives: 0' },
              ],
            },
          ],
        },
        {
          type: 'table',
          head: [{ fr: 'Environnement', en: 'Environment' }, { fr: 'Détail', en: 'Detail' }, 'Speedup'],
          rows: [
            [{ fr: 'Windows natif', en: 'Native Windows' }, { fr: '6 cœurs physiques', en: '6 physical cores' }, '×3,50'],
            ['Docker / WSL2', { fr: '6 cœurs virtuels', en: '6 virtual cores' }, '×3,02'],
            [{ fr: 'Linux natif', en: 'Native Linux' }, { fr: 'fork() au lieu de spawn()', en: 'fork() instead of spawn()' }, '×5–6*'],
          ],
          note: { fr: '* Estimation théorique.', en: '* Theoretical estimate.' },
        },
      ],
    },
    {
      title: { fr: 'Difficultés rencontrées', en: 'Problems solved' },
      blocks: [
        {
          type: 'table',
          head: [{ fr: 'Difficulté', en: 'Issue' }, { fr: 'Problème', en: 'Problem' }, { fr: 'Solution', en: 'Solution' }],
          rows: [
            [{ fr: 'GIL Python', en: 'Python GIL' }, { fr: 'threading inutile pour le calcul', en: 'threading useless for CPU work' }, { fr: 'multiprocessing contourne le GIL', en: 'multiprocessing bypasses the GIL' }],
            [{ fr: 'Coût de spawn', en: 'Spawn overhead' }, { fr: 'Relance à chaque tour', en: 'Respawn on every round' }, { fr: 'Pool persistant', en: 'Persistent pool' }],
            [{ fr: 'Mémoire séparée', en: 'Separate memory' }, { fr: 'Un espace mémoire par processus', en: 'One memory space per process' }, { fr: 'SQLite partagée + retour des données', en: 'Shared SQLite + returned data' }],
            [{ fr: 'Usurpation', en: 'Identity theft' }, { fr: 'Le fraudeur copie un profil exact', en: 'Fraudster copies an exact profile' }, { fr: 'Contrôle des doublons avant distribution', en: 'Duplicate check before dispatch' }],
            [{ fr: 'Faux positifs', en: 'False positives' }, { fr: 'Règles trop larges', en: 'Rules too broad' }, { fr: 'Calibration des zones client / fraudeur', en: 'Calibrated client vs fraudster ranges' }],
          ],
        },
        {
          type: 'lists',
          columns: [
            {
              title: { fr: 'Pistes', en: 'Next steps' },
              items: [
                { fr: 'Linux natif (fork) pour viser ×5–6', en: 'Native Linux (fork) to reach 5–6×' },
                { fr: 'Cluster Docker multi-nœuds', en: 'Multi-node Docker cluster' },
                { fr: 'XGBoost / ML à la place des règles', en: 'XGBoost / ML instead of rules' },
                { fr: 'Spark ou Dask pour passer à l’échelle', en: 'Spark or Dask to scale out' },
              ],
            },
          ],
        },
      ],
    },
  ],
}

const sentiment: Project = {
  slug: 'analyse-sentiments-fast-food',
  sort: 202511,
  title: {
    fr: 'Analyse de sentiments : KFC, McDonald’s, Burger King',
    en: 'Sentiment analysis: KFC, McDonald’s, Burger King',
  },
  short: {
    fr: '145 550 tweets classés en positif/négatif, gestion du déséquilibre (SMOTE, RUS) et lecture métier des erreurs pour chaque marque.',
    en: '145,550 tweets classified as positive or negative, class imbalance handled with SMOTE and RUS, and a business reading of errors for each brand.',
  },
  summary: {
    fr: 'Classification automatique des sentiments clients sur Twitter pour KFC, McDonald’s et Burger King, puis recommandations concrètes par marque.',
    en: 'Automatic classification of customer sentiment on Twitter for KFC, McDonald’s and Burger King, followed by concrete recommendations for each brand.',
  },
  context: { fr: 'Module NLP', en: 'NLP module' },
  period: { fr: 'Master 2 · novembre 2025', en: "Master's year 2 · November 2025" },
  meta: [{ fr: 'Encadré par Dr. Soma', en: 'Supervised by Dr. Soma' }],
  domains: ['nlp', 'ml'],
  tech: ['Python', 'spaCy', 'scikit-learn', 'imbalanced-learn', 'LightGBM', 'Pandas', 'Plotly', 'WordCloud'],
  sections: [
    {
      title: { fr: 'Contexte', en: 'Context' },
      blocks: [
        {
          type: 'text',
          body: {
            fr: "Les réseaux sociaux donnent un retour immédiat des consommateurs sur les marques de restauration rapide. L'objectif : classer automatiquement la polarité des tweets pour mesurer la satisfaction, comparer l'image des marques et en tirer des axes d'amélioration concrets.",
            en: 'Social media gives instant consumer feedback on fast-food brands. The goal: automatically classify tweet polarity to measure satisfaction, compare brand perception and derive concrete improvements.',
          },
        },
        {
          type: 'stats',
          items: [
            { value: '145 550', label: { fr: 'tweets analysés', en: 'tweets analysed' } },
            { value: '3', label: { fr: 'marques comparées', en: 'brands compared' }, note: { fr: "McDonald's 60 %, KFC 23 %, BK 12 %", en: "McDonald's 60%, KFC 23%, BK 12%" } },
            { value: '91,6 %', label: { fr: 'accuracy du modèle retenu', en: 'accuracy of the final model' } },
          ],
        },
      ],
    },
    {
      title: { fr: 'Prétraitement', en: 'Preprocessing' },
      blocks: [
        {
          type: 'steps',
          items: [
            { title: { fr: 'Nettoyage', en: 'Cleaning' }, body: { fr: 'Minuscules, suppression de la ponctuation, des accents et des caractères spéciaux.', en: 'Lowercasing, removal of punctuation, accents and special characters.' } },
            { title: { fr: 'Lemmatisation', en: 'Lemmatisation' }, body: { fr: 'spaCy (en_core_web_sm) pour ramener les mots à leur forme canonique.', en: 'spaCy (en_core_web_sm) to reduce words to their base form.' } },
            { title: { fr: 'Encodage', en: 'Labelling' }, body: { fr: 'Polarité transformée en classes binaires : 0 (négatif) / 1 (positif).', en: 'Polarity mapped to binary classes: 0 (negative) / 1 (positive).' } },
            { title: 'TF-IDF', body: { fr: 'Unigrammes + bigrammes, max_df = 0.75, vocabulaire de 551 197 features.', en: 'Unigrams + bigrams, max_df = 0.75, vocabulary of 551,197 features.' } },
          ],
        },
      ],
    },
    {
      title: { fr: 'Déséquilibre et choix du modèle', en: 'Imbalance and model choice' },
      blocks: [
        {
          type: 'text',
          body: {
            fr: "Le jeu de données compte 64 % de tweets positifs pour 36 % de négatifs. Sans correction, le modèle sur-prédit la classe majoritaire. J'ai comparé le sur-échantillonnage (SMOTE) et le sous-échantillonnage aléatoire (RUS).",
            en: 'The dataset has 64% positive tweets and 36% negative. Left uncorrected, the model over-predicts the majority class. I compared oversampling (SMOTE) with random undersampling (RUS).',
          },
        },
        {
          type: 'table',
          head: [{ fr: 'Modèle', en: 'Model' }, 'Accuracy', 'F1', { fr: 'Équilibre', en: 'Balance' }],
          rows: [
            [{ fr: 'Régression logistique (base)', en: 'Logistic regression (baseline)' }, '92,3 %', '0.940', { fr: 'biaisé', en: 'biased' }],
            [{ fr: 'Régression logistique + SMOTE', en: 'Logistic regression + SMOTE' }, '92,0 %', '0.938', { fr: 'acceptable', en: 'acceptable' }],
            [{ fr: 'Régression logistique + RUS', en: 'Logistic regression + RUS' }, '91,6 %', '0.933', { fr: 'équilibré', en: 'balanced' }],
            ['LightGBM + SMOTE', '91,3 %', '0.933', { fr: 'acceptable', en: 'acceptable' }],
            ['MultinomialNB + SMOTE', '88,0 %', '0.907', { fr: 'faible', en: 'weak' }],
          ],
          highlight: 2,
          note: {
            fr: "Modèle retenu : régression logistique + RUS. Un peu moins d'accuracy que la base, mais 92 % de vrais négatifs détectés contre 87 % avec SMOTE : la performance est homogène sur les deux classes.",
            en: 'Chosen model: logistic regression + RUS. Slightly lower accuracy than the baseline, but it catches 92% of true negatives versus 87% with SMOTE, so performance is even across both classes.',
          },
        },
      ],
    },
    {
      title: { fr: 'Lecture par marque', en: 'Brand by brand' },
      blocks: [
        {
          type: 'defs',
          items: [
            {
              term: "McDonald's",
              aside: { fr: 'accuracy 94,5 %', en: '94.5% accuracy' },
              desc: {
                fr: 'Problème récurrent des machines à glace et milkshake en panne (devenu un mème). Priorité : la rapidité du service. N-grammes fréquents : « happy meal », « adult happy meal ».',
                en: 'A recurring complaint about broken ice cream and milkshake machines (now a meme). Priority: speed of service. Frequent n-grams: "happy meal", "adult happy meal".',
              },
            },
            {
              term: 'KFC',
              aside: { fr: 'accuracy 93,4 %', en: '93.4% accuracy' },
              desc: {
                fr: 'Contrôle qualité jugé irrégulier, portions trouvées petites, erreurs dans les commandes. Priorité : standardiser les produits et l’exactitude des commandes.',
                en: 'Quality control seen as inconsistent, portions seen as small, order mistakes. Priority: standardise products and order accuracy.',
              },
            },
            {
              term: 'Burger King',
              aside: { fr: 'accuracy 93,9 %', en: '93.9% accuracy' },
              desc: {
                fr: 'Perception positive sur le rapport qualité-prix et les promotions. Opportunité : s’en servir pour se différencier.',
                en: 'Positive perception of value for money and promotions. Opportunity: lean on it to stand out.',
              },
            },
          ],
        },
      ],
    },
  ],
}

const ariel: Project = {
  slug: 'defi-ia-ariel-2025',
  sort: 202501,
  featured: true,
  award: { fr: '3e national · 12e international', en: '3rd nationally · 12th internationally' },
  title: {
    fr: 'Défi IA ESA-Ariel 2025 : eau et nuages dans les atmosphères d’exoplanètes',
    en: 'ESA-Ariel 2025 AI Challenge: water and clouds in exoplanet atmospheres',
  },
  short: {
    fr: 'Classification de spectres atmosphériques simulés pour la mission ARIEL de l’ESA. Score de 0,974 : 3e place nationale, 12e internationale.',
    en: 'Classifying simulated atmospheric spectra for ESA’s ARIEL mission. Score of 0.974: 3rd nationally, 12th internationally.',
  },
  summary: {
    fr: 'Détecter la présence d’eau et de nuages dans des spectres d’exoplanètes simulés pour la mission spatiale ARIEL de l’Agence spatiale européenne.',
    en: 'Detecting water and clouds in simulated exoplanet spectra for the European Space Agency’s ARIEL mission.',
  },
  context: { fr: 'Compétition IA · mission ARIEL (ESA)', en: 'AI competition · ARIEL mission (ESA)' },
  period: { fr: 'Janvier 2025', en: 'January 2025' },
  domains: ['ml'],
  tech: ['Python', 'LightGBM', 'scikit-learn', 'Feature engineering', 'Ensembling'],
  sections: [
    {
      title: { fr: 'Contexte scientifique', en: 'Scientific context' },
      blocks: [
        {
          type: 'text',
          body: {
            fr: "ARIEL (Atmospheric Remote-sensing Infrared Exoplanet Laboratory) est une mission de l'ESA prévue pour 2029. Elle doit révéler la composition chimique, les propriétés physiques et la structure des atmosphères d'exoplanètes en orbite autour d'étoiles différentes du Soleil, pour mieux comprendre la diversité des planètes et les conditions qui rendent un monde habitable.",
            en: 'ARIEL (Atmospheric Remote-sensing Infrared Exoplanet Laboratory) is an ESA mission planned for 2029. It aims to reveal the chemical composition, physical properties and structure of the atmospheres of exoplanets orbiting stars unlike the Sun, to better understand planetary diversity and what makes a world habitable.',
          },
        },
      ],
    },
    {
      title: { fr: 'Le défi', en: 'The challenge' },
      blocks: [
        {
          type: 'text',
          body: {
            fr: "Les données sont des spectres simulés d'ARIEL, c'est-à-dire le produit final des observations de transits planétaires, et elles sont bruitées. Il s'agit de deux classifications binaires : présence ou absence d'eau (H₂O), présence ou absence de nuages.",
            en: 'The data are simulated ARIEL spectra, the end product of planetary transit observations, and they are noisy. The task is two binary classifications: water (H₂O) present or not, clouds present or not.',
          },
        },
        {
          type: 'stats',
          items: [
            { value: '0,974', label: { fr: 'score de prédiction', en: 'prediction score' } },
            { value: '3e', label: { fr: 'place nationale', en: 'place nationally' } },
            { value: '12e', label: { fr: 'place internationale', en: 'place internationally' } },
          ],
        },
      ],
    },
    {
      title: { fr: 'Ce que le défi m’a appris', en: 'What I learned' },
      blocks: [
        {
          type: 'defs',
          items: [
            { term: { fr: 'Traitement du signal', en: 'Signal processing' }, desc: { fr: 'Lire et nettoyer des spectres atmosphériques bruités.', en: 'Reading and cleaning noisy atmospheric spectra.' } },
            { term: 'Feature engineering', desc: { fr: 'Construire des variables pertinentes à partir du spectre.', en: 'Building meaningful features from the spectrum.' } },
            { term: { fr: 'Ensembling et validation', en: 'Ensembling and validation' }, desc: { fr: 'Tuning, validation croisée, combinaison de modèles sous contrainte de temps.', en: 'Tuning, cross-validation and model blending under time pressure.' } },
            { term: { fr: 'Travail en équipe', en: 'Teamwork' }, desc: { fr: 'Répartir les pistes, partager les résultats, décider vite.', en: 'Splitting leads, sharing results, deciding fast.' } },
          ],
        },
      ],
    },
  ],
}

const fintech: Project = {
  slug: 'services-financiers',
  sort: 202505,
  title: {
    fr: 'Adoption des FinTechs en Côte d’Ivoire : analyse temporelle',
    en: 'FinTech adoption in Côte d’Ivoire: a time series study',
  },
  short: {
    fr: 'Taux de pénétration des services financiers numériques de 2000 à 2024 : tests de stationnarité, modèles ARIMA et prévisions jusqu’en 2028.',
    en: 'Digital financial services penetration from 2000 to 2024: stationarity tests, ARIMA models and forecasts to 2028.',
  },
  summary: {
    fr: 'Analyse du taux de pénétration des services financiers numériques sur 2000–2024, avec modélisation ARIMA et prévisions à court terme.',
    en: 'An analysis of digital financial services penetration over 2000–2024, with ARIMA modelling and short-term forecasts.',
  },
  context: { fr: 'Module Séries temporelles', en: 'Time series module' },
  period: { fr: 'Master 1 · 2024–2025', en: "Master's year 1 · 2024–2025" },
  domains: ['ts'],
  tech: ['Python', 'Pandas', 'statsmodels', 'ARIMA', 'Matplotlib', 'Seaborn', 'Quarto'],
  sections: [
    {
      title: { fr: 'Contexte', en: 'Context' },
      blocks: [
        {
          type: 'text',
          body: {
            fr: "Le paysage financier ivoirien a beaucoup changé avec l'essor des services numériques. Là où les banques traditionnelles peinent à toucher une large part de la population, le Mobile Money, les FinTechs et les paiements mobiles se sont imposés, surtout chez les jeunes et les personnes non bancarisées.",
            en: 'The Ivorian financial landscape has changed deeply with the rise of digital services. Where traditional banks struggle to reach much of the population, Mobile Money, FinTechs and mobile payments have taken hold, especially among young and unbanked people.',
          },
        },
        {
          type: 'question',
          body: {
            fr: "Comment modéliser l'évolution du taux de pénétration des FinTechs en Côte d'Ivoire et projeter son évolution dans un contexte régional de plus en plus concurrentiel ?",
            en: 'How can we model FinTech penetration in Côte d’Ivoire and project its evolution in an increasingly competitive regional market?',
          },
        },
        {
          type: 'stats',
          items: [
            { value: { fr: '25 ans', en: '25 years' }, label: { fr: 'de données', en: 'of data' }, note: '2000–2024' },
            { value: '55 %', label: { fr: 'pic historique', en: 'historical peak' }, note: { fr: 'en 2019', en: 'in 2019' } },
            { value: '41,4 %', label: { fr: 'moyenne depuis 2020', en: 'average since 2020' } },
          ],
        },
      ],
    },
    {
      title: { fr: 'Exploration', en: 'Exploration' },
      blocks: [
        {
          type: 'text',
          body: {
            fr: "L'adoption évolue en dents de scie, entre 35 % et 55 %, signe d'une forte sensibilité aux chocs externes : crises économiques, réglementation, habitudes de consommation. Depuis 2020, le marché semble se stabiliser autour de 40–45 %, ce qui suggère une phase de maturité. Aucun service ne domine durablement : les utilisateurs passent de l'un à l'autre selon les opportunités.",
            en: 'Adoption moves in a sawtooth pattern between 35% and 55%, a sign of strong sensitivity to external shocks: economic crises, regulation, consumer habits. Since 2020 the market seems to have settled around 40–45%, suggesting a maturity phase. No single service dominates for long: users move from one to another as opportunities arise.',
          },
        },
        {
          type: 'table',
          head: ['Service', '2000', '2024', { fr: 'Pic', en: 'Peak' }, { fr: 'Évolution', en: 'Change' }],
          rows: [
            ['Crypto', '45,9 %', '35,8 %', '71,8 % (2018)', '−10,1 pts'],
            [{ fr: 'Paiements', en: 'Payments' }, '43,6 %', '42,2 %', '76,4 % (2001)', '−1,4 pt'],
            [{ fr: 'Épargne', en: 'Savings' }, '29,8 %', '39,8 %', '69,1 % (2010)', '+10,0 pts'],
            [{ fr: 'Prêts', en: 'Loans' }, '27,0 %', '31,4 %', '65,3 % (2019)', '+4,5 pts'],
          ],
        },
      ],
    },
    {
      title: { fr: 'Analyse économétrique', en: 'Econometric analysis' },
      blocks: [
        {
          type: 'table',
          head: ['Test', { fr: 'Statistique', en: 'Statistic' }, 'p-value'],
          rows: [
            [{ fr: 'ADF (Dickey-Fuller augmenté)', en: 'ADF (augmented Dickey-Fuller)' }, '−26.2862', '0.0000'],
            ['KPSS', '0.1627', '0.1000'],
          ],
          note: {
            fr: 'Les deux tests confirment la stationnarité : aucune transformation nécessaire avant la modélisation. Les ACF/PACF montrent un bruit blanc, sans autocorrélation significative, ce qui oriente vers un ARIMA simple sans saisonnalité.',
            en: 'Both tests confirm stationarity, so no transformation is needed before modelling. ACF/PACF show white noise with no significant autocorrelation, pointing to a simple non-seasonal ARIMA.',
          },
        },
      ],
    },
    {
      title: { fr: 'Modèles ARIMA', en: 'ARIMA models' },
      blocks: [
        {
          type: 'defs',
          items: [
            {
              term: 'ARIMA(0,0,0)',
              desc: {
                fr: 'Modèle de référence avec constante (41,37 %) : le taux évolue comme un phénomène aléatoire stable autour d’une moyenne. AIC 5 551,96 · BIC 5 560,82.',
                en: 'Baseline with a constant (41.37%): the rate behaves like a stable random process around a mean. AIC 5,551.96 · BIC 5,560.82.',
              },
            },
            {
              term: { fr: 'ARIMA avec mémoire (retenu)', en: 'ARIMA with memory (chosen)' },
              desc: {
                fr: 'Intègre l’influence des valeurs passées pour capter d’éventuelles régularités. Prévisions : 41,06 % (2025), 41,48 % (2026), 41,54 % (2027), 41,55 % (2028).',
                en: 'Adds the influence of past values to capture possible regularities. Forecasts: 41.06% (2025), 41.48% (2026), 41.54% (2027), 41.55% (2028).',
              },
            },
          ],
        },
        {
          type: 'table',
          head: [{ fr: 'Métrique', en: 'Metric' }, 'ARIMA(0,0,0)', { fr: 'ARIMA avec mémoire', en: 'ARIMA with memory' }],
          rows: [
            ['RMSE', '3.796', '3.768'],
            ['MAE', '2.699', '2.691'],
            [{ fr: 'Prévision 2025', en: '2025 forecast' }, '41,61 %', '41,06 %'],
            [{ fr: 'Prévision 2028', en: '2028 forecast' }, '41,61 %', '41,55 %'],
            [{ fr: 'Intervalle de confiance', en: 'Confidence interval' }, '32,74 – 50,47 %', '32,32 – 50,39 %'],
          ],
        },
      ],
    },
    {
      title: { fr: 'Conclusion', en: 'Conclusion' },
      blocks: [
        {
          type: 'text',
          body: {
            fr: "Le taux de pénétration se comporte comme un bruit blanc stationnaire, sans tendance ni saisonnalité marquée. Les deux modèles projettent une stabilisation autour de 41–42 % d'ici 2028, avec une incertitude notable. L'évolution future dépendra surtout de facteurs externes à l'historique.",
            en: 'The penetration rate behaves like stationary white noise, with no clear trend or seasonality. Both models project stabilisation around 41–42% by 2028, with substantial uncertainty. Future change will depend mostly on factors outside the series itself.',
          },
        },
        {
          type: 'lists',
          columns: [
            {
              title: { fr: 'Pistes', en: 'Next steps' },
              items: [
                { fr: 'Variables exogènes (réglementation, PIB, accès internet)', en: 'Exogenous variables (regulation, GDP, internet access)' },
                { fr: 'Modèle VAR pour les interactions entre services', en: 'VAR model for interactions between services' },
                { fr: "Comparaison avec d'autres pays d'Afrique de l'Ouest", en: 'Comparison with other West African countries' },
                { fr: 'Ruptures structurelles (COVID-19, crises politiques)', en: 'Structural breaks (COVID-19, political crises)' },
              ],
            },
          ],
        },
      ],
    },
  ],
}

const scoring: Project = {
  slug: 'projet-scoring',
  sort: 202504,
  title: {
    fr: 'Scoring de satisfaction client pour une compagnie aérienne',
    en: 'Customer satisfaction scoring for an airline',
  },
  short: {
    fr: 'Régression logistique pour sélectionner les variables, Random Forest pour prédire : 96 % d’accuracy, AUC 0,99, seuil de décision réglé selon l’usage métier.',
    en: 'Logistic regression to select variables, Random Forest to predict: 96% accuracy, AUC 0.99, decision threshold tuned to the business use.',
  },
  summary: {
    fr: 'Modèle prédictif de satisfaction passager à partir de données réelles d’expérience client, comparant régression logistique et Random Forest, avec optimisation du seuil de décision.',
    en: 'A passenger satisfaction model built on real customer experience data, comparing logistic regression and Random Forest, with an optimised decision threshold.',
  },
  context: { fr: 'Module Projet Scoring', en: 'Scoring project module' },
  period: { fr: 'Master 1 · 2024–2025', en: "Master's year 1 · 2024–2025" },
  domains: ['ml'],
  tech: ['Python', 'Pandas', 'NumPy', 'scikit-learn', 'statsmodels', 'Matplotlib', 'Seaborn'],
  sections: [
    {
      title: { fr: 'Contexte', en: 'Context' },
      blocks: [
        {
          type: 'text',
          body: {
            fr: "À partir de données réelles sur l'expérience client (services à bord, ponctualité, confort…), l'objectif est d'identifier en amont les passagers à risque d'insatisfaction pour adapter les services.",
            en: 'Using real customer experience data (in-flight services, punctuality, comfort…), the goal is to spot passengers at risk of dissatisfaction early so services can be adapted.',
          },
        },
        {
          type: 'question',
          body: {
            fr: "Comment prédire la satisfaction d'un passager à partir de ses évaluations, avec un seuil de décision adapté au contexte métier ?",
            en: "How can we predict a passenger's satisfaction from their ratings, with a decision threshold suited to the business context?",
          },
        },
        {
          type: 'stats',
          items: [
            { value: '103 900', label: { fr: 'observations', en: 'observations' }, note: { fr: '24 variables', en: '24 variables' } },
            { value: '56,7 %', label: { fr: 'clients non satisfaits', en: 'dissatisfied customers' } },
            { value: '5', label: { fr: 'lignes supprimées', en: 'rows dropped' }, note: '0,005 %' },
          ],
        },
      ],
    },
    {
      title: { fr: 'Nettoyage des données', en: 'Data cleaning' },
      blocks: [
        {
          type: 'lists',
          columns: [
            {
              title: { fr: 'Valeurs manquantes', en: 'Missing values' },
              items: [
                { fr: 'Médiane pour le numérique', en: 'Median for numeric' },
                { fr: 'Mode pour le catégoriel', en: 'Mode for categorical' },
                { fr: 'Lignes vides supprimées', en: 'Empty rows removed' },
              ],
            },
            {
              title: { fr: 'Valeurs aberrantes', en: 'Outliers' },
              items: [
                { fr: 'Notes bornées à [0, 5]', en: 'Ratings bounded to [0, 5]' },
                { fr: 'Retards plafonnés à 1 000 min', en: 'Delays capped at 1,000 min' },
                { fr: 'Distance ≤ 20 000 km', en: 'Distance ≤ 20,000 km' },
              ],
            },
            {
              title: { fr: 'Catégorielles', en: 'Categoricals' },
              items: [
                { fr: 'Codes erronés supprimés (MMMMM, XXXXXXXX)', en: 'Invalid codes removed (MMMMM, XXXXXXXX)' },
                { fr: 'Encodage dummy (drop_first)', en: 'Dummy encoding (drop_first)' },
                { fr: 'Cible binarisée (0/1)', en: 'Binary target (0/1)' },
              ],
            },
          ],
        },
      ],
    },
    {
      title: { fr: 'Modèles', en: 'Models' },
      blocks: [
        {
          type: 'defs',
          items: [
            {
              term: { fr: 'Régression logistique', en: 'Logistic regression' },
              desc: {
                fr: "Modèle exploratoire (sm.Logit) pour repérer les variables significatives (p < 0,05). Flight Distance retirée car non significative ; Departure Delay retiré car très corrélé à Arrival Delay (r = 0,96).",
                en: 'Exploratory model (sm.Logit) to identify significant variables (p < 0.05). Flight Distance dropped as non-significant; Departure Delay dropped for its strong correlation with Arrival Delay (r = 0.96).',
              },
            },
            {
              term: { fr: 'Random Forest (retenu)', en: 'Random Forest (chosen)' },
              desc: {
                fr: '100 arbres, critère entropie, profondeur 20. Capture les interactions non linéaires ; les scores se répartissent presque en deux groupes nets, insatisfaits près de 0 et satisfaits près de 1.',
                en: '100 trees, entropy criterion, depth 20. Captures non-linear interactions; scores split into two almost clean groups, dissatisfied near 0 and satisfied near 1.',
              },
            },
          ],
        },
        {
          type: 'table',
          head: [{ fr: 'Métrique', en: 'Metric' }, { fr: 'Logistique', en: 'Logistic' }, { fr: 'Logistique réduite', en: 'Reduced logistic' }, 'Random Forest'],
          rows: [
            ['Accuracy', '87,5 %', '86,6 %', '96,1 %'],
            [{ fr: 'F1 (insatisfaits)', en: 'F1 (dissatisfied)' }, '0.89', '0.88', '0.97'],
            [{ fr: 'F1 (satisfaits)', en: 'F1 (satisfied)' }, '0.85', '0.84', '0.95'],
            ['ROC AUC', '0.925', '0.919', '0.993'],
          ],
        },
      ],
    },
    {
      title: { fr: 'Variables et seuil de décision', en: 'Variables and decision threshold' },
      blocks: [
        {
          type: 'bars',
          items: [
            { label: 'Online boarding', pct: 92 },
            { label: 'Inflight wifi service', pct: 84 },
            { label: 'Type of Travel (Personal)', pct: 58 },
            { label: 'Class (Eco)', pct: 30 },
            { label: 'Inflight entertainment', pct: 28 },
            { label: 'Seat comfort', pct: 25 },
          ],
          note: { fr: 'Importance relative des variables dans le Random Forest.', en: 'Relative feature importance in the Random Forest.' },
        },
        {
          type: 'defs',
          items: [
            { term: '0.45', desc: { fr: 'Rappel plus élevé : on repère plus de clients à risque.', en: 'Higher recall: more at-risk customers caught.' } },
            { term: '0.50', desc: { fr: 'F1 maximal (0,9536), précision 96,9 %, rappel 93,8 %. Seuil retenu pour un usage général.', en: 'Best F1 (0.9536), precision 96.9%, recall 93.8%. Chosen for general use.' } },
            { term: '0.55–0.60', desc: { fr: 'Précision plus élevée : moins de faux positifs.', en: 'Higher precision: fewer false positives.' } },
          ],
        },
        {
          type: 'lists',
          columns: [
            {
              title: { fr: 'Pistes', en: 'Next steps' },
              items: [
                { fr: 'Comparer avec XGBoost ou LightGBM', en: 'Compare with XGBoost or LightGBM' },
                { fr: 'SHAP pour expliquer chaque prédiction', en: 'SHAP to explain individual predictions' },
                { fr: 'API de scoring en temps réel', en: 'Real-time scoring API' },
                { fr: 'Segmentation des clients par score', en: 'Customer segmentation by score' },
              ],
            },
          ],
        },
      ],
    },
  ],
}

const academic: Project = {
  slug: 'reussite-academique',
  sort: 202503,
  title: {
    fr: 'Facteurs de réussite académique et application R Shiny',
    en: 'Academic success factors and an R Shiny app',
  },
  short: {
    fr: 'Identifier les variables liées à la réussite scolaire, prédire la réussite par machine learning et présenter le tout dans une application R Shiny interactive.',
    en: 'Finding the variables linked to academic success, predicting it with machine learning, and presenting everything in an interactive R Shiny app.',
  },
  summary: {
    fr: 'Identifier les facteurs clés de la réussite scolaire et développer un modèle prédictif déployé sur R Shiny.',
    en: 'Identifying the key drivers of academic success and building a predictive model deployed with R Shiny.',
  },
  context: { fr: 'Module R et Machine Learning', en: 'R & Machine Learning module' },
  period: { fr: 'Master 1 · 2024–2025', en: "Master's year 1 · 2024–2025" },
  domains: ['ml', 'viz'],
  tech: ['R', 'R Shiny', 'ggplot2', 'tidyverse', 'caret'],
  sections: [
    {
      title: { fr: 'Objectifs', en: 'Goals' },
      blocks: [
        {
          type: 'defs',
          items: [
            { term: { fr: 'Visualiser', en: 'Visualise' }, desc: { fr: 'Repérer par la visualisation les variables les plus liées à la réussite.', en: 'Use visualisation to find the variables most linked to success.' } },
            { term: { fr: 'Modéliser', en: 'Model' }, desc: { fr: 'Construire un modèle de machine learning qui prédit la réussite académique.', en: 'Build a machine learning model that predicts academic success.' } },
            { term: { fr: 'Partager', en: 'Share' }, desc: { fr: 'Présenter les résultats dans une application R Shiny.', en: 'Present the results in an R Shiny application.' } },
          ],
        },
      ],
    },
    {
      title: { fr: "L'application", en: 'The app' },
      blocks: [
        {
          type: 'text',
          body: {
            fr: "L'application permet d'explorer les données et de faire des prédictions en temps réel.",
            en: 'The app lets you explore the data and make predictions in real time.',
          },
        },
        {
          type: 'iframe',
          src: 'https://sabio-27.shinyapps.io/projet_r_exam/',
          title: { fr: 'Application R Shiny : réussite académique', en: 'R Shiny app: academic success' },
        },
      ],
    },
  ],
}

const returns: Project = {
  slug: 'analyse-retours-produits',
  sort: 202502,
  title: {
    fr: 'Analyse des retours produits avec Power BI',
    en: 'Product returns analysis with Power BI',
  },
  short: {
    fr: 'Explorer les causes des retours produits selon la catégorie, la géographie et le moyen de paiement, dans un tableau de bord Power BI.',
    en: 'Exploring why products are returned by category, geography and payment method, in a Power BI dashboard.',
  },
  summary: {
    fr: 'Exploration des causes de retours produits selon plusieurs facteurs (catégories, géographie, moyens de paiement) avec Power BI.',
    en: 'Exploring the causes of product returns across several factors (categories, geography, payment methods) with Power BI.',
  },
  context: { fr: 'Module Visualisation', en: 'Data visualisation module' },
  period: { fr: 'Master 1 · 2024–2025', en: "Master's year 1 · 2024–2025" },
  domains: ['viz'],
  tech: ['Power BI'],
  sections: [
    {
      title: { fr: 'Le projet', en: 'The project' },
      blocks: [
        {
          type: 'text',
          body: {
            fr: "Un taux de retour élevé coûte cher et cache souvent des problèmes précis : une catégorie de produits, une région, un mode de paiement. Ce projet croise ces dimensions dans un tableau de bord Power BI pour faire ressortir où et pourquoi les retours se concentrent.",
            en: 'A high return rate is costly and often hides specific problems: a product category, a region, a payment method. This project crosses those dimensions in a Power BI dashboard to show where and why returns concentrate.',
          },
        },
        {
          type: 'lists',
          columns: [
            {
              title: { fr: 'Axes d’analyse', en: 'Angles' },
              items: [
                { fr: 'Catégories de produits', en: 'Product categories' },
                { fr: 'Répartition géographique', en: 'Geography' },
                { fr: 'Moyens de paiement', en: 'Payment methods' },
              ],
            },
          ],
        },
      ],
    },
  ],
}

export const projects: Project[] = [eye, fraud, sentiment, fintech, scoring, academic, returns, ariel].sort(
  (a, b) => b.sort - a.sort,
)

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug)
}
