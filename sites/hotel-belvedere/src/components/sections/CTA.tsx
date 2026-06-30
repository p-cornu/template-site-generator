import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import Container from '@/components/ui/Container';
import FadeIn from '@/components/animations/FadeIn';
import { CheckCircle } from 'lucide-react';

export default async function CTA() {
  const t = await getTranslations('cta');

  const advantages = [
    t('advantage1'),
    t('advantage2'),
    t('advantage3'),
  ];

  return (
    <section className="py-24 lg:py-32 bg-navy relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 40px,
              rgba(201, 168, 76, 0.5) 40px,
              rgba(201, 168, 76, 0.5) 41px
            )`,
          }}
        />
      </div>

      <Container className="relative z-10">
        <FadeIn className="text-center max-w-3xl mx-auto">
          <p className="text-gold text-xs font-sans font-semibold tracking-[0.4em] uppercase mb-6">
            {t('tagline')}
          </p>
          <span className="block w-12 h-px bg-gold mx-auto mb-8" />
          <h2 className="font-display text-4xl lg:text-6xl italic font-semibold text-cream leading-tight mb-6">
            {t('title')}
          </h2>
          <p className="text-cream/60 font-sans text-lg leading-relaxed mb-10">
            {t('subtitle')}
          </p>

          {/* Advantages */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
            {advantages.map((adv, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-gold shrink-0" />
                <span className="text-cream/70 text-sm font-sans">{adv}</span>
              </div>
            ))}
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center px-10 py-5 bg-gold text-white text-sm font-sans font-semibold tracking-widest uppercase hover:bg-gold-light transition-all duration-300 hover:scale-[1.02] shadow-xl shadow-gold/25"
          >
            {t('button')}
          </Link>
        </FadeIn>
      </Container>
    </section>
  );
}
