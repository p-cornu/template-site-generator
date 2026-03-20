'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { ArrowLeft, Utensils } from 'lucide-react';

export default function NotFound() {
  const t = useTranslations('notFound');

  return (
    <div className="min-h-screen bg-charcoal-900 flex flex-col items-center justify-center px-4 text-center">
      {/* Decorative */}
      <Utensils className="w-12 h-12 text-gold-500/40 mb-8" />

      <p className="text-gold-500 text-xs tracking-[0.4em] uppercase font-body mb-4">
        404
      </p>

      <h1 className="font-display text-5xl md:text-6xl text-cream-50 mb-6 leading-tight">
        {t('title')}
      </h1>

      <p className="text-charcoal-300 max-w-md leading-relaxed mb-12">
        {t('description')}
      </p>

      <Link
        href="/"
        className="inline-flex items-center gap-3 border border-gold-500/50 text-gold-400 hover:bg-gold-500/10 text-sm tracking-[0.2em] uppercase font-body px-8 py-3.5 transition-all duration-300 group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        {t('back')}
      </Link>
    </div>
  );
}
