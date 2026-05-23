import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Books from './components/Books';
import Certifications from './components/Certifications';
import Resume from './components/Resume';
import Contact from './components/Contact';
import HomeButton from './components/HomeButton';
import Navigation from './components/Navigation';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <div className="relative">
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] z-[200] origin-left"
        style={{
          scaleX,
          background: 'linear-gradient(to right, #3b82f6, #a855f7, #06b6d4)',
        }}
      />
      <Navigation />
      <Hero />
      <About />
      <Timeline />
      <Projects />
      <Skills />
      <Books />
      <Certifications />
      <Resume />
      <Contact />
      <HomeButton />
    </div>
  );
}

export default App;