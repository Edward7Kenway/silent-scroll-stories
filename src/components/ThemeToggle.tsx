
import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative p-3 glass-strong rounded-full hover:glow-purple transition-all duration-500"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        animate={{ 
          rotate: theme === 'dark' ? 0 : 180,
          scale: theme === 'dark' ? 1 : 1.1
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="w-6 h-6"
      >
        <Lightbulb 
          className={`w-6 h-6 transition-colors duration-500 ${
            theme === 'dark' 
              ? 'text-purple-400' 
              : 'text-yellow-500 fill-yellow-500'
          }`} 
        />
      </motion.div>
      
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{
          boxShadow: theme === 'dark' 
            ? '0 0 0px rgba(147, 51, 234, 0)' 
            : '0 0 20px rgba(234, 179, 8, 0.4), 0 0 40px rgba(234, 179, 8, 0.2)'
        }}
        transition={{ duration: 0.5 }}
      />
    </motion.button>
  );
};

export default ThemeToggle;
