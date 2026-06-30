import type { MetadataRoute } from 'next';
import { siteUrl } from '@/content/pulsetrack';

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ['fr', 'en'];
  const now = new Date();

  const routes = locales.flatMap((locale) => [
    {
      url: `${siteUrl}/${locale}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
  ]);

  return routes;
}
