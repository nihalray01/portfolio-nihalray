import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdminPanel from './components/AdminPanel';
import AdminLoginModal from './components/AdminLoginModal';
import AIChatbot from './components/AIChatbot';
import ScrollProgress from './components/ScrollProgress';
import ParticlesBackground from './components/ParticlesBackground';
import { ResumeModal, ProjectModal, CertModal } from './components/Modals';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(() => {
    return sessionStorage.getItem('nihal_admin_authed') === 'true';
  });

  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCert, setSelectedCert] = useState(null);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  const handleAdminToggle = () => {
    if (isAdminOpen) {
      setIsAdminOpen(false);
    } else {
      if (isAdminAuthenticated) {
        setIsAdminOpen(true);
      } else {
        setIsAdminModalOpen(true);
      }
    }
  };

  const handleLoginSuccess = () => {
    sessionStorage.setItem('nihal_admin_authed', 'true');
    setIsAdminAuthenticated(true);
    setIsAdminModalOpen(false);
    setIsAdminOpen(true);
  };

  const handleAdminLogout = () => {
    sessionStorage.removeItem('nihal_admin_authed');
    setIsAdminAuthenticated(false);
    setIsAdminOpen(false);
  };

  return (
    <div className={`min-h-screen relative transition-colors duration-300 ${
      darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
    }`}>
      {/* Top Scroll Indicator */}
      <ScrollProgress />

      {/* Interactive Particle Node Canvas */}
      <ParticlesBackground darkMode={darkMode} />

      {/* Sticky Header Nav */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        isAdminOpen={isAdminOpen}
        setIsAdminOpen={handleAdminToggle}
      />

      {/* Main Content vs Admin Panel View */}
      {isAdminOpen && isAdminAuthenticated ? (
        <AdminPanel
          darkMode={darkMode}
          onExitAdmin={handleAdminLogout}
        />
      ) : (
        <>
          <main className="relative z-10">
            <Hero darkMode={darkMode} onOpenResume={() => setIsResumeOpen(true)} />
            <About darkMode={darkMode} />
            <Skills darkMode={darkMode} />
            <Projects darkMode={darkMode} onSelectProject={(p) => setSelectedProject(p)} />
            <Experience darkMode={darkMode} />
            <Certifications darkMode={darkMode} onSelectCert={(c) => setSelectedCert(c)} />
            <Education darkMode={darkMode} />
            <Achievements darkMode={darkMode} />
            <Contact darkMode={darkMode} />
          </main>

          {/* Footer */}
          <Footer darkMode={darkMode} />
        </>
      )}

      {/* Floating AI Chatbot Widget */}
      <AIChatbot darkMode={darkMode} />

      {/* Admin Login Auth Modal */}
      <AdminLoginModal
        isOpen={isAdminModalOpen}
        onClose={() => setIsAdminModalOpen(false)}
        onLoginSuccess={handleLoginSuccess}
        darkMode={darkMode}
      />

      {/* Interactive Modals */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        darkMode={darkMode}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        darkMode={darkMode}
      />

      <CertModal
        cert={selectedCert}
        onClose={() => setSelectedCert(null)}
        darkMode={darkMode}
      />
    </div>
  );
}
