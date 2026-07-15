import React, { useState, useEffect } from 'react';
import { Calendar, Phone, Mail, Clock, ArrowRight, RefreshCw, Check } from 'lucide-react';
import { doctorsData } from '../data/doctorsData';

const departmentsList = [
  "Cardiology",
  "Dental Care",
  "Dermatology",
  "Diabetes",
  "Endocrinology",
  "Ear, Nose & Throat (ENT)",
  "Gastroenterology",
  "General Medicine",
  "Gynecology",
  "Neurology",
  "Orthopedics",
  "Pediatrics",
  "PMR (Rehab)",
  "Pulmonology"
];

const doctorsList = doctorsData.map(doc => {
  let dept = doc.department;
  if (dept === "Gynaecology & Infertility") dept = "Gynecology";
  if (dept === "General Medicine & Diabetes") dept = "General Medicine";
  return {
    name: doc.name,
    department: dept
  };
});

// Bidirectional mappings: which departments fit each doctor
const doctorToDeptsMapping = {
  "Dr. Yasir Abdullah V": ["Pulmonology"],
  "Dr. Ameena Shagal. S": ["Gynecology"],
  "Dr. Jophin John": ["Gastroenterology"],
  "Dr. shamjith. AA": ["General Medicine", "Diabetes", "Cardiology", "Dermatology", "Endocrinology"],
  "Dr. Shahin K E": ["PMR (Rehab)", "Neurology"],
  "Dr. Jithin Peter George": ["Orthopedics"],
  "Dr. Shabeeha": ["Ear, Nose & Throat (ENT)"],
  "Dr. Jaseela Aboobacker": ["General Medicine", "Dermatology", "Neurology"],
  "Dr. Bahaudheen": ["Dental Care"],
  "Dr. Nasmiya PP": ["Dental Care"],
  "Dr. Vaishnav Varma M": ["General Medicine", "Cardiology", "Endocrinology", "Pediatrics", "Neurology"],
  "Dr. Mohammed Ashik P": ["General Medicine", "Diabetes", "Cardiology", "Endocrinology"]
};

// Department-to-doctors mapping
const getDoctorsForDepartment = (deptName) => {
  if (!deptName) return doctorsList;
  const normalized = deptName.toLowerCase();
  
  return doctorsList.filter(doc => {
    const docDept = doc.department.toLowerCase();
    
    // Custom cross-mappings (matching clinical assess referrers)
    if (normalized === 'cardiology') {
      return doc.name.includes('shamjith') || doc.name.includes('Vaishnav') || doc.name.includes('Ashik');
    }
    if (normalized === 'diabetes') {
      return doc.name.includes('shamjith') || doc.name.includes('Ashik');
    }
    if (normalized === 'dermatology') {
      return doc.name.includes('shamjith') || doc.name.includes('Jaseela') || doc.name.includes('Vaishnav');
    }
    if (normalized === 'endocrinology') {
      return doc.name.includes('shamjith') || doc.name.includes('Vaishnav') || doc.name.includes('Ashik');
    }
    if (normalized === 'pediatrics') {
      return doc.name.includes('Jaseela') || doc.name.includes('Vaishnav');
    }
    if (normalized === 'neurology') {
      return doc.name.includes('Shahin') || doc.name.includes('Jaseela') || doc.name.includes('Vaishnav');
    }
    
    // Exact checks
    if (normalized === 'pulmonology') return docDept.includes('pulmonology');
    if (normalized === 'gynecology') return docDept.includes('gynaecology') || docDept.includes('gynecology');
    if (normalized === 'gastroenterology') return docDept.includes('gastroenterology');
    if (normalized === 'pmr (rehab)') return docDept.includes('pmr');
    if (normalized === 'orthopedics') return docDept.includes('orthopedics');
    if (normalized === 'ear, nose & throat (ent)') return docDept.includes('ent');
    if (normalized === 'dental care') return docDept.includes('dental');
    if (normalized === 'general medicine') return docDept.includes('general medicine');
    
    return docDept.includes(normalized);
  });
};

