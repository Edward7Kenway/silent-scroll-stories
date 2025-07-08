
import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

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
    <motion.div 
      className="group glass-strong rounded-3xl overflow-hidden hover:glow-purple transition-all duration-500 transform hover:-translate-y-2 flex flex-col min-h-[500px]"
      whileHover={{ scale: 1.02 }}
    >
      <div className="aspect-video bg-gradient-to-br from-purple-900/30 to-indigo-900/30 relative overflow-hidden">
        {image ? (
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center relative">
            <div className="text-8xl text-foreground/20 font-bold group-hover:scale-110 transition-transform duration-500">
              {title.charAt(0)}
            </div>
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      
      <div className="p-6 md:p-8 space-y-6 flex-1 flex flex-col">
        <h3 className="text-2xl font-semibold text-gradient group-hover:scale-105 transition-transform duration-300">
          {title}
        </h3>
        <p className="text-foreground/70 leading-relaxed text-lg flex-1">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-3">
          {technologies.map((tech, index) => (
            <motion.span
              key={index}
              className="px-4 py-2 text-sm glass rounded-full text-foreground/80 hover:text-purple-400 hover:glow-purple transition-all duration-300 cursor-default"
              whileHover={{ scale: 1.05, y: -2 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
        
        <div className="flex gap-4 pt-4">
          {githubUrl && (
            <motion.a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 glass rounded-xl hover:text-purple-400 hover:glow-purple transition-all duration-300 flex-1 justify-center"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-5 h-5" />
              Code
            </motion.a>
          )}
          {liveUrl && (
            <motion.a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl text-white hover:from-purple-600 hover:to-indigo-700 transition-all duration-300 flex-1 justify-center"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink className="w-5 h-5" />
              Live Demo
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
