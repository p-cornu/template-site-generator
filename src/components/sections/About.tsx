import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import FadeIn from '@/components/animations/FadeIn';
import SlideUp from '@/components/animations/SlideUp';
import { Leaf, MapPin, Heart } from 'lucide-react';

export default function About() {
  const t = useTranslations('about');

  const values = [
    { icon: Heart, label: t('value1Label'), desc: t('value1Desc') },
    { icon: MapPin, label: t('value2Label'), desc: t('value2Desc') },
    { icon: Leaf, label: t('value3Label'), desc: t('value3Desc') },
  ];

  return (
    <section id="about" className="section-py bg-[var(--color-background)]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image side */}
          <FadeIn className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=900&q=80"
                alt={t('imageAlt')}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Warm tint overlay */}
              <div className="absolute inset-0 bg-[var(--color-gold-900)]/10" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-5 -right-5 bg-[var(--color-gold-500)] text-white rounded-2xl px-6 py-4 shadow-xl shadow-[var(--color-gold-500)]/30 hidden sm:block">
              <p className="font-display text-2xl font-bold leading-none">2018</p>
              <p className="text-xs tracking-widest uppercase font-body mt-1 opacity-90">Paris 9e</p>
            </div>
            {/* Decorative dot grid */}
            <div
              className="absolute -top-6 -left-6 w-32 h-32 opacity-20 hidden lg:block"
              style={{
                backgroundImage: 'radial-gradient(circle, var(--color-gold-500) 1.5px, transparent 1.5px)',
                backgroundSize: '16px 16px',
              }}
            />
          </FadeIn>

          {/* Text side */}
          <div className="order-1 lg:order-2 space-y-8">
            <SlideUp>
              <span className="inline-block text-xs font-body font-semibold tracking-[0.25em] uppercase text-[var(--color-gold-500)] mb-4">
                {t('badge')}
              </span>
              <h2 className="font-display font-semibold text-4xl sm:text-5xl leading-[1.15] text-[var(--color-foreground)]">
                {t('title')}
              </h2>
            </SlideUp>

            <SlideUp delay={0.1}>
              <div className="w-12 h-0.5 bg-[var(--color-gold-500)]" />
            </SlideUp>

            <SlideUp delay={0.15}>
              <p className="text-[var(--color-muted)] text-base leading-loose">
                {t('paragraph1')}
              </p>
            </SlideUp>

            <SlideUp delay={0.2}>
              <p className="text-[var(--color-muted)] text-base leading-loose">
                {t('paragraph2')}
              </p>
            </SlideUp>

            {/* Values */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
              {values.map(({ icon: Icon, label, desc }, i) => (
                <SlideUp key={label} delay={0.25 + i * 0.08}>
                  <div className="flex flex-col gap-2">
                    <div className="w-10 h-10 rounded-xl bg-[var(--color-gold-500)]/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[var(--color-gold-500)]" />
                    </div>
                    <p className="font-body font-semibold text-sm text-[var(--color-foreground)]">{label}</p>
                    <p className="text-xs text-[var(--color-muted)] leading-snug">{desc}</p>
                  </div>
                </SlideUp>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
