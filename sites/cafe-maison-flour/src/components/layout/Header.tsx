'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { usePathname, useRouter, Link } from '@/i18n/navigation';
import ThemeToggle from './ThemeToggle';
import Container from '@/components/ui/Container';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import type { Locale } from '@/lib/types';

interface HeaderProps {
  locale: Locale;
}

export default function Header({ locale }: HeaderProps) {
  const t = useTranslations('nav');
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { href: '/', label: t('home') },
    { href: '/#about', label: t('about') },
    { href: '/carte', label: t('menu') },
    { href: '/#contact', label: t('contact') },
  ];

  const switchLocale = () => {
    const next: Locale = locale === 'fr' ? 'en' : 'fr';
    router.push(pathname, { locale: next });
  };

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-500',
        scrolled || menuOpen
          ? 'bg-[var(--color-background)]/95 backdrop-blur-md shadow-sm border-b border-[var(--color-border)]'
          : 'bg-transparent'
      )}
    >
      <Container>
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex flex-col leading-none group"
            aria-label="Maison Flour — retour à l'accueil"
          >
            <span
              className={cn(
                'font-display font-semibold text-xl md:text-2xl tracking-wide transition-colors duration-300',
                scrolled || menuOpen
                  ? 'text-[var(--color-foreground)]'
                  : 'text-white'
              )}
            >
              Maison Flour
            </span>
            <span
              className={cn(
                'text-[10px] tracking-[0.25em] uppercase font-body font-light transition-colors duration-300',
                scrolled || menuOpen
                  ? 'text-[var(--color-muted)]'
                  : 'text-white/70'
              )}
            >
              Café & Pâtisserie
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  'text-sm font-body font-medium tracking-wide transition-colors duration-300 hover:text-[var(--color-accent)] relative group',
                  scrolled
                    ? 'text-[var(--color-foreground)]'
                    : 'text-white/90 hover:text-white'
                )}
              >
                {label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[var(--color-accent)] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-2">
            {/* Language switcher */}
            <button
              onClick={switchLocale}
              className={cn(
                'hidden md:flex items-center text-xs font-body font-semibold tracking-[0.15em] uppercase px-2 py-1 rounded transition-colors duration-300',
                scrolled || menuOpen
                  ? 'text-[var(--color-muted)] hover:text-[var(--color-accent)]'
                  : 'text-white/70 hover:text-white'
              )}
              aria-label={`Switch language to ${t('switchLang')}`}
            >
              {t('switchLang')}
            </button>

            <ThemeToggle
              className={cn(
                'transition-colors duration-300',
                !scrolled && !menuOpen
                  ? '[&_svg]:text-white/80 hover:[&_svg]:text-white'
                  : ''
              )}
            />

            {/* Mobile burger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              className={cn(
                'md:hidden flex items-center justify-center w-9 h-9 rounded-full transition-colors duration-300',
                scrolled || menuOpen
                  ? 'text-[var(--color-foreground)] hover:bg-[var(--color-gold-500)]/10'
                  : 'text-white hover:bg-white/10'
              )}
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden border-t border-[var(--color-border)]"
          >
            <Container>
              <nav className="flex flex-col py-6 gap-1">
                {navLinks.map(({ href, label }, i) => (
                  <motion.div
                    key={href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.3 }}
                  >
                    <Link
                      href={href}
                      onClick={() => setMenuOpen(false)}
                      className="block py-3 text-base font-body font-medium text-[var(--color-foreground)] hover:text-[var(--color-accent)] transition-colors duration-200 border-b border-[var(--color-border)] last:border-0"
                    >
                      {label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.06, duration: 0.3 }}
                  className="pt-4"
                >
                  <button
                    onClick={() => { switchLocale(); setMenuOpen(false); }}
                    className="text-sm font-body font-semibold tracking-widest uppercase text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors duration-200"
                  >
                    {t('switchLang')}
                  </button>
                </motion.div>
              </nav>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
