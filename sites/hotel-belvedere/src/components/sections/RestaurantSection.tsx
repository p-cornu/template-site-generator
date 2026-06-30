import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { HOTEL_DATA, RESTAURANT_MENU } from '@/content/hotel-belvedere';
import Container from '@/components/ui/Container';
import FadeIn from '@/components/animations/FadeIn';
import { ArrowRight, Clock } from 'lucide-react';

export default async function RestaurantSection() {
  const t = await getTranslations('restaurant');

  const featuredItems = [
    ...RESTAURANT_MENU.starters.slice(0, 1),
    ...RESTAURANT_MENU.mains.slice(0, 1),
    ...RESTAURANT_MENU.desserts.slice(0, 1),
  ];

  return (
    <section className="py-24 lg:py-32 bg-navy overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Image */}
          <FadeIn className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={HOTEL_DATA.images.restaurant}
                alt="La Terrasse du Belvédère — restaurant vue mer"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
            </div>
            {/* Floating food image */}
            <div className="absolute -bottom-8 -right-8 w-48 h-48 hidden lg:block overflow-hidden border-4 border-navy">
              <Image
                src={HOTEL_DATA.images.restaurantFood}
                alt="Cuisine gastronomique méditerranéenne"
                fill
                className="object-cover"
                sizes="200px"
              />
            </div>
          </FadeIn>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <FadeIn>
              <p className="text-gold text-xs font-sans font-semibold tracking-[0.4em] uppercase mb-6">
                {t('tagline')}
              </p>
              <span className="block w-12 h-px bg-gold mb-8" />
              <h2 className="font-display text-4xl lg:text-5xl italic font-semibold text-cream mb-4">
                {t('title')}
              </h2>
              <p className="text-gold-light/80 text-base italic font-display mb-6">
                {t('subtitle')}
              </p>
              <p className="text-cream/60 font-sans leading-relaxed mb-8">
                {t('description')}
              </p>

              {/* Hours */}
              <div className="flex items-center gap-3 mb-8 pb-8 border-b border-cream/10">
                <Clock className="w-4 h-4 text-gold shrink-0" />
                <p className="text-cream/60 text-sm font-sans">{t('hours')}</p>
              </div>
            </FadeIn>

            {/* Featured menu items */}
            <FadeIn delay={0.15}>
              <div className="space-y-4 mb-8">
                {featuredItems.map((item, i) => (
                  <div key={i} className="flex items-start justify-between gap-4 pb-4 border-b border-cream/10 last:border-0">
                    <div className="flex-1">
                      <p className="font-sans font-medium text-cream text-sm">{item.name}</p>
                      <p className="font-sans text-cream/50 text-xs mt-1 leading-relaxed line-clamp-1">
                        {item.description}
                      </p>
                    </div>
                    <p className="font-display text-gold font-semibold shrink-0">{item.price}€</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/restaurant"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-gold text-white text-sm font-sans font-semibold tracking-widest uppercase hover:bg-gold-light transition-all duration-300 hover:scale-[1.02]"
                >
                  {t('viewMenu')}
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 border border-cream/30 text-cream text-sm font-sans font-semibold tracking-widest uppercase hover:bg-cream/10 hover:border-cream transition-all duration-300"
                >
                  {t('reserve')}
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
}
