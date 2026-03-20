export interface MenuItem {
  id: string;
  category: 'hot' | 'cold' | 'pastry' | 'brunch';
  price: string;
  featured?: boolean;
  imageUrl?: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  altEn: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  roleEn: string;
  rating: number;
  avatarInitials: string;
}

export interface OpeningHour {
  days: string;
  daysEn: string;
  hours: string;
}

export type Locale = 'fr' | 'en';
