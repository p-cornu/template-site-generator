import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { HOTEL_DATA, SPA_SERVICES } from '@/content/hotel-belvedere';
import Container from '@/components/ui/Container';
import FadeIn from '@/components/animations/FadeIn';
import { Waves, Droplets, Flame, Star } from 'lucide-react';

const SERVICE_ICONS = [Waves, Droplets, Flame, Star];

export default async function SpaSection() {
  const t = await getTranslations('spa');

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src={HOTEL_DATA.images.spa}
          alt="Espace spa et bien-être de l'Hôtel Belvédère"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-navy/85" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <FadeIn>
            <p className="text-gold text-xs font-sans font-semibold tracking-[0.4em] uppercase mb-6">
              {t('tagline')}
            </p>
            <span className="block w-12 h-px bg-gold mx-auto mb-8" />
            <h2 className="font-display text-4xl lg:text-5xl italic font-semibold text-cream mb-6">
              {t('title')}
            </h2>
            <p className="text-gold/80 text-base italic font-display mb-6">{t('subtitle')}</p>
            <p className="text-cream/60 font-sans leading-relaxed">{t('description')}</p>
          </FadeIn>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {SPA_SERVICES.map((service, i) => {
            const Icon = SERVICE_ICONS[i % SERVICE_ICONS.length];
            return (
              <FadeIn key={service.id} delay={i * 0.1}>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 hover:bg-white/10 hover:border-gold/30 transition-all duration-300 group text-center">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-colors">
                    <Icon className="w-5 h-5 text-gold" />
                  </div>
                  <h3 className="font-display text-base italic font-medium text-cream mb-2">
                    {t(`services.${service.id}.name` as Parameters<typeof t>[0])}
                  </h3>
                  <p className="text-cream/50 text-xs font-sans leading-relaxed mb-4">
                    {t(`services.${service.id}.description` as Parameters<typeof t>[0])}
                  </p>
                  <div className="flex items-center justify-center gap-3 text-xs font-sans">
                    <span className="text-gold/80">{service.duration} {t('duration')}</span>
                    <span className="w-px h-3 bg-cream/20" />
                    <span className="text-cream/60">{t('from')} {service.price}€</span>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* CTA */}
        <FadeIn className="text-center">
          <Link
            href="/spa"
            className="inline-flex items-center px-8 py-4 bg-gold text-white text-sm font-sans font-semibold tracking-widest uppercase hover:bg-gold-light transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-gold/20"
          >
            {t('discover')}
          </Link>
        </FadeIn>
      </Container>
    </section>
  );
}
