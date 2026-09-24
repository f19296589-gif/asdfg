import React from 'react';
import { useClinic } from '../context/ClinicContext';
import { MessageCircle } from 'lucide-react';

export const WhatsAppButton: React.FC<{
  label?: string;
  customText?: string;
  className?: string;
}> = ({ label = "Chat on WhatsApp", customText, className }) => {
  const { getWhatsAppLink } = useClinic();

  return (
    <a
      href={getWhatsAppLink(customText)}
      target="_blank"
      rel="noopener noreferrer"
      className={className || "inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-emerald-900 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 shadow-2xs transition-all"}
    >
      <MessageCircle className="w-4 h-4 text-emerald-600" />
      <span>{label}</span>
    </a>
  );
};

export const FloatingWhatsAppButton: React.FC = () => {
  const { getWhatsAppLink } = useClinic();

  return (
    <aside 
      aria-label="Direct WhatsApp Contact"
      className="hidden lg:block fixed bottom-6 right-6 z-40"
    >
      <a
        id="floating-desktop-whatsapp-btn"
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp message to Dental & Beyond"
        className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-103 group"
      >
        <MessageCircle className="w-5 h-5 text-white animate-pulse" />
        <span className="text-xs font-bold tracking-tight pr-1">
          Chat on WhatsApp
        </span>
      </a>
    </aside>
  );
};
