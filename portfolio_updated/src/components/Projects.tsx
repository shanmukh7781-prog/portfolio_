import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, Calendar, Code2, Target, Lightbulb, Star } from 'lucide-react';

interface Project {
  title: string; year: string; description: string; image: string;
  github: string; github2?: string; demo: string; demo2?: string; featured?: boolean;
  badge?: string;
  details: { technologies: string[]; features: string[]; challenges: string };
}

const projects: Project[] = [
  {
    title: 'JusticeServe — Legal Case & Court Management System',
    year: '2025',
    featured: true,
    badge: 'Cognizant Training Project',
    description: 'Enterprise-grade 11-service microservices application for managing legal cases, hearings, judgments, compliance, and notifications. Built with Java 21, Spring Boot 3, Spring Cloud, MySQL, and Angular 17.',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80',
    github: 'https://github.com/shanmukh7781-prog',
    demo: '#',
    details: {
      technologies: ['Java 21', 'Spring Boot 3.2.5', 'Spring Security', 'JWT (JJWT 0.12.5)', 'JPA / Hibernate', 'MySQL 8', 'Spring Cloud (Eureka, Gateway, Config, Feign)', 'Angular 17', 'TypeScript', 'Bootstrap 5', 'RxJS', 'Lombok', 'Zipkin'],
      features: [
        '11-service microservices: Eureka, Config Server, API Gateway + 8 business services',
        'JWT-based stateless auth with HMAC-SHA256 — 7-layer security (guards → @PreAuthorize)',
        'Citizen Service ★ — profile management, document upload & clerk verification via Feign',
        'Notification Service ★ — passive real-time alerts, unread count polling every 30s',
        'Case lifecycle: FILED → ACTIVE → HEARING_SCHEDULED → JUDGMENT_PENDING → CLOSED',
        'Role-based access: 7 roles (CITIZEN, LAWYER, JUDGE, CLERK, ADMIN, COMPLIANCE, AUDITOR)',
        'Immutable audit trail — every action logged via AuditFeignClient to compliance-service',
        'Angular frontend with route guards, JWT interceptor, BehaviorSubject state management',
      ],
      challenges: 'Coordinating 11 independent services with Feign-based inter-service communication, implementing defense-in-depth security at both gateway and microservice level, and managing automatic case status transitions triggered across service boundaries.',
    },
  },
  {
    title: 'Cyber Threat Analysis Tool (Online SIEM Simulation)',
    year: '2025',
    description: 'A SIEM-inspired cybersecurity tool for analyzing IPs, domains, logs, HTTP headers, and files with live threat intelligence integration.',
    image: 'https://images.unsplash.com/photo-1563206767-5b18f218e8de?auto=format&fit=crop&w=800&q=80',
    github: 'https://github.com/shanmukh7781-prog/Cyber-Threat-Analysis-Tool-Online-SIEM-Simulation-',
    demo: 'https://advanced-cybersecuri-swky.bolt.host/',
    demo2: 'https://cybersecurity-siem-d-y3qf.bolt.host/',
    details: {
      technologies: ['Prompt Engineering', 'Threat Intelligence APIs', 'MITRE ATT&CK'],
      features: [
        'Real-time IP and domain reputation checks',
        'MITRE ATT&CK mapping and severity scoring',
        'File hash analysis with threat database simulation',
        'SOC-style reports with technical and executive summaries',
        'Threat map JSON output for geolocation visualization',
      ],
      challenges: 'Simulating enterprise SIEM workflows while keeping the system lightweight and educational.',
    },
  },
  {
    title: 'Enterprise SOC Prototype & Attack Simulation',
    year: '2025',
    description: 'A prototype SOC environment demonstrating layered enterprise security defenses and attack simulations.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    github: 'https://github.com/shanmukh7781-prog/Enterprise-SOC-Prototype-Attack-Simulation',
    demo: 'https://enterprise-soc-cyber-v8rz.bolt.host/',
    details: {
      technologies: ['IDS/IPS (Snort/Suricata)', 'WAF (ModSecurity)', 'Honeypots', 'SIEM Simulation', 'Prompt Engineering'],
      features: [
        'Enterprise SOC architecture with firewalls, IDS/IPS, WAF, and honeypots',
        'Centralized log collection and correlation',
        'Attack simulations: phishing, brute force, SQLi, XSS, port scanning',
        'MITRE ATT&CK mapping with risk scores and severity-based alerts',
        'SOC-style incident reports with executive summaries',
      ],
      challenges: 'Integrating multiple defensive layers and simulating realistic enterprise-grade cyberattacks in a controlled learning environment.',
    },
  },
  {
    title: 'Offline Cyber Threat Analyzer',
    year: '2025',
    description: 'A standalone cybersecurity analysis tool replicating SIEM features in a fully offline environment.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
    github: 'https://github.com/shanmukh7781-prog/Offline-Cyber-Threat-Analyzer',
    demo: 'https://cybersecurity-siem-a-2wlj.bolt.host/r',
    details: {
      technologies: ['Prompt Engineering', 'Local Hashing', 'Log Parsing'],
      features: [
        'Offline log analysis and anomaly detection',
        'Simulated IP and domain intelligence checks',
        'HTTP header security inspection',
        'Risk scoring and SOC-style offline reports',
      ],
      challenges: 'Designing realistic SIEM-like analysis without internet connectivity.',
    },
  },
  {
    title: 'LinkedIn Clone',
    year: '2024',
    featured: true,
    description: 'A comprehensive LinkedIn clone featuring professional networking capabilities, user profiles, and post interactions.',
    image: 'https://images.unsplash.com/photo-1616469829581-73993eb86b02?auto=format&fit=crop&w=800&q=80',
    github: 'https://github.com/shanmukh7781-prog/Linkedin-Clone.git',
    demo: 'https://jolly-salmiakki-525a09.netlify.app/',
    details: {
      technologies: ['React', 'Firebase', 'Redux', 'Styled Components'],
      features: ['User authentication', 'Professional profile creation', 'Post creation and interaction', 'Real-time updates', 'Responsive design'],
      challenges: 'Implementing real-time updates and maintaining consistent UI/UX across different devices.',
    },
  },
  {
    title: 'Basic Online Bank Management System',
    year: '2023',
    description: 'A comprehensive banking system with user authentication, transaction management, and account operations.',
    image: 'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&w=800&q=80',
    github: 'https://github.com/shanmukh7781-prog/ONLINE-BANK-MANAGEMENT.git',
    github2: 'https://github.com/shanmukh7781-prog/Online-Bank-Management-System.git',
    demo: 'https://joyful-taiyaki-affee9.netlify.app/',
    details: {
      technologies: ['Java', 'Spring Boot', 'MySQL', 'React'],
      features: ['User authentication', 'Account management', 'Transaction processing', 'Balance inquiry', 'Transfer operations'],
      challenges: 'Ensuring transaction atomicity and implementing secure banking operations.',
    },
  },
  {
    title: 'BMI Calculator',
    year: '2025',
    description: 'A responsive BMI calculator to determine body mass index based on height and weight.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80',
    github: 'https://github.com/shanmukhkk/BMI',
    demo: 'https://shanmukhkk.github.io/BMI/',
    details: {
      technologies: ['HTML', 'CSS', 'JavaScript'],
      features: ['Real-time BMI calculation', 'Responsive layout', 'Health category guidance', 'User-friendly input'],
      challenges: 'Ensuring accurate BMI logic and clean responsive design for all screen sizes.',
    },
  },
  {
    title: 'Portfolio Website',
    year: '2024',
    description: 'A modern, responsive portfolio website showcasing projects and skills with interactive features and smooth animations.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    github: 'https://github.com/shanmukh7781-prog/Portfolio.git',
    demo: 'https://soft-crepe-83419a.netlify.app/',
    details: {
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      features: ['Responsive design', 'Interactive project cards', 'Smooth animations', 'Project filtering', 'Modal project details'],
      challenges: 'Implementing smooth animations while maintaining performance across devices.',
    },
  },
];

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const [filter, setFilter] = useState<'all' | 'featured'>('all');

  const visible = filter === 'featured' ? projects.filter((p) => p.featured) : projects;

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mb-6" />
          <div className="flex justify-center gap-3">
            {(['all', 'featured'] as const).map((f) => (
              <button key={f} onClick={() => setFilter(f)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === f ? 'bg-blue-600 text-white shadow-md' : 'bg-white text-gray-600 border border-gray-200 hover:border-blue-300'
                }`}>
                {f === 'all' ? 'All Projects' : '⭐ Featured'}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {visible.map((project, i) => (
              <motion.div key={project.title} layout
                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.4, delay: i * 0.06 }}
                className={`group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border ${
                  project.title.includes('JusticeServe') ? 'border-blue-200 ring-2 ring-blue-100' : 'border-gray-100'
                }`}
                onClick={() => setSelected(project)}
                whileHover={{ y: -4 }}>
                <div className="relative overflow-hidden h-48">
                  <img src={project.image} alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-3 right-3 flex gap-2">
                    {project.featured && (
                      <span className="flex items-center gap-1 px-2 py-1 bg-yellow-400 text-yellow-900 text-xs font-bold rounded-full">
                        <Star size={10} /> Featured
                      </span>
                    )}
                    {project.badge && (
                      <span className="px-2 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">{project.badge}</span>
                    )}
                  </div>
                  <div className="absolute bottom-3 left-3 flex items-center gap-1 text-white text-xs">
                    <Calendar size={12} /><span>{project.year}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-gray-900 mb-2 text-base leading-tight line-clamp-2">{project.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.details.technologies.slice(0, 4).map((t) => (
                      <span key={t} className="px-2 py-0.5 bg-blue-50 text-blue-600 rounded-full text-xs">{t}</span>
                    ))}
                    {project.details.technologies.length > 4 && (
                      <span className="px-2 py-0.5 bg-gray-100 text-gray-500 rounded-full text-xs">+{project.details.technologies.length - 4}</span>
                    )}
                  </div>
                  <div className="flex gap-3" onClick={(e) => e.stopPropagation()}>
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-gray-500 hover:text-gray-900 text-xs font-medium transition-colors">
                        <Github size={14} /> Code
                      </a>
                    )}
                    {project.demo && project.demo !== '#' && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-blue-500 hover:text-blue-700 text-xs font-medium transition-colors">
                        <ExternalLink size={14} /> Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}>
            <motion.div className="bg-white rounded-2xl w-full max-w-2xl max-h-[85vh] overflow-hidden flex flex-col shadow-2xl"
              initial={{ scale: 0.9, y: 30 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 30 }}
              onClick={(e) => e.stopPropagation()}>
              <div className="relative h-52 flex-shrink-0">
                <img src={selected.image} alt={selected.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <button className="absolute top-4 right-4 w-9 h-9 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-colors"
                  onClick={() => setSelected(null)}><X size={18} /></button>
                {selected.badge && (
                  <span className="absolute bottom-4 left-4 px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">{selected.badge}</span>
                )}
              </div>
              <div className="p-4 sm:p-6 overflow-y-auto flex-1">
                <div className="flex items-center gap-2 text-gray-400 text-xs mb-2">
                  <Calendar size={14} /><span>{selected.year}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{selected.title}</h3>
                <p className="text-gray-600 mb-5 text-sm leading-relaxed">{selected.description}</p>
                <div className="space-y-5">
                  <div>
                    <div className="flex items-center gap-2 font-semibold text-gray-900 mb-2 text-sm">
                      <Code2 size={16} className="text-blue-500" /> Technologies
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {selected.details.technologies.map((t) => (
                        <span key={t} className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs">{t}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 font-semibold text-gray-900 mb-2 text-sm">
                      <Target size={16} className="text-green-500" /> Key Features
                    </div>
                    <ul className="space-y-1.5 text-gray-600 text-sm">
                      {selected.details.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0" />{f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 font-semibold text-gray-900 mb-2 text-sm">
                      <Lightbulb size={16} className="text-yellow-500" /> Challenges
                    </div>
                    <p className="text-gray-600 text-sm">{selected.details.challenges}</p>
                  </div>
                  <div className="flex flex-wrap gap-4 pt-4 border-t">
                    {selected.github && (
                      <a href={selected.github} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors text-sm">
                        <Github size={18} /> View Code
                      </a>
                    )}
                    {selected.github2 && (
                      <a href={selected.github2} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors text-sm">
                        <Github size={18} /> Code (Alt)
                      </a>
                    )}
                    {selected.demo && selected.demo !== '#' && (
                      <a href={selected.demo} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors text-sm">
                        <ExternalLink size={18} /> Live Demo
                      </a>
                    )}
                    {selected.demo2 && (
                      <a href={selected.demo2} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors text-sm">
                        <ExternalLink size={18} /> Demo 2
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
