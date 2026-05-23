import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';


export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Certifications</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mb-4" />
          <p className="text-gray-500 text-base max-w-xl mx-auto">Professional certifications and credentials that validate my skills.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          whileHover={{ y: -6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-5 sm:p-8 text-center">
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="inline-block mb-4"
            >
              <Award className="text-blue-500 mx-auto" size={52} />
            </motion.div>
            <h3 className="text-2xl font-semibold mb-4">View My Certifications</h3>
            <p className="text-gray-600 mb-6">
              Check out my professional certifications and badges on LinkedIn
            </p>
            <motion.a
              href="https://www.linkedin.com/in/shanmukh-k-a361b1253"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              View Certifications <ExternalLink className="ml-2" size={20} />
            </motion.a>
            <p className="text-sm text-gray-500 mt-4">
              Tip: Once on my profile, click on "Show credentials" to view all certifications
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}