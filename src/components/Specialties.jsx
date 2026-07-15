import React, { useState, useRef, useEffect } from 'react';
import { 
  Heart, 
  Smile, 
  Sparkles, 
  Activity, 
  Volume2, 
  Stethoscope, 
  HeartHandshake, 
  Brain, 
  Bone, 
  Baby, 
  Accessibility, 
  Wind, 
  ChevronLeft, 
  ChevronRight, 
  ArrowUpRight 
} from 'lucide-react';

const specialtiesData = [
  {
    id: 1,
    name: "Cardiology",
    subtitle: "Heart specialist clinic",
    image: "/specialties/Cardiology.png",
    icon: Heart,
    description: "Our Cardiology department offers advanced diagnostics, expert consultations, and comprehensive treatment plans for heart health and cardiovascular disease prevention."
  },
  {
    id: 2,
    name: "Dental Care",
    subtitle: "Comprehensive dental care",
    image: "/specialties/Dental care.png",
    icon: Smile,
    description: "Exceptional oral healthcare services, ranging from preventative cleanings and routine checkups to advanced cosmetic, restorative, and orthodontic procedures."
  },
  {
    id: 3,
    name: "Dermatology",
    subtitle: "Skin and hair care clinic",
    image: "/specialties/Dermatologist .png",
    icon: Sparkles,
    description: "Comprehensive care for skin, hair, and nail health. We diagnose and treat a wide range of dermatological conditions, offering medical and aesthetic skincare therapies."
  },
  {
    id: 4,
    name: "Diabetes",
    subtitle: "Diabetes care and control",
    image: "/specialties/Diabetes.png",
    icon: Activity,
    description: "Specialized endocrine care focusing on diabetes management, blood glucose monitoring, personalized dietary guidance, and preventative therapy for complications."
  },
  {
    id: 5,
    name: "Endocrinology",
    subtitle: "Hormone specialist services",
    image: "/specialties/Endocrinology.png",
    icon: Activity,
    description: "Expert evaluation and management of hormonal imbalances, thyroid disorders, metabolic conditions, and glandular dysfunctions to restore body harmony."
  },
  {
    id: 6,
    name: "Ear, Nose & Throat (ENT)",
    subtitle: "ENT specialist in Malappuram",
    image: "/specialties/ENT.png",
    icon: Volume2,
    description: "Full-range diagnostics and treatment for ear, nose, and throat disorders, including hearing tests, allergy management, and micro-laryngeal surgeries."
  },
  {
    id: 7,
    name: "Gastroenterology",
    subtitle: "Stomach and liver specialist",
    image: "/specialties/Gastroenterology.png",
    icon: Stethoscope,
    description: "Expert diagnostic procedures and medical therapies for esophagus, stomach, liver, gallbladder, and digestive tract disorders to ensure optimal digestive health."
  },
  {
    id: 8,
    name: "General Medicine",
    subtitle: "General physician consultations",
    image: "/specialties/General Medicine.png",
    icon: Stethoscope,
    description: "Primary comprehensive care services, including chronic disease management, seasonal illness treatment, health screenings, and wellness counseling."
  },
  {
    id: 9,
    name: "Gynecology",
    subtitle: "Maternity and women's health",
    image: "/specialties/Gynecology.png",
    icon: HeartHandshake,
    description: "Compassionate women's health services across all stages of life, including prenatal care, regular gynecological checkups, and advanced reproductive health therapies."
  },
  {
    id: 10,
    name: "Neurology",
    subtitle: "Brain and nerve clinic",
    image: "/specialties/Neurology.png",
    icon: Brain,
    description: "Advanced neurological diagnostics and treatment for disorders of the brain, spinal cord, and peripheral nerves, including stroke and migraine care."
  },
  {
    id: 11,
    name: "Orthopedics",
    subtitle: "Bone and joint treatments",
    image: "/specialties/Orthopedics .png",
    icon: Bone,
    description: "Comprehensive bone and joint care, specializing in fracture treatment, sports injuries, joint replacement surgeries, and physical rehabilitation support."
  },
  {
    id: 12,
    name: "Pediatrics",
    subtitle: "Child health specialists",
    image: "/specialties/Pediatric.png",
    icon: Baby,
    description: "Friendly and expert clinical care for infants, children, and adolescents, including immunizations, developmental screenings, and childhood illness treatment."
  },
  {
    id: 13,
    name: "PMR (Rehab)",
    subtitle: "Physical rehabilitation clinic",
    image: "/specialties/PMR.png",
    icon: Accessibility,
    description: "Physical Medicine and Rehabilitation services to help patients recover function and mobility after nerve, bone, or muscle injuries or strokes."
  },
  {
    id: 14,
    name: "Pulmonology",
    subtitle: "Asthma and lung care center",
    image: "/specialties/Pulmonologi.png",
    icon: Wind,
    description: "Specialized care for lung diseases and respiratory tract conditions, including chronic asthma, COPD, sleep apnea, and breathing therapy."
  }
];

