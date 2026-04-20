
import React from 'react';
import { HERO_BG } from '../constants';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with low opacity */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${HERO_BG})`,
          opacity: 0.15
        }}
      />
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0a0a0a]/50 via-transparent to-[#0a0a0a]" />

      <div className="relative z-10 text-center px-4 max-w-5xl animate-fade-in">
        <h2 className="font-impact text-7xl md:text-9xl mb-2 gold-text drop-shadow-2xl leading-none">
          CRYPTUM
        </h2>
        <h1 className="text-xl md:text-3xl font-light text-neutral-300 mb-8 tracking-[0.3em] uppercase">
          Video Editor, Motion Designer & AI Specialist
        </h1>
        <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          Leader in <span className="text-white font-semibold">creation, design, and multimedia content marketing</span>. 
          +5 years transforming ideas into visual impact for Esports and digital platforms, 
          leveraging <span className="gold-text">Adobe Suite and advanced AI tools</span>.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="#portfolio" 
            className="px-12 py-5 gold-bg text-black font-black uppercase tracking-widest transition-all hover:scale-105 gold-glow rounded-sm"
          >
            Check My Work
          </a>
          <a 
            href="https://api.whatsapp.com/send?phone=573232107608" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-12 py-5 border gold-border gold-text font-black uppercase tracking-widest transition-all hover:bg-[#D4AF37]/10 rounded-sm"
          >
            Get In Touch
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <svg className="w-6 h-6 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
