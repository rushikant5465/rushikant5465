import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import ExperienceCard from '@/components/ExperienceCard';

const Experience = () => {
  const experiences = [
    {
      title: 'Programmer Analyst',
      company: 'Novigo Solutions',
      location: 'Pune, India',
      period: '01/2024 - Present',
      project: 'BLE Smart Ring App',
      description: [
        'Developed features to capture health vitals—HR, Breathing Rate, SpO2, Skin Temperature, and HRV—using ring data via Apple\'s Bluetooth Core framework.',
        'Implemented continuous and acknowledgement-based data streaming, along with multi-sleep capture support, ensuring accurate and reliable health tracking.',
        'Managed the project end-to-end, including certificate creation, integrations, and production-level feature delivery.',
      ],
      technologies: 'Swift, SwiftUI, iOS, Flutter, AWS, Dart, Xcode, VS Code, Android Studio, Bitbucket, Jira, Figma, Postman',
    },
    {
      title: 'Senior Software Engineer',
      company: 'Indexnine Technologies',
      location: 'Pune, India',
      period: '07/2021 - 01/2024',
      project: 'Trustap',
      description: [
        'Enabled users to onboard with their details and location to receive relevant job listings.',
        'Implemented seamless job browsing and direct application features for improved employer communication.',
        'Streamlined development processes, reducing feature delivery time by 20%.',
      ],
      technologies: 'Swift, SwiftUI, Flutter, AWS, Python, Jira, Bitbucket',
    },
    {
      title: 'Software Engineer',
      company: 'Innover Systems Pvt Ltd',
      location: 'Pune, India',
      period: '10/2020 - 07/2021',
      project: 'PMPML',
      description: [
        'Single-handedly developed a travel app for PMPML enabling users to search bus routes using source–destination input, view nearby bus stops within 3 km, and access bilingual (Marathi/English) support.',
        'Integrated Google Maps with markers and polylines to display routes, stops, path details, and implemented an advanced Bus Router module similar to BusRouter.sg for Pune.',
      ],
      technologies: 'Swift, SwiftUI, Github',
    },
    {
      title: 'Software Engineer',
      company: 'Kisan Forum Pvt Ltd',
      location: 'Pune, India',
      period: '10/2019 - 04/2020',
      project: 'Kisan',
      description: [
        'Enhanced the KISAN.Net app by adding animations, dynamic data handling, and event-based features such as GreenPasses for Kisan2k19.',
        'Developed API request/response modules to manage data flow and replace static content with fully dynamic integration.',
      ],
      technologies: 'Swift, SwiftUI',
    },
    {
      title: 'Software Engineer',
      company: 'Raja Software Labs',
      location: 'Pune, India',
      period: '01/2018 - 05/2019',
      project: 'LinkedIn',
      description: [
        'Migrated legacy feed models to a unified Render Update architecture, consolidating article, channel, and viral updates into a single optimized structure.',
        'Performed UI and scenario testing by writing test cases and validating end-to-end feature flows to ensure stability and consistency.',
      ],
      technologies: 'Swift, Objective-C',
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Experience</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;