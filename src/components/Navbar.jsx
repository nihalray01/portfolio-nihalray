import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Terminal, Sparkles, ShieldCheck } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';
import { getMessages } from '../utils/messageStore';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ darkMode, setDarkMode, isAdminOpen, setIsAdminOpen }) {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    const updateUnread = () => {
      const msgs = getMessages();
      setUnreadCount(msgs.filter(m => !m.read).length);
    };

    updateUnread();
    window.addEventListener('portfolio_messages_updated', updateUnread);
    window.addEventListener('storage', updateUnread);

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl && sectionEl.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('portfolio_messages_updated', updateUnread);
      window.removeEventListener('storage', updateUnread);
    };
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    if (isAdminOpen) {
      setIsAdminOpen(false);
    }
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };


  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? darkMode
            ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800/60 shadow-lg shadow-black/20 py-3'
            : 'bg-white/80 backdrop-blur-md border-b border-slate-200/80 shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => scrollToSection(e, '#home')}
          className="flex items-center gap-2.5 group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-purple-600 p-[2px] shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform duration-300">
            <div className={`w-full h-full rounded-[10px] flex items-center justify-center font-mono font-bold text-lg ${darkMode ? 'bg-slate-950 text-cyan-400' : 'bg-white text-blue-600'}`}>
              NR
            </div>
          </div>
          <div className="flex flex-col">
            <span className={`font-bold text-lg leading-tight tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              Nihal Ray
            </span>
            <span className="text-xs text-cyan-500 font-mono flex items-center gap-1">
              <Terminal className="w-3 h-3" /> AI/ML Eng.
            </span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? darkMode
                      ? 'text-cyan-400 bg-cyan-950/40 border border-cyan-500/30 shadow-sm shadow-cyan-500/10'
                      : 'text-blue-600 bg-blue-50 border border-blue-200'
                    : darkMode
                    ? 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Social Icons */}
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className={`p-2 rounded-lg transition-colors ${
              darkMode ? 'text-slate-400 hover:text-white hover:bg-slate-800' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <GithubIcon className="w-5 h-5" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className={`p-2 rounded-lg transition-colors ${
              darkMode ? 'text-slate-400 hover:text-blue-400 hover:bg-slate-800' : 'text-slate-600 hover:text-blue-600 hover:bg-slate-100'
            }`}
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>

          {/* Admin Panel Toggle Button */}
          <button
            onClick={() => setIsAdminOpen(!isAdminOpen)}
            aria-label="Toggle Admin Panel"
            title="Admin Inbox & Dashboard"
            className={`relative p-2 rounded-xl border font-mono text-xs font-semibold flex items-center gap-1.5 transition-all duration-300 ${
              isAdminOpen
                ? 'bg-cyan-500 text-white border-cyan-400 shadow-md shadow-cyan-500/30'
                : darkMode
                ? 'bg-slate-900 border-slate-700/60 text-cyan-400 hover:bg-slate-800 hover:border-cyan-400/40'
                : 'bg-slate-100 border-slate-300 text-blue-600 hover:bg-slate-200'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span className="hidden sm:inline">{isAdminOpen ? 'Portfolio' : 'Admin Inbox'}</span>
            {unreadCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-rose-500 text-white text-[10px] font-bold flex items-center justify-center animate-pulse shadow-md">
                {unreadCount}
              </span>
            )}
          </button>

          {/* Dark / Light Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle Theme"
            className={`p-2 rounded-xl border transition-all duration-300 ${
              darkMode
                ? 'bg-slate-900 border-slate-700/60 text-amber-400 hover:bg-slate-800 hover:border-amber-400/40 shadow-sm shadow-amber-400/10'
                : 'bg-slate-100 border-slate-300 text-slate-700 hover:bg-slate-200 hover:border-slate-400'
            }`}
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>


          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className={`lg:hidden p-2 rounded-xl border ${
              darkMode ? 'bg-slate-900 border-slate-800 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-700'
            }`}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className={`lg:hidden border-b ${darkMode ? 'bg-slate-950/95 border-slate-800 text-white' : 'bg-white/95 border-slate-200 text-slate-900'} backdrop-blur-xl px-4 pt-3 pb-6 space-y-2 mt-2 shadow-2xl animate-fadeIn`}>
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={`block px-4 py-2.5 rounded-xl text-base font-medium transition-all ${
                  isActive
                    ? darkMode
                      ? 'bg-cyan-950/60 text-cyan-400 font-semibold border border-cyan-800/40'
                      : 'bg-blue-50 text-blue-600 font-semibold border border-blue-200'
                    : darkMode
                    ? 'text-slate-300 hover:bg-slate-900'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
}
