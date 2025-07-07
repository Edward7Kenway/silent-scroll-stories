
import React from 'react';
import Navigation from '../components/Navigation';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "Vue.js", level: 80 },
        { name: "Tailwind CSS", level: 95 },
        { name: "SCSS/Sass", level: 85 }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Python", level: 85 },
        { name: "Express.js", level: 90 },
        { name: "FastAPI", level: 80 },
        { name: "GraphQL", level: 75 },
        { name: "RESTful APIs", level: 95 }
      ]
    },
    {
      title: "Database & Cloud",
      skills: [
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "Redis", level: 75 },
        { name: "AWS", level: 80 },
        { name: "Docker", level: 85 },
        { name: "Firebase", level: 80 }
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", level: 95 },
        { name: "Linux", level: 85 },
        { name: "Jest", level: 80 },
        { name: "Webpack", level: 75 },
        { name: "CI/CD", level: 80 },
        { name: "Figma", level: 70 }
      ]
    }
  ];

  return (
    <div className="min-h-screen noise">
      <Navigation />
      
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              My <span className="text-gradient">Skills</span>
            </h1>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
              A comprehensive overview of my technical expertise and proficiency levels 
              across various technologies and tools in modern web development.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="glass p-8 rounded-2xl animate-scale-in"
                style={{ animationDelay: `${categoryIndex * 0.2}s` }}
              >
                <h3 className="text-2xl font-semibold text-primary mb-8">{category.title}</h3>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-foreground font-medium">{skill.name}</span>
                        <span className="text-foreground/60">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '1s' }}>
            <div className="glass p-8 rounded-2xl max-w-4xl mx-auto">
              <h3 className="text-2xl font-semibold text-primary mb-6">Continuous Learning</h3>
              <p className="text-foreground/70 text-lg leading-relaxed">
                Technology evolves rapidly, and I'm committed to staying at the forefront. 
                Currently exploring AI/ML integration, Web3 technologies, and advanced system design patterns. 
                I believe in learning by building and sharing knowledge with the community.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
