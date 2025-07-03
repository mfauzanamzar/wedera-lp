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
# WordPress API Configuration
NEXT_PUBLIC_API_URL=https://your-wordpress-api.com/wp-json/wp/v2

# Promo Banner Configuration
NEXT_PUBLIC_SHOW_DISCOUNT_BANNER=true
NEXT_PUBLIC_PROMO_TITLE=Promo Spesial!
NEXT_PUBLIC_PROMO_PERCENTAGE=30
NEXT_PUBLIC_PROMO_DESCRIPTION=Dapatkan undangan digital elegan dengan harga spesial. Promo berakhir dalam:
NEXT_PUBLIC_PROMO_END_DATE=2025-06-30T23:59:59

# Pricing Configuration
NEXT_PUBLIC_PRICE_NON_FOTO_ORIGINAL=79.000
NEXT_PUBLIC_PRICE_NON_FOTO=55.000
NEXT_PUBLIC_PRICE_PREMIUM_ORIGINAL=129.000
NEXT_PUBLIC_PRICE_PREMIUM=90.000

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://wedera.id
```

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

## ⚙️ Konfigurasi Promo Banner

Banner promo dapat dikonfigurasi melalui environment variables tanpa perlu mengubah kode:

### Environment Variables untuk Promo:

| Variable | Description | Default Value |
|----------|-------------|---------------|
| `NEXT_PUBLIC_SHOW_DISCOUNT_BANNER` | Tampilkan/sembunyikan banner promo | "false" |
| `NEXT_PUBLIC_PROMO_TITLE` | Judul utama promo | "Promo Spesial!" |
| `NEXT_PUBLIC_PROMO_PERCENTAGE` | Persentase diskon (tanpa simbol %) | "30" |
| `NEXT_PUBLIC_PROMO_DESCRIPTION` | Deskripsi promo | "Dapatkan undangan digital elegan dengan harga spesial. Promo berakhir dalam:" |
| `NEXT_PUBLIC_PROMO_END_DATE` | Tanggal berakhir promo (ISO format) | "2025-06-30T23:59:59" |
| `NEXT_PUBLIC_PRICE_NON_FOTO_ORIGINAL` | Harga asli paket Non Foto | "79.000" |
| `NEXT_PUBLIC_PRICE_NON_FOTO` | Harga promo paket Non Foto | "55.000" |
| `NEXT_PUBLIC_PRICE_PREMIUM_ORIGINAL` | Harga asli paket Premium | "129.000" |
| `NEXT_PUBLIC_PRICE_PREMIUM` | Harga promo paket Premium | "90.000" |

### Contoh Penggunaan:

Untuk mengubah promo menjadi "Flash Sale 50%", update file `.env`:

```env
NEXT_PUBLIC_SHOW_DISCOUNT_BANNER=true
NEXT_PUBLIC_PROMO_TITLE=Flash Sale!
NEXT_PUBLIC_PROMO_PERCENTAGE=50
NEXT_PUBLIC_PROMO_DESCRIPTION=Penawaran terbatas! Dapatkan undangan digital premium dengan diskon fantastis. Jangan sampai terlewat:
NEXT_PUBLIC_PROMO_END_DATE=2025-12-31T23:59:59

# Update pricing untuk diskon 50%
NEXT_PUBLIC_PRICE_NON_FOTO_ORIGINAL=79.000
NEXT_PUBLIC_PRICE_NON_FOTO=39.500
NEXT_PUBLIC_PRICE_PREMIUM_ORIGINAL=129.000
NEXT_PUBLIC_PRICE_PREMIUM=64.500
```

Untuk menyembunyikan banner promo:

```env
NEXT_PUBLIC_SHOW_DISCOUNT_BANNER=false
```

### Format Tanggal:

Gunakan format ISO 8601: `YYYY-MM-DDTHH:mm:ss`
- Contoh: `2025-12-31T23:59:59` (31 Desember 2025, jam 23:59:59)

### Fitur Otomatis:

- **Sinkronisasi Discount**: Persentase diskon di pricing section akan otomatis mengikuti `NEXT_PUBLIC_PROMO_PERCENTAGE`
- **Countdown Timer**: Timer akan otomatis berhenti saat mencapai tanggal berakhir
- **Timezone**: Menggunakan WIB (UTC+7) untuk countdown timer
- **Fallback Values**: Jika environment variables tidak diset, akan menggunakan nilai default

## 📝 Lisensi

© 2025 Wedera. All rights reserved.
