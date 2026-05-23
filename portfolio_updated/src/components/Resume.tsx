import { motion } from 'framer-motion';
import { Download, FileText, Shield } from 'lucide-react';

export default function Resume() {
  const handleMainResumeDownload = () => {
    // Open Google Drive file in new tab for download
    window.open('https://drive.google.com/file/d/1GKRbZBG2TJlra6fv24ylSmBrNtdr7_QX/view?usp=drive_link', '_blank');
  };

  const handleCyberResumeDownload = () => {
    // Open Google Drive folder in new tab for download
    window.open('https://drive.google.com/drive/folders/19NZW5FE79Po21w5m9G9PoAHTD7wCthY8?usp=sharing', '_blank');
  };

  return (
    <section id="resume" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Resume</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mb-4" />
          <p className="text-gray-500 text-base max-w-xl mx-auto">Download my resume to learn more about my experience and skills.</p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Main Resume */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="text-center"
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-5 sm:p-8 h-full">
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="inline-block mb-4"
                >
                  <FileText className="text-blue-500 mx-auto" size={64} />
                </motion.div>
                <h3 className="text-2xl font-semibold mb-4">Main Resume</h3>
                <p className="text-gray-600 mb-6">
                  Get a comprehensive overview of my experience, skills, and achievements in cybersecurity and full-stack development.
                </p>
                <motion.button
                  onClick={handleMainResumeDownload}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all transform hover:scale-105 shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download className="mr-2" size={20} />
                  Download Resume
                </motion.button>
                <p className="text-sm text-gray-500 mt-4">
                  PDF format • Last updated: January 2025
                </p>
              </div>
            </motion.div>

            {/* Cyber Fresher Resume */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="text-center"
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-5 sm:p-8 h-full">
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
                  className="inline-block mb-4"
                >
                  <Shield className="text-green-500 mx-auto" size={64} />
                </motion.div>
                <h3 className="text-2xl font-semibold mb-4">Cyber Fresher Resume</h3>
                <p className="text-gray-600 mb-6">
                  Specialized resume focusing on cybersecurity fundamentals, certifications, and entry-level security expertise.
                </p>
                <motion.button
                  onClick={handleCyberResumeDownload}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-lg hover:from-green-600 hover:to-teal-600 transition-all transform hover:scale-105 shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download className="mr-2" size={20} />
                  Download Cyber Resume
                </motion.button>
                <p className="text-sm text-gray-500 mt-4">
                  PDF format • Last updated: January 2025
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}