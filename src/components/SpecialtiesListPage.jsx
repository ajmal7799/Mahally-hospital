import React, { useEffect } from 'react';
import { ArrowRight, Activity } from 'lucide-react';

const specialtiesData = [
  {
    name: "Cardiology",
    image: "/specialties/Cardiology.png",
    summary: "Comprehensive diagnostic and therapeutic solutions for cardiac conditions, blood pressure, and cardiovascular diseases."
  },
  {
    name: "Dental Care",
    image: "/specialties/Dental care.png",
    summary: "State-of-the-art dental care covering orthodontics, root canals, cosmetic restoration, and preventive gum therapies."
  },
  {
    name: "Dermatology",
    image: "/specialties/Dermatologist .png",
    summary: "Expert treatment for acute and chronic skin disorders, eczemas, psoriasis, cosmetic skin issues, and skin allergies."
  },
  {
    name: "Diabetes",
    image: "/specialties/Diabetes.png",
    summary: "Personalized metabolic care plans, continuous glucose tracking setup, and diabetic health assessments."
  },
  {
    name: "Endocrinology",
    image: "/specialties/Endocrinology.png",
    summary: "Advanced care for thyroid disorders, hormonal imbalances, bone metabolism, and endocrine evaluations."
  },
  {
    name: "Ear, Nose & Throat (ENT)",
    image: "/specialties/ENT.png",
    summary: "Expert diagnosis and surgical management of ear, throat infections, sinus disorders, and pediatric ENT concerns."
  },
  {
    name: "Gastroenterology",
    image: "/specialties/Gastroenterology.png",
    summary: "Treatment for acid reflux (GERD), liver diseases, gastrointestinal track disorders, and colon screenings."
  },
  {
    name: "General Medicine",
    image: "/specialties/General Medicine.png",
    summary: "Comprehensive primary healthcare, wellness screenings, acute infection therapies, and lifestyle care management."
  },
  {
    name: "Gynecology",
    image: "/specialties/Gynecology.png",
    summary: "Compassionate women's wellness checks, prenatal monitoring, PCOS therapies, and advanced obstetrical care."
  },
  {
    name: "Neurology",
    image: "/specialties/Neurology.png",
    summary: "Advanced diagnostics for neurological disorders, chronic migraine control, epilepsy therapies, and nerve studies."
  },
  {
    name: "Orthopedics",
    image: "/specialties/Orthopedics .png",
    summary: "Bone and joint injury management, spinal pain therapies, ligament repairs, and fracture plaster care."
  },
  {
    name: "Pediatrics",
    image: "/specialties/Pediatric.png",
    summary: "Caring child wellness checks, immunization schedules, childhood infection control, and developmental reviews."
  },
  {
    name: "PMR (Rehab)",
    image: "/specialties/PMR.png",
    summary: "Advanced physical rehabilitation for stroke recoveries, spinal injuries, chronic nerve pain, and mobility support."
  },
  {
    name: "Pulmonology",
    image: "/specialties/Pulmonologi.png",
    summary: "Advanced respiratory care for asthma, chronic COPD, chest allergies, sleep-apnea, and lung function assessments."
  }
];

export default function SpecialtiesListPage({ setSelectedSpecialtyName, setCurrentPage }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSelectSpecialty = (name) => {
    setSelectedSpecialtyName(name);
    setCurrentPage('specialty-detail');
  };

  return (
    <div className="w-full bg-[#F5F7F8]">
      
      {/* Hero Header Section */}
      <section className="relative w-full bg-gradient-to-br from-[#224356] to-[#16303F] text-white py-16 md:py-24 text-center overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#418C7D]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#418C7D]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="w-12 h-[2.5px] bg-[#418C7D] mx-auto mb-4 rounded-full" />
          <p className="text-xs sm:text-sm font-semibold text-[#418C7D] uppercase tracking-widest mb-3">
            Medical Departments
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-white font-normal tracking-wide leading-tight mb-6">
            Our Specialties
          </h1>
          <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-sans">
            Mahally Hospital offers 14 dedicated departments staffed by senior medical consultants committed to your family's health.
          </p>
        </div>
      </section>

      {/* Grid of Specialties */}
      <section className="w-full py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {specialtiesData.map((spec) => (
              <div 
                key={spec.name}
                className="bg-white rounded-3xl overflow-hidden border border-border-color/60 shadow-[0_4px_25px_rgba(0,0,0,0.01)] hover:shadow-[0_12px_35px_rgba(34,67,86,0.06)] hover:border-[#418C7D]/20 transition-all duration-300 flex flex-col justify-between text-left group cursor-pointer"
                onClick={() => handleSelectSpecialty(spec.name)}
              >
                
                {/* cover image */}
                <div className="relative w-full aspect-[4/3] bg-secondary-bg overflow-hidden">
                  <img 
                    src={spec.image} 
                    alt={spec.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                </div>

                {/* Content description */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div className="mb-4">
                    <h3 className="text-lg font-serif text-primary font-normal tracking-wide mb-2 group-hover:text-[#418C7D] transition-colors leading-tight">
                      {spec.name}
                    </h3>
                    <p className="text-muted-text text-xs sm:text-sm leading-relaxed font-sans line-clamp-3">
                      {spec.summary}
                    </p>
                  </div>

                  {/* Explore button inside details */}
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-accent group-hover:text-[#316B5F] uppercase tracking-wider mt-auto pt-2">
                    <span>Explore Department</span>
                    <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
