import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonialsData = [
  {
    id: 1,
    name: "Muhammad Faisal",
    rating: 5,
    review: "I had an excellent experience with the respiratory department. The specialist took the time to listen to my concerns, explained my asthma treatment plan in detail, and followed up regularly. The staff is polite, and the facilities are state-of-the-art."
  },
  {
    id: 2,
    name: "Fathima Najiya",
    rating: 5,
    review: "The maternity and women's health care here is second to none. Right from my first consultation through my recovery, the doctor and nursing staff made me feel safe and supported. The environment is extremely clean and clinical, which gave me immense peace of mind."
  },
  {
    id: 3,
    name: "Anas K.",
    rating: 5,
    review: "Outstanding treatment for my digestive health issues. The gastroenterology team diagnosed my problem immediately and set up a practical lifestyle and medicine regimen that worked wonders. I am very grateful for their professional care and guidance."
  },
  {
    id: 4,
    name: "Devika Suresh",
    rating: 4,
    review: "I visited the dental clinic for a root canal procedure and was very impressed by how modern the equipments are. The dentist was patient and ensured I felt no pain. The appointment schedule had a brief delay, but the treatment quality is top-notch."
  },
  {
    id: 5,
    name: "Rishi Prasad",
    rating: 5,
    review: "The physical rehabilitation center did an amazing job with my father's stroke recovery therapy. The therapists are incredibly patient, encouraging, and highly skilled. They helped him regain his mobility and confidence step by step."
  },
  {
    id: 6,
    name: "Aisha Rida",
    rating: 5,
    review: "Highly recommend the general medicine department for family healthcare. We consulted for my grandmother's diabetic care and the physician was extremely thorough, compassionate, and provided clear dietary and medication guidelines."
  },
  {
    id: 7,
    name: "Sreerag M.",
    rating: 4,
    review: "Had a great experience at the orthopedics department for fracture treatment. The surgeon was very knowledgeable and the plaster application was neat. Booking the appointment online was a bit tricky, but the in-hospital service was flawless."
  },
  {
    id: 8,
    name: "Shifa Sherin",
    rating: 5,
    review: "Exceptional ENT services. The specialist identified the root cause of my chronic throat infection within minutes and prescribed a very effective recovery plan. The clinic is well-maintained, and they follow strict hygiene protocols throughout the procedures."
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fade, setFade] = useState(true);

  // Autoplay timer: cycles every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [activeIndex]);

  const handleNext = () => {
    setFade(false);
    setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
      setFade(true);
    }, 200);
  };

  const handlePrev = () => {
    setFade(false);
    setTimeout(() => {
      setActiveIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
      setFade(true);
    }, 200);
  };

  const activeTestimonial = testimonialsData[activeIndex];

  return (
    <section id="testimonials" className="w-full bg-white py-16 md:py-24 border-b border-border-color overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Testimonial details (fade transition) */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            <div className="w-12 h-[2.5px] bg-accent mb-4 rounded-full" />
            <p className="text-xs sm:text-sm font-semibold text-accent uppercase tracking-wider mb-2">
              What our patients are saying
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-primary font-normal tracking-wide mb-8 leading-tight">
              Patient Testimonials
            </h2>

            {/* Testimonial Content Card Wrapper */}
            <div className="min-h-[260px] sm:min-h-[220px] lg:min-h-[190px] flex flex-col justify-between mb-8">
              <div className={`transition-all duration-300 transform ${fade ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                
                {/* Quotation Icon & Stars */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-accent-light/50 text-accent flex items-center justify-center flex-shrink-0">
                    <Quote size={18} className="fill-accent stroke-none" />
                  </div>
                  {/* Star Icons Render */}
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star 
                        key={i} 
                        size={16} 
                        className={`${
                          i < activeTestimonial.rating 
                            ? 'text-amber-400 fill-amber-400' 
                            : 'text-border-color/60 fill-border-color/30'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-primary/95 text-lg sm:text-xl font-medium leading-relaxed mb-6 font-sans italic">
                  "{activeTestimonial.review}"
                </p>

                {/* Patient Bio */}
                <div>
                  <h4 className="text-base font-bold text-primary">
                    {activeTestimonial.name}
                  </h4>
                  <p className="text-xs font-semibold text-accent uppercase tracking-wide mt-0.5">
                    Verified Patient
                  </p>
                </div>
              </div>
            </div>

            {/* Manual Symmetrical Circle Chevron Control Buttons */}
            <div className="flex items-center gap-4">
              <button 
                onClick={handlePrev}
                className="w-12 h-12 rounded-full border border-border-color hover:border-accent text-primary hover:text-accent flex items-center justify-center transition-all bg-white hover:bg-accent-light/30 shadow-sm cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} className="stroke-[1.5]" />
              </button>
              <button 
                onClick={handleNext}
                className="w-12 h-12 rounded-full border border-border-color hover:border-accent text-primary hover:text-accent flex items-center justify-center transition-all bg-white hover:bg-accent-light/30 shadow-sm cursor-pointer"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} className="stroke-[1.5]" />
              </button>
              
              {/* Pagination Dots indicator */}
              <div className="flex gap-2 ml-4">
                {testimonialsData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setFade(false);
                      setTimeout(() => {
                        setActiveIndex(index);
                        setFade(true);
                      }, 200);
                    }}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === activeIndex ? 'w-6 bg-accent' : 'w-2 bg-border-color hover:bg-accent/40'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Beautifully Framed Happy Patients Photo */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            
            {/* Soft background offset accent frame */}
            <div className="absolute -bottom-4 -left-4 w-full max-w-[420px] aspect-[4/5] border-2 border-accent/20 rounded-3xl -z-10 pointer-events-none hidden sm:block" />
            
            {/* Main Patients Image Container */}
            <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-3xl overflow-hidden bg-white shadow-[0_20px_50px_rgba(34,67,86,0.15)] border border-border-color/40 z-10 transition-transform duration-500 hover:scale-[1.01] group">
              <img 
                src="/happy patient/image.jpg" 
                alt="Happy Recovered Patient" 
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              
              {/* Soft reflection overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent pointer-events-none" />
              
              {/* Symmetrical Floating Badge */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm px-4 py-2.5 rounded-2xl shadow-md border border-border-color/30 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
                <span className="text-xs font-bold text-primary">
                  98% Patient Satisfaction Rate
                </span>
              </div>
            </div>
            
            {/* Background design blur circle */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent/5 rounded-full blur-xl -z-10 pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
}
