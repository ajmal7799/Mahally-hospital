import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Specialties from './components/Specialties';
import Doctors from './components/Doctors';
import AboutUs from './components/AboutUs';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import AboutPage from './components/AboutPage';
import TestimonialsPage from './components/TestimonialsPage';
import ContactPage from './components/ContactPage';
import VideosPage from './components/VideosPage';
import SpecialtiesListPage from './components/SpecialtiesListPage';
import SpecialtyDetailPage from './components/SpecialtyDetailPage';
import BookingPage from './components/BookingPage';
import FloatingActions from './components/FloatingActions';
import './App.css';

function App() {
  const [showContactModal, setShowContactModal] = useState(false);
  const [selectedSpecialtyIndex, setSelectedSpecialtyIndex] = useState(null);
  const [selectedSpecialtyName, setSelectedSpecialtyName] = useState('');
  const [selectedDoctorName, setSelectedDoctorName] = useState('');
  const [currentPage, setCurrentPage] = useState('home');

  const handleActionPlaceholder = (actionName) => {
    alert(`${actionName} modal/feature will be implemented in the next steps.`);
  };

  return (
    <div className="w-full bg-white">
      {/* Hospital Website Header */}
      <Header 
        showContactModal={showContactModal} 
        setShowContactModal={setShowContactModal}
        handleActionPlaceholder={handleActionPlaceholder}
        setSelectedSpecialtyIndex={setSelectedSpecialtyIndex}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        setSelectedSpecialtyName={setSelectedSpecialtyName}
        setSelectedDoctorName={setSelectedDoctorName}
      />

      {currentPage === 'about' ? (
        <AboutPage />
      ) : currentPage === 'testimonials' ? (
        <TestimonialsPage />
      ) : currentPage === 'videos' ? (
        <VideosPage />
      ) : currentPage === 'contact' ? (
        <ContactPage />
      ) : currentPage === 'specialties' ? (
        <SpecialtiesListPage 
          setSelectedSpecialtyName={setSelectedSpecialtyName} 
          setCurrentPage={setCurrentPage} 
        />
      ) : currentPage === 'specialty-detail' ? (
        <SpecialtyDetailPage 
          specialtyName={selectedSpecialtyName} 
          setCurrentPage={setCurrentPage} 
          setSelectedDoctorName={setSelectedDoctorName}
        />
      ) : currentPage === 'booking' ? (
        <BookingPage 
          initialDoctorName={selectedDoctorName} 
          setInitialDoctorName={setSelectedDoctorName} 
        />
      ) : (
        <>
          {/* Hero Section Slider */}
          <Hero 
            setShowContactModal={setShowContactModal}
            handleActionPlaceholder={handleActionPlaceholder}
            setCurrentPage={setCurrentPage}
          />
          {/* Specialties Carousel Section */}
          <Specialties 
            selectedSpecialtyIndex={selectedSpecialtyIndex}
            setSelectedSpecialtyIndex={setSelectedSpecialtyIndex}
          />
          {/* Doctors Carousel Section */}
          <Doctors 
            setCurrentPage={setCurrentPage} 
            setSelectedDoctorName={setSelectedDoctorName} 
          />
          {/* About Us Section */}
          <AboutUs setCurrentPage={setCurrentPage} />
          {/* Testimonials Section */}
          <Testimonials />
        </>
      )}

      {/* Hospital Footer */}
      <Footer setCurrentPage={setCurrentPage} />

      {/* Floating Global Quick Actions (WhatsApp, Call, Booking & Scroll to Top) */}
      <FloatingActions setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;
