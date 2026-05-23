import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronDown, ExternalLink, TreePine } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [textIndex, setTextIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  const roles = [
    'Java Full Stack Developer',
    'Programmer Analyst Trainee @ Cognizant',
    'Spring Boot & Microservices Engineer',
    'Angular Frontend Developer',
    'Cyber Security Analyst',
  ];

  useEffect(() => {
    const current = roles[textIndex];
    let timeout: ReturnType<typeof setTimeout>;
    if (!isDeleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), 60);
    } else if (!isDeleting && text.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && text.length > 0) {
      timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), 35);
    } else if (isDeleting && text.length === 0) {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [text, isDeleting, textIndex]);

  useEffect(() => {
    const handleScroll = () => setShowScrollIndicator(window.scrollY < 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const socialLinks = [
    { href: 'https://github.com/shanmukh7781-prog', icon: Github, label: 'GitHub', color: 'hover:bg-gray-800' },
    { href: 'https://github.com/shanmukhkk', icon: Github, label: 'GitHub 2', color: 'hover:bg-gray-800' },
    { href: 'https://www.linkedin.com/in/shanmukh-k-a361b1253', icon: Linkedin, label: 'LinkedIn', color: 'hover:bg-blue-600' },
    { href: 'https://linktr.ee/shanmukh.k', icon: TreePine, label: 'Linktree', color: 'hover:bg-green-600' },
    {
      href: 'https://mail.google.com/mail/?view=cm&fs=1&to=shanmukhkommisetty2004.08@gmail.com&su=Hello%20Shanmukh&body=Hi%20Shanmukh,%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect.',
      icon: Mail, label: 'Email', color: 'hover:bg-red-600',
    },
  ];

  return (
    <div id="hero" className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white relative overflow-hidden">
      {/* Dot grid background */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='27' cy='7' r='1'/%3E%3Ccircle cx='47' cy='7' r='1'/%3E%3Ccircle cx='7' cy='27' r='1'/%3E%3Ccircle cx='27' cy='27' r='1'/%3E%3Ccircle cx='47' cy='27' r='1'/%3E%3Ccircle cx='7' cy='47' r='1'/%3E%3Ccircle cx='27' cy='47' r='1'/%3E%3Ccircle cx='47' cy='47' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />

      {/* Floating shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div className="absolute top-40 right-20 w-24 h-24 border border-blue-500/20 rounded-lg"
          animate={{ rotate: -360, y: [0, -20, 0] }}
          transition={{ rotate: { duration: 15, repeat: Infinity, ease: 'linear' }, y: { duration: 3, repeat: Infinity, ease: 'easeInOut' } }} />
        <motion.div className="absolute top-1/4 left-10 w-20 h-20 border border-cyan-500/20 rounded-lg rotate-45"
          animate={{ rotate: [45, 90, 45], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }} />
        <motion.div className="absolute bottom-1/3 right-10 w-12 h-12 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-sm"
          animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }} />
        {[...Array(6)].map((_, i) => (
          <motion.div key={i} className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{ left: `${20 + i * 15}%`, top: `${30 + i * 10}%` }}
            animate={{ y: [0, -20, 0], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }} />
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10" />

      <div className="relative z-10 min-h-screen flex flex-col justify-center items-center text-center px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-5xl mx-auto">

          {/* Badge */}
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-blue-300 text-sm font-medium">Programmer Analyst Trainee @ Cognizant</span>
          </motion.div>

          {/* Name */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.3 }} className="mb-6">
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">Shanmukh</span>
              <span className="ml-3 font-extrabold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent"> K</span>
            </h1>
          </motion.div>

          {/* Typing effect */}
          <motion.div className="mb-8 min-h-[3rem] flex items-center justify-center"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
            <p className="text-base sm:text-lg md:text-2xl text-gray-300 font-light px-2">
              <span>{text}</span>
              <motion.span className="text-blue-400 ml-1" animate={{ opacity: [1, 0, 1] }} transition={{ duration: 1, repeat: Infinity }}>|</motion.span>
            </p>
          </motion.div>

          {/* Tagline */}
          <motion.p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed mb-10"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
            Building secure, scalable full-stack systems with Java, Spring Boot, Microservices, and Angular.
            Passionate about clean architecture, security, and great software.
          </motion.p>

          {/* Quick stats */}
          <motion.div className="flex flex-wrap justify-center gap-3 sm:gap-5 mb-10"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}>
            {[
              { label: 'Microservices', val: '11' },
              { label: 'Tech Stack', val: 'Java + Angular' },
              { label: 'Role', val: 'Full Stack' },
              { icon: '🏢', label: 'Cognizant ISG', sub: 'Industrial Solutions Group' },
            ].map((s, i) => (
              <div key={i} className="text-center px-4 py-2 bg-white/5 border border-white/10 rounded-xl">
                <div className="text-white font-bold text-lg">
                  {'val' in s ? s.val : `${s.icon} ${s.label}`}
                </div>
                <div className="text-gray-500 text-xs">
                  {'sub' in s ? s.sub : s.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Social links */}
          <motion.div className="flex flex-wrap justify-center gap-3"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
            {socialLinks.map((item, index) => (
              <motion.a key={index} href={item.href} target="_blank" rel="noopener noreferrer"
                className={`group flex items-center gap-1.5 px-3 py-2 sm:px-5 sm:py-2.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full transition-all duration-300 ${item.color} hover:border-white/20 hover:shadow-xl`}
                whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 + index * 0.08 }}>
                <item.icon size={18} className="transition-transform group-hover:scale-110" />
                <span className="text-sm font-medium">{item.label}</span>
                <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        {showScrollIndicator && (
          <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2 }}>
            <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              className="flex flex-col items-center gap-2 cursor-pointer"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
              <span className="text-xs text-gray-400 tracking-widest uppercase">Scroll</span>
              <ChevronDown className="text-gray-300" size={22} />
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
