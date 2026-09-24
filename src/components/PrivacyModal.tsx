import React from 'react';
import { X, ShieldCheck, Lock, FileText } from 'lucide-react';
import { useClinic } from '../context/ClinicContext';

export const PrivacyModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
}> = ({ isOpen, onClose }) => {
  const { clinic } = useClinic();

  if (!isOpen) return null;

  return (
    <div 
      id="privacy-policy-modal"
      className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-stone-200 my-8 relative text-left animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-[#FAF9F6] border-b border-stone-200/80 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-stone-800 text-white flex items-center justify-center">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base font-bold text-stone-900 font-serif-display">
                Privacy Policy & Clinical Terms
              </h2>
              <p className="text-xs text-stone-500">Dental & Beyond — Zahlé, Lebanon</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-200/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 max-h-[70vh] overflow-y-auto space-y-4 text-xs sm:text-sm text-stone-600 leading-relaxed">
          <div className="space-y-1">
            <h3 className="font-bold text-stone-900 text-sm">1. Patient Confidentiality & Medical Privacy</h3>
            <p>
              Dental & Beyond is committed to protecting patient confidentiality. Information submitted through our appointment booking request form (including names, telephone numbers, and dental notes) is utilized exclusively to schedule consultations and confirm appointments in Zahlé.
            </p>
          </div>

          <div className="space-y-1">
            <h3 className="font-bold text-stone-900 text-sm">2. Clinical Photography & Informed Consent</h3>
            <p>
              Any clinical smile photographs or before/after documentation displayed on our website or official Instagram page (@{clinic.instagram}) are published strictly with informed patient authorization. Patient identity is protected, and individual results may vary based on clinical indications, bone density, and oral hygiene.
            </p>
          </div>

          <div className="space-y-1">
            <h3 className="font-bold text-stone-900 text-sm">3. Appointment Requests vs. Formal Confirmation</h3>
            <p>
              Online form submissions represent requests for appointment scheduling. Official confirmations are finalized directly by our reception staff via telephone or WhatsApp consultation to ensure doctor availability.
            </p>
          </div>

          <div className="space-y-1">
            <h3 className="font-bold text-stone-900 text-sm">4. Medical Guarantees Disclaimer</h3>
            <p>
              Biological healing, osseointegration, tooth shade stability, and orthodontics vary by individual. Dental & Beyond does not issue unconditional medical guarantees or claims of pain-free results; all therapeutic procedures follow evidence-based standards.
            </p>
          </div>

          <div className="space-y-1">
            <h3 className="font-bold text-stone-900 text-sm">5. Contact Information</h3>
            <p>
              For privacy inquiries, appointment revisions, or medical records, contact Dental & Beyond clinic in Zahlé, Lebanon or reach out via WhatsApp.
            </p>
          </div>
        </div>

        <div className="p-4 bg-stone-50 border-t border-stone-200 text-right">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-stone-800 text-white text-xs font-semibold hover:bg-stone-900 transition-colors"
          >
            Close Privacy Policy
          </button>
        </div>

      </div>
    </div>
  );
};
