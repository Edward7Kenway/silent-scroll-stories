import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Github, Linkedin, Twitter, Send, CheckCircle, X, Copy } from 'lucide-react';
import { useContactForm } from '../hooks/useContactForm';

const ContactForm = () => {
  const {
    formData,
    errors,
    isSubmitting,
    isSubmitted,
    showToast,
    handleChange,
    handleSubmit,
    setIsSubmitted,
    setShowToast
  } = useContactForm();

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('aman7work@gmail.com');
      // You could add a toast notification here
    } catch (err) {
      console.log('Failed to copy email');
    }
  };

  return (
    <section id="contact" className="py-32 px-6 relative">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(147, 51, 234, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(147, 51, 234, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: -100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -100, scale: 0.8 }}
            transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
            className="fixed top-6 right-6 z-50 max-w-sm"
          >
            <div className="glass-strong p-4 rounded-2xl shadow-2xl border border-green-500/30 bg-green-500/10">
              <div className="flex items-center gap-3">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
                  className="w-8 h-8 rounded-full flex items-center justify-center bg-green-500/20"
                >
                  <CheckCircle className="w-5 h-5 text-green-400" />
                </motion.div>
                <p className="text-sm font-medium text-foreground flex-1">
                  Message sent successfully! I'll get back to you soon 🚀
                </p>
                <motion.button
                  onClick={() => setShowToast(false)}
                  className="p-1 hover:bg-white/10 rounded-lg transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="w-4 h-4 text-foreground/60" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            I'm always open to opportunities, collaborations, or a friendly chat about tech. 
            Let's connect and create something amazing together!
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div 
              className="glass-strong p-8 rounded-2xl hover:glow-purple transition-all duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-2xl font-semibold text-gradient mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <motion.div
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-purple-500/10 transition-all duration-300 group cursor-pointer"
                  onClick={copyEmail}
                  whileHover={{ x: 5 }}
                >
                  <motion.div
                    className="p-3 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-xl"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                  >
                    <Mail className="w-6 h-6 text-purple-400" />
                  </motion.div>
                  <div className="flex-1">
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-foreground/70 group-hover:text-purple-400 transition-colors">
                      aman7work@gmail.com
                    </p>
                  </div>
                  <Copy className="w-4 h-4 text-foreground/40 group-hover:text-purple-400 transition-colors" />
                </motion.div>
                
                <motion.div
                  className="flex items-center gap-4 p-4 rounded-xl"
                  whileHover={{ x: 5 }}
                >
                  <motion.div
                    className="p-3 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-xl"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                  >
                    <MapPin className="w-6 h-6 text-purple-400" />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold mb-1">Location</h4>
                    <p className="text-foreground/70">Delhi, India</p>
                  </div>
                </motion.div>
              </div>
              
              {/* Social Links */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <h4 className="font-semibold mb-4 text-foreground/80">Connect with me</h4>
                <div className="flex gap-4">
                  <motion.a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 glass rounded-xl hover:glow-purple transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-6 h-6 hover:text-purple-400 transition-colors" />
                  </motion.a>
                  <motion.a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 glass rounded-xl hover:glow-purple transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Linkedin className="w-6 h-6 hover:text-purple-400 transition-colors" />
                  </motion.a>
                  <motion.a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 glass rounded-xl hover:glow-purple transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Twitter className="w-6 h-6 hover:text-purple-400 transition-colors" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.form 
              onSubmit={handleSubmit}
              className="glass-strong p-8 rounded-2xl space-y-6 hover:glow-purple transition-all duration-300"
              whileHover={{ scale: 1.01 }}
            >
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                      className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4"
                    >
                      <CheckCircle className="w-8 h-8 text-green-400" />
                    </motion.div>
                    <h3 className="text-2xl font-semibold text-gradient mb-2">Message Sent!</h3>
                    <p className="text-foreground/70 mb-6">Thanks! I'll get back to you soon 🚀</p>
                    <motion.button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-2 glass rounded-xl hover:glow-purple transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      Send Another
                    </motion.button>
                  </motion.div>
                ) : (
                  <div className="space-y-6">
                    <motion.div className="space-y-2">
                      <label className="block text-sm font-medium text-foreground/80 mb-2">
                        Name
                      </label>
                      <motion.input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className={`w-full px-4 py-3 bg-white/5 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 ${
                          errors.name 
                            ? 'border-red-500/50 focus:ring-red-500/50' 
                            : 'border-white/10 focus:ring-purple-500/50'
                        }`}
                        whileFocus={{ scale: 1.01 }}
                      />
                      <AnimatePresence>
                        {errors.name && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="text-red-400 text-sm"
                          >
                            {errors.name}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </motion.div>
                    
                    <motion.div className="space-y-2">
                      <label className="block text-sm font-medium text-foreground/80 mb-2">
                        Email
                      </label>
                      <motion.input
                        type="email"
                        name="email" 
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        className={`w-full px-4 py-3 bg-white/5 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 ${
                          errors.email 
                            ? 'border-red-500/50 focus:ring-red-500/50' 
                            : 'border-white/10 focus:ring-purple-500/50'
                        }`}
                        whileFocus={{ scale: 1.01 }}
                      />
                      <AnimatePresence>
                        {errors.email && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="text-red-400 text-sm"
                          >
                            {errors.email}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </motion.div>
                    
                    <motion.div className="space-y-2">
                      <label className="block text-sm font-medium text-foreground/80 mb-2">
                        Message
                      </label>
                      <motion.textarea
                        rows={5}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project..."
                        className={`w-full px-4 py-3 bg-white/5 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 resize-none ${
                          errors.message 
                            ? 'border-red-500/50 focus:ring-red-500/50' 
                            : 'border-white/10 focus:ring-purple-500/50'
                        }`}
                        whileFocus={{ scale: 1.01 }}
                      />
                      <AnimatePresence>
                        {errors.message && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="text-red-400 text-sm"
                          >
                            {errors.message}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </motion.div>
                    
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className={`relative w-full py-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-indigo-700 transition-all duration-300 overflow-hidden flex items-center justify-center gap-3 ${
                        isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                      }`}
                      whileHover={!isSubmitting ? { 
                        scale: 1.02,
                        boxShadow: "0 0 30px rgba(147, 51, 234, 0.5)"
                      } : {}}
                      whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                    >
                      <AnimatePresence mode="wait">
                        {isSubmitting ? (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex items-center gap-3"
                          >
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                            />
                            Sending...
                          </motion.div>
                        ) : (
                          <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex items-center gap-3"
                          >
                            <Send className="w-5 h-5" />
                            Send Message
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </motion.button>
                  </div>
                )}
              </AnimatePresence>
            </motion.form>

            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-8 text-center text-foreground/60 text-sm"
            >
              © 2025 Aman Maurya. Built with React & Tailwind CSS
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;