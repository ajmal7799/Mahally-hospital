import React from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  ArrowRight,
  MessageSquare
} from 'lucide-react';

export default function Footer({ setCurrentPage }) {
  return (
    <footer className="bg-[#224356] text-[#F5F7F8] pt-16 pb-8 border-t border-white/10">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-12">
          
          {/* Column 1: Hospital Logo & About Narrative */}
          <div className="lg:col-span-4 flex flex-col items-start text-left">
            <div className="bg-white p-2.5 rounded-2xl inline-block shadow-md mb-6 border border-white/10 transition-transform duration-300 hover:scale-[1.02]">
              <img 
                src="/logo/logo.jpg" 
                alt="Mahally Hospital Logo" 
                className="h-12 w-auto object-contain rounded-lg"
              />
            </div>
            <p className="text-white/80 text-sm leading-relaxed mb-6 max-w-sm">
              Mahally Hospital is dedicated to providing high-quality, patient-centric 
              healthcare services in Karinkallathani. Combining advanced diagnostics with 
              compassionate medical practitioners.
            </p>
            
            {/* Social Network Icon Badges (Inline SVGs for reliable compilation) */}
            <div className="flex gap-3">
              <a 
                href="https://www.instagram.com/mahally_hospital_?igsh=amFrbnpuN3o3dXZ3" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#418C7D] border border-white/10 text-white flex items-center justify-center transition-all duration-300 shadow-sm"
                aria-label="Instagram Page"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a 
                href="https://www.facebook.com/share/1HVRYPxiTw/?mibextid=wwXIfr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#418C7D] border border-white/10 text-white flex items-center justify-center transition-all duration-300 shadow-sm"
                aria-label="Facebook Page"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links / Facilities */}
          <div className="lg:col-span-2 flex flex-col items-start text-left">
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-6 relative">
              Our Facilities
              <span className="absolute bottom-[-6px] left-0 w-6 h-[1.5px] bg-[#418C7D]" />
            </h4>
            <ul className="space-y-3.5 w-full">
              {[
                { name: "Our Specialties", href: "#specialties" },
                { name: "Lab Services", href: "#services" },
                { name: "X-Ray & Diagnostics", href: "#services" },
                { name: "24/7 Pharmacy", href: "#services" },
                { name: "24/7 Casualty & Trauma", href: "#services" }
              ].map((link, idx) => (
                <li key={idx} className="group flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors duration-200">
                  <ArrowRight size={12} className="text-[#418C7D] transition-transform duration-200 group-hover:translate-x-1" />
                  <a 
                    href={link.href}
                    onClick={() => {
                      if (link.name === "Our Specialties" && setCurrentPage) {
                        setCurrentPage('home');
                      }
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Helplines */}
          <div className="lg:col-span-3 flex flex-col items-start text-left">
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-6 relative">
              Emergency Contact
              <span className="absolute bottom-[-6px] left-0 w-6 h-[1.5px] bg-[#418C7D]" />
            </h4>
            <ul className="space-y-4 text-sm text-white/80">
              <li className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-white/5 text-[#418C7D] flex items-center justify-center flex-shrink-0 mt-0.5 border border-white/10">
                  <Phone size={16} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-[#418C7D] uppercase tracking-wider">Call Helpline</p>
                  <a href="tel:9061808050" className="text-base font-bold text-white hover:text-[#418C7D] transition-colors duration-200">
                    9061808050
                  </a>
                </div>
              </li>
              
              <li className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-white/5 text-[#418C7D] flex items-center justify-center flex-shrink-0 mt-0.5 border border-white/10">
                  <MessageSquare size={16} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-[#418C7D] uppercase tracking-wider">WhatsApp Support</p>
                  <a href="https://wa.me/9061808050" target="_blank" rel="noopener noreferrer" className="text-base font-bold text-white hover:text-[#418C7D] transition-colors duration-200">
                    9061808050
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-white/5 text-[#418C7D] flex items-center justify-center flex-shrink-0 mt-0.5 border border-white/10">
                  <Clock size={16} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-[#418C7D] uppercase tracking-wider">Working Hours</p>
                  <p className="text-white font-semibold mt-0.5">24/7 Casualty & Emergency</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Location Directions & Maps */}
          <div className="lg:col-span-3 flex flex-col items-start text-left">
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-6 relative">
              Our Location
              <span className="absolute bottom-[-6px] left-0 w-6 h-[1.5px] bg-[#418C7D]" />
            </h4>
            <div className="flex flex-col items-start w-full">
              <div className="flex items-start gap-3 text-sm text-white/80 mb-5 leading-relaxed">
                <MapPin size={18} className="text-[#418C7D] flex-shrink-0 mt-0.5" />
                <p>
                  Karinkallathani, Malappuram district,<br />
                  Kerala, India - 679322
                </p>
              </div>

              {/* Symmetrical Maps Button */}
              <a 
                href="https://maps.app.goo.gl/6tjG5WN8ZNSv1X2C8?g_st=iw" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#418C7D] hover:bg-[#316B5F] text-white font-bold text-xs tracking-wider uppercase rounded-full py-3.5 px-6 transition-all duration-300 shadow-md hover:shadow-lg hover:translate-y-[-1px]"
              >
                <MapPin size={14} />
                <span>Get Directions</span>
              </a>
            </div>
          </div>

        </div>

        {/* Divider border */}
        <div className="w-full h-[1px] bg-white/10 my-8" />

        {/* Bottom copyright details */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Mahally Hospital. All rights reserved.</p>
          <div className="flex gap-4">
            <a 
              href="#" 
              className="hover:text-white transition-colors"
              onClick={(e) => {
                e.preventDefault();
                if (setCurrentPage) {
                  setCurrentPage('about');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
            >
              About Us
            </a>
            <span>•</span>
            <a 
              href="#doctors" 
              className="hover:text-white transition-colors"
              onClick={() => {
                if (setCurrentPage) {
                  setCurrentPage('home');
                }
              }}
            >
              Our Doctors
            </a>
            <span>•</span>
            <a 
              href="#" 
              className="hover:text-white transition-colors"
              onClick={(e) => {
                e.preventDefault();
                if (setCurrentPage) {
                  setCurrentPage('specialties');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
            >
              Specialties
            </a>
            <span>•</span>
            <a 
              href="#" 
              className="hover:text-white transition-colors"
              onClick={(e) => {
                e.preventDefault();
                if (setCurrentPage) {
                  setCurrentPage('testimonials');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
            >
              Testimonials
            </a>
            <span>•</span>
            <a 
              href="#" 
              className="hover:text-white transition-colors"
              onClick={(e) => {
                e.preventDefault();
                if (setCurrentPage) {
                  setCurrentPage('videos');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
            >
              Awareness Videos
            </a>
            <span>•</span>
            <a 
              href="#" 
              className="hover:text-white transition-colors"
              onClick={(e) => {
                e.preventDefault();
                if (setCurrentPage) {
                  setCurrentPage('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
            >
              Contact
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
