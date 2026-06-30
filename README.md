# Template Site Generator

# Template Site Generator

Un projet personnel pour structurer et monter en compétences sur la conception d'architecture logicielle, l'organisation de repos GitHub, le développement Next.js/Node.js, l'automatisation et la méthodologie de développement — à travers la génération rapide de sites vitrine visuellement uniques à partir d'une base technique commune.

## Le concept

Plutôt que de partir de zéro à chaque projet, ce système repose sur une séparation claire :

- **Une infrastructure commune** (routing i18n, dark mode, animations de base, utilitaires, config Next.js/Tailwind) — définie une fois, puis réutilisée à l'identique sur chaque site
- **Un design 100% unique par site** (palette, typographies, sections, contenu, ambiance) — généré from scratch à chaque fois, sans copier-coller visuel entre projets

Cette architecture est documentée dans un fichier de contexte (`ARCHITECTURE.md`, présent à la racine de chaque site) qui sert de cahier des charges pour le développement assisté par Claude Code : stack, standards SEO, responsive, accessibilité, checklist de déploiement.

**Objectif du projet :** apprendre et pratiquer la définition d'une architecture réplicable, la structuration propre d'un repo, et l'automatisation d'un workflow de développement — dans une optique de portfolio professionnel.

## Stack commune

| | |
|---|---|
| Framework | Next.js 16 (App Router, TypeScript strict) |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| i18n | next-intl (FR / EN) |
| Dark mode | next-themes |
| Déploiement | Vercel (auto-deploy sur push) |

## Sites générés

| Projet | Métier | Stack additionnelle | Live |
|---|---|---|---|
| [Hôtel Belvédère](sites/hotel-belvedere) | Hôtel boutique | Galerie, réservation (démo) | [Voir le site](https://demo-hotel-belvedere.vercel.app) |
| [PulseTrack](sites/saas-pulsetrack) | SaaS | Dashboard, recharts | [Voir le site](https://demo-saas-pulsetrack.vercel.app) |
| [La Table Dorée](sites/restaurant-table-doree) | Restaurant gastronomique | Galerie food, menu interactif | [Voir le site](https://demo-restaurant-la-table-doree.vercel.app) |
| [Maison Flour](sites/cafe-maison-flour) | Café / boulangerie | Galerie, story | [Voir le site](https://demo-cafe-maison-flour.vercel.app) |

Chaque dossier dans `sites/` est un projet Next.js complet et autonome (son propre `package.json`, ses propres dépendances), avec son historique de commits préservé.

## Standards visés sur chaque site

- Mobile-first, responsive testé de 375px à 1920px
- Dark mode cohérent sur toutes les pages
- Bilingue FR/EN complet (jamais de texte hardcodé)
- SEO : metadata, sitemap, robots.txt, Open Graph
- `npm run build` + `npm run lint` obligatoires avant tout déploiement
- Performance : Lighthouse > 90

## Structure du repo

```
template-site-generator/
├── README.md
├── sites/
│   ├── hotel-belvedere/
│   │   └── ARCHITECTURE.md  # cahier des charges lu par Claude Code
│   ├── saas-pulsetrack/
│   │   └── ARCHITECTURE.md
│   ├── restaurant-table-doree/
│   │   └── ARCHITECTURE.md
│   └── cafe-maison-flour/
│       └── ARCHITECTURE.md
```

---

*Architecture conçue et maintenue par P. Cornu.*