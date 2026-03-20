import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Container from '@/components/ui/Container';
import { Instagram, Facebook, MapPin, Phone, Mail } from 'lucide-react';
import { cafeInfo } from '@/content/maison-flour';

export default function Footer() {
  const t = useTranslations('footer');
  const tn = useTranslations('nav');

  const navLinks = [
    { href: '/', label: tn('home') },
    { href: '/#about', label: tn('about') },
    { href: '/carte', label: tn('menu') },
    { href: '/#contact', label: tn('contact') },
  ];

  return (
    <footer className="bg-[var(--color-charcoal-900)] text-[var(--color-cream-200)]">
      {/* Main footer */}
      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div>
              <h2 className="font-display font-semibold text-2xl text-[var(--color-cream-100)]">
                Maison Flour
              </h2>
              <p className="text-sm tracking-[0.2em] uppercase font-body font-light text-[var(--color-charcoal-400)] mt-0.5">
                {t('tagline')}
              </p>
            </div>
            <p className="text-sm text-[var(--color-charcoal-300)] leading-relaxed max-w-xs">
              Un café artisanal où chaque détail est soigné — du grain torréfié à la pâtisserie fraîche.
            </p>
            {/* Contact mini */}
            <div className="space-y-2 pt-2">
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(`${cafeInfo.address}, ${cafeInfo.city}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-[var(--color-charcoal-300)] hover:text-[var(--color-gold-400)] transition-colors group"
              >
                <MapPin className="w-3.5 h-3.5 text-[var(--color-gold-600)] group-hover:text-[var(--color-gold-400)]" />
                {cafeInfo.address}, {cafeInfo.city}
              </a>
              <a
                href={`tel:${cafeInfo.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-2 text-xs text-[var(--color-charcoal-300)] hover:text-[var(--color-gold-400)] transition-colors group"
              >
                <Phone className="w-3.5 h-3.5 text-[var(--color-gold-600)] group-hover:text-[var(--color-gold-400)]" />
                {cafeInfo.phone}
              </a>
              <a
                href={`mailto:${cafeInfo.email}`}
                className="flex items-center gap-2 text-xs text-[var(--color-charcoal-300)] hover:text-[var(--color-gold-400)] transition-colors group"
              >
                <Mail className="w-3.5 h-3.5 text-[var(--color-gold-600)] group-hover:text-[var(--color-gold-400)]" />
                {cafeInfo.email}
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-[var(--color-charcoal-400)] mb-5">
              {t('nav')}
            </h3>
            <ul className="space-y-3">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-[var(--color-charcoal-300)] hover:text-[var(--color-gold-400)] transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social + Horaires */}
          <div>
            <h3 className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-[var(--color-charcoal-400)] mb-5">
              {t('followUs')}
            </h3>
            <div className="flex gap-3 mb-8">
              <a
                href={cafeInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t('instagram')}
                className="flex items-center justify-center w-9 h-9 rounded-full border border-[var(--color-charcoal-700)] text-[var(--color-charcoal-300)] hover:border-[var(--color-gold-600)] hover:text-[var(--color-gold-400)] hover:bg-[var(--color-gold-500)]/10 transition-all duration-200"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={cafeInfo.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t('facebook')}
                className="flex items-center justify-center w-9 h-9 rounded-full border border-[var(--color-charcoal-700)] text-[var(--color-charcoal-300)] hover:border-[var(--color-gold-600)] hover:text-[var(--color-gold-400)] hover:bg-[var(--color-gold-500)]/10 transition-all duration-200"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
            {/* Quick hours */}
            <div className="space-y-1.5">
              <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[var(--color-charcoal-400)] mb-3">Horaires</p>
              <p className="text-xs text-[var(--color-charcoal-300)]">Lun – Ven · 7h30 – 19h00</p>
              <p className="text-xs text-[var(--color-charcoal-300)]">Sam – Dim · 8h00 – 20h00</p>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom bar */}
      <div className="border-t border-[var(--color-charcoal-800)]">
        <Container>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 py-5">
            <p className="text-xs text-[var(--color-charcoal-500)] text-center sm:text-left">
              {t('copyright')}
            </p>
            <p className="text-xs text-[var(--color-charcoal-600)]">
              Forge Digitale
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
}
