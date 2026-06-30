export type Locale = 'fr' | 'en';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'entree' | 'plat' | 'dessert';
  image: string;
  tags: string[];
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: 'cuisine' | 'ambiance' | 'evenements';
  width: number;
  height: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
}

export interface Award {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
}
