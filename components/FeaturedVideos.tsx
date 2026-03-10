
import React from 'react';

const FeaturedVideos: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4 uppercase tracking-widest font-impact">
          Featured <span className="gold-text">Work</span>
        </h2>
        <div className="w-20 h-1 gold-bg mx-auto"></div>
      </div>

      {/* Main Horizontal Video (After Effects) */}
      <div className="mb-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <span className="gold-text text-xs font-bold tracking-[0.3em] uppercase block mb-2">After Effects | Motion Graphics</span>
            <h3 className="text-3xl font-bold mb-4">Fortnite Tournament @eslagaming</h3>
            <p className="text-neutral-400 mb-6 leading-relaxed">
              Official announcement designed for massive impact. Utilized advanced motion graphics, 
              shape animations, and dynamic transitions created from scratch in After Effects. 
              This project was part of my role as lead creator and director at ESLA.
            </p>
            <div className="flex gap-4">
               <span className="px-3 py-1 bg-neutral-800 text-xs rounded-full">After Effects</span>
               <span className="px-3 py-1 bg-neutral-800 text-xs rounded-full">Esports</span>
               <span className="px-3 py-1 bg-neutral-800 text-xs rounded-full">Branding</span>
            </div>
          </div>
          <div className="order-1 md:order-2 aspect-video bg-black rounded-xl overflow-hidden shadow-2xl gold-border border-2">
            <iframe 
              src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwatch%2F%3Fv%3D2829307103983313&show_text=false&width=560&t=0" 
              className="w-full h-full"
              style={{ border: 'none', overflow: 'hidden' }} 
              scrolling="no" 
              title="Fortnite Tournament ESLA"
              allowFullScreen={true} 
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            />
          </div>
        </div>
      </div>

      {/* Vertical Reels (CapCut Specialists) */}
      <div className="grid md:grid-cols-2 gap-10">
        
        {/* VIDEO 1: FutbolTaconesCOL - Optimized YouTube Embed */}
        <div className="bg-neutral-900 p-6 rounded-2xl flex flex-col items-center">
          <div className="w-full max-w-[340px] aspect-[9/16] bg-black rounded-xl overflow-hidden mb-6 shadow-lg mx-auto relative group">
            <iframe 
              className="w-full h-full"
              src="https://www.youtube-nocookie.com/embed/Sd196AV83hY?rel=0&modestbranding=1&playsinline=1&controls=1" 
              title="FutbolTaconesCOL Short" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
          <div className="text-center">
            <h4 className="text-xl font-bold mb-2 gold-text">FutbolTaconesCOL</h4>
            <p className="text-neutral-500 text-sm">Hooks, transitions, VFX and SFX using CapCut. Lead CM for the project.</p>
          </div>
        </div>

        {/* VIDEO 2: YouTube Embed */}
        <div className="bg-neutral-900 p-6 rounded-2xl flex flex-col items-center">
          <div className="w-full max-w-[340px] aspect-[9/16] bg-black rounded-xl overflow-hidden mb-6 shadow-lg mx-auto relative group">
            <iframe 
              className="w-full h-full"
              src="https://www.youtube-nocookie.com/embed/hQ3GYHj_Pmw?rel=0&modestbranding=1&playsinline=1&controls=1" 
              title="YouTube Short" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
          <div className="text-center">
            <h4 className="text-xl font-bold mb-2 gold-text">Short Form Content</h4>
            <p className="text-neutral-500 text-sm">Dynamic editing, pacing, and engaging visuals optimized for social media.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedVideos;
