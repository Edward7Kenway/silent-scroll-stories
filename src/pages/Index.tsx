
import React from 'react';
import { ThemeProvider } from '../components/ThemeProvider';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import ProjectCard from '../components/ProjectCard';
import Timeline from '../components/Timeline';
import ScrollIndicator from '../components/ScrollIndicator';
import { motion } from 'framer-motion';

const Index = () => {
  const projects = [
    {
      title: "Portfolio",
      description: "A modern portfolio built with React and Next.js",
      technologies: ["React", "Next.js", "Tailwind CSS"],
      githubUrl: "https://github.com/username/portfolio",
      liveUrl: "https://portfolio-demo.com"
    },
    {
      title: "Crypto Market",
      description: "Crypto dashboard with graph",
      technologies: ["React", "Firebase", "Tailwind CSS", "Framer Motion"],
      githubUrl: "https://github.com/username/crypto-market",
      liveUrl: "https://crypto-market-demo.com"
    },
    {
      title: "Modern Glass Todo",
      description: "A sleek, glassmorphism-style todo app with filters, toast, localStorage",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "LocalStorage", "React Hot Toast"],
      githubUrl: "https://github.com/username/glass-todo",
      liveUrl: "https://glass-todo-demo.com"
    },
    {
      title: "Mesho App",
      description: "E-commerce platform with cart",
      technologies: ["React", "Context API", "Styled Components"],
      githubUrl: "https://github.com/username/mesho-app",
      liveUrl: "https://mesho-app-demo.com"
    },
    {
      title: "Q-trip",
      description: "Travel booking app with filters",
      technologies: ["React", "Bootstrap", "JavaScript"],
      githubUrl: "https://github.com/username/q-trip",
      liveUrl: "https://q-trip-demo.com"
    }
  ];

  return (
    <ThemeProvider>
      <div className="min-h-screen noise dark">
        <Navigation />
        <ScrollIndicator />
        <Hero />
        <About />
        
        {/* Projects Section */}
        <section id="projects" className="py-32 px-6 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                Featured <span className="text-gradient">Projects</span>
              </h2>
              <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
                A showcase of my recent work, featuring modern web applications built with cutting-edge technologies
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group"
                >
                  <ProjectCard {...project} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Timeline />
        
        {/* Contact Section */}
        <section id="contact" className="py-32 px-6 relative">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                Let's <span className="text-gradient">Connect</span>
              </h2>
              <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
                I'm always open to opportunities, collaborations, or a friendly chat about tech. 
                Reach out via form or socials!
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <motion.div 
                  className="glass p-8 rounded-2xl hover:glow transition-all duration-500 group"
                  whileHover={{ scale: 1.02, rotateY: 2 }}
                >
                  <h3 className="text-2xl font-semibold text-primary mb-6">Get in Touch</h3>
                  <div className="space-y-4">
                    <motion.div
                      whileHover={{ x: 10 }}
                      className="flex items-center gap-3"
                    >
                      <span className="text-2xl">📧</span>
                      <div>
                        <h4 className="font-semibold mb-1">Email</h4>
                        <p className="text-foreground/70">aman7work@gmail.com</p>
                      </div>
                    </motion.div>
                    <motion.div
                      whileHover={{ x: 10 }}
                      className="flex items-center gap-3"
                    >
                      <span className="text-2xl">📍</span>
                      <div>
                        <h4 className="font-semibold mb-1">Location</h4>
                        <p className="text-foreground/70">Delhi, India</p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <motion.form 
                  className="glass p-8 rounded-2xl space-y-6 hover:glow transition-all duration-500"
                  whileHover={{ scale: 1.02, rotateY: -2 }}
                >
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                  >
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300"
                    />
                  </motion.div>
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                  >
                    <input
                      type="email"
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300"
                    />
                  </motion.div>
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                  >
                    <textarea
                      rows={6}
                      placeholder="Tell me about your project..."
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300 resize-none"
                    />
                  </motion.div>
                  <motion.button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 group relative overflow-hidden"
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 0 30px rgba(59, 130, 246, 0.4)"
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10">Send Message</span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </motion.button>
                </motion.form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Enhanced Footer */}
        <footer className="py-12 px-6 border-t border-white/10 relative">
          <motion.div
            className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
          />
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row justify-between items-center"
            >
              <motion.div 
                className="text-2xl font-bold text-gradient mb-4 md:mb-0 relative"
                whileHover={{ scale: 1.05 }}
              >
                Aman.
                <motion.div
                  className="absolute -inset-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg blur-lg opacity-0 hover:opacity-100 transition-opacity duration-300"
                />
              </motion.div>
              <motion.div 
                className="text-foreground/60 text-center md:text-right"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                © 2025 Aman Maurya. All rights reserved.
              </motion.div>
            </motion.div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default Index;
