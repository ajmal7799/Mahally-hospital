import React, { useState, useEffect } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare,
  Send,
  Calendar
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getTodayName = () => {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const todayIndex = new Date().getDay();
    return daysOfWeek[todayIndex];
  };

  const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const todayName = getTodayName();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Compile WhatsApp message text data
    const messageText = `*Mahally Hospital Contact Form*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Subject:* ${formData.subject}\n` +
      `*Email:* ${formData.email || 'Not provided'}\n` +
      `*Message:* ${formData.message || 'Not provided'}`;

    // Open WhatsApp tab targeting 9061808050
    const whatsappUrl = `https://wa.me/919061808050?text=${encodeURIComponent(messageText)}`;
    window.open(whatsappUrl, '_blank');
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
            Reach Out to Us
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-white font-normal tracking-wide leading-tight mb-6">
            Contact Our Clinic
          </h1>
          <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-sans">
            Need appointment details or have clinical queries? Fill out our form and connect directly with our WhatsApp helpdesk.
          </p>
        </div>
      </section>

      {/* Grid Container split into Form & Contacts */}
      <section className="w-full py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Contact Details, Scheduler, and Location Map */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              
              {/* Contact Details Card */}
              <div className="bg-white p-8 rounded-3xl border border-border-color/60 shadow-[0_4px_25px_rgba(0,0,0,0.01)] text-left space-y-6">
                <h3 className="text-xl font-serif text-primary font-normal">Contact Information</h3>
                
                <div className="space-y-4">
                  {/* Address */}
                  <div className="flex items-start gap-3.5">
                    <MapPin size={18} className="text-[#418C7D] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[10px] font-bold text-accent uppercase tracking-wider">Our Address</p>
                      <p className="text-sm text-primary/80 leading-relaxed font-semibold">
                        Karinkallathani, Kerala 679341
                      </p>
                    </div>
                  </div>

                  {/* Helpline Numbers (Directly listed without descriptors) */}
                  <div className="flex items-start gap-3.5">
                    <Phone size={18} className="text-[#418C7D] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[10px] font-bold text-accent uppercase tracking-wider">Helpline Contacts</p>
                      <p className="text-sm text-primary/80 font-bold space-y-1.5">
                        <a href="tel:9061808050" className="block hover:text-[#418C7D] transition-colors">
                          9061808050
                        </a>
                        <a href="tel:8136808063" className="block hover:text-[#418C7D] transition-colors">
                          8136808063
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3.5">
                    <Mail size={18} className="text-[#418C7D] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[10px] font-bold text-accent uppercase tracking-wider">Email Inquiry</p>
                      <a href="mailto:mahallycare@gmail.com" className="text-sm text-primary/80 font-semibold hover:text-[#418C7D] transition-colors">
                        mahallycare@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Social media connections */}
                <div className="flex gap-3 pt-4 border-t border-secondary-bg">
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

              {/* Dynamic Daily Operating Scheduler Card */}
              <div className="bg-white border border-border-color/60 rounded-3xl overflow-hidden shadow-[0_4px_25px_rgba(0,0,0,0.01)]">
                <div className="bg-primary/5 px-6 py-4 border-b border-border-color/60 text-left">
                  <h4 className="text-sm font-bold text-primary flex items-center gap-2">
                    <Clock size={16} className="text-[#418C7D]" />
                    <span>Clinical Hours</span>
                  </h4>
                </div>
                <div className="divide-y divide-border-color/40 font-sans text-left">
                  {weekDays.map((day) => {
                    const isToday = day === todayName;
                    return (
                      <div 
                        key={day}
                        className={`flex items-center justify-between px-6 py-3.5 transition-colors ${
                          isToday ? 'bg-[#DCEEE9]/40 text-[#418C7D] font-bold' : 'text-primary/80'
                        }`}
                      >
                        <span className="text-sm">
                          {day} {isToday ? '(Today)' : ''}
                        </span>
                        <span className={`text-xs px-3 py-1.5 rounded-full font-bold tracking-wider ${
                          isToday 
                            ? 'bg-[#418C7D] text-white' 
                            : 'bg-[#F5F7F8] text-[#224356]'
                        }`}>
                          Open 24 Hours
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Embedded Google Map card */}
              <div className="w-full h-[300px] rounded-3xl overflow-hidden shadow-lg border border-border-color/40 relative">
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

            {/* Right Column: Premium Contact Form */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-border-color/60 shadow-[0_4px_25px_rgba(0,0,0,0.01)] text-left">
              <h3 className="text-2xl font-serif text-primary mb-2 font-normal">Send Us A Message</h3>
              <p className="text-xs sm:text-sm text-primary/65 mb-8">
                Fields marked with an asterisk (<span className="text-danger">*</span>) are required. Email and message fields are optional.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Grid Inputs row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-xs font-bold text-primary uppercase tracking-wide">
                      Full Name <span className="text-danger">*</span>
                    </label>
                    <input 
                      type="text" 
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      className="w-full bg-[#F5F7F8] border border-border-color/60 focus:border-[#418C7D] rounded-xl px-4 py-3 text-sm text-primary font-sans focus:outline-none transition-all"
                    />
                  </div>

                  {/* Phone Input */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="phone" className="text-xs font-bold text-primary uppercase tracking-wide">
                      Phone Number <span className="text-danger">*</span>
                    </label>
                    <input 
                      type="tel" 
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Your phone number"
                      className="w-full bg-[#F5F7F8] border border-border-color/60 focus:border-[#418C7D] rounded-xl px-4 py-3 text-sm text-primary font-sans focus:outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="subject" className="text-xs font-bold text-primary uppercase tracking-wide">
                    Subject / Department <span className="text-danger">*</span>
                  </label>
                  <input 
                    type="text" 
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Enter message subject"
                    className="w-full bg-[#F5F7F8] border border-border-color/60 focus:border-[#418C7D] rounded-xl px-4 py-3 text-sm text-primary font-sans focus:outline-none transition-all"
                  />
                </div>

                {/* Email Input (Optional) */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-xs font-bold text-primary uppercase tracking-wide">
                    Email Address <span className="text-white/50 text-[10px] lowercase font-normal italic">(optional)</span>
                  </label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your email address"
                    className="w-full bg-[#F5F7F8] border border-border-color/60 focus:border-[#418C7D] rounded-xl px-4 py-3 text-sm text-primary font-sans focus:outline-none transition-all"
                  />
                </div>

                {/* Message Input (Optional) */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-xs font-bold text-primary uppercase tracking-wide">
                    Your Message <span className="text-white/50 text-[10px] lowercase font-normal italic">(optional)</span>
                  </label>
                  <textarea 
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Write details about your symptoms or medical inquiry here..."
                    className="w-full bg-[#F5F7F8] border border-border-color/60 focus:border-[#418C7D] rounded-xl px-4 py-3 text-sm text-primary font-sans focus:outline-none transition-all resize-none"
                  />
                </div>

                {/* Send Button redirecting to WhatsApp */}
                <button 
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2.5 bg-[#418C7D] hover:bg-[#316B5F] text-white font-bold text-xs tracking-wider uppercase rounded-full py-4 px-6 transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer mt-4"
                >
                  <MessageSquare size={16} />
                  <span>Send Message via WhatsApp</span>
                </button>

              </form>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
