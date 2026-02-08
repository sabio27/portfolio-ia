# 🚀 GUIDE DE DÉMARRAGE - Portfolio IA v2

## 📦 Ce que vous avez

Un portfolio avec :
- ✅ Design tech/futuriste simplifié (fond sombre + bleu)
- ✅ Menu latéral fixe
- ✅ Page d'accueil fonctionnelle
- ✅ Structure multi-pages prête

---

## ⚡ INSTALLATION ET TEST

### Étape 1 : Ouvrir le terminal

**Windows :**
- Ouvrez le dossier `portfolio-v2`
- Clic droit dans le dossier → "Ouvrir dans le Terminal"

**Mac/Linux :**
- Ouvrez Terminal
- Tapez : `cd chemin/vers/portfolio-v2`

### Étape 2 : Installer les dépendances

```bash
npm install
```

⏱️ Attendez 1-2 minutes...

### Étape 3 : Lancer le site

```bash
npm run dev
```

### Étape 4 : Ouvrir dans le navigateur

Ouvrez : **http://localhost:3000**

---

## ✅ CE QUI FONCTIONNE MAINTENANT

- ✅ Page d'accueil avec présentation
- ✅ Menu latéral avec navigation
- ✅ Design bleu sombre avec dégradés
- ✅ Icônes GitHub, LinkedIn, Email (dans le sidebar)

---

## 📝 PERSONNALISATION FACILE

### Changer votre nom et titre

**Fichier : `components/Sidebar.tsx`**

Lignes 23-26 :
```typescript
<h1>Jean Dupont</h1>          // ← VOTRE NOM
<p>Spécialiste IA</p>          // ← VOTRE TITRE
```

**Fichier : `app/page.tsx`**

Ligne 27 :
```typescript
Jean Dupont                     // ← VOTRE NOM
```

Ligne 32 :
```typescript
Spécialiste Intelligence...    // ← VOTRE TITRE
```

### Changer les liens sociaux

**Fichier : `components/Sidebar.tsx`**

Lignes 49, 58, 67 :
```typescript
href="https://github.com/jeandupont"           // ← VOTRE GITHUB
href="https://linkedin.com/in/jeandupont"      // ← VOTRE LINKEDIN
href="mailto:jean.dupont@email.com"            // ← VOTRE EMAIL
```

### Changer votre description

**Fichier : `app/page.tsx`**

Lignes 36-40 :
```typescript
Étudiant en Master 2 IA...    // ← VOTRE DESCRIPTION
```

### Changer les statistiques

**Fichier : `app/page.tsx`**

Lignes 50-62 : Modifiez les chiffres et textes

---

## 🎨 AJUSTEMENT DES COULEURS

Si vous voulez modifier les teintes de bleu :

**Fichier : `tailwind.config.js`**

Lignes 12-24 : Changez les codes couleur

**Exemples de codes couleur :**
- Bleu clair : `#3b82f6`
- Bleu moyen : `#2563eb`
- Bleu sombre : `#1e3a8f`

Trouvez des couleurs sur : https://tailwindcss.com/docs/customizing-colors

---

## 🎯 VALIDATION DE L'ÉTAPE 1

Avant de continuer, vérifiez :

- [ ] Le site s'affiche à http://localhost:3000
- [ ] Le menu latéral est visible
- [ ] Vous pouvez cliquer sur les liens du menu
- [ ] Le design vous plaît (couleurs, espacement)
- [ ] Vous avez changé au moins votre nom

---

## ❓ QUESTIONS AVANT DE CONTINUER

1. **Le design vous convient-il ?**
   - Trop sombre ? Pas assez ?
   - Les bleus sont bien ?
   - L'espacement est bon ?

2. **Le menu latéral est-il comme vous voulez ?**
   - Taille OK ?
   - Position OK ?

3. **Avez-vous réussi à changer vos informations ?**

---

## 🚀 PROCHAINE ÉTAPE

Une fois que cette première page vous convient, on créera :
- Page "À propos" avec votre parcours détaillé
- Page "Compétences" avec vos compétences techniques

**Testez et dites-moi si tout est OK pour continuer ! ✅**
