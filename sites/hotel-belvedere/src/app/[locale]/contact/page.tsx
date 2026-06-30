import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Container from '@/components/ui/Container';
import FadeIn from '@/components/animations/FadeIn';
import SlideUp from '@/components/animations/SlideUp';
import { HOTEL_DATA } from '@/content/hotel-belvedere';
import { MapPin, Phone, Mail, Clock, Car, Train, Plane } from 'lucide-react';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.contact' });
  return { title: t('title'), description: t('description') };
}

export default async function ContactPage() {
  const t = await getTranslations('contact');
  const tLoc = await getTranslations('location');

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 bg-navy text-cream">
        <Container>
          <FadeIn className="text-center">
            <h1 className="font-display text-5xl lg:text-6xl italic font-semibold text-cream mb-4">
              {t('title')}
            </h1>
            <p className="text-cream/60 font-sans max-w-xl mx-auto">{t('subtitle')}</p>
          </FadeIn>
        </Container>
      </section>

      <section className="py-20 bg-cream dark:bg-navy">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact form */}
            <SlideUp>
              <div className="bg-cream-dark dark:bg-navy-light p-8 lg:p-10">
                <h2 className="font-display text-2xl italic font-semibold text-navy dark:text-cream mb-8">
                  Envoyer un message
                </h2>
                <form className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-sans font-semibold tracking-widest uppercase text-navy/60 dark:text-cream/60 mb-2">
                        {t('name')}
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-cream dark:bg-navy border border-cream-dark dark:border-navy-light text-navy dark:text-cream font-sans text-sm focus:outline-none focus:border-gold transition-colors"
                        placeholder="Marie Dupont"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-sans font-semibold tracking-widest uppercase text-navy/60 dark:text-cream/60 mb-2">
                        {t('phone')}
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 bg-cream dark:bg-navy border border-cream-dark dark:border-navy-light text-navy dark:text-cream font-sans text-sm focus:outline-none focus:border-gold transition-colors"
                        placeholder="+33 6 00 00 00 00"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-sans font-semibold tracking-widest uppercase text-navy/60 dark:text-cream/60 mb-2">
                      {t('email')}
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-cream dark:bg-navy border border-cream-dark dark:border-navy-light text-navy dark:text-cream font-sans text-sm focus:outline-none focus:border-gold transition-colors"
                      placeholder="marie@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-sans font-semibold tracking-widest uppercase text-navy/60 dark:text-cream/60 mb-2">
                      {t('dates')}
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-cream dark:bg-navy border border-cream-dark dark:border-navy-light text-navy dark:text-cream font-sans text-sm focus:outline-none focus:border-gold transition-colors"
                      placeholder="15 juillet – 20 juillet 2026"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-sans font-semibold tracking-widest uppercase text-navy/60 dark:text-cream/60 mb-2">
                      {t('message')}
                    </label>
                    <textarea
                      rows={5}
                      className="w-full px-4 py-3 bg-cream dark:bg-navy border border-cream-dark dark:border-navy-light text-navy dark:text-cream font-sans text-sm focus:outline-none focus:border-gold transition-colors resize-none"
                      placeholder={t('messagePlaceholder')}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-gold text-white text-sm font-sans font-semibold tracking-widest uppercase hover:bg-gold-light transition-all duration-300 hover:scale-[1.01]"
                  >
                    {t('send')}
                  </button>
                </form>
              </div>
            </SlideUp>

            {/* Info column */}
            <div className="space-y-10">
              <SlideUp delay={0.1}>
                <h2 className="font-display text-2xl italic font-semibold text-navy dark:text-cream mb-8">
                  {t('info')}
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gold/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="font-sans font-semibold text-navy dark:text-cream text-sm mb-1">Adresse</p>
                      <p className="text-navy/60 dark:text-cream/60 font-sans text-sm leading-relaxed">
                        {HOTEL_DATA.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gold/10 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="font-sans font-semibold text-navy dark:text-cream text-sm mb-1">Téléphone</p>
                      <a href={`tel:${HOTEL_DATA.phone}`} className="text-gold hover:text-gold-light font-sans text-sm transition-colors">
                        {HOTEL_DATA.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gold/10 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="font-sans font-semibold text-navy dark:text-cream text-sm mb-1">Email</p>
                      <a href={`mailto:${HOTEL_DATA.email}`} className="text-gold hover:text-gold-light font-sans text-sm transition-colors">
                        {HOTEL_DATA.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gold/10 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="font-sans font-semibold text-navy dark:text-cream text-sm mb-1">{t('hours')}</p>
                      <p className="text-navy/60 dark:text-cream/60 font-sans text-sm">{t('concierge')}</p>
                    </div>
                  </div>
                </div>
              </SlideUp>

              {/* How to reach */}
              <SlideUp delay={0.2}>
                <h3 className="font-display text-xl italic font-semibold text-navy dark:text-cream mb-6">
                  {tLoc('howToReach')}
                </h3>
                <div className="space-y-4">
                  {[
                    { icon: Car, text: tLoc('bycar') },
                    { icon: Train, text: tLoc('bytrain') },
                    { icon: Plane, text: tLoc('byplane') },
                  ].map(({ icon: Icon, text }, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Icon className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                      <p className="text-navy/60 dark:text-cream/60 font-sans text-sm">{text}</p>
                    </div>
                  ))}
                  <p className="text-gold/80 font-sans text-sm italic pl-7">{tLoc('shuttle')}</p>
                </div>
              </SlideUp>

              {/* Map placeholder */}
              <SlideUp delay={0.25}>
                <div className="relative bg-cream-dark dark:bg-navy-light h-48 flex items-center justify-center overflow-hidden border border-cream-dark dark:border-navy-light">
                  <div className="text-center">
                    <MapPin className="w-8 h-8 text-gold mx-auto mb-2" />
                    <p className="font-sans text-sm text-navy/60 dark:text-cream/60">Èze-sur-Mer</p>
                    <p className="font-sans text-xs text-navy/40 dark:text-cream/40">Alpes-Maritimes · France</p>
                  </div>
                  {/* Grid lines for map feel */}
                  <div className="absolute inset-0 opacity-10 pointer-events-none"
                    style={{
                      backgroundImage: 'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
                      backgroundSize: '32px 32px',
                    }}
                  />
                </div>
              </SlideUp>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
