import { motion } from 'framer-motion';
import type { Category } from './types';

interface CategoryButtonProps {
  category: Category;
  isActive: boolean;
  onClick: (category: Category) => void;
}

const CategoryButton = ({ category, isActive, onClick }: CategoryButtonProps) => (
  <motion.button
    onClick={() => onClick(category)}
    className={`px-6 py-2 rounded-full transition-colors duration-300 relative overflow-hidden ${
      isActive 
        ? 'text-white' 
        : 'bg-wedera-pastel text-wedera-primary hover:bg-wedera-primary/10'
    }`}
    type="button"
    aria-pressed={isActive}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {/* Animated background for active state */}
    {isActive && (
      <motion.div
        className="absolute inset-0 bg-wedera-primary"
        layoutId="activeBackground"
        initial={false}
        transition={{
          duration: 0.2,
          ease: "easeInOut"
        }}
      />
    )}
    
    {/* Text content */}
    <span className="relative z-10">
      {category.name}
    </span>
  </motion.button>
);

export default CategoryButton;
export type { CategoryButtonProps }; 