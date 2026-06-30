'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import FadeIn from '@/components/animations/FadeIn';
import Badge from '@/components/ui/Badge';

export default function About() {
  const t = useTranslations('about');

  const stats = [
    { value: t('stat1Value'), label: t('stat1Label') },
    { value: t('stat2Value'), label: t('stat2Label') },
    { value: t('stat3Value'), label: t('stat3Label') },
  ];

  return (
    <section className="py-24 lg:py-36 bg-cream-50 dark:bg-charcoal-900 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left — Images */}
          <FadeIn className="relative order-2 lg:order-1">
            <div className="relative">
              {/* Main image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="relative aspect-[3/4] overflow-hidden"
              >
                <Image
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900&q=85"
                  alt="Salle de restaurant La Table Dorée"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/40 to-transparent" />
              </motion.div>

              {/* Floating secondary image */}
              <motion.div
                initial={{ opacity: 0, x: 40, y: 40 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -bottom-8 -right-6 lg:-right-12 w-2/5 aspect-square overflow-hidden border-4 border-cream-50 dark:border-charcoal-900 shadow-2xl"
              >
                <Image
                  src="https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=400&q=85"
                  alt="Détail de table dressée"
                  fill
                  className="object-cover"
                  sizes="200px"
                />
              </motion.div>

              {/* Gold accent */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border border-gold-400/30" />
              <div className="absolute -top-2 -left-2 w-16 h-16 bg-gold-500/10" />
            </div>
          </FadeIn>

          {/* Right — Text */}
          <div className="order-1 lg:order-2 space-y-8">
            <FadeIn>
              <Badge>{t('badge')}</Badge>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-charcoal-900 dark:text-cream-50 leading-[1.1]">
                {t('title')}
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="space-y-5 text-charcoal-500 dark:text-charcoal-300 leading-relaxed">
                <p>{t('description1')}</p>
                <p>{t('description2')}</p>
              </div>
            </FadeIn>

            {/* Stats */}
            <FadeIn delay={0.3}>
              <div className="grid grid-cols-3 gap-6 py-8 border-y border-charcoal-100 dark:border-charcoal-800">
                {stats.map((stat, i) => (
                  <div key={i} className="text-center">
                    <p className="font-display text-4xl lg:text-5xl text-gradient-gold leading-none mb-2">
                      {stat.value}
                    </p>
                    <p className="text-charcoal-400 dark:text-charcoal-400 text-xs tracking-[0.15em] uppercase font-body leading-tight">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* Chef quote */}
            <FadeIn delay={0.4}>
              <div className="relative bg-charcoal-900 dark:bg-charcoal-800 p-8 overflow-hidden">
                <Quote className="absolute top-4 right-4 w-16 h-16 text-gold-500/10" />
                <div className="flex items-start gap-4">
                  <div className="relative w-14 h-14 shrink-0 overflow-hidden rounded-full border-2 border-gold-500/40">
                    <Image
                      src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=100&q=85"
                      alt={t('chefName')}
                      fill
                      className="object-cover"
                      sizes="56px"
                    />
                  </div>
                  <div>
                    <blockquote className="text-cream-100 font-display text-lg italic leading-relaxed mb-3">
                      &ldquo;{t('chefQuote')}&rdquo;
                    </blockquote>
                    <div>
                      <p className="text-gold-400 text-sm font-body font-medium">
                        {t('chefName')}
                      </p>
                      <p className="text-charcoal-400 text-xs tracking-wide">
                        {t('chefTitle')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
