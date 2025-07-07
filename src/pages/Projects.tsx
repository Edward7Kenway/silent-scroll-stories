
import React from 'react';
import Navigation from '../components/Navigation';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A comprehensive e-commerce solution with advanced features like inventory management, payment processing, and analytics dashboard.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Redis", "Docker"],
      githubUrl: "https://github.com/username/ecommerce",
      liveUrl: "https://ecommerce-demo.com",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop"
    },
    {
      title: "Task Management App",
      description: "A collaborative project management tool with real-time updates, team chat, and advanced reporting features.",
      technologies: ["Next.js", "TypeScript", "Prisma", "Socket.io", "Tailwind CSS"],
      githubUrl: "https://github.com/username/taskmanager",
      liveUrl: "https://taskmanager-demo.com"
    },
    {
      title: "AI Chat Application",
      description: "An intelligent conversational AI application with context awareness, multiple AI models, and conversation history.",
      technologies: ["React", "Python", "FastAPI", "OpenAI", "MongoDB", "WebSocket"],
      githubUrl: "https://github.com/username/aichat",
      liveUrl: "https://aichat-demo.com"
    },
    {
      title: "Social Media Dashboard",
      description: "A comprehensive social media management platform with analytics, scheduling, and multi-platform posting capabilities.",
      technologies: ["Vue.js", "Laravel", "MySQL", "Chart.js", "AWS S3"],
      githubUrl: "https://github.com/username/social-dashboard"
    },
    {
      title: "Real Estate Platform",
      description: "A modern real estate listing platform with advanced search, virtual tours, and mortgage calculator features.",
      technologies: ["React", "Spring Boot", "PostgreSQL", "Elasticsearch", "Mapbox"],
      githubUrl: "https://github.com/username/realestate",
      liveUrl: "https://realestate-demo.com"
    },
    {
      title: "Cryptocurrency Tracker",
      description: "A real-time cryptocurrency tracking application with portfolio management, price alerts, and market analysis.",
      technologies: ["React Native", "Node.js", "MongoDB", "WebSocket", "CoinGecko API"],
      githubUrl: "https://github.com/username/crypto-tracker"
    }
  ];

  return (
    <div className="min-h-screen noise">
      <Navigation />
      
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              My <span className="text-gradient">Projects</span>
            </h1>
            <p className="text-xl text-foreground/70 max-w-4xl mx-auto leading-relaxed">
              A collection of projects that showcase my skills in full-stack development, 
              from concept to deployment. Each project represents a unique challenge and learning experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
