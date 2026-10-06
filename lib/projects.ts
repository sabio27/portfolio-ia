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
    fr: 'Classification de maladies oculaires sur images de fond d’œil',
    en: 'Eye disease classification from fundus images',
  },
  short: {
    fr: "10 classes (9 maladies + œil sain) sur 5 335 images très déséquilibrées. Modèles YOLO fine-tunés : 77,5 % d'accuracy sur le test, la bonne classe dans le top 5 pour 99,6 % des images.",
    en: '10 classes (9 diseases + healthy) on 5,335 heavily imbalanced images. Fine-tuned YOLO models: 77.5% test accuracy, with the right class in the top 5 for 99.6% of images.',
  },
  summary: {
    fr: 'Classer des images de fond d’œil en 10 classes, avec des maladies représentées par quelques dizaines d’images seulement.',
    en: 'Classifying fundus images into 10 classes, some of them diseases with only a few dozen images.',
  },
  context: { fr: 'Module Deep Learning', en: 'Deep Learning module' },
  period: { fr: 'Master 2 · janvier 2026', en: "Master's year 2 · January 2026" },
  meta: [
    { fr: 'Projet en binôme', en: 'Pair project' },
    { fr: 'Encadré par Dr. Ayikpa', en: 'Supervised by Dr. Ayikpa' },
  ],
  domains: ['vision', 'ml'],
  tech: ['Python', 'PyTorch', 'YOLO11', 'YOLOv8', 'OpenCV', 'Albumentations', 'scikit-learn'],
  sections: [
    {
      title: { fr: 'Contexte', en: 'Context' },
      blocks: [
        {
          type: 'text',
          body: {
            fr: "Beaucoup de maladies de l'œil passent inaperçues au début, et quand on les découvre, une partie de la vue est déjà perdue. Là où les ophtalmologistes manquent, un outil qui trie les images de fond d'œil pourrait aider à repérer plus tôt les cas à examiner.",
            en: 'Many eye diseases go unnoticed at first, and by the time they are found, some sight is already lost. Where ophthalmologists are scarce, a tool that sorts fundus images could help flag the cases to examine sooner.',
          },
        },
        {
          type: 'question',
          body: {
            fr: "Peut-on reconnaître 9 maladies de l'œil à partir d'une photo de la rétine, quand la classe la plus fournie compte 89 fois plus d'images que la plus rare ?",
            en: 'Can 9 eye diseases be recognised from a photo of the retina when the largest class has 89 times more images than the rarest?',
          },
        },
      ],
    },
    {
      title: { fr: 'Données et préparation', en: 'Data and preparation' },
      blocks: [
        {
          type: 'stats',
          items: [
            { value: '5 335', label: { fr: 'images de fond d’œil', en: 'fundus images' }, note: { fr: 'deux hôpitaux du Bangladesh', en: 'two hospitals in Bangladesh' } },
            { value: '10', label: { fr: 'classes', en: 'classes' }, note: { fr: '9 maladies + œil sain', en: '9 diseases + healthy' } },
            { value: '17', label: { fr: 'images de ptérygion', en: 'pterygium images' }, note: { fr: 'contre 1 509 de rétinopathie diabétique', en: 'vs 1,509 of diabetic retinopathy' } },
          ],
        },
        {
          type: 'steps',
          items: [
            { title: { fr: 'Découpage', en: 'Split' }, body: { fr: '70 / 15 / 15 par classe (train, validation, test), fait sur les images d’origine avant tout le reste.', en: '70 / 15 / 15 per class (train, validation, test), done on the original images before anything else.' } },
            { title: { fr: 'Prétraitement', en: 'Preprocessing' }, body: { fr: 'Redimensionnement en 640×640 et CLAHE sur la luminance, pour égaliser des images très inégalement éclairées.', en: 'Resized to 640×640, then CLAHE on the luminance to even out very uneven lighting.' } },
            { title: { fr: 'Augmentation', en: 'Augmentation' }, body: { fr: 'Sur le train seulement, et d’autant plus forte que la classe est rare : ×50 pour le ptérygion, ×10 à ×12 pour d’autres, rien pour les trois plus grandes. Le train passe de 3 729 à 8 262 images.', en: 'On the training set only, stronger for rarer classes: ×50 for pterygium, ×10 to ×12 for others, none for the three largest. Training goes from 3,729 to 8,262 images.' } },
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
              term: 'YOLOv8s-cls / YOLO11s-cls',
              desc: {
                fr: 'Modèles de classification pré-entraînés, fine-tunés avec les réglages par défaut (images 224×224).',
                en: 'Pre-trained classification models, fine-tuned with default settings (224×224 images).',
              },
            },
            {
              term: 'YOLO-EyeNet',
              desc: {
                fr: 'YOLO11s-cls entraîné plus longtemps (jusqu’à 80 époques), avec un learning rate plus bas, AdamW et du dropout.',
                en: 'YOLO11s-cls trained longer (up to 80 epochs), with a lower learning rate, AdamW and dropout.',
              },
            },
            {
              term: { fr: 'Auto-encodeur convolutionnel', en: 'Convolutional autoencoder' },
              desc: {
                fr: "Entraîné sur les 4 classes les plus fournies, avec une perte MSE + SSIM et un petit terme de classification sur l'espace latent (512 dimensions).",
                en: 'Trained on the 4 largest classes, with an MSE + SSIM loss and a small classification term on the 512-dimension latent space.',
              },
            },
            {
              term: { fr: 'Fusion', en: 'Fusion' },
              desc: {
                fr: "Un MLP sur les représentations de YOLO-EyeNet et de l'auto-encodeur mises bout à bout : entraîné sur le train, époque choisie sur la validation.",
                en: 'An MLP on the YOLO-EyeNet and autoencoder representations put side by side: trained on the training set, epoch chosen on validation.',
              },
            },
          ],
        },
      ],
    },
    {
      title: { fr: 'Résultats', en: 'Results' },
      blocks: [
        {
          type: 'stats',
          items: [
            { value: '77,5 %', label: { fr: 'accuracy sur le test', en: 'test accuracy' }, note: { fr: 'YOLO-EyeNet, 810 images', en: 'YOLO-EyeNet, 810 images' } },
            { value: '99,6 %', label: { fr: 'top-5', en: 'top-5' } },
            { value: '0,77', label: { fr: 'F1 macro', en: 'macro F1' } },
          ],
        },
        {
          type: 'table',
          head: [{ fr: 'Modèle', en: 'Model' }, 'Accuracy'],
          rows: [
            ['YOLOv8s-cls', '77,8 %'],
            ['YOLO11s-cls', '77,3 %'],
            ['YOLO-EyeNet', '77,5 %'],
            [{ fr: 'Fusion YOLO-EyeNet + auto-encodeur', en: 'YOLO-EyeNet + autoencoder fusion' }, '72,5 %'],
          ],
          highlight: 2,
          note: {
            fr: "Les trois YOLO se tiennent à moins d'un point. Ajouter l'auto-encodeur n'aide pas : ses représentations seules ne donnent que 52 %.",
            en: 'The three YOLO models are within a point of each other. Adding the autoencoder does not help: its representations alone only reach 52%.',
          },
        },
        {
          type: 'table',
          head: [{ fr: 'Classe', en: 'Class' }, { fr: 'F1 (YOLO-EyeNet)', en: 'F1 (YOLO-EyeNet)' }],
          rows: [
            [{ fr: 'Ptérygion (4 images de test)', en: 'Pterygium (4 test images)' }, '1.00'],
            [{ fr: 'Rétinopathie diabétique', en: 'Diabetic retinopathy' }, '0.92'],
            [{ fr: 'Décollement de rétine', en: 'Retinal detachment' }, '0.91'],
            [{ fr: 'Rétinite pigmentaire', en: 'Retinitis pigmentosa' }, '0.91'],
            [{ fr: 'Œil sain', en: 'Healthy' }, '0.77'],
            [{ fr: 'Cicatrice maculaire', en: 'Macular scar' }, '0.75'],
            [{ fr: 'Œdème papillaire', en: 'Disc edema' }, '0.75'],
            [{ fr: 'Glaucome', en: 'Glaucoma' }, '0.70'],
            [{ fr: 'Myopie', en: 'Myopia' }, '0.54'],
            [{ fr: 'Choriorétinopathie séreuse centrale', en: 'Central serous chorioretinopathy' }, '0.47'],
          ],
          note: {
            fr: "La plupart des erreurs mélangent glaucome, myopie et œil sain, trois cas qui se jugent surtout sur l'aspect du disque optique.",
            en: 'Most errors mix up glaucoma, myopia and healthy eyes, three cases judged mostly on the look of the optic disc.',
          },
        },
        {
          type: 'text',
          body: {
            fr: "L'auto-encodeur, qui n'a vu que 4 classes, reconstruit très mal les images de ptérygion (erreur moyenne 0,015 contre environ 0,002) : le ptérygion touche la surface de l'œil, pas la rétine. Pour les autres maladies qu'il n'a pas vues, l'écart est faible, donc l'erreur de reconstruction seule ne suffit pas à signaler un cas rare.",
            en: 'The autoencoder, which only saw 4 classes, reconstructs pterygium images very poorly (mean error 0.015 vs about 0.002): pterygium affects the surface of the eye, not the retina. For the other unseen diseases the gap is small, so reconstruction error alone is not enough to flag a rare case.',
          },
        },
      ],
    },
    {
      title: { fr: 'Pistes', en: 'Next steps' },
      blocks: [
        {
          type: 'lists',
          columns: [
            {
              title: { fr: 'Pour aller plus loin', en: 'Going further' },
              items: [
                { fr: 'Entraîner en 384 ou 512 px : à 224 px, les détails du disque optique se perdent', en: 'Train at 384 or 512 px: at 224 px, optic disc details get lost' },
                { fr: 'Comparer avec un EfficientNet ou un ConvNeXt pré-entraîné', en: 'Compare with a pre-trained EfficientNet or ConvNeXt' },
                { fr: 'Pondérer les classes dans la perte', en: 'Weight the classes in the loss' },
                { fr: 'Grad-CAM pour voir où regarde le modèle', en: 'Grad-CAM to see where the model looks' },
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
    fr: 'Détection de fraude Mobile Money par agents parallèles',
    en: 'Mobile Money fraud detection with parallel agents',
  },
  short: {
    fr: 'Simulation de transactions Mobile Money : des fraudeurs qui apprennent (Q-Learning) face à des détecteurs qui tournent en parallèle. 98,4 % des fraudes détectées sans bloquer un seul client, ×4,3 plus rapide sur 6 cœurs.',
    en: 'A Mobile Money transaction simulation: fraudsters that learn (Q-Learning) against detectors running in parallel. 98.4% of frauds caught without blocking a single client, 4.3× faster on 6 cores.',
  },
  summary: {
    fr: 'Simuler un flux de paiements mobiles en FCFA, avec des fraudeurs qui changent de technique quand ils se font prendre, et le répartir entre plusieurs processus détecteurs.',
    en: 'Simulating a stream of mobile payments in FCFA, with fraudsters that change technique when caught, and splitting it across several detector processes.',
  },
  context: { fr: 'Architecture et algorithmes parallèles', en: 'Parallel architectures & algorithms' },
  period: { fr: 'Master 2 · 2025–2026', en: "Master's year 2 · 2025–2026" },
  domains: ['hpc', 'ml'],
  tech: ['Python', 'multiprocessing', 'Q-Learning', 'SQLite', 'Streamlit', 'Docker'],
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
                { fr: 'Une grande partie des paiements en Côte d’Ivoire passe par le Mobile Money', en: 'A large share of payments in Côte d’Ivoire goes through Mobile Money' },
                { fr: 'Il faut décider en temps réel, sur de gros volumes', en: 'Decisions must be made in real time, on large volumes' },
                { fr: 'Les fraudeurs s’adaptent : une technique bloquée est vite remplacée', en: 'Fraudsters adapt: a blocked technique is quickly replaced' },
                { fr: 'Bloquer un vrai client coûte aussi cher qu’une fraude ratée', en: 'Blocking a real client costs as much as a missed fraud' },
              ],
            },
            {
              title: { fr: 'Ce que fait la simulation', en: 'What the simulation does' },
              items: [
                { fr: 'Clients normaux et fraudeurs génèrent chaque tour un flux mélangé', en: 'Normal clients and fraudsters produce a mixed stream each round' },
                { fr: 'Le flux est découpé entre plusieurs processus détecteurs', en: 'The stream is split between several detector processes' },
                { fr: 'Les fraudeurs apprennent de leurs échecs (Q-Learning)', en: 'Fraudsters learn from their failures (Q-Learning)' },
                { fr: 'SQLite garde l’historique d’une simulation à l’autre', en: 'SQLite keeps the history from one simulation to the next' },
              ],
            },
          ],
        },
        {
          type: 'stats',
          items: [
            { value: '98,4 %', label: { fr: 'des fraudes détectées', en: 'of frauds caught' }, note: { fr: '49 319 sur 50 134', en: '49,319 of 50,134' } },
            { value: '0', label: { fr: 'client bloqué à tort', en: 'clients wrongly blocked' } },
            { value: '×4,3', label: { fr: 'speedup sur 6 cœurs', en: 'speedup on 6 cores' } },
            { value: '10', label: { fr: 'stratégies de fraude', en: 'fraud strategies' } },
          ],
        },
      ],
    },
    {
      title: { fr: 'Les agents', en: 'The agents' },
      blocks: [
        {
          type: 'defs',
          items: [
            { term: { fr: 'Client', en: 'Client' }, desc: { fr: 'Fait des paiements ordinaires, avec ses habitudes de montant, d’heure et de ville.', en: 'Makes ordinary payments, with his own habits of amount, time and city.' } },
            { term: { fr: 'Fraudeur', en: 'Fraudster' }, desc: { fr: 'Choisit parmi 10 stratégies et privilégie celles qui passent (Q-Learning, 20 % d’exploration).', en: 'Picks among 10 strategies and favours the ones that get through (Q-Learning, 20% exploration).' } },
            { term: { fr: 'Détecteur', en: 'Detector' }, desc: { fr: 'Donne à chaque transaction un score de risque de 0 à 100 à partir de 10 règles. Un détecteur par processus.', en: 'Gives each transaction a risk score from 0 to 100 based on 10 rules. One detector per process.' } },
            { term: { fr: 'Superviseur', en: 'Supervisor' }, desc: { fr: 'Rassemble les décisions, calcule les indicateurs et fait apprendre les fraudeurs.', en: 'Collects the decisions, computes the metrics and lets the fraudsters learn.' } },
          ],
        },
        {
          type: 'text',
          body: {
            fr: "Chaque processus travaille sur sa part des transactions et seul le processus principal regroupe les résultats (lecture concurrente, écriture exclusive, le modèle CREW vu en cours). Le pool de processus est créé une fois pour toute la simulation : le relancer à chaque tour coûterait plus cher que l'analyse.",
            en: 'Each process works on its share of the transactions and only the main process gathers the results (concurrent read, exclusive write: the CREW model from the course). The process pool is created once for the whole simulation; restarting it every round would cost more than the analysis.',
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
            { term: 'montant_explosif', desc: { fr: 'Un seul virement énorme', en: 'One huge transfer' } },
            { term: 'fragmentation', desc: { fr: 'Un gros montant découpé en petits paiements', en: 'A large amount split into small payments' } },
            { term: 'usurpation', desc: { fr: "Copie du profil d'un vrai client", en: "Copies a real client's profile" } },
            { term: 'rapidite', desc: { fr: 'Rafale de transactions', en: 'Burst of transactions' } },
            { term: 'localisation', desc: { fr: 'Transaction depuis une ville inhabituelle', en: 'Transaction from an unusual city' } },
            { term: 'compte_dormant', desc: { fr: 'Compte inactif qui se réveille', en: 'Dormant account waking up' } },
            { term: 'micro_transactions', desc: { fr: 'Beaucoup de tout petits prélèvements', en: 'Many tiny debits' } },
            { term: 'horaires_suspects', desc: { fr: 'Transferts entre 0 h et 4 h', en: 'Transfers between midnight and 4 a.m.' } },
            { term: 'round_tripping', desc: { fr: "Le même argent qui tourne en boucle", en: 'The same money going round in a loop' } },
            { term: 'mule_account', desc: { fr: 'Compte tiers servant de relais', en: 'Third-party account used as a relay' } },
          ],
        },
        { type: 'code', body: 'Q(s) ← Q(s) + α · (reward − Q(s))     α = 0.1   ε = 0.2' },
        {
          type: 'text',
          body: {
            fr: "80 % du temps, le fraudeur reprend sa meilleure stratégie ; 20 % du temps, il en tente une au hasard. En fin de simulation, presque tous les scores Q sont négatifs. Les rares positifs portent sur la ville inhabituelle et les comptes mules, justement les deux règles les plus faibles : les fraudeurs les ont trouvées seuls.",
            en: 'Eighty percent of the time the fraudster reuses its best strategy; the rest of the time it tries one at random. By the end, almost every Q-score is negative. The few positive ones are on the unusual city and mule accounts, precisely the two weakest rules: the fraudsters found them on their own.',
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
            fr: 'Une transaction est bloquée à partir de 30 points.',
            en: 'A transaction is blocked from 30 points.',
          },
        },
        {
          type: 'text',
          body: {
            fr: "J'ai d'abord essayé de remplacer les règles par du machine learning, dont un XGBoost entraîné sur 50 000 transactions simulées. Hors simulation il semblait excellent ; face à des fraudeurs qui s'adaptent, il laissait passer bien plus de fraudes que les règles. J'ai gardé les règles.",
            en: 'I first tried replacing the rules with machine learning, including an XGBoost model trained on 50,000 simulated transactions. Offline it looked excellent; against fraudsters that adapt, it let far more fraud through than the rules. I kept the rules.',
          },
        },
      ],
    },
    {
      title: { fr: 'Résultats', en: 'Results' },
      blocks: [
        {
          type: 'table',
          head: [{ fr: 'Stratégie', en: 'Strategy' }, { fr: 'Détectée', en: 'Caught' }],
          rows: [
            [{ fr: 'Fragmentation, rafales, micro-transactions, horaires, montant explosif, round tripping, usurpation', en: 'Splitting, bursts, micro-transactions, night transfers, huge transfer, round tripping, identity theft' }, '100 %'],
            [{ fr: 'Compte dormant', en: 'Dormant account' }, '98,3 %'],
            [{ fr: 'Compte mule', en: 'Mule account' }, '95,6 %'],
            [{ fr: 'Ville inhabituelle', en: 'Unusual city' }, '90,2 %'],
          ],
          note: {
            fr: '25 simulations, 166 226 transactions. Les règles sont calibrées sur ce simulateur : ces chiffres ne valent pas pour de vraies données bancaires.',
            en: '25 simulations, 166,226 transactions. The rules are calibrated on this simulator, so these numbers do not carry over to real banking data.',
          },
        },
        {
          type: 'table',
          head: [{ fr: 'Processus', en: 'Processes' }, { fr: 'Séquentiel', en: 'Sequential' }, { fr: 'Parallèle', en: 'Parallel' }, 'Speedup', { fr: 'Efficacité', en: 'Efficiency' }],
          rows: [
            ['4', '375 s', '121 s', '×3,1', '77 %'],
            ['6', '374 s', '86 s', '×4,3', '72 %'],
          ],
          note: {
            fr: "Mesuré sous Windows, 6 cœurs physiques. D'après la loi d'Amdahl, 8 à 10 % du travail reste séquentiel (découpage, envoi, collecte), ce qui plafonne le speedup vers ×10 à ×13.",
            en: "Measured on Windows, 6 physical cores. By Amdahl's law, 8 to 10% of the work stays sequential (splitting, sending, collecting), which caps the speedup around 10–13×.",
          },
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
    fr: '137 000 tweets classés en positifs ou négatifs, avec rééquilibrage des classes et comparaison de quatre modèles. 91,5 % sur le test, servi par une API Flask.',
    en: '137,000 tweets classified as positive or negative, with class rebalancing and four models compared. 91.5% on the test set, served through a Flask API.',
  },
  summary: {
    fr: 'Classer le ton des tweets qui parlent de KFC, McDonald’s et Burger King, puis comparer les trois marques.',
    en: 'Classifying the tone of tweets about KFC, McDonald’s and Burger King, then comparing the three brands.',
  },
  context: { fr: 'Module NLP', en: 'NLP module' },
  period: { fr: 'Master 2 · novembre 2025', en: "Master's year 2 · November 2025" },
  meta: [{ fr: 'Encadré par Dr. Soma', en: 'Supervised by Dr. Soma' }],
  domains: ['nlp', 'ml'],
  tech: ['Python', 'spaCy', 'scikit-learn', 'imbalanced-learn', 'LightGBM', 'Flask', 'Gradio'],
  sections: [
    {
      title: { fr: 'Contexte', en: 'Context' },
      blocks: [
        {
          type: 'text',
          body: {
            fr: "Les clients des fast-foods disent sur Twitter ce qu'ils pensent, en temps réel et en grand nombre. Le but : classer automatiquement ces tweets en positifs ou négatifs, puis comparer les trois marques.",
            en: 'Fast-food customers say what they think on Twitter, in real time and in large numbers. The goal: automatically classify these tweets as positive or negative, then compare the three brands.',
          },
        },
        {
          type: 'stats',
          items: [
            { value: '137 469', label: { fr: 'tweets (hors neutres)', en: 'tweets (neutral removed)' } },
            { value: '3', label: { fr: 'marques', en: 'brands' }, note: { fr: "McDonald's 65 %, KFC 23 %, BK 12 %", en: "McDonald's 65%, KFC 23%, BK 12%" } },
            { value: '91,5 %', label: { fr: 'accuracy sur le test', en: 'test accuracy' } },
          ],
        },
        {
          type: 'text',
          body: {
            fr: "Les étiquettes du jeu de données viennent d'un score automatique de polarité, proche de TextBlob, et non d'une annotation humaine. Le modèle apprend donc à reproduire ce score.",
            en: 'The dataset labels come from an automatic polarity score close to TextBlob, not from human annotation, so the model learns to reproduce that score.',
          },
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
            { title: { fr: 'Lemmatisation', en: 'Lemmatisation' }, body: { fr: 'spaCy (en_core_web_sm) pour ramener chaque mot à sa forme de base.', en: 'spaCy (en_core_web_sm) to bring each word back to its base form.' } },
            { title: { fr: 'Étiquettes', en: 'Labels' }, body: { fr: 'Tweets neutres écartés, puis 0 pour négatif et 1 pour positif.', en: 'Neutral tweets removed, then 0 for negative and 1 for positive.' } },
            { title: 'TF-IDF', body: { fr: 'Unigrammes et bigrammes, appris sur le train uniquement.', en: 'Unigrams and bigrams, fitted on the training set only.' } },
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
            fr: "Il y a 64 % de tweets positifs pour 36 % de négatifs. J'ai comparé deux façons de rééquilibrer le train : le sur-échantillonnage (SMOTE) et le sous-échantillonnage aléatoire (RUS).",
            en: 'There are 64% positive tweets and 36% negative. I compared two ways of rebalancing the training set: oversampling (SMOTE) and random undersampling (RUS).',
          },
        },
        {
          type: 'table',
          head: [{ fr: 'Modèle', en: 'Model' }, 'Accuracy', 'F1', { fr: 'Rappel négatifs', en: 'Recall on negatives' }],
          rows: [
            [{ fr: 'Régression logistique + SMOTE', en: 'Logistic regression + SMOTE' }, '92,0 %', '0.938', '87,2 %'],
            [{ fr: 'Régression logistique + RUS', en: 'Logistic regression + RUS' }, '91,5 %', '0.932', '92,0 %'],
            ['LightGBM + SMOTE', '91,3 %', '0.933', '85,5 %'],
            ['Naive Bayes + SMOTE', '88,0 %', '0.907', '82,9 %'],
          ],
          highlight: 1,
          note: {
            fr: "Modèle retenu : régression logistique + RUS. Un demi-point d'accuracy en moins qu'avec SMOTE, mais 92 % des tweets négatifs reconnus au lieu de 87 %.",
            en: 'Chosen model: logistic regression + RUS. Half a point of accuracy less than with SMOTE, but 92% of negative tweets caught instead of 87%.',
          },
        },
      ],
    },
    {
      title: { fr: 'Par marque', en: 'Brand by brand' },
      blocks: [
        {
          type: 'table',
          head: [{ fr: 'Marque', en: 'Brand' }, { fr: 'Tweets négatifs', en: 'Negative tweets' }, { fr: 'Accuracy du modèle (test)', en: 'Model accuracy (test)' }],
          rows: [
            ["McDonald's", '32,5 %', '92,1 %'],
            ['KFC', '42,4 %', '90,5 %'],
            ['Burger King', '42,0 %', '89,9 %'],
          ],
          note: {
            fr: "McDonald's a nettement moins de tweets négatifs en proportion que KFC et Burger King. Une partie de l'écart vient sans doute du « Happy Meal pour adultes », qui revient des milliers de fois dans les tweets enthousiastes.",
            en: "McDonald's has clearly fewer negative tweets in proportion than KFC and Burger King. Part of the gap probably comes from the adult Happy Meal, which shows up thousands of times in enthusiastic tweets.",
          },
        },
        {
          type: 'text',
          body: {
            fr: 'Le modèle est servi par une API Flask et une petite interface Gradio : on colle des tweets ou on envoie un CSV, il renvoie le sentiment de chacun.',
            en: 'The model is served through a Flask API and a small Gradio interface: paste tweets or upload a CSV, and it returns the sentiment of each one.',
          },
        },
      ],
    },
  ],
}

