import type { Metadata } from 'next';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { ROOMS_DATA, HOTEL_DATA } from '@/content/hotel-belvedere';
import Container from '@/components/ui/Container';
import FadeIn from '@/components/animations/FadeIn';
import SlideUp from '@/components/animations/SlideUp';
import CTA from '@/components/sections/CTA';
import { Users, Maximize2, Check } from 'lucide-react';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.chambres' });
  return { title: t('title'), description: t('description') };
}

const ROOM_KEYS: Record<string, { titleKey: 'suiteTitle' | 'deluxeTitle' | 'classiqueTitle'; descKey: 'suiteDesc' | 'deluxeDesc' | 'classiqueDesc' }> = {
  'suite-panoramique': { titleKey: 'suiteTitle', descKey: 'suiteDesc' },
  'chambre-vue-mer': { titleKey: 'deluxeTitle', descKey: 'deluxeDesc' },
  'chambre-classique': { titleKey: 'classiqueTitle', descKey: 'classiqueDesc' },
};

export default async function ChambresPage() {
  const t = await getTranslations('rooms');

  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={HOTEL_DATA.images.roomSuite}
            alt="Chambres et suites — Hôtel Belvédère"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-navy/60" />
        </div>
        <div className="relative z-10 text-center px-4">
          <FadeIn>
            <p className="text-gold text-xs font-sans font-semibold tracking-[0.4em] uppercase mb-4">
              {t('tagline')}
            </p>
            <h1 className="font-display text-5xl lg:text-7xl italic font-semibold text-cream">
              {t('title')}
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-cream dark:bg-navy">
        <Container size="md">
          <FadeIn className="text-center">
            <p className="text-navy/70 dark:text-cream/70 font-sans text-lg leading-relaxed">
              {t('subtitle')}
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* Rooms list */}
      <section className="pb-24 bg-cream dark:bg-navy">
        <Container>
          <div className="space-y-16">
            {ROOMS_DATA.map((room, i) => {
              const keys = ROOM_KEYS[room.slug];
              const isReversed = i % 2 !== 0;

              return (
                <SlideUp key={room.id} delay={0.1}>
                  <article
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden shadow-xl ${
                      isReversed ? 'lg:flex lg:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Image */}
                    <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[500px] overflow-hidden">
                      <Image
                        src={room.imageUrl}
                        alt={keys ? t(keys.titleKey) : room.slug}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>

                    {/* Content */}
                    <div className="bg-cream-dark dark:bg-navy-light p-10 lg:p-14 flex flex-col justify-center">
                      {/* Price badge */}
                      <div className="inline-flex items-baseline gap-1 mb-6">
                        <span className="text-gold/60 text-sm font-sans">{t('from')}</span>
                        <span className="font-display text-4xl font-semibold text-gold">{room.priceFrom}€</span>
                        <span className="text-gold/60 text-sm font-sans">{t('perNight')}</span>
                      </div>

                      <h2 className="font-display text-3xl lg:text-4xl italic font-semibold text-navy dark:text-cream mb-4">
                        {keys ? t(keys.titleKey) : room.slug}
                      </h2>
                      <p className="text-navy/70 dark:text-cream/70 font-sans leading-relaxed mb-6">
                        {keys ? t(keys.descKey) : ''}
                      </p>

                      {/* Specs */}
                      <div className="flex gap-6 mb-8 pb-8 border-b border-cream-dark dark:border-navy">
                        <div className="flex items-center gap-2 text-navy/60 dark:text-cream/60">
                          <Maximize2 className="w-4 h-4 text-gold" />
                          <span className="font-sans text-sm">{room.surface} {t('surface')}</span>
                        </div>
                        <div className="flex items-center gap-2 text-navy/60 dark:text-cream/60">
                          <Users className="w-4 h-4 text-gold" />
                          <span className="font-sans text-sm">{room.capacity} {t('capacity')}</span>
                        </div>
                      </div>

                      {/* Features */}
                      <h3 className="text-xs font-sans font-semibold tracking-[0.3em] uppercase text-gold mb-4">
                        {t('features')}
                      </h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
                        {room.features.map(feature => (
                          <li key={feature} className="flex items-center gap-2">
                            <Check className="w-3.5 h-3.5 text-gold shrink-0" />
                            <span className="font-sans text-sm text-navy/70 dark:text-cream/70">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <Link
                        href="/contact"
                        className="inline-flex items-center self-start px-8 py-3.5 bg-gold text-white text-sm font-sans font-semibold tracking-widest uppercase hover:bg-gold-light transition-all duration-300 hover:scale-[1.02]"
                      >
                        {t('ctaBook')}
                      </Link>
                    </div>
                  </article>
                </SlideUp>
              );
            })}
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
