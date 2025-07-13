
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, ChevronDown } from 'lucide-react';
import AnimatedTextCycle from './AnimatedTextCycle';

const Hero = () => {
  const roles = [
    'Full Stack Developer',
    'React Developer', 
    'Frontend Specialist',
    'UI/UX Developer',
    'JavaScript Expert'
  ];

  return (
    <section id="home" className="min-h-[90vh] flex items-center justify-center px-6 pt-16 pb-12 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Animated Grid */}
        <motion.div 
          className="absolute inset-0 opacity-15"
          animate={{ 
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          }}
        >
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(147, 51, 234, 0.15) 1px, transparent 1px),
                linear-gradient(90deg, rgba(147, 51, 234, 0.15) 1px, transparent 1px)
              `,
              backgroundSize: '80px 80px',
            }}
          />
        </motion.div>

        {/* Enhanced Floating Particles */}
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/50 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Enhanced Background Orbs */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.7, 0.4],
            x: [0, 30, 0],
            y: [0, -20, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-500/15 rounded-full blur-3xl"
          animate={{ 
            scale: [1.1, 1, 1.1],
            opacity: [0.5, 0.8, 0.5],
            x: [0, -30, 0],
            y: [0, 15, 0]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: 1,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.p 
              className="text-lg md:text-xl text-foreground/80 mb-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Hi, I'm Aman Maurya
            </motion.p>
            
            <motion.h1 
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-tight relative mb-8 tracking-tight"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            >
              <span className="relative font-bold bg-gradient-to-r from-[#a78bfa] via-[#c084fc] to-[#8b5cf6] dark:from-[#a78bfa] dark:via-[#c084fc] dark:to-[#8b5cf6] bg-clip-text text-transparent will-change-transform">
                <AnimatedTextCycle texts={roles} />
              </span>
            </motion.h1>
          </motion.div>
          
          <motion.p 
            className="text-lg md:text-xl text-foreground/85 max-w-4xl mx-auto leading-relaxed mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          >
            I craft accessible digital experiences with modern web technologies. 
            Passionate about performant, accessible, and visually stunning apps.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
          >
            <motion.a
              href="#projects"
              className="group relative px-8 py-4 bg-gradient-to-r from-[#a78bfa] to-[#c084fc] text-white font-semibold rounded-2xl overflow-hidden transition-all duration-300 ease-in-out will-change-transform backdrop-blur-md"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 25px rgba(167, 139, 250, 0.4), 0 0 50px rgba(167, 139, 250, 0.2)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center gap-2 text-base font-medium">
                View My Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
              </span>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-[#8b5cf6] to-[#a78bfa] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </motion.a>
            
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl font-medium transition-all duration-300 ease-in-out will-change-transform hover:bg-white/20"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 20px rgba(167, 139, 250, 0.3), 0 0 40px rgba(167, 139, 250, 0.2)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="flex items-center gap-2 text-base">
                <Download className="w-4 h-4" aria-hidden="true" />
                Resume
              </span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Animated Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <motion.div
          className="text-xs text-foreground/60 mb-3 font-medium tracking-wider uppercase"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          Scroll Down
        </motion.div>
        <motion.div
          animate={{ 
            y: [0, 8, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 1.2, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="p-3 glass rounded-full hover:glow-purple transition-all duration-300"
          whileHover={{ scale: 1.15 }}
        >
          <ChevronDown className="w-5 h-5 text-purple-400" aria-hidden="true" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
