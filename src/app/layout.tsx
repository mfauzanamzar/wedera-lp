import type { Metadata } from "next";
import { Inter, Poppins, Playfair_Display, Great_Vibes } from "next/font/google";
import "./globals.css";
import AOSInit from "@/components/AOSInit";
import Script from "next/script";
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins"
});
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair"
});
const greatVibes = Great_Vibes({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-great-vibes"
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Wedera - Undangan Digital",
  "url": "https://www.wedera.id",
  "description": "Buat undangan digital dan online yang elegan untuk pernikahan Anda. Tersedia berbagai tema undangan pernikahan digital yang memukau, mudah dibagikan, dan penuh makna.",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.wedera.id/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

// Organization Schema
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Wedera",
  "url": "https://www.wedera.id",
  "logo": "https://www.wedera.id/icons/android-chrome-192x192.png",
  "description": "Wedera adalah platform undangan digital dan online yang elegan untuk pernikahan Anda",
  "sameAs": [
    "https://instagram.com/wedera",
    "https://facebook.com/wedera",
    "https://twitter.com/wedera"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+62-821-5152-7990",
    "contactType": "customer service",
    "availableLanguage": ["Indonesian", "English"]
  }
};

// BreadcrumbList Schema
const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{
    "@type": "ListItem",
    "position": 1,
    "name": "Home",
    "item": "https://www.wedera.id"
  }]
};

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Undangan Digital Wedera",
  "description": "Buat undangan digital dan online yang elegan untuk pernikahan Anda",
  "image": [
    "https://www.wedera.id/images/ogimg.png",
    "https://www.wedera.id/images/tema-hero-adat-1.webp",
    "https://www.wedera.id/images/tema-hero-art-1.webp",
    "https://www.wedera.id/images/tema-hero-jawa-1.webp"
  ],
  "offers": [
    {
      "@type": "Offer",
      "name": "Paket Non Foto",
      "description": "Untuk pernikahan sederhana dan elegan",
      "price": "55000",
      "priceCurrency": "IDR",
      "availability": "https://schema.org/InStock",
      "url": "https://www.wedera.id",
      "priceValidUntil": "2025-06-30",
      "itemOffered": {
        "@type": "Service",
        "name": "Undangan Digital Non Foto",
        "description": "Paket undangan digital dengan tema non foto, RSVP digital, peta lokasi, love story section, countdown timer, amplop digital, dan coba 1 template sebelum memilih"
      }
    },
    {
      "@type": "Offer",
      "name": "Paket Premium",
      "description": "Untuk pernikahan yang lebih spesial",
      "price": "90000",
      "priceCurrency": "IDR",
      "availability": "https://schema.org/InStock",
      "url": "https://www.wedera.id",
      "priceValidUntil": "2025-06-30",
      "itemOffered": {
        "@type": "Service",
        "name": "Undangan Digital Premium",
        "description": "Paket undangan digital premium dengan semua fitur Non Foto, desain tema premium, galeri foto (maks. 20 foto), revisi unlimited, custom font dan color, serta coba 2 template sebelum memilih"
      }
    }
  ],
  "brand": {
    "@type": "Brand",
    "name": "Wedera"
  }
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.wedera.id'),
  title: {
    default: 'Undangan Digital & Online - Wedera | Undangan Nikah',
    template: '%s | Wedera'
  },
  description: 'Buat undangan digital dan online yang elegan untuk pernikahan Anda. Tersedia berbagai tema undangan pernikahan digital yang memukau dan mudah dibagikan.',
  keywords: [
    'undangan digital',
    'undangan online',
    'undangan',
    'undangan pernikahan digital',
    'undangan nikah online',
    'undangan pernikahan online',
    'undangan pernikahan elegan',
    'wedding invitation',
    'wedding invitation online',
    'digital wedding invitation',
    'wedera'
  ],
  authors: [{ name: 'Wedera Team' }],
  creator: 'Wedera',
  publisher: 'Wedera',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/icons/favicon.ico' },
    ],
    apple: [
      { url: '/icons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'icon',
        url: '/icons/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      }
    ]
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://www.wedera.id',
    siteName: 'Wedera - Undangan Digital',
    title: 'Undangan Digital & Online - Wedera | Undangan Nikah',
    description: 'Buat undangan digital dan online yang elegan untuk pernikahan Anda. Tersedia berbagai tema undangan pernikahan digital yang memukau dan mudah dibagikan.',
    images: [
      {
        url: '/images/ogimg.png',
        width: 1200,
        height: 630,
        alt: 'Wedera - Undangan Digital & Online',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Undangan Digital & Online - Wedera | Undangan Nikah',
    description: 'Buat undangan digital dan online yang elegan untuk pernikahan Anda. Tersedia berbagai tema undangan pernikahan digital yang memukau dan mudah dibagikan.',
    images: ['/images/ogimg.png'],
    creator: '@wedera',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code',
    yahoo: 'yahoo-verification-code',
  },
  alternates: {
    canonical: 'https://www.wedera.id',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        <link rel="icon" href="/icons/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icons/android-chrome-192x192.png" />
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          id="organization-json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Script
          id="breadcrumb-json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
        <Script
          id="product-json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${poppins.variable} ${playfair.variable} ${greatVibes.variable} font-body`}>
        <AOSInit />
        {children}
        <Analytics />
      </body>
    </html>
  );
}


