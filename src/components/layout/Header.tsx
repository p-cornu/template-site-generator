'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { usePathname } from '@/i18n/navigation';
import { Link } from '@/i18n/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap } from 'lucide-react';
import ThemeToggle from '@/components/layout/ThemeToggle';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#features', labelKey: 'features' },
  { href: '#dashboard', labelKey: 'dashboard' },
  { href: '#pricing', labelKey: 'pricing' },
  { href: '#testimonials', labelKey: 'testimonials' },
] as const;

export default function Header() {
  const t = useTranslations('nav');
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const isEn = pathname.startsWith('/en') || pathname === '/en';
  const otherLocale = isEn ? 'fr' : 'en';

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  // Close menu on escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-500',
        scrolled
          ? 'glass-card border-b py-3'
          : 'bg-transparent border-b border-transparent py-5'
      )}
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group"
            aria-label={t('logoAlt')}
          >
            <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-violet-600 group-hover:bg-violet-500 transition-colors duration-300">
              <Zap className="w-4 h-4 text-white" fill="currentColor" />
              <span className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ boxShadow: '0 0 16px #7c3aed' }}
              />
            </div>
            <span className="font-display font-bold text-lg text-text-primary tracking-tight">
              Pulse<span className="text-violet-500">Track</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Navigation principale">
            {navLinks.map((link) => (
              <a
                key={link.labelKey}
                href={link.href}
                className="text-sm font-body font-medium text-text-muted hover:text-text-primary transition-colors duration-200 relative group"
              >
                {t(link.labelKey)}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-neon group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Desktop actions */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/"
              locale={otherLocale}
              className="text-xs font-body font-medium text-text-muted hover:text-text-primary px-2 py-1 rounded transition-colors duration-200"
            >
              {otherLocale.toUpperCase()}
            </Link>
            <ThemeToggle />
            <a
              href="#"
              className="text-sm font-body font-medium text-text-muted hover:text-text-primary transition-colors duration-200 px-3 py-2"
            >
              {t('login')}
            </a>
            <a
              href="#pricing"
              className={cn(
                'inline-flex items-center gap-1.5 text-sm font-body font-semibold',
                'px-5 py-2.5 rounded-lg',
                'bg-violet-600 text-white',
                'hover:bg-violet-500 transition-all duration-300',
                'hover:scale-[1.03] active:scale-[0.97]',
                'shadow-lg shadow-violet-600/30 hover:shadow-violet-500/40'
              )}
            >
              <Zap className="w-3.5 h-3.5" />
              {t('cta')}
            </a>
          </div>

          {/* Mobile: lang + toggle + burger */}
          <div className="flex md:hidden items-center gap-2">
            <Link
              href="/"
              locale={otherLocale}
              className="text-xs font-medium text-text-muted px-2 py-1"
            >
              {otherLocale.toUpperCase()}
            </Link>
            <ThemeToggle />
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? t('close') : t('open')}
              aria-expanded={menuOpen}
              className="flex items-center justify-center w-9 h-9 rounded-lg text-text-muted hover:text-text-primary hover:bg-bg-card transition-all"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="md:hidden overflow-hidden glass-card border-t"
          >
            <nav className="flex flex-col gap-1 px-4 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.labelKey}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="px-3 py-3 text-sm font-medium text-text-muted hover:text-text-primary hover:bg-bg-card rounded-lg transition-all duration-200"
                >
                  {t(link.labelKey)}
                </a>
              ))}
              <div className="mt-3 pt-3 border-t border-border-subtle flex flex-col gap-2">
                <a
                  href="#"
                  className="px-3 py-3 text-sm font-medium text-text-muted hover:text-text-primary text-center rounded-lg hover:bg-bg-card transition-all"
                >
                  {t('login')}
                </a>
                <a
                  href="#pricing"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center gap-2 py-3 rounded-lg bg-violet-600 text-white text-sm font-semibold hover:bg-violet-500 transition-colors"
                >
                  <Zap className="w-3.5 h-3.5" />
                  {t('cta')}
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
