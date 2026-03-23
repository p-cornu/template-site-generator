'use client';

import { useTranslations } from 'next-intl';
import { motion, type Variants } from 'framer-motion';
import { ArrowRight, Play, TrendingUp, Users, Activity } from 'lucide-react';
import { cn } from '@/lib/utils';

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

const statIcons = [TrendingUp, Users, Activity];

export default function Hero() {
  const t = useTranslations('hero');

  const stats = [
    { valueKey: 'stat1Value', labelKey: 'stat1Label' },
    { valueKey: 'stat2Value', labelKey: 'stat2Label' },
    { valueKey: 'stat3Value', labelKey: 'stat3Label' },
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-bg-primary pt-20 pb-10">
      {/* Background gradient orbs */}
      <div
        className="orb w-[600px] h-[600px] top-[-200px] left-[-150px] opacity-30"
        style={{ background: 'radial-gradient(circle, #7c3aed, transparent 70%)' }}
      />
      <div
        className="orb w-[400px] h-[400px] top-[10%] right-[-100px] opacity-20"
        style={{ background: 'radial-gradient(circle, #00f0ff, transparent 70%)' }}
      />
      <div
        className="orb w-[500px] h-[500px] bottom-[5%] left-[30%] opacity-15"
        style={{ background: 'radial-gradient(circle, #7c3aed, transparent 70%)' }}
      />

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <span className={cn(
              'inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium mb-8',
              'bg-violet-600/10 text-violet-400 border border-violet-600/30',
              'backdrop-blur-sm'
            )}>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-neon animate-pulse" />
              {t('badge')}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight mb-6 max-w-4xl"
          >
            <span className="text-text-primary">{t('title1')}</span>
            <br />
            <span
              className="relative inline-block"
              style={{
                background: 'linear-gradient(135deg, #8b5cf6 0%, #00f0ff 50%, #a78bfa 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {t('title2')}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-text-muted max-w-2xl leading-relaxed mb-10"
          >
            {t('subtitle')}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-4 mb-16"
          >
            <a
              href="#pricing"
              className={cn(
                'group inline-flex items-center gap-2',
                'px-8 py-4 rounded-xl font-semibold text-base',
                'bg-violet-600 text-white',
                'hover:bg-violet-500 hover:scale-[1.04] active:scale-[0.97]',
                'transition-all duration-300',
                'shadow-xl shadow-violet-600/40 hover:shadow-violet-500/50',
              )}
            >
              {t('cta1')}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a
              href="#dashboard"
              className={cn(
                'group inline-flex items-center gap-2',
                'px-8 py-4 rounded-xl font-semibold text-base',
                'border border-border-glass text-text-primary',
                'hover:border-violet-500/50 hover:bg-violet-600/5',
                'hover:scale-[1.04] active:scale-[0.97]',
                'transition-all duration-300',
                'backdrop-blur-sm'
              )}
            >
              <Play className="w-4 h-4 text-neon group-hover:scale-110 transition-transform" />
              {t('cta2')}
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-6 sm:gap-12 mb-16"
          >
            {stats.map((stat, i) => {
              const Icon = statIcons[i];
              return (
                <div key={stat.valueKey} className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-violet-600/15 border border-violet-600/20">
                    <Icon className="w-4 h-4 text-violet-400" />
                  </div>
                  <div className="text-left">
                    <div className="font-display font-bold text-xl text-text-primary">{t(stat.valueKey)}</div>
                    <div className="text-xs text-text-muted">{t(stat.labelKey)}</div>
                  </div>
                </div>
              );
            })}
          </motion.div>

          {/* Dashboard mockup */}
          <motion.div
            variants={itemVariants}
            className="relative w-full max-w-5xl mx-auto"
          >
            {/* Glow behind */}
            <div
              className="absolute -inset-4 rounded-3xl opacity-30 blur-3xl"
              style={{ background: 'linear-gradient(135deg, #7c3aed, #00f0ff)' }}
            />

            {/* Mockup frame */}
            <div className={cn(
              'relative rounded-2xl overflow-hidden',
              'border border-border-glass',
              'glass-card',
              'shadow-2xl shadow-violet-900/50'
            )}>
              {/* Browser bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border-subtle bg-bg-surface">
                <span className="w-3 h-3 rounded-full bg-red-500/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <span className="w-3 h-3 rounded-full bg-green-500/70" />
                <div className="flex-1 mx-4">
                  <div className="h-5 rounded-md bg-bg-card flex items-center px-3">
                    <span className="text-xs text-text-faint">app.pulsetrack.io/dashboard</span>
                  </div>
                </div>
              </div>

              {/* Dashboard content preview */}
              <div className="p-6 bg-bg-surface grid grid-cols-4 gap-4">
                {/* Mini metric cards */}
                {[
                  { label: 'MRR', value: '$48K', color: '#7c3aed', up: true },
                  { label: 'Users', value: '12.8K', color: '#00f0ff', up: true },
                  { label: 'Retention', value: '94.2%', color: '#8b5cf6', up: true },
                  { label: 'Churn', value: '2.8%', color: '#f472b6', up: false },
                ].map((m) => (
                  <div key={m.label} className="rounded-xl p-3 bg-bg-card border border-border-subtle">
                    <div className="text-xs text-text-muted mb-1">{m.label}</div>
                    <div className="font-display font-bold text-lg text-text-primary">{m.value}</div>
                    <div
                      className="text-xs font-medium mt-1"
                      style={{ color: m.up ? '#4ade80' : '#f87171' }}
                    >
                      {m.up ? '↑' : '↓'} {m.up ? '12.5%' : '0.4%'}
                    </div>
                  </div>
                ))}

                {/* Fake chart bars */}
                <div className="col-span-4 rounded-xl p-4 bg-bg-card border border-border-subtle">
                  <div className="text-xs text-text-muted mb-4">Revenue — Last 7 days</div>
                  <div className="flex items-end gap-2 h-20">
                    {[40, 65, 52, 78, 88, 72, 95].map((h, i) => (
                      <div key={i} className="flex-1 rounded-t-sm transition-all" style={{
                        height: `${h}%`,
                        background: `linear-gradient(to top, #7c3aed, #00f0ff)`,
                        opacity: 0.6 + (i / 10),
                      }} />
                    ))}
                  </div>
                  <div className="flex justify-between mt-2">
                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((d) => (
                      <span key={d} className="text-xs text-text-faint">{d}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to top, #0a0a0b, transparent)' }}
      />
    </section>
  );
}
