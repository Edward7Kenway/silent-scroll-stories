
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ScrollIndicator = () => {
  const [activeSection, setActiveSection] = useState('home');
  
  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'timeline', label: 'Timeline' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'timeline', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 1 }}
      className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block"
    >
      <nav className="flex flex-col space-y-4">
        {sections.map((section) => (
          <motion.button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="group relative w-3 h-3 rounded-full transition-all duration-300"
            whileHover={{ scale: 1.5 }}
          >
            <div
              className={`w-full h-full rounded-full transition-all duration-300 ${
                activeSection === section.id
                  ? 'bg-primary scale-150 shadow-lg shadow-primary/50'
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
            <motion.div
              className="absolute right-6 top-1/2 transform -translate-y-1/2 px-3 py-1 glass-strong rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ x: 10 }}
              whileHover={{ x: 0 }}
            >
              {section.label}
            </motion.div>
          </motion.button>
        ))}
      </nav>
    </motion.div>
  );
};

export default ScrollIndicator;
