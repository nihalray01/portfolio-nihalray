import React, { useState } from 'react';
import { Mail, Send, MapPin, CheckCircle2, Copy, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';
import { saveNewMessage } from '../utils/messageStore';

export default function Contact({ darkMode }) {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Save to local message store
    saveNewMessage(formData);
    
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 5000);
  };


  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            <Mail className="w-3.5 h-3.5" />
            <span>LET'S CONNECT</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className={`max-w-2xl mx-auto text-base ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Whether you have an internship opportunity, project inquiry, or technical question, feel free to drop a message!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className={`p-6 sm:p-8 rounded-2xl border ${
              darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-md'
            } space-y-6`}>
              
              <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Contact Information
              </h3>

              {/* Email Card */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-1 flex-1">
                  <span className="text-xs font-mono text-slate-400 block font-medium">Direct Email</span>
                  <div className="flex items-center justify-between gap-2">
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className={`text-sm sm:text-base font-semibold ${darkMode ? 'text-slate-200 hover:text-sky-400' : 'text-slate-800 hover:text-sky-600'} transition-colors font-mono`}
                    >
                      {personalInfo.email}
                    </a>
                    <button
                      onClick={handleCopyEmail}
                      title="Copy Email"
                      className="p-1.5 rounded-lg text-slate-400 hover:text-sky-400 hover:bg-slate-800 transition-colors"
                    >
                      {copiedEmail ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                  {copiedEmail && <span className="text-[10px] font-mono text-emerald-400 block">Copied to clipboard!</span>}
                </div>
              </div>

              {/* Phone Number Card */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div className="space-y-1 flex-1">
                  <span className="text-xs font-mono text-slate-400 block font-medium">Phone Number</span>
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className={`text-sm sm:text-base font-semibold ${darkMode ? 'text-slate-200 hover:text-emerald-400' : 'text-slate-800 hover:text-emerald-600'} transition-colors font-mono block`}
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              {/* Location Card */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-mono text-slate-400 block font-medium">Location</span>
                  <p className={`text-sm sm:text-base font-semibold ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                    {personalInfo.location}
                  </p>
                </div>
              </div>

              {/* Social & Live Web App Channels */}
              <div className="pt-4 border-t border-slate-800/60 space-y-3">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block font-semibold">
                  Online Profiles & Live App
                </span>
                
                <div className="flex flex-col gap-2.5">
                  <a
                    href={personalInfo.liveProject}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-between p-3 rounded-xl border transition-all ${
                      darkMode ? 'bg-purple-950/40 border-purple-800/60 text-purple-300 hover:text-white' : 'bg-purple-50 border-purple-200 text-purple-700'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Sparkles className="w-5 h-5 text-purple-400" />
                      <span className="text-xs font-mono font-semibold">Live Web App: splen-ai.vercel.app</span>
                    </div>
                    <span className="text-xs font-mono text-purple-400 font-bold">Open ↗</span>
                  </a>

                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-between p-3 rounded-xl border transition-all ${
                      darkMode ? 'bg-slate-950/60 border-slate-800 text-slate-300 hover:text-white hover:border-slate-700' : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <GithubIcon className="w-5 h-5 text-sky-400" />
                      <span className="text-xs font-mono font-semibold">github.com/nihalray01</span>
                    </div>
                    <span className="text-xs text-slate-500">Visit ↗</span>
                  </a>

                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-between p-3 rounded-xl border transition-all ${
                      darkMode ? 'bg-slate-950/60 border-slate-800 text-slate-300 hover:text-white hover:border-slate-700' : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <LinkedinIcon className="w-5 h-5 text-blue-400" />
                      <span className="text-xs font-mono font-semibold">linkedin.com/in/nihalray-80b270323</span>
                    </div>
                    <span className="text-xs text-slate-500">Visit ↗</span>
                  </a>
                </div>

              </div>


            </div>

          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className={`p-6 sm:p-8 rounded-2xl border ${
              darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-md'
            }`}>
              <h3 className={`text-xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Send a Message
              </h3>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-center space-y-3 animate-fadeIn">
                  <CheckCircle2 className="w-12 h-12 text-cyan-400 mx-auto animate-bounce" />
                  <h4 className="text-lg font-bold text-white">Message Sent Successfully!</h4>
                  <p className="text-sm text-slate-300">
                    Thank you for reaching out, Nihal Ray will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className={`text-xs font-mono font-semibold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-colors ${
                          darkMode ? 'bg-slate-950 border-slate-800 text-white placeholder-slate-500' : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
                        }`}
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className={`text-xs font-mono font-semibold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-colors ${
                          darkMode ? 'bg-slate-950 border-slate-800 text-white placeholder-slate-500' : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
                        }`}
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className={`text-xs font-mono font-semibold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="Internship / AI Collaboration"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-colors ${
                        darkMode ? 'bg-slate-950 border-slate-800 text-white placeholder-slate-500' : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
                      }`}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className={`text-xs font-mono font-semibold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Write your message here..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-colors ${
                        darkMode ? 'bg-slate-950 border-slate-800 text-white placeholder-slate-500' : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
                      }`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 flex items-center justify-center gap-2 transition-all duration-300"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
