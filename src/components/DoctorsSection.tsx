import React from 'react';
import { useClinic } from '../context/ClinicContext';
import { DoctorCard } from './DoctorCard';
import { AlertCircle, Instagram, Edit3 } from 'lucide-react';

export const DoctorsSection: React.FC<{
  onBookDoctor: (doctorId: string) => void;
}> = ({ onBookDoctor }) => {
  const { doctors, clinic, setIsClinicSettingsOpen } = useClinic();

  return (
    <section 
      id="doctors"
      aria-label="Our Doctors and Specialists"
      className="py-20 bg-white border-t border-stone-200/60 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 text-stone-700 text-xs font-semibold tracking-wide uppercase">
            Medical Practitioners
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 font-serif-display">
            Our Doctors & Specialists
          </h2>
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
            A committed clinical team dedicated to continuous post-graduate education, modern restorative science, and gentle patient-focused care in Zahlé.
          </p>

          {/* Editorial Data Integrity Notice */}
          <div className="inline-flex flex-col sm:flex-row items-center gap-2 p-3 rounded-xl bg-amber-50/70 border border-amber-200/80 text-left text-xs text-amber-900">
            <div className="flex items-center gap-1.5 font-semibold shrink-0">
              <AlertCircle className="w-4 h-4 text-amber-700" />
              <span>Data Integrity Policy:</span>
            </div>
            <p className="text-stone-700">
              In strict adherence to authenticity standards, practitioner profile names are marked pending final verification from the official Dental & Beyond registry.
            </p>
            <button
              onClick={() => setIsClinicSettingsOpen(true)}
              className="mt-1 sm:mt-0 ml-auto shrink-0 inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white border border-amber-300 text-stone-800 text-[11px] font-semibold hover:bg-amber-100 transition-colors"
            >
              <Edit3 className="w-3 h-3 text-cyan-800" />
              <span>Update Doctor Names</span>
            </button>
          </div>
        </div>

        {/* Doctor Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor) => (
            <DoctorCard
              key={doctor.id}
              doctor={doctor}
              onBook={onBookDoctor}
            />
          ))}
        </div>

        {/* Footnote linking to Instagram */}
        <div className="mt-12 text-center">
          <p className="text-xs text-stone-500">
            Learn more about our clinical team, live procedures, and clinic announcements on our official Instagram page:{' '}
            <a 
              href={clinic.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-800 hover:underline font-semibold inline-flex items-center gap-1"
            >
              <Instagram className="w-3.5 h-3.5" />
              @{clinic.instagram}
            </a>
          </p>
        </div>

      </div>
    </section>
  );
};
