import React, { useState, useEffect } from 'react';
import { Play, ExternalLink, Loader2 } from 'lucide-react';

const videosData = [
  {
    id: "DaVVvorJY8K",
    title: "Respiratory Care & Asthma Guidance",
    description: "Specialist insights on managing respiratory conditions, asthma triggers, and correct inhaler techniques.",
    category: "Pulmonology"
  },
  {
    id: "DZSMQuAJV0Q",
    title: "Maternity & Newborn Health Tips",
    description: "Essential care practices for pregnant mothers and post-natal guides from our obstetrics department.",
    category: "Gynecology"
  },
  {
    id: "DXi0HlsiYHa",
    title: "Digestive Wellness & Gut Health",
    description: "Practical dietary guidelines, prevention tips for acidity, and healthy lifestyle habits for daily digestion.",
    category: "Gastroenterology"
  },
  {
    id: "DVAau5OEnTO",
    title: "Stroke Recovery & Physiotherapy",
    description: "Step-by-step rehabilitation guides and standard mobility exercises for physical therapy support.",
    category: "PMR (Rehab)"
  },
  {
    id: "DVC9EuwEsp0",
    title: "Understanding Diabetic Care",
    description: "Comprehensive care guides for insulin management, dietary restrictions, and maintaining blood sugar limits.",
    category: "General Medicine"
  },
  {
    id: "DYoQrlUJzik",
    title: "Ear, Nose & Throat (ENT) Hygiene",
    description: "Expert guidelines on throat infection preventions and safe hygiene protocols for daily care.",
    category: "ENT"
  },
  {
    id: "DYqqHc8PI3u",
    title: "Orthopedic Care & Joint Health",
    description: "Standard practices for bone density support, fracture care guides, and joint alignment maintenance.",
    category: "Orthopedics"
  }
];

export default function VideosPage() {
  const [loadedMap, setLoadedMap] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleIframeLoad = (id) => {
    setLoadedMap(prev => ({
      ...prev,
      [id]: true
    }));
  };

  return (
    <div className="w-full bg-[#F5F7F8]">
      
      {/* Hero Header Banner */}
      <section className="relative w-full bg-gradient-to-br from-[#224356] to-[#16303F] text-white py-16 md:py-24 text-center overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#418C7D]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#418C7D]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="w-12 h-[2.5px] bg-[#418C7D] mx-auto mb-4 rounded-full" />
          <p className="text-xs sm:text-sm font-semibold text-[#418C7D] uppercase tracking-widest mb-3">
            Clinical Insights
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-white font-normal tracking-wide leading-tight mb-6">
            Awareness Videos
          </h1>
          <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-sans">
            Stay informed with vital healthcare guidance, diagnostic reviews, and lifestyle tips from the senior consultants at Mahally Hospital.
          </p>
        </div>
      </section>

      {/* Main Grid View Section (Exactly 3 columns per row on desktop) */}
      <section className="w-full py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {videosData.map((video) => (
              <div 
                key={video.id}
                className="bg-white rounded-3xl overflow-hidden border border-border-color/60 shadow-[0_4px_25px_rgba(0,0,0,0.01)] hover:shadow-[0_12px_35px_rgba(34,67,86,0.06)] hover:border-[#418C7D]/20 transition-all duration-300 flex flex-col justify-between text-left group"
              >
                
                {/* Embed container frame with custom loader */}
                <div className="relative w-full bg-[#16303F] overflow-hidden" style={{ height: '480px' }}>
                  {!loadedMap[video.id] && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white/50 bg-[#16303F] z-10">
                      <Loader2 size={36} className="animate-spin text-[#418C7D] mb-3" />
                      <span className="text-xs font-semibold uppercase tracking-wider">Loading video...</span>
                    </div>
                  )}
                  <iframe 
                    src={`https://www.instagram.com/p/${video.id}/embed/`}
                    width="100%" 
                    height="100%" 
                    frameBorder="0"
                    scrolling="no" 
                    allowTransparency="true"
                    allow="encrypted-media"
                    title={`Instagram Reel ${video.id}`}
                    onLoad={() => handleIframeLoad(video.id)}
                    className="w-full h-full relative z-0"
                  />
                </div>

                {/* Watch on Instagram direct action bottom bar */}
                <div className="p-4 border-t border-secondary-bg">
                  <a 
                    href={`https://www.instagram.com/p/${video.id}/`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#F5F7F8] hover:bg-accent hover:text-white text-[#224356] font-bold text-xs tracking-wider uppercase rounded-xl py-3 px-4 w-full transition-all duration-300 border border-border-color/60 hover:border-accent"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                    </svg>
                    <span>Watch on Instagram</span>
                    <ExternalLink size={12} className="opacity-60" />
                  </a>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