const ariel: Project = {
  slug: 'defi-ia-ariel-2025',
  sort: 202601,
  featured: true,
  award: { fr: '3e national · 12e international', en: '3rd nationally · 12th internationally' },
  title: {
    fr: 'Défi IA ESA-Ariel 2025 : eau et nuages dans les atmosphères d’exoplanètes',
    en: 'ESA-Ariel 2025 AI Challenge: water and clouds in exoplanet atmospheres',
  },
  short: {
    fr: 'Dire si l’atmosphère d’une exoplanète contient de l’eau et des nuages à partir de son spectre simulé. Score de 0,974 : 3e place nationale, 12e internationale.',
    en: 'Telling whether an exoplanet’s atmosphere contains water and clouds from its simulated spectrum. Score of 0.974: 3rd nationally, 12th internationally.',
  },
  summary: {
    fr: 'Détecter l’eau et les nuages dans des spectres d’exoplanètes simulés pour la mission ARIEL de l’Agence spatiale européenne.',
    en: 'Detecting water and clouds in simulated exoplanet spectra for the European Space Agency’s ARIEL mission.',
  },
  context: { fr: 'Compétition IA · mission ARIEL (ESA)', en: 'AI competition · ARIEL mission (ESA)' },
  period: { fr: 'Octobre 2025 – janvier 2026', en: 'October 2025 – January 2026' },
  meta: [{ fr: 'En équipe (UFHB LightWaves)', en: 'Team entry (UFHB LightWaves)' }],
  domains: ['ml'],
  tech: ['Python', 'NumPy', 'SciPy', 'scikit-learn', 'LightGBM', 'Feature engineering'],
  sections: [
    {
      title: { fr: 'Contexte scientifique', en: 'Scientific context' },
      blocks: [
        {
          type: 'text',
          body: {
            fr: "ARIEL est une mission de l'ESA prévue pour 2029, qui observera l'atmosphère d'environ 1 000 exoplanètes. Quand une planète passe devant son étoile, une partie de la lumière traverse son atmosphère ; la part de lumière bloquée à chaque longueur d'onde dépend de ce que contient cette atmosphère.",
            en: 'ARIEL is an ESA mission planned for 2029 that will observe the atmospheres of about 1,000 exoplanets. When a planet passes in front of its star, part of the light goes through its atmosphere; how much is blocked at each wavelength depends on what that atmosphere contains.',
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
            fr: "Pour chaque planète, on dispose d'un spectre simulé et bruité de 52 points (0,5 à 7,8 µm) et de quelques paramètres du système (masse et température de l'étoile, masse de la planète, taille de l'orbite). Il faut répondre à deux questions : y a-t-il de l'eau, y a-t-il des nuages ? 3 000 planètes pour apprendre, 1 032 à prédire.",
            en: 'For each planet there is a simulated, noisy 52-point spectrum (0.5 to 7.8 µm) and a few system parameters (star mass and temperature, planet mass, orbit size). Two questions to answer: is there water, are there clouds? 3,000 planets to learn from, 1,032 to predict.',
          },
        },
        {
          type: 'stats',
          items: [
            { value: '0,974', label: { fr: 'score au classement', en: 'leaderboard score' } },
            { value: '97,8 %', label: { fr: 'accuracy en validation croisée', en: 'cross-validation accuracy' } },
            { value: '3e', label: { fr: 'place nationale', en: 'place nationally' } },
            { value: '12e', label: { fr: 'place internationale', en: 'place internationally' } },
          ],
        },
      ],
    },
    {
      title: { fr: 'Notre approche', en: 'Our approach' },
      blocks: [
        {
          type: 'defs',
          items: [
            { term: { fr: 'Variables', en: 'Features' }, desc: { fr: "80 par planète : le spectre normalisé planète par planète, 17 statistiques sur le spectre (pente, courbure, écart entre les instruments FGS et AIRS, profondeur dans la bande de l'eau…) et 11 grandeurs physiques (température d'équilibre, gravité, hauteur d'échelle…).", en: '80 per planet: the spectrum normalised planet by planet, 17 statistics on the spectrum (slope, curvature, gap between the FGS and AIRS instruments, depth in the water band…) and 11 physical quantities (equilibrium temperature, gravity, scale height…).' } },
            { term: { fr: 'Modèles', en: 'Models' }, desc: { fr: 'Un GradientBoosting et un LightGBM pour chaque question, dont on moyenne les probabilités.', en: 'A GradientBoosting and a LightGBM model for each question, with their probabilities averaged.' } },
            { term: 'Validation', desc: { fr: 'Validation croisée en 5 plis, stratifiée sur la combinaison eau/nuages. Le seuil de décision de chaque question est choisi sur les prédictions hors pli.', en: '5-fold cross-validation stratified on the water/clouds combination. The decision threshold for each question is chosen on the out-of-fold predictions.' } },
          ],
        },
        {
          type: 'table',
          head: [{ fr: 'Question', en: 'Question' }, { fr: 'Seuil', en: 'Threshold' }, { fr: 'Accuracy (validation croisée)', en: 'Accuracy (cross-validation)' }],
          rows: [
            [{ fr: 'Eau', en: 'Water' }, '0.37', '98,1 %'],
            [{ fr: 'Nuages', en: 'Clouds' }, '0.47', '97,5 %'],
          ],
          note: {
            fr: "Les nuages sont un peu plus durs à détecter : une couche épaisse aplatit le spectre et peut masquer aussi la signature de l'eau.",
            en: 'Clouds are a little harder: a thick layer flattens the spectrum and can hide the water signature too.',
          },
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
    fr: 'Prédire si un passager est satisfait à partir de ses notes sur les services, et choisir le seuil de décision selon l’usage.',
    en: 'Predicting whether a passenger is satisfied from their ratings of the services, and choosing the decision threshold for the intended use.',
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
            fr: "Un questionnaire de satisfaction rempli par plus de 100 000 passagers : profil, notes de 0 à 5 sur 14 services (wifi, confort du siège, embarquement…) et retards. Le but : repérer à l'avance les passagers susceptibles d'être mécontents.",
            en: 'A satisfaction survey filled in by over 100,000 passengers: profile, 0–5 ratings of 14 services (wifi, seat comfort, boarding…) and delays. The goal: spot ahead of time the passengers likely to be unhappy.',
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
                fr: "100 arbres, critère entropie, profondeur 20. Il saisit les interactions entre services qu'un modèle linéaire ne voit pas : ses scores se séparent presque en deux groupes, mécontents près de 0, satisfaits près de 1.",
                en: '100 trees, entropy criterion, depth 20. It picks up interactions between services that a linear model misses: its scores split almost into two groups, unhappy near 0, satisfied near 1.',
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

export const projects: Project[] = [eye, fraud, sentiment, scoring, academic, returns, ariel].sort(
  (a, b) => b.sort - a.sort,
)

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug)
}
