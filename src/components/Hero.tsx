import Image from 'next/image';
import Link from 'next/link';

const adatImages = [
  '/images/tema-hero-adat-1.webp',
  '/images/tema-hero-adat-2.webp',
  '/images/tema-hero-adat-3.webp',
  '/images/tema-hero-adat-4.webp',
  '/images/tema-hero-adat-5.webp',
];

const artImages = [
  '/images/tema-hero-art-1.webp',
  '/images/tema-hero-art-2.webp',
  '/images/tema-hero-art-3.webp',
  '/images/tema-hero-art-4.webp',
  '/images/tema-hero-art-5.webp',
];

const jawaImages = [
  '/images/tema-hero-jawa-1.webp',
  '/images/tema-hero-jawa-2.webp',
  '/images/tema-hero-jawa-3.webp',
  '/images/tema-hero-jawa-4.webp',
  '/images/tema-hero-jawa-5.webp',
];

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-wedera-pastel to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 lg:py-40 pt-32 py-10">
            <h1 
              data-aos="fade-up"
              className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-neutral-dark leading-tight"
            >
              Undangan Pernikahan Digital yang{' '}
              <span className="text-wedera-primary">Elegan & Personal</span>
            </h1>
            
            <p 
              data-aos="fade-up"
              className="text-lg md:text-xl text-neutral-dark/80 font-body"
            >
              Ciptakan undangan pernikahan digital yang memukau, mudah dibagikan, dan penuh makna.
            </p>
            
            <Link 
              href="/order"
              data-aos="fade-up"
              className="inline-block bg-wedera-primary hover:bg-wedera-secondary text-white px-8 py-4 rounded-full text-lg font-medium transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Buat Undangan Sekarang
            </Link>
          </div>
          
          <div 
            data-aos="fade-left"
            className="relative w-[130%] h-full lg:block hidden"
          >
            <div className="absolute inset-0 flex gap-4">
              {/* First Column - Adat Theme - Moving Up */}
              <div className="w-1/3 relative">
                <div className="animate-scroll-up">
                  {[...adatImages, ...adatImages].map((src, index) => (
                    <div key={`adat-${index}`} className="mb-4 rounded-lg overflow-hidden shadow-lg">
                      <Image
                        src={src}
                        alt={`Adat Theme ${index + 1}`}
                        width={469}
                        height={850}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Second Column - Art Theme - Moving Down */}
              <div className="w-1/3 relative">
                <div className="animate-scroll-down">
                  {[...artImages, ...artImages].map((src, index) => (
                    <div key={`art-${index}`} className="mb-4 rounded-lg overflow-hidden shadow-lg">
                      <Image
                        src={src}
                        alt={`Art Theme ${index + 1}`}
                        width={469}
                        height={850}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Third Column - Jawa Theme - Moving Up */}
                <div className="w-1/3 relative">
                <div className="animate-scroll-up">
                  {[...jawaImages, ...jawaImages].map((src, index) => (
                    <div key={`jawa-${index}`} className="mb-4 rounded-lg overflow-hidden shadow-lg">
                      <Image
                        src={src}
                        alt={`Jawa Theme ${index + 1}`}
                        width={469}
                        height={850}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="hidden lg:block absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
} 