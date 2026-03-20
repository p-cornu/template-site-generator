# ARCHITECTURE — Repos Démos Forge Digitale

> **Ce fichier est lu automatiquement par Claude Code à chaque session.**
> Il explique le contexte, la structure, les standards et ce qui est déjà en place.

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
- Est **purement visuel** — pas de backend, pas d'API, pas de paiement, pas de réservation réelle
- Le but est d'**impressionner visuellement** et de montrer nos capacités techniques

---

## CONTEXTE DE CE DÉMO *(à remplir par Claude Code ou manuellement)*

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

## CE QUI EST DÉJÀ EN PLACE (briques génériques)

Les fichiers suivants sont **déjà copiés** depuis `demo-restaurant-la-table-doree` et sont **identiques dans chaque repo**. Ne pas les recréer, ne pas les modifier (sauf package.json pour le nom) :

### Infrastructure (ne pas toucher)
```
.gitignore
postcss.config.mjs
eslint.config.mjs
tsconfig.json
next.config.ts                        ← plugin next-intl + config images Unsplash
src/proxy.ts                          ← middleware i18n (FR/EN routing)
src/app/layout.tsx                    ← root layout (retourne juste children, PAS de html/body)
package.json                          ← dépendances identiques, nom du repo adapté
```

### i18n (ne pas toucher)
```
src/i18n/routing.ts                   ← defineRouting(['fr','en'])
src/i18n/request.ts                   ← getRequestConfig
src/i18n/navigation.ts                ← Link, useRouter, usePathname localisés
```

### Utilitaires (ne pas toucher)
```
src/lib/utils.ts                      ← cn() — clsx + tailwind-merge
src/lib/getT.ts                       ← traducteur serveur sans plugin
```

### Composants réutilisables (ne pas toucher)
```
src/components/animations/FadeIn.tsx  ← wrapper scroll-triggered fade
src/components/animations/SlideUp.tsx ← wrapper scroll-triggered slide
src/components/layout/ThemeToggle.tsx  ← bouton dark/light mode
src/components/ui/Container.tsx       ← wrapper max-width
src/components/ui/Button.tsx          ← bouton réutilisable
```

### ⚠️ npm install requis
Les briques sont copiées mais **node_modules n'est pas installé**. Première chose à faire :
```bash
npm install
```

---

## CE QUI DOIT ÊTRE CRÉÉ FROM SCRATCH (100% unique par démo)

Chaque démo doit avoir un **design totalement différent**. Pas de copier-coller de composants visuels entre démos. Les visiteurs doivent voir une **palette de sites variés**, pas des templates qui se ressemblent.

### Fichiers à créer obligatoirement :
```
src/app/globals.css                   ← palette de couleurs 100% DIFFÉRENTE
src/app/[locale]/layout.tsx           ← fonts DIFFÉRENTES (next/font), metadata unique
src/app/[locale]/page.tsx             ← page principale avec sections assemblées
src/app/[locale]/not-found.tsx        ← page 404 custom
src/app/[locale]/[pages-métier]/      ← pages spécifiques au métier
src/app/sitemap.ts                    ← URL du site adaptée
src/components/layout/Header.tsx      ← navigation DIFFÉRENTE (style, structure, animations)
src/components/layout/Footer.tsx      ← footer adapté au métier
src/components/sections/*             ← TOUTES les sections from scratch
src/content/[nom-du-demo].ts          ← données du site (menu, galerie, tarifs…)
src/i18n/messages/fr.json             ← tout le contenu FR
src/i18n/messages/en.json             ← tout le contenu EN (toujours en sync avec fr.json)
src/lib/types.ts                      ← types TypeScript spécifiques au projet
public/robots.txt
public/favicon.ico
```

### Ce qui DOIT être différent entre chaque démo :

| Élément | Doit varier |
|---------|-------------|
| Palette de couleurs | 100% différente (4 couleurs max) |
| Fonts | 2 fonts différentes par démo (display + body) |
| Hero section | Animation d'entrée unique |
| Navigation | Style et structure différents |
| Sections | Spécifiques au métier |
| Images | Unsplash haute qualité, thématiques au métier |
| Ambiance | Vibe totalement distinct |

### Exemples de différenciation attendue :

| Démo | Palette | Fonts | Ambiance |
|------|---------|-------|----------|
| La Table Dorée (restaurant) | Or + charcoal | Cormorant + DM Sans | Gastronomie parisienne, luxe |
| Maison Flour (café) | Terre cuite + crème | Playfair + Nunito | Cosy, artisanal, chaleureux |
| Studio Mika (photographe) | Noir/blanc pur | Bebas + Inter | Minimaliste, dramatique |
| Atelier Bloom (fleuriste) | Rose poudré + vert | Jost + Lato | Délicat, printanier |
| NexaCore (PME) | Bleu corporate + gris | Space Grotesk + DM Sans | Pro, fiable, moderne |
| PulseTrack (SaaS) | Violet + néon | Sora + Inter | Tech, futuriste, glassmorphism |

---

## STACK TECHNIQUE

### Core (identique partout)
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

### Librairies additionnelles (ajouter SEULEMENT si valeur visuelle justifiée)
```
Restaurant / Café     : embla-carousel (galerie food)
Photographe           : react-masonry-css (galerie masonry)
SaaS / PME            : recharts (dashboard/stats démo)
Animations avancées   : GSAP (scroll-triggered premium), lottie-react
Parallax              : react-scroll-parallax
Video background      : react-player
```

