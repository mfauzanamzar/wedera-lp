import { Check } from 'lucide-react';
import Link from 'next/link';

const plans = [
  {
    name: 'Basic',
    price: '299K',
    description: 'Untuk pernikahan sederhana dan elegan',
    features: [
      'Desain template standar',
      'Galeri foto (maks. 20 foto)',
      'RSVP digital',
      'Peta lokasi',
      'Musik latar (1 lagu)'
    ]
  },
  {
    name: 'Premium',
    price: '499K',
    description: 'Untuk pernikahan yang lebih spesial',
    features: [
      'Semua fitur Basic',
      'Desain template premium',
      'Galeri foto (maks. 50 foto)',
      'Love story section',
      'Musik latar (3 lagu)',
      'Amplop digital',
      'Countdown timer'
    ],
    popular: true
  },
  {
    name: 'Exclusive',
    price: '799K',
    description: 'Untuk pernikahan yang tak terlupakan',
    features: [
      'Semua fitur Premium',
      'Desain custom',
      'Galeri foto unlimited',
      'Video background',
      'Musik latar unlimited',
      'Dukungan prioritas',
      'Revisi desain unlimited'
    ]
  }
];

export default function Pricing() {
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              data-aos="fade-up"
              className={`relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 p-8 ${
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
                <div className="flex items-baseline justify-center">
                  <span className="font-heading font-bold text-4xl text-wedera-primary">
                    Rp {plan.price}
                  </span>
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
                href="/order"
                className={`block w-full py-3 rounded-full font-medium transition-colors duration-300 text-center ${
                  plan.popular
                    ? 'bg-wedera-primary text-white hover:bg-wedera-secondary'
                    : 'bg-wedera-pastel text-wedera-primary hover:bg-wedera-primary hover:text-white'
                }`}
              >
                Pesan Sekarang
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 