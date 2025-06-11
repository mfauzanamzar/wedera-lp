'use client';

import { useEffect, useState } from 'react';
import { Clock } from 'lucide-react';

export default function DiscountBanner() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set end date to 16 days from now
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 16);

    const timer = setInterval(() => {
      const now = new Date();
      const difference = endDate.getTime() - now.getTime();

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
  }, []);

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
            Promo Spesial! <span className="text-wedera-primary bg-white px-2 py-1 rounded-md ring-animation">Diskon 50%</span>
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
              Promo berakhir pada {new Date(new Date().setDate(new Date().getDate() + 16)).toLocaleDateString('id-ID', { 
                day: 'numeric',
                month: 'long',
                year: 'numeric'
              })}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
} 