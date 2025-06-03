'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center bg-white/90 backdrop-blur-md rounded-full shadow-sm px-6 py-3">
          <Link href="/" className="flex items-center">
            <span className="font-display text-3xl text-wedera-primary">Wedera</span>
          </Link>
          
          <Link 
            href="/order" 
            className="bg-wedera-primary hover:bg-wedera-secondary text-white px-6 py-2 rounded-full transition-colors duration-300 font-heading font-medium"
          >
            Pesan Sekarang
          </Link>
        </div>
      </div>
    </nav>
  );
} 