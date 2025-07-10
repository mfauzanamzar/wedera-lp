'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CategoryButton, TemplateCard, CATEGORIES, TEMPLATES } from './catalog/index';
import type { Category } from './catalog/index';

const Catalog = () => {
  const [activeCategory, setActiveCategory] = useState<Category>(CATEGORIES[0]);
  const currentTemplates = TEMPLATES[activeCategory.id] || [];

  const handleCategoryChange = (category: Category) => {
    setActiveCategory(category);
  };

  return (
    <section id="catalog" className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header data-aos="fade-up" className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-neutral-dark mb-4">
            Katalog Undangan
          </h2>
          <p className="text-neutral-dark/60 font-body text-lg">
            Pilih desain yang sesuai dengan kepribadian Anda
          </p>
        </header>

        {/* Category Navigation */}
        <nav
          data-aos="fade-up"
          data-aos-delay="100"
          className="grid grid-cols-2 lg:grid-cols-8 justify-center gap-4 mb-12"
          role="tablist"
          aria-label="Template categories"
        >
          {CATEGORIES.map((category) => (
            <CategoryButton
              key={category.id}
              category={category}
              isActive={activeCategory.id === category.id}
              onClick={handleCategoryChange}
            />
          ))}
        </nav>

        {/* Template Grid */}
        <AnimatePresence mode="wait">
          <motion.main
            key={activeCategory.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1}}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: 0.2,
              ease: "easeInOut"
            }}
            className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8"
            role="tabpanel"
            aria-labelledby={`category-${activeCategory.id}`}
          >
            {currentTemplates.map((template, index) => (
              <TemplateCard 
                key={`${activeCategory.id}-${template.id}`} 
                template={template} 
                index={index}
              />
            ))}
          </motion.main>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Catalog; 