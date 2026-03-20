# ARCHITECTURE — Repos Démos Forge Digitale

> **Ce fichier est à déposer à la racine de chaque nouveau repo démo.**
> Il explique à Claude Code le contexte, la structure attendue et les standards à respecter.
> Complète la section "Contexte de ce démo" avant de démarrer.

---

## CONTEXTE GÉNÉRAL

Ces repos font partie de l'écosystème **Forge Digitale** — une activité de création de sites web pour entreprises. Chaque démo est un site fictif ultra-soigné qui showcases les capacités techniques et design.

**Repo portfolio principal :** `https://github.com/contact89/forge-digitale`
**Site portfolio :** `https://forge-digitale.vercel.app`

Chaque démo :
- Est un repo GitHub **séparé** (pas de monorepo)
- A son propre déploiement **Vercel** gratuit
- Est **bilingue FR / EN** avec next-intl
- A un **dark mode** fonctionnel
- Est **mobile-first** et **performant** (Lighthouse > 90)
- Sera **linké depuis le portfolio** principal

---

## CONTEXTE DE CE DÉMO *(à remplir)*

```
Nom du business fictif   : ___________________
Catégorie                : restaurant / café / commerce / pme / photographe / saas
Style visuel             : ___________________
Palette de couleurs      : ___________________
Vibe général             : ___________________
Fonctionnalités clés     : ___________________
Repo GitHub              : demo-_______________
URL Vercel cible         : demo-_______________.vercel.app
```

---

## STACK TECHNIQUE

### Core (identique au portfolio principal)
```
Framework     : Next.js 16+ (App Router, TypeScript strict)
Styling       : Tailwind CSS v4
Animations    : Framer Motion
i18n          : next-intl (locales: ['fr', 'en'], default: 'fr')
Dark mode     : next-themes (defaultTheme: 'system')
Icônes        : lucide-react
Utilitaires   : clsx + tailwind-merge via cn()
Déploiement   : Vercel (auto-deploy sur push main)
```

### Librairies additionnelles selon le type de démo
```
Restaurant / Café     : embla-carousel (galerie food), react-day-picker (réservation)
Photographe           : masonry-css ou react-masonry-css (galerie)
E-commerce / Commerce : @stripe/stripe-js (si paiement démo), react-hook-form
SaaS / PME            : recharts ou chart.js (dashboard/stats démo)
Animations avancées   : GSAP (scroll-triggered premium), lottie-react (micro-animations)
3D / WebGL            : @react-three/fiber + drei (si effet wow justifié)
Parallax              : react-scroll-parallax
Video background      : react-player
```

**Règle** : n'ajouter une librairie que si elle apporte une vraie valeur visuelle pour ce type de client. Pas d'over-engineering.

---

## STRUCTURE DES DOSSIERS

```
src/
├── app/
│   ├── layout.tsx                  ← Root layout — retourne juste children (PAS de html/body)
│   ├── globals.css                 ← Tailwind directives + variables CSS custom
│   └── [locale]/
│       ├── layout.tsx              ← html + body + ThemeProvider + Header + Footer
│       ├── page.tsx                ← Page principale (toutes les sections assemblées)
│       ├── [autres-pages]/         ← Menu, Galerie, Réservation, etc.
│       └── not-found.tsx           ← Page 404 custom
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx              ← Navigation responsive + switch langue + dark mode
│   │   ├── Footer.tsx              ← Footer avec liens légaux
│   │   └── ThemeToggle.tsx         ← Bouton dark/light
│   ├── ui/                         ← Composants réutilisables (Button, Card, Container, Badge…)
│   ├── sections/                   ← Sections de la page (Hero, About, Menu, Gallery, Contact…)
│   └── animations/
│       ├── FadeIn.tsx              ← Wrapper scroll-triggered fade
│       └── SlideUp.tsx             ← Wrapper scroll-triggered slide
│
├── lib/
│   ├── utils.ts                    ← cn() — clsx + tailwind-merge
│   ├── types.ts                    ← Types TypeScript du projet
│   └── constants.ts                ← Config, couleurs, données statiques
│
├── content/                        ← Données du site (menu, galerie, équipe, tarifs…)
│   └── [nom-du-demo].ts
│
└── i18n/
    ├── routing.ts
    ├── request.ts
    └── messages/
        ├── fr.json                 ← Toutes les traductions FR
        └── en.json                 ← Toutes les traductions EN (toujours en sync avec fr.json)
```

---

## RÈGLES ABSOLUES

1. **`npm run build` + `npm run lint` doivent passer** avant tout commit
2. **Root layout** (`app/layout.tsx`) retourne uniquement `children` — le html/body est dans `[locale]/layout.tsx`
3. **Tous les textes** passent par `useTranslations()` — jamais hardcodés FR/EN dans les composants
4. **`fr.json` et `en.json`** toujours mis à jour ensemble
5. **Pas de `console.log`** en production
6. **Images** : utiliser `next/image` avec `width`, `height` et `alt` descriptif — jamais de `<img>`
7. **Couleurs** : définies comme variables CSS dans `globals.css`, référencées via Tailwind — pas de valeurs hardcodées

