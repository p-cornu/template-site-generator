import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import Container from '@/components/ui/Container';
import { ArrowLeft } from 'lucide-react';

export default async function NotFound() {
  const t = await getTranslations('notFound');

  return (
    <section className="min-h-screen flex items-center justify-center bg-cream dark:bg-navy">
      <Container size="sm">
        <div className="text-center py-20">
          {/* 404 */}
          <p className="font-display text-[12rem] lg:text-[16rem] leading-none font-semibold text-gold/20 select-none -mb-8">
            {t('title')}
          </p>

          <span className="block w-12 h-px bg-gold mx-auto mb-8" />

          <h1 className="font-display text-2xl lg:text-3xl italic font-semibold text-navy dark:text-cream mb-4">
            {t('subtitle')}
          </h1>
          <p className="text-navy/60 dark:text-cream/60 font-sans mb-10">
            {t('description')}
          </p>

          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-white text-sm font-sans font-semibold tracking-widest uppercase hover:bg-gold-light transition-all duration-300 hover:scale-[1.02]"
          >
            <ArrowLeft className="w-4 h-4" />
            {t('back')}
          </Link>
        </div>
      </Container>
    </section>
  );
}
