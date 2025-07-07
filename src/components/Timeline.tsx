
import React from 'react';
import { motion } from 'framer-motion';

const Timeline = () => {
  const timelineData = [
    {
      year: '2024 – Present',
      title: 'Network Engineer',
      company: 'NTT Data, Gurugram, India',
      type: 'work'
    },
    {
      year: '2019 – 2023',
      title: 'B.Tech - CSE',
      company: '8.3 CGPA, SMS Lucknow',
      type: 'education'
    },
    {
      year: '2022',
      title: 'Hacktoberfest 2022',
      company: 'Open Source Contributor',
      type: 'achievement'
    },
    {
      year: '2021',
      title: 'Hacktoberfest 2021',
      company: 'Open Source Contributor',
      type: 'achievement'
    },
    {
      year: '2021',
      title: 'LetsGrowMore',
      company: 'Open Source Contributor (June–August)',
      type: 'internship'
    },
    {
      year: '2021',
      title: 'NeoDocto Web Development',
      company: 'Internship',
      type: 'internship'
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
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            My <span className="text-gradient">Journey</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-emerald-500 opacity-30" />
          
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative flex items-center mb-12 group"
            >
              {/* Timeline Dot */}
              <div className={`absolute left-6 w-4 h-4 bg-gradient-to-r ${getTypeColor(item.type)} rounded-full border-4 border-background shadow-lg group-hover:scale-125 transition-transform duration-300`} />
              
              {/* Content Card */}
              <div className="ml-20 glass p-6 rounded-2xl hover:glow transition-all duration-500 w-full group-hover:scale-105">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gradient mb-2">{item.title}</h3>
                    <p className="text-foreground/70 mb-2">{item.company}</p>
                  </div>
                  <span className="text-sm px-3 py-1 glass-strong rounded-full text-foreground/60 shrink-0">
                    {item.year}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
