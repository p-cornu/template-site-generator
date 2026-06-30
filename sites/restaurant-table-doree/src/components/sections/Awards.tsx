'use client';

import { useTranslations } from 'next-intl';
import { Star, Award, Wine, Calendar } from 'lucide-react';

export default function Awards() {
  const t = useTranslations('awards');

  const items = [
    {
      icon: Star,
      title: t('michelin'),
      subtitle: t('michelinSince'),
    },
    {
      icon: Award,
      title: t('gault'),
      subtitle: t('gaultScore'),
    },
    {
      icon: Calendar,
      title: t('founded'),
      subtitle: t('foundedYear'),
    },
    {
      icon: Wine,
      title: t('wine'),
      subtitle: t('wineCount'),
    },
  ];

  return (
    <section className="bg-charcoal-900 dark:bg-charcoal-950 border-y border-charcoal-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-charcoal-800 divide-y lg:divide-y-0">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center py-8 px-6 lg:py-10 gap-3 group hover:bg-gold-500/5 transition-colors duration-300"
            >
              <item.icon className="w-6 h-6 text-gold-500 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-center">
                <p className="text-cream-100 text-sm font-body font-medium tracking-wide">
                  {item.title}
                </p>
                <p className="text-gold-400 text-xs tracking-[0.2em] uppercase font-body mt-0.5">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
