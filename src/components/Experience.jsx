import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Award, Sparkles } from 'lucide-react';
import { experienceTimeline } from '../data/portfolioData';

export default function Experience({ darkMode }) {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
            <Briefcase className="w-3.5 h-3.5" />
            <span>TRAINING & INTERNSHIP</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Experience & <span className="text-gradient">Training</span>
          </h2>
          <p className={`max-w-2xl mx-auto text-base ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Practical technical experience, hands-on AI/ML training, and software development growth.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-slate-800/80 dark:border-slate-800 ml-4 sm:ml-8 pl-6 sm:pl-8 space-y-10">
          {experienceTimeline.map((item, index) => (
            <div key={index} className="relative group">
              
              {/* Timeline Bullet Node */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-slate-950 border-2 border-cyan-400 flex items-center justify-center shadow-md shadow-cyan-500/20 group-hover:scale-125 transition-transform duration-300">
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              </div>

              {/* Timeline Content Card */}
              <div className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 ${
                darkMode
                  ? 'bg-slate-900/60 border-slate-800 hover:border-cyan-500/40 shadow-xl'
                  : 'bg-white border-slate-200 shadow-md hover:shadow-lg'
              }`}>
                
                {/* Meta Bar */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.period}</span>
                  </span>
                  <span className={`text-xs font-mono font-medium ${darkMode ? 'text-slate-400' : 'text-slate-500'} flex items-center gap-1`}>
                    <MapPin className="w-3.5 h-3.5 text-rose-400" />
                    <span>{item.location}</span>
                  </span>
                </div>

                {/* Title & Org */}
                <div className="space-y-1 mb-4">
                  <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    {item.role}
                  </h3>
                  <div className="flex items-center gap-2 text-sm font-semibold text-cyan-400">
                    <Award className="w-4 h-4" />
                    <span>{item.organization}</span>
                  </div>
                </div>

                <p className={`text-sm mb-4 leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                  {item.description}
                </p>

                {/* Outcomes List */}
                <div className="space-y-2 pt-2 border-t border-slate-800/60">
                  <span className="text-xs font-mono uppercase text-slate-400 font-semibold block mb-2">
                    Key Outcomes & Accomplishments:
                  </span>
                  {item.outcomes.map((outcome, oIdx) => (
                    <div key={oIdx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>{outcome}</span>
                    </div>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
