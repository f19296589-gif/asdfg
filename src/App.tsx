import React, { useState, useEffect } from 'react';
import { ClinicProvider, useClinic } from './context/ClinicContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { TreatmentGrid } from './components/TreatmentGrid';
import { TreatmentModal } from './components/TreatmentModal';
import { DoctorsSection } from './components/DoctorsSection';
import { BeforeAfter } from './components/BeforeAfter';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { BookingSection } from './components/BookingSection';
import { LocationMap } from './components/LocationMap';
import { InstagramFeed } from './components/InstagramFeed';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { FloatingWhatsAppButton } from './components/WhatsAppButton';
import { BookingModal } from './components/BookingModal';
import { ClinicSettingsModal } from './components/ClinicSettingsModal';
import { PrivacyModal } from './components/PrivacyModal';

function ClinicMainApp() {
  const { 
    selectedTreatmentModal, 
    setSelectedTreatmentModal, 
    setIsBookingModalOpen, 
    setBookingPreselect,
    bookingPreselect 
  } = useClinic();

  const [activeSection, setActiveSection] = useState<string>('home');
  const [isPrivacyOpen, setIsPrivacyOpen] = useState<boolean>(false);

  // Smooth scroll handler
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'book') {
      setIsBookingModalOpen(true);
      return;
    }
    const elem = document.getElementById(sectionId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookWithTreatment = (treatmentId?: string) => {
    setBookingPreselect({ treatmentId });
    setIsBookingModalOpen(true);
  };

  const handleBookWithDoctor = (doctorId: string) => {
    setBookingPreselect({ doctorId });
    setIsBookingModalOpen(true);
  };

  // Scroll spy to update active section in navbar
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'treatments', 'doctors', 'transformations', 'gallery', 'reviews', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sec of sections) {
        const el = document.getElementById(sec);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sec);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-stone-800 flex flex-col antialiased selection:bg-cyan-800 selection:text-white">
      
      {/* 1. Header & Navigation */}
      <Navbar 
        activeSection={activeSection} 
        onNavigate={handleNavigate} 
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero 
          onBookClick={() => setIsBookingModalOpen(true)}
          onExploreTreatments={() => handleNavigate('treatments')}
        />

        {/* 3. About Section */}
        <About 
          onBookClick={() => setIsBookingModalOpen(true)}
        />

        {/* 4. Treatments Section */}
        <TreatmentGrid 
          onBookTreatment={handleBookWithTreatment}
        />

        {/* 5. Doctors Section */}
        <DoctorsSection 
          onBookDoctor={handleBookWithDoctor}
        />

        {/* 6. Smile Transformations (Before & After) */}
        <BeforeAfter 
          onBookTreatment={handleBookWithTreatment}
        />

        {/* 7. Gallery Section */}
        <Gallery 
          onBookClick={() => setIsBookingModalOpen(true)}
        />

        {/* 8. Patient Reviews */}
        <Testimonials />

        {/* 9. Booking Section */}
        <BookingSection 
          preselectedTreatmentId={bookingPreselect.treatmentId}
          preselectedDoctorId={bookingPreselect.doctorId}
        />

        {/* 10. Location & Interactive Google Map */}
        <LocationMap />

        {/* 11. Instagram Feed */}
        <InstagramFeed />
      </main>

      {/* 12. Footer */}
      <Footer 
        onNavigate={handleNavigate}
        onOpenPrivacy={() => setIsPrivacyOpen(true)}
      />

      {/* Floating Elements & Modals */}
      <MobileStickyBar onBookClick={() => setIsBookingModalOpen(true)} />
      <FloatingWhatsAppButton />
      <BookingModal />
      <ClinicSettingsModal />
      <PrivacyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />

      {/* Treatment Detail Modal */}
      {selectedTreatmentModal && (
        <TreatmentModal 
          treatment={selectedTreatmentModal}
          onClose={() => setSelectedTreatmentModal(null)}
          onBook={handleBookWithTreatment}
        />
      )}

    </div>
  );
}

export default function App() {
  return (
    <ClinicProvider>
      <ClinicMainApp />
    </ClinicProvider>
  );
}
