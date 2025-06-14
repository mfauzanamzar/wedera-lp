'use client';

import { useEffect, useState } from 'react';
import { Clock } from 'lucide-react';

interface DiscountBannerProps {
  endDate: Date;
}

export default function DiscountBanner({ endDate }: DiscountBannerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      // Get current time in WIB
      const now = new Date();
      const wibOffset = 7 * 60; // WIB is UTC+7
      const localOffset = now.getTimezoneOffset(); // Get local timezone offset in minutes
      const wibNow = new Date(now.getTime() + (wibOffset + localOffset) * 60000);

      // Calculate difference in WIB timezone
      const difference = endDate.getTime() - wibNow.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [endDate]);

  return (
    <section className="py-12 bg-gradient-to-r from-wedera-primary to-wedera-secondary">
      <style jsx>{`
        @keyframes ring {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }
        .ring-animation {
          animation: ring 1s ease-in-out infinite;
          display: inline-block;
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center" data-aos="fade-up">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">
            Promo Spesial! <span className="text-wedera-primary bg-white px-2 py-1 rounded-md ring-animation">Diskon 30%</span>
          </h2>
          <p className="text-white/90 font-body text-lg mb-8">
            Dapatkan undangan digital elegan dengan harga spesial. Promo berakhir dalam:
          </p>

          <div className="flex justify-center items-center gap-4 md:gap-8 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 min-w-[80px]">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                {timeLeft.days}
              </div>
              <div className="text-white/80 text-sm">Hari</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 min-w-[80px]">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                {timeLeft.hours}
              </div>
              <div className="text-white/80 text-sm">Jam</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 min-w-[80px]">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                {timeLeft.minutes}
              </div>
              <div className="text-white/80 text-sm">Menit</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 min-w-[80px]">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                {timeLeft.seconds}
              </div>
              <div className="text-white/80 text-sm">Detik</div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 text-white/90">
            <Clock className="w-5 h-5" />
            <span className="font-body">
              Promo berakhir pada {endDate.toLocaleDateString('id-ID', { 
                day: 'numeric',
                month: 'long',
                year: 'numeric',
                timeZone: 'Asia/Jakarta'
              })}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
} 