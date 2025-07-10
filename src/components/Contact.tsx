import { Mail, MessageCircle } from 'lucide-react';

const contactInfo = {
  title: "Hubungi Kami",
  description: "Tim kami siap membantu Anda membuat undangan pernikahan digital yang sempurna",
  contacts: [
    {
      name: "WhatsApp",
      icon: MessageCircle,
      description: "Chat dengan kami",
      value: "0821-5152-7990",
      link: "https://wa.me/6282151527990"
    },
    {
      name: "Email",
      icon: Mail,
      description: "Kirim pesan email",
      value: "idwedera@gmail.com",
      link: "mailto:idwedera@gmail.com"
    }
  ],
  businessHours: "Setiap hari, 09:00 - 22:00 WIB"
};

export default function Contact() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-wedera-pastel">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-neutral-dark mb-4">
            {contactInfo.title}
          </h2>
          <p className="text-neutral-dark/60 font-body text-lg max-w-2xl mx-auto">
            {contactInfo.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {contactInfo.contacts.map((contact) => (
            <a
              key={contact.name}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              data-aos="fade-up"
              className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 text-center"
            >
              <div className="w-14 h-14 bg-wedera-pastel rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <contact.icon className="w-7 h-7 text-wedera-primary" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-neutral-dark mb-2">
                {contact.name}
              </h3>
              <p className="text-neutral-dark/60 font-body mb-3">
                {contact.description}
              </p>
              <span className="text-wedera-primary font-medium group-hover:underline">
                {contact.value}
              </span>
            </a>
          ))}
        </div>

        <div className="mt-16 text-center" data-aos="fade-up">
          <p className="text-neutral-dark/60 font-body">
            Jam Operasional: {contactInfo.businessHours}
          </p>
        </div>
      </div>
    </section>
  );
} 