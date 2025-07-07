
import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';

const Index = () => {
  const featuredProjects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Redis"],
      githubUrl: "https://github.com/username/ecommerce",
      liveUrl: "https://ecommerce-demo.com",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["Next.js", "TypeScript", "Prisma", "Socket.io", "Tailwind"],
      githubUrl: "https://github.com/username/taskmanager",
      liveUrl: "https://taskmanager-demo.com"
    },
    {
      title: "AI Chat Application",
      description: "An intelligent chat application powered by OpenAI API with conversation history, context awareness, and customizable AI personalities.",
      technologies: ["React", "Python", "FastAPI", "OpenAI", "MongoDB"],
      githubUrl: "https://github.com/username/aichat",
      liveUrl: "https://aichat-demo.com"
    }
  ];

  return (
    <div className="min-h-screen noise">
      <Navigation />
      <Hero />
      
      {/* Featured Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              A showcase of my recent work, featuring modern web applications built with cutting-edge technologies
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className="animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a
              href="/projects"
              className="inline-block px-8 py-4 glass-strong rounded-xl hover:glow transition-all duration-300"
            >
              View All Projects
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
