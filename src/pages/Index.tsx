
import React from 'react';
import { ThemeProvider } from '../components/ThemeProvider';
import Navigation from '../components/Navigation';
import ScrollProgress from '../components/ScrollProgress';
import Hero from '../components/Hero';
import About from '../components/About';
import FeaturedProjects from '../components/FeaturedProjects';
import VerticalTimeline from '../components/VerticalTimeline';
import ContactForm from '../components/ContactForm';
import { motion } from 'framer-motion';

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen dark">
        <ScrollProgress />
        <Navigation />
        
        <Hero />
        <About />
        <FeaturedProjects />
        <VerticalTimeline />
        <ContactForm />

        {/* Enhanced Footer */}
        <footer className="py-16 px-6 border-t border-purple-500/20 relative">
          <motion.div
            className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
          />
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row justify-between items-center gap-6"
            >
              <motion.div 
                className="text-3xl font-bold text-gradient mb-6 md:mb-0 relative group"
                whileHover={{ scale: 1.05 }}
              >
                Aman.Maurya
                <motion.div
                  className="absolute -inset-4 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
              </motion.div>
              <motion.div 
                className="text-foreground/60 text-center md:text-right text-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                © 2025 Aman Maurya | Built with React & Tailwind CSS
              </motion.div>
            </motion.div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default Index;
