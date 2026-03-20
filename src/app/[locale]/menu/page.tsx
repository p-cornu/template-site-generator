import type { Metadata } from 'next';
import Image from 'next/image';
import { Star } from 'lucide-react';
import Badge from '@/components/ui/Badge';
import Container from '@/components/ui/Container';
import FadeIn from '@/components/animations/FadeIn';
import SlideUp from '@/components/animations/SlideUp';
import { MENU_ITEMS } from '@/content/la-table-doree';
import { getT } from '@/lib/getT';

type MetaMessages = { metadata: { menuTitle: string; menuDescription: string } };

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const messages: MetaMessages = (
    await import(`@/i18n/messages/${locale}.json`)
  ).default;

  return {
    title: messages.metadata.menuTitle,
    description: messages.metadata.menuDescription,
    openGraph: {
      title: messages.metadata.menuTitle,
      description: messages.metadata.menuDescription,
      images: ['/og-image.jpg'],
    },
  };
}

export default async function MenuPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getT(locale, 'menu');

  const categories = [
    { key: 'entree' as const, label: t('categories.entrees') },
    { key: 'plat' as const, label: t('categories.plats') },
    { key: 'dessert' as const, label: t('categories.desserts') },
  ];

  return (
    <>
      {/* Page hero */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 bg-charcoal-900 dark:bg-charcoal-950 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1547592180-85f173990554?w=1920&q=80"
            alt="Menu La Table Dorée"
            fill
            className="object-cover opacity-20"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900/80 to-charcoal-900" />
        </div>
        <Container className="relative z-10 text-center">
          <FadeIn>
            <div className="flex items-center justify-center gap-2 mb-4">
              <Star className="w-3.5 h-3.5 fill-gold-400 text-gold-400" />
              <Star className="w-3.5 h-3.5 fill-gold-400 text-gold-400" />
            </div>
            <Badge variant="outline" className="border-gold-500/30 mb-6">
              {t('badge')}
            </Badge>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-cream-50 mt-6 mb-6 leading-[1.1]">
              {t('pageTitle')}
            </h1>
            <p className="text-charcoal-300 max-w-2xl mx-auto leading-relaxed">
              {t('pageSubtitle')}
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* Menu content */}
      <section className="py-20 lg:py-28 bg-cream-50 dark:bg-charcoal-900">
        <Container>
          {categories.map((category, ci) => (
            <div key={category.key} className={ci > 0 ? 'mt-20 lg:mt-28' : ''}>
              <FadeIn>
                <div className="flex items-center gap-6 mb-12">
                  <h2 className="font-display text-3xl md:text-4xl text-charcoal-900 dark:text-cream-50">
                    {category.label}
                  </h2>
                  <div className="flex-1 h-px bg-gradient-to-r from-gold-500/40 to-transparent" />
                </div>
              </FadeIn>

              <div className="space-y-1">
                {MENU_ITEMS.filter((item) => item.category === category.key).map(
                  (item, i) => (
                    <SlideUp key={item.id} delay={i * 0.07}>
                      <div className="group grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 md:gap-8 items-start py-8 border-b border-charcoal-100 dark:border-charcoal-800 hover:bg-gold-500/[0.02] transition-colors duration-300 px-2">
                        <div className="flex gap-5 items-start">
                          <div className="relative w-20 h-20 lg:w-24 lg:h-24 shrink-0 overflow-hidden">
                            <Image
                              src={item.image}
                              alt={item.name}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-110"
                              sizes="96px"
                            />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-start gap-3 mb-2">
                              <h3 className="font-display text-xl lg:text-2xl text-charcoal-900 dark:text-cream-100 group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors duration-300">
                                {item.name}
                              </h3>
                              {item.tags.slice(0, 1).map((tag) => (
                                <span
                                  key={tag}
                                  className="shrink-0 mt-1 text-[10px] tracking-[0.2em] uppercase bg-gold-500/10 text-gold-600 dark:text-gold-400 px-2.5 py-1 border border-gold-500/20 font-body"
                                >
                                  {t(`tags.${tag}`)}
                                </span>
                              ))}
                            </div>
                            <p className="text-charcoal-500 dark:text-charcoal-400 text-sm leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </div>
                        <div className="md:text-right">
                          <span className="font-display text-2xl lg:text-3xl text-gradient-gold">
                            {item.price}€
                          </span>
                        </div>
                      </div>
                    </SlideUp>
                  )
                )}
              </div>
            </div>
          ))}

          <FadeIn className="mt-16 py-8 border-t border-charcoal-200 dark:border-charcoal-700">
            <div className="flex flex-col md:flex-row gap-6 md:gap-12">
              <p className="text-charcoal-400 text-sm italic">{t('priceNote')}</p>
              <p className="text-gold-600 dark:text-gold-400 text-sm">{t('winePairing')}</p>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
