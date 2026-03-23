import type { Metadata } from 'next';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { HOTEL_DATA, SPA_SERVICES } from '@/content/hotel-belvedere';
import Container from '@/components/ui/Container';
import FadeIn from '@/components/animations/FadeIn';
import SlideUp from '@/components/animations/SlideUp';
import CTA from '@/components/sections/CTA';
import { Clock } from 'lucide-react';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.spa' });
  return { title: t('title'), description: t('description') };
}

export default async function SpaPage() {
  const t = await getTranslations('spa');

  return (
    <>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={HOTEL_DATA.images.spa}
            alt="Spa & Bien-être — Hôtel Belvédère"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-navy/75" />
        </div>
        <div className="relative z-10 text-center px-4">
          <FadeIn>
            <p className="text-gold text-xs font-sans font-semibold tracking-[0.4em] uppercase mb-4">
              {t('tagline')}
            </p>
            <span className="block w-12 h-px bg-gold mx-auto mb-8" />
            <h1 className="font-display text-5xl lg:text-7xl italic font-semibold text-cream mb-6">
              {t('title')}
            </h1>
            <p className="text-cream/70 font-sans text-lg max-w-xl mx-auto">{t('subtitle')}</p>
          </FadeIn>
        </div>
      </section>

      {/* Description */}
      <section className="py-20 bg-cream dark:bg-navy">
        <Container size="md">
          <FadeIn className="text-center">
            <p className="text-navy/70 dark:text-cream/70 font-sans text-lg leading-relaxed">
              {t('description')}
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* Services */}
      <section className="pb-24 bg-cream dark:bg-navy">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SPA_SERVICES.map((service, i) => (
              <SlideUp key={service.id} delay={i * 0.1}>
                <article className="group bg-cream-dark dark:bg-navy-light overflow-hidden hover:shadow-xl transition-shadow duration-500">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={service.imageUrl}
                      alt={t(`services.${service.id}.name` as Parameters<typeof t>[0])}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {/* Price overlay */}
                    <div className="absolute bottom-4 right-4 bg-navy/90 backdrop-blur-sm px-4 py-2">
                      <p className="text-xs text-cream/60 font-sans">{t('from')}</p>
                      <p className="font-display text-xl font-semibold text-gold">{service.price}€</p>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-2 mb-3">
                      <Clock className="w-3.5 h-3.5 text-gold" />
                      <span className="text-xs text-navy/60 dark:text-cream/60 font-sans">
                        {service.duration} {t('duration')}
                      </span>
                    </div>
                    <h2 className="font-display text-xl italic font-semibold text-navy dark:text-cream mb-3">
                      {t(`services.${service.id}.name` as Parameters<typeof t>[0])}
                    </h2>
                    <p className="text-navy/60 dark:text-cream/60 font-sans text-sm leading-relaxed mb-6">
                      {t(`services.${service.id}.description` as Parameters<typeof t>[0])}
                    </p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center px-6 py-3 bg-gold text-white text-xs font-sans font-semibold tracking-widest uppercase hover:bg-gold-light transition-all duration-300"
                    >
                      {t('bookSpa')}
                    </Link>
                  </div>
                </article>
              </SlideUp>
            ))}
          </div>
        </Container>
      </section>

      {/* Pool highlight */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={HOTEL_DATA.images.pool}
            alt="Piscine à débordement — Hôtel Belvédère"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-navy/70" />
        </div>
        <Container className="relative z-10 text-center">
          <FadeIn>
            <h2 className="font-display text-4xl lg:text-5xl italic font-semibold text-cream mb-6">
              Piscine à Débordement
            </h2>
            <p className="text-cream/70 font-sans max-w-xl mx-auto mb-8">
              Plongez dans notre piscine à débordement chauffée offrant une vue panoramique sur la Méditerranée. Ouverte de 8h à 20h, accessible à tous nos résidents.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 border border-cream/60 text-cream text-sm font-sans font-semibold tracking-widest uppercase hover:bg-cream/10 hover:border-cream transition-all duration-300"
            >
              {t('bookSpa')}
            </Link>
          </FadeIn>
        </Container>
      </section>

      <CTA />
    </>
  );
}
