export interface Room {
  id: string;
  slug: string;
  imageUrl: string;
  surface: number;
  capacity: number;
  priceFrom: number;
  features: string[];
}

export interface GalleryPhoto {
  id: string;
  url: string;
  alt: string;
  width: number;
  height: number;
  category: 'rooms' | 'restaurant' | 'spa' | 'exterior' | 'pool';
}

export interface Testimonial {
  id: string;
  author: string;
  origin: string;
  rating: number;
  text: string;
  date: string;
}

export interface MenuItem {
  name: string;
  description: string;
  price: number;
}

export interface SpaService {
  id: string;
  imageUrl: string;
  duration: number;
  price: number;
}
