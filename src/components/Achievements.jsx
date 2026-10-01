import React from 'react';
import { Users, Award, Calendar, Sparkles, Trophy } from 'lucide-react';
import { achievements } from '../data/portfolioData';

const iconMap = {
  Users: Users,
  Award: Award,
  Calendar: Calendar,
  Sparkles: Sparkles,
};

export default function Achievements({ darkMode }) {
  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
            <Trophy className="w-3.5 h-3.5" />
            <span>EXTRACURRICULAR LEADERSHIP</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Achievements & <span className="text-gradient">Activities</span>
          </h2>
          <p className={`max-w-2xl mx-auto text-base ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Leadership roles, event management, and team collaboration outside classroom boundaries.
          </p>
        </div>

        {/* Grid of Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || Trophy;
            return (
              <div
                key={idx}
                className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                  darkMode
                    ? 'bg-slate-900/60 border-slate-800 hover:border-amber-500/40 shadow-xl'
                    : 'bg-white border-slate-200 shadow-md hover:shadow-lg'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3.5 rounded-xl bg-gradient-to-tr from-amber-500/20 to-orange-500/20 text-amber-400 border border-amber-500/30 shrink-0">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                        {item.title}
                      </h3>
                      <span className="text-xs font-mono text-slate-400">{item.period}</span>
                    </div>
                    <span className="text-xs font-semibold text-cyan-400 block font-mono">
                      {item.organization}
                    </span>
                    <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
