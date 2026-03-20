'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import ThemeToggle from './ThemeToggle';
import { cn } from '@/lib/utils';

const NAV_LINKS = [
  { href: '/', key: 'home' as const },
  { href: '/menu', key: 'menu' as const },
  { href: '/galerie', key: 'galerie' as const },
  { href: '/contact', key: 'contact' as const },
] as const;

export default function Header() {
  const t = useTranslations('nav');
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  const isHomePage = /^\/(fr|en)(\/)?$/.test(pathname);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          isScrolled || isMobileOpen
            ? 'bg-cream-50/95 dark:bg-charcoal-900/95 backdrop-blur-md shadow-lg shadow-charcoal-900/5'
            : isHomePage
            ? 'bg-transparent'
            : 'bg-cream-50/95 dark:bg-charcoal-900/95 backdrop-blur-md'
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex flex-col items-start leading-none group"
            >
              <span
                className={cn(
                  'font-display text-xl lg:text-2xl tracking-wider transition-colors duration-300',
                  isScrolled || !isHomePage || isMobileOpen
                    ? 'text-charcoal-900 dark:text-cream-50'
                    : 'text-white',
                  'group-hover:text-gold-500'
                )}
              >
                La Table Dorée
              </span>
              <span className="text-gold-500 text-[10px] tracking-[0.3em] uppercase font-body">
                Paris · Gastronomie
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.key}
                  href={link.href}
                  className={cn(
                    'text-xs tracking-[0.2em] uppercase font-body transition-colors duration-200',
                    isScrolled || !isHomePage
                      ? 'text-charcoal-500 dark:text-charcoal-200 hover:text-gold-500 dark:hover:text-gold-400'
                      : 'text-white/80 hover:text-white'
                  )}
                >
                  {t(link.key)}
                </Link>
              ))}
            </nav>

            {/* Right: lang + theme + CTA */}
            <div className="flex items-center gap-2 lg:gap-3">
              {/* Language switcher */}
              <LanguageSwitcher
                isScrolled={isScrolled}
                isHomePage={isHomePage}
                isMobileOpen={isMobileOpen}
              />

              <ThemeToggle
                className={cn(
                  !isScrolled && isHomePage && !isMobileOpen
                    ? 'text-white/70 hover:text-white'
                    : ''
                )}
              />

              {/* Desktop CTA */}
              <Link
                href="/contact"
                className={cn(
                  'hidden lg:inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-body px-6 py-2.5 border transition-all duration-300',
                  isScrolled || !isHomePage
                    ? 'border-gold-500/60 text-gold-600 dark:text-gold-400 hover:bg-gold-500/10'
                    : 'border-white/40 text-white hover:bg-white/10'
                )}
              >
                {t('reserve')}
              </Link>

              {/* Mobile hamburger */}
              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                aria-label={isMobileOpen ? t('closeMenu') : t('openMenu')}
                className={cn(
                  'lg:hidden flex items-center justify-center w-9 h-9 transition-colors',
                  isScrolled || !isHomePage || isMobileOpen
                    ? 'text-charcoal-700 dark:text-charcoal-100'
                    : 'text-white'
                )}
              >
                {isMobileOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-16 left-0 right-0 z-40 bg-cream-50/98 dark:bg-charcoal-900/98 backdrop-blur-md border-b border-gold-500/10 lg:hidden overflow-hidden"
          >
            <nav className="flex flex-col py-6 px-4 sm:px-6 gap-1">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.key}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    className="flex items-center gap-4 py-3 text-sm tracking-[0.2em] uppercase text-charcoal-600 dark:text-charcoal-200 hover:text-gold-500 dark:hover:text-gold-400 transition-colors border-b border-charcoal-100 dark:border-charcoal-800 last:border-0"
                  >
                    <span className="text-gold-500 text-xs">0{i + 1}</span>
                    {t(link.key)}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                className="pt-4"
              >
                <Link
                  href="/contact"
                  className="flex items-center justify-center w-full py-3.5 border border-gold-500/60 text-gold-600 dark:text-gold-400 text-xs tracking-[0.2em] uppercase hover:bg-gold-500/10 transition-colors"
                >
                  {t('reserve')}
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function LanguageSwitcher({
  isScrolled,
  isHomePage,
  isMobileOpen,
}: {
  isScrolled: boolean;
  isHomePage: boolean;
  isMobileOpen: boolean;
}) {
  const pathname = usePathname();
  const isFr = pathname.startsWith('/fr') || (!pathname.startsWith('/en') && pathname === '/');

  const textClass = cn(
    'text-xs font-body tracking-wider transition-colors duration-200',
    isScrolled || !isHomePage || isMobileOpen
      ? 'text-charcoal-400 dark:text-charcoal-300'
      : 'text-white/60'
  );

  const activeClass = cn(
    'text-xs font-body tracking-wider font-semibold',
    isScrolled || !isHomePage || isMobileOpen
      ? 'text-gold-500'
      : 'text-white'
  );

  return (
    <div className="flex items-center gap-1.5">
      <Link
        href="/"
        locale="fr"
        className={isFr ? activeClass : cn(textClass, 'hover:text-gold-500')}
      >
        FR
      </Link>
      <span className={cn('text-[10px]', isScrolled || !isHomePage || isMobileOpen ? 'text-charcoal-300 dark:text-charcoal-600' : 'text-white/30')}>
        /
      </span>
      <Link
        href="/"
        locale="en"
        className={!isFr ? activeClass : cn(textClass, 'hover:text-gold-500')}
      >
        EN
      </Link>
    </div>
  );
}
