import React from 'react';

export default function ParticlesBackground({ darkMode = false }) {
  return (
    <div
      className={`fixed inset-0 pointer-events-none z-0 transition-opacity duration-300 ${
        darkMode ? 'bg-grid-pattern opacity-40' : 'bg-grid-pattern-light opacity-70'
      }`}
    />
  );
}
