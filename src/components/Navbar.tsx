import React, { useState, useEffect } from 'react';
import { useClinic } from '../context/ClinicContext';
import { 
  Calendar, 
  Menu, 
  X, 
  MapPin, 
  Instagram, 
  Phone, 
  Sparkles,
  MessageCircle
} from 'lucide-react';

export const Navbar: React.FC<{
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}> = ({ activeSection, onNavigate }) => {
  const { clinic, setIsBookingModalOpen, getWhatsAppLink } = useClinic();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'treatments', label: 'Treatments' },
    { id: 'doctors', label: 'Our Doctors' },
    { id: 'transformations', label: 'Transformations' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'contact', label: 'Find Us' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-stone-200/80 py-3' 
          : 'bg-[#FAF9F6]/90 backdrop-blur-xs py-4 border-b border-stone-200/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand Identity */}
          <button 
            id="nav-brand-logo"
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-3 text-left focus:outline-hidden group"
          >
            <div className="w-10 h-10 rounded-xl bg-cyan-800 text-white flex items-center justify-center shadow-xs group-hover:bg-cyan-900 transition-colors">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2C6.5 2 2 6.5 2 12c0 3.5 1.8 6.6 4.6 8.4.6-.9 1.4-1.9 2.4-2.4 1.2-.6 2.6-.6 3.8 0 1 .5 1.8 1.5 2.4 2.4 2.8-1.8 4.8-4.9 4.8-8.4 0-5.5-4.5-10-10-10z" />
                <path d="M9 10a3 3 0 0 0 6 0" />
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold tracking-tight text-stone-900 font-serif-display">
                  Dental & Beyond
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-stone-700 font-medium">
                <MapPin className="w-3 h-3 text-cyan-700" />
                <span>Zahlé, Lebanon</span>
                <span className="text-stone-300">•</span>
                <span className="text-cyan-700 font-semibold">@{clinic.instagram}</span>
              </div>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleLinkClick(item.id)}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? 'text-cyan-900 bg-cyan-50/80 font-semibold'
                      : 'text-stone-700 hover:text-stone-900 hover:bg-stone-100/70'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              id="nav-instagram-link"
              href={clinic.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Official Instagram"
              className="p-2.5 rounded-lg text-stone-600 hover:text-cyan-800 hover:bg-stone-100 transition-colors border border-stone-200/80"
              title="Official Dental & Beyond Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>

            <a
              id="nav-whatsapp-btn"
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100/80 border border-emerald-200/80 transition-colors shadow-2xs"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>WhatsApp</span>
            </a>

            <button
              id="nav-book-appointment-btn"
              onClick={() => setIsBookingModalOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-white bg-cyan-800 hover:bg-cyan-900 transition-all shadow-xs hover:shadow-sm active:scale-98"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              id="mobile-book-header-btn"
              onClick={() => setIsBookingModalOpen(true)}
              className="px-3 py-1.5 text-xs font-semibold text-white bg-cyan-800 rounded-md shadow-2xs"
            >
              Book
            </button>
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-stone-700 hover:bg-stone-100 focus:outline-hidden"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div 
          id="mobile-nav-drawer"
          className="lg:hidden bg-white border-b border-stone-200 px-4 pt-3 pb-6 shadow-lg animate-in slide-in-from-top-2 duration-200"
        >
          <div className="space-y-1 mb-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`mobile-link-${item.id}`}
                onClick={() => handleLinkClick(item.id)}
                className={`w-full text-left px-4 py-2.5 rounded-lg text-base font-medium flex items-center justify-between ${
                  activeSection === item.id
                    ? 'text-cyan-900 bg-cyan-50 font-semibold'
                    : 'text-stone-700 hover:bg-stone-50'
                }`}
              >
                <span>{item.label}</span>
                {activeSection === item.id && <Sparkles className="w-4 h-4 text-cyan-700" />}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-stone-100 flex flex-col gap-2.5">
            <div className="flex items-center justify-between px-2 text-xs text-stone-700">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-cyan-700" /> Zahlé, Lebanon
              </span>
              <a 
                href={clinic.instagramUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-cyan-700 hover:underline flex items-center gap-1 font-semibold"
              >
                <Instagram className="w-3.5 h-3.5" /> @{clinic.instagram}
              </a>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Chat on WhatsApp</span>
              </a>

              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsBookingModalOpen(true);
                }}
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-xs font-semibold text-white bg-cyan-800 shadow-xs"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
