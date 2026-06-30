import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import MenuPreview from '@/components/sections/MenuPreview';
import Gallery from '@/components/sections/Gallery';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact';
import type { Locale } from '@/lib/types';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <>
      <Header locale={locale as Locale} />
      <main>
        <Hero />
        <About />
        <MenuPreview />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
