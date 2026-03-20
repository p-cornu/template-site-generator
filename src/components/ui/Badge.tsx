import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  className?: string;
  variant?: 'gold' | 'outline' | 'subtle';
}

export default function Badge({
  children,
  className,
  variant = 'gold',
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase font-body font-medium',
        variant === 'gold' && 'text-gold-500',
        variant === 'outline' &&
          'border border-gold-500/40 text-gold-500 px-4 py-1.5 rounded-full',
        variant === 'subtle' &&
          'text-charcoal-400 dark:text-charcoal-300',
        className
      )}
    >
      <span className="inline-block w-6 h-px bg-current opacity-60" />
      {children}
      <span className="inline-block w-6 h-px bg-current opacity-60" />
    </span>
  );
}
