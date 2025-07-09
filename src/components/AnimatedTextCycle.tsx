
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AnimatedTextCycleProps {
  texts: string[];
  className?: string;
}

const AnimatedTextCycle: React.FC<AnimatedTextCycleProps> = ({ texts, className = '' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }, 2000); // Optimized timing

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div className={`relative ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ 
            duration: 0.4, 
            ease: [0.25, 0.46, 0.45, 0.94] // Smoother easing
          }}
          className="inline-block will-change-transform"
        >
          {texts[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default AnimatedTextCycle;
