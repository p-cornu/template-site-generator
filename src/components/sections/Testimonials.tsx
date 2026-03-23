import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { Star } from 'lucide-react';
import { testimonials } from '@/content/pulsetrack';
import FadeIn from '@/components/animations/FadeIn';
import SlideUp from '@/components/animations/SlideUp';
import { cn } from '@/lib/utils';

export default async function Testimonials() {
  const t = await getTranslations('testimonials');

  return (
    <section id="testimonials" className="relative py-28 overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, #0a0a0b, #0e0e1a, #0a0a0b)' }}
    >
      {/* Decorative orbs */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 pointer-events-none blur-3xl"
        style={{ background: '#00f0ff' }}
      />
      <div
        className="absolute bottom-0 left-0 w-72 h-72 rounded-full opacity-10 pointer-events-none blur-3xl"
        style={{ background: '#7c3aed' }}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <FadeIn>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium mb-6 bg-neon/10 text-neon border border-neon/20">
              {t('badge')}
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-text-primary mb-4 tracking-tight">
              {t('title')}
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg text-text-muted max-w-2xl mx-auto leading-relaxed">
              {t('subtitle')}
            </p>
          </FadeIn>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, i) => (
            <SlideUp key={item.nameKey} delay={i * 0.12}>
              <div className={cn(
                'group relative flex flex-col gap-6 p-8 rounded-2xl h-full',
                'glass-card',
                'hover:border-violet-500/30',
                'transition-all duration-500 hover:-translate-y-1'
              )}>
                {/* Top glow on hover */}
                <div className="absolute top-0 inset-x-0 h-px rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: 'linear-gradient(90deg, transparent, #7c3aed, #00f0ff, transparent)' }}
                />

                {/* Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, si) => (
                    <Star key={si} className="w-4 h-4 text-violet-400 fill-violet-400" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="flex-1 text-text-muted text-sm leading-relaxed italic">
                  &ldquo;{t(item.quoteKey)}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t border-border-subtle">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-violet-600/30">
                    <Image
                      src={item.imageUrl}
                      alt={t(item.imageAltKey)}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-display font-semibold text-sm text-text-primary">
                      {t(item.nameKey)}
                    </p>
                    <p className="text-xs text-text-muted">{t(item.roleKey)}</p>
                  </div>
                </div>
              </div>
            </SlideUp>
          ))}
        </div>
      </div>
    </section>
  );
}
