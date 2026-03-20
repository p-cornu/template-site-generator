import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import Container from '@/components/ui/Container';
import FadeIn from '@/components/animations/FadeIn';
import SlideUp from '@/components/animations/SlideUp';
import Button from '@/components/ui/Button';

const FEATURED = [
  {
    imgSrc: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=700&q=80',
    price: '3,50 €',
    nameKey: 'cappuccino.name',
    descKey: 'cappuccino.desc',
  },
  {
    imgSrc: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=700&q=80',
    price: '3,80 €',
    nameKey: 'kouignAmann.name',
    descKey: 'kouignAmann.desc',
  },
  {
    imgSrc: 'https://images.unsplash.com/photo-1484723091739-30990e1a6e06?w=700&q=80',
    price: '18,50 €',
    nameKey: 'brunchFlour.name',
    descKey: 'brunchFlour.desc',
  },
] as const;

export default function MenuPreview() {
  const t = useTranslations('menuPreview');

  return (
    <section id="menu" className="section-py bg-[var(--color-surface)]">
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <FadeIn>
            <span className="inline-block text-xs font-body font-semibold tracking-[0.25em] uppercase text-[var(--color-gold-500)] mb-4">
              {t('badge')}
            </span>
            <h2 className="font-display font-semibold text-4xl sm:text-5xl text-[var(--color-foreground)] mb-4">
              {t('title')}
            </h2>
            <p className="text-[var(--color-muted)] max-w-xl mx-auto text-base leading-relaxed">
              {t('subtitle')}
            </p>
          </FadeIn>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {FEATURED.map((item, i) => {
            const name = t(item.nameKey as Parameters<typeof t>[0]);
            const desc = t(item.descKey as Parameters<typeof t>[0]);
            return (
              <SlideUp key={item.nameKey} delay={i * 0.1}>
                <article className="group bg-[var(--color-background)] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-[var(--color-border)]">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={item.imgSrc}
                      alt={name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute top-3 right-3 bg-[var(--color-gold-500)] text-white text-xs font-body font-semibold tracking-wide px-3 py-1 rounded-full shadow-md">
                      {item.price}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display font-semibold text-xl text-[var(--color-foreground)] mb-3 group-hover:text-[var(--color-gold-500)] transition-colors duration-300">
                      {name}
                    </h3>
                    <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </article>
              </SlideUp>
            );
          })}
        </div>

        {/* CTA */}
        <FadeIn className="text-center">
          <Link href="/carte">
            <Button size="lg" variant="primary">
              {t('cta')}
            </Button>
          </Link>
        </FadeIn>
      </Container>
    </section>
  );
}
