import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Container from '@/components/ui/Container';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FadeIn from '@/components/animations/FadeIn';
import SlideUp from '@/components/animations/SlideUp';
import { menuItems } from '@/content/maison-flour';
import type { Locale, MenuItem } from '@/lib/types';
import { Coffee, Droplets, Croissant, UtensilsCrossed } from 'lucide-react';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'carte' });
  return {
    title: t('meta.title' as Parameters<typeof t>[0]),
    description: t('meta.description' as Parameters<typeof t>[0]),
  };
}

const CATEGORY_ICONS = {
  hot: Coffee,
  cold: Droplets,
  pastry: Croissant,
  brunch: UtensilsCrossed,
} as const;

export default async function CartePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'carte' });
  const categories = ['hot', 'cold', 'pastry', 'brunch'] as const;

  function renderCategory(category: MenuItem['category']) {
    const items = menuItems.filter((item) => item.category === category);
    const Icon = CATEGORY_ICONS[category];
    const title = t(category as Parameters<typeof t>[0]);
    const isBrunch = category === 'brunch';

    return (
      <div key={category} className="mb-16 last:mb-0">
        <SlideUp>
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-[var(--color-gold-500)]/10 flex items-center justify-center">
              <Icon className="w-5 h-5 text-[var(--color-gold-500)]" />
            </div>
            <h2 className="font-display font-semibold text-2xl sm:text-3xl text-[var(--color-foreground)]">
              {title}
            </h2>
            {isBrunch && (
              <span className="text-xs font-body text-[var(--color-muted)] italic ml-auto hidden sm:inline">
                {t('brunchNote' as Parameters<typeof t>[0])}
              </span>
            )}
          </div>
          {isBrunch && (
            <p className="text-xs font-body text-[var(--color-muted)] italic mb-4 sm:hidden">
              {t('brunchNote' as Parameters<typeof t>[0])}
            </p>
          )}
          <div className="h-px bg-[var(--color-border)] mb-2" />
        </SlideUp>

        <div className="divide-y divide-[var(--color-border)]">
          {items.map((item, i) => {
            const nameKey = `${item.id}.name` as Parameters<typeof t>[0];
            const descKey = `${item.id}.desc` as Parameters<typeof t>[0];
            return (
              <SlideUp key={item.id} delay={i * 0.04}>
                <div className="flex items-start justify-between gap-4 py-5 group">
                  <div className="flex-1 min-w-0">
                    <p className="font-body font-semibold text-[var(--color-foreground)] group-hover:text-[var(--color-gold-500)] transition-colors duration-200 mb-0.5">
                      {t(nameKey)}
                    </p>
                    <p className="text-sm text-[var(--color-muted)] leading-snug">
                      {t(descKey)}
                    </p>
                  </div>
                  <span className="font-body font-semibold text-[var(--color-gold-500)] text-sm whitespace-nowrap flex-shrink-0">
                    {item.price}
                  </span>
                </div>
              </SlideUp>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <>
      <Header locale={locale as Locale} />

      <main className="pt-20 pb-24">
        {/* Hero banner */}
        <div className="bg-[var(--color-charcoal-900)] py-16 mb-16">
          <Container>
            <FadeIn className="text-center">
              <span className="inline-block text-xs font-body font-semibold tracking-[0.25em] uppercase text-[var(--color-gold-400)] mb-4">
                {t('badge' as Parameters<typeof t>[0])}
              </span>
              <h1 className="font-display font-semibold text-4xl sm:text-5xl text-[var(--color-cream-100)] mb-4">
                {t('title' as Parameters<typeof t>[0])}
              </h1>
              <p className="text-[var(--color-charcoal-300)] max-w-lg mx-auto">
                {t('subtitle' as Parameters<typeof t>[0])}
              </p>
            </FadeIn>
          </Container>
        </div>

        {/* Menu content */}
        <Container className="max-w-3xl">
          {categories.map((category) => renderCategory(category))}
        </Container>
      </main>

      <Footer />
    </>
  );
}
