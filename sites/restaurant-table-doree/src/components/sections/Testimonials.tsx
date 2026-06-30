'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import FadeIn from '@/components/animations/FadeIn';
import Badge from '@/components/ui/Badge';

const TESTIMONIAL_KEYS = ['t1', 't2', 't3', 't4'] as const;

export default function Testimonials() {
  const t = useTranslations('testimonials');

  return (
    <section className="py-24 lg:py-36 bg-charcoal-900 dark:bg-charcoal-950 overflow-hidden">
      {/* Decorative top border */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent mb-0" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
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
            <p className="text-charcoal-300 max-w-xl mx-auto leading-relaxed">
              {t('subtitle')}
            </p>
          </FadeIn>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {TESTIMONIAL_KEYS.map((key, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                delay: i * 0.1,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative bg-charcoal-800 dark:bg-charcoal-900 p-8 lg:p-10 group hover:bg-charcoal-800/80 transition-colors duration-300 border border-charcoal-700 hover:border-gold-500/20"
            >
              {/* Quote icon */}
              <Quote className="absolute top-6 right-6 w-12 h-12 text-gold-500/8 group-hover:text-gold-500/15 transition-colors duration-300" />

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, si) => (
                  <Star
                    key={si}
                    className="w-4 h-4 fill-gold-400 text-gold-400"
                  />
                ))}
              </div>

              {/* Text */}
              <blockquote className="text-cream-200 font-display text-lg lg:text-xl italic leading-relaxed mb-8">
                &ldquo;{t(`items.${key}Text` as Parameters<typeof t>[0])}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-charcoal-700">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center">
                  <span className="text-charcoal-900 font-body font-semibold text-sm">
                    {t(`items.${key}Name` as Parameters<typeof t>[0]).charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-cream-100 font-body font-medium text-sm">
                    {t(`items.${key}Name` as Parameters<typeof t>[0])}
                  </p>
                  <p className="text-charcoal-400 text-xs tracking-wide">
                    {t(`items.${key}Role` as Parameters<typeof t>[0])}
                  </p>
                </div>
              </div>

              {/* Bottom gold line */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/0 to-transparent group-hover:via-gold-500/30 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
