import type { MenuItem, GalleryImage, Testimonial, OpeningHour } from '@/lib/types';

export const cafeInfo = {
  name: 'Maison Flour',
  address: '12 rue des Martyrs',
  city: '75009 Paris',
  phone: '+33 1 42 85 06 89',
  email: 'bonjour@maison-flour.fr',
  instagram: 'https://instagram.com/maisonflour',
  facebook: 'https://facebook.com/maisonflour',
} as const;

export const openingHours: OpeningHour[] = [
  { days: 'Lundi – Vendredi', daysEn: 'Monday – Friday', hours: '7h30 – 19h00' },
  { days: 'Samedi – Dimanche', daysEn: 'Saturday – Sunday', hours: '8h00 – 20h00' },
];

export const menuItems: MenuItem[] = [
  // Boissons chaudes
  { id: 'espresso', category: 'hot', price: '2,00 €' },
  { id: 'allonge', category: 'hot', price: '2,30 €' },
  { id: 'cappuccino', category: 'hot', price: '3,50 €', featured: true },
  { id: 'latte', category: 'hot', price: '3,80 €' },
  { id: 'flatWhite', category: 'hot', price: '4,00 €' },
  { id: 'matchaLatte', category: 'hot', price: '4,20 €' },
  { id: 'chaiLatte', category: 'hot', price: '4,00 €' },
  { id: 'chocolatChaud', category: 'hot', price: '4,50 €' },
  { id: 'the', category: 'hot', price: '3,20 €' },
  // Boissons froides
  { id: 'coldBrew', category: 'cold', price: '4,50 €' },
  { id: 'icedLatte', category: 'cold', price: '4,50 €' },
  { id: 'smoothie', category: 'cold', price: '5,50 €' },
  { id: 'limonade', category: 'cold', price: '4,00 €' },
  { id: 'eau', category: 'cold', price: '2,00 €' },
  // Pâtisseries
  { id: 'croissant', category: 'pastry', price: '2,20 €' },
  { id: 'painChocolat', category: 'pastry', price: '2,50 €' },
  { id: 'kouignAmann', category: 'pastry', price: '3,80 €', featured: true },
  { id: 'financier', category: 'pastry', price: '2,80 €' },
  { id: 'madeleine', category: 'pastry', price: '2,00 €' },
  { id: 'tarteJour', category: 'pastry', price: '5,50 €' },
  { id: 'carrotCake', category: 'pastry', price: '5,00 €' },
  { id: 'bananaBread', category: 'pastry', price: '4,50 €' },
  { id: 'cookie', category: 'pastry', price: '3,20 €' },
  { id: 'scone', category: 'pastry', price: '3,50 €' },
  // Brunch (week-end)
  { id: 'brunchFlour', category: 'brunch', price: '18,50 €', featured: true },
  { id: 'avocadoToast', category: 'brunch', price: '12,50 €' },
  { id: 'bowl', category: 'brunch', price: '13,50 €' },
  { id: 'pancakes', category: 'brunch', price: '10,50 €' },
  { id: 'toastBeurre', category: 'brunch', price: '4,50 €' },
  { id: 'assietteFruits', category: 'brunch', price: '7,00 €' },
];

export const galleryImages: GalleryImage[] = [
  {
    id: 'g1',
    src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=900&q=80',
    alt: 'Café latte art servi dans une tasse en céramique',
    altEn: 'Latte art coffee served in a ceramic cup',
  },
  {
    id: 'g2',
    src: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=900&q=80',
    alt: 'Intérieur chaleureux du café Maison Flour',
    altEn: 'Warm interior of Maison Flour café',
  },
  {
    id: 'g3',
    src: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=900&q=80',
    alt: 'Croissants dorés fraîchement sortis du four',
    altEn: 'Golden croissants freshly out of the oven',
  },
  {
    id: 'g4',
    src: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=900&q=80',
    alt: 'Cappuccino avec art latte délicat',
    altEn: 'Cappuccino with delicate latte art',
  },
  {
    id: 'g5',
    src: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=900&q=80',
    alt: 'Coin lecture cosy avec plantes et lumière naturelle',
    altEn: 'Cosy reading corner with plants and natural light',
  },
  {
    id: 'g6',
    src: 'https://images.unsplash.com/photo-1484723091739-30990e1a6e06?w=900&q=80',
    alt: 'Brunch coloré avec toast avocat et fruits frais',
    altEn: 'Colourful brunch with avocado toast and fresh fruit',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah M.',
    role: 'Cliente régulière',
    roleEn: 'Regular customer',
    rating: 5,
    avatarInitials: 'SM',
  },
  {
    id: 't2',
    name: 'Pierre D.',
    role: 'Habitué du quartier',
    roleEn: 'Local regular',
    rating: 5,
    avatarInitials: 'PD',
  },
  {
    id: 't3',
    name: 'Emma L.',
    role: 'Fan du brunch',
    roleEn: 'Brunch fan',
    rating: 5,
    avatarInitials: 'EL',
  },
];

export const featuredMenuItems = menuItems.filter((item) => item.featured);
