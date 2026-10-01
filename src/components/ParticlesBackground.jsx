import React from 'react';

export default function ParticlesBackground({ darkMode = true }) {
  return (
    <div
      className={`fixed inset-0 pointer-events-none z-0 opacity-40 transition-opacity duration-300 ${
        darkMode ? 'bg-grid-pattern' : 'opacity-10'
      }`}
    />
  );
}
