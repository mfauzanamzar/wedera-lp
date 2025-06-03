import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-wedera-pastel to-white ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
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
            className="relative w-full h-full lg:block hidden"
          >
            <Image
              src="/images/img-hero.png"
              alt="Wedera Digital Invitation Preview"
              width={280}
              height={560}
              className="w-full h-full object-cover object-left overflow-visible"
              priority
            />
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="hidden lg:block absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
} 