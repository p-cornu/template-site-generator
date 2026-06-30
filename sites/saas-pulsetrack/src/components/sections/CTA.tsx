import { getTranslations } from 'next-intl/server';
import { ArrowRight, Calendar } from 'lucide-react';
import FadeIn from '@/components/animations/FadeIn';

export default async function CTA() {
  const t = await getTranslations('cta');

  return (
    <section className="relative py-28 overflow-hidden bg-bg-primary">
      {/* Full-bleed gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 30% 50%, rgba(124, 58, 237, 0.2) 0%, transparent 60%),
            radial-gradient(ellipse at 70% 50%, rgba(0, 240, 255, 0.1) 0%, transparent 60%)
          `,
        }}
      />

      {/* Top border gradient */}
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #7c3aed, #00f0ff, #7c3aed, transparent)' }}
      />

      {/* Animated grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(124,58,237,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.5) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn>
          <h2
            className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-text-primary mb-6 tracking-tight leading-[1.1]"
          >
            {t('title')}
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="text-lg sm:text-xl text-text-muted max-w-2xl mx-auto leading-relaxed mb-10">
            {t('subtitle')}
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#pricing"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-base bg-violet-600 text-white hover:bg-violet-500 hover:scale-[1.04] active:scale-[0.97] transition-all duration-300 shadow-xl shadow-violet-600/40 hover:shadow-violet-500/50"
            >
              {t('cta1')}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a
              href="#"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-base border border-border-glass text-text-primary hover:border-violet-500/50 hover:bg-violet-600/5 hover:scale-[1.04] active:scale-[0.97] transition-all duration-300 backdrop-blur-sm"
            >
              <Calendar className="w-4 h-4 text-neon" />
              {t('cta2')}
            </a>
          </div>
        </FadeIn>

        {/* Trust indicators */}
        <FadeIn delay={0.3}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {[
              '✓ Aucune carte bancaire',
              '✓ 14 jours gratuits',
              '✓ Résiliation à tout moment',
            ].map((item) => (
              <span key={item} className="text-sm text-text-faint">{item}</span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
