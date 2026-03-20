import type { MetadataRoute } from 'next';

const BASE_URL = 'https://demo-restaurant-la-table-doree.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ['fr', 'en'];
  const routes = ['', '/menu', '/galerie', '/contact'];

  return locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${BASE_URL}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: route === '' ? 1.0 : 0.8,
    }))
  );
}
