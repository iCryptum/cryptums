
import React from 'react';

const VideoCarousel: React.FC = () => {
  const otherVideos = [
    {
      title: "Valorant Radiant Series",
      url: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwatch%2F%3Fv%3D316752599403749&show_text=false&width=267&t=0",
      platform: "Facebook"
    },
    {
      title: "SWAT Latam - 3D Animation UE5",
      url: "https://x.com/SWAT_Latam/status/1780450411272372428",
      platform: "X / Twitter",
      isEmbedBlocked: true // Twitter usually needs its own script, we'll use a card
    },
    {
      title: "SWAT Roster Montage",
      url: "https://x.com/SWAT_Latam/status/1709741274176106905",
      platform: "X / Twitter",
      isEmbedBlocked: true
    },
    {
      title: "LoL LCV Structure",
      url: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwatch%2F%3Fv%3D340769100070532&show_text=false&width=267&t=0",
      platform: "Facebook"
    }
  ];

  return (
    <div className="relative overflow-hidden w-full px-4">
      <div className="flex gap-6 overflow-x-auto pb-10 snap-x scrollbar-hide">
        {otherVideos.map((video, idx) => (
          <div 
            key={idx} 
            className="flex-shrink-0 w-[300px] md:w-[400px] snap-center bg-neutral-900 rounded-xl overflow-hidden border border-white/5 transition-transform hover:scale-[1.02]"
          >
            <div className="aspect-video bg-black relative">
              {!video.isEmbedBlocked ? (
                <iframe 
                  src={video.url}
                  className="w-full h-full"
                  scrolling="no" 
                  frameBorder="0" 
                  allow="autoplay; encrypted-media"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-neutral-800 to-neutral-950">
                  <svg className="w-12 h-12 mb-4 text-[#D4AF37]" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                  <p className="text-sm font-bold gold-text uppercase mb-2">Ver en {video.platform}</p>
                  <p className="text-xs text-neutral-400 mb-4">{video.title}</p>
                  <a 
                    href={video.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-white/10 hover:bg-[#D4AF37] hover:text-black transition-colors rounded-full text-[10px] font-black uppercase tracking-widest"
                  >
                    Abrir Enlace
                  </a>
                </div>
              )}
            </div>
            <div className="p-4 bg-neutral-900 border-t border-white/5">
              <h5 className="font-bold text-sm truncate">{video.title}</h5>
              <span className="text-[10px] uppercase text-neutral-500 tracking-wider">{video.platform}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoCarousel;
