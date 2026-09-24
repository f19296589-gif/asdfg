import React, { useState, useEffect } from 'react';
import { useClinic } from '../context/ClinicContext';
import { 
  Calendar as CalendarIcon, 
  Clock, 
  User, 
  Phone, 
  Mail, 
  FileText, 
  CheckCircle2, 
  AlertCircle, 
  MessageCircle, 
  Sparkles,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

export const BookingForm: React.FC<{
  onSuccess?: () => void;
  preselectedTreatmentId?: string;
  preselectedDoctorId?: string;
}> = ({ onSuccess, preselectedTreatmentId, preselectedDoctorId }) => {
  const { 
    treatments, 
    doctors, 
    addAppointmentRequest, 
    appointments, 
    getWhatsAppLink,
    clinic 
  } = useClinic();

  const [selectedTreatmentId, setSelectedTreatmentId] = useState<string>(preselectedTreatmentId || treatments[0]?.id || '');
  const [selectedDoctorId, setSelectedDoctorId] = useState<string>(preselectedDoctorId || 'any');
  
  // Tomorrow's date as minimum
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDateString = tomorrow.toISOString().split('T')[0];

  const [selectedDate, setSelectedDate] = useState<string>(minDateString);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>('10:00 AM');
  
  // Patient details
  const [patientName, setPatientName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [notes, setNotes] = useState<string>('');

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [submittedAppointment, setSubmittedAppointment] = useState<any>(null);
  const [errorMsg, setErrorMsg] = useState<string>('');

  // Update if props change
  useEffect(() => {
    if (preselectedTreatmentId) setSelectedTreatmentId(preselectedTreatmentId);
  }, [preselectedTreatmentId]);

  useEffect(() => {
    if (preselectedDoctorId) setSelectedDoctorId(preselectedDoctorId);
  }, [preselectedDoctorId]);

  const allTimeSlots = [
    '09:30 AM',
    '10:15 AM',
    '11:00 AM',
    '11:45 AM',
    '02:00 PM',
    '02:45 PM',
    '03:30 PM',
    '04:15 PM',
    '05:00 PM'
  ];

  // Double booking check against existing local requests
  const isSlotBooked = (date: string, time: string, doctorId: string) => {
    return appointments.some(
      a => a.date === date && 
           a.timeSlot === time && 
           (a.doctorId === doctorId || doctorId === 'any' || a.doctorId === 'any') &&
           a.status !== 'cancelled'
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!patientName.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!phone.trim()) {
      setErrorMsg('Please enter a contact phone or WhatsApp number.');
      return;
    }

    // Check if Sunday
    const chosenDateObj = new Date(selectedDate);
    if (chosenDateObj.getUTCDay() === 0) {
      setErrorMsg('Dental & Beyond is closed on Sundays. Please select Monday through Saturday.');
      return;
    }

    if (isSlotBooked(selectedDate, selectedTimeSlot, selectedDoctorId)) {
      setErrorMsg('This specific time slot is already requested. Please choose another slot.');
      return;
    }

    const selectedTreatment = treatments.find(t => t.id === selectedTreatmentId) || treatments[0];
    const selectedDoctor = doctors.find(d => d.id === selectedDoctorId);
    const doctorName = selectedDoctor ? selectedDoctor.name : 'Any Available Specialist';

    const newAppointment = addAppointmentRequest({
      patientName: patientName.trim(),
      phone: phone.trim(),
      email: email.trim() || undefined,
      treatmentId: selectedTreatment.id,
      treatmentName: selectedTreatment.name,
      doctorId: selectedDoctorId,
      doctorName: doctorName,
      date: selectedDate,
      timeSlot: selectedTimeSlot,
      notes: notes.trim() || undefined
    });

    setSubmittedAppointment(newAppointment);
    setIsSubmitted(true);
    if (onSuccess) onSuccess();
  };

  const generateWhatsAppConfirmationMsg = () => {
    if (!submittedAppointment) return '';
    return `Hello Dental & Beyond, I just requested an appointment on your website:\n\n• Patient: ${submittedAppointment.patientName}\n• Treatment: ${submittedAppointment.treatmentName}\n• Doctor: ${submittedAppointment.doctorName}\n• Date: ${submittedAppointment.date}\n• Time: ${submittedAppointment.timeSlot}\n• Phone: ${submittedAppointment.phone}\n\nPlease confirm availability. Thank you!`;
  };

  const generateGoogleCalendarUrl = () => {
    if (!submittedAppointment) return '#';
    const title = encodeURIComponent(`Dental Appointment: ${submittedAppointment.treatmentName} - Dental & Beyond`);
    const details = encodeURIComponent(`Requested appointment at Dental & Beyond, Zahlé.\nDoctor: ${submittedAppointment.doctorName}\nPhone: ${submittedAppointment.phone}`);
    const location = encodeURIComponent(`Dental & Beyond, Zahlé, Lebanon`);
    // Format date YYYYMMDD
    const dateClean = submittedAppointment.date.replace(/-/g, '');
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&dates=${dateClean}T080000Z/${dateClean}T090000Z`;
  };

  if (isSubmitted && submittedAppointment) {
    return (
      <div 
        id="appointment-success-banner"
        className="p-6 sm:p-8 bg-white rounded-2xl border border-emerald-200 shadow-md text-left space-y-6 animate-in fade-in zoom-in-95 duration-200"
      >
        <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center">
          <CheckCircle2 className="w-7 h-7" />
        </div>

        <div className="space-y-2">
          <span className="px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-200">
            Request Received • Status: Pending Clinic Confirmation
          </span>
          <h3 className="text-2xl font-bold text-stone-900 font-serif-display">
            Thank you, {submittedAppointment.patientName}!
          </h3>
          <p className="text-sm text-stone-700 leading-relaxed">
            Your appointment request has been received. <strong className="font-semibold text-stone-900">Dental & Beyond will contact you to confirm your appointment.</strong>
          </p>
        </div>

        {/* Appointment Summary Box */}
        <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80 space-y-2.5 text-xs sm:text-sm text-stone-700">
          <div className="flex justify-between border-b border-stone-200/60 pb-2">
            <span className="text-stone-500">Treatment:</span>
            <span className="font-semibold text-stone-900">{submittedAppointment.treatmentName}</span>
          </div>
          <div className="flex justify-between border-b border-stone-200/60 pb-2">
            <span className="text-stone-500">Practitioner:</span>
            <span className="font-semibold text-stone-900">{submittedAppointment.doctorName}</span>
          </div>
          <div className="flex justify-between border-b border-stone-200/60 pb-2">
            <span className="text-stone-500">Date & Slot:</span>
            <span className="font-semibold text-stone-900">{submittedAppointment.date} at {submittedAppointment.timeSlot}</span>
          </div>
          <div className="flex justify-between border-b border-stone-200/60 pb-2">
            <span className="text-stone-500">Contact Number:</span>
            <span className="font-semibold text-stone-900">{submittedAppointment.phone}</span>
          </div>
          <div className="flex justify-between pt-1 text-xs text-stone-500">
            <span>Reference Code:</span>
            <span className="font-mono text-cyan-800 font-bold">{submittedAppointment.id.toUpperCase()}</span>
          </div>
        </div>

        {/* Quick Connect Actions */}
        <div className="space-y-3 pt-2">
          <a
            href={getWhatsAppLink(generateWhatsAppConfirmationMsg())}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-800 shadow-xs transition-all"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Forward Request to WhatsApp for Rapid Confirmation</span>
          </a>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <a
              href={generateGoogleCalendarUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200 border border-stone-200 transition-colors"
            >
              <CalendarIcon className="w-4 h-4 text-stone-600" />
              <span>Add to Google Calendar</span>
            </a>

            <button
              onClick={() => {
                setIsSubmitted(false);
                setSubmittedAppointment(null);
                setPatientName('');
                setPhone('');
                setEmail('');
                setNotes('');
              }}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-cyan-800 hover:bg-cyan-50 border border-cyan-200 transition-colors"
            >
              <span>Book Another Appointment</span>
            </button>
          </div>
        </div>

      </div>
    );
  }

  return (
    <form 
      id="booking-appointment-form"
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl border border-stone-200/90 shadow-xs p-6 sm:p-8 space-y-6 text-left"
    >
      <div className="space-y-1">
        <h3 className="text-xl sm:text-2xl font-bold text-stone-900 font-serif-display">
          Request an Appointment
        </h3>
        <p className="text-xs sm:text-sm text-stone-600">
          Choose your requested treatment, preferred specialist, and date. Our reception in Zahlé will review and contact you to confirm.
        </p>
      </div>

      {errorMsg && (
        <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 flex items-start gap-2.5 text-xs text-rose-800">
          <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
          <span>{errorMsg}</span>
        </div>
      )}

      {/* 1. Treatment Selection */}
      <div className="space-y-2">
        <label className="block text-xs font-bold uppercase tracking-wider text-stone-700">
          1. Select Treatment
        </label>
        <select
          id="booking-treatment-select"
          value={selectedTreatmentId}
          onChange={(e) => setSelectedTreatmentId(e.target.value)}
          className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs sm:text-sm text-stone-900 focus:outline-hidden focus:border-cyan-700 focus:bg-white transition-colors"
        >
          {treatments.map((t) => (
            <option key={t.id} value={t.id}>
              {t.name} ({t.category}) — {t.duration}
            </option>
          ))}
        </select>
      </div>

      {/* 2. Preferred Doctor */}
      <div className="space-y-2">
        <label className="block text-xs font-bold uppercase tracking-wider text-stone-700">
          2. Preferred Dentist
        </label>
        <select
          id="booking-doctor-select"
          value={selectedDoctorId}
          onChange={(e) => setSelectedDoctorId(e.target.value)}
          className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs sm:text-sm text-stone-900 focus:outline-hidden focus:border-cyan-700 focus:bg-white transition-colors"
        >
          <option value="any">First Available Specialist at Dental & Beyond</option>
          {doctors.map((d) => (
            <option key={d.id} value={d.id}>
              {d.name} — {d.specialty}
            </option>
          ))}
        </select>
      </div>

      {/* 3. Date & Time Selection */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 flex items-center gap-1.5">
            <CalendarIcon className="w-3.5 h-3.5 text-stone-500" />
            <span>3. Preferred Date</span>
          </label>
          <input
            id="booking-date-input"
            type="date"
            min={minDateString}
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs sm:text-sm text-stone-900 focus:outline-hidden focus:border-cyan-700 focus:bg-white transition-colors"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-stone-500" />
            <span>4. Time Slot</span>
          </label>
          <select
            id="booking-timeslot-select"
            value={selectedTimeSlot}
            onChange={(e) => setSelectedTimeSlot(e.target.value)}
            className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs sm:text-sm text-stone-900 focus:outline-hidden focus:border-cyan-700 focus:bg-white transition-colors"
          >
            {allTimeSlots.map((slot) => {
              const booked = isSlotBooked(selectedDate, slot, selectedDoctorId);
              return (
                <option key={slot} value={slot} disabled={booked}>
                  {slot} {booked ? '(Already Requested)' : ''}
                </option>
              );
            })}
          </select>
        </div>
      </div>

      {/* 4. Patient Contact Details */}
      <div className="space-y-3 pt-2 border-t border-stone-100">
        <label className="block text-xs font-bold uppercase tracking-wider text-stone-700">
          5. Patient Contact Information
        </label>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="relative">
            <User className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              id="booking-patient-name"
              type="text"
              placeholder="Full Name *"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
              className="w-full pl-10 pr-3.5 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs sm:text-sm text-stone-900 placeholder-stone-400 focus:outline-hidden focus:border-cyan-700 focus:bg-white"
              required
            />
          </div>

          <div className="relative">
            <Phone className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              id="booking-patient-phone"
              type="tel"
              placeholder="Phone or WhatsApp (+961) *"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full pl-10 pr-3.5 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs sm:text-sm text-stone-900 placeholder-stone-400 focus:outline-hidden focus:border-cyan-700 focus:bg-white"
              required
            />
          </div>
        </div>

        <div className="relative">
          <Mail className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            id="booking-patient-email"
            type="email"
            placeholder="Email Address (optional)"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full pl-10 pr-3.5 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs sm:text-sm text-stone-900 placeholder-stone-400 focus:outline-hidden focus:border-cyan-700 focus:bg-white"
          />
        </div>

        <div className="relative">
          <textarea
            id="booking-patient-notes"
            rows={2}
            placeholder="Additional notes or dental concerns (e.g. tooth pain, aesthetic goals, previous treatments)..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="w-full p-3 bg-stone-50 border border-stone-200 rounded-xl text-xs sm:text-sm text-stone-900 placeholder-stone-400 focus:outline-hidden focus:border-cyan-700 focus:bg-white"
          />
        </div>
      </div>

      {/* Consent & Confirmation Clarification */}
      <div className="p-3 rounded-xl bg-stone-50 border border-stone-200/80 text-[11px] text-stone-600">
        <strong className="font-semibold text-stone-800">Booking Notice:</strong> Submitting this form sends an appointment request to Dental & Beyond in Zahlé. Our clinic team will verify the schedule and contact you directly via phone or WhatsApp to finalize the confirmation.
      </div>

      {/* Submit Button */}
      <button
        id="submit-appointment-request-btn"
        type="submit"
        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-cyan-800 hover:bg-cyan-900 shadow-xs hover:shadow-md transition-all active:scale-98"
      >
        <CalendarIcon className="w-4 h-4" />
        <span>Request Appointment</span>
      </button>

    </form>
  );
};
