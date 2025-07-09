
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const techStack = [
    { name: 'React', logo: '⚛️', color: 'from-blue-400 to-blue-600' },
    { name: 'Next.js', logo: '▲', color: 'from-gray-700 to-gray-900' },
    { name: 'TypeScript', logo: 'TS', color: 'from-blue-500 to-blue-700' },
    { name: 'Tailwind', logo: '🎨', color: 'from-cyan-400 to-cyan-600' },
    { name: 'Node.js', logo: '🟢', color: 'from-green-500 to-green-700' },
    { name: 'Python', logo: '🐍', color: 'from-yellow-400 to-yellow-600' },
    { name: 'PostgreSQL', logo: '🐘', color: 'from-blue-600 to-indigo-600' },
    { name: 'MongoDB', logo: '🍃', color: 'from-green-400 to-emerald-600' },
    { name: 'Git', logo: '📝', color: 'from-orange-400 to-orange-600' },
    { name: 'Docker', logo: '🐳', color: 'from-blue-400 to-blue-600' },
    { name: 'AWS', logo: '☁️', color: 'from-orange-300 to-orange-500' },
    { name: 'Figma', logo: '🎯', color: 'from-purple-400 to-purple-600' },
    { name: 'Framer Motion', logo: '🎬', color: 'from-pink-400 to-pink-600' },
    { name: 'GSAP', logo: '⚡', color: 'from-green-400 to-green-600' },
    { name: 'CSS3', logo: '💫', color: 'from-blue-400 to-blue-600' },
    { name: 'Three.js', logo: '🎲', color: 'from-indigo-400 to-indigo-600' }
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
    visible: { opacity: 1, y: 0 }
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <section id="about" className="py-20 px-6 relative">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(147, 51, 234, 0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(147, 51, 234, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 max-w-4xl mx-auto leading-relaxed mb-8">
            I'm a passionate full-stack developer who loves creating exceptional digital experiences. 
            With a strong foundation in modern web technologies, I focus on building performant, 
            accessible, and visually stunning applications that users love to interact with.
          </p>
          
          <motion.h3 
            className="text-xl font-semibold text-gradient mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            Here's my current stack
          </motion.h3>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4"
        >
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative flex flex-col items-center p-4 glass rounded-2xl hover:glow-purple transition-all duration-300 will-change-transform cursor-default"
              whileHover={{ scale: 1.05, y: -5 }}
              title={tech.name}
            >
              <motion.div
                className={`w-12 h-12 mb-3 p-2 bg-gradient-to-br ${tech.color} rounded-xl group-hover:scale-110 transition-all duration-300 will-change-transform flex items-center justify-center`}
                whileHover={{ rotate: 10, scale: 1.2 }}
              >
                <span className="text-2xl filter drop-shadow-sm">
                  {tech.logo}
                </span>
              </motion.div>
              
              <span className="text-xs text-foreground/75 font-medium text-center leading-tight group-hover:text-foreground transition-colors duration-300">
                {tech.name}
              </span>
              
              {/* Hover glow effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
