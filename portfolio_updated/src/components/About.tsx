import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Shield, Code, Server, Layers, ChevronRight, Globe } from 'lucide-react';
import { useRef, useState } from 'react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, duration: 0.8 } }
};
const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
};

const cards = [
  {
    icon: Server,
    title: 'Java Full Stack',
    subtitle: 'Backend Engineering',
    description: 'Building enterprise-grade REST APIs with Java 21, Spring Boot 3, Spring Security, JWT authentication, and JPA/Hibernate. Experienced in designing layered microservices architectures.',
    gradient: 'from-blue-600 via-blue-500 to-cyan-500',
    bg: 'from-blue-500/10 to-cyan-500/10',
    details: 'Worked on 11-service microservices system: Eureka, API Gateway, Config Server, OpenFeign, and 8 business services with database-per-service isolation.',
  },
  {
    icon: Layers,
    title: 'Microservices',
    subtitle: 'Spring Cloud',
    description: 'Hands-on experience with Spring Cloud stack — Eureka Server, API Gateway, Config Server, OpenFeign clients, distributed tracing with Zipkin, and health monitoring with Actuator.',
    gradient: 'from-purple-600 via-purple-500 to-pink-500',
    bg: 'from-purple-500/10 to-pink-500/10',
    details: 'Built JusticeServe — a 11-service legal case management platform with microservices pattern, JWT-secured APIs, and role-based access control across 7 user roles.',
  },
  {
    icon: Globe,
    title: 'Angular Frontend',
    subtitle: 'TypeScript & RxJS',
    description: 'Building responsive SPAs with Angular 17 — components, services, routing, lazy loading, route guards, JWT interceptors, and reactive data binding with RxJS Observables.',
    gradient: 'from-red-600 via-red-500 to-orange-500',
    bg: 'from-red-500/10 to-orange-500/10',
    details: 'Implemented role-based navigation with authGuard, JWT interceptor for automatic token management, BehaviorSubject for state, and real-time notification polling.',
  },
  {
    icon: Shield,
    title: 'Cyber Security',
    subtitle: 'Threat Analysis',
    description: 'Hands-on with OWASP Top 10, Nmap, Burp Suite, and penetration testing. Built SIEM-inspired threat analysis tools and enterprise SOC prototype simulations.',
    gradient: 'from-emerald-600 via-emerald-500 to-teal-500',
    bg: 'from-emerald-500/10 to-teal-500/10',
    details: 'Security implemented at 7 layers in JusticeServe: Angular guards, JWT interceptor, Gateway filter, microservice filter, @PreAuthorize, @Valid, and business rules.',
  },
];

