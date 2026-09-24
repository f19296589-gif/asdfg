import React from 'react';
import { useClinic } from '../context/ClinicContext';
import { BookingForm } from './BookingForm';
import { Calendar, MapPin, Clock, MessageCircle, ShieldCheck } from 'lucide-react';

export const BookingSection: React.FC<{
  preselectedTreatmentId?: string;
  preselectedDoctorId?: string;
}> = ({ preselectedTreatmentId, preselectedDoctorId }) => {
  const { clinic, getWhatsAppLink } = useClinic();

  return (
    <section 
      id="book"
      aria-label="Book an Appointment at Dental & Beyond"
      className="py-20 bg-gradient-to-b from-[#FAF9F6] to-white border-b border-stone-200/60 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-100/80 text-cyan-900 text-xs font-semibold tracking-wide uppercase">
            Consultation Scheduling
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 font-serif-display">
            Book Your Dental Appointment
          </h2>
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
            Reserve your consultation slot with our dental specialists in Zahlé. Select your treatment, preferred time, and our clinic desk will confirm with you.
          </p>
        </div>

        {/* 2-Column Booking Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Clinic Guarantees & Info */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="bg-[#FAF9F6] p-6 sm:p-8 rounded-2xl border border-stone-200/80 space-y-6">
              
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-800">
                  Patient Care Protocol
                </span>
                <h3 className="text-xl font-bold text-stone-900 font-serif-display">
                  What to Expect at Your Visit
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Every first visit includes a clinical evaluation, periodontal check, digital intraoral photography, and discussion of tailored treatment options.
                </p>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-stone-700">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-cyan-100 text-cyan-800 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                    1
                  </div>
                  <div>
                    <strong className="text-stone-900 font-semibold block">Select Your Date & Slot:</strong>
                    Choose a time that fits your day; we reserve the operator suite exclusively for your care.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-cyan-100 text-cyan-800 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                    2
                  </div>
                  <div>
                    <strong className="text-stone-900 font-semibold block">Reception Verification:</strong>
                    Dental & Beyond reception in Zahlé will reach out via call or WhatsApp to confirm dentist availability.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-cyan-100 text-cyan-800 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                    3
                  </div>
                  <div>
                    <strong className="text-stone-900 font-semibold block">Comprehensive Assessment:</strong>
                    No rushed consultations. We explain each step thoroughly before starting.
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-stone-200 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-stone-900">
                  <Clock className="w-4 h-4 text-cyan-800" />
                  <span>Clinic Working Hours (Zahlé)</span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Monday – Friday: 9:00 AM – 6:00 PM <br />
                  Saturday: 9:00 AM – 2:00 PM <br />
                  Sunday: Closed (Emergency on call)
                </p>
              </div>

              {/* Direct WhatsApp Option */}
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-left space-y-2">
                <span className="text-xs font-bold text-emerald-900 flex items-center gap-1.5">
                  <MessageCircle className="w-4 h-4 text-emerald-700" />
                  <span>Need an Immediate Response?</span>
                </span>
                <p className="text-xs text-emerald-800 leading-relaxed">
                  If you have tooth sensitivity, urgent aesthetic questions, or prefer WhatsApp scheduling directly:
                </p>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold shadow-2xs transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Direct WhatsApp Chat</span>
                </a>
              </div>

            </div>
          </div>

          {/* Right Column: Actual Interactive Booking Form */}
          <div className="lg:col-span-7">
            <BookingForm 
              preselectedTreatmentId={preselectedTreatmentId}
              preselectedDoctorId={preselectedDoctorId}
            />
          </div>

        </div>

      </div>
    </section>
  );
};
