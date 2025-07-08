
import React from 'react';
import { motion } from 'framer-motion';

interface ProjectFiltersProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const ProjectFilters: React.FC<ProjectFiltersProps> = ({
  categories,
  activeCategory,
  onCategoryChange
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      className="flex flex-wrap justify-center gap-3 mb-12"
    >
      {categories.map((category, index) => (
        <motion.button
          key={category}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
          onClick={() => onCategoryChange(category)}
          className={`px-5 py-2 rounded-xl font-medium transition-all duration-300 will-change-transform ${
            activeCategory === category
              ? 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-lg shadow-purple-500/25 scale-105'
              : 'glass hover:glass-strong text-foreground/70 hover:text-purple-400 hover:scale-105'
          }`}
          whileHover={{ scale: activeCategory === category ? 1.05 : 1.08, y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          {category}
          {activeCategory === category && (
            <motion.div
              layoutId="activeFilter"
              className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl -z-10"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
        </motion.button>
      ))}
    </motion.div>
  );
};

export default ProjectFilters;
