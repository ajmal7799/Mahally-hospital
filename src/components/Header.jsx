import React, { useState } from 'react';
import { 
  Phone, 
  Calendar, 
  Stethoscope, 
  Menu, 
  X, 
  ChevronDown, 
  MessageSquare
} from 'lucide-react';

export default function Header({ 
  showContactModal, 
  setShowContactModal, 
  handleActionPlaceholder, 
  setSelectedSpecialtyIndex, 
  currentPage, 
  setCurrentPage,
  setSelectedSpecialtyName
}) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const [drawerSpecialtiesOpen, setDrawerSpecialtiesOpen] = useState(false);
  const [drawerBranchesOpen, setDrawerBranchesOpen] = useState(false);

  const phoneNumber = "9061808050";
  
  // Handlers
  const handleEmergencyClick = (e) => {
    e.preventDefault();
    setShowContactModal(true);
  };

  const handleSpecialtyClick = (specialtyName) => {
    if (setCurrentPage) {
      setCurrentPage('specialty-detail');
    }
    if (setSelectedSpecialtyName) {
      setSelectedSpecialtyName(specialtyName);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'doctors', label: 'Our Doctors' },
    { 
      id: 'specialties', 
      label: 'Specialties', 
      hasDropdown: true,
      items: [
        'Cardiology',
        'Dental Care',
        'Dermatology',
        'Diabetes',
        'Endocrinology',
        'Ear, Nose & Throat (ENT)',
        'Gastroenterology',
        'General Medicine',
        'Gynecology',
        'Neurology',
        'Orthopedics',
        'Pediatrics',
        'PMR (Rehab)',
        'Pulmonology'
      ] 
    },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'videos', label: 'Awareness Videos' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="w-full">
        {/* DESKTOP TOP HEADER */}
        <div className="hidden lg:flex max-w-7xl mx-auto px-6 py-4 justify-between items-center">
          <div className="flex items-center">
            <a 
              href="#" 
              className="flex items-center gap-4"
              onClick={(e) => {
                e.preventDefault();
                setCurrentPage('home');
                setActiveTab('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <img 
                src="/logo/logo.jpg" 
                alt="Health Point / Mahally Hospital Logo" 
                className="h-14 w-auto object-contain" 
                style={{ clipPath: 'inset(2px)' }}
              />
            </a>
            {/* Divider Line next to desktop logo has been removed as requested */}
          </div>

          <div className="flex items-center gap-0">
            {/* Emergency Action Box */}
            <button 
              className="group flex items-center gap-3 px-6 border-r border-border-color bg-transparent text-left transition-opacity hover:opacity-85 focus:outline-none cursor-pointer" 
              onClick={handleEmergencyClick}
            >
              <div className="w-11 h-11 rounded-full border border-danger-light flex items-center justify-center text-danger bg-danger-light transition-all duration-250 animate-[pulse_2s_infinite]">
                <Phone size={20} fill="currentColor" />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[10px] font-bold uppercase text-muted-text tracking-wider">Emergency</span>
                <span className="text-sm font-extrabold text-danger">{phoneNumber}</span>
              </div>
            </button>

            {/* Book Appointment Action Box */}
            <button 
              className="group flex items-center gap-3 px-6 border-r border-border-color bg-transparent text-left transition-opacity hover:opacity-85 focus:outline-none cursor-pointer" 
              onClick={() => {
                if (setCurrentPage) {
                  setCurrentPage('booking');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
            >
              <div className="w-11 h-11 rounded-full border border-border-color flex items-center justify-center text-primary bg-white transition-all duration-250 group-hover:border-accent group-hover:text-accent group-hover:bg-accent-light">
                <Calendar size={20} />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[10px] font-bold uppercase text-muted-text tracking-wider">Book An</span>
                <span className="text-sm font-bold text-primary">Appointment</span>
              </div>
            </button>

            {/* Find Doctor Action Box */}
            <button 
              className="group flex items-center gap-3 px-6 bg-transparent text-left transition-opacity hover:opacity-85 focus:outline-none cursor-pointer pr-0" 
              onClick={() => {
                if (setCurrentPage) {
                  setCurrentPage('home');
                  setActiveTab('home');
                  setTimeout(() => {
                    const docEl = document.getElementById('doctors');
                    if (docEl) {
                      docEl.scrollIntoView({ behavior: 'smooth' });
                    }
                  }, 100);
                }
              }}
            >
              <div className="w-11 h-11 rounded-full border border-border-color flex items-center justify-center text-primary bg-white transition-all duration-250 group-hover:border-accent group-hover:text-accent group-hover:bg-accent-light">
                <Stethoscope size={20} />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[10px] font-bold uppercase text-muted-text tracking-wider">Find A</span>
                <span className="text-sm font-bold text-primary">Doctor</span>
              </div>
            </button>
          </div>
        </div>

        {/* DESKTOP NAVIGATION BAR */}
        <nav className="hidden lg:block bg-primary w-full border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 flex items-center justify-start">
            <ul className="flex list-none m-0 p-0">
              {navLinks.map((link) => (
                <li 
                  key={link.id} 
                  className={`relative group/nav ${activeTab === link.id ? 'active-menu' : ''}`}
                >
                  {link.hasDropdown ? (
                    <>
                      <a 
                        href="#"
                        className="flex items-center gap-1.5 text-white text-xs font-semibold uppercase tracking-wider px-5 py-4 cursor-pointer transition-all duration-250 hover:text-accent-light hover:bg-white/5"
                        onClick={(e) => {
                          e.preventDefault();
                          if (setCurrentPage) {
                            setCurrentPage('specialties');
                            setActiveTab('specialties');
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }
                        }}
                      >
                        {link.label} <ChevronDown size={14} />
                      </a>
                      <ul className="absolute top-full left-0 bg-white shadow-lg rounded-b border-t-[3px] border-accent min-w-[230px] list-none py-2 opacity-0 invisible translate-y-2 group-hover/nav:opacity-100 group-hover/nav:visible group-hover/nav:translate-y-0 transition-all duration-300 cubic-bezier(0.16, 1, 0.3, 1) z-50">
                        {link.items.map((item, idx) => (
                          <li key={idx} className="w-full">
                            <a 
                              href="#" 
                              className="block px-5 py-2.5 text-body-text text-xs font-medium transition-all duration-200 hover:bg-secondary-bg hover:text-accent-dark hover:pl-6"
                              onClick={(e) => {
                                e.preventDefault();
                                handleSpecialtyClick(item);
                                setActiveTab(link.id);
                              }}
                            >
                              {item}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <a 
                      href={link.id === 'home' || link.id === 'about' || link.id === 'testimonials' || link.id === 'videos' || link.id === 'contact' ? '#' : `#${link.id}`} 
                      className={`flex items-center gap-1.5 text-white text-xs font-semibold uppercase tracking-wider px-5 py-4 cursor-pointer transition-all duration-250 hover:text-accent-light hover:bg-white/5 ${
                        (link.id === 'about' ? currentPage === 'about' : link.id === 'testimonials' ? currentPage === 'testimonials' : link.id === 'videos' ? currentPage === 'videos' : link.id === 'contact' ? currentPage === 'contact' : currentPage === 'home' && activeTab === link.id) ? 'text-accent-light after:content-[""] after:absolute after:bottom-0 after:left-5 after:right-5 after:h-[3px] after:bg-accent after:rounded-t' : ''
                      }`}
                      onClick={() => {
                        if (link.id === 'about') {
                          setCurrentPage('about');
                          setActiveTab('about');
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        } else if (link.id === 'testimonials') {
                          setCurrentPage('testimonials');
                          setActiveTab('testimonials');
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        } else if (link.id === 'videos') {
                          setCurrentPage('videos');
                          setActiveTab('videos');
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        } else if (link.id === 'contact') {
                          setCurrentPage('contact');
                          setActiveTab('contact');
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        } else {
                          setCurrentPage('home');
                          setActiveTab(link.id);
                          if (link.id === 'home') {
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }
                        }
                      }}
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* MOBILE HEADER ROW */}
        <div className="flex lg:hidden justify-between items-center px-4 py-3 bg-white">
          <a 
            href="#" 
            className="flex items-center gap-4"
            onClick={(e) => {
              e.preventDefault();
              setCurrentPage('home');
              setActiveTab('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <img 
              src="/logo/logo.jpg" 
              alt="Health Point / Mahally Hospital Logo" 
              className="h-10 w-auto object-contain" 
              style={{ clipPath: 'inset(2px)' }}
            />
          </a>
          {/* Flat Hamburger button matching the visual reference styling without border */}
          <button 
            className="bg-transparent border-none p-1 text-accent flex items-center justify-center active:opacity-75" 
            onClick={() => setIsDrawerOpen(true)}
            aria-label="Open Menu"
          >
            <Menu size={26} />
          </button>
        </div>

        {/* MOBILE QUICK ACTIONS ROW (Zains Mobile Design adaptation with custom color theme) */}
        <div className="flex lg:hidden items-center justify-between bg-white border-t border-b border-border-color py-3 px-2">
          {/* Emergency Item */}
          <a 
            href="#" 
            className="flex-1 flex flex-col items-center justify-center text-center active:opacity-75" 
            onClick={handleEmergencyClick}
          >
            <span className="text-[9px] font-semibold uppercase tracking-wider text-muted-text">Emergency</span>
            <span className="text-xs font-bold text-danger mt-0.5">{phoneNumber}</span>
          </a>

          {/* Vertical Divider */}
          <div className="w-[1px] h-7 bg-border-color"></div>

          {/* Appointment Item */}
          <button 
            className="flex-1 flex flex-col items-center justify-center text-center active:opacity-75 border-none bg-transparent" 
            onClick={() => {
              if (setCurrentPage) {
                setCurrentPage('booking');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
          >
            <span className="text-[9px] font-semibold uppercase tracking-wider text-muted-text">Book An</span>
            <span className="text-xs font-bold text-primary mt-0.5">Appointment</span>
          </button>

          {/* Vertical Divider */}
          <div className="w-[1px] h-7 bg-border-color"></div>

          {/* Find Doctor Item */}
          <button 
            className="flex-1 flex flex-col items-center justify-center text-center active:opacity-75 border-none bg-transparent" 
            onClick={() => {
              if (setCurrentPage) {
                setCurrentPage('home');
                setActiveTab('home');
                setTimeout(() => {
                  const docEl = document.getElementById('doctors');
                  if (docEl) {
                    docEl.scrollIntoView({ behavior: 'smooth' });
                  }
                }, 100);
              }
            }}
          >
            <span className="text-[9px] font-semibold uppercase tracking-wider text-muted-text">Find A</span>
            <span className="text-xs font-bold text-primary mt-0.5">Doctor</span>
          </button>
        </div>

        {/* MOBILE SIDE NAVIGATION DRAWER */}
        <div 
          className={`fixed inset-0 bg-primary/50 backdrop-blur-[2px] z-[1050] transition-all duration-300 ${
            isDrawerOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`} 
          onClick={() => setIsDrawerOpen(false)}
        >
          <div 
            className={`fixed top-0 right-0 bottom-0 w-[80%] max-w-[320px] bg-white z-[1060] shadow-2xl transition-transform duration-300 ease-out flex flex-col ${
              isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
            }`} 
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-5 py-4 border-b border-border-color flex justify-between items-center bg-secondary-bg">
              <span className="text-base font-bold text-primary">Navigation Menu</span>
              <button 
                className="bg-transparent border-none text-body-text p-1.5 rounded flex items-center justify-center hover:bg-black/5" 
                onClick={() => setIsDrawerOpen(false)}
                aria-label="Close Menu"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto py-4">
              <ul className="list-none p-0 m-0">
                {navLinks.map((link) => (
                  <li key={link.id} className="w-full">
                    {link.hasDropdown ? (
                      <>
                        <button 
                          className="flex justify-between items-center w-full px-5 py-3.5 text-body-text text-sm font-semibold uppercase tracking-wider border-b border-secondary-bg hover:bg-accent-light hover:text-accent-dark transition-all border-none bg-transparent text-left" 
                          onClick={() => {
                            if (link.id === 'specialties') {
                              setDrawerSpecialtiesOpen(!drawerSpecialtiesOpen);
                            } else if (link.id === 'branches') {
                              setDrawerBranchesOpen(!drawerBranchesOpen);
                            }
                          }}
                        >
                          <span>{link.label}</span>
                          <ChevronDown 
                            size={16} 
                            className={`transition-transform duration-200 ${
                              (link.id === 'specialties' ? drawerSpecialtiesOpen : drawerBranchesOpen) ? 'rotate-180' : 'rotate-0'
                            }`}
                          />
                        </button>
                        
                        {/* Specialties Dropdown */}
                        {link.id === 'specialties' && drawerSpecialtiesOpen && (
                          <ul className="list-none bg-secondary-bg py-2 border-b border-border-color">
                            <li className="w-full border-b border-border-color/30">
                              <a 
                                href="#"
                                className="block pl-10 pr-5 py-2.5 text-[#418C7D] text-xs font-bold transition-all hover:bg-white/10"
                                onClick={(e) => {
                                  e.preventDefault();
                                  if (setCurrentPage) {
                                    setCurrentPage('specialties');
                                    setActiveTab('specialties');
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                  }
                                  setIsDrawerOpen(false);
                                }}
                              >
                                Show All Specialties
                              </a>
                            </li>
                            {link.items.map((item, idx) => (
                              <li key={idx}>
                                <a 
                                  href="#"
                                  className="block pl-10 pr-5 py-2.5 text-body-text text-xs font-medium transition-all hover:text-accent hover:pl-11"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    handleSpecialtyClick(item);
                                    setActiveTab(link.id);
                                    setIsDrawerOpen(false);
                                  }}
                                >
                                  {item}
                                </a>
                              </li>
                            ))}
                          </ul>
                        )}

                        {/* Branches Dropdown */}
                        {link.id === 'branches' && drawerBranchesOpen && (
                          <ul className="list-none bg-secondary-bg py-2 border-b border-border-color">
                            {link.items.map((item, idx) => (
                              <li key={idx}>
                                <a 
                                  href="#specialties"
                                  className="block pl-10 pr-5 py-2.5 text-body-text text-xs font-medium transition-all hover:text-accent hover:pl-11"
                                  onClick={() => {
                                    handleSpecialtyClick(item);
                                    setActiveTab(link.id);
                                    setIsDrawerOpen(false);
                                  }}
                                >
                                  {item}
                                </a>
                              </li>
                            ))}
                          </ul>
                        )}
                      </>
                    ) : (
                      <a 
                        href={link.id === 'home' || link.id === 'about' || link.id === 'testimonials' || link.id === 'videos' || link.id === 'contact' ? '#' : `#${link.id}`} 
                        className="flex justify-between items-center w-full px-5 py-3.5 text-body-text text-sm font-semibold uppercase tracking-wider border-b border-secondary-bg hover:bg-accent-light hover:text-accent-dark transition-all"
                        onClick={() => {
                          if (link.id === 'about') {
                            setCurrentPage('about');
                            setActiveTab('about');
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          } else if (link.id === 'testimonials') {
                            setCurrentPage('testimonials');
                            setActiveTab('testimonials');
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          } else if (link.id === 'videos') {
                            setCurrentPage('videos');
                            setActiveTab('videos');
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          } else if (link.id === 'contact') {
                            setCurrentPage('contact');
                            setActiveTab('contact');
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          } else {
                            setCurrentPage('home');
                            setActiveTab(link.id);
                            if (link.id === 'home') {
                              window.scrollTo({ top: 0, behavior: 'smooth' });
                            }
                          }
                          setIsDrawerOpen(false);
                        }}
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* CALL / WHATSAPP EMERGENCY SELECTION MODAL */}
        {showContactModal && (
          <div className="fixed inset-0 bg-primary/60 backdrop-blur-sm flex items-center justify-center z-[1100] animate-fadeIn" onClick={() => setShowContactModal(false)}>
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-[440px] overflow-hidden border border-border-color animate-scaleUp" onClick={(e) => e.stopPropagation()}>
              <div className="bg-primary text-white px-6 py-5 flex justify-between items-center">
                <h3 className="text-white m-0 text-lg font-semibold">Contact Support / Emergency</h3>
                <button 
                  className="bg-transparent border-none text-white/80 hover:text-white p-1 rounded transition-all flex items-center justify-center hover:bg-white/10" 
                  onClick={() => setShowContactModal(false)}
                >
                  <X size={20} />
                </button>
              </div>
              <div className="p-6 flex flex-col gap-4 text-center">
                <p className="text-sm text-muted-text mb-2">
                  Would you like to call or text us on WhatsApp? Both options connect to <strong>+{phoneNumber}</strong>.
                </p>
                
                {/* Phone Call Link */}
                <a 
                  href={`tel:+91${phoneNumber}`} 
                  className="flex items-center justify-center gap-3 p-3.5 bg-primary hover:bg-primary-dark text-white rounded-lg text-sm font-semibold transition-all duration-200"
                  onClick={() => setShowContactModal(false)}
                >
                  <Phone size={18} fill="currentColor" />
                  Call Emergency (+91 {phoneNumber})
                </a>

                {/* WhatsApp Chat Link */}
                <a 
                  href={`https://wa.me/91${phoneNumber}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center gap-3 p-3.5 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-lg text-sm font-semibold transition-all duration-200"
                  onClick={() => setShowContactModal(false)}
                >
                  <MessageSquare size={18} fill="currentColor" />
                  WhatsApp Chat (+91 {phoneNumber})
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
