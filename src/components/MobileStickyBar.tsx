import React from 'react';
import { useClinic } from '../context/ClinicContext';
import { Phone, MessageCircle, Calendar } from 'lucide-react';

export const MobileStickyBar: React.FC<{
  onBookClick: () => void;
}> = ({ onBookClick }) => {
  const { clinic, getWhatsAppLink, isWhatsAppConfigured } = useClinic();

  const phoneCallUrl = clinic.phoneStatus === 'verified' && clinic.phone.replace(/\D/g, '').length >= 7
    ? `tel:${clinic.phone.replace(/\D/g, '')}`
    : '#contact';

  return (
    <aside 
      id="mobile-sticky-action-bar"
      aria-label="Quick Contact and Booking Bar"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-stone-200/90 px-3 py-2.5 shadow-lg"
    >
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        
        {/* 1. Call */}
        <a
          id="mobile-sticky-call-btn"
          href={phoneCallUrl}
          aria-label="Call Dental & Beyond Clinic"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-stone-100 hover:bg-stone-200/80 text-stone-800 transition-colors text-center"
        >
          <Phone className="w-4 h-4 text-stone-700 mb-0.5" />
          <span className="text-[11px] font-semibold tracking-tight">Call</span>
        </a>

        {/* 2. WhatsApp */}
        <a
          id="mobile-sticky-whatsapp-btn"
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Dental & Beyond on WhatsApp"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-200 transition-colors text-center"
        >
          <MessageCircle className="w-4 h-4 text-emerald-600 mb-0.5" />
          <span className="text-[11px] font-semibold tracking-tight">WhatsApp</span>
        </a>

        {/* 3. Book */}
        <button
          id="mobile-sticky-book-btn"
          onClick={onBookClick}
          aria-label="Book an appointment"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-cyan-800 hover:bg-cyan-900 text-white shadow-xs transition-colors text-center"
        >
          <Calendar className="w-4 h-4 text-white mb-0.5" />
          <span className="text-[11px] font-semibold tracking-tight">Book</span>
        </button>

      </div>
    </aside>
  );
};
