import type { Feature, Testimonial, ChartDataPoint, MetricCard } from '@/lib/types';

export const features: Feature[] = [
  { icon: 'Zap', key: 'f1' },
  { icon: 'MousePointerClick', key: 'f2' },
  { icon: 'LayoutDashboard', key: 'f3' },
  { icon: 'Bell', key: 'f4' },
  { icon: 'FileBarChart', key: 'f5' },
  { icon: 'Plug', key: 'f6' },
];

export const testimonials: Testimonial[] = [
  {
    imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&fit=crop&q=80',
    quoteKey: 't1Quote',
    nameKey: 't1Name',
    roleKey: 't1Role',
    imageAltKey: 't1Image',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&fit=crop&q=80',
    quoteKey: 't2Quote',
    nameKey: 't2Name',
    roleKey: 't2Role',
    imageAltKey: 't2Image',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=96&h=96&fit=crop&q=80',
    quoteKey: 't3Quote',
    nameKey: 't3Name',
    roleKey: 't3Role',
    imageAltKey: 't3Image',
  },
];

export const metrics: MetricCard[] = [
  { labelKey: 'metric1Label', valueKey: 'metric1Value', changeKey: 'metric1Change', positive: true },
  { labelKey: 'metric2Label', valueKey: 'metric2Value', changeKey: 'metric2Change', positive: true },
  { labelKey: 'metric3Label', valueKey: 'metric3Value', changeKey: 'metric3Change', positive: true },
  { labelKey: 'metric4Label', valueKey: 'metric4Value', changeKey: 'metric4Change', positive: false },
];

export const chartDataDaily: ChartDataPoint[] = [
  { name: 'Lun', value: 4200, secondary: 2800 },
  { name: 'Mar', value: 5800, secondary: 3200 },
  { name: 'Mer', value: 4900, secondary: 3100 },
  { name: 'Jeu', value: 7200, secondary: 4400 },
  { name: 'Ven', value: 8100, secondary: 5200 },
  { name: 'Sam', value: 6400, secondary: 3900 },
  { name: 'Dim', value: 5200, secondary: 3100 },
];

export const chartDataWeekly: ChartDataPoint[] = [
  { name: 'S1', value: 28000, secondary: 18000 },
  { name: 'S2', value: 34000, secondary: 22000 },
  { name: 'S3', value: 29000, secondary: 19000 },
  { name: 'S4', value: 42000, secondary: 28000 },
  { name: 'S5', value: 48000, secondary: 32000 },
  { name: 'S6', value: 51000, secondary: 34000 },
];

export const chartDataMonthly: ChartDataPoint[] = [
  { name: 'Jan', value: 120000, secondary: 78000 },
  { name: 'Fév', value: 145000, secondary: 92000 },
  { name: 'Mar', value: 132000, secondary: 85000 },
  { name: 'Avr', value: 168000, secondary: 108000 },
  { name: 'Mai', value: 195000, secondary: 124000 },
  { name: 'Juin', value: 220000, secondary: 142000 },
];

export const siteUrl = 'https://demo-saas-pulsetrack.vercel.app';

export const socialLinks = {
  twitter: 'https://twitter.com',
  linkedin: 'https://linkedin.com',
};
