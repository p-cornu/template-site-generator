'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Check, Zap, ArrowRight } from 'lucide-react';
import FadeIn from '@/components/animations/FadeIn';
import SlideUp from '@/components/animations/SlideUp';
import { cn } from '@/lib/utils';

type Plan = {
  nameKey: string;
  priceKey: string;
  priceAnnualKey?: string;
  descKey: string;
  featureKeys: string[];
  highlighted: boolean;
  enterprise: boolean;
};

const plans: Plan[] = [
  {
    nameKey: 'plan1Name',
    priceKey: 'plan1Price',
    priceAnnualKey: 'plan1PriceAnnual',
    descKey: 'plan1Desc',
    featureKeys: ['plan1F1', 'plan1F2', 'plan1F3', 'plan1F4', 'plan1F5'],
    highlighted: false,
    enterprise: false,
  },
  {
    nameKey: 'plan2Name',
    priceKey: 'plan2Price',
    priceAnnualKey: 'plan2PriceAnnual',
    descKey: 'plan2Desc',
    featureKeys: ['plan2F1', 'plan2F2', 'plan2F3', 'plan2F4', 'plan2F5', 'plan2F6', 'plan2F7'],
    highlighted: true,
    enterprise: false,
  },
  {
    nameKey: 'plan3Name',
    priceKey: 'plan3Price',
    descKey: 'plan3Desc',
    featureKeys: ['plan3F1', 'plan3F2', 'plan3F3', 'plan3F4', 'plan3F5', 'plan3F6'],
    highlighted: false,
    enterprise: true,
  },
];

export default function Pricing() {
  const t = useTranslations('pricing');
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="relative py-28 bg-bg-primary overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(ellipse at 50% 0%, #7c3aed 0%, transparent 60%)`,
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
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
            <p className="text-lg text-text-muted max-w-2xl mx-auto leading-relaxed mb-8">
              {t('subtitle')}
            </p>
          </FadeIn>

          {/* Toggle */}
          <FadeIn delay={0.25}>
            <div className="inline-flex items-center gap-3 rounded-xl bg-bg-card border border-border-subtle p-1.5">
              <button
                onClick={() => setAnnual(false)}
                className={cn(
                  'px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                  !annual ? 'bg-violet-600 text-white shadow-sm' : 'text-text-muted hover:text-text-primary'
                )}
              >
                {t('toggleMonthly')}
              </button>
              <button
                onClick={() => setAnnual(true)}
                className={cn(
                  'flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                  annual ? 'bg-violet-600 text-white shadow-sm' : 'text-text-muted hover:text-text-primary'
                )}
              >
                {t('toggleAnnual')}
                <span className="text-xs px-2 py-0.5 rounded-full bg-neon/20 text-neon font-semibold">
                  {t('save')}
                </span>
              </button>
            </div>
          </FadeIn>
        </div>

        {/* Plans grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {plans.map((plan, i) => (
            <SlideUp key={plan.nameKey} delay={i * 0.1}>
              <div className={cn(
                'relative flex flex-col h-full rounded-2xl p-8',
                'transition-all duration-500',
                plan.highlighted
                  ? 'bg-bg-card border-2 border-violet-500 shadow-2xl shadow-violet-600/30 scale-[1.02]'
                  : 'glass-card hover:border-violet-500/30'
              )}>
                {/* Popular badge */}
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold bg-violet-600 text-white shadow-lg shadow-violet-600/40">
                      <Zap className="w-3 h-3" fill="currentColor" />
                      {t('popular')}
                    </span>
                  </div>
                )}

                {/* Plan name + desc */}
                <div className="mb-6">
                  <h3 className={cn(
                    'font-display font-bold text-xl mb-2',
                    plan.highlighted ? 'text-violet-400' : 'text-text-primary'
                  )}>
                    {t(plan.nameKey)}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {t(plan.descKey)}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-8 pb-8 border-b border-border-subtle">
                  {plan.enterprise ? (
                    <div className="font-display font-bold text-3xl text-text-primary">
                      {t(plan.priceKey)}
                    </div>
                  ) : (
                    <div className="flex items-end gap-1">
                      <span className="font-display font-extrabold text-5xl text-text-primary">
                        ${annual && plan.priceAnnualKey ? t(plan.priceAnnualKey) : t(plan.priceKey)}
                      </span>
                      <span className="text-text-muted text-sm mb-2">{t('perMonth')}</span>
                    </div>
                  )}
                </div>

                {/* Features */}
                <ul className="flex-1 space-y-3 mb-8">
                  {plan.featureKeys.map((key) => (
                    <li key={key} className="flex items-start gap-3">
                      <div className={cn(
                        'flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5',
                        plan.highlighted
                          ? 'bg-violet-600/20 text-violet-400'
                          : 'bg-bg-card-hover text-text-muted'
                      )}>
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="text-sm text-text-muted">{t(key)}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#"
                  className={cn(
                    'flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-semibold',
                    'transition-all duration-300 hover:scale-[1.03] active:scale-[0.97]',
                    plan.highlighted
                      ? 'bg-violet-600 text-white hover:bg-violet-500 shadow-lg shadow-violet-600/30'
                      : 'border border-border-glass text-text-primary hover:border-violet-500/40 hover:bg-violet-600/5'
                  )}
                >
                  {plan.enterprise ? t('ctaEnterprise') : t('cta')}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </SlideUp>
          ))}
        </div>
      </div>
    </section>
  );
}
