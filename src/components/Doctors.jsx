import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';

import { doctorsData } from '../data/doctorsData';

// Triplicate the list for continuous looping
const extendedDoctors = [
  ...doctorsData,
  ...doctorsData,
  ...doctorsData
];

export default function Doctors({ setCurrentPage, setSelectedDoctorName }) {
  const [virtualIndex, setVirtualIndex] = useState(doctorsData.length); // starts at index 10 (first doctor of middle section)
  const sliderRef = useRef(null);
  
  const isProgrammaticScroll = useRef(false);
  const scrollTimeoutRef = useRef(null);
  
  const activeIndex = virtualIndex % doctorsData.length;

  // Initialize scroll position on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      if (sliderRef.current && sliderRef.current.children.length > 0) {
        const container = sliderRef.current;
        const cardWidth = container.children[0].clientWidth;
        const gap = 24; // gap-6 is 24px
        container.scrollLeft = doctorsData.length * (cardWidth + gap);
      }
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Programmatic scroll effect
  useEffect(() => {
    if (sliderRef.current && sliderRef.current.children.length > 0) {
      const container = sliderRef.current;
      const activeCard = container.children[virtualIndex];
      if (activeCard) {
        isProgrammaticScroll.current = true;
        
        if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
        
        container.scrollTo({
          left: activeCard.offsetLeft,
          behavior: 'smooth'
        });
        
        scrollTimeoutRef.current = setTimeout(() => {
          const total = doctorsData.length;
          
          if (virtualIndex < total) {
            const targetVirtual = virtualIndex + total;
            const targetCard = container.children[targetVirtual];
            if (targetCard) {
              container.scrollTo({ left: targetCard.offsetLeft, behavior: 'auto' });
              isProgrammaticScroll.current = true;
              setVirtualIndex(targetVirtual);
            }
          } else if (virtualIndex >= total * 2) {
            const targetVirtual = virtualIndex - total;
            const targetCard = container.children[targetVirtual];
            if (targetCard) {
              container.scrollTo({ left: targetCard.offsetLeft, behavior: 'auto' });
              isProgrammaticScroll.current = true;
              setVirtualIndex(targetVirtual);
            }
          }
          
          isProgrammaticScroll.current = false;
        }, 600);
      }
    }
  }, [virtualIndex]);

  // Autoplay (cycles every 5 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setVirtualIndex((prev) => prev + 1);
    }, 5000);
    return () => clearInterval(timer);
  }, [virtualIndex]);

  // Window resize re-alignment
  useEffect(() => {
    const handleResize = () => {
      if (sliderRef.current && sliderRef.current.children.length > 0) {
        const container = sliderRef.current;
        const cardWidth = container.children[0].clientWidth;
        const gap = 24;
        const itemWidth = cardWidth + gap;
        container.scrollLeft = virtualIndex * itemWidth;
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [virtualIndex]);

  // Manual scroll event handler
  const handleScroll = () => {
    if (isProgrammaticScroll.current) return;

    if (sliderRef.current && sliderRef.current.children.length > 0) {
      const container = sliderRef.current;
      const scrollLeft = container.scrollLeft;
      const cardWidth = container.children[0].clientWidth;
      const gap = 24;
      const itemWidth = cardWidth + gap;
      const total = doctorsData.length;
      
      const currentIndex = Math.round(scrollLeft / itemWidth);
      
      if (currentIndex < total) {
        isProgrammaticScroll.current = true;
        const targetVirtual = currentIndex + total;
        const targetCard = container.children[targetVirtual];
        if (targetCard) {
          container.scrollTo({ left: targetCard.offsetLeft, behavior: 'auto' });
          setVirtualIndex(targetVirtual);
        }
        setTimeout(() => { isProgrammaticScroll.current = false; }, 50);
        return;
      } else if (currentIndex >= total * 2) {
        isProgrammaticScroll.current = true;
        const targetVirtual = currentIndex - total;
        const targetCard = container.children[targetVirtual];
        if (targetCard) {
          container.scrollTo({ left: targetCard.offsetLeft, behavior: 'auto' });
          setVirtualIndex(targetVirtual);
        }
        setTimeout(() => { isProgrammaticScroll.current = false; }, 50);
        return;
      }
      
      if (currentIndex !== virtualIndex) {
        setVirtualIndex(currentIndex);
      }
    }
  };

  const handlePrev = () => {
    setVirtualIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    setVirtualIndex((prev) => prev + 1);
  };

  const handleBookAppointment = (doctorName) => {
    if (setSelectedDoctorName) {
      setSelectedDoctorName(doctorName);
    }
    if (setCurrentPage) {
      setCurrentPage('booking');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="doctors" className="w-full bg-[#F5F7F8] py-16 md:py-24 border-b border-border-color overflow-hidden">
      
      {/* Section Heading & Subheading */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
        <p className="text-xs sm:text-sm font-semibold text-accent uppercase tracking-wider mb-2">
          Meet our experts
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-primary font-normal tracking-wide mb-6">
          Our Doctors
        </h2>
        
        {/* Navigation Arrows (Centered right beneath the title) */}
        <div className="flex justify-center items-center gap-4">
          <button 
            onClick={handlePrev}
            className="w-11 h-11 rounded-full border border-border-color hover:border-accent text-muted-text hover:text-accent flex items-center justify-center transition-all bg-white hover:bg-accent-light/30 shadow-sm cursor-pointer"
            aria-label="Previous doctor"
          >
            <ChevronLeft size={20} className="stroke-[1.5]" />
          </button>
          <button 
            onClick={handleNext}
            className="w-11 h-11 rounded-full border border-border-color hover:border-accent text-muted-text hover:text-accent flex items-center justify-center transition-all bg-white hover:bg-accent-light/30 shadow-sm cursor-pointer"
            aria-label="Next doctor"
          >
            <ChevronRight size={20} className="stroke-[1.5]" />
          </button>
        </div>
      </div>

      {/* Horizontal Carousel (Symmetrical padding on both sides) */}
      <div className="w-full px-4 sm:px-8 lg:px-12">
        <div 
          ref={sliderRef}
          onScroll={handleScroll}
          className="relative w-full flex gap-6 overflow-x-auto scrollbar-none pb-8 snap-x snap-mandatory scroll-smooth"
        >
          {extendedDoctors.map((doc, index) => {
            const realIndex = index % doctorsData.length;
            const isActive = realIndex === activeIndex;
            return (
              <div
                key={`${doc.id}-${index}`}
                className={`relative flex-shrink-0 w-[280px] sm:w-[310px] bg-white border border-border-color/60 rounded-3xl p-5 flex flex-col justify-between transition-all duration-500 hover:shadow-[0_15px_40px_rgba(34,67,86,0.08)] snap-start group ${
                  isActive ? 'ring-1 ring-accent/30 shadow-[0_10px_30px_rgba(34,67,86,0.06)]' : ''
                }`}
              >
                {/* Top Gray Header Photo Container */}
                <div className="w-full aspect-[1310/1200] rounded-2xl bg-[#E2E6E8] overflow-hidden mb-5 relative">
                  <img 
                    src={doc.image} 
                    alt={doc.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      // Fallback in case of image load failure
                      e.target.style.display = 'none';
                    }}
                  />
                  {/* Subtle border overlay inside */}
                  <div className="absolute inset-0 border border-black/5 rounded-2xl pointer-events-none" />
                </div>

                {/* Doctor Metadata Details */}
                <div className="flex flex-col flex-grow items-center text-center px-2 mb-6">
                  {/* Name */}
                  <h3 className="text-xl font-bold text-primary mb-1.5 tracking-tight group-hover:text-accent transition-colors duration-300">
                    {doc.name}
                  </h3>

                  {/* Credentials / Qualifications */}
                  <p className="text-muted-text text-[11px] sm:text-xs leading-normal mb-3 font-medium min-h-[36px] flex items-center justify-center">
                    {doc.qualifications}
                  </p>

                  {/* Specialty / Role */}
                  <p className="text-accent text-[11px] font-bold uppercase tracking-wider mb-1 min-h-[16px]">
                    {doc.specialty}
                  </p>

                  {/* Department Tag */}
                  <span className="text-[10px] bg-accent-light/50 text-[#316B5F] px-2.5 py-0.5 rounded-full font-semibold">
                    {doc.department}
                  </span>
                </div>

                {/* Button Option & Diagonal Accent Arrow */}
                <div className="w-full pt-4 border-t border-border-color/60 flex items-center justify-between relative mt-auto">
                  <button
                    onClick={() => handleBookAppointment(doc.name)}
                    className="flex-grow bg-accent hover:bg-accent-dark text-white font-bold text-xs tracking-wider uppercase rounded-full py-3 px-5 transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    Book An Appointment
                  </button>

                  {/* Stylistic Corner Accent Arrow (matches the mockup style) */}
                  <div className="absolute right-[-4px] bottom-[-4px] text-border-color/80 group-hover:text-accent transition-colors duration-300 pointer-events-none">
                    <ArrowUpRight size={14} className="stroke-[1.5]" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
    </section>
  );
}
