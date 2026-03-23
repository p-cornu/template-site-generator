import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { ArrowLeft, Zap } from 'lucide-react';

export default async function NotFound() {
  const t = await getTranslations('notFound');

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-bg-primary">
      {/* Background orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-15 pointer-events-none blur-3xl"
        style={{ background: '#7c3aed' }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full opacity-10 pointer-events-none blur-3xl"
        style={{ background: '#00f0ff' }}
      />

      <div className="relative z-10 text-center px-4">
        {/* Logo */}
        <Link href="/" className="inline-flex items-center gap-2 mb-12 group">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-violet-600">
            <Zap className="w-4 h-4 text-white" fill="currentColor" />
          </div>
          <span className="font-display font-bold text-lg text-text-primary">
            Pulse<span className="text-violet-500">Track</span>
          </span>
        </Link>

        {/* 404 */}
        <div
          className="font-display font-extrabold text-[10rem] sm:text-[14rem] leading-none mb-4 select-none"
          style={{
            background: 'linear-gradient(135deg, #7c3aed 0%, #00f0ff 50%, #7c3aed 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            opacity: 0.3,
          }}
        >
          {t('title')}
        </div>

        <h1 className="font-display font-bold text-3xl sm:text-4xl text-text-primary mb-4">
          {t('subtitle')}
        </h1>
        <p className="text-text-muted max-w-md mx-auto mb-10 leading-relaxed">
          {t('description')}
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-base bg-violet-600 text-white hover:bg-violet-500 hover:scale-[1.04] active:scale-[0.97] transition-all duration-300 shadow-xl shadow-violet-600/40"
        >
          <ArrowLeft className="w-4 h-4" />
          {t('cta')}
        </Link>
      </div>
    </div>
  );
}
