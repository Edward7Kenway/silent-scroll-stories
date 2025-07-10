
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from './ProjectCard';
import ProjectFilters from './ProjectFilters';

const FeaturedProjects = () => {
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

  return (
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
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
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
