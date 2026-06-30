'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowDown, Sparkles } from 'lucide-react';
import { Link } from '@/i18n/navigation';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=85"
          alt="La Table Dorée — Gastronomie française d'exception"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Multi-layer overlay for depth */}
        <div className="absolute inset-0 bg-charcoal-900/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900/40 via-charcoal-900/20 to-charcoal-900/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900/30 via-transparent to-charcoal-900/20" />
      </div>

      {/* Decorative grid lines */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #d4af37 1px, transparent 1px), linear-gradient(to bottom, #d4af37 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <span className="w-8 h-px bg-gold-400/60" />
          <Sparkles className="w-3.5 h-3.5 text-gold-400" />
          <span className="text-gold-400 text-[11px] tracking-[0.35em] uppercase font-body">
            {t('badge')}
          </span>
          <Sparkles className="w-3.5 h-3.5 text-gold-400" />
          <span className="w-8 h-px bg-gold-400/60" />
        </motion.div>

        {/* Pre-title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-display text-white/60 text-xl md:text-2xl lg:text-3xl italic font-light mb-2"
        >
          {t('preTitle')}
        </motion.p>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-white leading-none"
          style={{ fontSize: 'clamp(3.5rem, 10vw, 8rem)' }}
        >
          <span className="text-gradient-gold">{t('title')}</span>
        </motion.h1>

        {/* Gold divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center justify-center gap-4 my-8"
        >
          <span className="h-px flex-1 max-w-[80px] bg-gradient-to-r from-transparent to-gold-400/60" />
          <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
          <span className="w-1 h-1 rounded-full bg-gold-400/50" />
          <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
          <span className="h-px flex-1 max-w-[80px] bg-gradient-to-l from-transparent to-gold-400/60" />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.15, duration: 0.8 }}
          className="text-cream-200/75 text-base md:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed font-body mb-12"
        >
          {t('subtitle')}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.35, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-gold-500 hover:bg-gold-400 text-charcoal-900 text-sm tracking-[0.18em] uppercase font-body font-medium px-10 py-4 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-2xl shadow-gold-500/25 hover:shadow-gold-400/35"
          >
            {t('cta')}
          </Link>
          <Link
            href="/menu"
            className="inline-flex items-center gap-3 border border-white/30 text-white hover:border-white/60 hover:bg-white/5 text-sm tracking-[0.18em] uppercase font-body font-medium px-10 py-4 transition-all duration-300"
          >
            {t('ctaSecondary')}
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-cream-200/50 text-[10px] tracking-[0.35em] uppercase font-body">
          {t('scrollLabel')}
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-4 h-4 text-gold-400/70" />
        </motion.div>
      </motion.div>
    </section>
  );
}
