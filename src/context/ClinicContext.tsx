import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  ClinicInfo, 
  Doctor, 
  Treatment, 
  GalleryItem, 
  BeforeAfterCase, 
  Review, 
  AppointmentRequest, 
  InstagramPost 
} from '../types';
import { 
  defaultClinicInfo, 
  defaultDoctors, 
  defaultTreatments, 
  defaultGallery, 
  defaultBeforeAfterCases, 
  defaultReviews, 
  defaultInstagramPosts 
} from '../config/clinicData';

interface ClinicContextType {
  clinic: ClinicInfo;
  doctors: Doctor[];
  treatments: Treatment[];
  gallery: GalleryItem[];
  beforeAfterCases: BeforeAfterCase[];
  reviews: Review[];
  instagramPosts: InstagramPost[];
  appointments: AppointmentRequest[];
  selectedTreatmentModal: Treatment | null;
  setSelectedTreatmentModal: (treatment: Treatment | null) => void;
  isBookingModalOpen: boolean;
  setIsBookingModalOpen: (open: boolean) => void;
  bookingPreselect: { treatmentId?: string; doctorId?: string };
  setBookingPreselect: (data: { treatmentId?: string; doctorId?: string }) => void;
  isClinicSettingsOpen: boolean;
  setIsClinicSettingsOpen: (open: boolean) => void;
  updateClinicInfo: (updated: Partial<ClinicInfo>) => void;
  updateDoctor: (id: string, updated: Partial<Doctor>) => void;
  addAppointmentRequest: (req: Omit<AppointmentRequest, 'id' | 'createdAt' | 'status'>) => AppointmentRequest;
  cancelAppointment: (id: string) => void;
  getWhatsAppLink: (customText?: string) => string;
  isWhatsAppConfigured: boolean;
}

const ClinicContext = createContext<ClinicContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY_CLINIC = 'dental_beyond_clinic_info_v1';
const LOCAL_STORAGE_KEY_DOCTORS = 'dental_beyond_doctors_v1';
const LOCAL_STORAGE_KEY_APPOINTMENTS = 'dental_beyond_appointments_v1';

export const ClinicProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [clinic, setClinic] = useState<ClinicInfo>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY_CLINIC);
      return saved ? JSON.parse(saved) : defaultClinicInfo;
    } catch {
      return defaultClinicInfo;
    }
  });

  const [doctors, setDoctors] = useState<Doctor[]>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY_DOCTORS);
      return saved ? JSON.parse(saved) : defaultDoctors;
    } catch {
      return defaultDoctors;
    }
  });

  const [appointments, setAppointments] = useState<AppointmentRequest[]>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY_APPOINTMENTS);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [treatments] = useState<Treatment[]>(defaultTreatments);
  const [gallery] = useState<GalleryItem[]>(defaultGallery);
  const [beforeAfterCases] = useState<BeforeAfterCase[]>(defaultBeforeAfterCases);
  const [reviews] = useState<Review[]>(defaultReviews);
  const [instagramPosts] = useState<InstagramPost[]>(defaultInstagramPosts);

  const [selectedTreatmentModal, setSelectedTreatmentModal] = useState<Treatment | null>(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState<boolean>(false);
  const [bookingPreselect, setBookingPreselect] = useState<{ treatmentId?: string; doctorId?: string }>({});
  const [isClinicSettingsOpen, setIsClinicSettingsOpen] = useState<boolean>(false);

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY_CLINIC, JSON.stringify(clinic));
    } catch (e) {
      console.error('Error saving clinic info', e);
    }
  }, [clinic]);

  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY_DOCTORS, JSON.stringify(doctors));
    } catch (e) {
      console.error('Error saving doctors', e);
    }
  }, [doctors]);

  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY_APPOINTMENTS, JSON.stringify(appointments));
    } catch (e) {
      console.error('Error saving appointments', e);
    }
  }, [appointments]);

  const updateClinicInfo = (updated: Partial<ClinicInfo>) => {
    setClinic(prev => ({ ...prev, ...updated }));
  };

  const updateDoctor = (id: string, updated: Partial<Doctor>) => {
    setDoctors(prev => prev.map(doc => doc.id === id ? { ...doc, ...updated } : doc));
  };

  const addAppointmentRequest = (req: Omit<AppointmentRequest, 'id' | 'createdAt' | 'status'>) => {
    const newReq: AppointmentRequest = {
      ...req,
      id: 'apt-' + Date.now(),
      createdAt: new Date().toISOString(),
      status: 'pending_confirmation'
    };
    setAppointments(prev => [newReq, ...prev]);
    return newReq;
  };

  const cancelAppointment = (id: string) => {
    setAppointments(prev => prev.map(a => a.id === id ? { ...a, status: 'cancelled' } : a));
  };

  // Check if WhatsApp is configured with real digits
  const isWhatsAppConfigured = Boolean(
    clinic.whatsapp && 
    clinic.whatsappStatus === 'verified' && 
    clinic.whatsapp.replace(/\D/g, '').length >= 7
  );

  const getWhatsAppLink = (customText?: string) => {
    const defaultMsg = customText || "Hello Dental & Beyond, I found you online and would like to book a dental appointment.";
    const encoded = encodeURIComponent(defaultMsg);

    if (isWhatsAppConfigured) {
      const cleanPhone = clinic.whatsapp.replace(/\D/g, '');
      return `https://wa.me/${cleanPhone}?text=${encoded}`;
    }

    // If not yet configured, provide Instagram DM or direct WhatsApp link fallback
    return `https://api.whatsapp.com/send?text=${encoded}`;
  };

  return (
    <ClinicContext.Provider
      value={{
        clinic,
        doctors,
        treatments,
        gallery,
        beforeAfterCases,
        reviews,
        instagramPosts,
        appointments,
        selectedTreatmentModal,
        setSelectedTreatmentModal,
        isBookingModalOpen,
        setIsBookingModalOpen,
        bookingPreselect,
        setBookingPreselect,
        isClinicSettingsOpen,
        setIsClinicSettingsOpen,
        updateClinicInfo,
        updateDoctor,
        addAppointmentRequest,
        cancelAppointment,
        getWhatsAppLink,
        isWhatsAppConfigured
      }}
    >
      {children}
    </ClinicContext.Provider>
  );
};

export const useClinic = () => {
  const ctx = useContext(ClinicContext);
  if (!ctx) {
    throw new Error('useClinic must be used within a ClinicProvider');
  }
  return ctx;
};
