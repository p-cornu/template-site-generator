import { getTranslations } from 'next-intl/server';
import { TESTIMONIALS_DATA } from '@/content/hotel-belvedere';
import Container from '@/components/ui/Container';
import FadeIn from '@/components/animations/FadeIn';
import { Star } from 'lucide-react';

export default async function Testimonials() {
  const t = await getTranslations('testimonials');

  return (
    <section className="py-24 lg:py-32 bg-cream-dark dark:bg-navy-light">
      <Container>
        <FadeIn className="text-center mb-16">
          <p className="text-gold text-xs font-sans font-semibold tracking-[0.4em] uppercase mb-4">
            {t('tagline')}
          </p>
          <span className="block w-12 h-px bg-gold mx-auto mb-6" />
          <h2 className="font-display text-4xl lg:text-5xl text-navy dark:text-cream italic font-semibold">
            {t('title')}
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((testimonial, i) => (
            <FadeIn key={testimonial.id} delay={i * 0.12}>
              <article className="bg-cream dark:bg-navy p-8 relative group hover:shadow-xl transition-shadow duration-500">
                {/* Gold accent line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-60" />

                {/* Large quotation mark */}
                <div
                  className="font-display text-7xl text-gold/25 leading-none select-none mb-2 -mt-2"
                  aria-hidden="true"
                >
                  &ldquo;
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-gold text-gold" />
                  ))}
                </div>

                {/* Text */}
                <blockquote className="text-navy/75 dark:text-cream/75 font-sans text-sm leading-relaxed italic mb-6">
                  {testimonial.text}
                </blockquote>

                {/* Author */}
                <footer>
                  <cite className="not-italic">
                    <p className="font-sans font-semibold text-navy dark:text-cream text-sm">
                      {testimonial.author}
                    </p>
                    <p className="font-sans text-gold text-xs mt-0.5">{testimonial.origin}</p>
                  </cite>
                </footer>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
