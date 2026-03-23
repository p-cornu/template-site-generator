import { getTranslations } from 'next-intl/server';
import {
  Zap,
  MousePointerClick,
  LayoutDashboard,
  Bell,
  FileBarChart,
  Plug,
} from 'lucide-react';
import { features } from '@/content/pulsetrack';
import FadeIn from '@/components/animations/FadeIn';
import SlideUp from '@/components/animations/SlideUp';
import { cn } from '@/lib/utils';

const iconMap = {
  Zap,
  MousePointerClick,
  LayoutDashboard,
  Bell,
  FileBarChart,
  Plug,
};

const iconColors = [
  { bg: 'bg-violet-600/15', text: 'text-violet-400', glow: '#7c3aed' },
  { bg: 'bg-neon/10', text: 'text-neon', glow: '#00f0ff' },
  { bg: 'bg-violet-500/15', text: 'text-violet-300', glow: '#8b5cf6' },
  { bg: 'bg-pink-500/10', text: 'text-pink-400', glow: '#ec4899' },
  { bg: 'bg-violet-600/15', text: 'text-violet-400', glow: '#7c3aed' },
  { bg: 'bg-neon/10', text: 'text-neon', glow: '#00f0ff' },
];

export default async function Features() {
  const t = await getTranslations('features');

  return (
    <section id="features" className="relative py-28 bg-bg-primary overflow-hidden">
      {/* Subtle background */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, #7c3aed 0%, transparent 60%),
                           radial-gradient(circle at 80% 20%, #00f0ff 0%, transparent 50%)`,
        }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
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

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap];
            const colors = iconColors[i % iconColors.length];
            return (
              <SlideUp key={feature.key} delay={i * 0.08}>
                <div className={cn(
                  'group relative p-6 rounded-2xl h-full',
                  'glass-card',
                  'hover:border-violet-500/30',
                  'transition-all duration-500 hover:-translate-y-1',
                )}>
                  {/* Hover glow */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ boxShadow: `inset 0 0 30px color-mix(in srgb, ${colors.glow} 5%, transparent)` }}
                  />

                  {/* Icon */}
                  <div className={cn(
                    'relative flex items-center justify-center w-12 h-12 rounded-xl mb-5',
                    colors.bg,
                    'border border-white/5',
                    'group-hover:scale-110 transition-transform duration-300'
                  )}>
                    <Icon className={cn('w-6 h-6', colors.text)} />
                  </div>

                  <h3 className="font-display font-semibold text-lg text-text-primary mb-2">
                    {t(`${feature.key}Title`)}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {t(`${feature.key}Desc`)}
                  </p>
                </div>
              </SlideUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
