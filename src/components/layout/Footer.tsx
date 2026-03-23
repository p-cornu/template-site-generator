import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { Instagram, Facebook, MapPin, Phone, Mail } from 'lucide-react';

export default async function Footer() {
  const t = await getTranslations('footer');
  const tNav = await getTranslations('nav');

  const navLinks = [
    { href: '/chambres', label: tNav('chambres') },
    { href: '/restaurant', label: tNav('restaurant') },
    { href: '/spa', label: tNav('spa') },
    { href: '/galerie', label: tNav('galerie') },
    { href: '/contact', label: tNav('contact') },
  ];

  return (
    <footer className="bg-navy text-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <p className="font-display text-2xl font-semibold tracking-[0.15em] text-cream">
                BELVÉDÈRE
              </p>
              <span className="text-[10px] tracking-[0.3em] uppercase font-sans text-gold">
                EST. 1923
              </span>
            </div>
            <p className="text-cream/60 text-sm leading-relaxed font-sans">
              {t('description')}
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 flex items-center justify-center border border-cream/20 text-cream/60 hover:border-gold hover:text-gold transition-all duration-300"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 flex items-center justify-center border border-cream/20 text-cream/60 hover:border-gold hover:text-gold transition-all duration-300"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-sans font-semibold tracking-[0.2em] uppercase text-gold mb-6">
              {t('links')}
            </h3>
            <nav className="flex flex-col gap-3">
              {navLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-cream/60 hover:text-gold transition-colors duration-300 font-sans"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-sans font-semibold tracking-[0.2em] uppercase text-gold mb-6">
              Contact
            </h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <p className="text-sm text-cream/60 font-sans leading-relaxed">
                  12 Avenue de la Mer<br />
                  Èze-sur-Mer, 06360<br />
                  Alpes-Maritimes, France
                </p>
              </div>
              <a href="tel:+33493012345" className="flex items-center gap-3 text-sm text-cream/60 hover:text-gold transition-colors font-sans">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                +33 (0)4 93 01 23 45
              </a>
              <a href="mailto:contact@hotel-belvedere-eze.fr" className="flex items-center gap-3 text-sm text-cream/60 hover:text-gold transition-colors font-sans">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                contact@hotel-belvedere-eze.fr
              </a>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-xs font-sans font-semibold tracking-[0.2em] uppercase text-gold mb-6">
              Distinctions
            </h3>
            <div className="flex flex-col gap-3">
              {['Relais & Châteaux', 'Hôtel 5 Étoiles', 'Michelin Guide', 'Condé Nast Traveller'].map(item => (
                <div key={item} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                  <span className="text-sm text-cream/60 font-sans">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-cream/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream/40 font-sans text-center sm:text-left">
            {t('copyright')}
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-cream/40 hover:text-gold transition-colors font-sans">
              {t('legal')}
            </a>
            <a href="#" className="text-xs text-cream/40 hover:text-gold transition-colors font-sans">
              {t('privacy')}
            </a>
            <span className="text-xs text-cream/25 font-sans">{t('demo')}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
