import React, { useState } from 'react';
import { ExternalLink, Code2, Eye } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { projects } from '../data/portfolioData';

// Image mockups path mapping
import ragImg from '../assets/rag_document_assistant_1790236136146.png';
import spamImg from '../assets/email_spam_detection_1790236355078.png';
import gestureImg from '../assets/hand_gesture_control_1790236458502.png';

const projectImages = {
  'documind-ai': ragImg,
  'rag-assistant': ragImg,
  'email-spam-detection': spamImg,
  'air-writing-recognition': gestureImg,
  'live-gesture-control': gestureImg,
};

export default function Projects({ darkMode, onSelectProject }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filterOptions = [
    { label: 'All Projects', value: 'all' },
    { label: 'AI & Machine Learning', value: 'ai' },
    { label: 'Computer Vision', value: 'vision' },
    { label: 'Web & Algorithms', value: 'web' },
  ];

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === 'all') return true;
    return p.filterTag === activeFilter;
  });

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium border ${
            darkMode ? 'bg-slate-900 border-slate-800 text-sky-400' : 'bg-sky-50 border-sky-200 text-sky-700'
          }`}>
            <Code2 className="w-3.5 h-3.5" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className={`max-w-2xl mx-auto text-base ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Practical machine learning models, RAG search assistants, computer vision applications, and web tools.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {filterOptions.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all ${
                activeFilter === filter.value
                  ? 'bg-sky-500 text-white shadow-md'
                  : darkMode
                  ? 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'
                  : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const hasCustomImg = projectImages[project.id];

            return (
              <div
                key={project.id}
                className={`group rounded-2xl border flex flex-col justify-between overflow-hidden transition-all hover:-translate-y-1 ${
                  darkMode
                    ? 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                    : 'bg-white border-slate-200 shadow-md hover:shadow-lg'
                }`}
              >
                <div>
                  {/* Card Image Banner */}
                  <div className="relative h-48 w-full overflow-hidden bg-slate-950 flex items-center justify-center">
                    {hasCustomImg ? (
                      <img
                        src={hasCustomImg}
                        alt={project.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className={`w-full h-full bg-slate-900 p-6 flex flex-col items-center justify-center text-center space-y-2`}>
                        <Code2 className="w-10 h-10 text-sky-400 opacity-80" />
                        <span className="font-mono text-xs font-semibold text-slate-400 uppercase tracking-wider">
                          {project.category}
                        </span>
                      </div>
                    )}

                    {/* Badge */}
                    <span className="absolute top-3 right-3 px-2.5 py-1 rounded-md text-[10px] font-mono font-medium bg-slate-900/90 text-sky-300 border border-slate-800 backdrop-blur-md">
                      {project.badge}
                    </span>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-6 space-y-3">
                    <div>
                      <span className="text-[11px] font-mono text-sky-400 block mb-1">
                        {project.category}
                      </span>
                      <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                        {project.title}
                      </h3>
                      <p className={`text-xs font-medium mt-0.5 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                        {project.subtitle}
                      </p>
                    </div>

                    <p className={`text-xs leading-relaxed line-clamp-3 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                      {project.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className={`px-2.5 py-1 rounded text-[11px] font-mono ${
                            darkMode
                              ? 'bg-slate-800 text-slate-300 border border-slate-700'
                              : 'bg-slate-100 text-slate-700 border border-slate-200'
                          }`}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-6 pt-0 border-t border-slate-800/40 mt-4 flex items-center justify-between gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 py-2 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 border transition-all ${
                      darkMode
                        ? 'bg-slate-950 border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:text-slate-900'
                    }`}
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>GitHub Code</span>
                  </a>

                  <button
                    onClick={() => onSelectProject(project)}
                    className="py-2 px-3 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-sky-400 border border-slate-700 flex items-center gap-1.5 transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Details</span>
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
