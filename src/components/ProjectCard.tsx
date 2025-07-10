
import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

// Tech color mapping for better visual engagement
const getTechColor = (tech: string) => {
  const colorMap: { [key: string]: string } = {
    'React': 'bg-blue-500/20 text-blue-300 border-blue-500/30',
    'Next.js': 'bg-gray-500/20 text-gray-300 border-gray-500/30',
    'TypeScript': 'bg-blue-600/20 text-blue-400 border-blue-600/30',
    'JavaScript': 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
    'Tailwind CSS': 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
    'Node.js': 'bg-green-500/20 text-green-300 border-green-500/30',
    'Firebase': 'bg-orange-500/20 text-orange-300 border-orange-500/30',
    'Framer Motion': 'bg-purple-500/20 text-purple-300 border-purple-500/30',
    'Chart.js': 'bg-pink-500/20 text-pink-300 border-pink-500/30',
    'Stripe': 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30'
  };
  return colorMap[tech] || 'bg-purple-500/20 text-purple-300 border-purple-500/30';
};

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
      className="group glass-strong rounded-2xl overflow-hidden transition-all duration-300 flex flex-col h-full shadow-lg hover:shadow-2xl"
      whileHover={{ 
        y: -8,
        scale: 1.02,
        boxShadow: "0 20px 40px rgba(147, 51, 234, 0.3)"
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="aspect-[16/10] bg-gradient-to-br from-purple-900/30 to-indigo-900/30 relative overflow-hidden">
        {image ? (
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center relative">
            <div className="text-6xl text-foreground/30 font-bold group-hover:scale-105 transition-transform duration-300">
              {title.charAt(0)}
            </div>
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-6 space-y-4 flex-1 flex flex-col">
        <h3 className="text-xl font-semibold text-gradient transition-all duration-300">
          {title}
        </h3>
        <p className="text-foreground/70 leading-relaxed text-sm flex-1 line-clamp-3">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <motion.span
              key={index}
              className={`px-3 py-1 text-xs rounded-lg border transition-all duration-300 cursor-default ${getTechColor(tech)}`}
              whileHover={{ scale: 1.05, y: -1 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
        
        <div className="flex gap-3 pt-2">
          {githubUrl && (
            <motion.a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 glass rounded-lg hover:glow-purple transition-all duration-300 flex-1 justify-center text-sm"
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 0 20px rgba(147, 51, 234, 0.4)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <Github className="w-4 h-4" />
              Code
            </motion.a>
          )}
          {liveUrl && (
            <motion.a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg text-white hover:from-purple-600 hover:to-indigo-700 transition-all duration-300 flex-1 justify-center text-sm"
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 0 20px rgba(147, 51, 234, 0.6)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
