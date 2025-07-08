
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Github, Twitter, Instagram, Send, CheckCircle, X } from 'lucide-react';
import { useContactForm } from '../hooks/useContactForm';

const ContactSection = () => {
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

  return (
    <section id="contact" className="py-32 px-6 relative">
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
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            I'm always open to opportunities, collaborations, or a friendly chat about tech. 
            Reach out via form or socials!
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div 
              className="glass-strong p-8 md:p-10 rounded-3xl hover:glow-purple transition-all duration-500"
              whileHover={{ scale: 1.02, rotateY: 2 }}
            >
              <h3 className="text-3xl font-semibold text-gradient mb-8">Get in Touch</h3>
              <div className="space-y-6">
                <motion.a
                  href="mailto:aman7work@gmail.com"
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-purple-500/10 transition-all duration-300 group/item"
                >
                  <motion.div
                    className="p-3 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-xl ring-2 ring-purple-500/10 focus:ring-purple-500/30"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  >
                    <Mail className="w-6 h-6 text-purple-400" />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold mb-1 text-lg">Email</h4>
                    <p className="text-foreground/70">aman7work@gmail.com</p>
                  </div>
                </motion.a>
                
                <motion.div
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-purple-500/10 transition-all duration-300 group/item"
                >
                  <motion.div
                    className="p-3 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-xl"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  >
                    <MapPin className="w-6 h-6 text-purple-400" />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold mb-1 text-lg">Location</h4>
                    <p className="text-foreground/70">Delhi, India</p>
                  </div>
                </motion.div>
              </div>
              
              <div className="flex gap-6 mt-10">
                <motion.a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 glass rounded-xl hover:glow-purple transition-all duration-300 group/social"
                  whileHover={{ scale: 1.1, y: -5, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="w-8 h-8 group-hover/social:text-purple-400 transition-colors duration-300" />
                </motion.a>
                <motion.a
                  href="https://twitter.com"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-4 glass rounded-xl hover:glow-purple transition-all duration-300 group/social"
                  whileHover={{ scale: 1.1, y: -5, rotate: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Twitter className="w-8 h-8 group-hover/social:text-purple-400 transition-colors duration-300" />
                </motion.a>
                <motion.a
                  href="https://instagram.com"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-4 glass rounded-xl hover:glow-purple transition-all duration-300 group/social"
                  whileHover={{ scale: 1.1, y: -5, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Instagram className="w-8 h-8 group-hover/social:text-purple-400 transition-colors duration-300" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.form 
              onSubmit={handleSubmit}
              className="glass-strong p-8 md:p-10 rounded-3xl space-y-8 hover:glow-purple transition-all duration-500"
              whileHover={{ scale: 1.02, rotateY: -2 }}
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
                  <>
                    <motion.div className="group space-y-2">
                      <motion.input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className={`w-full px-6 py-4 bg-white/5 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 text-lg ${
                          errors.name 
                            ? 'border-red-500/50 focus:ring-red-500/50 focus:border-red-500/50' 
                            : 'border-white/10 focus:ring-purple-500/50 focus:border-purple-500/50'
                        }`}
                        whileFocus={{ scale: 1.02 }}
                      />
                      <AnimatePresence>
                        {errors.name && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="text-red-400 text-sm ml-2"
                          >
                            {errors.name}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </motion.div>
                    
                    <motion.div className="group space-y-2">
                      <motion.input
                        type="email"
                        name="email" 
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        className={`w-full px-6 py-4 bg-white/5 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 text-lg ${
                          errors.email 
                            ? 'border-red-500/50 focus:ring-red-500/50 focus:border-red-500/50' 
                            : 'border-white/10 focus:ring-purple-500/50 focus:border-purple-500/50'
                        }`}
                        whileFocus={{ scale: 1.02 }}
                      />
                      <AnimatePresence>
                        {errors.email && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="text-red-400 text-sm ml-2"
                          >
                            {errors.email}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </motion.div>
                    
                    <motion.div className="group space-y-2">
                      <motion.textarea
                        rows={6}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project..."
                        className={`w-full px-6 py-4 bg-white/5 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 resize-none text-lg ${
                          errors.message 
                            ? 'border-red-500/50 focus:ring-red-500/50 focus:border-red-500/50' 
                            : 'border-white/10 focus:ring-purple-500/50 focus:border-purple-500/50'
                        }`}
                        whileFocus={{ scale: 1.02 }}
                      />
                      <AnimatePresence>
                        {errors.message && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="text-red-400 text-sm ml-2"
                          >
                            {errors.message}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </motion.div>
                    
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className={`relative w-full py-5 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-indigo-700 transition-all duration-300 group overflow-hidden text-lg flex items-center justify-center gap-3 ${
                        isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                      }`}
                      whileHover={!isSubmitting ? { 
                        scale: 1.02,
                        boxShadow: "0 0 40px rgba(147, 51, 234, 0.5)"
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
                      
                      {/* Ripple effect */}
                      <motion.div
                        className="absolute inset-0 bg-white/20 scale-0 rounded-xl"
                        whileTap={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.button>
                  </>
                )}
              </AnimatePresence>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
