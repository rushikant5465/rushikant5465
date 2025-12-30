import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Achievements from '@/components/Achievements';
import Awards from '@/components/Awards';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <>
      <Helmet>
        <title>Rushikant Birajdar - Programmer Analyst | Mobile Engineer Portfolio</title>
        <meta name="description" content="Professional portfolio of Rushikant Birajdar, an experienced Programmer Analyst with 7+ years of expertise in iOS and Flutter development, mobile application architecture, and Agile product delivery." />
      </Helmet>
      <div className="min-h-screen bg-slate-50">
        <Header />
        <main>
          <Hero />
          <Experience />
          <Skills />
          <Achievements />
          <Awards />
          <Education />
          <Contact />
        </main>
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;