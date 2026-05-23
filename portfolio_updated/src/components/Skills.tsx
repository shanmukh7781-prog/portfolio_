import { motion } from 'framer-motion';

const skillGroups = [
  {
    category: 'Backend — Java & Spring',
    icon: '☕',
    color: 'from-blue-500 to-cyan-500',
    items: ['Java 21', 'Spring Boot 3', 'Spring Security', 'JWT / JJWT', 'JPA / Hibernate', 'REST APIs', 'BCrypt', 'Lombok', 'Jakarta Validation'],
  },
  {
    category: 'Microservices — Spring Cloud',
    icon: '☁️',
    color: 'from-purple-500 to-pink-500',
    items: ['Eureka Server', 'API Gateway', 'Config Server', 'OpenFeign', 'Micrometer', 'Zipkin', 'Spring Actuator', 'MySQL (per-service)'],
  },
  {
    category: 'Frontend — Angular & Web',
    icon: '🅰️',
    color: 'from-red-500 to-orange-500',
    items: ['Angular 17', 'TypeScript', 'RxJS', 'HttpClient', 'Route Guards', 'JWT Interceptor', 'Bootstrap 5', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    category: 'Frontend — React',
    icon: '⚛️',
    color: 'from-cyan-500 to-blue-500',
    items: ['React', 'Framer Motion', 'Styled Components', 'Redux'],
  },
  {
    category: 'Databases',
    icon: '🗄️',
    color: 'from-green-500 to-teal-500',
    items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Postman'],
  },
  {
    category: 'Cyber Security',
    icon: '🛡️',
    color: 'from-yellow-500 to-orange-500',
    items: ['OWASP Top 10', 'Nmap', 'Burp Suite', 'Penetration Testing', 'IDS / IPS', 'WAF', 'Honeypot', 'SIEM', 'Ethical Hacking', 'MITRE ATT&CK'],
  },
  {
    category: 'Network Security',
    icon: '🌐',
    color: 'from-indigo-500 to-purple-500',
    items: ['Firewalls', 'Next-Gen Firewall', 'Load Balancer', 'DMZ', 'Proxy', 'Email Security Gateway', 'Antivirus (AV)'],
  },
  {
    category: 'DevOps & Tools',
    icon: '🛠️',
    color: 'from-gray-500 to-slate-500',
    items: ['Git', 'GitHub', 'Docker', 'AWS', 'Vite', 'Agile / Scrum', 'Prompt Engineering'],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mb-4" />
          <p className="text-gray-500 text-base max-w-xl mx-auto">
            Full-stack engineering with Java & Angular, microservices architecture, and cybersecurity — all in one profile.
          </p>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" whileInView="visible"
          viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group, i) => (
            <motion.div key={i} variants={itemVariants}
              whileHover={{ scale: 1.03, y: -4 }}
              className="bg-gray-50 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${group.color} flex items-center justify-center text-lg shadow`}>
                  {group.icon}
                </div>
                <h3 className="font-bold text-gray-800 text-sm leading-tight">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill, j) => (
                  <motion.span key={j}
                    className="px-2.5 py-1 bg-white border border-gray-200 rounded-full text-gray-700 text-xs font-medium hover:border-blue-300 hover:text-blue-600 transition-colors cursor-default"
                    whileHover={{ scale: 1.05 }}>
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
