
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Zap } from 'lucide-react';

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
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="py-24 px-6 relative">
      {/* Background noise effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full noise" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 max-w-4xl mx-auto leading-relaxed">
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {techStack.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-strong p-6 rounded-2xl hover:glow-purple transition-all duration-300 group will-change-transform"
                whileHover={{ scale: 1.03, y: -5 }}
              >
                <div className="text-center">
                  <motion.div
                    className={`w-14 h-14 mx-auto mb-5 p-3 bg-gradient-to-br ${category.color} bg-opacity-20 rounded-xl group-hover:scale-110 transition-all duration-300 will-change-transform`}
                    whileHover={{ rotate: 5, scale: 1.15 }}
                  >
                    <IconComponent className="w-full h-full text-white" />
                  </motion.div>
                  
                  <h3 className="text-lg font-semibold text-gradient mb-4">{category.category}</h3>
                  
                  <motion.div 
                    className="grid grid-cols-2 gap-2"
                    variants={containerVariants}
                  >
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        variants={skillVariants}
                        className="flex flex-col items-center p-2 glass rounded-lg hover:glow-purple transition-all duration-300 group/skill will-change-transform"
                        whileHover={{ scale: 1.05, y: -2 }}
                        title={skill.name}
                      >
                        <span className="text-xl mb-1 group-hover/skill:scale-110 transition-transform duration-300">
                          {skill.logo}
                        </span>
                        <span className="text-xs text-foreground/75 font-medium text-center leading-tight">
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
