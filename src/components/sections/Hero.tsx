'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowDown, Coffee } from 'lucide-react';
import Button from '@/components/ui/Button';

const stagger = {
  container: {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
  },
  item: {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  },
};

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="relative h-screen min-h-[600px] max-h-[1000px] flex items-center overflow-hidden">
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1800&q=85"
        alt="Intérieur chaleureux du café Maison Flour"
        fill
        className="object-cover object-center"
        priority
        sizes="100vw"
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />

      {/* Warm tint */}
      <div className="absolute inset-0 bg-[var(--color-gold-900)]/20 mix-blend-multiply" />

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          variants={stagger.container}
          initial="hidden"
          animate="visible"
          className="max-w-2xl"
        >
          {/* Badge */}
          <motion.div variants={stagger.item} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-white/90 text-xs font-body font-medium tracking-[0.15em] uppercase">
              <Coffee className="w-3 h-3 text-[var(--color-gold-400)]" />
              {t('badge')}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={stagger.item}
            className="font-display font-semibold text-5xl sm:text-6xl lg:text-7xl leading-[1.1] text-white mb-6"
          >
            {t('titleLine1')}
            <br />
            <span className="text-[var(--color-gold-400)] italic">{t('titleLine2')}</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={stagger.item}
            className="text-white/80 text-lg sm:text-xl font-body font-light leading-relaxed max-w-lg mb-10"
          >
            {t('subtitle')}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={stagger.item} className="flex flex-col sm:flex-row gap-4">
            <Link href="/carte">
              <Button size="lg" variant="primary">
                {t('ctaPrimary')}
              </Button>
            </Link>
            <Link href="#about">
              <Button size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10 hover:border-white/60">
                {t('ctaSecondary')}
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-white/50 text-[10px] tracking-[0.3em] uppercase font-body">
          {t('scrollHint')}
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-4 h-4 text-white/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
