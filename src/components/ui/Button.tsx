import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  onClick,
  type = 'button',
  disabled,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        'inline-flex items-center justify-center gap-2 font-body font-medium tracking-[0.1em] uppercase transition-all duration-300 cursor-pointer select-none',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500',
        'disabled:opacity-50 disabled:cursor-not-allowed',

        // Sizes
        size === 'sm' && 'text-xs px-5 py-2.5',
        size === 'md' && 'text-sm px-8 py-3.5',
        size === 'lg' && 'text-sm px-10 py-4',

        // Variants
        variant === 'primary' && [
          'bg-gold-500 text-charcoal-900',
          'hover:bg-gold-400 hover:scale-[1.02] active:scale-[0.98]',
          'shadow-lg shadow-gold-500/20 hover:shadow-gold-400/30',
        ],
        variant === 'outline' && [
          'border border-gold-500/60 text-gold-500',
          'hover:bg-gold-500/10 hover:border-gold-400 hover:scale-[1.02]',
          'active:scale-[0.98]',
        ],
        variant === 'ghost' && [
          'text-charcoal-600 dark:text-charcoal-200',
          'hover:text-gold-500 hover:bg-gold-500/5',
        ],

        className
      )}
    >
      {children}
    </button>
  );
}
