import React from 'react';
import { ArrowUp, Mail, Heart, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';


export default function Footer({ darkMode }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`relative z-10 border-t py-12 px-4 sm:px-6 lg:px-8 ${
      darkMode ? 'bg-slate-950/90 border-slate-800/80 text-slate-400' : 'bg-slate-50 border-slate-200 text-slate-600'
    }`}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side: Brand & Quote */}
        <div className="space-y-1 text-center md:text-left">
          <h3 className={`font-bold text-lg ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Nihal Ray
          </h3>
          <p className="text-xs font-mono">
            © 2026 Nihal Ray. All rights reserved.
          </p>
          <p className="text-xs text-cyan-500 font-medium flex items-center justify-center md:justify-start gap-1 pt-1">
            <span>Built with passion for technology and innovation.</span>
          </p>
        </div>

        {/* Center: Social Icons */}
        <div className="flex items-center gap-4">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className={`p-2.5 rounded-xl border transition-colors ${
              darkMode ? 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700' : 'bg-white border-slate-200 text-slate-600 hover:text-slate-900'
            }`}
          >
            <GithubIcon className="w-5 h-5" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className={`p-2.5 rounded-xl border transition-colors ${
              darkMode ? 'bg-slate-900 border-slate-800 text-slate-400 hover:text-blue-400 hover:border-slate-700' : 'bg-white border-slate-200 text-slate-600 hover:text-blue-600'
            }`}
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            aria-label="Email Nihal"
            className={`p-2.5 rounded-xl border transition-colors ${
              darkMode ? 'bg-slate-900 border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-slate-700' : 'bg-white border-slate-200 text-slate-600 hover:text-cyan-600'
            }`}
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

        {/* Right Side: Back to Top */}
        <button
          onClick={scrollToTop}
          aria-label="Back to Top"
          className={`p-3 rounded-xl border transition-all flex items-center gap-2 text-xs font-mono font-semibold ${
            darkMode
              ? 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800 hover:text-cyan-400'
              : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100 hover:text-blue-600'
          }`}
        >
          <span>Back to Top</span>
          <ArrowUp className="w-4 h-4" />
        </button>

      </div>
    </footer>
  );
}
