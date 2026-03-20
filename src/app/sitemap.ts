import type { MetadataRoute } from 'next';

const BASE_URL = 'https://demo-cafe-maison-flour.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ['fr', 'en'] as const;
  const pages = ['', '/carte'] as const;

  return locales.flatMap((locale) =>
    pages.map((page) => ({
      url: `${BASE_URL}/${locale}${page}`,
      lastModified: new Date('2024-01-01'),
      changeFrequency: page === '' ? ('weekly' as const) : ('monthly' as const),
      priority: page === '' ? 1 : 0.8,
    }))
  );
}
