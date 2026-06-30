import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Container from '@/components/ui/Container';
import { Coffee } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function NotFound() {
  const t = useTranslations('notFound');

  return (
    <main className="min-h-screen flex items-center justify-center bg-[var(--color-background)]">
      <Container>
        <div className="flex flex-col items-center text-center gap-6 py-24">
          {/* Icon */}
          <div className="w-20 h-20 rounded-full bg-[var(--color-gold-500)]/10 flex items-center justify-center">
            <Coffee className="w-10 h-10 text-[var(--color-gold-500)]" />
          </div>

          {/* 404 */}
          <p className="font-display text-8xl font-bold text-[var(--color-gold-500)]/20 leading-none select-none">
            404
          </p>

          {/* Title */}
          <h1 className="font-display font-semibold text-3xl sm:text-4xl text-[var(--color-foreground)] -mt-6">
            {t('title')}
          </h1>

          {/* Subtitle */}
          <p className="text-[var(--color-muted)] max-w-sm">
            {t('subtitle')}
          </p>

          {/* CTA */}
          <Link href="/" className="mt-2">
            <Button size="lg" variant="primary">
              {t('cta')}
            </Button>
          </Link>
        </div>
      </Container>
    </main>
  );
}
