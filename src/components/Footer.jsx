import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-lg font-semibold">Rushikant Birajdar</p>
            <p className="text-slate-400 text-sm">Programmer Analyst</p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;