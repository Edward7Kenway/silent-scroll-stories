
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, Code } from 'lucide-react';

const Timeline = () => {
  const timelineData = [
    {
      year: '2024 – Present',
      title: 'Network Engineer',
      company: 'NTT Data, Gurugram, India',
      type: 'work',
      icon: Briefcase,
      description: 'Leading network infrastructure projects and implementing scalable solutions.'
    },
    {
      year: '2019 – 2023',
      title: 'B.Tech - CSE',
      company: '8.3 CGPA, SMS Lucknow',
      type: 'education',
      icon: GraduationCap,
      description: 'Focused on computer science fundamentals and modern web technologies.'
    },
    {
      year: '2022',
      title: 'Hacktoberfest 2022',
      company: 'Open Source Contributor',
      type: 'achievement',
      icon: Award,
      description: 'Contributed to multiple open source projects and earned recognition.'
    },
    {
      year: '2021',
      title: 'Hacktoberfest 2021',
      company: 'Open Source Contributor',
      type: 'achievement',
      icon: Award,
      description: 'Successfully completed first Hacktoberfest challenge.'
    },
    {
      year: '2021',
      title: 'LetsGrowMore',
      company: 'Open Source Contributor (June–August)',
      type: 'internship',
      icon: Code,
      description: 'Worked on web development projects and gained practical experience.'
    },
    {
      year: '2021',
      title: 'NeoDocto Web Development',
      company: 'Internship',
      type: 'internship',
      icon: Code,
      description: 'Built responsive web applications using modern frameworks.'
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'work': return 'from-blue-500 to-blue-600';
      case 'education': return 'from-emerald-500 to-emerald-600';
      case 'achievement': return 'from-purple-500 to-purple-600';
      case 'internship': return 'from-orange-500 to-orange-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="timeline" className="py-32 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            My <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            A timeline of my professional growth, education, and contributions to the tech community
          </p>
        </motion.div>

        <motion.div 
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Enhanced Connecting Timeline Line */}
          <motion.div 
            className="absolute left-8 top-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-emerald-500 opacity-40"
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            transition={{ duration: 2, delay: 0.5 }}
            viewport={{ once: true }}
          />
          
          {timelineData.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative flex items-start mb-12 group space-y-6"
              >
                {/* Enhanced Timeline Dot with Icon */}
                <motion.div 
                  className={`absolute left-4 w-8 h-8 bg-gradient-to-r ${getTypeColor(item.type)} rounded-full border-4 border-background shadow-xl flex items-center justify-center z-10`}
                  whileHover={{ scale: 1.3 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <IconComponent className="w-4 h-4 text-white" />
                </motion.div>
                
                {/* Enhanced Content Card */}
                <motion.div 
                  className="ml-20 glass-strong p-6 md:p-8 rounded-3xl hover:glow-purple transition-all duration-500 w-full shadow-lg"
                  whileHover={{ scale: 1.02, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4 gap-4">
                    <div className="flex-1">
                      <motion.h3 
                        className="text-2xl font-semibold text-gradient mb-2"
                        whileHover={{ scale: 1.05 }}
                      >
                        {item.title}
                      </motion.h3>
                      <p className="text-foreground/70 text-lg mb-3">{item.company}</p>
                      <motion.div
                        className={`inline-block px-4 py-2 text-xs font-medium bg-gradient-to-r ${getTypeColor(item.type)} text-white rounded-full shadow-md`}
                        whileHover={{ scale: 1.1 }}
                      >
                        {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                      </motion.div>
                    </div>
                    <motion.span 
                      className="text-sm px-4 py-2 glass rounded-full text-foreground/60 shrink-0 font-medium border border-purple-500/20"
                      whileHover={{ scale: 1.05, backgroundColor: 'rgba(147, 51, 234, 0.1)' }}
                    >
                      {item.year}
                    </motion.span>
                  </div>
                  {item.description && (
                    <p className="text-foreground/60 leading-relaxed text-base">
                      {item.description}
                    </p>
                  )}
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;
