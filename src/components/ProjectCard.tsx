
import React from 'react';
import { Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  githubUrl,
  liveUrl,
  image
}) => {
  return (
    <div className="group glass rounded-2xl overflow-hidden hover:glow transition-all duration-500 transform hover:-translate-y-2">
      <div className="aspect-video bg-gradient-to-br from-blue-900/20 to-purple-900/20 relative overflow-hidden">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-6xl text-foreground/20 font-bold">{title.charAt(0)}</div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-semibold text-gradient">{title}</h3>
        <p className="text-foreground/70 leading-relaxed">{description}</p>
        
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm glass rounded-full text-foreground/80"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4 pt-4">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 glass-strong rounded-lg hover:text-primary transition-colors"
            >
              <Github className="w-4 h-4" />
              Code
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white hover:from-blue-600 hover:to-purple-700 transition-all"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
