import React, { useState } from 'react';
import { Code, Brain, Globe, Wrench, Sparkles } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

const categoryIcons = {
  Programming: Code,
  'AI & Machine Learning': Brain,
  'Web Development': Globe,
  'Tools & Technologies': Wrench,
};

export default function Skills({ darkMode }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredCategories =
    activeCategory === 'All'
      ? skillCategories
      : skillCategories.filter((c) => c.category === activeCategory);

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium border ${
            darkMode ? 'bg-slate-900 border-slate-800 text-sky-400' : 'bg-sky-50 border-sky-200 text-sky-700'
          }`}>
            <Code className="w-3.5 h-3.5" />
            <span>TECHNICAL SKILLS</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className={`max-w-2xl mx-auto text-base ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Core programming languages, machine learning frameworks, data science libraries, and web tools.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          <button
            onClick={() => setActiveCategory('All')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all ${
              activeCategory === 'All'
                ? 'bg-sky-500 text-white shadow-md'
                : darkMode
                ? 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'
                : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900'
            }`}
          >
            All Skills
          </button>
          {skillCategories.map((cat) => {
            const Icon = categoryIcons[cat.category] || Code;
            const isSelected = activeCategory === cat.category;
            return (
              <button
                key={cat.category}
                onClick={() => setActiveCategory(cat.category)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all ${
                  isSelected
                    ? 'bg-sky-500 text-white shadow-md'
                    : darkMode
                    ? 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'
                    : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.category}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCategories.map((catGroup) => {
            const CategoryIcon = categoryIcons[catGroup.category] || Code;
            return (
              <div
                key={catGroup.category}
                className={`p-6 sm:p-8 rounded-2xl border transition-all ${
                  darkMode
                    ? 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                    : 'bg-white border-slate-200 shadow-md'
                }`}
              >
                {/* Category Card Header */}
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-800/60">
                  <div className="p-2.5 rounded-xl bg-slate-800 text-sky-400 border border-slate-700">
                    <CategoryIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      {catGroup.category}
                    </h3>
                    <p className="text-xs text-slate-400">{catGroup.description}</p>
                  </div>
                </div>

                {/* Individual Skill Progress Items */}
                <div className="space-y-4 mt-6">
                  {catGroup.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1.5 group">
                      <div className="flex items-center justify-between text-xs font-semibold">
                        <div className="flex items-center gap-2">
                          <span className={`text-sm ${darkMode ? 'text-slate-200 group-hover:text-sky-400' : 'text-slate-800 group-hover:text-sky-600'} transition-colors`}>
                            {skill.name}
                          </span>
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800/80 text-slate-300 border border-slate-700">
                            {skill.tag}
                          </span>
                        </div>
                        <span className="font-mono text-slate-400">{skill.level}%</span>
                      </div>

                      {/* Clean Progress Bar */}
                      <div className={`h-2 rounded-full overflow-hidden ${darkMode ? 'bg-slate-800' : 'bg-slate-100'}`}>
                        <div
                          className="h-full bg-sky-500 rounded-full transition-all duration-500"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