// Triplicate the specialties list to enable infinite loop swiping
const extendedSpecialties = [
  ...specialtiesData,
  ...specialtiesData,
  ...specialtiesData
];

export default function Specialties({ selectedSpecialtyIndex, setSelectedSpecialtyIndex }) {
  const [virtualIndex, setVirtualIndex] = useState(specialtiesData.length); // starts at 14 (first card of middle copy)
  const sliderRef = useRef(null);
  
  const isProgrammaticScroll = useRef(false);
  const scrollTimeoutRef = useRef(null);
  
  const activeIndex = virtualIndex % specialtiesData.length;
  const activeSpecialty = specialtiesData[activeIndex];

  // Watch for specialty index updates from Header dropdown clicks
  useEffect(() => {
    if (selectedSpecialtyIndex !== null && selectedSpecialtyIndex !== undefined) {
      const targetIndex = selectedSpecialtyIndex + specialtiesData.length;
      setVirtualIndex(targetIndex);
      setSelectedSpecialtyIndex(null); // Reset trigger
    }
  }, [selectedSpecialtyIndex]);

  // 1. Initialize scroll position to the first card of the middle section on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      if (sliderRef.current && sliderRef.current.children.length > 0) {
        const container = sliderRef.current;
        const cardWidth = container.children[0].clientWidth;
        const gap = 16;
        container.scrollLeft = specialtiesData.length * (cardWidth + gap);
      }
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  // 2. Programmatic scroll effect: Smoothly scroll to target virtual index and check wrappers
  useEffect(() => {
    if (sliderRef.current && sliderRef.current.children.length > 0) {
      const container = sliderRef.current;
      const activeCard = container.children[virtualIndex];
      if (activeCard) {
        // Programmatic scrolling lock
        isProgrammaticScroll.current = true;
        
        if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
        
        container.scrollTo({
          left: activeCard.offsetLeft,
          behavior: 'smooth'
        });
        
        // Wait for smooth scroll completion, then perform jump if at boundaries
        scrollTimeoutRef.current = setTimeout(() => {
          const total = specialtiesData.length;
          
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

  // 3. Autoplay effect (cycles every 5 seconds, resets on virtualIndex change)
  useEffect(() => {
    const timer = setInterval(() => {
      setVirtualIndex((prev) => prev + 1);
    }, 5000);
    
    return () => clearInterval(timer);
  }, [virtualIndex]);

  // 4. Align scroll position instantly on window resize to avoid visual scroll offsets
  useEffect(() => {
    const handleResize = () => {
      if (sliderRef.current && sliderRef.current.children.length > 0) {
        const container = sliderRef.current;
        const cardWidth = container.children[0].clientWidth;
        const gap = 16;
        const itemWidth = cardWidth + gap;
        container.scrollLeft = virtualIndex * itemWidth;
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [virtualIndex]);

  // 5. Manual Scroll / Swipe Event Handler
  const handleScroll = () => {
    // Ignore programmatic scrolling scrolls
    if (isProgrammaticScroll.current) return;

    if (sliderRef.current && sliderRef.current.children.length > 0) {
      const container = sliderRef.current;
      const scrollLeft = container.scrollLeft;
      const cardWidth = container.children[0].clientWidth;
      const gap = 16;
      const itemWidth = cardWidth + gap;
      const total = specialtiesData.length;
      
      const currentIndex = Math.round(scrollLeft / itemWidth);
      
      // Perform instant, seamless wrap adjustments if swiped out of bounds
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

  const handleCardClick = (index) => {
    setVirtualIndex(index + specialtiesData.length);
  };

  return (
    <section id="specialties" className="w-full bg-white py-16 md:py-24 border-b border-border-color overflow-hidden">
      
      {/* Section Heading (Centered globally on page) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12 md:mb-16">
        <div className="w-12 h-[2.5px] bg-accent mx-auto mb-4 rounded-full" />
        <p className="text-xs sm:text-sm font-semibold text-muted-text uppercase tracking-wider mb-2">
          Different types of departments
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-primary font-normal tracking-wide">
          Our Specialities
        </h2>
      </div>

      {/* Desktop & Tablet Split View / Carousel Grid (Full bleed to the right edge) */}
      <div className="w-full pl-4 sm:pl-6 lg:pl-[calc(max(0px,100vw-1280px)/2+2rem)] pr-4 lg:pr-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Active Specialty Details (Hidden on Mobile/Tablet) */}
          <div className="hidden lg:flex lg:col-span-4 flex-col justify-between p-8 rounded-3xl bg-secondary-bg border border-border-color/60 relative overflow-hidden h-[440px] shadow-[0_4px_25px_rgba(0,0,0,0.02)] transition-all duration-500">
            {/* Soft, blurred grayscale background of the active specialty */}
            <div className="absolute inset-0 z-0 opacity-[0.06] grayscale blur-[0.5px] transition-all duration-500 transform scale-105">
              <img 
                src={activeSpecialty.image} 
                alt="" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content Container */}
            <div className="relative z-10 flex flex-col h-full justify-between items-start">
              <div>
                {/* Icon Badge */}
                <div className="w-20 h-20 bg-white rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.05)] flex items-center justify-center border border-border-color/40 mb-6 transition-transform duration-500 transform hover:scale-105">
                  {React.createElement(activeSpecialty.icon, {
                    className: "text-accent w-10 h-10 stroke-[1.5]"
                  })}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-primary mb-3 tracking-tight">
                  {activeSpecialty.name}
                </h3>

                {/* Description */}
                <p className="text-muted-text text-sm leading-relaxed max-w-sm">
                  {activeSpecialty.description}
                </p>
              </div>

              {/* View all departments button (Not functional, just visual) */}
              <button 
                className="group inline-flex items-center gap-3.5 border border-primary/20 hover:border-accent text-primary hover:text-accent font-semibold text-xs tracking-wider uppercase rounded-full pl-5 pr-2 py-2 bg-transparent transition-all duration-300 cursor-default"
                onClick={(e) => e.preventDefault()}
              >
                <span>View all departments</span>
                <span className="w-8 h-8 rounded-full bg-accent-light text-accent group-hover:bg-accent group-hover:text-white flex items-center justify-center transition-all duration-300">
                  <ArrowUpRight size={16} />
                </span>
              </button>
            </div>
          </div>

          {/* Right Column: Horizontal Scrollable Cards List (Spans more columns & bleeds right) */}
          <div className="col-span-1 lg:col-span-8 flex flex-col justify-center w-full min-w-0 overflow-hidden">
            {/* Scrollable Container (snaps and hides scrollbar) */}
            <div 
              ref={sliderRef}
              onScroll={handleScroll}
              className="relative w-full flex gap-4 overflow-x-auto scrollbar-none pb-4 snap-x snap-mandatory scroll-smooth pr-4 sm:pr-6 lg:pr-16"
            >
              {extendedSpecialties.map((spec, index) => {
                const realIndex = index % specialtiesData.length;
                const isActive = realIndex === activeIndex;
                return (
                  <div
                    key={`${spec.id}-${index}`}
                    onClick={() => handleCardClick(realIndex)}
                    className={`relative flex-shrink-0 w-[calc(50%-8px)] min-w-[145px] lg:w-[calc((100%-32px)/2.4)] aspect-[2/3] rounded-2xl overflow-hidden cursor-pointer snap-start transition-all duration-500 group ${
                      isActive 
                        ? 'ring-2 ring-accent ring-offset-2 scale-[1.03] shadow-[0_20px_50px_rgba(65,140,125,0.15)] z-20 opacity-100' 
                        : 'hover:scale-[1.01] opacity-75 hover:opacity-100'
                    }`}
                  >
                    {/* Image */}
                    <img 
                      src={spec.image} 
                      alt={spec.name} 
                      className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out ${
                        isActive ? 'scale-110' : 'group-hover:scale-105'
                      }`}
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10 opacity-90 transition-opacity duration-300 group-hover:opacity-95" />

                    {/* Specialty Title & Subtitle */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 z-20 transition-transform duration-300 group-hover:translate-y-[-2px]">
                      <h4 className="text-white font-bold text-sm sm:text-base md:text-lg leading-tight">
                        {spec.name}
                      </h4>
                      {spec.subtitle && (
                        <p className="text-white/70 text-[10px] sm:text-xs mt-1 font-medium font-sans">
                          {spec.subtitle}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Navigation Arrows (Centered beneath on mobile, visible on all screens) */}
            <div className="flex justify-center items-center gap-4 mt-8 pr-4 sm:pr-6 lg:pr-16 w-full">
              <button 
                onClick={handlePrev}
                className="w-14 h-14 rounded-full border border-border-color hover:border-accent text-muted-text hover:text-accent flex items-center justify-center transition-all bg-white hover:bg-accent-light/30 shadow-sm cursor-pointer flex-shrink-0"
                aria-label="Previous specialty"
              >
                <ChevronLeft size={24} className="stroke-[1.5]" />
              </button>
              <button 
                onClick={handleNext}
                className="w-14 h-14 rounded-full border border-border-color hover:border-accent text-muted-text hover:text-accent flex items-center justify-center transition-all bg-white hover:bg-accent-light/30 shadow-sm cursor-pointer flex-shrink-0"
                aria-label="Next specialty"
              >
                <ChevronRight size={24} className="stroke-[1.5]" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}