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

// Enhanced LocalBusiness Schema (better for rich snippets)
const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.wedera.id/#organization",
  "name": "Wedera",
  "alternateName": ["Wedera Indonesia", "Wedera Undangan Digital"],
  "url": "https://www.wedera.id",
  "logo": {
    "@type": "ImageObject",
    "url": "https://www.wedera.id/icons/android-chrome-192x192.png",
    "width": 192,
    "height": 192
  },
  "image": [
    "https://www.wedera.id/images/ogimg.png",
    "https://www.wedera.id/icons/android-chrome-192x192.png"
  ],
  "description": "Wedera adalah platform undangan digital terpercaya di Indonesia. Kami menyediakan layanan undangan pernikahan digital yang elegan, mudah dibagikan, dan terjangkau.",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "ID",
    "addressRegion": "Indonesia"
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+62-821-5152-7990",
      "contactType": "customer service",
      "availableLanguage": ["Indonesian", "English"],
      "areaServed": "ID"
    }
  ],
  "sameAs": [
    "https://www.instagram.com/wedera.id/",
  ],
  "priceRange": "Rp 55.000 - Rp 129.000",
  "currenciesAccepted": "IDR",
  "paymentAccepted": ["Cash", "Bank Transfer", "E-Wallet"],
  "serviceArea": {
    "@type": "Country",
    "name": "Indonesia"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "150",
    "bestRating": "5",
    "worstRating": "1"
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

// Service Schema (more appropriate than Product)
const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Undangan Digital Wedera",
  "description": "Layanan pembuatan undangan pernikahan digital yang elegan dan mudah dibagikan melalui WhatsApp, email, dan media sosial.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Wedera",
    "url": "https://www.wedera.id"
  },
  "areaServed": {
    "@type": "Country",
    "name": "Indonesia"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Paket Undangan Digital",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "Paket Non Foto",
        "description": "Untuk pernikahan sederhana dan elegan",
        "price": "79000",
        "priceCurrency": "IDR",
        "availability": "https://schema.org/InStock",
        "url": "https://www.wedera.id",
        "priceValidUntil": "2025-12-31",
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
        "price": "129000",
        "priceCurrency": "IDR",
        "availability": "https://schema.org/InStock",
        "url": "https://www.wedera.id",
        "priceValidUntil": "2025-12-31",
        "itemOffered": {
          "@type": "Service",
          "name": "Undangan Digital Premium",
          "description": "Paket undangan digital premium dengan semua fitur Non Foto, desain tema premium, galeri foto (maks. 20 foto), revisi unlimited, custom font dan color, serta coba 2 template sebelum memilih"
        }
      }
    ]
  },
  "category": "Wedding Services",
  "serviceType": "Digital Wedding Invitation",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "150",
    "bestRating": "5",
    "worstRating": "1"
  }
};

// FAQ Schema (great for rich snippets)
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Apa itu undangan digital?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Undangan digital adalah versi modern dari undangan pernikahan tradisional yang dapat diakses melalui perangkat digital seperti smartphone atau komputer. Undangan digital Wedera menawarkan desain elegan, interaktif, dan mudah dibagikan melalui WhatsApp, email, atau media sosial."
      }
    },
    {
      "@type": "Question",
      "name": "Berapa harga undangan digital Wedera?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Wedera menawarkan 2 paket: Paket Non Foto mulai dari Rp 55.000 dan Paket Premium Rp 90.000. Kedua paket sudah termasuk desain elegan, RSVP digital, countdown timer, dan amplop digital."
      }
    },
    {
      "@type": "Question",
      "name": "Bagaimana cara membagikan undangan digital?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Undangan digital Wedera dapat dibagikan melalui WhatsApp, email, media sosial, atau SMS. Kami menyediakan generator link undangan yang memudahkan Anda mengirim undangan personal kepada setiap tamu."
      }
    },
    {
      "@type": "Question",
      "name": "Berapa lama proses pembuatan undangan digital?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Undangan digital Wedera dapat selesai dalam 1-2 hari kerja untuk template standar. Kami juga menyediakan revisi unlimited untuk paket Premium agar undangan sesuai dengan keinginan Anda."
      }
    }
  ]
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
          id="local-business-json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <Script
          id="breadcrumb-json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
        <Script
          id="service-json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
        />
        <Script
          id="faq-json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
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


