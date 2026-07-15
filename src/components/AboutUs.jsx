import React from 'react';
import { Stethoscope, Activity, Heart, BadgeCheck, ArrowUpRight } from 'lucide-react';

const statsData = [
  {
    id: 1,
    value: "14+",
    label: "Medical Specialties",
    icon: Stethoscope,
    description: "Comprehensive multi-specialty care departments"
  },
  {
    id: 2,
    value: "24/7",
    label: "Emergency Care",
    icon: Activity,
    description: "Round-the-clock trauma & critical care support"
  },
  {
    id: 3,
    value: "50K+",
    label: "Happy Recoveries",
    icon: Heart,
    description: "Trusted medical healing within our community"
  },
  {
    id: 4,
    value: "15+",
    label: "Senior Consultants",
    icon: BadgeCheck,
    description: "Highly qualified doctors and medical surgeons"
  }
];

export default function AboutUs({ setCurrentPage }) {
  return (
    <section id="about" className="w-full bg-gradient-to-br from-accent-light/50 via-white to-accent-light/20 py-16 md:py-24 border-b border-border-color overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Two-Column Responsive Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Hospital Narrative & Clinical Philosophy */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            <div className="w-12 h-[2.5px] bg-accent mb-4 rounded-full" />
            <p className="text-xs sm:text-sm font-semibold text-accent uppercase tracking-wider mb-2">
              About Mahally Hospital
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-primary font-normal tracking-wide mb-6 leading-tight">
              Care with Compassion,<br />Driven by Excellence
            </h2>
            
            <p className="text-muted-text text-sm sm:text-base leading-relaxed mb-4">
              Mahally Hospital is a premier multi-specialty healthcare facility dedicated to delivering 
              world-class diagnostics, clinical treatments, and preventive therapies to the community 
              of Karinkallathani. We believe in providing patient-centric medical care that balances 
              advanced technology with deep empathy.
            </p>
            
            <p className="text-muted-text text-sm leading-relaxed mb-6">
              Equipped with modern laboratories, state-of-the-art surgical suites, and round-the-clock 
              emergency support services, we guarantee immediate care when it matters most.
            </p>

            {/* Active 'Know More' button */}
            <div className="mb-8">
              <button 
                className="group inline-flex items-center gap-3.5 border border-primary/20 hover:border-accent text-primary hover:text-accent font-semibold text-xs tracking-wider uppercase rounded-full pl-5 pr-2 py-2 bg-transparent transition-all duration-300 cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  if (setCurrentPage) {
                    setCurrentPage('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
              >
                <span>Know More</span>
                <span className="w-8 h-8 rounded-full bg-accent-light text-accent group-hover:bg-accent group-hover:text-white flex items-center justify-center transition-all duration-300">
                  <ArrowUpRight size={16} />
                </span>
              </button>
            </div>

            {/* Premium 2x2 Grid of Hospital Statistics */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 mt-2">
              {statsData.map((stat) => (
                <div 
                  key={stat.id}
                  className="bg-white border border-border-color/60 rounded-2xl p-4 flex gap-3.5 items-start shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-[0_8px_30px_rgba(65,140,125,0.06)] hover:border-accent/20 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent-light/40 flex items-center justify-center text-accent flex-shrink-0 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                    {React.createElement(stat.icon, { size: 20, className: "stroke-[1.8]" })}
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-primary leading-tight mb-0.5">
                      {stat.value}
                    </h4>
                    <p className="text-xs sm:text-sm font-semibold text-primary/80 mb-0.5">
                      {stat.label}
                    </p>
                    <p className="text-[10px] text-muted-text leading-snug">
                      {stat.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Beautifully Framed Hospital Photo */}
          <div className="lg:col-span-5 flex flex-col items-center relative">
            
            {/* Soft background offset frame */}
            <div className="absolute -bottom-4 -left-4 w-full max-w-[420px] aspect-square border-2 border-accent/20 rounded-3xl -z-10 pointer-events-none hidden sm:block" />
            
            {/* Main Hospital Front Image Container (100% visible) */}
            <div className="relative w-full max-w-[420px] aspect-square rounded-3xl overflow-hidden bg-white shadow-[0_20px_50px_rgba(34,67,86,0.15)] border border-border-color/40 z-10 transition-transform duration-500 hover:scale-[1.01] group mb-6">
              <img 
                src="/hospital-photo/hospital-image.jpg" 
                alt="Mahally Hospital Front Facade" 
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              
              {/* Soft reflection/gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating Badge relocated below the image to keep the photo 100% visible */}
            <div className="w-full max-w-[420px] bg-white px-5 py-4 rounded-2xl shadow-[0_10px_30px_rgba(34,67,86,0.05)] border border-border-color/60 flex items-center gap-4 z-20">
              <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center flex-shrink-0">
                <Heart size={16} fill="white" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-accent uppercase tracking-wider leading-none mb-1">
                  Trusted Care
                </p>
                <p className="text-xs sm:text-sm font-semibold text-primary leading-tight">
                  Dedicated Community Health Service in Karinkallathani
                </p>
              </div>
            </div>
            
            {/* Small decorative design circles */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent/5 rounded-full blur-xl -z-10 pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
}
