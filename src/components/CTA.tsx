import Link from 'next/link';

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-wedera-secondary to-wedera-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 
          data-aos="fade-up"
          className="font-heading font-bold text-3xl md:text-4xl text-white mb-6"
        >
          Sudah Siap Membuat Undangan Pernikahan Digitalmu?
        </h2>
        <p 
          data-aos="fade-up"
          className="text-white/90 font-body text-lg mb-8"
        >
          Ciptakan momen spesial pernikahanmu dengan undangan digital yang elegan dan memukau
        </p>
        <Link
          href="https://wa.me/6282151527990"
          target="_blank"
          data-aos="fade-up"
          className="inline-block bg-white text-wedera-primary hover:bg-wedera-pastel px-8 py-4 rounded-full text-lg font-medium transition-colors duration-300 shadow-lg hover:shadow-xl"
        >
          Pesan Sekarang
        </Link>
      </div>
    </section>
  );
} 