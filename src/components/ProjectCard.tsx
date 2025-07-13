
import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

// Enhanced tech color mapping with better visual engagement
const getTechColor = (tech: string) => {
  const colorMap: { [key: string]: string } = {
    'React': 'bg-blue-500/15 text-blue-400 border-blue-500/40 hover:bg-blue-500/25 hover:border-blue-400/60',
    'Next.js': 'bg-gray-500/15 text-gray-300 border-gray-500/40 hover:bg-gray-500/25 hover:border-gray-400/60',
    'TypeScript': 'bg-blue-600/15 text-blue-400 border-blue-600/40 hover:bg-blue-600/25 hover:border-blue-500/60',
    'JavaScript': 'bg-yellow-500/15 text-yellow-400 border-yellow-500/40 hover:bg-yellow-500/25 hover:border-yellow-400/60',
    'Tailwind CSS': 'bg-cyan-500/15 text-cyan-400 border-cyan-500/40 hover:bg-cyan-500/25 hover:border-cyan-400/60',
    'CSS3': 'bg-cyan-500/15 text-cyan-400 border-cyan-500/40 hover:bg-cyan-500/25 hover:border-cyan-400/60',
    'Node.js': 'bg-green-500/15 text-green-400 border-green-500/40 hover:bg-green-500/25 hover:border-green-400/60',
    'Express': 'bg-green-600/15 text-green-400 border-green-600/40 hover:bg-green-600/25 hover:border-green-500/60',
    'MongoDB': 'bg-green-600/15 text-green-400 border-green-600/40 hover:bg-green-600/25 hover:border-green-500/60',
    'Firebase': 'bg-orange-500/15 text-orange-400 border-orange-500/40 hover:bg-orange-500/25 hover:border-orange-400/60',
    'Framer Motion': 'bg-purple-500/15 text-purple-400 border-purple-500/40 hover:bg-purple-500/25 hover:border-purple-400/60',
    'Chart.js': 'bg-pink-500/15 text-pink-400 border-pink-500/40 hover:bg-pink-500/25 hover:border-pink-400/60',
    'Stripe': 'bg-indigo-500/15 text-indigo-400 border-indigo-500/40 hover:bg-indigo-500/25 hover:border-indigo-400/60',
    'Bootstrap': 'bg-purple-600/15 text-purple-400 border-purple-600/40 hover:bg-purple-600/25 hover:border-purple-500/60',
    'Mapbox': 'bg-blue-700/15 text-blue-400 border-blue-700/40 hover:bg-blue-700/25 hover:border-blue-600/60',
    'Context API': 'bg-blue-500/15 text-blue-400 border-blue-500/40 hover:bg-blue-500/25 hover:border-blue-400/60',
    'Styled Components': 'bg-pink-600/15 text-pink-400 border-pink-600/40 hover:bg-pink-600/25 hover:border-pink-500/60',
    'LocalStorage': 'bg-gray-600/15 text-gray-400 border-gray-600/40 hover:bg-gray-600/25 hover:border-gray-500/60',
    'React Hot Toast': 'bg-orange-600/15 text-orange-400 border-orange-600/40 hover:bg-orange-600/25 hover:border-orange-500/60',
    'REST APIs': 'bg-green-700/15 text-green-400 border-green-700/40 hover:bg-green-700/25 hover:border-green-600/60'
  };
  return colorMap[tech] || 'bg-purple-500/15 text-purple-400 border-purple-500/40 hover:bg-purple-500/25 hover:border-purple-400/60';
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
      className="group glass-strong rounded-2xl overflow-hidden transition-all duration-300 flex flex-col h-full shadow-lg hover:shadow-2xl hover:glow-purple"
      whileHover={{ 
        y: -12,
        scale: 1.03,
        boxShadow: "0 25px 50px rgba(147, 51, 234, 0.4), 0 0 0 1px rgba(147, 51, 234, 0.1)"
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
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
      
      <div className="p-6 space-y-3 flex-1 flex flex-col">
        <h3 className="text-xl font-semibold text-gradient transition-all duration-300 mb-1">
          {title}
        </h3>
        <p className="text-foreground/70 leading-relaxed text-sm flex-1 line-clamp-3 mb-3">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <motion.span
              key={index}
              className={`px-3 py-1.5 text-xs rounded-lg border transition-all duration-300 cursor-default font-medium ${getTechColor(tech)}`}
              whileHover={{ scale: 1.05, y: -2 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
        
        <div className="flex gap-3">
          {githubUrl && (
            <motion.a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 glass rounded-xl hover:glow-purple transition-all duration-300 flex-1 justify-center text-sm font-medium"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 0 25px rgba(147, 51, 234, 0.4)"
              }}
              whileTap={{ scale: 0.97 }}
            >
              <Github className="w-4 h-4" />
              View Code
            </motion.a>
          )}
          {liveUrl && (
            <motion.a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl text-white hover:from-purple-600 hover:to-indigo-700 transition-all duration-300 flex-1 justify-center text-sm font-medium glow-purple"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 0 30px rgba(147, 51, 234, 0.6), 0 0 60px rgba(147, 51, 234, 0.3)"
              }}
              whileTap={{ scale: 0.97 }}
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
