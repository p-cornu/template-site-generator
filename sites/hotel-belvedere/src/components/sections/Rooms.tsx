import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { ROOMS_DATA } from '@/content/hotel-belvedere';
import Container from '@/components/ui/Container';
import SlideUp from '@/components/animations/SlideUp';
import { Users, Maximize2, ArrowRight } from 'lucide-react';

const ROOM_TITLES: Record<string, { titleKey: string; descKey: string }> = {
  'suite-panoramique': { titleKey: 'suiteTitle', descKey: 'suiteDesc' },
  'chambre-vue-mer': { titleKey: 'deluxeTitle', descKey: 'deluxeDesc' },
  'chambre-classique': { titleKey: 'classiqueTitle', descKey: 'classiqueDesc' },
};

export default async function Rooms() {
  const t = await getTranslations('rooms');

  return (
    <section className="py-24 lg:py-32 bg-cream-dark dark:bg-navy-light">
      <Container>
        {/* Header */}
        <SlideUp className="text-center mb-16">
          <p className="text-gold text-xs font-sans font-semibold tracking-[0.4em] uppercase mb-4">
            {t('tagline')}
          </p>
          <span className="block w-12 h-px bg-gold mx-auto mb-6" />
          <h2 className="font-display text-4xl lg:text-5xl text-navy dark:text-cream italic font-semibold mb-4">
            {t('title')}
          </h2>
          <p className="text-navy/60 dark:text-cream/60 font-sans max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </SlideUp>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ROOMS_DATA.map((room, i) => {
            const keys = ROOM_TITLES[room.slug];
            return (
              <SlideUp key={room.id} delay={i * 0.1}>
                <article className="group bg-cream dark:bg-navy overflow-hidden hover:shadow-2xl transition-shadow duration-500">
                  {/* Gold accent top line */}
                  <div className="h-px bg-gold w-0 group-hover:w-full transition-all duration-700" />

                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={room.imageUrl}
                      alt={keys ? t(keys.titleKey) : room.slug}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {/* Price badge */}
                    <div className="absolute top-4 right-4 bg-navy/90 backdrop-blur-sm px-3 py-2 text-cream">
                      <p className="text-xs font-sans text-cream/60">{t('from')}</p>
                      <p className="font-display text-lg font-semibold text-gold">
                        {room.priceFrom}€
                        <span className="text-xs font-sans font-normal text-cream/60 ml-1">
                          {t('perNight')}
                        </span>
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-display text-xl italic font-semibold text-navy dark:text-cream mb-2">
                      {keys ? t(keys.titleKey) : room.slug}
                    </h3>
                    <p className="text-navy/60 dark:text-cream/60 text-sm font-sans leading-relaxed mb-4">
                      {keys ? t(keys.descKey) : ''}
                    </p>

                    {/* Specs */}
                    <div className="flex items-center gap-4 py-4 border-t border-b border-cream-dark dark:border-navy-light mb-4">
                      <div className="flex items-center gap-1.5 text-navy/60 dark:text-cream/60">
                        <Maximize2 className="w-3.5 h-3.5 text-gold" />
                        <span className="text-xs font-sans">
                          {room.surface} {t('surface')}
                        </span>
                      </div>
                      <div className="w-px h-4 bg-cream-dark dark:bg-navy-light" />
                      <div className="flex items-center gap-1.5 text-navy/60 dark:text-cream/60">
                        <Users className="w-3.5 h-3.5 text-gold" />
                        <span className="text-xs font-sans">
                          {room.capacity} {t('capacity')}
                        </span>
                      </div>
                    </div>

                    <Link
                      href={`/chambres`}
                      className="inline-flex items-center gap-2 text-sm font-sans font-semibold text-gold hover:text-gold-light tracking-wide transition-colors group/link"
                    >
                      {t('viewDetails')}
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </article>
              </SlideUp>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
