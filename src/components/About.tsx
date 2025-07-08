
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Zap } from 'lucide-react';

const About = () => {
  const techStack = [
    { name: 'Frontend', icon: Code, skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
    { name: 'Backend', icon: Database, skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB'] },
    { name: 'Tools', icon: Globe, skills: ['Git', 'Docker', 'AWS', 'Figma'] },
    { name: 'Animation', icon: Zap, skills: ['Framer Motion', 'GSAP', 'CSS Animations'] }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
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
                    className="w-16 h-16 mx-auto mb-6 p-4 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-2xl group-hover:from-purple-500/30 group-hover:to-indigo-500/30 transition-all duration-300"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  >
                    <IconComponent className="w-full h-full text-purple-400" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-gradient mb-4">{category.name}</h3>
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * skillIndex, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-sm text-foreground/70 px-3 py-1 glass rounded-full hover:text-purple-400 transition-colors duration-300"
                      >
                        {skill}
                      </motion.div>
                    ))}
                  </div>
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
