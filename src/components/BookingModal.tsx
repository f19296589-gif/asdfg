import React from 'react';
import { useClinic } from '../context/ClinicContext';
import { BookingForm } from './BookingForm';
import { X, Calendar, MapPin, Instagram } from 'lucide-react';

export const BookingModal: React.FC = () => {
  const { 
    isBookingModalOpen, 
    setIsBookingModalOpen, 
    bookingPreselect,
    clinic 
  } = useClinic();

  if (!isBookingModalOpen) return null;

  return (
    <div 
      id="booking-modal-overlay"
      className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
      onClick={() => setIsBookingModalOpen(false)}
    >
      <div 
        className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-stone-200 my-8 relative animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#FAF9F6] border-b border-stone-200/80 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-cyan-800 text-white flex items-center justify-center">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base font-bold text-stone-900 font-serif-display">
                Dental & Beyond — Appointment Desk
              </h2>
              <p className="text-[11px] text-stone-500 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-cyan-700" />
                <span>Zahlé, Lebanon</span>
                <span>•</span>
                <span>@{clinic.instagram}</span>
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsBookingModalOpen(false)}
            className="p-1.5 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-200/60 transition-colors"
            aria-label="Close booking modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Container */}
        <div className="p-4 sm:p-6 max-h-[80vh] overflow-y-auto">
          <BookingForm 
            preselectedTreatmentId={bookingPreselect.treatmentId}
            preselectedDoctorId={bookingPreselect.doctorId}
          />
        </div>

      </div>
    </div>
  );
};
