import type { Metadata } from 'next';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { HOTEL_DATA, RESTAURANT_MENU } from '@/content/hotel-belvedere';
import Container from '@/components/ui/Container';
import FadeIn from '@/components/animations/FadeIn';
import SlideUp from '@/components/animations/SlideUp';
import CTA from '@/components/sections/CTA';
import { Clock, Utensils } from 'lucide-react';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.restaurant' });
  return { title: t('title'), description: t('description') };
}

export default async function RestaurantPage() {
  const t = await getTranslations('restaurant');

  const menuSections = [
    { key: 'starters', items: RESTAURANT_MENU.starters },
    { key: 'mains', items: RESTAURANT_MENU.mains },
    { key: 'desserts', items: RESTAURANT_MENU.desserts },
  ] as const;

  return (
    <>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={HOTEL_DATA.images.restaurant}
            alt="La Terrasse du Belvédère"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent" />
        </div>
        <Container className="relative z-10 pb-16">
          <FadeIn>
            <p className="text-gold text-xs font-sans font-semibold tracking-[0.4em] uppercase mb-4">
              {t('tagline')}
            </p>
            <h1 className="font-display text-5xl lg:text-7xl italic font-semibold text-cream mb-4">
              {t('title')}
            </h1>
            <p className="text-cream/70 font-sans text-lg max-w-xl">{t('subtitle')}</p>
          </FadeIn>
        </Container>
      </section>

      {/* About + hours */}
      <section className="py-20 bg-cream dark:bg-navy">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <p className="text-navy/70 dark:text-cream/70 font-sans text-lg leading-relaxed mb-8">
                {t('description')}
              </p>
              <div className="flex items-start gap-4 p-6 bg-cream-dark dark:bg-navy-light">
                <Clock className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                <div>
                  <p className="font-sans font-semibold text-navy dark:text-cream mb-1">Horaires</p>
                  <p className="text-navy/60 dark:text-cream/60 text-sm font-sans">{t('hours')}</p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={HOTEL_DATA.images.restaurantFood}
                  alt="Gastronomie méditerranéenne"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Menu */}
      <section className="py-20 bg-navy">
        <Container size="md">
          <SlideUp className="text-center mb-16">
            <p className="text-gold text-xs font-sans font-semibold tracking-[0.4em] uppercase mb-4">
              La Carte
            </p>
            <span className="block w-12 h-px bg-gold mx-auto mb-6" />
            <h2 className="font-display text-4xl italic font-semibold text-cream">
              {t('wine')}
            </h2>
            <p className="text-cream/50 font-sans mt-3 flex items-center justify-center gap-2">
              <Utensils className="w-4 h-4 text-gold" />
              {t('wineDesc')}
            </p>
          </SlideUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {menuSections.map(({ key, items }, si) => (
              <SlideUp key={key} delay={si * 0.1}>
                <div>
                  <h3 className="font-display text-2xl italic font-semibold text-gold mb-6 pb-4 border-b border-gold/20">
                    {t(key)}
                  </h3>
                  <div className="space-y-6">
                    {items.map((item, i) => (
                      <div key={i} className="group">
                        <div className="flex items-start justify-between gap-4 mb-1">
                          <h4 className="font-sans font-medium text-cream text-sm group-hover:text-gold transition-colors">
                            {item.name}
                          </h4>
                          <span className="font-display text-gold font-semibold shrink-0">{item.price}€</span>
                        </div>
                        <p className="font-sans text-cream/50 text-xs leading-relaxed">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </SlideUp>
            ))}
          </div>

          <SlideUp className="text-center mt-16">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gold text-white text-sm font-sans font-semibold tracking-widest uppercase hover:bg-gold-light transition-all duration-300 hover:scale-[1.02]"
            >
              {t('reserve')}
            </Link>
          </SlideUp>
        </Container>
      </section>

      <CTA />
    </>
  );
}
