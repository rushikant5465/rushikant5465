import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Activity } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: Wrench,
      title: 'Legacy Feed System Upgrade',
      description: 'Successfully migrated LinkedIn\'s legacy feed architecture to a unified Render Update system, improving content delivery consistency and overall user experience.',
    },
    {
      icon: Activity,
      title: 'Health Tracking Implementation',
      description: 'Delivered major health-tracking enhancements (Apple Health, sleep, menstrual cycle, symptoms, HR, goals) and resolved core Bluetooth instability on Android through firmware collaboration, while simplifying complex journal logic using structured Figma workflows.',
    },
  ];

  return (
    <section id="achievements" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Key Achievements</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-600 rounded-lg flex-shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{achievement.title}</h3>
                    <p className="text-slate-700 leading-relaxed">{achievement.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;