import type { GalleryImage, MenuItem } from '@/lib/types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'foie-gras',
    name: 'Foie Gras Poêlé',
    description:
      'Chutney de figues maison, brioche toastée au beurre Guérande, vinaigrette au vieux porto',
    price: 42,
    category: 'entree',
    image:
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
    tags: ['signature'],
  },
  {
    id: 'saint-jacques',
    name: 'Carpaccio de Saint-Jacques',
    description:
      "Noix de Saint-Jacques de la baie de Seine, caviar Osciètre, émulsion yuzu, huile d'olive de Provence",
    price: 58,
    category: 'entree',
    image:
      'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=800&q=80',
    tags: ['seafood'],
  },
  {
    id: 'veloute-truffes',
    name: 'Velouté de Truffes',
    description:
      'Crème légère infusée à la truffe noire du Périgord, copeaux de truffe fraîche, mousse de cèpes',
    price: 68,
    category: 'entree',
    image:
      'https://images.unsplash.com/photo-1547592180-85f173990554?w=800&q=80',
    tags: ['seasonal', 'signature'],
  },
  {
    id: 'boeuf-rossini',
    name: 'Filet de Bœuf Rossini',
    description:
      "Bœuf Wagyu A5, escalope de foie gras poêlée, sauce Périgueux à la truffe noire, gratin dauphinois à l'ancienne",
    price: 95,
    category: 'plat',
    image:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80',
    tags: ['signature'],
  },
  {
    id: 'homard',
    name: 'Homard Bleu Breton',
    description:
      'Homard de Bretagne, bisque de crustacés à la verveine, fenouil confit, beurre blanc au Champagne',
    price: 110,
    category: 'plat',
    image:
      'https://images.unsplash.com/photo-1559339352-11d035aa65ce?w=800&q=80',
    tags: ['seafood', 'signature'],
  },
  {
    id: 'ris-veau',
    name: 'Ris de Veau Croustillant',
    description:
      "Ris de veau de lait, morilles sauvages, jus corsé au Madère, purée de céleri à l'huile de noix",
    price: 78,
    category: 'plat',
    image:
      'https://images.unsplash.com/photo-1546039907-7fa05f864c02?w=800&q=80',
    tags: ['seasonal'],
  },
  {
    id: 'souffle',
    name: 'Soufflé Grand Marnier',
    description:
      "Soufflé chaud à l'orange sanguine, sorbet mandarine de Corse, dentelle de chocolat Valrhona 75%",
    price: 28,
    category: 'dessert',
    image:
      'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=800&q=80',
    tags: ['signature'],
  },
  {
    id: 'mille-feuille',
    name: 'Mille-Feuille Revisité',
    description:
      'Feuilletage inversé caramélisé, crème diplomate à la vanille de Tahiti, caramel breton au beurre salé',
    price: 24,
    category: 'dessert',
    image:
      'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=800&q=80',
    tags: ['signature'],
  },
  {
    id: 'fromages',
    name: 'Plateau de Fromages',
    description:
      "Sélection affinée par notre fromager, condiments maison, pain de campagne au levain d'épeautre",
    price: 28,
    category: 'dessert',
    image:
      'https://images.unsplash.com/photo-1452195100486-9cc805987862?w=800&q=80',
    tags: [],
  },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 'g1',
    src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80',
    alt: 'Création culinaire signature de La Table Dorée',
    category: 'cuisine',
    width: 1200,
    height: 800,
  },
  {
    id: 'g2',
    src: 'https://images.unsplash.com/photo-1559339352-11d035aa65ce?w=1200&q=80',
    alt: 'Salle principale de La Table Dorée',
    category: 'ambiance',
    width: 1200,
    height: 800,
  },
  {
    id: 'g3',
    src: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=1200&q=80',
    alt: 'Table dressée avec élégance',
    category: 'ambiance',
    width: 1200,
    height: 800,
  },
  {
    id: 'g4',
    src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=80',
    alt: 'Plat signature du Chef Beaumont',
    category: 'cuisine',
    width: 1200,
    height: 800,
  },
  {
    id: 'g5',
    src: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=1200&q=80',
    alt: 'Cuisine ouverte en action',
    category: 'cuisine',
    width: 1200,
    height: 800,
  },
  {
    id: 'g6',
    src: 'https://images.unsplash.com/photo-1551218808-1f8abcf5c5b8?w=1200&q=80',
    alt: 'Dîner de gala à La Table Dorée',
    category: 'evenements',
    width: 1200,
    height: 800,
  },
  {
    id: 'g7',
    src: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1200&q=80',
    alt: 'Cave à vins exceptionnelle',
    category: 'ambiance',
    width: 1200,
    height: 800,
  },
  {
    id: 'g8',
    src: 'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=1200&q=80',
    alt: 'Création pâtissière du Chef',
    category: 'cuisine',
    width: 1200,
    height: 800,
  },
  {
    id: 'g9',
    src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80',
    alt: 'Réception privée dans notre salon',
    category: 'evenements',
    width: 1200,
    height: 800,
  },
];
