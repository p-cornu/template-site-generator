'use client';

import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface ThemeToggleProps {
  className?: string;
}

export default function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div className={cn('w-9 h-9 rounded-full', className)} aria-hidden />
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      aria-label={theme === 'dark' ? 'Activer le mode clair' : 'Activer le mode sombre'}
      className={cn(
        'flex items-center justify-center w-9 h-9 rounded-full',
        'text-charcoal-400 dark:text-charcoal-200',
        'hover:text-gold-500 dark:hover:text-gold-400',
        'transition-all duration-200 hover:bg-gold-500/10',
        className
      )}
    >
      {theme === 'dark' ? (
        <Sun className="w-4.5 h-4.5" />
      ) : (
        <Moon className="w-4.5 h-4.5" />
      )}
    </button>
  );
}
