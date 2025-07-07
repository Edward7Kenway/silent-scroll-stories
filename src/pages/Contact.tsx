
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import { Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen noise">
      <Navigation />
      
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Get In <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
              Let's discuss your next project or collaboration opportunity. 
              I'm always excited to work on innovative solutions and meaningful projects.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8 animate-slide-in-left">
              <div className="glass p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold text-primary mb-6">Let's Connect</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2">Email</h4>
                    <p className="text-foreground/70">aman@example.com</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Location</h4>
                    <p className="text-foreground/70">San Francisco, CA</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Response Time</h4>
                    <p className="text-foreground/70">Usually within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex gap-4 mt-8">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 glass-strong rounded-lg hover:glow transition-all duration-300"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 glass-strong rounded-lg hover:glow transition-all duration-300"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="animate-slide-in-right">
              <form onSubmit={handleSubmit} className="glass p-8 rounded-2xl space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 glow-purple"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
