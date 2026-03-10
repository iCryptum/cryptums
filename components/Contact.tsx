
import React from 'react';

const Contact: React.FC = () => {
  const socials = [
    { name: 'Facebook', url: 'https://fb.com/cryptums', icon: 'https://i.ibb.co/rJRCX6n/fbv1.png' },
    { name: 'YouTube', url: 'https://youtube.com/Cryptum', icon: 'https://i.ibb.co/23MtSLQb/You-Tube.png' },
    { name: 'X', url: 'https://x.com/cryptums', icon: 'https://i.ibb.co/7xnwBSs6/X-logo-2023-white.png' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/cryptum', icon: 'https://i.ibb.co/v6wrNVz8/in.png' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-20">
        <div>
          <h2 className="font-impact text-5xl mb-2 gold-text uppercase">CRYPTUM</h2>
          <h3 className="text-3xl font-black mb-8">Jhohan Camilo González Castro</h3>
          
          <div className="space-y-8 mb-12">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex-shrink-0 bg-neutral-900 rounded-lg flex items-center justify-center border border-white/10">
                <svg className="w-6 h-6 gold-text" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-neutral-500 uppercase text-[10px] font-black tracking-widest mb-1">Professional Email</p>
                <a href="mailto:icryptum@gmail.com" className="text-lg font-bold hover:gold-text transition-colors">icryptum@gmail.com</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex-shrink-0 bg-neutral-900 rounded-lg flex items-center justify-center border border-white/10">
                <svg className="w-6 h-6 gold-text" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-neutral-500 uppercase text-[10px] font-black tracking-widest mb-1">WhatsApp</p>
                <a href="https://api.whatsapp.com/send?phone=573232107608" target="_blank" className="text-lg font-bold hover:gold-text transition-colors">+57 323 2107608</a>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            {socials.map((social) => (
              <a 
                key={social.name} 
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-neutral-900 flex items-center justify-center rounded-lg border border-white/5 hover:border-[#D4AF37] transition-all"
              >
                <img src={social.icon} alt={social.name} className="w-5 h-5 object-contain" />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center lg:items-end justify-center">
          {/* LinkedIn Badge Embed */}
          <div className="p-4 bg-neutral-900/50 rounded-3xl border border-white/5">
            <div className="badge-base LI-profile-badge" data-locale="es_ES" data-size="medium" data-theme="dark" data-type="VERTICAL" data-vanity="cryptum" data-version="v1">
              <a className="badge-base__link LI-simple-link" href="https://co.linkedin.com/in/cryptum?trk=profile-badge">
                Jhohan Camilo González Castro
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;