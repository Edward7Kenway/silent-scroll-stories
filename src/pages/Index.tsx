
import React from 'react';
import { ThemeProvider } from '../components/ThemeProvider';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import ProjectCard from '../components/ProjectCard';
import Timeline from '../components/Timeline';
import ScrollIndicator from '../components/ScrollIndicator';
import { motion } from 'framer-motion';
import { Mail, MapPin, Github, Twitter } from 'lucide-react';

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
      <div className="min-h-screen dark">
        <Navigation />
        <ScrollIndicator />
        <Hero />
        <About />
        
        {/* Projects Section */}
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -15, scale: 1.03 }}
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
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <motion.div
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <motion.div 
                  className="glass-strong p-10 rounded-3xl hover:glow-purple transition-all duration-500 group"
                  whileHover={{ scale: 1.02, rotateY: 2 }}
                >
                  <h3 className="text-3xl font-semibold text-gradient mb-8">Get in Touch</h3>
                  <div className="space-y-6">
                    <motion.a
                      href="mailto:aman7work@gmail.com"
                      whileHover={{ x: 10 }}
                      className="flex items-center gap-4 p-4 rounded-xl hover:bg-purple-500/10 transition-all duration-300 group/item"
                    >
                      <Mail className="text-3xl text-purple-400 group-hover/item:scale-110 transition-transform duration-300" />
                      <div>
                        <h4 className="font-semibold mb-1 text-lg">Email</h4>
                        <p className="text-foreground/70">aman7work@gmail.com</p>
                      </div>
                    </motion.a>
                    <motion.div
                      whileHover={{ x: 10 }}
                      className="flex items-center gap-4 p-4 rounded-xl hover:bg-purple-500/10 transition-all duration-300 group/item"
                    >
                      <MapPin className="text-3xl text-purple-400 group-hover/item:scale-110 transition-transform duration-300" />
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
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-8 h-8 group-hover/social:text-purple-400 transition-colors duration-300" />
                    </motion.a>
                    <motion.a
                      href="https://twitter.com"
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-4 glass rounded-xl hover:glow-purple transition-all duration-300 group/social"
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Twitter className="w-8 h-8 group-hover/social:text-purple-400 transition-colors duration-300" />
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
                  className="glass-strong p-10 rounded-3xl space-y-8 hover:glow-purple transition-all duration-500"
                  whileHover={{ scale: 1.02, rotateY: -2 }}
                >
                  <motion.div className="group">
                    <motion.input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300 text-lg"
                      whileFocus={{ scale: 1.02 }}
                    />
                  </motion.div>
                  <motion.div className="group">
                    <motion.input
                      type="email"
                      placeholder="your.email@example.com"
                      className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300 text-lg"
                      whileFocus={{ scale: 1.02 }}
                    />
                  </motion.div>
                  <motion.div className="group">
                    <motion.textarea
                      rows={6}
                      placeholder="Tell me about your project..."
                      className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300 resize-none text-lg"
                      whileFocus={{ scale: 1.02 }}
                    />
                  </motion.div>
                  <motion.button
                    type="submit"
                    className="w-full py-5 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-indigo-700 transition-all duration-300 group relative overflow-hidden text-lg"
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 0 40px rgba(147, 51, 234, 0.5)"
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10">Send Message</span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </motion.button>
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
