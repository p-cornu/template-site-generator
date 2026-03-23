import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Rooms from '@/components/sections/Rooms';
import RestaurantSection from '@/components/sections/RestaurantSection';
import SpaSection from '@/components/sections/SpaSection';
import GallerySection from '@/components/sections/GallerySection';
import Testimonials from '@/components/sections/Testimonials';
import CTA from '@/components/sections/CTA';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.home' });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Rooms />
      <RestaurantSection />
      <SpaSection />
      <GallerySection />
      <Testimonials />
      <CTA />
    </>
  );
}
