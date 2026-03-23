'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname, useRouter } from '@/i18n/navigation';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '/chambres', key: 'chambres' },
  { href: '/restaurant', key: 'restaurant' },
  { href: '/spa', key: 'spa' },
  { href: '/galerie', key: 'galerie' },
  { href: '/contact', key: 'contact' },
] as const;

export default function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const switchLocale = () => {
    const nextLocale = locale === 'fr' ? 'en' : 'fr';
    router.replace(pathname, { locale: nextLocale });
  };

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + '/');

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled
            ? 'bg-cream/95 dark:bg-navy/95 backdrop-blur-sm shadow-sm'
            : 'bg-transparent'
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex flex-col leading-none group">
              <span
                className={cn(
                  'font-display text-xl font-semibold tracking-[0.15em] transition-colors duration-300',
                  scrolled || mobileOpen
                    ? 'text-navy dark:text-cream'
                    : 'text-cream'
                )}
              >
                BELVÉDÈRE
              </span>
              <span
                className={cn(
                  'text-[10px] tracking-[0.3em] uppercase font-sans transition-colors duration-300',
                  scrolled || mobileOpen ? 'text-gold' : 'text-gold'
                )}
              >
                EST. 1923
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map(({ href, key }) => (
                <Link
                  key={key}
                  href={href}
                  className={cn(
                    'relative text-sm tracking-wide font-sans font-medium transition-colors duration-300 group py-1',
                    scrolled
                      ? 'text-navy dark:text-cream hover:text-gold dark:hover:text-gold'
                      : 'text-cream/90 hover:text-cream',
                    isActive(href) && 'text-gold dark:text-gold'
                  )}
                >
                  {t(key)}
                  <span
                    className={cn(
                      'absolute bottom-0 left-0 h-px bg-gold transition-all duration-300',
                      isActive(href) ? 'w-full' : 'w-0 group-hover:w-full'
                    )}
                  />
                </Link>
              ))}
            </nav>

            {/* Right side controls */}
            <div className="flex items-center gap-2">
              {/* Language switcher */}
              <button
                onClick={switchLocale}
                aria-label={t('language')}
                className={cn(
                  'hidden sm:flex items-center text-xs font-sans font-semibold tracking-widest uppercase px-2 py-1 rounded transition-colors duration-300',
                  scrolled
                    ? 'text-navy dark:text-cream hover:text-gold dark:hover:text-gold'
                    : 'text-cream/80 hover:text-cream'
                )}
              >
                {locale === 'fr' ? 'EN' : 'FR'}
              </button>

              {/* Theme toggle */}
              <div
                className={cn(
                  scrolled ? '' : '[&_button]:text-cream [&_button]:hover:text-gold [&_button:hover]:bg-white/10'
                )}
              >
                <ThemeToggle />
              </div>

              {/* CTA button */}
              <Link
                href="/contact"
                className={cn(
                  'hidden lg:inline-flex items-center px-5 py-2.5 text-xs font-sans font-semibold tracking-widest uppercase transition-all duration-300',
                  'bg-gold text-white hover:bg-gold-light shadow-lg shadow-gold/20 hover:shadow-gold/30 hover:scale-[1.02]'
                )}
              >
                {t('reserver')}
              </Link>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label={mobileOpen ? t('fermer') : t('menu')}
                className={cn(
                  'lg:hidden flex items-center justify-center w-9 h-9 rounded transition-colors duration-300',
                  scrolled || mobileOpen
                    ? 'text-navy dark:text-cream hover:text-gold'
                    : 'text-cream hover:text-gold'
                )}
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-navy/98 backdrop-blur-md lg:hidden"
          >
            <div className="flex flex-col h-full pt-24 pb-12 px-8">
              <nav className="flex flex-col gap-1">
                {navLinks.map(({ href, key }, i) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -24 }}
                    transition={{ duration: 0.4, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      href={href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        'block py-4 font-display text-3xl italic text-cream/80 hover:text-gold transition-colors duration-300 border-b border-cream/10',
                        isActive(href) && 'text-gold'
                      )}
                    >
                      {t(key)}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="mt-8 flex items-center gap-4"
              >
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex-1 text-center py-3.5 bg-gold text-white text-sm font-sans font-semibold tracking-widest uppercase hover:bg-gold-light transition-colors"
                >
                  {t('reserver')}
                </Link>
                <button
                  onClick={() => { switchLocale(); setMobileOpen(false); }}
                  className="px-4 py-3.5 border border-cream/30 text-cream text-xs font-sans font-bold tracking-widest uppercase hover:border-gold hover:text-gold transition-colors"
                >
                  {locale === 'fr' ? 'EN' : 'FR'}
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-auto"
              >
                <p className="text-cream/30 text-xs tracking-widest uppercase font-sans">
                  Hôtel Belvédère · Èze-sur-Mer · Est. 1923
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
