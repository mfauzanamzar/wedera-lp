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
  // Get discount end date from environment variables
  const discountEndDate = new Date(
    process.env.NEXT_PUBLIC_PROMO_END_DATE || '2025-12-30T23:59:59'
  );

  // Check if discount banner should be shown
  const showDiscountBanner = process.env.NEXT_PUBLIC_SHOW_DISCOUNT_BANNER === 'true';

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      {showDiscountBanner && <DiscountBanner endDate={discountEndDate} />}
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
