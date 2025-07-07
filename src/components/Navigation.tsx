
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'glass-strong py-4' : 'py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-gradient">
            Portfolio
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative px-4 py-2 rounded-lg transition-all duration-300 ${
                  location.pathname === item.path
                    ? 'text-primary bg-primary/10'
                    : 'text-foreground/80 hover:text-primary hover:bg-white/5'
                }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 animate-glow-pulse" />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg glass hover:bg-white/10 transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 glass-strong rounded-xl p-4 animate-fade-in">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block py-3 px-4 rounded-lg transition-all duration-300 ${
                  location.pathname === item.path
                    ? 'text-primary bg-primary/10'
                    : 'text-foreground/80 hover:text-primary hover:bg-white/5'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
