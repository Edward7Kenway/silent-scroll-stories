
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from './ProjectCard';
import ProjectFilters from './ProjectFilters';

const FeaturedProjects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack marketplace with secure payments, user auth, and real-time inventory management",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Express"],
      githubUrl: "https://github.com/amanmaurya7/ecommerce-platform",
      liveUrl: "https://ecommerce-demo.vercel.app",
      category: "Fullstack",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop"
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with drag-drop boards and team features",
      technologies: ["React", "TypeScript", "Firebase", "Tailwind CSS", "Framer Motion"],
      githubUrl: "https://github.com/amanmaurya7/task-manager",
      liveUrl: "https://taskmanager-demo.vercel.app",
      category: "React",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop"
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather app with location-based forecasts and interactive maps",
      technologies: ["React", "JavaScript", "REST APIs", "CSS3"],
      githubUrl: "https://github.com/amanmaurya7/weather-app",
      liveUrl: "https://weather-dashboard-demo.vercel.app",
      category: "React",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop"
    },
    {
      title: "Crypto Portfolio Tracker",
      description: "Real-time cryptocurrency portfolio with live charts and market analysis",
      technologies: ["React", "Chart.js", "Firebase", "Tailwind CSS"],
      githubUrl: "https://github.com/amanmaurya7/crypto-tracker",
      liveUrl: "https://crypto-portfolio-demo.vercel.app",
      category: "Fullstack",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&h=400&fit=crop"
    },
    {
      title: "Social Media Dashboard",
      description: "Modern social platform with posts, comments, and real-time notifications",
      technologies: ["React", "Node.js", "Socket.io", "PostgreSQL"],
      githubUrl: "https://github.com/amanmaurya7/social-dashboard",
      liveUrl: "https://social-demo.vercel.app",
      category: "Fullstack",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop"
    },
    {
      title: "Developer Portfolio",
      description: "Personal portfolio showcasing projects with glassmorphism design and animations",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "TypeScript"],
      githubUrl: "https://github.com/amanmaurya7/portfolio",
      liveUrl: "https://amanmaurya.dev",
      category: "React",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
    }
  ];

  const categories = ['All', 'React', 'Fullstack', 'Design'];
  
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="bg-gradient-to-r from-[#a78bfa] to-[#c084fc] bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Showcase of modern web applications built with cutting-edge technologies and best practices
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
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={`${activeFilter}-${index}`}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="h-full"
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default FeaturedProjects;
