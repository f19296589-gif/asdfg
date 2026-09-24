import React, { useState } from 'react';
import { useClinic } from '../context/ClinicContext';
import { 
  X, 
  Settings, 
  CheckCircle2, 
  Copy, 
  RotateCcw, 
  Calendar, 
  Trash2,
  Instagram,
  MapPin,
  Phone,
  MessageCircle,
  FileCode
} from 'lucide-react';
import { defaultClinicInfo, defaultDoctors } from '../config/clinicData';

export const ClinicSettingsModal: React.FC = () => {
  const { 
    isClinicSettingsOpen, 
    setIsClinicSettingsOpen, 
    clinic, 
    updateClinicInfo, 
    doctors, 
    updateDoctor,
    appointments,
    cancelAppointment 
  } = useClinic();

  const [activeTab, setActiveTab] = useState<'info' | 'doctors' | 'appointments' | 'code'>('info');
  const [phoneInput, setPhoneInput] = useState(clinic.phone);
  const [whatsappInput, setWhatsappInput] = useState(clinic.whatsapp);
  const [addressInput, setAddressInput] = useState(clinic.address);
  const [instagramInput, setInstagramInput] = useState(clinic.instagram);
  const [copiedCode, setCopiedCode] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  if (!isClinicSettingsOpen) return null;

  const handleSaveInfo = (e: React.FormEvent) => {
    e.preventDefault();
    updateClinicInfo({
      phone: phoneInput.trim(),
      phoneStatus: phoneInput.includes('+961') && !phoneInput.includes('confirmed') ? 'verified' : clinic.phoneStatus,
      whatsapp: whatsappInput.trim(),
      whatsappStatus: whatsappInput.replace(/\D/g, '').length >= 7 ? 'verified' : clinic.whatsappStatus,
      address: addressInput.trim(),
      instagram: instagramInput.trim(),
      instagramUrl: `https://www.instagram.com/${instagramInput.trim()}`
    });
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 2500);
  };

  const handleResetDefaults = () => {
    if (window.confirm('Reset clinic data and doctors to defaults?')) {
      localStorage.removeItem('dental_beyond_clinic_info_v1');
      localStorage.removeItem('dental_beyond_doctors_v1');
      window.location.reload();
    }
  };

  const generatedTsConfig = `// Paste into src/config/clinicData.ts
export const defaultClinicInfo: ClinicInfo = {
  name: "Dental & Beyond",
  tagline: "Modern Dentistry. Beautiful Smiles.",
  city: "Zahlé",
  region: "Bekaa Governorate",
  country: "Lebanon",
  address: "${addressInput}",
  addressStatus: "${addressInput.includes('confirmed') ? 'to_be_confirmed' : 'verified'}",
  phone: "${phoneInput}",
  phoneStatus: "${phoneInput.includes('confirmed') ? 'to_be_confirmed' : 'verified'}",
  whatsapp: "${whatsappInput}",
  whatsappStatus: "${whatsappInput.replace(/\D/g, '').length >= 7 ? 'verified' : 'to_be_confirmed'}",
  instagram: "${instagramInput}",
  instagramUrl: "https://www.instagram.com/${instagramInput}",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Zahl%C3%A9+Lebanon",
  coordinates: { lat: 33.8463, lng: 35.9020 },
  openingHours: [
    { day: "Monday – Friday", hours: "9:00 AM – 6:00 PM", status: "to_be_confirmed" },
    { day: "Saturday", hours: "9:00 AM – 2:00 PM", status: "to_be_confirmed" },
    { day: "Sunday", hours: "Closed", status: "to_be_confirmed" }
  ]
};`;

  const copyConfigToClipboard = () => {
    navigator.clipboard.writeText(generatedTsConfig);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div 
      id="clinic-settings-modal-overlay"
      className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
      onClick={() => setIsClinicSettingsOpen(false)}
    >
      <div 
        className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl border border-stone-200 my-8 relative animate-in zoom-in-95 duration-200 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#FAF9F6] border-b border-stone-200/80 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-stone-800 text-white flex items-center justify-center">
              <Settings className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base font-bold text-stone-900 font-serif-display">
                Dental & Beyond — Clinic Admin & Sync Portal
              </h2>
              <p className="text-xs text-stone-500">
                Manage verified contact info, doctor credentials, and incoming appointment requests.
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsClinicSettingsOpen(false)}
            className="p-1.5 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-200/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-stone-200 px-6 bg-stone-50/50">
          <button
            onClick={() => setActiveTab('info')}
            className={`py-3 px-4 text-xs font-semibold border-b-2 transition-colors ${
              activeTab === 'info'
                ? 'border-cyan-800 text-cyan-900'
                : 'border-transparent text-stone-500 hover:text-stone-800'
            }`}
          >
            Contact & Location
          </button>

          <button
            onClick={() => setActiveTab('doctors')}
            className={`py-3 px-4 text-xs font-semibold border-b-2 transition-colors ${
              activeTab === 'doctors'
                ? 'border-cyan-800 text-cyan-900'
                : 'border-transparent text-stone-500 hover:text-stone-800'
            }`}
          >
            Doctors ({doctors.length})
          </button>

          <button
            onClick={() => setActiveTab('appointments')}
            className={`py-3 px-4 text-xs font-semibold border-b-2 transition-colors flex items-center gap-1.5 ${
              activeTab === 'appointments'
                ? 'border-cyan-800 text-cyan-900'
                : 'border-transparent text-stone-500 hover:text-stone-800'
            }`}
          >
            <span>Appointments</span>
            <span className="px-1.5 py-0.2 rounded-full bg-cyan-100 text-cyan-800 text-[10px] font-bold">
              {appointments.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('code')}
            className={`py-3 px-4 text-xs font-semibold border-b-2 transition-colors ${
              activeTab === 'code'
                ? 'border-cyan-800 text-cyan-900'
                : 'border-transparent text-stone-500 hover:text-stone-800'
            }`}
          >
            Config Export
          </button>
        </div>

        {/* Body Content */}
        <div className="p-6 max-h-[68vh] overflow-y-auto space-y-6">
          
          {saveSuccess && (
            <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Clinic settings updated and stored locally!</span>
            </div>
          )}

          {/* TAB 1: Contact Info */}
          {activeTab === 'info' && (
            <form onSubmit={handleSaveInfo} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                  Verified WhatsApp Number
                </label>
                <input
                  type="text"
                  placeholder="+961 70 123456"
                  value={whatsappInput}
                  onChange={(e) => setWhatsappInput(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs sm:text-sm"
                />
                <p className="text-[11px] text-stone-500 mt-1">
                  Entering the real Lebanese number enables instant 1-tap WhatsApp chat across the entire website.
                </p>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="text"
                  placeholder="+961 8 800000"
                  value={phoneInput}
                  onChange={(e) => setPhoneInput(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs sm:text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                  Exact Street Address in Zahlé
                </label>
                <input
                  type="text"
                  placeholder="e.g. Boulevard Zahle, Near Ksara Roundabout, Zahlé"
                  value={addressInput}
                  onChange={(e) => setAddressInput(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs sm:text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                  Instagram Handle
                </label>
                <input
                  type="text"
                  value={instagramInput}
                  onChange={(e) => setInstagramInput(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs sm:text-sm"
                />
              </div>

              <div className="pt-3 flex items-center justify-between border-t border-stone-100">
                <button
                  type="button"
                  onClick={handleResetDefaults}
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-stone-500 hover:text-stone-800"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset Defaults</span>
                </button>

                <button
                  type="submit"
                  className="px-5 py-2.5 bg-cyan-800 hover:bg-cyan-900 text-white rounded-xl text-xs font-semibold shadow-xs"
                >
                  Save Clinic Details
                </button>
              </div>
            </form>
          )}

          {/* TAB 2: Doctors Management */}
          {activeTab === 'doctors' && (
            <div className="space-y-4">
              <p className="text-xs text-stone-600">
                Update doctor names and specialties once confirmed from the official Dental & Beyond Instagram or registry:
              </p>

              {doctors.map((doc) => (
                <div key={doc.id} className="p-4 rounded-xl border border-stone-200 bg-stone-50 space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold text-stone-600 mb-1">Doctor Full Name</label>
                      <input
                        type="text"
                        value={doc.name}
                        onChange={(e) => updateDoctor(doc.id, { 
                          name: e.target.value,
                          nameStatus: !e.target.value.includes('confirmed') ? 'verified' : 'to_be_confirmed'
                        })}
                        className="w-full px-3 py-1.5 bg-white border border-stone-200 rounded-lg text-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-stone-600 mb-1">Title & Specialty</label>
                      <input
                        type="text"
                        value={doc.specialty}
                        onChange={(e) => updateDoctor(doc.id, { specialty: e.target.value })}
                        className="w-full px-3 py-1.5 bg-white border border-stone-200 rounded-lg text-xs"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-stone-600 mb-1">Short Clinical Bio</label>
                    <textarea
                      rows={2}
                      value={doc.bio}
                      onChange={(e) => updateDoctor(doc.id, { bio: e.target.value })}
                      className="w-full p-2 bg-white border border-stone-200 rounded-lg text-xs"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 3: Appointments List */}
          {activeTab === 'appointments' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-stone-700">
                  Received Appointment Inquiries ({appointments.length})
                </span>
                <span className="text-[11px] text-stone-500">
                  Stored securely in browser storage
                </span>
              </div>

              {appointments.length === 0 ? (
                <div className="p-8 text-center bg-stone-50 rounded-xl border border-stone-200 text-xs text-stone-500">
                  No appointment requests yet. Book a test request from the booking form to see it here!
                </div>
              ) : (
                <div className="space-y-3">
                  {appointments.map((apt) => (
                    <div 
                      key={apt.id}
                      className="p-4 rounded-xl border border-stone-200 bg-white shadow-2xs flex flex-col sm:flex-row justify-between gap-3"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <h4 className="text-sm font-bold text-stone-900">{apt.patientName}</h4>
                          <span className={`px-2 py-0.5 rounded-md text-[10px] font-semibold ${
                            apt.status === 'confirmed' ? 'bg-emerald-100 text-emerald-800' :
                            apt.status === 'cancelled' ? 'bg-rose-100 text-rose-800' : 'bg-amber-100 text-amber-800'
                          }`}>
                            {apt.status === 'pending_confirmation' ? 'Pending Confirmation' : apt.status}
                          </span>
                        </div>
                        <p className="text-xs text-stone-600">
                          <strong>Treatment:</strong> {apt.treatmentName} • <strong>Doctor:</strong> {apt.doctorName}
                        </p>
                        <p className="text-xs text-stone-600">
                          <strong>Date:</strong> {apt.date} at {apt.timeSlot} • <strong>Phone:</strong> {apt.phone}
                        </p>
                        {apt.notes && (
                          <p className="text-xs text-stone-500 italic mt-1">"{apt.notes}"</p>
                        )}
                      </div>

                      <div className="flex items-center gap-2 self-end sm:self-center">
                        <a
                          href={`https://wa.me/?text=${encodeURIComponent(`Hello ${apt.patientName}, this is Dental & Beyond clinic in Zahlé confirming your requested appointment for ${apt.treatmentName} on ${apt.date} at ${apt.timeSlot}.`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold hover:bg-emerald-100"
                        >
                          Confirm via WhatsApp
                        </a>

                        {apt.status !== 'cancelled' && (
                          <button
                            onClick={() => cancelAppointment(apt.id)}
                            className="p-1.5 rounded-lg text-rose-600 hover:bg-rose-50"
                            title="Cancel appointment"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 4: Code Export */}
          {activeTab === 'code' && (
            <div className="space-y-3">
              <p className="text-xs text-stone-600">
                Copy this generated TypeScript code snippet to permanently update <code className="bg-stone-100 px-1 py-0.5 rounded text-cyan-800 font-mono text-[11px]">src/config/clinicData.ts</code> in the codebase:
              </p>

              <div className="relative bg-stone-900 rounded-xl p-4 text-stone-100 font-mono text-xs overflow-x-auto">
                <pre>{generatedTsConfig}</pre>
                <button
                  onClick={copyConfigToClipboard}
                  className="absolute top-3 right-3 px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-white text-xs flex items-center gap-1.5 border border-stone-700"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>{copiedCode ? 'Copied!' : 'Copy Code'}</span>
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
