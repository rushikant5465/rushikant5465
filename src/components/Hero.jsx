import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="pt-24 pb-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="z-10"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Rushikant Birajdar
            </h1>
            <h2 className="text-2xl md:text-3xl text-blue-400 font-semibold mb-6">
              Programmer Analyst
            </h2>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="tel:+919730538149"
                className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>+919730538149</span>
              </a>
              <a
                href="mailto:rushi@novigosolutions.com"
                className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>rushi@novigosolutions.com</span>
              </a>
              <a
                href="https://www.linkedin.com/in/rushikant-birajdar-2aa2bab5/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
            </div>

            <p className="text-lg text-slate-300 leading-relaxed">
              Experienced Mobile Engineer with 7+ years of expertise developing high-quality iOS and Flutter applications. 
              Proficient in crafting robust app architectures, integrating REST/GraphQL services, and connecting BLE-enabled 
              health devices for real-time data processing. Strong background in Swift, SwiftUI, Flutter state management, 
              and CoreData, with a proven track record of delivering reliable features, improving performance, and contributing 
              to fast-paced Agile product teams.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-sm lg:max-w-md aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-4 border-blue-500/20 group">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent z-10"></div>
              <img 
                src="https://horizons-cdn.hostinger.com/2d2e11fa-8c73-4ab0-a593-80c89784c883/729e20b0ea8f88cd16ccd85fb6fc3202.png" 
                alt="Rushikant Birajdar - Programmer Analyst" 
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
            {/* Decorative background element */}
            <div className="absolute -z-10 top-10 right-10 w-full h-full bg-blue-600/10 rounded-2xl blur-3xl transform rotate-6"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;