export default function BookingPage({ initialDoctorName, setInitialDoctorName }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [department, setDepartment] = useState('');
  const [doctor, setDoctor] = useState('');
  const [date, setDate] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const todayStr = new Date().toISOString().split('T')[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Pre-load from doctor cards click
  useEffect(() => {
    if (initialDoctorName) {
      setDoctor(initialDoctorName);
      // Auto-set the first logical department for this doctor
      const depts = doctorToDeptsMapping[initialDoctorName] || [];
      if (depts.length > 0) {
        setDepartment(depts[0]);
      }
      // Reset parameter to avoid stuck states on next clicks
      if (setInitialDoctorName) {
        setInitialDoctorName('');
      }
    }
  }, [initialDoctorName]);

  // Handlers for cross filtering
  const handleDepartmentChange = (e) => {
    const newDept = e.target.value;
    setDepartment(newDept);

    // If a doctor was selected, check if they match the new department
    if (doctor) {
      const allowedDepts = doctorToDeptsMapping[doctor] || [];
      if (newDept && !allowedDepts.includes(newDept)) {
        setDoctor(''); // Reset doctor since they don't belong to the selected department
      }
    }
  };

  const handleDoctorChange = (e) => {
    const newDoc = e.target.value;
    setDoctor(newDoc);

    // Auto set the department to match the doctor
    if (newDoc) {
      const allowedDepts = doctorToDeptsMapping[newDoc] || [];
      if (allowedDepts.length > 0) {
        // If current department is not in the allowed departments, select the first allowed department
        if (!department || !allowedDepts.includes(department)) {
          setDepartment(allowedDepts[0]);
        }
      }
    }
  };

  const handleResetForm = () => {
    setName('');
    setPhone('');
    setEmail('');
    setDepartment('');
    setDoctor('');
    setDate('');
    setFormSubmitted(false);
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();

    if (!name || !phone || !department || !doctor || !date) {
      alert("Please fill in all required fields.");
      return;
    }

    // Prefill whatsapp text details
    const whatsappNumber = "9061808050";
    const textMsg = `*Mahally Hospital Appointment Booking*\n\n` +
      `*Patient Name:* ${name}\n` +
      `*Phone:* ${phone}\n` +
      `*Email:* ${email ? email : 'N/A'}\n` +
      `*Department:* ${department}\n` +
      `*Specialist Doctor:* ${doctor}\n` +
      `*Appointment Date:* ${date}`;

    const encodedMsg = encodeURIComponent(textMsg);
    const whatsappUrl = `https://wa.me/91${whatsappNumber}?text=${encodedMsg}`;
    
    setFormSubmitted(true);
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 800);
  };

  // Get filtered lists based on selections
  const filteredDoctors = getDoctorsForDepartment(department);
  
  // Filter departments based on selected doctor
  const filteredDepartments = doctor 
    ? (doctorToDeptsMapping[doctor] || departmentsList) 
    : departmentsList;

  return (
    <div className="w-full bg-[#F5F7F8]">
      
      {/* Hero Header Section */}
      <section className="relative w-full bg-gradient-to-br from-[#224356] to-[#16303F] text-white py-16 md:py-24 text-center overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#418C7D]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#418C7D]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="w-12 h-[2.5px] bg-[#418C7D] mx-auto mb-4 rounded-full" />
          <p className="text-xs sm:text-sm font-semibold text-[#418C7D] uppercase tracking-widest mb-3">
            Hassle-Free Booking
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-white font-normal tracking-wide leading-tight mb-6">
            Book An Appointment
          </h1>
          <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-sans">
            Submit your clinical details below to verify availability. Booking confirmation details are sent directly to your WhatsApp.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="w-full py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Left Column: Form Details Info */}
            <div className="lg:col-span-5 flex flex-col justify-between text-left space-y-8">
              <div>
                <h3 className="text-2xl font-serif text-primary font-normal tracking-wide mb-6">
                  Clinical Care Consultation
                </h3>
                <p className="text-muted-text text-sm sm:text-base leading-relaxed mb-6 font-sans">
                  Mahally Hospital facilitates rapid booking routing. Please choose your desired clinic department first to see available specialists, or select your preferred physician to auto-align the department.
                </p>

                <div className="space-y-4">
                  
                  <div className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-border-color/60">
                    <div className="w-10 h-10 rounded-xl bg-accent-light text-accent flex items-center justify-center flex-shrink-0">
                      <Clock size={18} />
                    </div>
                    <div>
                      <span className="text-xs text-muted-text font-bold uppercase tracking-wider block">Clinical Hours</span>
                      <span className="text-sm font-bold text-primary font-sans">All Day (24 Hours Emergency Care)</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-border-color/60">
                    <div className="w-10 h-10 rounded-xl bg-accent-light text-accent flex items-center justify-center flex-shrink-0">
                      <Phone size={18} />
                    </div>
                    <div>
                      <span className="text-xs text-muted-text font-bold uppercase tracking-wider block">Call Helpline</span>
                      <span className="text-sm font-bold text-primary font-sans">9061808050</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-border-color/60">
                    <div className="w-10 h-10 rounded-xl bg-accent-light text-accent flex items-center justify-center flex-shrink-0">
                      <Mail size={18} />
                    </div>
                    <div>
                      <span className="text-xs text-muted-text font-bold uppercase tracking-wider block">Support Email</span>
                      <span className="text-sm font-bold text-primary font-sans">mahallycare@gmail.com</span>
                    </div>
                  </div>

                </div>
              </div>

              {/* Cover Card Graphic */}
              <div className="bg-[#224356] rounded-3xl p-6 text-white text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-xl" />
                <h4 className="font-serif text-lg mb-2">WhatsApp Redirect</h4>
                <p className="text-xs text-white/70 leading-relaxed max-w-xs mx-auto mb-4">
                  Once you click confirm booking, the form details are prefilled in your WhatsApp message panel to chat instantly.
                </p>
                <div className="inline-flex items-center gap-1.5 text-[10px] uppercase font-bold text-accent tracking-widest bg-white/5 px-4 py-2 rounded-full border border-white/10">
                  Secure Chat Active
                </div>
              </div>
            </div>

            {/* Right Column: Symmetrical Interactive Form Card */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-8 border border-border-color/60 shadow-[0_4px_30px_rgba(0,0,0,0.02)] text-left relative overflow-hidden">
                
                {formSubmitted && (
                  <div className="absolute inset-0 bg-[#224356]/95 backdrop-blur-sm z-50 flex flex-col items-center justify-center text-center p-6 text-white transition-all duration-300">
                    <div className="w-16 h-16 rounded-full bg-accent text-white flex items-center justify-center mb-6 animate-bounce">
                      <Check size={32} className="stroke-[2.5]" />
                    </div>
                    <h3 className="text-2xl font-serif mb-2">Form Submission Complete</h3>
                    <p className="text-white/80 text-sm max-w-sm mx-auto leading-relaxed mb-6 font-sans">
                      Redirecting you to WhatsApp Web chat to finalize your consultation timing.
                    </p>
                    <button 
                      onClick={handleResetForm}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-accent uppercase tracking-wider bg-white/10 hover:bg-white/20 py-2.5 px-6 rounded-full transition-all cursor-pointer"
                    >
                      <RefreshCw size={14} />
                      <span>Start New Form</span>
                    </button>
                  </div>
                )}

                <div className="flex justify-between items-center mb-8">
                  <h3 className="text-xl font-serif text-primary font-normal">
                    Enter Booking Details
                  </h3>
                  <button 
                    onClick={handleResetForm}
                    className="flex items-center gap-1 text-xs text-accent hover:text-[#316B5F] uppercase font-bold tracking-wider cursor-pointer bg-transparent border-none"
                    title="Reset Form Fields"
                  >
                    <RefreshCw size={12} />
                    <span>Reset</span>
                  </button>
                </div>

                <form onSubmit={handleBookingSubmit} className="space-y-6">
                  
                  {/* Name field */}
                  <div>
                    <label className="block text-xs font-bold uppercase text-primary tracking-wider mb-2">
                      Patient Name <span className="text-[#E74C3C]">*</span>
                    </label>
                    <input 
                      type="text" 
                      required
                      placeholder="Enter full name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-[#F5F7F8] border border-border-color/60 focus:border-[#418C7D]/60 focus:bg-white rounded-xl py-3 px-4 text-sm text-primary transition-all duration-200 outline-none"
                    />
                  </div>

                  {/* Contact phone field */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase text-primary tracking-wider mb-2">
                        Phone Number <span className="text-[#E74C3C]">*</span>
                      </label>
                      <input 
                        type="tel" 
                        required
                        placeholder="Enter your phone number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-[#F5F7F8] border border-border-color/60 focus:border-[#418C7D]/60 focus:bg-white rounded-xl py-3 px-4 text-sm text-primary transition-all duration-200 outline-none"
                      />
                    </div>

                    {/* Email address field */}
                    <div>
                      <label className="block text-xs font-bold uppercase text-primary tracking-wider mb-2">
                        Email Address <span className="text-muted-text/80 font-normal">(Optional)</span>
                      </label>
                      <input 
                        type="email" 
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-[#F5F7F8] border border-border-color/60 focus:border-[#418C7D]/60 focus:bg-white rounded-xl py-3 px-4 text-sm text-primary transition-all duration-200 outline-none"
                      />
                    </div>
                  </div>

                  {/* Dropdown 1: Department */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase text-primary tracking-wider mb-2">
                        Choose Department <span className="text-[#E74C3C]">*</span>
                      </label>
                      <select
                        required
                        value={department}
                        onChange={handleDepartmentChange}
                        className="w-full bg-[#F5F7F8] border border-border-color/60 focus:border-[#418C7D]/60 focus:bg-white rounded-xl py-3.5 px-4 text-sm text-primary transition-all duration-200 outline-none appearance-none cursor-pointer"
                      >
                        <option value="">-- Select Department --</option>
                        {filteredDepartments.map((deptName) => (
                          <option key={deptName} value={deptName}>
                            {deptName}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Dropdown 2: Doctor (Filtered) */}
                    <div>
                      <label className="block text-xs font-bold uppercase text-primary tracking-wider mb-2">
                        Choose Doctor <span className="text-[#E74C3C]">*</span>
                      </label>
                      <select
                        required
                        value={doctor}
                        onChange={handleDoctorChange}
                        className="w-full bg-[#F5F7F8] border border-border-color/60 focus:border-[#418C7D]/60 focus:bg-white rounded-xl py-3.5 px-4 text-sm text-primary transition-all duration-200 outline-none appearance-none cursor-pointer"
                      >
                        <option value="">-- Select Specialist --</option>
                        {filteredDoctors.map((doc) => (
                          <option key={doc.name} value={doc.name}>
                            {doc.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Date Input Calendar field */}
                  <div>
                    <label className="block text-xs font-bold uppercase text-primary tracking-wider mb-2">
                      Appointment Date <span className="text-[#E74C3C]">*</span>
                    </label>
                    <input 
                      type="date" 
                      required
                      min={todayStr}
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full bg-[#F5F7F8] border border-border-color/60 focus:border-[#418C7D]/60 focus:bg-white rounded-xl py-3 px-4 text-sm text-primary transition-all duration-200 outline-none cursor-pointer"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full bg-accent hover:bg-accent-dark text-white font-bold text-sm tracking-wider uppercase rounded-xl py-4 transition-all duration-300 shadow-md hover:shadow-lg active:scale-98 cursor-pointer flex items-center justify-center gap-2"
                    >
                      <span>Confirm Booking</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>

                </form>

              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
