import React, { useState, useEffect } from 'react';
import { Phone, Calendar, ArrowUp } from 'lucide-react';

export default function FloatingActions({ setCurrentPage }) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleBookingClick = () => {
    if (setCurrentPage) {
      setCurrentPage('booking');
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* 1. Left-Side Bottom: Scroll to Top Button */}
      <button
        onClick={handleScrollToTop}
        className={`fixed left-5 bottom-5 w-12 h-12 rounded-full bg-white border-2 border-[#418C7D] text-[#418C7D] hover:bg-[#418C7D] hover:text-white flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.12)] transition-all duration-300 z-[999] hover:scale-105 active:scale-95 cursor-pointer ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={22} className="stroke-[2.5]" />
      </button>

      {/* 2. Right-Side Center: Vertical Quick Action Panel */}
      <div 
        className="fixed right-5 top-1/2 -translate-y-1/2 flex flex-col items-end gap-3.5 z-[999]"
        style={{ pointerEvents: 'auto' }}
      >
        
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/919061808050"
          target="_blank"
          rel="noopener noreferrer"
          className="h-12 w-12 md:hover:w-[150px] rounded-full bg-[#224356] border-2 border-white text-white hover:bg-white hover:text-[#418C7D] hover:border-[#418C7D] flex items-center justify-start px-3 shadow-[0_4px_18px_rgba(34,67,86,0.15)] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer group overflow-hidden whitespace-nowrap gap-3.5"
          title="Chat on WhatsApp"
        >
          <div className="flex-shrink-0 w-5 h-5 flex items-center justify-center">
            <svg 
              viewBox="0 0 24 24" 
              width="20" 
              height="20" 
              fill="currentColor"
              className="transition-transform duration-200 group-hover:scale-105"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.458h.004c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </div>
          <span className="hidden md:inline opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[10px] font-extrabold uppercase tracking-wider font-sans select-none pr-1">
            WhatsApp
          </span>
        </a>

        {/* Call Button */}
        <a
          href="tel:9061808050"
          className="h-12 w-12 md:hover:w-[130px] rounded-full bg-[#224356] border-2 border-white text-white hover:bg-white hover:text-[#418C7D] hover:border-[#418C7D] flex items-center justify-start px-3 shadow-[0_4px_18px_rgba(34,67,86,0.15)] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer group overflow-hidden whitespace-nowrap gap-3.5"
          title="Call Helpline"
        >
          <div className="flex-shrink-0 w-5 h-5 flex items-center justify-center">
            <Phone size={19} className="transition-transform duration-200 group-hover:scale-105" />
          </div>
          <span className="hidden md:inline opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[10px] font-extrabold uppercase tracking-wider font-sans select-none pr-1">
            Call Us
          </span>
        </a>

        {/* Appointment Booking Button */}
        <button
          onClick={handleBookingClick}
          className="h-12 w-12 md:hover:w-[185px] rounded-full bg-[#224356] border-2 border-white text-white hover:bg-white hover:text-[#418C7D] hover:border-[#418C7D] flex items-center justify-start px-3 shadow-[0_4px_18px_rgba(34,67,86,0.15)] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer group overflow-hidden whitespace-nowrap gap-3.5 border-none outline-none"
          title="Book Appointment"
        >
          <div className="flex-shrink-0 w-5 h-5 flex items-center justify-center">
            <Calendar size={19} className="transition-transform duration-200 group-hover:scale-105" />
          </div>
          <span className="hidden md:inline opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[10px] font-extrabold uppercase tracking-wider font-sans select-none pr-1">
            Book Appointment
          </span>
        </button>

      </div>
    </>
  );
}
