'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';

interface CounterProps {
  end: number;
  decimals?: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

function AnimatedCounter({ end, decimals = 0, suffix = '', prefix = '', duration = 2200 }: CounterProps) {
  const [display, setDisplay] = useState('0');
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  useEffect(() => {
    if (!isInView) return;
    let startTime: number | null = null;

    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * end;
      setDisplay(current.toFixed(decimals));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [isInView, end, decimals, duration]);

  return (
    <span ref={ref}>
      {prefix}{display}{suffix}
    </span>
  );
}

const stats = [
  {
    valueKey: 'ls1Value',
    labelKey: 'ls1Label',
    subKey: 'ls1Sub',
    counter: { end: 2.4, decimals: 1, suffix: 'B+' },
    color: '#7c3aed',
  },
  {
    valueKey: 'ls2Value',
    labelKey: 'ls2Label',
    subKey: 'ls2Sub',
    counter: { end: 99.97, decimals: 2, suffix: '%' },
    color: '#00f0ff',
  },
  {
    valueKey: 'ls3Value',
    labelKey: 'ls3Label',
    subKey: 'ls3Sub',
    counter: { end: 10000, decimals: 0, suffix: '+' },
    color: '#a78bfa',
  },
  {
    valueKey: 'ls4Value',
    labelKey: 'ls4Label',
    subKey: 'ls4Sub',
    counter: { end: 340, decimals: 0, suffix: 'ms' },
    color: '#00f0ff',
  },
];

export default function LiveStats() {
  const t = useTranslations('liveStats');

  return (
    <section className="relative py-20 overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, #0a0a0b, #0c0c16, #0a0a0b)' }}
    >
      {/* Top + bottom lines */}
      <div className="absolute top-0 inset-x-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #7c3aed40, #00f0ff40, #7c3aed40, transparent)' }}
      />
      <div className="absolute bottom-0 inset-x-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #7c3aed40, transparent)' }}
      />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border-subtle rounded-2xl overflow-hidden border border-border-subtle">
          {stats.map((stat, i) => (
            <div
              key={stat.labelKey}
              className={cn(
                'group relative flex flex-col items-center text-center px-6 py-10 bg-bg-surface',
                'hover:bg-bg-card transition-colors duration-300',
              )}
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 inset-x-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(90deg, transparent, ${stat.color}, transparent)` }}
              />

              {/* Animated number */}
              <div
                className="font-display font-extrabold text-4xl sm:text-5xl mb-2 tabular-nums"
                style={{ color: stat.color }}
              >
                <AnimatedCounter
                  end={stat.counter.end}
                  decimals={stat.counter.decimals}
                  suffix={stat.counter.suffix}
                  duration={1800 + i * 200}
                />
              </div>

              <p className="font-display font-semibold text-base text-text-primary mb-1">
                {t(stat.labelKey)}
              </p>
              <p className="text-xs text-text-faint leading-relaxed">
                {t(stat.subKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
