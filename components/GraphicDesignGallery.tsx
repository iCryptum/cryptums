import React, { useState } from 'react';

const GraphicDesignGallery: React.FC = () => {
  const images = [
    "https://i.ibb.co/dwNrGg6R/GPCj334-Xk-AAOE5-A.jpg",
    "https://i.ibb.co/Wp4DNMGL/CV-Template-01.jpg",
    "https://i.ibb.co/Zpz6WpkV/118890054-2886571974904861-1841816776901266108-n.jpg",
    "https://i.ibb.co/HfyrJZ0d/476670834-122212480442217325-7776423378451460475-n.jpg",
    "https://i.ibb.co/9m7Vtr5N/125139400-2951597915068933-2989579380786463669-n.jpg",
    "https://i.ibb.co/RTp5zZ8t/G2du-Rvx-WUAAqjm0.jpg",
    "https://i.ibb.co/zH2WLLGf/Gov-Mof7-WMAEzt-Dw.jpg",
    "https://i.ibb.co/5xS8ntDb/GPCj334-Xk-AAOE5-A.jpg"
  ];

  // Remove duplicate URLs if any (though the IDs are different, the filenames are the same for the first and last, but we'll keep them as provided)
  const uniqueImages = Array.from(new Set(images));

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-4 mt-32">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4 uppercase tracking-widest font-impact">
          Graphic <span className="gold-text">Design</span>
        </h2>
        <div className="w-20 h-1 gold-bg mx-auto"></div>
        <p className="text-neutral-400 mt-6 max-w-2xl mx-auto">
          A collection of my graphic design work, including social media posts, branding, and promotional materials.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {uniqueImages.map((src, index) => (
          <div 
            key={index} 
            className="group relative aspect-square bg-neutral-900 rounded-xl overflow-hidden cursor-pointer border border-white/5 hover:border-[#D4AF37]/50 transition-colors"
            onClick={() => setSelectedImage(src)}
          >
            <img 
              src={src} 
              alt={`Graphic Design Work ${index + 1}`} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="gold-text font-bold tracking-widest uppercase text-sm border border-[#D4AF37] px-4 py-2 rounded-full">
                View Full
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 sm:p-8"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-[#D4AF37] transition-colors z-50"
            onClick={() => setSelectedImage(null)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img 
            src={selectedImage} 
            alt="Expanded Graphic Design Work" 
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            referrerPolicy="no-referrer"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
          />
        </div>
      )}
    </div>
  );
};

export default GraphicDesignGallery;
