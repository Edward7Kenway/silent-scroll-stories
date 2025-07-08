
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, X } from 'lucide-react';

interface ToastProps {
  show: boolean;
  onClose: () => void;
  type?: 'success' | 'error';
  message: string;
}

const Toast: React.FC<ToastProps> = ({ show, onClose, type = 'success', message }) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: -100, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -100, scale: 0.8 }}
          transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
          className="fixed top-6 right-6 z-50 max-w-sm"
        >
          <div className={`glass-strong p-4 rounded-2xl shadow-2xl border ${
            type === 'success' 
              ? 'border-green-500/30 bg-green-500/10' 
              : 'border-red-500/30 bg-red-500/10'
          }`}>
            <div className="flex items-center gap-3">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  type === 'success' ? 'bg-green-500/20' : 'bg-red-500/20'
                }`}
              >
                <CheckCircle className={`w-5 h-5 ${
                  type === 'success' ? 'text-green-400' : 'text-red-400'
                }`} />
              </motion.div>
              <p className="text-sm font-medium text-foreground flex-1">
                {message}
              </p>
              <motion.button
                onClick={onClose}
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
  );
};

export default Toast;
