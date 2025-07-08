
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
      icon: Briefcase
    },
    {
      year: '2019 – 2023',
      title: 'B.Tech - CSE',
      company: '8.3 CGPA, SMS Lucknow',
      type: 'education',
      icon: GraduationCap
    },
    {
      year: '2022',
      title: 'Hacktoberfest 2022',
      company: 'Open Source Contributor',
      type: 'achievement',
      icon: Award
    },
    {
      year: '2021',
      title: 'Hacktoberfest 2021',
      company: 'Open Source Contributor',
      type: 'achievement',
      icon: Award
    },
    {
      year: '2021',
      title: 'LetsGrowMore',
      company: 'Open Source Contributor (June–August)',
      type: 'internship',
      icon: Code
    },
    {
      year: '2021',
      title: 'NeoDocto Web Development',
      company: 'Internship',
      type: 'internship',
      icon: Code
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

        <div className="relative">
          {/* Timeline Line */}
          <motion.div 
            className="absolute left-8 top-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-emerald-500 opacity-30"
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            transition={{ duration: 2, ease: "easeInOut" }}
            viewport={{ once: true }}
          />
          
          {timelineData.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative flex items-start mb-16 group"
              >
                {/* Timeline Dot with Icon */}
                <motion.div 
                  className={`absolute left-4 w-8 h-8 bg-gradient-to-r ${getTypeColor(item.type)} rounded-full border-4 border-background shadow-lg flex items-center justify-center z-10`}
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <IconComponent className="w-4 h-4 text-white" />
                </motion.div>
                
                {/* Content Card */}
                <motion.div 
                  className="ml-20 glass-strong p-8 rounded-3xl hover:glow-purple transition-all duration-500 w-full"
                  whileHover={{ scale: 1.02, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="mb-4 lg:mb-0">
                      <motion.h3 
                        className="text-2xl font-semibold text-gradient mb-2"
                        whileHover={{ scale: 1.05 }}
                      >
                        {item.title}
                      </motion.h3>
                      <p className="text-foreground/70 text-lg mb-2">{item.company}</p>
                      <motion.div
                        className={`inline-block px-3 py-1 text-xs font-medium bg-gradient-to-r ${getTypeColor(item.type)} text-white rounded-full`}
                        whileHover={{ scale: 1.1 }}
                      >
                        {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                      </motion.div>
                    </div>
                    <motion.span 
                      className="text-sm px-4 py-2 glass rounded-full text-foreground/60 shrink-0 font-medium"
                      whileHover={{ scale: 1.05, backgroundColor: 'rgba(147, 51, 234, 0.1)' }}
                    >
                      {item.year}
                    </motion.span>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
