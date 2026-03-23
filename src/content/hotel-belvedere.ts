import type { Room, GalleryPhoto, Testimonial, MenuItem, SpaService } from '@/lib/types';

// Base Unsplash URL builder
const img = (id: string, w: number, h?: number) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}${h ? `&h=${h}` : ''}&q=85`;

export const HOTEL_DATA = {
  name: 'Hôtel Belvédère',
  tagline: 'L\'Art de Vivre sur la Côte d\'Azur',
  established: 1923,
  rooms: 48,
  address: '12 Avenue de la Mer, Èze-sur-Mer, 06360 Alpes-Maritimes, France',
  phone: '+33 (0)4 93 01 23 45',
  email: 'contact@hotel-belvedere-eze.fr',
  images: {
    hero: img('1507525428034-b723cf961d3e', 1920, 1080),
    hero2: img('1571003123894-1f0594d2b5d9', 1920, 1080),
    lobby: img('1551882547-ff40c63fe2e2', 1200, 800),
    roomSuite: img('1631049307264-da0ec9d70304', 1200, 800),
    roomDeluxe: img('1582719478250-c89cae4dc85b', 1200, 800),
    roomClassic: img('1566665797739-1674de7a421a', 1200, 800),
    restaurant: img('1559827291-72f579e70459', 1200, 800),
    restaurantFood: img('1414235077428-338989a2e8c0', 1200, 800),
    spa: img('1540555700478-4be289fbecef', 1200, 800),
    pool: img('1520250497591-112f2f40a3f4', 1200, 800),
  },
};

export const ROOMS_DATA: Room[] = [
  {
    id: 'suite-panoramique',
    slug: 'suite-panoramique',
    imageUrl: img('1631049307264-da0ec9d70304', 1200, 800),
    surface: 65,
    capacity: 2,
    priceFrom: 480,
    features: [
      'Vue mer panoramique',
      'Terrasse privée',
      'Jacuzzi',
      'Salon séparé',
      'Lit king-size',
      'Mini-bar premium',
      'Peignoirs & chaussons',
      'Petit-déjeuner inclus',
    ],
  },
  {
    id: 'chambre-vue-mer',
    slug: 'chambre-vue-mer',
    imageUrl: img('1582719478250-c89cae4dc85b', 1200, 800),
    surface: 38,
    capacity: 2,
    priceFrom: 290,
    features: [
      'Vue mer',
      'Balcon',
      'Douche italienne',
      'Lit queen-size',
      'Climatisation',
      'TV 4K',
      'Coffre-fort',
      'Wifi haut débit',
    ],
  },
  {
    id: 'chambre-classique',
    slug: 'chambre-classique',
    imageUrl: img('1566665797739-1674de7a421a', 1200, 800),
    surface: 28,
    capacity: 2,
    priceFrom: 190,
    features: [
      'Vue jardin ou cour',
      'Salle de bain privée',
      'Climatisation',
      'TV satellite',
      'Coffre-fort',
      'Wifi inclus',
      'Bureau de travail',
      'Minibar',
    ],
  },
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'gallery-1',
    url: img('1507525428034-b723cf961d3e', 1200, 900),
    alt: 'Vue sur la Méditerranée depuis le Belvédère',
    width: 1200,
    height: 900,
    category: 'exterior',
  },
  {
    id: 'gallery-2',
    url: img('1571003123894-1f0594d2b5d9', 1200, 900),
    alt: 'Façade extérieure de l\'Hôtel Belvédère',
    width: 1200,
    height: 900,
    category: 'exterior',
  },
  {
    id: 'gallery-3',
    url: img('1551882547-ff40c63fe2e2', 1200, 900),
    alt: 'Hall d\'entrée élégant du Belvédère',
    width: 1200,
    height: 900,
    category: 'rooms',
  },
  {
    id: 'gallery-4',
    url: img('1631049307264-da0ec9d70304', 1200, 900),
    alt: 'Suite Panoramique avec vue mer',
    width: 1200,
    height: 900,
    category: 'rooms',
  },
  {
    id: 'gallery-5',
    url: img('1559827291-72f579e70459', 1200, 900),
    alt: 'La Terrasse — restaurant avec vue sur la mer',
    width: 1200,
    height: 900,
    category: 'restaurant',
  },
  {
    id: 'gallery-6',
    url: img('1540555700478-4be289fbecef', 1200, 900),
    alt: 'Espace bien-être et spa du Belvédère',
    width: 1200,
    height: 900,
    category: 'spa',
  },
  {
    id: 'gallery-7',
    url: img('1520250497591-112f2f40a3f4', 1200, 900),
    alt: 'Piscine à débordement vue sur la mer',
    width: 1200,
    height: 900,
    category: 'pool',
  },
  {
    id: 'gallery-8',
    url: img('1414235077428-338989a2e8c0', 1200, 900),
    alt: 'Gastronomie méditerranéenne — La Terrasse',
    width: 1200,
    height: 900,
    category: 'restaurant',
  },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'testimonial-1',
    author: 'Marie-Claire D.',
    origin: 'Paris, France',
    rating: 5,
    text: 'Un séjour absolument inoubliable. La vue sur la Méditerranée depuis notre suite était à couper le souffle. Le personnel est attentionné, discret et d\'une gentillesse rare. La Terrasse propose une cuisine d\'une finesse remarquable. Nous reviendrons sans hésiter.',
    date: '2025-08',
  },
  {
    id: 'testimonial-2',
    author: 'James & Sarah T.',
    origin: 'London, United Kingdom',
    rating: 5,
    text: 'The most magical hotel we have ever stayed in. The combination of old-world charm and modern luxury is perfectly balanced. Breakfast on the terrace with the sea stretching to the horizon — simply unforgettable. The spa treatments were world-class.',
    date: '2025-07',
  },
  {
    id: 'testimonial-3',
    author: 'Hans-Peter M.',
    origin: 'München, Deutschland',
    rating: 5,
    text: 'Das Hôtel Belvédère ist ein wahres Juwel an der Côte d\'Azur. Die Atmosphäre ist elegant ohne steif zu sein, das Personal herzlich und professionell. Das Frühstück mit frischen lokalen Produkten war jeden Morgen ein Genuss. Absolut empfehlenswert!',
    date: '2025-09',
  },
];

export interface RestaurantMenu {
  starters: MenuItem[];
  mains: MenuItem[];
  desserts: MenuItem[];
}

export const RESTAURANT_MENU: RestaurantMenu = {
  starters: [
    {
      name: 'Burrata de Campanie & Tomates Anciennes',
      description: 'Huile d\'olive AOP, basilic frais, fleur de sel de Camargue, réduction balsamique',
      price: 22,
    },
    {
      name: 'Tartare de Thon Rouge Méditerranéen',
      description: 'Avocat, citron confit, gingembre frais, chips de riz soufflé, tobiko',
      price: 28,
    },
    {
      name: 'Soupe de Poissons de Roche',
      description: 'Tradition provençale, rouille maison, gruyère râpé, croûtons à l\'ail',
      price: 18,
    },
  ],
  mains: [
    {
      name: 'Loup de Mer en Croûte de Sel',
      description: 'Fenouil braisé, sauce vierge aux herbes, légumes de saison du marché d\'Antibes',
      price: 48,
    },
    {
      name: 'Filet de Bœuf Charolais',
      description: 'Jus au thym, gratin dauphinois, haricots verts extra-fins, truffe noire râpée',
      price: 52,
    },
    {
      name: 'Risotto aux Cèpes & Parmesan 36 Mois',
      description: 'Huile de truffe blanche, copeaux de parmesan Parmigiano Reggiano, herbes fraîches',
      price: 36,
    },
  ],
  desserts: [
    {
      name: 'Tarte Tropézienne Revisitée',
      description: 'Crème diplomate à la fleur d\'oranger, fraises Gariguette, coulis de framboise',
      price: 16,
    },
    {
      name: 'Soufflé au Grand Marnier',
      description: 'Glace vanille Bourbon, tuile dentelle au sésame, zestes d\'orange confits',
      price: 18,
    },
    {
      name: 'Plateau de Fromages Affinés',
      description: 'Sélection du meilleur affineur de Nice, confiture de figues, pain aux noix',
      price: 22,
    },
  ],
};

export const SPA_SERVICES: SpaService[] = [
  {
    id: 'massage-signature',
    imageUrl: img('1540555700478-4be289fbecef', 1200, 800),
    duration: 90,
    price: 180,
  },
  {
    id: 'soin-visage',
    imageUrl: img('1570172619644-dfd03ed5d881', 1200, 800),
    duration: 60,
    price: 120,
  },
  {
    id: 'hammam-gommage',
    imageUrl: img('1544161515-4be5d71abb6d', 1200, 800),
    duration: 75,
    price: 95,
  },
  {
    id: 'rituel-mediterraneen',
    imageUrl: img('1519415943484-9fa1873496d4', 1200, 800),
    duration: 120,
    price: 220,
  },
];
