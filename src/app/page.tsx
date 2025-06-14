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
  // Set the end date for the discount banner (e.g., December 31, 2024)
  const discountEndDate = new Date('2025-06-30T23:59:59');

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <DiscountBanner endDate={discountEndDate} />
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
