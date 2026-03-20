'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import FadeIn from '@/components/animations/FadeIn';
import Badge from '@/components/ui/Badge';
import { GALLERY_IMAGES } from '@/content/la-table-doree';

const PREVIEW_IMAGES = GALLERY_IMAGES.slice(0, 5);

export default function Gallery() {
  const t = useTranslations('gallery');

  return (
    <section className="py-24 lg:py-36 bg-cream-50 dark:bg-charcoal-900 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div>
            <FadeIn>
              <Badge>{t('badge')}</Badge>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-charcoal-900 dark:text-cream-50 mt-6 leading-[1.1]">
                {t('title')}
              </h2>
            </FadeIn>
          </div>
          <FadeIn delay={0.2} className="shrink-0">
            <Link
              href="/galerie"
              className="inline-flex items-center gap-3 text-gold-600 dark:text-gold-400 hover:text-gold-500 text-sm tracking-[0.15em] uppercase font-body transition-colors group"
            >
              <span>Voir toutes</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeIn>
        </div>

        {/* Subtitle */}
        <FadeIn delay={0.15}>
          <p className="text-charcoal-500 dark:text-charcoal-300 max-w-xl mb-12 leading-relaxed">
            {t('subtitle')}
          </p>
        </FadeIn>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[200px] lg:auto-rows-[240px]">
          {PREVIEW_IMAGES.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                delay: i * 0.08,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`relative overflow-hidden group cursor-pointer ${
                i === 0 ? 'lg:row-span-2' : ''
              } ${i === 3 ? 'col-span-2 lg:col-span-1' : ''}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-charcoal-900/0 group-hover:bg-charcoal-900/40 transition-all duration-500" />
              <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-cream-100 text-sm font-body leading-snug">
                  {img.alt}
                </p>
              </div>
              {/* Gold border on hover */}
              <div className="absolute inset-0 border border-gold-500/0 group-hover:border-gold-500/30 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