export default function About() {
  const [selected, setSelected] = useState<number | null>(null);
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  return (
    <motion.section ref={ref} id="about"
      className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden"
      initial="hidden" whileInView="visible" variants={containerVariants} viewport={{ once: true, amount: 0.15 }}>

      {/* Background blobs */}
      <motion.div className="absolute inset-0 opacity-25" style={{ y: bgY }}>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-cyan-600/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </motion.div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="container mx-auto px-6 py-20 relative z-10">
        {/* Header */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <span className="px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium">
            Java Full Stack · Microservices · Angular
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mt-6 mb-4 bg-gradient-to-r from-white via-blue-100 to-cyan-100 text-transparent bg-clip-text">
            About Me
          </h2>
          <motion.div className="w-28 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 mx-auto rounded-full mb-6"
            initial={{ width: 0 }} whileInView={{ width: 112 }} transition={{ duration: 1, delay: 0.4 }} />
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            Currently training as a <span className="text-blue-400 font-semibold">Programmer Analyst Trainee at Cognizant</span> in the{' '}
            <span className="text-cyan-400 font-semibold">Java Full Stack Engineering with Angular</span> domain.
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          {/* Profile + Bio */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Profile card */}
            <motion.div className="lg:col-span-1" variants={itemVariants}>
              <div className="relative group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 sm:p-8 h-full hover:border-white/20 transition-all duration-300">
                <div className="relative overflow-hidden rounded-xl mb-6">
                  <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=400&q=80"
                    alt="Developer workspace" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span className="text-xs text-blue-300 bg-blue-500/20 border border-blue-500/30 px-2 py-1 rounded-full">Full Stack Developer</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Shanmukh K</h3>
                <p className="text-blue-400 text-sm font-medium mb-4">Programmer Analyst Trainee @ Cognizant</p>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  B.Tech in Electronics & Communication Engineering from SRKR Engineering College, Bhimavaram.
                  Now building enterprise-grade Java microservices and Angular applications.
                </p>
                <div className="space-y-2 text-sm">
                  {[
                    ['Backend',    'Java 21 · Spring Boot 3'],
                    ['Frontend',   'Angular 17 · TypeScript'],
                    ['Cloud',      'Eureka · Gateway · Feign'],
                    ['Security',   'Spring Security · JWT'],
                    ['Database',   'MySQL · JPA/Hibernate'],
                  ].map(([k, v]) => (
                    <div key={k} className="flex items-center justify-between">
                      <span className="text-gray-500">{k}</span>
                      <span className="text-white font-medium text-right">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Bio */}
            <motion.div className="lg:col-span-2 space-y-6" variants={itemVariants}>
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 sm:p-8">
                <h3 className="text-2xl font-bold text-white mb-5 flex items-center gap-3">
                  <span className="w-1.5 h-8 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full" />
                  Professional Journey
                </h3>
                <div className="space-y-5 text-gray-300 leading-relaxed">
                  <p>I am a <span className="text-blue-400 font-semibold">Programmer Analyst Trainee at Cognizant, Coimbatore</span>, currently in the final stage of the{' '}
                    <span className="text-cyan-400 font-semibold">Java Full Stack Engineering with Angular</span> training program. My background spans full-stack development, cybersecurity, and enterprise system architecture.</p>
                  <p>During training, I built <span className="text-blue-300 font-semibold">JusticeServe</span> — a Legal Case & Court Management System using a{' '}
                    <span className="text-purple-400 font-semibold">11-service microservices architecture</span> with Spring Boot 3, Spring Cloud, MySQL, and Angular 17. I personally contributed two modules:{' '}
                    <span className="text-cyan-400 font-semibold">Citizen Service</span> (profile management and document verification) and{' '}
                    <span className="text-cyan-400 font-semibold">Notification Service</span> (real-time in-app alert system).</p>
                  <p>Before Cognizant, I worked on <span className="text-emerald-400 font-semibold">cybersecurity</span> — ethical hacking at Coincent AI, cloud security at AICTE, and AI-powered SIEM tools. I blend strong security fundamentals with modern full-stack development skills.</p>
                </div>
              </div>

              {/* JusticeServe highlight */}
              <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Code className="w-5 h-5 text-blue-400" />
                  <span className="text-blue-300 font-semibold">Featured Project — JusticeServe</span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[['11', 'Microservices'], ['7', 'User Roles'], ['2', 'My Modules'], ['JWT', 'Auth System']].map(([v, l]) => (
                    <div key={l} className="text-center">
                      <div className="text-2xl font-bold text-white">{v}</div>
                      <div className="text-xs text-gray-400">{l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Skill cards */}
          <motion.div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" variants={containerVariants}>
            {cards.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div key={i} className="relative group" variants={itemVariants}
                  whileHover={{ scale: 1.03, y: -4 }} transition={{ duration: 0.3 }}>
                  <div className={`relative bg-gradient-to-br ${card.bg} backdrop-blur-xl border border-white/10 rounded-xl p-6 h-full hover:border-white/20 transition-all duration-400`}>
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${card.gradient} flex items-center justify-center mb-4 shadow-lg`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-white font-bold text-base mb-1">{card.title}</h3>
                    <p className="text-blue-300 text-xs font-medium mb-3">{card.subtitle}</p>
                    <p className="text-gray-400 text-xs leading-relaxed mb-4">{card.description}</p>
                    <button
                      className="flex items-center gap-1 text-xs text-gray-500 hover:text-white transition-colors"
                      onClick={() => setSelected(selected === i ? null : i)}>
                      <span>{selected === i ? 'Less' : 'More'}</span>
                      <ChevronRight className={`w-3 h-3 transition-transform ${selected === i ? 'rotate-90' : ''}`} />
                    </button>
                    {selected === i && (
                      <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}
                        className="overflow-hidden pt-3 mt-3 border-t border-white/10">
                        <p className="text-xs text-gray-400 leading-relaxed">{card.details}</p>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />
    </motion.section>
  );
}
