import { Check, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Pricing() {
  // Get discount percentage from environment variables to match promo banner
  const discount = parseInt(process.env.NEXT_PUBLIC_PROMO_PERCENTAGE || '30');
  
  // Check if discount banner is shown to determine pricing display
  const showDiscountBanner = process.env.NEXT_PUBLIC_SHOW_DISCOUNT_BANNER === 'true';
  
  // Get pricing from environment variables with fallback to default values
  const plans = [
    {
      name: 'Non Foto',
      originalPrice: process.env.NEXT_PUBLIC_PRICE_NON_FOTO_ORIGINAL || '79.000',
      price: process.env.NEXT_PUBLIC_PRICE_NON_FOTO || '55.000',
      description: 'Untuk pernikahan sederhana dan elegan',
      features: [
        'Desain Tema Non Foto',
        'RSVP digital',
        'Peta lokasi',
        'Love story section',
        'Countdown timer',
        'Amplop digital',
        'Coba 1 template sebelum memilih'
      ]
    },
    {
      name: 'Premium',
      originalPrice: process.env.NEXT_PUBLIC_PRICE_PREMIUM_ORIGINAL || '129.000',
      price: process.env.NEXT_PUBLIC_PRICE_PREMIUM || '90.000',
      description: 'Untuk pernikahan yang lebih spesial',
      features: [
        'Semua fitur Non Foto',
        'Desain Tema Premium',
        'Galeri (maks. 20 foto + 1 Video)',
        'Revisi Unlimited',
        'Custom Font dan Color (Kecuali Template Floral)',
        'Coba 2 template sebelum memilih'
      ],
      popular: true
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-b from-white to-wedera-pastel">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-neutral-dark mb-4">
            Paket Harga
          </h2>
          <p className="text-neutral-dark/60 font-body text-lg">
            Pilih paket yang sesuai dengan kebutuhan Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              data-aos="fade-up"
              className={`relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 p-8 flex flex-col  ${
                plan.popular ? 'ring-2 ring-wedera-primary' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-wedera-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                    Paling Populer
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="font-heading font-bold text-2xl text-neutral-dark mb-2">
                  {plan.name}
                </h3>
                <p className="text-neutral-dark/60 font-body mb-4">
                  {plan.description}
                </p>
                <div className="flex flex-col items-center">
                  {/* Show discount pricing only when banner is enabled */}
                  {showDiscountBanner ? (
                    <>
                      <div className="relative">
                        <span className="font-heading text-xl lg:text-3xl text-neutral-dark/60 line-through">
                          Rp {plan.originalPrice}
                        </span>
                        <div className="absolute -top-2 -right-12 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                          -{discount}%
                        </div>
                      </div>
                      <span className="font-heading font-bold text-5xl lg:text-6xl text-wedera-primary mt-2">
                        Rp {plan.price}
                      </span>
                      <div className="mt-2 text-sm text-neutral-dark/60">
                        Hemat Rp {parseInt(plan.originalPrice.replace('.', '')) - parseInt(plan.price.replace('.', ''))}
                      </div>
                    </>
                  ) : (
                    /* Show regular pricing when banner is disabled */
                    <span className="font-heading font-bold text-5xl lg:text-6xl text-wedera-primary mt-2">
                      Rp {plan.originalPrice}
                    </span>
                  )}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check className="w-5 h-5 text-wedera-primary mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-neutral-dark/80 font-body">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="https://wa.me/6282151527990"
                target="_blank"
                className={`block w-full py-3 rounded-full font-medium transition-colors duration-300 text-center group mt-auto ${
                  plan.popular
                    ? 'bg-wedera-primary text-white hover:bg-wedera-secondary'
                    : 'bg-wedera-pastel text-wedera-primary hover:bg-wedera-primary hover:text-white'
                }`}
              >
                <span className="flex items-center justify-center gap-2">
                  Pesan Sekarang
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 