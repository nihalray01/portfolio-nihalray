import React from 'react';
import { X, Download, ExternalLink, CheckCircle2, FileText, Award, Phone, Mail, MapPin, Globe } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';
import resumePdf from '../assets/NIHAL_RAY_RESUME.pdf';

export function ResumeModal({ isOpen, onClose, darkMode }) {
  if (!isOpen) return null;

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumePdf;
    link.download = 'NIHAL_RAY_RESUME.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className={`relative w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-3xl border p-6 sm:p-8 space-y-6 ${
        darkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900 shadow-2xl'
      }`}>
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold">NIHAL RAY — Official Resume</h3>
              <span className="text-xs font-mono text-sky-400">B.Tech CSE (AI & ML) • CGPA 7.84/10 • 100+ LeetCode</span>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close Modal"
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Resume Preview Box */}
        <div className="space-y-6 text-xs sm:text-sm font-sans leading-relaxed">
          
          {/* Header Card */}
          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
              <div>
                <h2 className="text-2xl font-extrabold text-white">{personalInfo.name}</h2>
                <p className="text-xs font-mono text-sky-400 font-semibold mt-0.5">{personalInfo.title}</p>
              </div>
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 w-fit">
                Seeking AI/ML & Dev Roles
              </span>
            </div>

            <div className="flex flex-wrap gap-4 text-xs font-mono text-slate-300 pt-1">
              <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-sky-400" /> {personalInfo.email}</span>
              <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5 text-emerald-400" /> {personalInfo.phone}</span>
              <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-rose-400" /> {personalInfo.location}</span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h4 className="font-mono text-xs uppercase tracking-wider font-semibold text-slate-400 border-b border-slate-800 pb-1">
              Professional Summary
            </h4>
            <p className={darkMode ? 'text-slate-300' : 'text-slate-700'}>
              {personalInfo.summary}
            </p>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h4 className="font-mono text-xs uppercase tracking-wider font-semibold text-slate-400 border-b border-slate-800 pb-1">
              Education
            </h4>
            <div className="space-y-2">
              <div className="flex justify-between items-start">
                <div>
                  <strong className="text-white text-sm block">Uttaranchal University, Dehradun</strong>
                  <span className="text-sky-400 text-xs font-mono">B.Tech in Computer Science & Engineering (AI & ML) — <span className="text-amber-400 font-bold">CGPA: 7.84 / 10</span></span>
                </div>
                <span className="text-xs font-mono text-slate-400">2024 – 2028</span>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <strong className="text-slate-200">Bihar School Examination Board (BSEB)</strong>
                  <span className="text-slate-400 text-xs block font-mono">Senior Secondary (Class XII) – Science — <span className="text-amber-400 font-bold">60%</span></span>
                </div>
                <span className="text-xs font-mono text-slate-400">2024</span>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <strong className="text-slate-200">R.L.S Public School (CBSE)</strong>
                  <span className="text-slate-400 text-xs block font-mono">Secondary (Class X) — <span className="text-amber-400 font-bold">75.4%</span></span>
                </div>
                <span className="text-xs font-mono text-slate-400">2022</span>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-2">
            <h4 className="font-mono text-xs uppercase tracking-wider font-semibold text-slate-400 border-b border-slate-800 pb-1">
              Technical Skills
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <strong className="text-sky-400 block mb-1">DSA & Problem Solving:</strong>
                100+ LeetCode problems solved in Python (Arrays, Strings, Hashing, Recursion, Sorting, Graphs)
              </div>
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <strong className="text-sky-400 block mb-1">Generative AI & LLMs:</strong>
                Groq LLM API (gpt-oss-120b), RAG, Vector Search, Oracle AI Agent Studio, Prompt Engineering
              </div>
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <strong className="text-purple-400 block mb-1">AI / ML & Computer Vision:</strong>
                Supervised Learning, NLP, OpenCV, MediaPipe, Scikit-learn, Pandas, NumPy, TensorFlow
              </div>
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <strong className="text-purple-400 block mb-1">Web & Cloud Tools:</strong>
                MERN Stack (MongoDB, Express, React, Node.js), REST APIs, Git, GitHub, Vercel
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-2">
            <h4 className="font-mono text-xs uppercase tracking-wider font-semibold text-slate-400 border-b border-slate-800 pb-1">
              Experience
            </h4>
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
              <div className="flex justify-between items-center">
                <strong className="text-white text-sm">Artificial Intelligence Intern</strong>
                <span className="text-xs font-mono text-sky-400">Jul 2026</span>
              </div>
              <span className="text-xs font-mono text-slate-400 block">Codec Technologies India</span>
              <p className="text-xs text-slate-300 pt-1">
                Completed an AI internship with hands-on exposure to applied AI/ML workflows and project tasks (credential issued by Codec Technologies India).
              </p>
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-2">
            <h4 className="font-mono text-xs uppercase tracking-wider font-semibold text-slate-400 border-b border-slate-800 pb-1">
              Featured Projects
            </h4>
            <div className="space-y-2 text-xs">
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                <div className="flex justify-between items-center">
                  <strong className="text-sky-300">DocuMind AI – RAG-Based Document Q&A Assistant</strong>
                  <span className="text-xs font-mono text-sky-400">Groq LLM API</span>
                </div>
                <p className="text-slate-300">RAG PDF Q&A app with configurable text chunking, similarity indexing, and Groq LLM (gpt-oss-120b) grounded citations.</p>
              </div>

              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                <div className="flex justify-between items-center">
                  <strong className="text-sky-300">Splen OS – AI-Powered Web Application</strong>
                  <a href="https://splen-ai.vercel.app" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:underline font-mono">Live Demo ↗</a>
                </div>
                <p className="text-slate-300">Full-stack MERN web app with Generative AI features built during AI Fusion 2026 workshop. Deployed live on Vercel.</p>
              </div>

              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                <strong className="text-sky-300">Air Writing Recognition Using Webcam</strong>
                <p className="text-slate-300">Real-time touchless system tracking hand landmarks via webcam (OpenCV & MediaPipe) and recognizing air-drawn digits with ML models.</p>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Actions */}
        <div className="mt-8 pt-4 border-t border-slate-800 flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-400 hover:text-white transition-colors"
          >
            Close Preview
          </button>
          <button
            onClick={handleDownload}
            className="px-5 py-2.5 rounded-xl font-semibold text-xs bg-sky-500 hover:bg-sky-400 text-white shadow-md flex items-center gap-2 transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>Download Official Resume</span>
          </button>
        </div>

      </div>
    </div>
  );
}

export function ProjectModal({ project, onClose, darkMode }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div className={`relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border p-6 sm:p-8 ${
        darkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900 shadow-2xl'
      }`}>
        
        <div className="flex items-start justify-between pb-4 border-b border-slate-800 mb-6">
          <div>
            <span className="text-xs font-mono font-semibold text-sky-400 uppercase tracking-wider">
              {project.category}
            </span>
            <h3 className="text-2xl font-bold mt-0.5">{project.title}</h3>
            <p className="text-xs text-slate-400 font-mono mt-1">{project.subtitle}</p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close Modal"
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-6 text-sm">
          <p className="leading-relaxed text-slate-300">
            {project.description}
          </p>

          <div className="space-y-2">
            <h4 className="font-mono text-xs uppercase text-slate-400 font-semibold">Key Highlights:</h4>
            <div className="space-y-2">
              {project.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2 text-xs sm:text-sm">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span className="text-slate-300">{h}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="font-mono text-xs uppercase text-slate-400 font-semibold">Technologies Used:</h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-800 text-sky-300 border border-slate-700">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-slate-800 flex items-center justify-end gap-3">
          {project.demo && project.demo !== '#' && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-purple-600 hover:bg-purple-500 text-white flex items-center gap-2"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Application</span>
            </a>
          )}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-white flex items-center gap-2 border border-slate-700"
          >
            <GithubIcon className="w-4 h-4" />
            <span>View Source Code</span>
          </a>
        </div>

      </div>
    </div>
  );
}

export function CertModal({ cert, onClose, darkMode }) {
  if (!cert) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div className={`relative w-full max-w-lg rounded-2xl border p-6 sm:p-8 ${
        darkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900 shadow-2xl'
      }`}>
        
        <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold">Certificate Verification</h3>
              <span className="text-xs font-mono text-emerald-400">Official Credential</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4 py-2">
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-center space-y-2">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              VERIFIED CERTIFICATE
            </span>
            <h4 className="text-lg font-bold text-white">{cert.title}</h4>
            <p className="text-xs font-semibold text-slate-400">Issued by {cert.issuer} ({cert.date})</p>
            <p className="text-[11px] font-mono text-sky-400">Credential ID: {cert.credentialId}</p>
          </div>

          <div className="space-y-2">
            <h5 className="text-xs font-mono uppercase text-slate-400 font-semibold">Competencies Verified:</h5>
            <div className="flex flex-wrap gap-1.5">
              {cert.skillsCovered.map((s) => (
                <span key={s} className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-800 text-slate-300">
                  ✓ {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-emerald-500 text-white hover:bg-emerald-600"
          >
            Close Credential
          </button>
        </div>

      </div>
    </div>
  );
}
