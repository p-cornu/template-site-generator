'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import FadeIn from '@/components/animations/FadeIn';

export default function CtaSection() {
  const t = useTranslations('cta');
  const tc = useTranslations('contact');

  return (
    <section className="relative py-28 lg:py-40 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920&q=80"
          alt="Réservation La Table Dorée"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-charcoal-900/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900/60 via-charcoal-900/75 to-charcoal-900/90" />
      </div>

      {/* Decorative lines */}
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />
      <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 text-center">
        <FadeIn>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-16 h-px bg-gold-400 mx-auto mb-10"
          />
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-cream-50 leading-[1.1] mb-6">
            {t('title')}
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-cream-300/80 text-lg leading-relaxed max-w-2xl mx-auto mb-12">
            {t('subtitle')}
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-gold-500 hover:bg-gold-400 text-charcoal-900 text-sm tracking-[0.18em] uppercase font-body font-medium px-12 py-4 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-2xl shadow-gold-500/30"
            >
              {t('button')}
            </Link>

            <div className="flex items-center gap-3 text-cream-300/70">
              <span className="w-8 h-px bg-cream-300/30" />
              <span className="text-sm font-body">{t('phone')}</span>
              <span className="w-8 h-px bg-cream-300/30" />
            </div>

            <a
              href={`tel:${tc('phone').replace(/\s/g, '')}`}
              className="flex items-center gap-2 text-gold-400 hover:text-gold-300 text-sm font-body transition-colors"
            >
              <Phone className="w-4 h-4" />
              {tc('phone')}
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
