
import React, { useState } from 'react';
import { ThemeProvider } from '../components/ThemeProvider';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import ProjectCard from '../components/ProjectCard';
import ProjectFilters from '../components/ProjectFilters';
import Timeline from '../components/Timeline';
import ScrollIndicator from '../components/ScrollIndicator';
import Toast from '../components/Toast';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Github, Twitter, Instagram, Send, CheckCircle } from 'lucide-react';
import { useContactForm } from '../hooks/useContactForm';

const Index = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const projects = [
    {
      title: "Portfolio",
      description: "A modern portfolio built with React and Next.js featuring glassmorphism design and smooth animations",
      technologies: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
      githubUrl: "https://github.com/username/portfolio",
      liveUrl: "https://portfolio-demo.com",
      category: "React",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
    },
    {
      title: "Crypto Market",
      description: "Real-time cryptocurrency dashboard with interactive charts and portfolio tracking",
      technologies: ["React", "Firebase", "Tailwind CSS", "Framer Motion", "Chart.js"],
      githubUrl: "https://github.com/username/crypto-market",
      liveUrl: "https://crypto-market-demo.com",
      category: "Fullstack",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&h=400&fit=crop"
    },
    {
      title: "Modern Glass Todo",
      description: "A sleek, glassmorphism-style todo app with filters, animations, and local storage",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "LocalStorage", "React Hot Toast"],
      githubUrl: "https://github.com/username/glass-todo",
      liveUrl: "https://glass-todo-demo.com",
      category: "React",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop"
    },
    {
      title: "Mesho App",
      description: "E-commerce platform with shopping cart, product filters, and payment integration",
      technologies: ["React", "Context API", "Styled Components", "Stripe"],
      githubUrl: "https://github.com/username/mesho-app",
      liveUrl: "https://mesho-app-demo.com",
      category: "Fullstack",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop"
    },
    {
      title: "Q-trip",
      description: "Travel booking application with destination filters and interactive maps",
      technologies: ["React", "Bootstrap", "JavaScript", "Mapbox"],
      githubUrl: "https://github.com/username/q-trip",
      liveUrl: "https://q-trip-demo.com",
      category: "React",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop"
    }
  ];

  const categories = ['All', 'React', 'Fullstack', 'Design'];
  
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const {
    formData,
    errors,
    isSubmitting,
    isSubmitted,
    showToast,
    handleChange,
    handleSubmit,
    setIsSubmitted,
    setShowToast
  } = useContactForm();

  return (
    <ThemeProvider>
      <div className="min-h-screen dark">
        <Navigation />
        <ScrollIndicator />
        <Toast 
          show={showToast} 
          onClose={() => setShowToast(false)}
          message="Message sent successfully! I'll get back to you soon 🚀"
        />
        
        <Hero />
        <About />
        
        {/* Enhanced Projects Section */}
        <section id="projects" className="py-32 px-6 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-8">
                Featured <span className="text-gradient">Projects</span>
              </h2>
              <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
                A showcase of my recent work, featuring modern web applications built with cutting-edge technologies
              </p>
            </motion.div>
            
            <ProjectFilters
              categories={categories}
              activeCategory={activeFilter}
              onCategoryChange={setActiveFilter}
            />
            
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeFilter}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
              >
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={`${activeFilter}-${index}`}
                    initial={{ opacity: 0, y: 80, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                    className="min-h-[500px]"
                  >
                    <ProjectCard {...project} />
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        <Timeline />
        
        {/* Enhanced Contact Section */}
        <section id="contact" className="py-32 px-6 relative">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-8">
                Let's <span className="text-gradient">Connect</span>
              </h2>
              <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
                I'm always open to opportunities, collaborations, or a friendly chat about tech. 
                Reach out via form or socials!
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              <motion.div
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <motion.div 
                  className="glass-strong p-10 rounded-3xl hover:glow-purple transition-all duration-500"
                  whileHover={{ scale: 1.02, rotateY: 2 }}
                >
                  <h3 className="text-3xl font-semibold text-gradient mb-8">Get in Touch</h3>
                  <div className="space-y-6">
                    <motion.a
                      href="mailto:aman7work@gmail.com"
                      whileHover={{ x: 10, scale: 1.02 }}
                      className="flex items-center gap-4 p-4 rounded-xl hover:bg-purple-500/10 transition-all duration-300 group/item"
                    >
                      <motion.div
                        className="p-3 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-xl"
                        whileHover={{ rotate: 10, scale: 1.1 }}
                      >
                        <Mail className="w-6 h-6 text-purple-400" />
                      </motion.div>
                      <div>
                        <h4 className="font-semibold mb-1 text-lg">Email</h4>
                        <p className="text-foreground/70">aman7work@gmail.com</p>
                      </div>
                    </motion.a>
                    
                    <motion.div
                      whileHover={{ x: 10, scale: 1.02 }}
                      className="flex items-center gap-4 p-4 rounded-xl hover:bg-purple-500/10 transition-all duration-300 group/item"
                    >
                      <motion.div
                        className="p-3 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-xl"
                        whileHover={{ rotate: 10, scale: 1.1 }}
                      >
                        <MapPin className="w-6 h-6 text-purple-400" />
                      </motion.div>
                      <div>
                        <h4 className="font-semibold mb-1 text-lg">Location</h4>
                        <p className="text-foreground/70">Delhi, India</p>
                      </div>
                    </motion.div>
                  </div>
                  
                  <div className="flex gap-6 mt-10">
                    <motion.a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 glass rounded-xl hover:glow-purple transition-all duration-300 group/social"
                      whileHover={{ scale: 1.1, y: -5, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-8 h-8 group-hover/social:text-purple-400 transition-colors duration-300" />
                    </motion.a>
                    <motion.a
                      href="https://twitter.com"
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-4 glass rounded-xl hover:glow-purple transition-all duration-300 group/social"
                      whileHover={{ scale: 1.1, y: -5, rotate: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Twitter className="w-8 h-8 group-hover/social:text-purple-400 transition-colors duration-300" />
                    </motion.a>
                    <motion.a
                      href="https://instagram.com"
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-4 glass rounded-xl hover:glow-purple transition-all duration-300 group/social"
                      whileHover={{ scale: 1.1, y: -5, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Instagram className="w-8 h-8 group-hover/social:text-purple-400 transition-colors duration-300" />
                    </motion.a>
                  </div>
                </motion.div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <motion.form 
                  onSubmit={handleSubmit}
                  className="glass-strong p-10 rounded-3xl space-y-8 hover:glow-purple transition-all duration-500"
                  whileHover={{ scale: 1.02, rotateY: -2 }}
                >
                  <AnimatePresence mode="wait">
                    {isSubmitted ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-12"
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                          className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4"
                        >
                          <CheckCircle className="w-8 h-8 text-green-400" />
                        </motion.div>
                        <h3 className="text-2xl font-semibold text-gradient mb-2">Message Sent!</h3>
                        <p className="text-foreground/70 mb-6">Thanks! I'll get back to you soon 🚀</p>
                        <motion.button
                          onClick={() => setIsSubmitted(false)}
                          className="px-6 py-2 glass rounded-xl hover:glow-purple transition-all duration-300"
                          whileHover={{ scale: 1.05 }}
                        >
                          Send Another
                        </motion.button>
                      </motion.div>
                    ) : (
                      <>
                        <motion.div className="group">
                          <motion.input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            className={`w-full px-6 py-4 bg-white/5 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300 text-lg ${
                              errors.name ? 'border-red-500/50 focus:ring-red-500/50' : 'border-white/10'
                            }`}
                            whileFocus={{ scale: 1.02 }}
                          />
                          <AnimatePresence>
                            {errors.name && (
                              <motion.p
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="text-red-400 text-sm mt-2 ml-2"
                              >
                                {errors.name}
                              </motion.p>
                            )}
                          </AnimatePresence>
                        </motion.div>
                        
                        <motion.div className="group">
                          <motion.input
                            type="email"
                            name="email" 
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="your.email@example.com"
                            className={`w-full px-6 py-4 bg-white/5 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300 text-lg ${
                              errors.email ? 'border-red-500/50 focus:ring-red-500/50' : 'border-white/10'
                            }`}
                            whileFocus={{ scale: 1.02 }}
                          />
                          <AnimatePresence>
                            {errors.email && (
                              <motion.p
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="text-red-400 text-sm mt-2 ml-2"
                              >
                                {errors.email}
                              </motion.p>
                            )}
                          </AnimatePresence>
                        </motion.div>
                        
                        <motion.div className="group">
                          <motion.textarea
                            rows={6}
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Tell me about your project..."
                            className={`w-full px-6 py-4 bg-white/5 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300 resize-none text-lg ${
                              errors.message ? 'border-red-500/50 focus:ring-red-500/50' : 'border-white/10'
                            }`}
                            whileFocus={{ scale: 1.02 }}
                          />
                          <AnimatePresence>
                            {errors.message && (
                              <motion.p
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="text-red-400 text-sm mt-2 ml-2"
                              >
                                {errors.message}
                              </motion.p>
                            )}
                          </AnimatePresence>
                        </motion.div>
                        
                        <motion.button
                          type="submit"
                          disabled={isSubmitting}
                          className={`relative w-full py-5 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-indigo-700 transition-all duration-300 group overflow-hidden text-lg flex items-center justify-center gap-3 ${
                            isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                          }`}
                          whileHover={!isSubmitting ? { 
                            scale: 1.02,
                            boxShadow: "0 0 40px rgba(147, 51, 234, 0.5)"
                          } : {}}
                          whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                        >
                          <AnimatePresence mode="wait">
                            {isSubmitting ? (
                              <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="flex items-center gap-3"
                              >
                                <motion.div
                                  animate={{ rotate: 360 }}
                                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                  className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                                />
                                Sending...
                              </motion.div>
                            ) : (
                              <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="flex items-center gap-3"
                              >
                                <Send className="w-5 h-5" />
                                Send Message
                              </motion.span>
                            )}
                          </AnimatePresence>
                          
                          {/* Ripple effect */}
                          <motion.div
                            className="absolute inset-0 bg-white/20 scale-0 rounded-xl"
                            whileTap={{ scale: 1 }}
                            transition={{ duration: 0.3 }}
                          />
                        </motion.button>
                      </>
                    )}
                  </AnimatePresence>
                </motion.form>
              </motion.div>
            </div>
          </div>
        </section>

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
              className="flex flex-col md:flex-row justify-between items-center"
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
                © 2025 Aman Maurya. Built with React & Tailwind CSS.
              </motion.div>
            </motion.div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default Index;
