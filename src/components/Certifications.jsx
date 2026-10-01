import React from 'react';
import { Award, ExternalLink, Calendar, CheckCircle2, ShieldCheck } from 'lucide-react';
import { certifications } from '../data/portfolioData';

export default function Certifications({ darkMode, onSelectCert }) {
  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>VERIFIED ACCOMPLISHMENTS</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Certifications & <span className="text-gradient">Credentials</span>
          </h2>
          <p className={`max-w-2xl mx-auto text-base ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Technical certifications across AI/ML, Data Science, Data Structures, and Generative AI.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between ${
                darkMode
                  ? 'bg-slate-900/60 border-slate-800 hover:border-emerald-500/40 shadow-xl'
                  : 'bg-white border-slate-200 shadow-md hover:shadow-lg'
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-tr from-emerald-500/20 to-teal-500/20 text-emerald-400 border border-emerald-500/30">
                    <Award className="w-6 h-6" />
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {cert.category}
                  </span>
                </div>

                <div>
                  <h3 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    {cert.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-1 text-xs font-semibold text-slate-400">
                    <span>{cert.issuer}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-cyan-400" />
                      {cert.date}
                    </span>
                  </div>
                </div>

                {/* Covered Skills */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {cert.skillsCovered.map((skill) => (
                    <span
                      key={skill}
                      className={`px-2.5 py-1 rounded-md text-[11px] font-mono ${
                        darkMode ? 'bg-slate-800/80 text-slate-300 border border-slate-700/60' : 'bg-slate-100 text-slate-700 border border-slate-200'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-500">ID: {cert.credentialId}</span>
                <a
                  href={cert.link || "https://www.linkedin.com/in/nihal-ray-80b270323/details/certifications/"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5 transition-all"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>View Certificate</span>
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
