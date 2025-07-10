import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Tentang Kami - Wedera | Undangan Digital Terpercaya',
  description: 'Wedera adalah platform undangan digital terpercaya di Indonesia. Kami hadir untuk membuat momen pernikahan Anda lebih berkesan dengan undangan digital yang elegan dan modern.',
  keywords: 'tentang wedera, about wedera, undangan digital indonesia, perusahaan undangan digital, tim wedera',
  openGraph: {
    title: 'Tentang Kami - Wedera | Undangan Digital Terpercaya',
    description: 'Wedera adalah platform undangan digital terpercaya di Indonesia. Kami hadir untuk membuat momen pernikahan Anda lebih berkesan dengan undangan digital yang elegan dan modern.',
    url: 'https://www.wedera.id/about',
    siteName: 'Wedera',
    images: [
      {
        url: 'https://www.wedera.id/images/ogimg.png',
        width: 1200,
        height: 630,
        alt: 'Tentang Wedera - Undangan Digital',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tentang Kami - Wedera | Undangan Digital Terpercaya',
    description: 'Wedera adalah platform undangan digital terpercaya di Indonesia. Kami hadir untuk membuat momen pernikahan Anda lebih berkesan dengan undangan digital yang elegan dan modern.',
    images: ['https://www.wedera.id/images/ogimg.png'],
  },
  alternates: {
    canonical: 'https://www.wedera.id/about',
  },
};

export default function About() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-20 bg-gradient-to-br from-wedera-primary/5 to-wedera-pastel/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 
              className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-neutral-dark mb-6"
              data-aos="fade-up"
            >
              Tentang <span className="text-wedera-primary">Wedera</span>
            </h1>
            <p 
              className="text-xl text-neutral-dark/60 max-w-3xl mx-auto"
              data-aos="fade-up" 
              data-aos-delay="100"
            >
              Kami hadir untuk membuat momen pernikahan Anda lebih berkesan dengan undangan digital yang elegan, modern, dan mudah dibagikan.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            <div data-aos="fade-right" className="w-full lg:w-1/2">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-neutral-dark mb-6">
                Cerita Kami
              </h2>
              <div className="space-y-4 text-neutral-dark/70">
                <p>
                  Wedera lahir dari pengalaman pribadi kami dalam merencanakan pernikahan. Kami memahami betapa pentingnya undangan sebagai kesan pertama untuk tamu undangan, namun proses pembuatan undangan tradisional seringkali rumit, mahal, dan memakan waktu.
                </p>
                <p>
                  Di era digital ini, kami melihat kebutuhan akan solusi undangan yang lebih praktis, ramah lingkungan, dan tetap mempertahankan keeleganan. Itulah mengapa Wedera hadir - untuk memberikan solusi undangan digital yang tidak hanya indah secara visual, tetapi juga fungsional dan mudah digunakan.
                </p>
                <p>
                  Dengan tim yang berpengalaman di bidang desain dan teknologi, kami berkomitmen untuk terus menghadirkan inovasi terbaru dalam dunia undangan digital Indonesia.
                </p>
              </div>

              {/* Contact Information */}
              <div className="flex flex-col gap-4 mt-8">
                {/* Phone Number */}
                <div className="flex items-center space-x-3 bg-gradient-to-br from-wedera-pastel/10 to-wedera-primary/5 rounded-xl p-4">
                  <div className="w-12 h-12 bg-wedera-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-wedera-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-lg text-neutral-dark mb-1">
                      Nomor Telepon
                    </h4>
                    <a 
                      href="tel:+6282151527990"
                      className="text-wedera-primary hover:text-wedera-primary/80 font-medium transition-colors duration-300"
                    >
                      +62 821-5152-7990
                    </a>
                    <p className="text-neutral-dark/60 text-sm">
                      WhatsApp & Telepon
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center space-x-3 bg-gradient-to-br from-wedera-pastel/10 to-wedera-primary/5 rounded-xl p-4">
                  <div className="w-12 h-12 bg-wedera-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-wedera-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-lg text-neutral-dark mb-1">
                      Email
                    </h4>
                    <a 
                      href="mailto:hello@wedera.id"
                      className="text-wedera-primary hover:text-wedera-primary/80 font-medium transition-colors duration-300"
                    >
                      hello@wedera.id
                    </a>
                    <p className="text-neutral-dark/60 text-sm">
                      Email Resmi Wedera
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div data-aos="fade-left" className="w-full lg:w-1/2 hidden lg:block">
              <div className="relative">
                <Image
                  src="/images/img-about.png"
                  alt="Tim Wedera"
                  width={600}
                  height={400}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-wedera-pastel/10 to-wedera-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-neutral-dark mb-4">
              Misi & Visi Kami
            </h2>
            <p className="text-neutral-dark/60 text-lg max-w-2xl mx-auto">
              Komitmen kami untuk menghadirkan solusi undangan digital terbaik
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Mission */}
            <div className="bg-white rounded-2xl p-8 shadow-sm" data-aos="fade-up" data-aos-delay="100">
              <div className="w-16 h-16 bg-wedera-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-wedera-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-heading font-semibold text-2xl text-neutral-dark mb-4">
                Misi Kami
              </h3>
              <p className="text-neutral-dark/70 leading-relaxed">
                Memberikan solusi undangan digital yang elegan, terjangkau, dan mudah digunakan untuk setiap pasangan di Indonesia. Kami berkomitmen menghadirkan pengalaman yang tak terlupakan melalui teknologi modern dan desain yang memukau.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-2xl p-8 shadow-sm" data-aos="fade-up" data-aos-delay="200">
              <div className="w-16 h-16 bg-wedera-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-wedera-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="font-heading font-semibold text-2xl text-neutral-dark mb-4">
                Visi Kami
              </h3>
              <p className="text-neutral-dark/70 leading-relaxed">
                Menjadi platform undangan digital #1 di Indonesia yang dikenal karena kualitas desain yang exceptional, layanan pelanggan yang prima, dan inovasi teknologi yang selalu terdepan dalam industri pernikahan digital.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-neutral-dark mb-4">
              Nilai-Nilai Kami
            </h2>
            <p className="text-neutral-dark/60 text-lg max-w-2xl mx-auto">
              Prinsip-prinsip yang memandu setiap langkah kami
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "❤️",
                title: "Passion",
                description: "Kami percaya bahwa setiap pernikahan adalah cerita cinta yang unik dan layak dirayakan dengan indah."
              },
              {
                icon: "✨",
                title: "Quality",
                description: "Komitmen pada kualitas tinggi dalam setiap aspek, dari desain hingga pengalaman pengguna."
              },
              {
                icon: "🚀",
                title: "Innovation",
                description: "Selalu menghadirkan fitur dan teknologi terbaru untuk pengalaman undangan digital terbaik."
              },
              {
                icon: "🤝",
                title: "Trust",
                description: "Membangun kepercayaan melalui transparansi, reliabilitas, dan layanan pelanggan yang responsif."
              }
            ].map((value, index) => (
              <div 
                key={index}
                className="text-center bg-gradient-to-br from-wedera-pastel/10 to-transparent rounded-2xl p-6"
                data-aos="fade-up" 
                data-aos-delay={index * 100}
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="font-heading font-semibold text-xl text-neutral-dark mb-3">
                  {value.title}
                </h3>
                <p className="text-neutral-dark/70 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-wedera-primary to-wedera-primary/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">
              Pencapaian Kami
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Angka-angka yang membuktikan kepercayaan pelanggan
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "1000+", label: "Pasangan Bahagia" },
              { number: "50+", label: "Template Tersedia" },
              { number: "4.8/5", label: "Rating Pelanggan" },
              { number: "24/7", label: "Customer Support" }
            ].map((stat, index) => (
              <div 
                key={index}
                className="text-center"
                data-aos="fade-up" 
                data-aos-delay={index * 100}
              >
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-white/80 text-sm lg:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div data-aos="fade-up">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-neutral-dark mb-6">
              Siap Membuat Undangan Digital Impian Anda?
            </h2>
            <p className="text-xl text-neutral-dark/60 mb-8 max-w-2xl mx-auto">
              Bergabunglah dengan ribuan pasangan yang telah mempercayai Wedera untuk momen spesial mereka.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#catalog"
                className="bg-wedera-primary hover:bg-wedera-primary/90 text-white px-8 py-4 rounded-full font-semibold transition-colors duration-300 inline-flex items-center justify-center"
              >
                Lihat Template
              </Link>
              <Link
                href="/contact"
                className="border-2 border-wedera-primary text-wedera-primary hover:bg-wedera-primary hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 inline-flex items-center justify-center"
              >
                Hubungi Kami
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 