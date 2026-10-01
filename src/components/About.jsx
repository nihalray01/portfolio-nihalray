import React from 'react';
import { GraduationCap, Code2, Briefcase, Sparkles, CheckCircle, BookOpen, MapPin } from 'lucide-react';
import { personalInfo, stats } from '../data/portfolioData';

const iconMap = {
  GraduationCap: GraduationCap,
  Code2: Code2,
  Briefcase: Briefcase,
  Sparkles: Sparkles,
};

export default function About({ darkMode }) {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium border ${
            darkMode ? 'bg-slate-900 border-slate-800 text-sky-400' : 'bg-sky-50 border-sky-200 text-sky-700'
          }`}>
            <BookOpen className="w-3.5 h-3.5" />
            <span>BACKGROUND & FOCUS</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            About <span className="text-gradient">Nihal Ray</span>
          </h2>
          <p className={`max-w-2xl mx-auto text-base ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Combining computer science fundamentals with hands-on Machine Learning development.
          </p>
        </div>

        {/* Top Grid: Bio Card & Quick Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Bio Card */}
          <div className={`lg:col-span-7 rounded-2xl p-6 sm:p-8 border ${
            darkMode ? 'bg-slate-900/60 border-slate-800 text-slate-300' : 'bg-white border-slate-200 text-slate-700 shadow-sm'
          } flex flex-col justify-between space-y-6`}>
            
            <div className="space-y-4">
              <h3 className={`text-xl sm:text-2xl font-bold flex items-center gap-2.5 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                <span className="w-2 h-6 rounded-full bg-sky-400 inline-block" />
                Computer Science & AI/ML Engineer
              </h3>
              
              <p className="leading-relaxed text-base">
                I am currently pursuing my <strong className="text-sky-400 font-semibold">B.Tech in Computer Science Engineering (AI & ML)</strong> at <strong className="text-sky-400 font-semibold">Uttaranchal University, Dehradun</strong> (2024–2028).
              </p>

              <p className="leading-relaxed text-base">
                My primary focus is building practical applications in <strong className="text-sky-400 font-semibold">Machine Learning</strong>, <strong className="text-sky-400 font-semibold">Data Science</strong>, and <strong className="text-sky-400 font-semibold">Computer Vision</strong>. I enjoy writing clean, modular Python code to solve real-world problems—ranging from text classification to document search assistants.
              </p>
            </div>

            {/* Core Competencies */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-800/60 text-sm font-medium">
              <div className="flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-sky-400 shrink-0" />
                <span className={darkMode ? 'text-slate-200' : 'text-slate-800'}>Practical ML Classifiers</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-sky-400 shrink-0" />
                <span className={darkMode ? 'text-slate-200' : 'text-slate-800'}>Computer Vision & OpenCV</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-sky-400 shrink-0" />
                <span className={darkMode ? 'text-slate-200' : 'text-slate-800'}>Clean Python Code</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-sky-400 shrink-0" />
                <span className={darkMode ? 'text-slate-200' : 'text-slate-800'}>Continuous Technical Growth</span>
              </div>
            </div>

          </div>

          {/* Side Info Cards */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            
            {/* Location & Uni Card */}
            <div className={`p-6 rounded-2xl border ${darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'} space-y-3`}>
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-slate-400 block font-medium">Campus Location</span>
                  <h4 className={`text-base font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    Dehradun, Uttarakhand
                  </h4>
                </div>
              </div>
              <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Studying full-time at Uttaranchal University with a focus on Artificial Intelligence and Machine Learning algorithms.
              </p>
            </div>

            {/* Academic Track Card */}
            <div className={`p-6 rounded-2xl border ${darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'} space-y-3`}>
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-slate-400 block font-medium">Degree & Major</span>
                  <h4 className={`text-base font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    B.Tech CSE (AI & ML)
                  </h4>
                </div>
              </div>
              <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Batch 2024 – 2028 | Coursework includes Scikit-Learn, Data Structures, Algorithms, Neural Networks & Web Systems.
              </p>
            </div>

          </div>

        </div>

        {/* Four Key Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat, idx) => {
            const IconComponent = iconMap[stat.icon] || Sparkles;
            return (
              <div
                key={idx}
                className={`p-6 rounded-2xl border transition-all duration-200 ${
                  darkMode
                    ? 'bg-slate-900/50 border-slate-800 hover:border-slate-700'
                    : 'bg-white border-slate-200 shadow-sm'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-slate-800 text-sky-400 border border-slate-700`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono font-semibold text-slate-500">0{idx + 1}</span>
                </div>
                <h4 className={`text-lg font-bold mb-1 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  {stat.value}
                </h4>
                <p className={`text-xs font-mono ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
