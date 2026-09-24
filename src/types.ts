export interface ClinicInfo {
  name: string;
  tagline: string;
  city: string;
  region: string;
  country: string;
  address: string;
  addressStatus: 'verified' | 'to_be_confirmed';
  phone: string;
  phoneStatus: 'verified' | 'to_be_confirmed';
  whatsapp: string;
  whatsappStatus: 'verified' | 'to_be_confirmed';
  email: string;
  emailStatus: 'verified' | 'to_be_confirmed';
  instagram: string;
  instagramUrl: string;
  googleMapsUrl: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  openingHours: {
    day: string;
    hours: string;
    status: 'verified' | 'to_be_confirmed';
  }[];
}

export interface Doctor {
  id: string;
  name: string;
  nameStatus: 'verified' | 'to_be_confirmed';
  title: string;
  titleStatus: 'verified' | 'to_be_confirmed';
  specialty: string;
  specialtyStatus: 'verified' | 'to_be_confirmed';
  bio: string;
  imageUrl: string;
  imageAlt: string;
  isVerifiedPhoto: boolean;
  qualificationsNote?: string;
}

export interface Treatment {
  id: string;
  name: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  suitableFor: string[];
  whatToExpect: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  duration: string;
  imageUrl: string;
  imageAlt: string;
  isVerifiedPhoto: boolean;
}

export type GalleryCategory = 'all' | 'clinic' | 'team' | 'treatments' | 'transformations';

export interface GalleryItem {
  id: string;
  category: 'clinic' | 'team' | 'treatments' | 'transformations';
  title: string;
  caption: string;
  imageUrl: string;
  imageAlt: string;
  isVerifiedPhoto: boolean;
  subcategory?: string;
  note?: string;
}

export interface BeforeAfterCase {
  id: string;
  treatmentName: string;
  description: string;
  beforeImageUrl: string;
  afterImageUrl: string;
  disclaimer: string;
  duration?: string;
  isVerifiedPhoto: boolean;
}

export interface Review {
  id: string;
  authorName: string;
  rating: number;
  date: string;
  comment: string;
  source: 'Google Review' | 'Patient Feedback' | 'Verified Visit';
  treatment?: string;
}

export interface AppointmentRequest {
  id: string;
  createdAt: string;
  patientName: string;
  phone: string;
  email?: string;
  treatmentId: string;
  treatmentName: string;
  doctorId: string;
  doctorName: string;
  date: string;
  timeSlot: string;
  notes?: string;
  status: 'pending_confirmation' | 'confirmed' | 'cancelled';
}

export interface InstagramPost {
  id: string;
  postUrl: string;
  imageUrl: string;
  caption: string;
  likes: number;
  comments: number;
  date: string;
}
