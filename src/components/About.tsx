
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Zap, Layers, Palette, Server, Smartphone } from 'lucide-react';

const About = () => {
  const techStack = [
    {
      category: 'Frontend',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React', logo: '⚛️' },
        { name: 'Next.js', logo: '▲' },
        { name: 'TypeScript', logo: 'TS' },
        { name: 'Tailwind', logo: '🎨' }
      ]
    },
    {
      category: 'Backend',
      icon: Database,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Node.js', logo: '🟢' },
        { name: 'Python', logo: '🐍' },
        { name: 'PostgreSQL', logo: '🐘' },
        { name: 'MongoDB', logo: '🍃' }
      ]
    },
    {
      category: 'Tools',
      icon: Globe,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Git', logo: '📝' },
        { name: 'Docker', logo: '🐳' },
        { name: 'AWS', logo: '☁️' },
        { name: 'Figma', logo: '🎯' }
      ]
    },
    {
      category: 'Animation',
      icon: Zap,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Framer Motion', logo: '🎬' },
        { name: 'GSAP', logo: '⚡' },
        { name: 'CSS Animations', logo: '💫' },
        { name: 'Three.js', logo: '🎲' }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="about" className="py-32 px-6 relative">
      {/* Background noise effect */}
      <div className="absolute inset-0 opacity-30">
        <div className="w-full h-full noise" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-4xl mx-auto leading-relaxed">
            I'm a passionate full-stack developer who loves creating exceptional digital experiences. 
            With a strong foundation in modern web technologies, I focus on building performant, 
            accessible, and visually stunning applications that users love to interact with.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {techStack.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-strong p-8 rounded-3xl hover:glow-purple transition-all duration-500 group"
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <div className="text-center">
                  <motion.div
                    className={`w-16 h-16 mx-auto mb-6 p-4 bg-gradient-to-br ${category.color} bg-opacity-20 rounded-2xl group-hover:scale-110 transition-all duration-300`}
                    whileHover={{ rotate: 10, scale: 1.2 }}
                  >
                    <IconComponent className="w-full h-full text-white" />
                  </motion.div>
                  
                  <h3 className="text-xl font-semibold text-gradient mb-6">{category.category}</h3>
                  
                  <motion.div 
                    className="grid grid-cols-2 gap-3"
                    variants={containerVariants}
                  >
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        variants={skillVariants}
                        className="flex flex-col items-center p-3 glass rounded-xl hover:glow-purple transition-all duration-300 group/skill"
                        whileHover={{ scale: 1.05, y: -2 }}
                      >
                        <span className="text-2xl mb-2 group-hover/skill:scale-110 transition-transform duration-300">
                          {skill.logo}
                        </span>
                        <span className="text-xs text-foreground/70 font-medium text-center">
                          {skill.name}
                        </span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
