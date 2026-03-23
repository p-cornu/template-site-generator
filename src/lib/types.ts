export interface Feature {
  icon: string;
  key: string; // maps to f1, f2, … — used with useTranslations('features')
}

export interface Testimonial {
  imageUrl: string;
  quoteKey: string; // sub-key inside 'testimonials' namespace
  nameKey: string;
  roleKey: string;
  imageAltKey: string;
}

export interface ChartDataPoint {
  name: string;
  value: number;
  secondary?: number;
}

export interface MetricCard {
  labelKey: string; // sub-key inside 'dashboard' namespace
  valueKey: string;
  changeKey: string;
  positive: boolean;
}
