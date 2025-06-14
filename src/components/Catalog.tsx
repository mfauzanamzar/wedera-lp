'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const categories = [
  { id: 21, name: 'Bugoy' },
  { id: 20, name: 'Minimalis' },
  { id: 22, name: 'Floral' },
  { id: 23, name: 'Adat' },
  { id: 24, name: 'Non Foto' },
  { id: 25, name: 'Art' },
  { id: 26, name: 'Luxury' },
  { id: 27, name: 'Luna' },
];

interface Template {
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  link: string;
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
    }>;
  };
}

export default function Catalog() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [templates, setTemplates] = useState<Template[]>([]);
  const [loading, setLoading] = useState(true);
  const [categoryCache, setCategoryCache] = useState<Record<number, Template[]>>({});

  useEffect(() => {
    const fetchTemplates = async () => {
      // Check if data exists in cache
      if (categoryCache[activeCategory.id]) {
        setTemplates(categoryCache[activeCategory.id]);
        setLoading(false);
        return;
      }

      setLoading(true);
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/posts?categories=${activeCategory.id}&_embed&per_page=20`
        );
        const data = await response.json();
        setTemplates(data);
        // Store in cache
        setCategoryCache(prev => ({
          ...prev,
          [activeCategory.id]: data
        }));
      } catch (error) {
        console.error('Error fetching templates:', error);
      }
      setLoading(false);
    };

    fetchTemplates();
  }, [activeCategory.id, categoryCache]);

  return (
    <section id="catalog" className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          data-aos="fade-up"
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-neutral-dark mb-4">
            Katalog Undangan
          </h2>
          <p className="text-neutral-dark/60 font-body text-lg">
            Pilih desain yang sesuai dengan kepribadian Anda
          </p>
        </div>

        {/* Category Tabs */}
        <div 
          data-aos="fade-up"
          data-aos-delay="100"
          className="grid grid-cols-2 lg:grid-cols-8 justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-colors duration-300 ${
                activeCategory.id === category.id
                  ? 'bg-wedera-primary text-white'
                  : 'bg-wedera-pastel text-wedera-primary hover:bg-wedera-primary/10'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Loading State */}
        {loading ? (
          <div 
            data-aos="fade-up"
            data-aos-delay="200"
            className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8"
          >
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="bg-neutral-light rounded-2xl aspect-[3/4] animate-pulse"
              />
            ))}
          </div>
        ) : (
          /* Template Grid */
          <div 
                      data-aos="fade-up"
            data-aos-delay="200"
          className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8">
            {templates.map((template) => (
              <Link
                key={template.id}
                href={template.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="aspect-[3/4] relative">
                  <Image
                    src={template._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/placeholder.jpg'}
                    alt={template.title.rendered}
                    width={215}
                    height={286}
                    className="object-cover transition-transform duration-300 group-hover:scale-105 w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="p-3 sm:p-4 md:p-6 text-white w-full">
                      <h3 
                        className="font-heading font-semibold text-sm sm:text-base md:text-xl mb-1 sm:mb-2"
                        dangerouslySetInnerHTML={{ __html: template.title.rendered }}
                      />
                      <div className="bg-white text-wedera-primary px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-full text-xs sm:text-sm font-medium inline-block transition-colors duration-300 group-hover:bg-wedera-primary group-hover:text-white">
                        Lihat Demo
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
} 