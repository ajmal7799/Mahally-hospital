import React, { useEffect } from 'react';
import { 
  ShieldCheck, 
  Users, 
  Activity, 
  Clock, 
  MapPin, 
  Phone, 
  MessageSquare, 
  Heart, 
  Compass, 
  Award,
  ChevronRight,
  Home
} from 'lucide-react';

export default function AboutPage() {
  // Ensure the page scrolls to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    { value: "14+", label: "Medical Specialties", desc: "Expert departments catering to all medical needs" },
    { value: "24/7", label: "Emergency Care", desc: "Round-the-clock casualty, diagnostics & pharmacy" },
    { value: "50K+", label: "Happy Recoveries", desc: "Patients treated with high success rates" },
    { value: "15+", label: "Senior Consultants", desc: "Highly qualified doctors and medical surgeons" }
  ];

  const chooseUsPoints = [
    {
      title: "Senior Medical Board",
      desc: "Our board comprises over 15+ senior consultants holding MBBS, MD, MS, DNB, and DM degrees from leading institutions.",
      icon: Award
    },
    {
      title: "24/7 Patient Services",
      desc: "Emergency casualty, in-house laboratory, radiology diagnostics, and pharmacy are fully operational 24 hours, 7 days a week.",
      icon: Clock
    },
    {
      title: "Patient-First Care",
      desc: "Our nursing board and support staff follow a warm, compassionate protocol ensuring that every visit is comfortable and reassuring.",
      icon: Heart
    }
  ];

  const facilities = [
    { name: "Laboratory Services", desc: "High-precision clinical testing with rapid reporting cycles.", icon: Activity },
    { name: "X-Ray & Radiology", desc: "Advanced imaging technology for accurate diagnostic assessments.", icon: ShieldCheck },
    { name: "24/7 Pharmacy", desc: "Fully stocked pharmacy providing immediate access to life-saving drugs.", icon: Compass },
    { name: "24/7 Casualty & Emergency", desc: "State-of-the-art trauma support manned by experienced critical care physicians.", icon: Clock },
    { name: "Home Care Service", desc: "Bringing professional nursing care, doctor visits, and sample collection directly to your home in Karinkallathani.", icon: Home }
  ];

  return (
    <div className="w-full bg-white">
      
      {/* 1. Page Header Hero Banner */}
      <section className="relative w-full bg-gradient-to-br from-[#224356] to-[#16303F] text-white py-16 md:py-24 text-center overflow-hidden">
        {/* Background light shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#418C7D]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#418C7D]/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="w-12 h-[2.5px] bg-[#418C7D] mx-auto mb-4 rounded-full" />
          <p className="text-xs sm:text-sm font-semibold text-[#418C7D] uppercase tracking-widest mb-3">
            Who We Are
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-white font-normal tracking-wide leading-tight mb-6">
            About Mahally Hospital
          </h1>
          <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-sans">
            Serving Karinkallathani and surrounding regions with clinical excellence, 
            compassionate doctors, and round-the-clock emergency support.
          </p>
        </div>
      </section>

      {/* 2. Who We Are Detail Section */}
      <section className="w-full bg-white py-16 md:py-24 border-b border-border-color">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-7 text-left">
              <div className="w-12 h-[2.5px] bg-[#418C7D] mb-4 rounded-full" />
              <h2 className="text-3xl sm:text-4xl font-serif text-primary font-normal tracking-wide leading-snug mb-6">
                Dedicated to the Health and Wellbeing of Our Community
              </h2>
              <div className="space-y-5 text-sm sm:text-base text-primary/80 leading-relaxed font-sans">
                <p>
                  Mahally Hospital, located in Karinkallathani, Malappuram district, Kerala, is a premium 
                  multi-specialty healthcare clinic. Our mission has always been to provide high-quality, 
                  compassionate medical treatments at affordable costs, keeping our community at the 
                  heart of everything we do.
                </p>
                <p>
                  From routine family medicine consults to advanced diagnostic screenings and 
                  specialized care pathways, we ensure that every patient is treated with respect and the 
                  highest standards of safety. Our expert clinical team includes specialized boards in 
                  Obstetrics, Pediatrics, Orthopedics, Pulmonology, PMR, and Dental Surgery.
                </p>
                <p>
                  We are continually expanding our capacities, investing in state-of-the-art diagnostic 
                  technologies, and introducing services like Home Care to ensure healthcare is within 
                  reach for everyone.
                </p>
              </div>
            </div>

            {/* Right Stats Grid */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {stats.map((stat, idx) => (
                <div 
                  key={idx} 
                  className="bg-[#F5F7F8] p-6 rounded-2xl border border-border-color/60 shadow-sm transition-transform duration-300 hover:scale-[1.02] text-left"
                >
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-[#224356] mb-1">
                    {stat.value}
                  </h3>
                  <p className="text-sm font-bold text-[#418C7D] uppercase tracking-wide mb-2">
                    {stat.label}
                  </p>
                  <p className="text-xs text-primary/70 leading-relaxed">
                    {stat.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 3. Vision & Mission Section */}
      <section className="w-full bg-[#F5F7F8] py-16 md:py-24 border-b border-border-color">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Vision Card */}
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-border-color/60 shadow-sm text-left flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#DCEEE9] text-[#418C7D] flex items-center justify-center mb-6">
                  <Compass size={24} />
                </div>
                <h3 className="text-2xl font-serif text-primary font-normal mb-4">Our Vision</h3>
                <p className="text-primary/75 text-sm sm:text-base leading-relaxed">
                  To build a healthier society by establishing Mahally Hospital as the region's 
                  most trusted healthcare partner, celebrated for clinical excellence, state-of-the-art 
                  technology, and compassionate service.
                </p>
              </div>
              <div className="w-full h-1 bg-[#DCEEE9] mt-8 rounded-full" />
            </div>

            {/* Mission Card */}
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-border-color/60 shadow-sm text-left flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#DCEEE9] text-[#418C7D] flex items-center justify-center mb-6">
                  <ShieldCheck size={24} />
                </div>
                <h3 className="text-2xl font-serif text-primary font-normal mb-4">Our Mission</h3>
                <p className="text-primary/75 text-sm sm:text-base leading-relaxed">
                  To deliver premium, safe, and cost-effective clinical care that exceeds patients' 
                  expectations. We strive to improve health outcomes through localized diagnostics, 
                  highly skilled medical boards, and structured home-based outreach programs.
                </p>
              </div>
              <div className="w-full h-1 bg-[#DCEEE9] mt-8 rounded-full" />
            </div>

          </div>
        </div>
      </section>

      {/* 4. Why Choose Us Section */}
      <section className="w-full bg-white py-16 md:py-24 border-b border-border-color">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <div className="w-12 h-[2.5px] bg-[#418C7D] mx-auto mb-4 rounded-full" />
          <p className="text-xs sm:text-sm font-semibold text-accent uppercase tracking-wider mb-2">
            Patient Trust
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-primary font-normal tracking-wide mb-12">
            Why Choose Mahally Hospital?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {chooseUsPoints.map((point, idx) => {
              const Icon = point.icon;
              return (
                <div key={idx} className="p-6 rounded-2xl border border-border-color/30 hover:border-[#418C7D]/30 transition-all hover:shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-[#DCEEE9] text-[#418C7D] flex items-center justify-center mb-5">
                    <Icon size={20} />
                  </div>
                  <h4 className="text-base font-bold text-primary mb-3">{point.title}</h4>
                  <p className="text-xs sm:text-sm text-primary/75 leading-relaxed">{point.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Core Services & Facilities (Including Home Care) */}
      <section className="w-full bg-[#F5F7F8] py-16 md:py-24 border-b border-border-color">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-left mb-12">
            <div className="w-12 h-[2.5px] bg-[#418C7D] mb-4 rounded-full" />
            <p className="text-xs sm:text-sm font-semibold text-accent uppercase tracking-wider mb-2">
              Clinical Capacities
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif text-primary font-normal tracking-wide">
              Our Core Facilities & Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {facilities.map((fac, idx) => {
              const Icon = fac.icon;
              return (
                <div 
                  key={idx} 
                  className="bg-white p-6 rounded-2xl border border-border-color/40 shadow-sm flex flex-col justify-between text-left hover:shadow-md transition-shadow duration-300"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#DCEEE9] text-[#418C7D] flex items-center justify-center mb-5">
                      <Icon size={18} />
                    </div>
                    <h4 className="text-sm font-bold text-primary mb-2.5">{fac.name}</h4>
                    <p className="text-xs text-primary/75 leading-relaxed">{fac.desc}</p>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] font-bold text-[#418C7D] uppercase tracking-wider mt-5 pt-3 border-t border-secondary-bg">
                    <span>Active Service</span>
                    <ChevronRight size={10} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Map & Live Location Section */}
      <section className="w-full bg-white py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Location Card */}
            <div className="lg:col-span-5 text-left">
              <div className="w-12 h-[2.5px] bg-[#418C7D] mb-4 rounded-full" />
              <p className="text-xs sm:text-sm font-semibold text-accent uppercase tracking-wider mb-2">
                Visit Us
              </p>
              <h2 className="text-3xl sm:text-4xl font-serif text-primary font-normal tracking-wide mb-6">
                Our Physical Location
              </h2>
              <p className="text-primary/75 text-sm sm:text-base leading-relaxed mb-8">
                Mahally Hospital is conveniently situated in Karinkallathani, connecting 
                critical transit corridors for quick ambulance access and clinical visitations.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl bg-[#F5F7F8] border border-border-color text-[#418C7D] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin size={16} />
                  </div>
                  <p className="text-xs sm:text-sm text-primary/80 leading-relaxed">
                    <strong>Mahally Hospital</strong><br />
                    Karinkallathani, Malappuram district,<br />
                    Kerala, India - 679322
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl bg-[#F5F7F8] border border-border-color text-[#418C7D] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone size={16} />
                  </div>
                  <p className="text-xs sm:text-sm text-primary/80 leading-relaxed">
                    <strong>Phone Support</strong><br />
                    <a href="tel:9061808050" className="font-semibold text-primary hover:text-[#418C7D] transition-colors">
                      +91 9061808050
                    </a>
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl bg-[#F5F7F8] border border-border-color text-[#418C7D] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MessageSquare size={16} />
                  </div>
                  <p className="text-xs sm:text-sm text-primary/80 leading-relaxed">
                    <strong>WhatsApp Line</strong><br />
                    <a href="https://wa.me/9061808050" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary hover:text-[#418C7D] transition-colors">
                      +91 9061808050
                    </a>
                  </p>
                </div>
              </div>

              {/* Social Channels Call to Action */}
              <div className="flex gap-3 mt-8">
                <a 
                  href="https://www.instagram.com/mahally_hospital_?igsh=amFrbnpuN3o3dXZ3" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-primary hover:text-white bg-[#F5F7F8] hover:bg-[#418C7D] border border-border-color/80 rounded-xl transition-all duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                  <span>Instagram</span>
                </a>
                
                <a 
                  href="https://www.facebook.com/share/1HVRYPxiTw/?mibextid=wwXIfr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-primary hover:text-white bg-[#F5F7F8] hover:bg-[#418C7D] border border-border-color/80 rounded-xl transition-all duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                  <span>Facebook</span>
                </a>
              </div>
            </div>

            {/* Right Interactive Google Map */}
            <div className="lg:col-span-7 w-full h-[380px] rounded-3xl overflow-hidden shadow-lg border border-border-color/40 relative">
              <iframe 
                src="https://maps.google.com/maps?q=Mahally%20Hospital,%20Karinkallathani&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Mahally Hospital Location Map"
                className="w-full h-full"
              />
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
