
import React from 'react';
import Navigation from '../components/Navigation';

const About = () => {
  return (
    <div className="min-h-screen noise">
      <Navigation />
      
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-slide-in-left">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  About <span className="text-gradient">Me</span>
                </h1>
                <p className="text-xl text-foreground/70 leading-relaxed">
                  I'm a passionate full-stack developer with over 3 years of experience creating 
                  digital solutions that make a difference. My journey in tech started with curiosity 
                  and has evolved into a career dedicated to building exceptional user experiences.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="glass p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-primary mb-3">My Approach</h3>
                  <p className="text-foreground/70">
                    I believe in writing clean, maintainable code and creating intuitive user interfaces. 
                    Every project is an opportunity to learn something new and push the boundaries of what's possible.
                  </p>
                </div>
                
                <div className="glass p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-primary mb-3">Beyond Code</h3>
                  <p className="text-foreground/70">
                    When I'm not coding, you'll find me exploring new technologies, contributing to open source, 
                    or sharing knowledge with the developer community through blogs and talks.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="animate-slide-in-right">
              <div className="relative">
                <div className="glass-strong p-8 rounded-2xl">
                  <div className="aspect-square bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center">
                    <div className="text-8xl text-foreground/20 font-bold">A</div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-20 h-20 glass rounded-full animate-glow-pulse" />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 glass rounded-full animate-glow-pulse" style={{ animationDelay: '1s' }} />
              </div>
            </div>
          </div>
          
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { label: "Years Experience", value: "3+" },
              { label: "Projects Completed", value: "25+" },
              { label: "Technologies Mastered", value: "15+" }
            ].map((stat, index) => (
              <div 
                key={index}
                className="text-center glass p-8 rounded-xl animate-scale-in"
                style={{ animationDelay: `${0.5 + index * 0.2}s` }}
              >
                <div className="text-4xl font-bold text-gradient mb-2">{stat.value}</div>
                <div className="text-foreground/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
