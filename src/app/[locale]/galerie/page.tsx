'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { GALLERY_PHOTOS } from '@/content/hotel-belvedere';
import Container from '@/components/ui/Container';
import FadeIn from '@/components/animations/FadeIn';
import { cn } from '@/lib/utils';
import type { GalleryPhoto } from '@/lib/types';

type Category = 'all' | GalleryPhoto['category'];

const CATEGORIES: Category[] = ['all', 'rooms', 'restaurant', 'spa', 'exterior', 'pool'];

export default function GaleriePage() {
  const t = useTranslations('gallery');
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const filtered =
    activeCategory === 'all'
      ? GALLERY_PHOTOS
      : GALLERY_PHOTOS.filter(p => p.category === activeCategory);

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 bg-navy text-cream">
        <Container>
          <FadeIn className="text-center">
            <p className="text-gold text-xs font-sans font-semibold tracking-[0.4em] uppercase mb-4">
              {t('tagline')}
            </p>
            <span className="block w-12 h-px bg-gold mx-auto mb-6" />
            <h1 className="font-display text-5xl lg:text-7xl italic font-semibold text-cream mb-4">
              {t('title')}
            </h1>
            <p className="text-cream/60 font-sans max-w-xl mx-auto">{t('subtitle')}</p>
          </FadeIn>
        </Container>
      </section>

      {/* Filter */}
      <section className="py-8 bg-navy border-b border-cream/10">
        <Container>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  'px-5 py-2 text-xs font-sans font-semibold tracking-widest uppercase transition-all duration-300',
                  activeCategory === cat
                    ? 'bg-gold text-white'
                    : 'border border-cream/20 text-cream/60 hover:border-gold hover:text-gold'
                )}
              >
                {t(cat as Parameters<typeof t>[0])}
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* Gallery grid */}
      <section className="py-12 bg-cream dark:bg-navy min-h-[60vh]">
        <Container>
          <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
            {filtered.map((photo, i) => (
              <FadeIn key={photo.id} delay={i * 0.04} className="break-inside-avoid">
                <div className="relative overflow-hidden group cursor-pointer">
                  <Image
                    src={photo.url}
                    alt={photo.alt}
                    width={photo.width}
                    height={photo.height}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/40 transition-all duration-500 flex items-end p-4">
                    <p className="text-cream text-xs font-sans opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                      {photo.alt}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-24 text-navy/40 dark:text-cream/40 font-sans">
              Aucune photo dans cette catégorie
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
