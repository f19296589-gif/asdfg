import React, { useState } from 'react';
import { Treatment } from '../types';
import { 
  X, 
  CheckCircle2, 
  Clock, 
  HelpCircle, 
  Calendar, 
  MessageCircle, 
  ChevronDown, 
  ChevronUp,
  AlertCircle
} from 'lucide-react';
import { useClinic } from '../context/ClinicContext';

export const TreatmentModal: React.FC<{
  treatment: Treatment;
  onClose: () => void;
  onBook: (treatmentId: string) => void;
}> = ({ treatment, onClose, onBook }) => {
  const { getWhatsAppLink } = useClinic();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const whatsappMsg = `Hello Dental & Beyond, I would like to inquire about ${treatment.name} at your clinic in Zahlé.`;

  return (
    <div 
      id="treatment-detail-modal"
      className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl border border-stone-200 my-8 text-left relative animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with image */}
        <div className="relative aspect-21/9 bg-stone-100 overflow-hidden">
          <img
            src={treatment.imageUrl}
            alt={treatment.imageAlt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/30 to-transparent" />
          
          <button
            id="close-treatment-modal-btn"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-xs transition-colors focus:outline-hidden"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-cyan-700 text-white inline-block mb-2">
              {treatment.category}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif-display leading-tight text-white">
              {treatment.name}
            </h2>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          
          {/* Overview */}
          <div className="space-y-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-stone-500">
              Clinical Overview
            </h3>
            <p className="text-base text-stone-700 leading-relaxed">
              {treatment.fullDesc}
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-stone-100 text-xs text-stone-600 font-medium">
              <Clock className="w-3.5 h-3.5 text-stone-500" />
              <span>Typical timeline: {treatment.duration}</span>
            </div>
          </div>

          {/* Suitable For */}
          <div className="space-y-3 pt-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-stone-500">
              Who This Treatment May Be Suitable For
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {treatment.suitableFor.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-stone-50 border border-stone-100">
                  <CheckCircle2 className="w-4 h-4 text-cyan-800 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-stone-700 leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* What Patients Can Generally Expect */}
          <div className="space-y-3 pt-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-stone-500">
              What Patients Can Generally Expect
            </h3>
            <div className="space-y-2.5">
              {treatment.whatToExpect.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-stone-700">
                  <span className="w-6 h-6 rounded-full bg-cyan-100 text-cyan-900 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <p className="leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQs Accordion */}
          {treatment.faqs && treatment.faqs.length > 0 && (
            <div className="space-y-3 pt-2">
              <h3 className="text-sm font-bold uppercase tracking-wider text-stone-500 flex items-center gap-1.5">
                <HelpCircle className="w-4 h-4 text-stone-400" />
                <span>Frequently Asked Questions</span>
              </h3>
              <div className="space-y-2">
                {treatment.faqs.map((faq, idx) => (
                  <div 
                    key={idx}
                    className="border border-stone-200 rounded-xl overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full flex items-center justify-between p-3.5 text-left text-sm font-semibold text-stone-900 bg-stone-50/70 hover:bg-stone-100 transition-colors"
                    >
                      <span>{faq.question}</span>
                      {openFaqIndex === idx ? (
                        <ChevronUp className="w-4 h-4 text-stone-500 shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-stone-500 shrink-0" />
                      )}
                    </button>
                    {openFaqIndex === idx && (
                      <div className="p-3.5 bg-white text-xs sm:text-sm text-stone-600 border-t border-stone-100 leading-relaxed">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Medical Transparency Note */}
          <div className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-200/70 flex items-start gap-2.5 text-xs text-amber-900">
            <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Medical Transparency:</strong> Individual anatomy, bone density, and oral hygiene compliance affect clinical outcomes. A detailed in-person examination at Dental & Beyond in Zahlé is necessary before finalizing any therapeutic or cosmetic plan.
            </p>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-6 bg-stone-50 border-t border-stone-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <a
            href={getWhatsAppLink(whatsappMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100/90 border border-emerald-200 transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            <span>Inquire on WhatsApp</span>
          </a>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl text-xs font-semibold text-stone-600 hover:bg-stone-200/60 transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onBook(treatment.id);
              }}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-cyan-800 hover:bg-cyan-900 shadow-xs transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Consultation for This Treatment</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
