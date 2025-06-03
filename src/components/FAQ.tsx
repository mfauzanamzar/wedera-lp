'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Apa itu undangan digital?',
    answer: 'Undangan digital adalah versi modern dari undangan pernikahan tradisional yang dapat diakses melalui perangkat digital seperti smartphone atau komputer. Undangan digital Wedera menawarkan desain elegan, interaktif, dan mudah dibagikan.'
  },
  {
    question: 'Bagaimana cara membagikan undangan?',
    answer: 'Anda dapat membagikan undangan digital melalui WhatsApp, email, atau media sosial. Setiap undangan memiliki link unik yang dapat dibagikan dengan mudah ke semua tamu undangan.'
  },
  {
    question: 'Apakah saya bisa request desain custom?',
    answer: 'Ya, pada paket Exclusive, Anda dapat meminta desain custom sesuai dengan keinginan Anda. Tim desainer kami akan membantu mewujudkan konsep undangan yang Anda inginkan.'
  },
  {
    question: 'Apakah undangan bisa diakses tanpa internet?',
    answer: 'Undangan digital membutuhkan koneksi internet untuk diakses. Namun, kami menyediakan fitur offline mode yang memungkinkan tamu menyimpan undangan untuk dibuka kembali tanpa internet.'
  },
  {
    question: 'Berapa lama proses pembuatan undangan?',
    answer: 'Untuk template standar, undangan dapat selesai dalam 1-2 hari kerja. Untuk desain custom, prosesnya memakan waktu 3-5 hari kerja tergantung kompleksitas desain.'
  },
  {
    question: 'Apakah ada batasan jumlah tamu?',
    answer: 'Tidak ada batasan jumlah tamu yang dapat mengakses undangan digital Anda. Anda dapat membagikan undangan ke sebanyak mungkin tamu yang Anda inginkan.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-neutral-dark mb-4">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-neutral-dark/60 font-body text-lg">
            Temukan jawaban untuk pertanyaan umum tentang layanan kami
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className="border border-wedera-pastel rounded-xl overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-wedera-pastel/50 transition-colors duration-200"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-heading font-semibold text-neutral-dark">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-wedera-primary transition-transform duration-200 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              
              <div
                className={`px-6 transition-all duration-200 ${
                  openIndex === index
                    ? 'max-h-96 py-4'
                    : 'max-h-0 overflow-hidden'
                }`}
              >
                <p className="text-neutral-dark/80 font-body">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 