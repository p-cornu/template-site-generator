import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { HOTEL_DATA } from '@/content/hotel-belvedere';
import FadeIn from '@/components/animations/FadeIn';
import Container from '@/components/ui/Container';

export default async function About() {
  const t = await getTranslations('about');

  const stats = [
    { value: '1923', label: t('since') },
    { value: '48', label: t('rooms') },
    { value: '5★', label: t('stars') },
    { value: 'R&C', label: t('awards') },
  ];

  return (
    <section className="py-24 lg:py-32 bg-cream dark:bg-navy overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: text */}
          <div>
            <FadeIn>
              <p className="text-gold text-xs font-sans font-semibold tracking-[0.4em] uppercase mb-6">
                {t('tagline')}
              </p>
              <span className="block w-12 h-px bg-gold mb-8" />
              <h2 className="font-display text-4xl lg:text-5xl text-navy dark:text-cream italic font-semibold leading-tight mb-8">
                {t('title')}
              </h2>
            </FadeIn>

            <FadeIn delay={0.15}>
              <p className="text-navy/70 dark:text-cream/70 font-sans leading-relaxed mb-6 text-lg">
                {t('description')}
              </p>
              <p className="text-navy/70 dark:text-cream/70 font-sans leading-relaxed">
                {t('description2')}
              </p>
            </FadeIn>

            {/* Stats grid */}
            <FadeIn delay={0.25}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12 pt-12 border-t border-cream-dark dark:border-navy-light">
                {stats.map(stat => (
                  <div key={stat.label} className="text-center">
                    <p className="font-display text-3xl font-semibold text-gold mb-1">
                      {stat.value}
                    </p>
                    <p className="text-navy/50 dark:text-cream/50 text-xs font-sans tracking-wide">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Right: image */}
          <FadeIn delay={0.1} className="relative">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src={HOTEL_DATA.images.lobby}
                alt="Hall d'entrée de l'Hôtel Belvédère"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Decorative frame */}
              <div className="absolute inset-4 border border-gold/20 pointer-events-none" />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-gold/20 hidden lg:block" />
            <div className="absolute -top-6 -left-6 w-20 h-20 border-2 border-cream-dark/60 dark:border-navy-light/60 hidden lg:block" />
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
