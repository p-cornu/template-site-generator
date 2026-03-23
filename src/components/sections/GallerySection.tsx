import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { GALLERY_PHOTOS } from '@/content/hotel-belvedere';
import Container from '@/components/ui/Container';
import FadeIn from '@/components/animations/FadeIn';
import { ArrowRight } from 'lucide-react';

export default async function GallerySection() {
  const t = await getTranslations('gallery');
  const previewPhotos = GALLERY_PHOTOS.slice(0, 6);

  return (
    <section className="py-24 lg:py-32 bg-cream dark:bg-navy">
      <Container>
        <FadeIn className="text-center mb-16">
          <p className="text-gold text-xs font-sans font-semibold tracking-[0.4em] uppercase mb-4">
            {t('tagline')}
          </p>
          <span className="block w-12 h-px bg-gold mx-auto mb-6" />
          <h2 className="font-display text-4xl lg:text-5xl text-navy dark:text-cream italic font-semibold mb-4">
            {t('title')}
          </h2>
          <p className="text-navy/60 dark:text-cream/60 font-sans max-w-xl mx-auto">
            {t('subtitle')}
          </p>
        </FadeIn>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mb-12">
          {previewPhotos.map((photo, i) => (
            <FadeIn
              key={photo.id}
              delay={i * 0.06}
              className={i === 0 || i === 3 ? 'col-span-2 md:col-span-1' : ''}
            >
              <div className="relative overflow-hidden group cursor-pointer aspect-square">
                <Image
                  src={photo.url}
                  alt={photo.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                {/* Gold hover overlay */}
                <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/20 transition-all duration-500 flex items-center justify-center">
                  <div className="w-8 h-8 border border-cream/0 group-hover:border-cream/80 transition-all duration-300 opacity-0 group-hover:opacity-100 rotate-45" />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* CTA */}
        <FadeIn className="text-center">
          <Link
            href="/galerie"
            className="inline-flex items-center gap-2 text-sm font-sans font-semibold text-navy dark:text-cream hover:text-gold dark:hover:text-gold tracking-wide transition-colors group/link"
          >
            {t('all')} ({GALLERY_PHOTOS.length} photos)
            <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
          </Link>
        </FadeIn>
      </Container>
    </section>
  );
}
