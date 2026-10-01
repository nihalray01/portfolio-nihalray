import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Mail, ExternalLink, Phone } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';
import nihalPhoto from '../assets/nihal_ray.jpg';

export default function Hero({ darkMode, onOpenResume }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = personalInfo.roles[roleIndex];
    let typingSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && displayText === currentRole) {
      typingSpeed = 2200;
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % personalInfo.roles.length);
      typingSpeed = 300;
    }

    const timer = setTimeout(() => {
      setDisplayText((prev) => {
        if (!isDeleting) {
          return currentRole.substring(0, prev.length + 1);
        } else {
          return currentRole.substring(0, prev.length - 1);
        }
      });

      if (!isDeleting && displayText === currentRole) {
        setIsDeleting(true);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto w-full relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-10">
        
        {/* Left Column: Authentic Developer Intro */}
        <div className="flex-1 text-center lg:text-left space-y-6">
          
          {/* Status Badges */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
            <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium border ${
              darkMode ? 'bg-slate-900/80 border-slate-800 text-sky-400' : 'bg-sky-50 border-sky-200 text-sky-700'
            }`}>
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
              <span>B.Tech CSE (AI & ML) • Uttaranchal University</span>
            </div>
            <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-medium border ${
              darkMode ? 'bg-emerald-950/40 border-emerald-800/60 text-emerald-400' : 'bg-emerald-50 border-emerald-200 text-emerald-700'
            }`}>
              <span>100+ LeetCode Solved</span>
            </div>
          </div>

          {/* Headline */}
          <div className="space-y-3">
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              Hi, I'm{' '}
              <span className="text-gradient">
                {personalInfo.name}
              </span>
            </h1>

            {/* Typing Subtitle */}
            <div className="h-9 flex items-center justify-center lg:justify-start">
              <span className={`text-lg sm:text-xl font-mono font-semibold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                {displayText}
                <span className="animate-pulse text-sky-400">|</span>
              </span>
            </div>
          </div>

          {/* Resume Summary */}
          <p className={`text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            B.Tech student specializing in AI & Machine Learning with hands-on experience in <strong className="text-sky-400 font-semibold">Computer Vision, NLP, Generative AI</strong> and full-stack <strong className="text-sky-400 font-semibold">MERN development</strong>. Solved 100+ DSA problems on LeetCode. Earned 15+ industry certifications from Oracle, MongoDB, Deloitte & JPMorgan Chase.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
            <button
              onClick={() => scrollTo('projects')}
              className="px-6 py-3 rounded-xl font-semibold text-sm bg-sky-500 hover:bg-sky-400 text-white shadow-md shadow-sky-500/20 hover:shadow-sky-500/30 transition-all flex items-center gap-2"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={personalInfo.liveProject}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl font-semibold text-sm bg-purple-600 hover:bg-purple-500 text-white shadow-md shadow-purple-600/20 transition-all flex items-center gap-2"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Splen OS Live App</span>
            </a>

            <button
              onClick={onOpenResume}
              className={`px-6 py-3 rounded-xl font-semibold text-sm border transition-all flex items-center gap-2 ${
                darkMode
                  ? 'bg-slate-900 border-slate-800 text-slate-200 hover:bg-slate-800 hover:border-slate-700'
                  : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-50'
              }`}
            >
              <Download className="w-4 h-4 text-sky-400" />
              <span>Download Resume</span>
            </button>
          </div>

          {/* Direct Social & Contact Links */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-5 pt-4 border-t border-slate-800/60 text-xs font-mono text-slate-400">
            <a
              href={`tel:${personalInfo.phone}`}
              className="flex items-center gap-2 hover:text-sky-400 transition-colors"
            >
              <Phone className="w-4 h-4 text-sky-400" />
              <span>{personalInfo.phone}</span>
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-sky-400 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>github.com/nihalray01</span>
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-sky-400 transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
              <span>linkedin.com/in/nihalray-80b270323</span>
            </a>
          </div>

        </div>

        {/* Right Column: Clean Developer Portrait Card */}
        <div className="flex-1 w-full max-w-md lg:max-w-none flex justify-center">
          <div className="relative w-full max-w-sm sm:max-w-md">
            
            <div className={`rounded-3xl p-4 border transition-all ${
              darkMode ? 'bg-slate-900/80 border-slate-800 shadow-2xl' : 'bg-white border-slate-200 shadow-xl'
            } space-y-4`}>
              
              {/* Profile Image Frame */}
              <div className="relative h-[420px] sm:h-[480px] w-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-800/60">
                <img
                  src={nihalPhoto}
                  alt="Nihal Ray - Computer Science Engineering Student"
                  className="w-full h-full object-cover object-[center_75%]"
                />
                
                {/* Subtle vignette gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 pointer-events-none" />

                {/* Floating Clean Badge */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-800 text-white space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-sm">Nihal Ray</h3>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 border border-sky-500/30">
                      AI & ML CSE
                    </span>
                  </div>
                  <p className="text-[11px] font-mono text-slate-400">
                    Uttaranchal University, Dehradun (2024–2028)
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
