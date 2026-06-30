'use client';

import { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import FadeIn from '@/components/animations/FadeIn';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryImages } from '@/content/maison-flour';
import { cn } from '@/lib/utils';

export default function Gallery() {
  const t = useTranslations('gallery');
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    slidesToScroll: 1,
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section id="gallery" className="section-py bg-[var(--color-charcoal-900)] overflow-hidden">
      <Container>
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
          <FadeIn>
            <span className="inline-block text-xs font-body font-semibold tracking-[0.25em] uppercase text-[var(--color-gold-400)] mb-3">
              {t('badge')}
            </span>
            <h2 className="font-display font-semibold text-4xl sm:text-5xl text-[var(--color-cream-100)]">
              {t('title')}
            </h2>
            <p className="text-[var(--color-charcoal-300)] mt-3 max-w-md text-sm">
              {t('subtitle')}
            </p>
          </FadeIn>

          {/* Nav buttons */}
          <div className="flex gap-3 flex-shrink-0">
            <button
              onClick={scrollPrev}
              aria-label={t('prev')}
              className={cn(
                'w-11 h-11 rounded-full border border-[var(--color-charcoal-700)]',
                'flex items-center justify-center',
                'text-[var(--color-charcoal-300)] hover:text-[var(--color-cream-100)]',
                'hover:border-[var(--color-gold-600)] hover:bg-[var(--color-gold-500)]/10',
                'transition-all duration-200'
              )}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollNext}
              aria-label={t('next')}
              className={cn(
                'w-11 h-11 rounded-full border border-[var(--color-charcoal-700)]',
                'flex items-center justify-center',
                'text-[var(--color-charcoal-300)] hover:text-[var(--color-cream-100)]',
                'hover:border-[var(--color-gold-600)] hover:bg-[var(--color-gold-500)]/10',
                'transition-all duration-200'
              )}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </Container>

      {/* Carousel — full bleed */}
      <div ref={emblaRef} className="overflow-hidden cursor-grab active:cursor-grabbing">
        <div className="flex gap-4 pl-4 sm:pl-6 lg:pl-8">
          {galleryImages.map((img) => (
            <div
              key={img.id}
              className="relative flex-none w-[85vw] sm:w-[55vw] md:w-[40vw] lg:w-[30vw] aspect-[3/4] rounded-2xl overflow-hidden"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 640px) 85vw, (max-width: 1024px) 40vw, 30vw"
              />
              {/* Subtle gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
