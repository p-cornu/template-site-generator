import { getTranslations } from 'next-intl/server';
import { ArrowRight } from 'lucide-react';
import { integrations } from '@/content/pulsetrack';
import FadeIn from '@/components/animations/FadeIn';

export default async function Integrations() {
  const t = await getTranslations('integrations');

  // Duplicate for seamless loop
  const row1 = [...integrations.slice(0, 8), ...integrations.slice(0, 8)];
  const row2 = [...integrations.slice(4), ...integrations.slice(4)];

  return (
    <section id="integrations" className="relative py-28 overflow-hidden bg-bg-primary">
      {/* Subtle bg */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 100%, #7c3aed 0%, transparent 60%)`,
        }}
      />

      <div className="relative z-10">
        {/* Header */}
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 text-center mb-16">
          <FadeIn>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium mb-6 bg-violet-600/10 text-violet-400 border border-violet-600/30">
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

        {/* Marquee row 1 — left */}
        <div className="relative mb-4 overflow-hidden">
          <div className="flex gap-4 w-max" style={{ animation: 'marquee-left 35s linear infinite' }}>
            {row1.map((tool, i) => (
              <div
                key={`r1-${i}`}
                className="flex items-center gap-3 px-5 py-3 rounded-2xl glass-card border border-border-subtle whitespace-nowrap flex-shrink-0 hover:border-violet-500/40 transition-colors duration-300"
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0"
                  style={{ background: `${tool.color}20`, color: tool.color, border: `1px solid ${tool.color}30` }}
                >
                  {tool.letter}
                </div>
                <span className="text-sm font-medium text-text-primary">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Marquee row 2 — right (inverse) */}
        <div className="relative overflow-hidden">
          <div className="flex gap-4 w-max" style={{ animation: 'marquee-right 40s linear infinite' }}>
            {row2.map((tool, i) => (
              <div
                key={`r2-${i}`}
                className="flex items-center gap-3 px-5 py-3 rounded-2xl glass-card border border-border-subtle whitespace-nowrap flex-shrink-0 hover:border-neon/30 transition-colors duration-300"
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0"
                  style={{ background: `${tool.color}20`, color: tool.color, border: `1px solid ${tool.color}30` }}
                >
                  {tool.letter}
                </div>
                <span className="text-sm font-medium text-text-primary">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-32 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #0a0a0b, transparent)' }}
        />
        <div className="absolute inset-y-0 right-0 w-32 pointer-events-none"
          style={{ background: 'linear-gradient(to left, #0a0a0b, transparent)' }}
        />

        {/* CTA */}
        <FadeIn delay={0.3}>
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 text-center mt-12">
            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm font-medium text-violet-400 hover:text-violet-300 transition-colors duration-200 group"
            >
              {t('cta')}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </FadeIn>
      </div>

      {/* Marquee keyframes */}
      <style>{`
        @keyframes marquee-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}
