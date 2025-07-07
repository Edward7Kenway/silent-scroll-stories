
import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)`,
        }}
      />
      
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <p className="text-lg text-foreground/60 font-medium tracking-wider uppercase animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
              Software Engineer
            </p>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight animate-slide-in-right" style={{ animationDelay: '0.4s' }}>
              Hi, I'm <span className="text-gradient">Aman</span>
            </h1>
            <h2 className="text-2xl md:text-4xl font-semibold text-foreground/80 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              Full Stack Developer
            </h2>
          </div>
          
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.8s' }}>
            Crafting exceptional digital experiences with modern technologies. 
            Passionate about clean code, innovative solutions, and bringing ideas to life.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-scale-in" style={{ animationDelay: '1s' }}>
            <button 
              onClick={scrollToProjects}
              className="px-8 py-4 glass-strong rounded-xl hover:glow transition-all duration-300 group"
            >
              View My Work
              <ChevronDown className="inline-block ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </button>
            <a 
              href="/contact" 
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 glow-purple"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 glass rounded-full animate-glow-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute top-3/4 right-10 w-32 h-32 glass rounded-full animate-glow-pulse" style={{ animationDelay: '3s' }} />
      <div className="absolute bottom-20 left-1/4 w-16 h-16 glass rounded-full animate-glow-pulse" style={{ animationDelay: '4s' }} />
    </section>
  );
};

export default Hero;
