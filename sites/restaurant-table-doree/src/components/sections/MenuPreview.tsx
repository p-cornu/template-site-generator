'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import FadeIn from '@/components/animations/FadeIn';
import Badge from '@/components/ui/Badge';
import { MENU_ITEMS } from '@/content/la-table-doree';
import { cn } from '@/lib/utils';

type Category = 'entree' | 'plat' | 'dessert';

export default function MenuPreview() {
  const t = useTranslations('menu');
  const [activeCategory, setActiveCategory] = useState<Category>('plat');

  const categories: { key: Category; label: string }[] = [
    { key: 'entree', label: t('categories.entrees') },
    { key: 'plat', label: t('categories.plats') },
    { key: 'dessert', label: t('categories.desserts') },
  ];

  const filtered = MENU_ITEMS.filter(
    (item) => item.category === activeCategory
  ).slice(0, 3);

  return (
    <section className="py-24 lg:py-36 bg-charcoal-900 dark:bg-charcoal-950 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <FadeIn>
            <Badge variant="outline" className="border-gold-500/30">
              {t('badge')}
            </Badge>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-cream-50 mt-6 mb-4 leading-[1.1]">
              {t('title')}
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-charcoal-300 max-w-2xl mx-auto leading-relaxed">
              {t('subtitle')}
            </p>
          </FadeIn>

          {/* Category tabs */}
          <FadeIn delay={0.3}>
            <div className="flex items-center justify-center gap-1 mt-10 bg-charcoal-800 dark:bg-charcoal-900 p-1 rounded-sm w-fit mx-auto">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={cn(
                    'relative px-6 py-2.5 text-xs tracking-[0.2em] uppercase font-body transition-all duration-300 cursor-pointer',
                    activeCategory === cat.key
                      ? 'text-charcoal-900'
                      : 'text-charcoal-400 hover:text-charcoal-200'
                  )}
                >
                  {activeCategory === cat.key && (
                    <motion.div
                      layoutId="menuTab"
                      className="absolute inset-0 bg-gold-500"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{cat.label}</span>
                </button>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Dish cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group relative bg-charcoal-800 dark:bg-charcoal-900 overflow-hidden"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-transparent to-transparent" />

                  {/* Tags */}
                  {item.tags.length > 0 && (
                    <div className="absolute top-4 left-4 flex gap-2">
                      {item.tags.slice(0, 1).map((tag) => (
                        <span
                          key={tag}
                          className="bg-gold-500 text-charcoal-900 text-[10px] tracking-[0.2em] uppercase font-body px-3 py-1"
                        >
                          {t(`tags.${tag}` as Parameters<typeof t>[0])}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Price overlay */}
                  <div className="absolute bottom-4 right-4">
                    <span className="font-display text-2xl text-gold-400">
                      {item.price}€
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display text-xl text-cream-100 mb-2 group-hover:text-gold-400 transition-colors duration-300">
                    {item.name}
                  </h3>
                  <p className="text-charcoal-400 text-sm leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                  <div className="mt-4 h-px bg-gradient-to-r from-gold-500/30 to-transparent group-hover:from-gold-500/60 transition-all duration-300" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <FadeIn className="text-center mt-14">
          <Link
            href="/menu"
            className="inline-flex items-center gap-3 border border-gold-500/40 text-gold-400 hover:bg-gold-500/10 hover:border-gold-400 text-sm tracking-[0.2em] uppercase font-body px-10 py-4 transition-all duration-300 group"
          >
            {t('viewAll')}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
