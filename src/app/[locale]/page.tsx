import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import Awards from '@/components/sections/Awards';
import About from '@/components/sections/About';
import MenuPreview from '@/components/sections/MenuPreview';
import Gallery from '@/components/sections/Gallery';
import Testimonials from '@/components/sections/Testimonials';
import CtaSection from '@/components/sections/CtaSection';
import type { Locale } from '@/lib/types';

type Messages = { metadata: { homeTitle: string; homeDescription: string } };

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const messages: Messages = (
    await import(`@/i18n/messages/${locale}.json`)
  ).default;

  return {
    title: messages.metadata.homeTitle,
    description: messages.metadata.homeDescription,
    openGraph: {
      title: messages.metadata.homeTitle,
      description: messages.metadata.homeDescription,
      images: ['/og-image.jpg'],
      locale: (locale as Locale) === 'fr' ? 'fr_FR' : 'en_US',
      type: 'website',
    },
  };
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Awards />
      <About />
      <MenuPreview />
      <Gallery />
      <Testimonials />
      <CtaSection />
    </>
  );
}
