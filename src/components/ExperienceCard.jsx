import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar, Code } from 'lucide-react';

const ExperienceCard = ({ experience, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-slate-50 rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-200"
    >
      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
        <div className="mb-4 md:mb-0">
          <h3 className="text-2xl font-bold text-slate-900 mb-2">{experience.title}</h3>
          <p className="text-xl text-blue-600 font-semibold mb-3">{experience.company}</p>
          <div className="flex flex-wrap gap-4 text-slate-600">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">{experience.period}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">{experience.location}</span>
            </div>
          </div>
        </div>
      </div>

      {experience.project && (
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <Briefcase className="w-5 h-5 text-blue-600" />
            <span className="font-semibold text-slate-900">Project: {experience.project}</span>
          </div>
        </div>
      )}

      <ul className="space-y-3 mb-6">
        {experience.description.map((item, idx) => (
          <li key={idx} className="flex gap-3 text-slate-700">
            <span className="text-blue-600 mt-1.5 flex-shrink-0">•</span>
            <span className="leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>

      <div className="pt-4 border-t border-slate-200">
        <div className="flex items-start gap-2">
          <Code className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
          <div>
            <span className="text-sm font-semibold text-slate-900">Tech & Tools:</span>
            <p className="text-sm text-slate-600 mt-1">{experience.technologies}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;