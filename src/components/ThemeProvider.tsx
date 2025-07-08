
import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'dark' | 'light';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    // Check if we're in browser environment
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme') as Theme;
      if (savedTheme) return savedTheme;
      
      // Check system preference
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
    }
    return 'dark'; // Default to dark
  });

  useEffect(() => {
    const root = document.documentElement;
    
    // Remove both classes first
    root.classList.remove('dark', 'light');
    
    // Add the current theme class
    root.classList.add(theme);
    
    // Save to localStorage
    localStorage.setItem('theme', theme);
    
    // Update CSS variables based on theme
    if (theme === 'light') {
      root.style.setProperty('--background', '280 20% 98%');
      root.style.setProperty('--foreground', '220 25% 10%');
      root.style.setProperty('--card', '280 20% 100%');
      root.style.setProperty('--card-foreground', '220 25% 10%');
    } else {
      root.style.setProperty('--background', '220 25% 8%');
      root.style.setProperty('--foreground', '280 10% 95%');
      root.style.setProperty('--card', '220 25% 10%');
      root.style.setProperty('--card-foreground', '280 10% 95%');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
