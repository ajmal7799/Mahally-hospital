import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Hero({ setShowContactModal, handleActionPlaceholder, setCurrentPage }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const timerRef = useRef(null);
  const contentTimerRef = useRef(null);

  const slides = [
    {
      laptopImage: "/hero/image1laptop-fit.png",
      mobileImage: "/hero/image1mobile-fit.png",
      title: "Your Health, Our Priority",
      description: "Trusted multi-specialty care in Karinkallathani — with expert doctors, modern facilities, and compassionate treatment for every member of your family.",
      buttonText: "Book an Appointment",
      action: () => {
        if (setCurrentPage) {
          setCurrentPage('booking');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      },
    },
    {
      laptopImage: "/hero/image2Laptop-fit.png",
      mobileImage: "/hero/image2Mobile-fit.png",
      title: "Always Ready. Always Here.",
      description: "With 24-hour Casualty, in-house Pharmacy, Lab, and X-ray facilities — Mahally Hospital ensures you get complete care under one roof, anytime you need it.",
      buttonText: "Contact Us",
      action: () => setShowContactModal(true),
    }
  ];

  const SLIDE_DURATION = 8000; // 8 seconds per slide
  const CONTENT_DELAY = 1000;  // 1 second delay for text to load after slide starts

  // Function to transition and start timers for a specific slide
  const startSlideCycle = (slideIndex) => {
    // Clear existing timers
    if (timerRef.current) clearInterval(timerRef.current);
    if (contentTimerRef.current) clearTimeout(contentTimerRef.current);

    // Hide content to trigger entrance animations again
    setShowContent(false);
    setActiveSlide(slideIndex);

    // Delay showing the writings
    contentTimerRef.current = setTimeout(() => {
      setShowContent(true);
    }, CONTENT_DELAY);

    // Set transition to next slide
    timerRef.current = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, SLIDE_DURATION);
  };

  useEffect(() => {
    // Start slider cycle on mount
    startSlideCycle(0);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (contentTimerRef.current) clearTimeout(contentTimerRef.current);
    };
  }, []);

  // When activeSlide changes automatically via setInterval, we need to trigger showContent delay
  useEffect(() => {
    // We only trigger this if the content is not already scheduled or is false
    // To handle manual overrides and auto-sliding consistently, we make sure
    // showContent starts as false on change and then sets to true after CONTENT_DELAY
    setShowContent(false);
    
    const delayTimer = setTimeout(() => {
      setShowContent(true);
    }, CONTENT_DELAY);

    return () => clearTimeout(delayTimer);
  }, [activeSlide]);

  const handlePrevSlide = (e) => {
    e.stopPropagation();
    const prevIndex = (activeSlide - 1 + slides.length) % slides.length;
    startSlideCycle(prevIndex);
  };

  const handleNextSlide = (e) => {
    e.stopPropagation();
    const nextIndex = (activeSlide + 1) % slides.length;
    startSlideCycle(nextIndex);
  };

  const handleDotClick = (index) => {
    if (index === activeSlide) return;
    startSlideCycle(index);
  };

  return (
    <section className="relative w-full h-[540px] sm:h-[600px] lg:h-[calc(100vh-140px)] overflow-hidden bg-primary-dark">
      {/* Background Images with Crossfade */}
      {slides.map((slide, idx) => {
        const isActive = idx === activeSlide;
        return (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <picture className="absolute inset-0 w-full h-full">
              <source media="(max-width: 768px)" srcSet={slide.mobileImage} />
              <img
                src={slide.laptopImage}
                alt={slide.title}
                className="w-full h-full object-cover object-center md:object-right select-none"
              />
            </picture>
            {/* Dark overlay for better text contrast (horizontal gradient on desktop, vertical on mobile) */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/95 via-primary-dark/40 to-transparent md:bg-gradient-to-r md:from-primary-dark/85 md:via-primary-dark/40 md:to-transparent z-10" />
          </div>
        );
      })}

      {/* Slide Content Overlay Container */}
      <div className="relative z-20 w-full h-full max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-center lg:items-center lg:justify-start">
        <div className="w-full max-w-lg">
          {slides.map((slide, idx) => {
            const isActive = idx === activeSlide;
            if (!isActive) return null;

            return (
              <div
                key={idx}
                className={`w-full transition-all duration-500 ${
                  showContent ? 'opacity-100' : 'opacity-0'
                }`}
              >
                {/* Title */}
                <h1
                  className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4 text-center lg:text-left ${
                    showContent ? 'animate-title-in' : 'opacity-0'
                  }`}
                  style={{ animationDelay: '150ms', animationFillMode: 'both' }}
                >
                  {slide.title}
                </h1>

                {/* Description */}
                <p
                  className={`text-xs sm:text-sm md:text-base text-white/90 leading-relaxed mb-6 font-normal text-center lg:text-left ${
                    showContent ? 'animate-desc-in' : 'opacity-0'
                  }`}
                  style={{ animationDelay: '350ms', animationFillMode: 'both' }}
                >
                  {slide.description}
                </p>

                {/* Action Button */}
                <div className="flex justify-center lg:justify-start">
                  <button
                    onClick={slide.action}
                    className={`px-5 py-3 sm:px-6 sm:py-3.5 bg-accent hover:bg-accent-dark text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-lg shadow-md hover:shadow-lg active:scale-95 transition-all duration-200 cursor-pointer inline-flex items-center justify-center ${
                      showContent ? 'animate-btn-in' : 'opacity-0'
                    }`}
                    style={{ animationDelay: '550ms', animationFillMode: 'both' }}
                  >
                    {slide.buttonText}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Manual Slide Navigation Arrows (Desktop Only) */}
      <button
        onClick={handlePrevSlide}
        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 text-primary border border-white/30 backdrop-blur-sm items-center justify-center transition-all duration-200 cursor-pointer shadow-md"
        aria-label="Previous Slide"
      >
        <ChevronLeft size={24} className="text-white hover:text-white" />
      </button>
      <button
        onClick={handleNextSlide}
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 text-primary border border-white/30 backdrop-blur-sm items-center justify-center transition-all duration-200 cursor-pointer shadow-md"
        aria-label="Next Slide"
      >
        <ChevronRight size={24} className="text-white" />
      </button>

      {/* Slide indicators / Dots (Centered at bottom) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2.5">
        {slides.map((_, idx) => {
          const isActive = idx === activeSlide;
          return (
            <button
              key={idx}
              onClick={() => handleDotClick(idx)}
              className={`transition-all duration-300 rounded-full h-2.5 cursor-pointer ${
                isActive ? 'w-8 bg-accent' : 'w-2.5 bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          );
        })}
      </div>

      {/* Premium Visual Progress Bar (indicates slide timeout progress) */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 z-30 overflow-hidden">
        <div
          key={activeSlide}
          className="h-full bg-accent animate-progress"
        />
      </div>
    </section>
  );
}
