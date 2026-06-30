import { useTranslations } from 'next-intl';
import Container from '@/components/ui/Container';
import FadeIn from '@/components/animations/FadeIn';
import SlideUp from '@/components/animations/SlideUp';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { cafeInfo, openingHours } from '@/content/maison-flour';

export default function Contact() {
  const t = useTranslations('contact');

  return (
    <section id="contact" className="section-py bg-[var(--color-surface)]">
      <Container>
        {/* Header */}
        <div className="text-center mb-20">
          <FadeIn>
            <span className="inline-block text-xs font-body font-semibold tracking-[0.25em] uppercase text-[var(--color-gold-500)] mb-5">
              {t('badge')}
            </span>
            <h2 className="font-display font-semibold text-4xl sm:text-5xl text-[var(--color-foreground)]">
              {t('title')}
            </h2>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          {/* Info */}
          <div className="space-y-10">
            {/* Address */}
            <SlideUp>
              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-xl bg-[var(--color-gold-500)]/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[var(--color-gold-500)]" />
                </div>
                <div>
                  <p className="text-xs font-body font-semibold tracking-[0.15em] uppercase text-[var(--color-muted)] mb-1">
                    {t('addressLabel')}
                  </p>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(`${cafeInfo.address}, ${cafeInfo.city}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-foreground)] font-body font-medium hover:text-[var(--color-gold-500)] transition-colors duration-200"
                  >
                    {cafeInfo.address}
                    <br />
                    {cafeInfo.city}
                  </a>
                </div>
              </div>
            </SlideUp>

            {/* Hours */}
            <SlideUp delay={0.08}>
              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-xl bg-[var(--color-gold-500)]/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-[var(--color-gold-500)]" />
                </div>
                <div>
                  <p className="text-xs font-body font-semibold tracking-[0.15em] uppercase text-[var(--color-muted)] mb-2">
                    {t('hoursLabel')}
                  </p>
                  <ul className="space-y-1">
                    {openingHours.map((oh) => (
                      <li key={oh.days} className="flex gap-3 text-sm text-[var(--color-foreground)]">
                        <span className="font-medium min-w-[140px]">{oh.days}</span>
                        <span className="text-[var(--color-muted)]">{oh.hours}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </SlideUp>

            {/* Phone */}
            <SlideUp delay={0.12}>
              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-xl bg-[var(--color-gold-500)]/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-[var(--color-gold-500)]" />
                </div>
                <div>
                  <p className="text-xs font-body font-semibold tracking-[0.15em] uppercase text-[var(--color-muted)] mb-1">
                    {t('phoneLabel')}
                  </p>
                  <a
                    href={`tel:${cafeInfo.phone.replace(/\s/g, '')}`}
                    className="text-[var(--color-foreground)] font-body font-medium hover:text-[var(--color-gold-500)] transition-colors duration-200"
                  >
                    {cafeInfo.phone}
                  </a>
                </div>
              </div>
            </SlideUp>

            {/* Email */}
            <SlideUp delay={0.16}>
              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-xl bg-[var(--color-gold-500)]/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-[var(--color-gold-500)]" />
                </div>
                <div>
                  <p className="text-xs font-body font-semibold tracking-[0.15em] uppercase text-[var(--color-muted)] mb-1">
                    {t('emailLabel')}
                  </p>
                  <a
                    href={`mailto:${cafeInfo.email}`}
                    className="text-[var(--color-foreground)] font-body font-medium hover:text-[var(--color-gold-500)] transition-colors duration-200"
                  >
                    {cafeInfo.email}
                  </a>
                </div>
              </div>
            </SlideUp>
          </div>

          {/* Map placeholder */}
          <FadeIn delay={0.15}>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-[var(--color-charcoal-100)] dark:bg-[var(--color-charcoal-800)] border border-[var(--color-border)]">
              {/* Static map image fallback (no API key needed) */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                <div className="w-16 h-16 rounded-full bg-[var(--color-gold-500)]/10 flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-[var(--color-gold-500)]" />
                </div>
                <div className="text-center">
                  <p className="font-body font-semibold text-[var(--color-foreground)] text-sm">
                    {cafeInfo.address}
                  </p>
                  <p className="text-xs text-[var(--color-muted)]">{cafeInfo.city}</p>
                </div>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(`${cafeInfo.address}, ${cafeInfo.city}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--color-gold-500)] text-white text-xs font-body font-semibold tracking-wide hover:bg-[var(--color-gold-600)] transition-colors duration-200 shadow-md shadow-[var(--color-gold-500)]/25"
                >
                  {t('mapPlaceholder')}
                </a>
              </div>
              {/* Decorative grid */}
              <div
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: 'linear-gradient(var(--color-gold-500) 1px, transparent 1px), linear-gradient(90deg, var(--color-gold-500) 1px, transparent 1px)',
                  backgroundSize: '40px 40px',
                }}
              />
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
