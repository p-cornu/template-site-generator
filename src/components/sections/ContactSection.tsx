'use client';

import { useTranslations } from 'next-intl';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import FadeIn from '@/components/animations/FadeIn';
import Badge from '@/components/ui/Badge';

export default function ContactSection() {
  const t = useTranslations('contact');

  return (
    <section className="py-24 lg:py-36 bg-cream-50 dark:bg-charcoal-900 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left — Info */}
          <div>
            <FadeIn>
              <Badge>{t('badge')}</Badge>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="font-display text-4xl md:text-5xl text-charcoal-900 dark:text-cream-50 mt-6 mb-8 leading-[1.1]">
                {t('title')}
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="space-y-6">
                <InfoItem icon={MapPin}>
                  <p className="text-charcoal-600 dark:text-charcoal-300">
                    {t('address')}
                  </p>
                  <p className="text-charcoal-600 dark:text-charcoal-300">
                    {t('city')}
                  </p>
                </InfoItem>
                <InfoItem icon={Phone}>
                  <a
                    href={`tel:${t('phone').replace(/\s/g, '')}`}
                    className="text-charcoal-600 dark:text-charcoal-300 hover:text-gold-600 dark:hover:text-gold-400 transition-colors"
                  >
                    {t('phone')}
                  </a>
                </InfoItem>
                <InfoItem icon={Mail}>
                  <a
                    href={`mailto:${t('email')}`}
                    className="text-charcoal-600 dark:text-charcoal-300 hover:text-gold-600 dark:hover:text-gold-400 transition-colors"
                  >
                    {t('email')}
                  </a>
                </InfoItem>
                <InfoItem icon={Clock}>
                  <div className="space-y-2">
                    <div className="flex justify-between gap-8">
                      <span className="text-charcoal-500 dark:text-charcoal-400 text-sm">{t('lunch')}</span>
                      <span className="text-charcoal-700 dark:text-charcoal-200 text-sm font-medium">{t('lunchHours')}</span>
                    </div>
                    <div className="flex justify-between gap-8">
                      <span className="text-charcoal-500 dark:text-charcoal-400 text-sm">{t('dinner')}</span>
                      <span className="text-charcoal-700 dark:text-charcoal-200 text-sm font-medium">{t('dinnerHours')}</span>
                    </div>
                    <p className="text-charcoal-400 text-xs italic pt-1">{t('closedDay')}</p>
                  </div>
                </InfoItem>
              </div>
            </FadeIn>

            {/* Map placeholder */}
            <FadeIn delay={0.3}>
              <div className="mt-10 relative aspect-[4/3] bg-charcoal-100 dark:bg-charcoal-800 overflow-hidden border border-charcoal-200 dark:border-charcoal-700">
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                  <MapPin className="w-10 h-10 text-gold-500" />
                  <div className="text-center">
                    <p className="font-display text-xl text-charcoal-700 dark:text-charcoal-200">La Table Dorée</p>
                    <p className="text-charcoal-500 text-sm">{t('address')}, Paris</p>
                  </div>
                </div>
                {/* Grid pattern */}
                <div
                  className="absolute inset-0 opacity-20 dark:opacity-10"
                  style={{
                    backgroundImage:
                      'linear-gradient(to right, #c9a84c 1px, transparent 1px), linear-gradient(to bottom, #c9a84c 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                  }}
                />
              </div>
            </FadeIn>
          </div>

          {/* Right — Reservation form */}
          <FadeIn delay={0.2}>
            <div className="bg-white dark:bg-charcoal-800 p-8 lg:p-10 shadow-xl shadow-charcoal-900/5 border border-charcoal-100 dark:border-charcoal-700">
              <h3 className="font-display text-2xl lg:text-3xl text-charcoal-900 dark:text-cream-50 mb-8">
                {t('reservationTitle')}
              </h3>

              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <FormField label={t('formName')} type="text" />
                  <FormField label={t('formEmail')} type="email" />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <FormField label={t('formPhone')} type="tel" />
                  <FormField label={t('formGuests')} type="number" min="1" max="20" />
                </div>
                <FormField label={t('formDate')} type="date" />
                <div>
                  <label className="block text-xs tracking-[0.15em] uppercase font-body text-charcoal-500 dark:text-charcoal-400 mb-2">
                    {t('formMessage')}
                  </label>
                  <textarea
                    rows={4}
                    className="w-full bg-cream-50 dark:bg-charcoal-900 border border-charcoal-200 dark:border-charcoal-600 text-charcoal-900 dark:text-cream-100 text-sm px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors resize-none placeholder:text-charcoal-300 dark:placeholder:text-charcoal-600"
                    placeholder="..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gold-500 hover:bg-gold-400 text-charcoal-900 text-sm tracking-[0.18em] uppercase font-body font-medium py-4 transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/20 active:scale-[0.99] cursor-pointer"
                >
                  {t('formSubmit')}
                </button>

                <p className="text-charcoal-400 text-xs text-center">{t('formNote')}</p>
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function InfoItem({
  icon: Icon,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 bg-gold-500/10 flex items-center justify-center shrink-0">
        <Icon className="w-5 h-5 text-gold-600 dark:text-gold-400" />
      </div>
      <div className="pt-2">{children}</div>
    </div>
  );
}

function FormField({
  label,
  type,
  ...props
}: {
  label: string;
  type: string;
  min?: string;
  max?: string | number;
}) {
  return (
    <div>
      <label className="block text-xs tracking-[0.15em] uppercase font-body text-charcoal-500 dark:text-charcoal-400 mb-2">
        {label}
      </label>
      <input
        type={type}
        {...props}
        className="w-full bg-cream-50 dark:bg-charcoal-900 border border-charcoal-200 dark:border-charcoal-600 text-charcoal-900 dark:text-cream-100 text-sm px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors placeholder:text-charcoal-300 dark:placeholder:text-charcoal-600"
      />
    </div>
  );
}
