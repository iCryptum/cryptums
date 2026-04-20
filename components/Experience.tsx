
import React from 'react';
import { SOFTWARE, CM_TOOLS, PROJECTS } from '../constants';

const Experience: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-20">
        {/* Left Column: Software & Skills */}
        <div>
          <h2 className="text-3xl font-bold mb-10 uppercase tracking-widest font-impact">
            Professional <span className="gold-text">Toolkit</span>
          </h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {SOFTWARE.map((tool, idx) => (
              <div 
                key={idx} 
                className="group flex flex-col items-center justify-center p-6 bg-neutral-900/50 rounded-2xl border border-white/5 transition-all hover:bg-neutral-800 hover:-translate-y-1"
              >
                <img src={tool.icon} alt={tool.name} className="w-12 h-12 mb-4 drop-shadow-lg transition-transform group-hover:scale-110" />
                <h4 className="text-xs font-bold text-center uppercase tracking-widest mb-1">{tool.name}</h4>
                <p className="text-[10px] text-neutral-500 text-center">{tool.level}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-neutral-900/30 rounded-3xl border border-[#D4AF37]/20">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
              <span className="w-8 h-[2px] gold-bg"></span>
              Management & Community
            </h3>
            <div className="flex flex-wrap gap-4">
              {CM_TOOLS.map((tool, idx) => (
                <div key={idx} className="flex items-center gap-2 px-4 py-2 bg-neutral-800/50 rounded-full">
                  <img src={tool.icon} alt={tool.name} className="w-5 h-5 object-contain" />
                  <span className="text-xs font-semibold">{tool.name}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-neutral-400 text-sm leading-relaxed">
              Advanced experience with <strong>Meta Business Suite</strong>, <strong>TikTok Studio</strong>, YouTube, and X. 
              Beyond editing, I have strong knowledge in virtual tournament organization, 
              live event production, and performing as an <strong>Esports Shoutcaster</strong>.
            </p>
          </div>
        </div>

        {/* Right Column: Projects & Trajectory */}
        <div>
          <h2 className="text-3xl font-bold mb-10 uppercase tracking-widest font-impact">
            Trajectory <span className="gold-text">Projects</span>
          </h2>
          
          <div className="space-y-6">
            {PROJECTS.map((project, idx) => (
              <a 
                key={idx} 
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 bg-gradient-to-r from-neutral-900 to-transparent rounded-xl border-l-4 gold-border hover:from-[#D4AF37]/10 transition-all group"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-black gold-text mb-1 uppercase tracking-wider">{project.name}</h3>
                    <p className="text-neutral-400 text-sm font-medium">{project.handle}</p>
                  </div>
                  <svg className="w-6 h-6 text-neutral-700 group-hover:text-[#D4AF37] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-10 p-10 bg-gradient-to-br from-[#D4AF37] to-[#8a6e1a] rounded-3xl text-black">
            <h3 className="text-2xl font-black uppercase mb-4 tracking-tighter">Looking for real impact?</h3>
            <p className="font-bold mb-6 leading-tight opacity-90">
              My focus isn't just editing; it's creating content that captures attention in the first 3 seconds 
              using the perfect blend of dynamic editing, motion graphics, and advanced AI-generated assets to keep users engaged until the very end.
            </p>
            <a 
              href="https://api.whatsapp.com/send?phone=573232107608" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-black text-white font-black uppercase tracking-widest text-sm rounded-full transition-transform hover:scale-105"
            >
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
