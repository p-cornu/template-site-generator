'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Badge from '@/components/ui/Badge';
import Container from '@/components/ui/Container';
import FadeIn from '@/components/animations/FadeIn';
import { GALLERY_IMAGES } from '@/content/la-table-doree';
import { cn } from '@/lib/utils';
import type { GalleryImage } from '@/lib/types';

type Filter = 'all' | 'cuisine' | 'ambiance' | 'evenements';

export default function GaleriePage() {
  const t = useTranslations('gallery');
  const [filter, setFilter] = useState<Filter>('all');
  const [lightbox, setLightbox] = useState<GalleryImage | null>(null);

  const filters: { key: Filter; label: string }[] = [
    { key: 'all', label: t('categories.all') },
    { key: 'cuisine', label: t('categories.cuisine') },
    { key: 'ambiance', label: t('categories.ambiance') },
    { key: 'evenements', label: t('categories.evenements') },
  ];

  const filtered =
    filter === 'all'
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === filter);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-44 lg:pb-20 bg-charcoal-900 dark:bg-charcoal-950">
        <Container className="text-center">
          <FadeIn>
            <Badge variant="outline" className="border-gold-500/30 mb-6">
              {t('badge')}
            </Badge>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-cream-50 mt-6 mb-4 leading-[1.1]">
              {t('pageTitle')}
            </h1>
            <p className="text-charcoal-300 max-w-xl mx-auto">
              {t('pageSubtitle')}
            </p>
          </FadeIn>

          {/* Filter tabs */}
          <FadeIn delay={0.2}>
            <div className="flex flex-wrap items-center justify-center gap-2 mt-10">
              {filters.map((f) => (
                <button
                  key={f.key}
                  onClick={() => setFilter(f.key)}
                  className={cn(
                    'px-5 py-2 text-xs tracking-[0.2em] uppercase font-body border transition-all duration-300 cursor-pointer',
                    filter === f.key
                      ? 'bg-gold-500 border-gold-500 text-charcoal-900'
                      : 'border-charcoal-600 text-charcoal-400 hover:border-gold-500/50 hover:text-gold-400'
                  )}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Gallery grid */}
      <section className="py-16 lg:py-20 bg-charcoal-950 dark:bg-black">
        <Container>
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[220px] md:auto-rows-[280px]"
            >
              {filtered.map((img, i) => (
                <motion.div
                  key={img.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05, duration: 0.5 }}
                  onClick={() => setLightbox(img)}
                  className={cn(
                    'relative overflow-hidden cursor-pointer group',
                    i % 5 === 0 ? 'row-span-2' : '',
                    i % 7 === 0 ? 'col-span-2 md:col-span-1' : ''
                  )}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-charcoal-900/0 group-hover:bg-charcoal-900/50 transition-all duration-500" />
                  <div className="absolute inset-0 flex items-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-cream-100 text-sm font-body leading-snug">
                      {img.alt}
                    </p>
                  </div>
                  <div className="absolute inset-0 border border-gold-500/0 group-hover:border-gold-500/40 transition-all duration-500" />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </Container>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-50 bg-charcoal-900/95 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full max-h-[80vh] aspect-[4/3]"
            >
              <Image
                src={lightbox.src.replace('w=1200', 'w=1600')}
                alt={lightbox.alt}
                fill
                className="object-contain"
                sizes="100vw"
              />
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-charcoal-900/80 flex items-center justify-center text-cream-100 hover:text-gold-400 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-0 left-0 right-0 bg-charcoal-900/80 py-3 px-4">
                <p className="text-cream-200 text-sm font-body">{lightbox.alt}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
