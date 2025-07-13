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
      company: "TechCorp Solutions",
      type: "work",
      description: "Leading React development for enterprise SaaS platforms. Built scalable component libraries and optimized performance for 10k+ users.",
      technologies: ["React", "TypeScript", "Redux", "AWS"],
      duration: "Mar 2024 - Present"
    },
    {
      year: "2023",
      title: "Full Stack Developer",
      company: "StartupTech Inc.",
      type: "work", 
      description: "Built complete web applications from concept to deployment. Developed REST APIs, responsive frontends, and managed cloud infrastructure.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      duration: "Jun 2023 - Feb 2024"
    },
    {
      year: "2022",
      title: "Frontend Developer",
      company: "WebFlow Studios",
      type: "work",
      description: "Created responsive user interfaces and collaborated with designers to implement pixel-perfect designs. Improved site performance by 40%.",
      technologies: ["React", "JavaScript", "Tailwind CSS", "Framer Motion"],
      duration: "Jan 2022 - May 2023"
    },
    {
      year: "2021",
      title: "B.Tech Computer Science",
      company: "National Institute of Technology",
      type: "education",
      description: "Graduated with distinction, specializing in software engineering and web technologies. Completed projects in machine learning and full-stack development.",
      duration: "Aug 2017 - May 2021"
    },
    {
      year: "2020",
      title: "Open Source Contributor",
      company: "React Community",
      type: "project",
      description: "Actively contributed to React ecosystem and maintained npm packages. Built developer tools used by 1000+ developers worldwide.",
      technologies: ["React", "TypeScript", "Jest", "npm"],
      duration: "2020 - Present"
    },
    {
      year: "2021",
      title: "Hackathon Winner",
      company: "TechFest 2021",
      type: "achievement",
      description: "Won first place by developing an AI-powered productivity app in 48 hours. Solution now used by local businesses for task management.",
      technologies: ["React", "Firebase", "Machine Learning", "API Integration"],
      duration: "November 2021"
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
        return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
      case 'education':
        return 'bg-green-500/10 text-green-400 border-green-500/20';
      case 'project':
        return 'bg-[#a78bfa]/10 text-[#a78bfa] border-[#a78bfa]/20';
      case 'achievement':
        return 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20';
      default:
        return 'bg-slate-500/10 text-slate-400 border-slate-500/20';
    }
  };

  const getMarkerColor = (type: string) => {
    switch (type) {
      case 'work':
        return 'bg-blue-500 border-blue-400';
      case 'education':
        return 'bg-green-500 border-green-400';
      case 'project':
        return 'bg-[#a78bfa] border-[#c084fc]';
      case 'achievement':
        return 'bg-yellow-500 border-yellow-400';
      default:
        return 'bg-slate-500 border-slate-400';
    }
  };

  return (
    <section id="experience" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="bg-gradient-to-r from-[#a78bfa] to-[#c084fc] bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Professional growth, education, and key achievements in the tech industry
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 w-px bg-gradient-to-b from-[#a78bfa]/30 via-[#c084fc]/50 to-[#a78bfa]/30 rounded-full"
            style={{ top: '2rem' }}
          />

          {/* Timeline Items */}
          <div className="space-y-8">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-start ${
                  index % 2 === 0 
                    ? 'md:flex-row-reverse md:text-right' 
                    : 'md:flex-row md:text-left'
                } flex-row text-left`}
              >
                {/* Timeline Marker */}
                <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 top-6">
                  <motion.div
                    className={`w-4 h-4 rounded-full ${getMarkerColor(item.type)} shadow-lg z-10 relative`}
                    whileHover={{ scale: 1.2 }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  />
                  <motion.div
                    className={`absolute inset-0 w-4 h-4 rounded-full ${getMarkerColor(item.type)} animate-ping opacity-75`}
                  />
                </div>

                {/* Date Badge - Mobile */}
                <div className="md:hidden flex items-center gap-3 mb-2 ml-16">
                  <span className="text-lg">{item.type === 'education' ? '🎓' : item.type === 'work' ? '💼' : item.type === 'project' ? '💻' : '🏆'}</span>
                  <span className="text-purple-400 font-semibold text-sm">{item.year}</span>
                </div>

                {/* Content Card */}
                <motion.div
                  className={`backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 shadow-lg hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-[#a78bfa]/10 transition-all duration-300 ease-in-out ml-16 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-16' : 'md:ml-16'
                  } md:w-5/12 w-full group hover:scale-105 min-h-[260px]`}
                  whileHover={{ scale: 1.02, y: -8 }}
                >
                  {/* Date Badge - Desktop */}
                  <div className="hidden md:flex items-center gap-3 mb-4 justify-center">
                    <span className="text-2xl">{item.type === 'education' ? '🎓' : item.type === 'work' ? '💼' : item.type === 'project' ? '💻' : '🏆'}</span>
                    <span className="text-purple-400 font-bold text-lg">{item.year}</span>
                  </div>

                  <div className="space-y-4">
                    {/* Header */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 flex-wrap">
                        <span className={`px-3 py-1 rounded-lg text-xs font-medium border ${getTypeColor(item.type)}`}>
                          {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                        </span>
                        <span className="text-[#a78bfa] font-semibold text-sm">
                          {item.year}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-foreground group-hover:text-[#a78bfa] transition-colors duration-300">
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
                             className="px-2.5 py-1 bg-[#a78bfa]/10 text-[#a78bfa] rounded-lg text-xs border border-[#a78bfa]/20"
                             whileHover={{ scale: 1.05 }}
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