---

## DESIGN — STANDARDS VISUELS

### Principes
- **Mobile-first** : designer pour 375px en premier, élargir ensuite
- **Whitespace généreux** : l'espace vide est un élément de design
- **Maximum 2 polices** : une display + une corps de texte (via `next/font`)
- **Palette max 4 couleurs** : primaire, secondaire, neutre, accent
- **Animations subtiles** : elles doivent servir le contenu, pas le parasiter
- **`prefers-reduced-motion`** : toujours respecter — désactiver les animations si demandé

### Ce qui est attendu sur chaque démo

```
✅ Hero section avec animation d'entrée forte
✅ Scroll-triggered animations (FadeIn / SlideUp)
✅ Hover states soignés sur tous les éléments interactifs
✅ Transitions de couleur fluides (transition-colors, transition-all)
✅ Responsive parfait : 375px → 768px → 1024px → 1440px → 1920px
✅ Dark mode visuel cohérent sur toutes les sections
✅ Loading states sur les actions asynchrones
✅ Images optimisées WebP + lazy loading natif Next.js
```

### Ce qui peut être poussé selon le type

```
🚀 Parallax subtil sur le hero (react-scroll-parallax)
🚀 Galerie avec lightbox (yet-another-react-lightbox)
🚀 Curseur personnalisé (sur les démos créatives : photo, SaaS)
🚀 Transitions de page (Framer Motion AnimatePresence)
🚀 Effet de texte animé (Framer Motion variants stagger)
🚀 Background video ou gradient animé sur le hero
🚀 Glassmorphism / noise texture (démos SaaS / startup)
🚀 Grille masonry pour les galeries photo
🚀 Menu de navigation avec mega-menu ou sidebar mobile stylée
🚀 Micro-animations sur les boutons (scale, glow, ripple)
```

---

## SEO & PERFORMANCE

Obligatoire avant déploiement :

```tsx
// Dans chaque page.tsx
export async function generateMetadata({ params }) {
  return {
    title: "Nom du Business — Catégorie | Ville",
    description: "Description courte orientée client, 150-160 caractères max.",
    openGraph: {
      title: "...",
      description: "...",
      images: ["/og-image.jpg"],  // 1200x630px
    },
  };
}
```

Fichiers à créer :
- `public/robots.txt` — autoriser tout, bloquer `/_next/` et `/api/`
- `src/app/sitemap.ts` — générer toutes les routes FR + EN
- `public/favicon.ico` + `public/icon.png` (512×512)
- `public/og-image.jpg` (1200×630px)

---

## CHECKLIST AVANT DÉPLOIEMENT

### Code
- [ ] `npm run build` passe sans erreur
- [ ] `npm run lint` passe sans erreur
- [ ] Toutes les pages existent en `/fr/` et `/en/`
- [ ] Aucun `console.log` laissé
- [ ] Toutes les images ont un `alt` descriptif

### Design
- [ ] Responsive testé à 375px, 768px, 1280px
- [ ] Dark mode cohérent sur toutes les pages
- [ ] Animations fonctionnelles et non-saccadées
- [ ] Favicon affiché (pas le favicon Next.js par défaut)
- [ ] Page 404 custom

### SEO
- [ ] `generateMetadata` sur chaque page
- [ ] `sitemap.xml` généré et accessible
- [ ] `robots.txt` présent
- [ ] OG image définie (pour les partages réseaux sociaux)

### Contenu
- [ ] Aucun texte placeholder ("Lorem ipsum", "[Votre nom]", "TODO")
- [ ] Toutes les URLs de liens sont valides (pas de `#` fake)
- [ ] Textes en FR et EN complets

---

## DÉPLOIEMENT

```bash
# 1. Créer le repo GitHub
gh repo create demo-NOM-DU-DEMO --public --source=. --push

# 2. Déployer sur Vercel
# vercel.com → Import Project → sélectionner le repo
# Framework : Next.js (auto-détecté)
# Deploy

# 3. Mettre à jour l'URL dans le portfolio principal
# Fichier : src/content/projects.ts
# Champ : url: "https://demo-NOM-DU-DEMO.vercel.app"
# Puis git add . && git commit -m "feat: add demo URL" && git push
```

---

## COMMANDES UTILES

```bash
npm run dev      # Dev local → localhost:3000
npm run build    # Build prod — vérifier avant chaque commit
npm run lint     # ESLint

# Scaffolding d'un nouveau démo depuis zéro
npx create-next-app@latest demo-NOM --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm
cd demo-NOM
npm install framer-motion next-themes next-intl lucide-react clsx tailwind-merge
```

---

## RÉFÉRENCE — Portfolio principal

Le portfolio (`forge-digitale`) contient les composants de base réutilisables :
- `src/components/animations/FadeIn.tsx` — à copier dans chaque démo
- `src/components/animations/SlideUp.tsx` — à copier dans chaque démo
- `src/lib/utils.ts` — fonction `cn()` — à copier dans chaque démo
- `src/i18n/routing.ts` + `request.ts` + `middleware.ts` — à copier et adapter

---

> Forge Digitale — *Ship fast, ship beautiful.*
