'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: 'Beranda', href: '/' },
    { name: 'Tentang Kami', href: '/about' },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    if (href.startsWith('/#')) {
      return pathname === '/' && window.location.hash === href.substring(1);
    }
    return pathname === href;
  };

  return (
    <nav className="fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center bg-white/90 backdrop-blur-md rounded-full shadow-sm px-6 py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="font-display text-3xl text-wedera-primary">Wedera</span>
          </Link>
          
          <div className="flex items-center space-x-8">

         
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-300 hover:text-wedera-primary ${
                  isActive(item.href) 
                    ? 'text-wedera-primary' 
                    : 'text-neutral-dark/70'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Link 
              href="https://wa.me/6282151527990" 
              target="_blank"
              className="bg-wedera-primary hover:bg-wedera-secondary text-white px-6 py-2 rounded-full transition-colors duration-300 font-heading font-medium"
            >
              Pesan Sekarang
            </Link>
          </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-neutral-dark"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 bg-white/95 backdrop-blur-md rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="px-4 py-2 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-300 hover:bg-wedera-primary/10 hover:text-wedera-primary ${
                    isActive(item.href) 
                      ? 'text-wedera-primary bg-wedera-primary/10' 
                      : 'text-neutral-dark/70'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-2 border-t border-gray-100">
                <Link 
                  href="https://wa.me/6282151527990" 
                  target="_blank"
                  className="block w-full text-center bg-wedera-primary hover:bg-wedera-secondary text-white px-4 py-3 rounded-lg transition-colors duration-300 font-heading font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Pesan Sekarang
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 