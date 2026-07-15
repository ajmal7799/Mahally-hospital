import React, { useEffect } from 'react';
import { Star, Quote, MessageSquare, Heart } from 'lucide-react';

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

export default function TestimonialsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-[#F5F7F8]">
      
      {/* Hero Header Section */}
      <section className="relative w-full bg-gradient-to-br from-[#224356] to-[#16303F] text-white py-16 md:py-24 text-center overflow-hidden">
        {/* Background shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#418C7D]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#418C7D]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="w-12 h-[2.5px] bg-[#418C7D] mx-auto mb-4 rounded-full" />
          <p className="text-xs sm:text-sm font-semibold text-[#418C7D] uppercase tracking-widest mb-3">
            Real Patient Stories
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-white font-normal tracking-wide leading-tight mb-6">
            Patient Testimonials
          </h1>
          <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-sans">
            Hear from our verified patients about their experiences, treatments, and recoveries at Mahally Hospital.
          </p>
        </div>
      </section>

      {/* Main Grid View Section (All 8 reviews in 2-column format) */}
      <section className="w-full py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {testimonialsData.map((item) => (
              <div 
                key={item.id}
                className="bg-white p-8 rounded-3xl border border-border-color/60 shadow-[0_4px_25px_rgba(0,0,0,0.01)] hover:shadow-[0_12px_35px_rgba(34,67,86,0.06)] hover:border-[#418C7D]/20 transition-all duration-300 flex flex-col justify-between text-left group"
              >
                <div>
                  {/* Quotes Icon & Stars */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-2xl bg-accent-light/50 text-accent flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                      <Quote size={18} className="fill-current stroke-none" />
                    </div>
                    
                    {/* Stars Render */}
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star 
                          key={i} 
                          size={16} 
                          className={`${
                            i < item.rating 
                              ? 'text-amber-400 fill-amber-400' 
                              : 'text-border-color/60 fill-border-color/30'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Review copy */}
                  <p className="text-primary/95 text-base sm:text-lg font-medium leading-relaxed mb-6 font-sans italic">
                    "{item.review}"
                  </p>
                </div>

                {/* Patient Author card footer */}
                <div className="pt-5 border-t border-secondary-bg flex items-center justify-between">
                  <div>
                    <h4 className="text-base font-bold text-primary">
                      {item.name}
                    </h4>
                    <p className="text-xs font-semibold text-accent uppercase tracking-wide mt-0.5">
                      Verified Patient
                    </p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-accent-light/30 flex items-center justify-center text-accent">
                    <Heart size={14} className="fill-accent stroke-none" />
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* Symmetrical Share Feedback CTA Banner */}
          <div className="mt-16 bg-gradient-to-br from-[#224356] to-[#16303F] rounded-3xl p-8 md:p-12 text-center text-white border border-white/5 relative overflow-hidden shadow-lg max-w-4xl mx-auto">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#418C7D]/10 rounded-full blur-2xl pointer-events-none" />
            <div className="relative z-10 max-w-xl mx-auto">
              <h3 className="text-2xl sm:text-3xl font-serif font-normal mb-4">Have a story to share?</h3>
              <p className="text-white/70 text-sm sm:text-base mb-8 leading-relaxed">
                Your feedback helps us continuously improve our patient care systems. If you've had a recovery story at Mahally Hospital, we'd love to hear from you.
              </p>
              <a 
                href="https://wa.me/9061808050" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#418C7D] hover:bg-[#316B5F] text-white font-bold text-xs tracking-wider uppercase rounded-full py-3.5 px-8 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <MessageSquare size={14} />
                <span>Share Your Experience</span>
              </a>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
