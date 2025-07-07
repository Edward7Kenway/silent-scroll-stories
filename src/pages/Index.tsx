
import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import ProjectCard from '../components/ProjectCard';
import Timeline from '../components/Timeline';
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
    <div className="min-h-screen noise">
      <Navigation />
      <Hero />
      <About />
      
      {/* Projects Section */}
      <section id="projects" className="py-32 px-6">
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
                whileHover={{ y: -10 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Timeline />
      
      {/* Contact Section */}
      <section id="contact" className="py-32 px-6">
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
              <div className="glass p-8 rounded-2xl hover:glow transition-all duration-500">
                <h3 className="text-2xl font-semibold text-primary mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">📧 Email</h4>
                    <p className="text-foreground/70">aman7work@gmail.com</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">📍 Location</h4>
                    <p className="text-foreground/70">Delhi, India</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <form className="glass p-8 rounded-2xl space-y-6 hover:glow transition-all duration-500">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                </div>
                <div>
                  <textarea
                    rows={6}
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                  />
                </div>
                <motion.button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold text-gradient mb-4 md:mb-0">
              Aman.
            </div>
            <div className="text-foreground/60 text-center md:text-right">
              © 2025 Aman Maurya. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
