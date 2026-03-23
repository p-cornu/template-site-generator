import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import LiveStats from '@/components/sections/LiveStats';
import Features from '@/components/sections/Features';
import Dashboard from '@/components/sections/Dashboard';
import Integrations from '@/components/sections/Integrations';
import Pricing from '@/components/sections/Pricing';
import Testimonials from '@/components/sections/Testimonials';
import CTA from '@/components/sections/CTA';

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <LiveStats />
        <Features />
        <Dashboard />
        <Integrations />
        <Pricing />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
