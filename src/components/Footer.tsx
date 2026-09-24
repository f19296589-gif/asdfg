import React, { useState } from 'react';
import { useClinic } from '../context/ClinicContext';
import { 
  Instagram, 
  MapPin, 
  Phone, 
  Mail, 
  Calendar, 
  ShieldCheck, 
  Settings, 
  Heart,
  MessageCircle,
  ExternalLink
} from 'lucide-react';

export const Footer: React.FC<{
  onNavigate: (sectionId: string) => void;
  onOpenPrivacy: () => void;
}> = ({ onNavigate, onOpenPrivacy }) => {
  const { clinic, setIsBookingModalOpen, setIsClinicSettingsOpen, getWhatsAppLink } = useClinic();

  const currentYear = new Date().getFullYear();

  return (
    <footer 
      id="main-footer"
      className="bg-stone-900 text-stone-300 pt-16 pb-24 lg:pb-12 border-t border-stone-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-stone-800 text-left">
          
          {/* Col 1 & 2: Brand Identity */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-700 text-white flex items-center justify-center">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2C6.5 2 2 6.5 2 12c0 3.5 1.8 6.6 4.6 8.4.6-.9 1.4-1.9 2.4-2.4 1.2-.6 2.6-.6 3.8 0 1 .5 1.8 1.5 2.4 2.4 2.8-1.8 4.8-4.9 4.8-8.4 0-5.5-4.5-10-10-10z" />
                  <path d="M9 10a3 3 0 0 0 6 0" />
                </svg>
              </div>
              <span className="text-2xl font-bold font-serif-display text-white tracking-tight">
                Dental & Beyond
              </span>
            </div>

            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed max-w-sm">
              Modern dental clinic in Zahlé, Lebanon. Providing comprehensive aesthetic dentistry, dental implants, clear aligners, and gentle preventive care.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={clinic.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-white text-xs font-semibold transition-colors border border-stone-700"
              >
                <Instagram className="w-4 h-4 text-rose-400" />
                <span>@{clinic.instagram}</span>
              </a>

              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-950/80 hover:bg-emerald-900 text-emerald-300 text-xs font-semibold transition-colors border border-emerald-800/80"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-200">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors">
                  About Clinic
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('treatments')} className="hover:text-white transition-colors">
                  Treatments
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('doctors')} className="hover:text-white transition-colors">
                  Our Doctors
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('transformations')} className="hover:text-white transition-colors">
                  Transformations
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('gallery')} className="hover:text-white transition-colors">
                  Photo Gallery
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors">
                  Find Us
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Treatments */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-200">
              Treatments
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-400">
              <li>Cosmetic Dentistry & Veneers</li>
              <li>Dental Implants</li>
              <li>Teeth Whitening</li>
              <li>Clear Aligners</li>
              <li>Crowns & Bridges</li>
              <li>Pediatric Care</li>
              <li>Oral Surgery</li>
            </ul>
          </div>

          {/* Col 5: Location & Hours */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-200">
              Zahlé Clinic
            </h4>
            <div className="space-y-2 text-xs text-stone-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>Zahlé, Bekaa Valley, Lebanon</span>
              </div>
              <p className="text-[11px] text-stone-400">
                Mon – Fri: 9:00 AM – 6:00 PM <br />
                Sat: 9:00 AM – 2:00 PM <br />
                Sun: Closed
              </p>
              <div className="pt-2">
                <button
                  onClick={() => setIsBookingModalOpen(true)}
                  className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-cyan-800 hover:bg-cyan-700 text-white text-xs font-semibold transition-colors"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Request Appointment</span>
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span>© {currentYear} Dental & Beyond. All rights reserved.</span>
            <span>•</span>
            <button 
              onClick={onOpenPrivacy}
              className="hover:text-stone-200 underline focus:outline-hidden"
            >
              Privacy Policy & Terms
            </button>
            <span>•</span>
            <span>Individual results may vary.</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              id="footer-clinic-settings-btn"
              onClick={() => setIsClinicSettingsOpen(true)}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white transition-colors border border-stone-700 text-[11px]"
              title="Configure Verified Clinic Data & Instagram Photos"
            >
              <Settings className="w-3.5 h-3.5 text-cyan-400" />
              <span>Clinic Setup & Data Sync</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
