'use client';

import {
    Paintbrush, Image as Photo, Heart,
    Sparkles, Clock, Share2, Music,
    Calendar, MapPin, Gift, Users,
    CheckCircle
} from 'lucide-react';

const features = [
  {
    icon: Paintbrush,
    title: 'Desain Custom',
    description: 'Pilih dari berbagai tema elegan atau custom sesuai keinginan'
  },
  {
    icon: Share2,
    title: 'Mudah Dibagikan',
    description: 'Bagikan undangan melalui WhatsApp, email, atau media sosial'
  },
  {
    icon: Photo,
    title: 'Galeri Foto',
    description: 'Tampilkan momen spesial dalam galeri foto yang memukau'
  },
  {
    icon: CheckCircle,
    title: 'Konfirmasi RSVP',
    description: 'Sistem RSVP digital untuk memudahkan konfirmasi tamu'
  },
  {
    icon: Heart,
    title: 'Love Story',
    description: 'Ceritakan kisah cinta kalian dengan cara yang romantis'
  },
  {
    icon: Sparkles,
    title: 'Animasi Elegan',
    description: 'Transisi dan animasi halus untuk pengalaman yang memukau'
  },
  {
    icon: Music,
    title: 'Background Music',
    description: 'Tambahkan musik latar untuk suasana yang lebih romantis'
  },
  {
    icon: Calendar,
    title: 'Countdown Timer',
    description: 'Hitung mundur menuju hari pernikahan yang ditunggu'
  },
  {
    icon: MapPin,
    title: 'Peta Lokasi',
    description: 'Tampilkan lokasi acara dengan peta interaktif'
  },
  {
    icon: Gift,
    title: 'Amplop Digital',
    description: 'Fitur amplop digital untuk kemudahan transfer hadiah'
  },
  {
    icon: Users,
    title: 'Daftar Tamu',
    description: 'Kelola daftar tamu dengan mudah dan terorganisir'
  },
  {
    icon: Clock,
    title: 'Jadwal Acara',
    description: 'Tampilkan timeline acara dengan detail waktu'
  }
];

export default function Features() {
  return (
    <section className="py-16 sm:py-20 bg-wedera-pastel/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16" data-aos="fade-up">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-neutral-dark mb-3 sm:mb-4">
            Fitur Unggulan Wedera
          </h2>
          <p className="text-neutral-dark/60 font-body text-base sm:text-lg max-w-2xl mx-auto">
            Semua yang Anda butuhkan untuk undangan pernikahan digital yang sempurna
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 text-center lg:text-left"
            >
              <div className="w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-wedera-pastel rounded-lg sm:rounded-xl flex items-center justify-center mb-2 sm:mb-4 md:mb-6 mx-auto lg:mx-0">
                <feature.icon className="w-4 h-4 sm:w-6 sm:h-6 md:w-7 md:h-7 text-wedera-primary" />
              </div>
              <h3 className="font-heading font-semibold text-xs sm:text-base md:text-lg text-neutral-dark mb-1 sm:mb-2 md:mb-3">
                {feature.title}
              </h3>
              <p className="text-neutral-dark/60 font-body text-[10px] sm:text-sm md:text-base hidden sm:block">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 