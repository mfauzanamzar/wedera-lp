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
  title: "Wedera - Undangan Pernikahan Digital yang Elegan & Personal",
  description: "Ciptakan undangan pernikahan digital yang memukau, mudah dibagikan, dan penuh makna dengan Wedera.",
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
