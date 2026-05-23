import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'timeline', label: 'Timeline' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'books', label: 'Books' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'resume', label: 'Resume' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowScrollIndicator(scrollY < 100);
      
      // Find active section
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    // Initial check
    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation - HIDDEN, only dots navigation */}
      <motion.nav
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block"
      >
        <div className="bg-black/20 backdrop-blur-lg rounded-2xl p-3 shadow-2xl border border-white/10">
          <div className="space-y-3">
            {navItems.map((item) => (
              <div key={item.id} className="relative group">
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`relative w-4 h-4 rounded-full transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-blue-500 scale-125'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  title={item.label}
                >
                  {/* Active pulse ring */}
                  {activeSection === item.id && (
                    <motion.span
                      className="absolute inset-0 rounded-full border-2 border-blue-400"
                      initial={{ scale: 1, opacity: 0.8 }}
                      animate={{ scale: 2.4, opacity: 0 }}
                      transition={{ duration: 1.4, repeat: Infinity, ease: 'easeOut' }}
                    />
                  )}
                  {/* Tooltip */}
                  <div className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-black/80 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    {item.label}
                    {item.id === 'hero' && activeSection === 'hero' && showScrollIndicator && (
                      <ChevronDown className="inline-block ml-1 w-3 h-3 animate-bounce" />
                    )}
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation Toggle */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 right-6 z-50 lg:hidden bg-black/20 backdrop-blur-lg p-3 rounded-full border border-white/20 shadow-lg"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={24} className="text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Menu size={24} className="text-white" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Menu */}
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed inset-y-0 right-0 w-4/5 max-w-xs sm:max-w-sm bg-white/95 backdrop-blur-lg z-40 lg:hidden shadow-2xl"
            >
              <div className="pt-20 px-6">
                <div className="space-y-2">
                  {navItems.map((item) => (
                    <div key={item.id} className="relative">
                      <button
                        onClick={() => scrollToSection(item.id)}
                        className={`group w-full text-left px-4 py-3 rounded-lg transition-all duration-300 font-medium flex items-center justify-between ${
                          activeSection === item.id
                            ? 'bg-blue-500 text-white shadow-lg'
                            : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                        }`}
                      >
                        <span>{item.label}</span>
                        
                        {/* Scroll Indicator for Home on Mobile */}
                        {item.id === 'hero' && activeSection === 'hero' && showScrollIndicator && (
                          <motion.div
                            animate={{ y: [0, 4, 0] }}
                            transition={{ 
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                            className={activeSection === item.id ? "text-white/80" : "text-blue-500"}
                          >
                            <ChevronDown className="w-4 h-4" />
                          </motion.div>
                        )}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}