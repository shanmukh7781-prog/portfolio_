import { motion } from 'framer-motion';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { GraduationCap, Briefcase } from 'lucide-react';

const education = [
  {
    title: 'B.Tech in Electronics and Communication Engineering',
    institution: 'SRKR Engineering College, Bhimavaram',
    period: '2021 – 2025',
    description: 'Graduated with a B.Tech in ECE. ',
  },
  {
    title: 'Intermediate Education (MPC)',
    institution: 'Narayana Junior College',
    period: '2019 – 2021',
    description: 'Completed intermediate with focus on Mathematics, Physics, and Chemistry.',
  },
  {
    title: 'Secondary Education',
    institution: 'Narayana High School',
    period: '2018 – 2019',
    description: 'Completed secondary education with distinction.',
  },
];

const experience = [
  {
    title: 'Programmer Analyst Trainee',
    company: 'Cognizant Technology Solutions, Coimbatore',
    period: 'Jan 2026 – Present',
    current: true,
    description: [
      'Undergoing intensive training in Java Full Stack Engineering with Angular — currently in final stage.',
      'Built JusticeServe, an 11-service microservices Legal Case & Court Management System using Java 21, Spring Boot 3.2.5, Spring Cloud, MySQL, and Angular 17.',
      'Personally contributed two modules: Citizen Service (profile management, document verification via Feign) and Notification Service (real-time in-app alerts, unread count polling).',
      'Implemented JWT-based authentication, role-based access control (@PreAuthorize), Spring Security filter chain, OpenFeign inter-service communication, and Eureka service discovery.',
      'Trained in Agile methodology, Git workflows, REST API design, JPA/Hibernate, and Spring Cloud components (Eureka, Config Server, API Gateway, OpenFeign).',
    ],
    tech: ['Java 21', 'Spring Boot 3', 'Angular 17', 'MySQL', 'Spring Cloud', 'JWT', 'Microservices'],
  },
  {
    title: 'Full Stack Development Intern',
    company: 'Mayinkrish Ventures Pvt Ltd',
    period: 'Jan 2025 – Apr 2025',
    description: [
      'Contributed to project development using AI tools and no-code solutions through prompt engineering techniques.',
      'Collaborated on building scalable solutions using AI-driven development workflows.',
      'Gained exposure to product management, planning, prompt strategy design, and deployment cycles.',
      'Managed project timelines and participated in testing, feedback analysis, and workflow enhancements.',
    ],
  },
  {
    title: 'Cybersecurity Virtual Trainee',
    company: 'AICTE (All India Council for Technical Education)',
    period: 'Oct 2024 – Dec 2024',
    description: [
      'Gained knowledge in cloud security — cloud architecture, risk management, and security protocols.',
      'Learned security operations including incident detection, response strategies, and security monitoring tools.',
      'Studied core principles of cybersecurity: risk management, threat analysis, encryption, and information systems protection.',
    ],
  },
  {
    title: 'Cyber Security Analyst and Ethical Hacker',
    company: 'Coincent AI',
    period: 'Aug 2024 – Oct 2024',
    description: [
      'Conducted vulnerability assessments and penetration testing.',
      'Implemented security measures, protocols, and ethical hacking exercises.',
      'Performed security audits and maintained security documentation.',
    ],
  },
  {
    title: 'Full Stack Developer',
    company: 'Blackbucks',
    period: 'Jun 2024 – Aug 2024',
    description: [
      'Developed full-stack web applications using modern technologies.',
      'Implemented responsive designs, integrated APIs, and managed database operations.',
      'Participated in code reviews and system architecture discussions.',
    ],
  },
  {
    title: 'Java Developer',
    company: 'Henotic IT Solutions PVT. LTD',
    period: 'Jul 2023 – Aug 2023',
    description: [
      'Developed Java-based applications, backend APIs, and database integrations.',
      'Worked on performance optimization and collaborated with senior developers.',
    ],
  },
];

export default function Timeline() {
  return (
    <div className="py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-white overflow-x-hidden">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}
        viewport={{ once: true }} className="container mx-auto px-4">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Education & Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mb-4" />
          <p className="text-gray-400 text-base max-w-xl mx-auto">My academic background and professional journey so far.</p>
        </div>

        <motion.h3
          className="text-2xl font-bold mb-8 text-white"
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          Education
        </motion.h3>
        <VerticalTimeline>
          {education.map((item, i) => (
            <VerticalTimelineElement key={i}
              className="vertical-timeline-element--education"
              date={item.period}
              iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
              icon={<GraduationCap />}
              contentStyle={{ background: 'linear-gradient(145deg,#ffffff,#f3f4f6)', boxShadow: '0 3px 10px rgba(0,0,0,0.1)', borderRadius: '12px' }}>
              <h3 className="font-bold text-lg text-gray-900">{item.title}</h3>
              <h4 className="mt-1 text-blue-600 font-medium">{item.institution}</h4>
              <p className="text-gray-600 mt-2 text-sm">{item.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>

        <motion.h3
          className="text-2xl font-bold mb-8 mt-16 text-white"
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          Experience
        </motion.h3>
        <VerticalTimeline>
          {experience.map((item, i) => (
            <VerticalTimelineElement key={i}
              className="vertical-timeline-element--work"
              date={item.period}
              iconStyle={{ background: item.current ? 'rgb(37,99,235)' : 'rgb(33,150,243)', color: '#fff' }}
              icon={<Briefcase />}
              contentStyle={{
                background: item.current ? 'linear-gradient(145deg,#eff6ff,#dbeafe)' : 'linear-gradient(145deg,#ffffff,#f3f4f6)',
                boxShadow: item.current ? '0 4px 20px rgba(37,99,235,0.2)' : '0 3px 10px rgba(0,0,0,0.1)',
                borderRadius: '12px',
                border: item.current ? '1px solid rgba(37,99,235,0.3)' : 'none',
              }}>
              <div className="flex items-start justify-between flex-wrap gap-2">
                <div>
                  <h3 className="font-bold text-lg text-gray-900">{item.title}</h3>
                  <h4 className="mt-1 text-blue-600 font-medium text-sm">{item.company}</h4>
                </div>
                {item.current && (
                  <span className="flex items-center gap-1.5 px-3 py-1 bg-blue-500 text-white text-xs rounded-full font-medium">
                    <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                    Current
                  </span>
                )}
              </div>
              <ul className="list-disc list-inside mt-3 text-gray-600 space-y-1.5 text-sm">
                {item.description.map((p, j) => <li key={j}>{p}</li>)}
              </ul>
              {item.tech && (
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {item.tech.map((t) => (
                    <span key={t} className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">{t}</span>
                  ))}
                </div>
              )}
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </motion.div>
    </div>
  );
}
