
import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

// Enhanced tech color mapping with softer colors
const getTechColor = (tech: string) => {
  const colorMap: { [key: string]: string } = {
    'React': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    'Next.js': 'bg-slate-500/10 text-slate-300 border-slate-500/20',
    'TypeScript': 'bg-blue-600/10 text-blue-400 border-blue-600/20',
    'JavaScript': 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
    'Tailwind CSS': 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
    'CSS3': 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
    'Node.js': 'bg-green-500/10 text-green-400 border-green-500/20',
    'Express': 'bg-green-600/10 text-green-400 border-green-600/20',
    'MongoDB': 'bg-green-600/10 text-green-400 border-green-600/20',
    'Firebase': 'bg-orange-500/10 text-orange-400 border-orange-500/20',
    'Framer Motion': 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    'Chart.js': 'bg-pink-500/10 text-pink-400 border-pink-500/20',
    'Stripe': 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
    'Bootstrap': 'bg-purple-600/10 text-purple-400 border-purple-600/20',
    'Mapbox': 'bg-blue-700/10 text-blue-400 border-blue-700/20',
    'Context API': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    'Styled Components': 'bg-pink-600/10 text-pink-400 border-pink-600/20',
    'LocalStorage': 'bg-slate-600/10 text-slate-400 border-slate-600/20',
    'React Hot Toast': 'bg-orange-600/10 text-orange-400 border-orange-600/20',
    'REST APIs': 'bg-green-700/10 text-green-400 border-green-700/20'
  };
  return colorMap[tech] || 'bg-[#a78bfa]/10 text-[#a78bfa] border-[#a78bfa]/20';
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
      className="group backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 ease-in-out flex flex-col h-full hover:scale-105 hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-[#a78bfa]/10"
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="aspect-[16/10] bg-gradient-to-br from-[#a78bfa]/10 to-[#c084fc]/10 relative overflow-hidden">
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
              className="absolute inset-0 bg-gradient-to-br from-[#a78bfa]/20 to-[#c084fc]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-6 space-y-3 flex-1 flex flex-col">
        <h3 className="text-xl font-semibold text-foreground group-hover:text-[#a78bfa] transition-all duration-300 mb-1">
          {title}
        </h3>
        <p className="text-foreground/70 leading-relaxed text-sm flex-1 line-clamp-3 mb-3">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.slice(0, 4).map((tech, index) => (
            <motion.span
              key={index}
              className={`px-2.5 py-1 text-xs rounded-lg border transition-all duration-200 cursor-default font-medium ${getTechColor(tech)}`}
              whileHover={{ scale: 1.05 }}
            >
              {tech}
            </motion.span>
          ))}
          {technologies.length > 4 && (
            <span className="px-2.5 py-1 text-xs font-medium rounded-lg border bg-slate-500/10 text-slate-400 border-slate-500/20">
              +{technologies.length - 4}
            </span>
          )}
        </div>
        
        <div className="flex gap-3">
          {githubUrl && (
            <motion.a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 backdrop-blur-md bg-white/10 border border-white/20 text-white rounded-lg hover:bg-white/20 transition-all duration-200 flex-1 justify-center text-sm font-medium hover:scale-105"
              whileTap={{ scale: 0.95 }}
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
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#a78bfa] to-[#c084fc] rounded-lg text-white hover:from-[#8b5cf6] hover:to-[#a78bfa] transition-all duration-200 flex-1 justify-center text-sm font-medium hover:scale-105"
              whileTap={{ scale: 0.95 }}
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
