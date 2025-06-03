import { Mail, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 
          data-aos="fade-up"
          className="font-heading font-bold text-3xl md:text-4xl text-neutral-dark mb-6"
        >
          Hubungi Kami
        </h2>
        <p 
          data-aos="fade-up"
          className="text-neutral-dark/60 font-body text-lg mb-12"
        >
          Ada pertanyaan? Tim kami siap membantu Anda
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            className="group flex flex-col items-center p-8 bg-neutral-light rounded-2xl hover:bg-wedera-pastel transition-colors duration-300"
          >
            <MessageCircle className="w-12 h-12 text-wedera-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="font-heading font-semibold text-xl text-neutral-dark mb-2">
              WhatsApp
            </h3>
            <p className="text-neutral-dark/60 font-body">
              Chat dengan kami
            </p>
          </a>

          <a
            href="mailto:hello@wedera.id"
            data-aos="fade-up"
            className="group flex flex-col items-center p-8 bg-neutral-light rounded-2xl hover:bg-wedera-pastel transition-colors duration-300"
          >
            <Mail className="w-12 h-12 text-wedera-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="font-heading font-semibold text-xl text-neutral-dark mb-2">
              Email
            </h3>
            <p className="text-neutral-dark/60 font-body">
              hello@wedera.id
            </p>
          </a>
        </div>
      </div>
    </section>
  );
} 