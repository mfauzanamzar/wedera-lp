import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import type { Template } from './types';

interface TemplateCardProps {
  template: Template;
  index: number;
}

const TemplateCard = ({ template, index }: TemplateCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    margin: "-50px 0px" 
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0, 
        scale: 1 
      } : { 
        opacity: 0, 
        y: 50, 
        scale: 0.9 
      }}
      transition={{ 
        duration: 0.4,
        delay: index * 0.1,
        ease: "easeOut"
      }}
      layout
    >
      <Link
        href={template.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden block"
        aria-label={`View ${template.title} demo`}
      >
        <div className="aspect-[3/4] relative">
          <Image
            src={template.image}
            alt={template.title}
            width={215}
            height={286}
            className="object-cover transition-transform duration-300 group-hover:scale-105 w-full h-full object-cover"
            loading="lazy"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
            <div className="p-3 sm:p-4 md:p-6 text-white w-full">
              <h3 className="font-heading font-semibold text-sm sm:text-base md:text-xl mb-1 sm:mb-2">
                {template.title}
              </h3>
              <span className="bg-white text-wedera-primary px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-full text-xs sm:text-sm font-medium inline-block transition-colors duration-300 group-hover:bg-wedera-primary group-hover:text-white">
                Lihat Demo
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default TemplateCard;
export type { TemplateCardProps }; 