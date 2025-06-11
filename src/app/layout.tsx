import type { Metadata } from "next";
import { Inter, Poppins, Playfair_Display, Great_Vibes } from "next/font/google";
import "./globals.css";
import AOSInit from "@/components/AOSInit";

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

export const metadata: Metadata = {
  metadataBase: new URL('https://wedera.id'),
  title: {
    default: 'Wedera - Undangan Pernikahan Digital yang Elegan & Personal',
    template: '%s | Wedera'
  },
  description: 'Ciptakan undangan pernikahan digital yang memukau, mudah dibagikan, dan penuh makna dengan Wedera. Tersedia berbagai tema elegan dan personal.',
  keywords: ['undangan pernikahan digital', 'undangan nikah online', 'wedding invitation', 'undangan pernikahan elegan', 'wedera'],
  authors: [{ name: 'Wedera Team' }],
  creator: 'Wedera',
  publisher: 'Wedera',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://wedera.id',
    siteName: 'Wedera',
    title: 'Wedera - Undangan Pernikahan Digital yang Elegan & Personal',
    description: 'Ciptakan undangan pernikahan digital yang memukau, mudah dibagikan, dan penuh makna dengan Wedera.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Wedera - Undangan Pernikahan Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wedera - Undangan Pernikahan Digital yang Elegan & Personal',
    description: 'Ciptakan undangan pernikahan digital yang memukau, mudah dibagikan, dan penuh makna dengan Wedera.',
    images: ['/images/twitter-image.jpg'],
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
    canonical: 'https://wedera.id',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={`${inter.variable} ${poppins.variable} ${playfair.variable} ${greatVibes.variable} font-body`}>
        <AOSInit />
        {children}
      </body>
    </html>
  );
}

