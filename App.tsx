
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedVideos from './components/FeaturedVideos';
import VideoCarousel from './components/VideoCarousel';
import GraphicDesignGallery from './components/GraphicDesignGallery';
import Experience from './components/Experience';
import Contact from './components/Contact';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'portfolio', 'experience', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPos >= element.offsetTop && scrollPos < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#D4AF37] selection:text-black">
      <Header activeSection={activeSection} />
      
      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="portfolio" className="py-20 bg-neutral-900/30">
          <FeaturedVideos />
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-center mb-10 uppercase tracking-widest font-impact">
              Project <span className="gold-text">Gallery</span>
            </h2>
            <VideoCarousel />
          </div>
          <GraphicDesignGallery />
        </section>

        <section id="experience" className="py-20">
          <Experience />
        </section>

        <section id="contact" className="py-20 bg-neutral-900/30">
          <Contact />
        </section>
      </main>

      <footer className="py-10 border-t border-neutral-800 text-center text-neutral-500 text-sm">
        <p>© {new Date().getFullYear()} Cryptum - Jhohan Camilo González Castro. All rights reserved.</p>
        <p className="mt-2 uppercase tracking-widest text-[10px]">Video Editor | Motion Graphics | Graphic Designer | AI Specialist</p>
      </footer>

      <WhatsAppButton />
    </div>
  );
};

export default App;
