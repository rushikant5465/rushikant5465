import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Globe } from 'lucide-react';

const Skills = () => {
  const technicalSkills = [
    'Swift',
    'SwiftUI',
    'Flutter',
    'React-Native',
    'Mobile Application Development',
  ];

  const languages = [
    { name: 'Marathi', level: 'Native', percentage: 100 },
    { name: 'English', level: 'Advanced', percentage: 75 },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Skills</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl p-8 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Code2 className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Technical Skills</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="px-4 py-2 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors duration-200 cursor-default"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl p-8 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Globe className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Languages</h3>
            </div>
            <div className="space-y-6">
              {languages.map((lang, index) => (
                <motion.div
                  key={lang.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-slate-900">{lang.name}</span>
                    <span className="text-sm text-slate-600">{lang.level}</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.2 + 0.3 }}
                      className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;