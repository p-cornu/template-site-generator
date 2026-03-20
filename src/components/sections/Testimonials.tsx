import { useTranslations } from 'next-intl';
import Container from '@/components/ui/Container';
import FadeIn from '@/components/animations/FadeIn';
import SlideUp from '@/components/animations/SlideUp';
import { Star } from 'lucide-react';
import { testimonials } from '@/content/maison-flour';

export default function Testimonials() {
  const t = useTranslations('testimonials');

  return (
    <section className="section-py bg-[var(--color-background)]">
      <Container>
        {/* Header */}
        <div className="text-center mb-14">
          <FadeIn>
            <span className="inline-block text-xs font-body font-semibold tracking-[0.25em] uppercase text-[var(--color-gold-500)] mb-4">
              {t('badge')}
            </span>
            <h2 className="font-display font-semibold text-4xl sm:text-5xl text-[var(--color-foreground)]">
              {t('title')}
            </h2>
          </FadeIn>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, i) => {
            const textKey = item.id;
            return (
              <SlideUp key={item.id} delay={i * 0.1}>
                <article className="flex flex-col gap-6 p-8 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[var(--color-gold-300)] hover:shadow-lg transition-all duration-300">
                  {/* Stars */}
                  <div
                    className="flex gap-1"
                    aria-label={t('starsLabel')}
                  >
                    {Array.from({ length: item.rating }).map((_, idx) => (
                      <Star
                        key={idx}
                        className="w-4 h-4 fill-[var(--color-gold-500)] text-[var(--color-gold-500)]"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote>
                    <p className="text-base text-[var(--color-muted)] leading-loose italic">
                      &ldquo;{t(textKey as Parameters<typeof t>[0])}&rdquo;
                    </p>
                  </blockquote>

                  {/* Author */}
                  <footer className="flex items-center gap-3 pt-2 mt-auto">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-gold-500)] flex items-center justify-center text-white text-xs font-body font-bold flex-shrink-0">
                      {item.avatarInitials}
                    </div>
                    <div>
                      <p className="text-sm font-body font-semibold text-[var(--color-foreground)]">
                        {item.name}
                      </p>
                      <p className="text-xs text-[var(--color-muted)]">{item.role}</p>
                    </div>
                  </footer>
                </article>
              </SlideUp>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
