import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import DiscountBanner from '@/components/DiscountBanner';
import Features from '@/components/Features';
import Catalog from '@/components/Catalog';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <DiscountBanner />
      <Features />
      <Catalog />
      <Pricing />
      <FAQ />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}
