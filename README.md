# Wedera - Undangan Pernikahan Digital

Wedera adalah platform undangan pernikahan digital yang elegan dan personal. Dibangun dengan Next.js dan Tailwind CSS, Wedera menawarkan pengalaman yang memukau untuk pasangan yang ingin membuat undangan pernikahan digital mereka.

## 🚀 Fitur

- **Desain Elegan**: Berbagai template undangan yang elegan dan modern
- **Responsif**: Tampilan yang sempurna di semua perangkat
- **Animasi**: Efek scroll yang halus menggunakan AOS
- **Optimasi SEO**: Dibangun dengan Next.js untuk performa dan SEO yang optimal
- **Integrasi WordPress**: Menggunakan WordPress sebagai headless CMS

## 🛠️ Teknologi

- [Next.js 14](https://nextjs.org/) - React Framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS Framework
- [AOS](https://michalsnik.github.io/aos/) - Animate On Scroll Library
- [Lucide Icons](https://lucide.dev/) - Icon Library
- [WordPress REST API](https://developer.wordpress.org/rest-api/) - Headless CMS

## 📦 Instalasi

1. Clone repository
```bash
git clone https://github.com/yourusername/wedera-lp.git
cd wedera-lp
```

2. Install dependencies
```bash
npm install
```

3. Buat file `.env` di root project
```env
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_API_URL=

4. Jalankan development server
```bash
npm run dev
```

## 🏗️ Struktur Project

```
wedera-lp/
├── src/
│   ├── app/                 # App router
│   │   ├── page.tsx        # Home page
│   │   ├── template.tsx    # Template page
│   │   └── api.ts          # API routes
│   ├── components/          # React components
│   │   ├── Hero.tsx        # Hero section
│   │   ├── Features.tsx    # Features section
│   │   ├── Catalog.tsx     # Template catalog
│   │   ├── Pricing.tsx     # Pricing plans
│   │   ├── FAQ.tsx         # FAQ section
│   │   ├── CTA.tsx         # Call to action
│   │   ├── Contact.tsx     # Contact section
│   │   ├── Footer.tsx      # Footer
│   │   └── AOSInit.tsx     # AOS initialization
│   └── styles/             # Global styles
├── public/                 # Static files
├── .env.example           # Example environment variables
├── next.config.js         # Next.js configuration
└── package.json           # Project dependencies
```

## 🎨 Komponen

### Hero Section
- Tampilan utama dengan headline dan CTA
- Animasi fade-up pada scroll
- Gambar hero yang responsif

### Features Section
- Grid fitur dengan ikon
- Animasi fade-up pada setiap card
- Desain yang clean dan modern

### Catalog Section
- Grid template undangan
- Filter berdasarkan kategori
- Integrasi dengan WordPress API
- Loading state yang elegan

### Pricing Section
- Tiga paket harga
- Highlight paket populer
- Fitur list yang detail
- CTA untuk setiap paket

### FAQ Section
- Accordion style
- Animasi smooth
- Pertanyaan umum yang informatif

### CTA Section
- Background gradient
- CTA yang menonjol
- Animasi fade-up

### Contact Section
- Kontak WhatsApp dan Email
- Ikon yang interaktif
- Layout yang responsif

## 📝 Lisensi

© 2025 Wedera. All rights reserved.
