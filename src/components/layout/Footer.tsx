'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { MapPin, Phone, Mail, Star } from 'lucide-react';

export default function Footer() {
  const t = useTranslations('footer');
  const tn = useTranslations('nav');
  const tc = useTranslations('contact');

  return (
    <footer className="bg-charcoal-900 dark:bg-charcoal-950 text-cream-200 border-t border-charcoal-800">
      {/* Top section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="block mb-4">
              <span className="font-display text-2xl text-cream-50 tracking-wider">
                La Table Dorée
              </span>
              <div className="flex items-center gap-1.5 mt-1">
                <Star className="w-3 h-3 fill-gold-400 text-gold-400" />
                <Star className="w-3 h-3 fill-gold-400 text-gold-400" />
                <span className="text-gold-400 text-xs tracking-wider ml-1">{t('stars')}</span>
              </div>
            </Link>
            <p className="text-charcoal-400 text-sm leading-relaxed max-w-[220px]">
              {t('tagline')}
            </p>
            <div className="mt-6 w-12 h-px bg-gold-500/40" />
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-cream-100 text-xs tracking-[0.25em] uppercase font-body mb-5">
              {t('navTitle')}
            </h3>
            <ul className="space-y-3">
              {(['home', 'menu', 'galerie', 'contact'] as const).map((key) => (
                <li key={key}>
                  <Link
                    href={key === 'home' ? '/' : `/${key}`}
                    className="text-charcoal-400 hover:text-gold-400 text-sm transition-colors duration-200"
                  >
                    {tn(key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-cream-100 text-xs tracking-[0.25em] uppercase font-body mb-5">
              {t('contactTitle')}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-charcoal-400">
                <MapPin className="w-4 h-4 text-gold-500 mt-0.5 shrink-0" />
                <span>
                  {tc('address')}
                  <br />
                  {tc('city')}
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm text-charcoal-400">
                <Phone className="w-4 h-4 text-gold-500 shrink-0" />
                <span>{tc('phone')}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-charcoal-400">
                <Mail className="w-4 h-4 text-gold-500 shrink-0" />
                <span>{tc('email')}</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-cream-100 text-xs tracking-[0.25em] uppercase font-body mb-5">
              {t('hoursTitle')}
            </h3>
            <ul className="space-y-2 text-sm text-charcoal-400">
              <li>{t('lunchShort')}</li>
              <li>{t('dinnerShort')}</li>
              <li className="text-charcoal-500 italic text-xs mt-2">{t('closedShort')}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-charcoal-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-charcoal-500 text-xs">
            {t('copyright')}
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/legal"
              className="text-charcoal-500 hover:text-charcoal-300 text-xs transition-colors"
            >
              {t('legal')}
            </Link>
            <Link
              href="/privacy"
              className="text-charcoal-500 hover:text-charcoal-300 text-xs transition-colors"
            >
              {t('privacy')}
            </Link>
            <span className="text-charcoal-600 text-xs">
              {t('madeBy')}{' '}
              <span className="text-gold-500 hover:text-gold-400 transition-colors cursor-pointer">
                Forge Digitale
              </span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
