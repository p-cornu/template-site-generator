'use client';

import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { motion, cubicBezier, type Variants } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { HOTEL_DATA } from '@/content/hotel-belvedere';

const easeOutExpo = cubicBezier(0.16, 1, 0.3, 1);

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const child: Variants = {
  hidden: { y: 60, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 1, ease: easeOutExpo },
  },
};

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={HOTEL_DATA.images.hero}
          alt="Vue sur la Méditerranée depuis l'Hôtel Belvédère"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy/65 via-navy/45 to-navy/75" />
        {/* Subtle vignette */}
        <div className="absolute inset-0 bg-radial-[ellipse_at_center] from-transparent via-transparent to-navy/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Tagline */}
          <motion.p
            variants={child}
            className="text-gold text-xs sm:text-sm font-sans font-semibold tracking-[0.4em] uppercase mb-8"
          >
            {t('tagline')}
          </motion.p>

          {/* Gold decorative line */}
          <motion.span
            variants={child}
            className="block w-12 h-px bg-gold mb-8"
          />

          {/* Main title */}
          <motion.h1
            variants={child}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl italic text-cream font-semibold leading-[1.05] mb-8"
          >
            {t('title').split('\n').map((line, i) => (
              <span key={i} className="block">{line}</span>
            ))}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={child}
            className="text-cream/80 text-base sm:text-lg font-sans font-light max-w-xl leading-relaxed mb-10"
          >
            {t('subtitle')}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={child}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gold text-white text-sm font-sans font-semibold tracking-widest uppercase hover:bg-gold-light transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-gold/20"
            >
              {t('ctaReserver')}
            </Link>
            <Link
              href="/chambres"
              className="inline-flex items-center px-8 py-4 border border-cream/60 text-cream text-sm font-sans font-semibold tracking-widest uppercase hover:bg-cream/10 hover:border-cream transition-all duration-300"
            >
              {t('ctaDecouvrir')}
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5, ease: 'easeOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-cream/50 text-[10px] tracking-[0.3em] uppercase font-sans">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-5 h-5 text-cream/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