**Règle** : n'ajouter une librairie que si elle apporte une vraie valeur visuelle. Pas d'over-engineering. Pas de fonctionnalités backend.

---

## STRUCTURE DES DOSSIERS ATTENDUE

```
src/
├── app/
│   ├── layout.tsx                  ← ✅ DÉJÀ EN PLACE (root, juste children)
│   ├── globals.css                 ← ❌ À CRÉER (palette unique)
│   ├── sitemap.ts                  ← ❌ À CRÉER
│   └── [locale]/
│       ├── layout.tsx              ← ❌ À CRÉER (html + body + fonts + ThemeProvider)
│       ├── page.tsx                ← ❌ À CRÉER
│       ├── [pages-métier]/         ← ❌ À CRÉER
│       └── not-found.tsx           ← ❌ À CRÉER
│
├── components/
│   ├── layout/
│   │   ├── ThemeToggle.tsx         ← ✅ DÉJÀ EN PLACE
│   │   ├── Header.tsx              ← ❌ À CRÉER (unique)
│   │   └── Footer.tsx              ← ❌ À CRÉER (unique)
│   ├── ui/
│   │   ├── Container.tsx           ← ✅ DÉJÀ EN PLACE
│   │   ├── Button.tsx              ← ✅ DÉJÀ EN PLACE
│   │   └── [autres ui]/            ← ❌ À CRÉER si besoin
│   ├── sections/                   ← ❌ TOUT À CRÉER (Hero, About, etc.)
│   └── animations/
│       ├── FadeIn.tsx              ← ✅ DÉJÀ EN PLACE
│       └── SlideUp.tsx             ← ✅ DÉJÀ EN PLACE
│
├── lib/
│   ├── utils.ts                    ← ✅ DÉJÀ EN PLACE
│   ├── getT.ts                     ← ✅ DÉJÀ EN PLACE
│   ├── types.ts                    ← ❌ À CRÉER
│   └── constants.ts                ← ❌ À CRÉER si besoin
│
├── content/                        ← ❌ TOUT À CRÉER
│   └── [nom-du-demo].ts
│
└── i18n/
    ├── routing.ts                  ← ✅ DÉJÀ EN PLACE
    ├── request.ts                  ← ✅ DÉJÀ EN PLACE
    ├── navigation.ts               ← ✅ DÉJÀ EN PLACE
    └── messages/
        ├── fr.json                 ← ❌ À CRÉER
        └── en.json                 ← ❌ À CRÉER
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
8. **Pas de backend** : tout est statique/visuel, pas d'API, pas de paiement, pas de réservation réelle
9. **Design unique** : chaque démo doit être visuellement différent des autres — pas de template commun

---

## DESIGN — STANDARDS VISUELS

### Principes
- **Mobile-first** : designer pour 375px en premier, élargir ensuite
- **Whitespace généreux** : l'espace vide est un élément de design
- **Maximum 2 polices** : une display + une corps de texte (via `next/font`)
- **Palette max 4 couleurs** : primaire, secondaire, neutre, accent
- **Animations subtiles** : elles doivent servir le contenu, pas le parasiter
- **`prefers-reduced-motion`** : toujours respecter
- **Les images comptent énormément** : Unsplash haute qualité, thématiques au métier

### Attendu sur chaque démo
```
✅ Hero section avec animation d'entrée forte et unique
✅ Scroll-triggered animations (FadeIn / SlideUp)
✅ Hover states soignés sur tous les éléments interactifs
✅ Transitions de couleur fluides
✅ Responsive parfait : 375px → 768px → 1024px → 1440px → 1920px
✅ Dark mode visuel cohérent sur toutes les sections
✅ Images optimisées + lazy loading natif Next.js
✅ Fluidité générale des transitions et animations
```

### Bonus selon le type de démo
```
🚀 Parallax subtil sur le hero
🚀 Galerie avec lightbox
🚀 Curseur personnalisé (démos créatives)
🚀 Transitions de page (AnimatePresence)
🚀 Texte animé (stagger variants)
🚀 Background video ou gradient animé
🚀 Glassmorphism / noise texture (SaaS)
🚀 Grille masonry (galeries photo)
🚀 Micro-animations boutons (scale, glow, ripple)
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
- `public/robots.txt`
- `src/app/sitemap.ts`
- `public/favicon.ico` + `public/icon.png` (512×512)

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
- [ ] Design visuellement DIFFÉRENT des autres démos
- [ ] Page 404 custom

### SEO
- [ ] `generateMetadata` sur chaque page
- [ ] `sitemap.xml` généré et accessible
- [ ] `robots.txt` présent

### Contenu
- [ ] Aucun texte placeholder ("Lorem ipsum", "TODO")
- [ ] Toutes les URLs de liens sont valides
- [ ] Textes en FR et EN complets

---

## DÉPLOIEMENT

```bash
# 1. Commit et push
git add . && git commit -m "feat: [nom du demo] — site complet" && git push

# 2. Déployer sur Vercel
# vercel.com → Import Project → sélectionner le repo → Deploy

# 3. Mettre à jour l'URL dans le portfolio principal (forge-digitale)
# Fichier : src/content/projects.ts
# Champ : url: "https://demo-NOM.vercel.app"
```

---

> Forge Digitale — *Ship fast, ship beautiful.*