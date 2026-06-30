'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { metrics, chartDataDaily, chartDataWeekly, chartDataMonthly } from '@/content/pulsetrack';
import FadeIn from '@/components/animations/FadeIn';
import { cn } from '@/lib/utils';

const tabs = [
  { key: 'tab1', data: chartDataDaily },
  { key: 'tab2', data: chartDataWeekly },
  { key: 'tab3', data: chartDataMonthly },
];

const CustomTooltip = ({ active, payload, label }: {
  active?: boolean;
  payload?: Array<{ value: number; name: string; color: string }>;
  label?: string;
}) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass-card rounded-xl px-4 py-3 text-sm shadow-xl">
        <p className="text-text-muted mb-2 text-xs">{label}</p>
        {payload.map((entry) => (
          <p key={entry.name} className="font-semibold" style={{ color: entry.color }}>
            {entry.name}: {entry.value.toLocaleString()}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export default function Dashboard() {
  const t = useTranslations('dashboard');
  const [activeTab, setActiveTab] = useState(0);

  const currentData = tabs[activeTab].data;

  return (
    <section id="dashboard" className="relative py-28 overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, #0a0a0b, #0d0d18, #0a0a0b)' }}
    >
      {/* Background accents */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #7c3aed, transparent 70%)' }}
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

        {/* Dashboard card */}
        <FadeIn delay={0.15}>
          <div className="relative rounded-3xl overflow-hidden glass-card shadow-2xl shadow-violet-900/30">
            {/* Card glow border */}
            <div
              className="absolute inset-0 rounded-3xl pointer-events-none"
              style={{ boxShadow: 'inset 0 0 60px color-mix(in srgb, #7c3aed 5%, transparent)' }}
            />

            {/* Header row */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 px-6 pt-6 pb-4 border-b border-border-subtle">
              <h3 className="font-display font-semibold text-lg text-text-primary">
                {t('chartTitle')}
              </h3>
              {/* Tabs */}
              <div className="flex rounded-lg bg-bg-card p-1 gap-1">
                {tabs.map((tab, i) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(i)}
                    className={cn(
                      'px-4 py-1.5 rounded-md text-xs font-medium transition-all duration-200',
                      activeTab === i
                        ? 'bg-violet-600 text-white shadow-sm'
                        : 'text-text-muted hover:text-text-primary'
                    )}
                  >
                    {t(tab.key)}
                  </button>
                ))}
              </div>
            </div>

            {/* Metrics row */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border-subtle">
              {metrics.map((metric) => (
                <div key={metric.labelKey} className="bg-bg-surface px-6 py-5">
                  <p className="text-xs text-text-muted mb-1">{t(metric.labelKey)}</p>
                  <p className="font-display font-bold text-2xl text-text-primary mb-1">
                    {t(metric.valueKey)}
                  </p>
                  <div className={cn(
                    'flex items-center gap-1 text-xs font-medium',
                    metric.positive ? 'text-emerald-400' : 'text-red-400'
                  )}>
                    {metric.positive
                      ? <TrendingUp className="w-3 h-3" />
                      : <TrendingDown className="w-3 h-3" />
                    }
                    {t(metric.changeKey)}
                  </div>
                </div>
              ))}
            </div>

            {/* Chart */}
            <div className="px-6 py-8 bg-bg-surface">
              <ResponsiveContainer width="100%" height={280}>
                <AreaChart data={currentData} margin={{ top: 5, right: 5, bottom: 0, left: 0 }}>
                  <defs>
                    <linearGradient id="gradViolet" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#7c3aed" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="#7c3aed" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="gradNeon" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#00f0ff" stopOpacity={0.25} />
                      <stop offset="95%" stopColor="#00f0ff" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
                  <XAxis
                    dataKey="name"
                    tick={{ fill: '#64748b', fontSize: 12 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    tick={{ fill: '#64748b', fontSize: 12 }}
                    axisLine={false}
                    tickLine={false}
                    width={50}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Area
                    type="monotone"
                    dataKey="value"
                    name={t('revenue')}
                    stroke="#7c3aed"
                    strokeWidth={2}
                    fill="url(#gradViolet)"
                  />
                  <Area
                    type="monotone"
                    dataKey="secondary"
                    name={t('users')}
                    stroke="#00f0ff"
                    strokeWidth={2}
                    fill="url(#gradNeon)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
