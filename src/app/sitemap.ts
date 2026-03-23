import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://demo-hotel-belvedere.vercel.app';
  const locales = ['fr', 'en'];
  const pages = ['', '/chambres', '/restaurant', '/spa', '/galerie', '/contact'];

  return locales.flatMap(locale =>
    pages.map(page => ({
      url: `${baseUrl}/${locale}${page}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: page === '' ? 1 : 0.8,
    }))
  );
}
