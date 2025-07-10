import React from 'react';
import { motion } from 'framer-motion';
import { Building2, GraduationCap, Code, Trophy, Calendar } from 'lucide-react';

interface TimelineItem {
  year: string;
  title: string;
  company: string;
  type: 'work' | 'education' | 'project' | 'achievement';
  description: string;
  technologies?: string[];
  duration?: string;
}

const VerticalTimeline = () => {
  const timelineData: TimelineItem[] = [
    {
      year: "2024",
      title: "Senior Frontend Developer",
      company: "Tech Innovators Inc.",
      type: "work",
      description: "Led the development of scalable React applications, mentored junior developers, and implemented modern web technologies to improve user experience.",
      technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
      duration: "Jan 2024 - Present"
    },
    {
      year: "2023",
      title: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      type: "work", 
      description: "Developed and maintained full-stack applications using React and Node.js. Collaborated with cross-functional teams to deliver high-quality software solutions.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      duration: "Mar 2023 - Dec 2023"
    },
    {
      year: "2022",
      title: "React Developer",
      company: "StartupHub",
      type: "work",
      description: "Built responsive web applications from scratch, integrated RESTful APIs, and optimized performance for better user experience.",
      technologies: ["React", "JavaScript", "CSS3", "REST APIs"],
      duration: "Jun 2022 - Feb 2023"
    },
    {
      year: "2022",
      title: "Bachelor of Computer Science",
      company: "University of Technology",
      type: "education",
      description: "Graduated with honors, specializing in software engineering and web development. Completed multiple projects and internships.",
      duration: "2018 - 2022"
    },
    {
      year: "2021",
      title: "Open Source Contributor",
      company: "GitHub Community",
      type: "project",
      description: "Actively contributed to open source projects, focusing on React components and developer tools. Maintained several popular repositories.",
      technologies: ["React", "TypeScript", "Jest", "Storybook"],
      duration: "2021 - Present"
    },
    {
      year: "2021",
      title: "Hackathon Winner",
      company: "Code Challenge 2021",
      type: "achievement",
      description: "Won first place in a 48-hour hackathon by developing an innovative web application that solved real-world problems.",
      technologies: ["React", "Firebase", "API Integration"],
      duration: "March 2021"
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'work':
        return <Building2 className="w-5 h-5" />;
      case 'education':
        return <GraduationCap className="w-5 h-5" />;
      case 'project':
        return <Code className="w-5 h-5" />;
      case 'achievement':
        return <Trophy className="w-5 h-5" />;
      default:
        return <Calendar className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'work':
        return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
      case 'education':
        return 'bg-green-500/20 text-green-300 border-green-500/30';
      case 'project':
        return 'bg-purple-500/20 text-purple-300 border-purple-500/30';
      case 'achievement':
        return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30';
      default:
        return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
    }
  };

  const getMarkerColor = (type: string) => {
    switch (type) {
      case 'work':
        return 'bg-blue-500 border-blue-400';
      case 'education':
        return 'bg-green-500 border-green-400';
      case 'project':
        return 'bg-purple-500 border-purple-400';
      case 'achievement':
        return 'bg-yellow-500 border-yellow-400';
      default:
        return 'bg-gray-500 border-gray-400';
    }
  };

  return (
    <section id="experience" className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            My <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            A timeline of my professional growth, education, and key achievements in the tech industry
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 w-1 bg-gradient-to-b from-purple-500 via-indigo-500 to-purple-500 rounded-full"
            style={{ top: '2rem' }}
          />

          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 
                    ? 'md:flex-row-reverse md:text-right' 
                    : 'md:flex-row md:text-left'
                } flex-row text-left`}
              >
                {/* Year Badge - Mobile */}
                <div className="md:hidden absolute -left-2 top-8">
                  <motion.div
                    className={`w-12 h-12 rounded-full border-4 ${getMarkerColor(item.type)} flex items-center justify-center text-white font-bold text-sm shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    {getIcon(item.type)}
                  </motion.div>
                </div>

                {/* Content Card */}
                <motion.div
                  className={`glass-strong rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 ml-16 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                  } md:w-5/12 w-full group hover:glow-purple`}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  {/* Year Badge - Desktop */}
                  <div className="hidden md:block absolute top-6 left-1/2 transform -translate-x-1/2">
                    <motion.div
                      className={`w-16 h-16 rounded-full border-4 ${getMarkerColor(item.type)} flex items-center justify-center text-white font-bold shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      {getIcon(item.type)}
                    </motion.div>
                  </div>

                  <div className="space-y-4">
                    {/* Header */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 flex-wrap">
                        <span className={`px-3 py-1 rounded-lg text-xs font-medium border ${getTypeColor(item.type)}`}>
                          {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                        </span>
                        <span className="text-purple-400 font-semibold text-sm">
                          {item.year}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gradient">
                        {item.title}
                      </h3>
                      <p className="text-foreground/80 font-medium">
                        {item.company}
                      </p>
                      {item.duration && (
                        <p className="text-foreground/60 text-sm">
                          {item.duration}
                        </p>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-foreground/70 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Technologies */}
                    {item.technologies && (
                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs border border-purple-500/30"
                            whileHover={{ scale: 1.05, y: -1 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerticalTimeline;