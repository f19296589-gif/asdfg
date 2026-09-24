import React from 'react';
import { Doctor } from '../types';
import { Calendar, CheckCircle2, MessageCircle, AlertCircle } from 'lucide-react';
import { useClinic } from '../context/ClinicContext';

export const DoctorCard: React.FC<{
  doctor: Doctor;
  onBook: (doctorId: string) => void;
}> = ({ doctor, onBook }) => {
  const { getWhatsAppLink } = useClinic();

  const isConfirmed = doctor.nameStatus === 'verified';
  const whatsappMsg = `Hello Dental & Beyond, I would like to book a consultation with ${doctor.name} at your clinic in Zahlé.`;

  return (
    <div 
      id={`doctor-card-${doctor.id}`}
      className="bg-white rounded-2xl overflow-hidden border border-stone-200/80 shadow-xs hover:shadow-md hover:border-cyan-200 transition-all duration-300 flex flex-col h-full text-left"
    >
      {/* Doctor Photo */}
      <div className="relative aspect-4/5 overflow-hidden bg-stone-100">
        <img
          src={doctor.imageUrl}
          alt={doctor.imageAlt}
          className="w-full h-full object-cover object-top hover:scale-102 transition-transform duration-500"
          loading="lazy"
        />
        
        {/* Verification Status Pill */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
          <span className={`px-2.5 py-1 rounded-md text-[11px] font-semibold backdrop-blur-xs border shadow-2xs ${
            isConfirmed 
              ? 'bg-emerald-50/95 text-emerald-800 border-emerald-200' 
              : 'bg-amber-50/95 text-amber-900 border-amber-200'
          }`}>
            {isConfirmed ? (
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                Verified Specialist
              </span>
            ) : (
              <span className="flex items-center gap-1">
                <AlertCircle className="w-3 h-3 text-amber-600" />
                Name to be confirmed
              </span>
            )}
          </span>
        </div>
      </div>

      {/* Profile Details */}
      <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
        <div className="space-y-2">
          <span className="text-xs font-semibold text-cyan-800 tracking-wider uppercase block">
            {doctor.specialty}
          </span>
          <h3 className="text-xl font-bold text-stone-900 font-serif-display">
            {doctor.name}
          </h3>
          <p className="text-xs font-medium text-stone-500">
            {doctor.title}
          </p>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pt-1">
            {doctor.bio}
          </p>
        </div>

        {doctor.qualificationsNote && (
          <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-100 text-[11px] text-stone-500 italic">
            {doctor.qualificationsNote}
          </div>
        )}

        {/* Card Actions */}
        <div className="pt-4 border-t border-stone-100 flex items-center gap-2 mt-auto">
          <button
            id={`book-doctor-${doctor.id}`}
            onClick={() => onBook(doctor.id)}
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-cyan-800 hover:bg-cyan-900 shadow-2xs transition-all active:scale-98"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book with Doctor</span>
          </button>

          <a
            href={getWhatsAppLink(whatsappMsg)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Inquire about this doctor on WhatsApp"
            className="p-2.5 rounded-xl text-emerald-800 bg-emerald-50 hover:bg-emerald-100/90 border border-emerald-200 transition-colors"
            title="Inquire on WhatsApp"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600" />
          </a>
        </div>

      </div>
    </div>
  );
};
