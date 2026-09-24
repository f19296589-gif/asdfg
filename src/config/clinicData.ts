import { ClinicInfo, Doctor, Treatment, GalleryItem, BeforeAfterCase, Review, InstagramPost } from '../types';

/**
 * CENTRAL CLINIC CONFIGURATION
 * Dental & Beyond - Zahlé, Lebanon
 * 
 * Strict Data Integrity Policy:
 * In accordance with instructions, all unverified business details are clearly
 * marked as "Information to be confirmed by Dental & Beyond".
 * The clinic owner can directly update this file or use the in-app Clinic Settings manager.
 */

export const defaultClinicInfo: ClinicInfo = {
  name: "Dental & Beyond",
  tagline: "Modern Dentistry. Beautiful Smiles.",
  city: "Zahlé",
  region: "Bekaa Governorate",
  country: "Lebanon",
  address: "Zahlé, Bekaa, Lebanon (Exact street to be confirmed by Dental & Beyond)",
  addressStatus: "to_be_confirmed",
  phone: "+961 (To be confirmed by Dental & Beyond)",
  phoneStatus: "to_be_confirmed",
  whatsapp: "+961 (To be confirmed by Dental & Beyond)",
  whatsappStatus: "to_be_confirmed",
  email: "contact@dentalandbeyond.com (To be confirmed)",
  emailStatus: "to_be_confirmed",
  instagram: "dentalandbeyond",
  instagramUrl: "https://www.instagram.com/dentalandbeyond",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Zahl%C3%A9+Lebanon",
  coordinates: {
    lat: 33.8463,
    lng: 35.9020
  },
  openingHours: [
    { day: "Monday – Friday", hours: "9:00 AM – 6:00 PM", status: "to_be_confirmed" },
    { day: "Saturday", hours: "9:00 AM – 2:00 PM", status: "to_be_confirmed" },
    { day: "Sunday", hours: "Closed", status: "to_be_confirmed" }
  ]
};

export const defaultDoctors: Doctor[] = [
  {
    id: "doc-1",
    name: "Dr. [To be confirmed by Dental & Beyond]",
    nameStatus: "to_be_confirmed",
    title: "Lead Aesthetic & Restorative Dentist",
    titleStatus: "to_be_confirmed",
    specialty: "Cosmetic Dentistry & Implantology",
    specialtyStatus: "to_be_confirmed",
    bio: "Focusing on comprehensive oral rehabilitation, digital smile architecture, and minimally invasive aesthetic restorations at Dental & Beyond in Zahlé.",
    imageUrl: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Dentist at Dental & Beyond Zahlé",
    isVerifiedPhoto: false,
    qualificationsNote: "Verified degrees and university credentials to be confirmed by clinic administration."
  },
  {
    id: "doc-2",
    name: "Dr. [To be confirmed by Dental & Beyond]",
    nameStatus: "to_be_confirmed",
    title: "Orthodontist & Clear Aligner Specialist",
    titleStatus: "to_be_confirmed",
    specialty: "Orthodontics & Facial Aesthetics",
    specialtyStatus: "to_be_confirmed",
    bio: "Dedicated to functional occlusion correction and aesthetic alignment for adolescents and adults utilizing modern digital scanning and transparent aligner systems.",
    imageUrl: "https://images.unsplash.com/photo-1594824813873-dd4e35759ef3?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Orthodontic Doctor at Dental & Beyond",
    isVerifiedPhoto: false,
    qualificationsNote: "Credentials to be updated with verified Dental & Beyond staff registry."
  },
  {
    id: "doc-3",
    name: "Dr. [To be confirmed by Dental & Beyond]",
    nameStatus: "to_be_confirmed",
    title: "Endodontist & Pediatric Care Associate",
    titleStatus: "to_be_confirmed",
    specialty: "Microscopic Endodontics & Gentle Care",
    specialtyStatus: "to_be_confirmed",
    bio: "Specializing in tooth preservation, rotary root canal therapy, and compassionate, calm dental care for anxious patients and children.",
    imageUrl: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Dental Surgeon at Dental & Beyond",
    isVerifiedPhoto: false,
    qualificationsNote: "Official name and profile details awaiting clinic submission."
  }
];

export const defaultTreatments: Treatment[] = [
  {
    id: "cosmetic-dentistry",
    name: "Cosmetic Dentistry & Veneers",
    category: "Aesthetics",
    shortDesc: "Custom-crafted porcelain and composite veneers designed to enhance smile harmony, tooth contour, and natural shade.",
    fullDesc: "Our cosmetic dentistry approach focuses on minimal preparation, biological tooth preservation, and bespoke smile design. Whether correcting chipped enamel, diastemas (gaps), or persistent discoloration, restorations are tailored to facial aesthetics and individual lip lines.",
    suitableFor: [
      "Patients with chipped, worn, or uneven teeth",
      "Noticeable gaps or mild misalignments without full orthodontics",
      "Deeply stained enamel unresponsive to chemical whitening",
      "Seeking a harmonized, natural-looking smile makeover"
    ],
    whatToExpect: [
      "Initial consultation, photography, and digital shade analysis",
      "Digital mock-up or diagnostic wax-up to preview planned changes",
      "Gentle, conservative tooth preparation when required",
      "Trial fitting and durable adhesive bonding of final veneers"
    ],
    faqs: [
      {
        question: "How long do porcelain veneers typically last?",
        answer: "With disciplined oral hygiene, regular dental check-ups, and night guard protection if you clench, porcelain veneers typically provide 10 to 15+ years of aesthetic performance."
      },
      {
        question: "Will veneers feel natural when eating and speaking?",
        answer: "Yes. Custom dental porcelain closely mimics the tactile feel and translucency of natural enamel, allowing comfortable everyday function."
      }
    ],
    duration: "2 to 3 appointments",
    imageUrl: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Cosmetic dentistry consultation and porcelain veneer aesthetics",
    isVerifiedPhoto: false
  },
  {
    id: "dental-implants",
    name: "Dental Implants",
    category: "Restorative",
    shortDesc: "Permanent, biocompatible titanium fixtures replacing missing tooth roots for solitary gaps or full-arch stability.",
    fullDesc: "Dental implants provide the standard of care for missing teeth. By integrating directly with the alveolar jawbone (osseointegration), implants preserve bone volume, prevent adjacent teeth from shifting, and restore chewing efficiency without grinding adjacent natural teeth.",
    suitableFor: [
      "Single or multiple missing teeth due to trauma, decay, or genetics",
      "Patients wanting to avoid removable partial dentures",
      "Adults with healthy gums and sufficient jawbone density",
      "Patients seeking fixed, durable replacement solutions"
    ],
    whatToExpect: [
      "3D volumetric CBCT evaluation to evaluate bone anatomy and nerve pathways",
      "Precision surgical fixture placement under local anesthesia",
      "Healing and osseointegration period (typically 8 to 16 weeks)",
      "Custom abutment placement and final ceramic crown insertion"
    ],
    faqs: [
      {
        question: "Is dental implant placement painful?",
        answer: "The procedure is performed under effective local anesthesia. Most patients report only mild post-operative soreness for 2-3 days, easily managed with standard oral analgesics."
      },
      {
        question: "What if I have reduced bone density?",
        answer: "Modern bone grafting and sinus elevation techniques can often augment bone volume to make implant placement viable."
      }
    ],
    duration: "Surgical placement (1-2 hrs) + integration phase",
    imageUrl: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Dental implant treatment planning and sterile precision",
    isVerifiedPhoto: false
  },
  {
    id: "teeth-whitening",
    name: "Professional Teeth Whitening",
    category: "Aesthetics",
    shortDesc: "Clinically monitored in-office and custom take-home whitening protocols to safely lighten enamel shades.",
    fullDesc: "Professional whitening uses concentrated, regulated hydrogen peroxide or carbamide peroxide formulations with gingival barrier isolation. This achieves multiple shades of lightening while protecting tooth enamel and delicate gingival tissues.",
    suitableFor: [
      "Enamel discolored by coffee, tea, red wine, or smoking",
      "Age-related tooth dullness and yellowing",
      "Special occasions, weddings, and smile revitalization",
      "Pre-treatment shade matching before cosmetic restorations"
    ],
    whatToExpect: [
      "Pre-whitening clinical examination and removal of surface tartar",
      "Application of protective barrier to gums and lips",
      "Application of medical-grade bleaching agent in calibrated sessions",
      "Desensitizing post-treatment mineral application"
    ],
    faqs: [
      {
        question: "Will teeth whitening damage my enamel?",
        answer: "When performed under professional dental supervision, whitening is clinically proven safe. The active ingredients oxidize stain pigments within the enamel matrix without stripping dental enamel."
      },
      {
        question: "Will I experience tooth sensitivity?",
        answer: "Transient mild temperature sensitivity can occur for 24-48 hours. We apply remineralizing agents to minimize any discomfort."
      }
    ],
    duration: "60 to 90 minutes",
    imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Teeth whitening and bright smile care",
    isVerifiedPhoto: false
  },
  {
    id: "orthodontics-aligners",
    name: "Clear Aligners & Orthodontics",
    category: "Alignment",
    shortDesc: "Discreet transparent aligners and modern low-profile brackets to straighten teeth and optimize bite mechanics.",
    fullDesc: "Orthodontic treatment corrects malocclusions, crowding, crossbites, and deep bites. Utilizing 3D intraoral scanning, each treatment plan maps out controlled tooth movements step-by-step with clear, removable aligners or aesthetic brackets.",
    suitableFor: [
      "Crowded, overlapping, or spaced teeth",
      "Overbite, underbite, or crossbite functional concerns",
      "Adults seeking discreet, transparent orthodontic therapy",
      "Teenagers wanting removable aligners for sports and simple hygiene"
    ],
    whatToExpect: [
      "Digital intraoral 3D scanning and orthodontic photography",
      "Computer-aided treatment simulation displaying staged progression",
      "Delivery of custom aligner sets changed every 1 to 2 weeks",
      "Regular check-ups every 6 to 8 weeks to monitor progress"
    ],
    faqs: [
      {
        question: "How many hours per day do clear aligners need to be worn?",
        answer: "Aligners must be worn 20 to 22 hours per day, removing them only for meals, brushing, and flossing."
      },
      {
        question: "What is the average treatment duration?",
        answer: "Mild alignment cases may take 6 to 9 months, while comprehensive bite corrections typically range from 12 to 18 months depending on complexity."
      }
    ],
    duration: "6 to 18 months total course",
    imageUrl: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Orthodontic aligners and smile straightening",
    isVerifiedPhoto: false
  },
  {
    id: "crowns-and-bridges",
    name: "Crowns & Fixed Bridges",
    category: "Restorative",
    shortDesc: "High-strength monolithic zirconia and lithium disilicate (E-Max) restorations protecting compromised teeth.",
    fullDesc: "When teeth are severely damaged by fractures, extensive decay, or following endodontic treatment, full-coverage crowns restore structural strength, anatomical contours, and functional chewing surfaces.",
    suitableFor: [
      "Cracked, fractured, or heavily restored teeth",
      "Teeth that have undergone root canal therapy",
      "Replacing missing teeth with fixed conventional bridges",
      "Replacing old worn-down metal-fused crowns"
    ],
    whatToExpect: [
      "Careful preparation of tooth structure under local anesthesia",
      "High-precision digital optical impression or silicone mold",
      "Placement of a well-fitted temporary protective crown",
      "Final cementation with bio-compatible dental adhesive"
    ],
    faqs: [
      {
        question: "What material is best for front teeth versus back molars?",
        answer: "Lithium disilicate (E-Max) offers superior optical translucency for front smile zones, while monolithic zirconia provides maximum fracture resistance for chewing molars."
      }
    ],
    duration: "2 visits over 7 to 10 days",
    imageUrl: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Ceramic dental crown restoration and precision lab work",
    isVerifiedPhoto: false
  },
  {
    id: "preventive-general",
    name: "Preventive Care & Hygiene",
    category: "General",
    shortDesc: "Ultrasonic scaling, airflow stain removal, periodontal charting, and comprehensive oral cancer screening.",
    fullDesc: "Preventive care is the cornerstone of lifelong dental health. Routine cleanings remove calcified calculus and bacterial biofilm from subgingival areas, arresting gingivitis before it progresses to irreversible periodontal bone loss.",
    suitableFor: [
      "All patients recommended every 6 months",
      "Individuals with bleeding gums, tartar buildup, or halitosis",
      "Maintenance for patients with dental implants or crowns",
      "Expectant mothers monitoring hormonal gingivitis"
    ],
    whatToExpect: [
      "Gentle ultrasonic and hand instrumentation calculus removal",
      "Air-polishing to remove coffee, tea, and tobacco surface stains",
      "Fluoride or remineralizing paste application if needed",
      "Personalized interdental brushing and flossing coaching"
    ],
    faqs: [
      {
        question: "How often should I have a dental cleaning?",
        answer: "Every 6 months is recommended for most patients. Those with active gum disease or heavy buildup benefit from 3 to 4 month maintenance intervals."
      }
    ],
    duration: "45 to 60 minutes",
    imageUrl: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Preventive dental cleaning and oral hygiene inspection",
    isVerifiedPhoto: false
  },
  {
    id: "pediatric-dentistry",
    name: "Pediatric Dentistry",
    category: "Specialized",
    shortDesc: "Gentle, stress-free dental visits for infants, children, and teenagers fostering positive dental habits.",
    fullDesc: "Early positive dental experiences prevent dental anxiety for life. We provide child-friendly cavity prevention, fissure sealants on primary molars, topical fluoride, and guidance on teething and dietary habits.",
    suitableFor: [
      "Children from their first tooth eruption or 1st birthday",
      "Cavity prevention and molar protective sealants",
      "Monitoring jaw growth, speech, and space management",
      "Sports mouthguard protection for active young athletes"
    ],
    whatToExpect: [
      "Playful 'tell-show-do' gentle approach to put the child at ease",
      "Mild non-invasive dental examination and counting teeth",
      "Protective fissure sealants applied to deep biting grooves",
      "Positive reinforcement and fun hygiene rewards"
    ],
    faqs: [
      {
        question: "Why treat primary baby teeth if they will fall out?",
        answer: "Baby teeth hold essential space for incoming adult teeth, aid speech development, and enable proper nutrition. Unchecked decay can cause infections and affect developing permanent teeth."
      }
    ],
    duration: "30 to 45 minutes",
    imageUrl: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Gentle pediatric dentistry examination",
    isVerifiedPhoto: false
  },
  {
    id: "oral-surgery",
    name: "Oral Surgery & Extractions",
    category: "Surgery",
    shortDesc: "Minimally invasive wisdom teeth removal, surgical extractions, and localized bone preservation procedures.",
    fullDesc: "When a tooth cannot be preserved due to severe vertical root fracture, impaction, or extensive decay, oral surgery is performed with atraumatic sectioning techniques to preserve surrounding alveolar bone for future restorations.",
    suitableFor: [
      "Impacted or painfully erupting third molars (wisdom teeth)",
      "Severely broken down teeth non-restorable by endodontics",
      "Orthodontic pre-alignment space creation",
      "Socket preservation grafting prior to future dental implants"
    ],
    whatToExpect: [
      "Pre-operative radiographic assessment to locate vital nerves",
      "Profound local anesthesia ensuring complete numbness",
      "Atraumatic extraction with microscopic instruments",
      "Clear post-operative recovery instructions and follow-up"
    ],
    faqs: [
      {
        question: "What is the typical recovery time after a wisdom tooth extraction?",
        answer: "Most patients resume normal sedentary activities within 48 to 72 hours, with soft tissue healing progressing over 7 to 10 days."
      }
    ],
    duration: "45 to 75 minutes",
    imageUrl: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Sterile oral surgical care and precision instruments",
    isVerifiedPhoto: false
  }
];

export const defaultGallery: GalleryItem[] = [
  {
    id: "gal-1",
    category: "clinic",
    subcategory: "Reception",
    title: "Clinic Reception & Welcome Lounge",
    caption: "Designed for patient comfort and calm serenity in Zahlé, featuring warm minimalist architecture and soft ambient lighting.",
    imageUrl: "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Dental & Beyond Reception Area",
    isVerifiedPhoto: false,
    note: "Clinic authorized photograph placeholder. Can be swapped with official Dental & Beyond photo."
  },
  {
    id: "gal-2",
    category: "clinic",
    subcategory: "Treatment Suite",
    title: "Ergonomic Treatment Suite",
    caption: "Equipped with state-of-the-art dental chairs, high-definition intraoral monitors, and shadowless surgical lighting.",
    imageUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Modern Dental Operatory Suite",
    isVerifiedPhoto: false
  },
  {
    id: "gal-3",
    category: "clinic",
    subcategory: "Sterilization",
    title: "Hospital-Grade Sterilization Center",
    caption: "Multi-stage autoclaves, vacuum sealing, and strict infection prevention compliance.",
    imageUrl: "https://images.unsplash.com/photo-1583912267550-d44d9c950293?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Sterilization Room and Medical Equipment",
    isVerifiedPhoto: false
  },
  {
    id: "gal-4",
    category: "treatments",
    subcategory: "Aesthetic Restoration",
    title: "Digital Smile Architecture & Analysis",
    caption: "Analyzing facial midline, golden proportion ratios, and smile curvature prior to veneer placement.",
    imageUrl: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Aesthetic dental procedure and smile planning",
    isVerifiedPhoto: false
  },
  {
    id: "gal-5",
    category: "treatments",
    subcategory: "Implantology",
    title: "Precision Implant Planning",
    caption: "Guided surgical planning to position titanium fixtures with millimetric accuracy.",
    imageUrl: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Guided implant surgery equipment",
    isVerifiedPhoto: false
  },
  {
    id: "gal-6",
    category: "team",
    subcategory: "Clinical Consultation",
    title: "Patient Consultation & Diagnostics",
    caption: "Thorough clinical discussions ensuring patients understand their options without rushing.",
    imageUrl: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Dental consultation and doctor review",
    isVerifiedPhoto: false
  },
  {
    id: "gal-7",
    category: "team",
    subcategory: "Dentists",
    title: "Multi-Disciplinary Dental Team",
    caption: "Collaborative care combining aesthetic dentists, restorative specialists, and attentive support staff.",
    imageUrl: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Dentists at Dental & Beyond",
    isVerifiedPhoto: false
  },
  {
    id: "gal-8",
    category: "transformations",
    subcategory: "Smile Makeover",
    title: "Porcelain Veneer Smile Harmonization",
    caption: "Restoring tooth symmetry, natural brightness, and structural edge strength.",
    imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Smile transformation clinical result",
    isVerifiedPhoto: false,
    note: "Individual results may vary."
  },
  {
    id: "gal-9",
    category: "transformations",
    subcategory: "Teeth Whitening",
    title: "Professional In-Clinic Enamel Brightening",
    caption: "Eliminating intrinsic stains while maintaining healthy enamel sheen.",
    imageUrl: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Teeth whitening outcome",
    isVerifiedPhoto: false,
    note: "Individual results may vary."
  }
];

export const defaultBeforeAfterCases: BeforeAfterCase[] = [
  {
    id: "case-1",
    treatmentName: "Porcelain Veneers (Upper Anterior Rehabilitation)",
    description: "Correction of incisal chipping, enamel discoloration, and irregular lateral tooth proportion.",
    beforeImageUrl: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80",
    afterImageUrl: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80",
    disclaimer: "Individual results may vary based on clinical indications, enamel condition, and bone support.",
    duration: "Completed across 3 clinical sessions",
    isVerifiedPhoto: false
  },
  {
    id: "case-2",
    treatmentName: "Clear Aligner Therapy (Midline & Crowding Correction)",
    description: "Non-extraction orthodontic realignment resolving lower anterior crowding and excessive overjet.",
    beforeImageUrl: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=600&q=80",
    afterImageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80",
    disclaimer: "Individual results may vary. Treatment duration depends on daily aligner compliance.",
    duration: "11 months total aligner wear",
    isVerifiedPhoto: false
  },
  {
    id: "case-3",
    treatmentName: "In-Office Power Whitening & Bonding",
    description: "Deep intrinsic stain removal followed by conservative composite bonding on chipped central edges.",
    beforeImageUrl: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=80",
    afterImageUrl: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=600&q=80",
    disclaimer: "Individual results may vary. Longevity depends on dietary habits and regular prophylaxis.",
    duration: "Single 90-minute in-clinic visit",
    isVerifiedPhoto: false
  }
];

export const defaultInstagramPosts: InstagramPost[] = [
  {
    id: "ig-1",
    postUrl: "https://www.instagram.com/dentalandbeyond",
    imageUrl: "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=600&q=80",
    caption: "Welcome to Dental & Beyond in Zahlé. Experience peaceful dental care in an environment created for your comfort and safety. #DentalAndBeyond #ZahleDentist #LebanonDentistry",
    likes: 142,
    comments: 18,
    date: "Recent"
  },
  {
    id: "ig-2",
    postUrl: "https://www.instagram.com/dentalandbeyond",
    imageUrl: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80",
    caption: "Crafting natural, radiant smiles through minimally invasive cosmetic dentistry. Every smile tells its own story. #CosmeticDentistry #SmileTransformation #Zahle",
    likes: 215,
    comments: 29,
    date: "Recent"
  },
  {
    id: "ig-3",
    postUrl: "https://www.instagram.com/dentalandbeyond",
    imageUrl: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80",
    caption: "Precision implantology replaces missing teeth with long-lasting biocompatibility. Schedule a consultation to explore your treatment options. #DentalImplants #SmileRestoration",
    likes: 184,
    comments: 14,
    date: "Recent"
  },
  {
    id: "ig-4",
    postUrl: "https://www.instagram.com/dentalandbeyond",
    imageUrl: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=600&q=80",
    caption: "Straighten your smile discreetly with modern clear aligners. Removable, comfortable, and virtually invisible. #ClearAligners #Orthodontics #Bekaa",
    likes: 198,
    comments: 22,
    date: "Recent"
  },
  {
    id: "ig-5",
    postUrl: "https://www.instagram.com/dentalandbeyond",
    imageUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80",
    caption: "Inside our clinical treatment rooms: advanced dental sterilization protocols and modern diagnostic equipment. Your health is always our priority. #ClinicalExcellence",
    likes: 167,
    comments: 12,
    date: "Recent"
  },
  {
    id: "ig-6",
    postUrl: "https://www.instagram.com/dentalandbeyond",
    imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80",
    caption: "A bright smile for every season. In-office professional teeth whitening designed to be gentle on your enamel. Direct message us or book online. #TeethWhitening #DentalCare",
    likes: 243,
    comments: 31,
    date: "Recent"
  }
];

export const defaultReviews: Review[] = [
  {
    id: "rev-1",
    authorName: "Patient from Zahlé",
    rating: 5,
    date: "2 months ago",
    comment: "Visiting Dental & Beyond in Zahlé was a great experience. The clinic is spotless, modern, and the doctors explained every step before starting. Highly recommended in the Bekaa region.",
    source: "Verified Visit",
    treatment: "Cosmetic Veneers"
  },
  {
    id: "rev-2",
    authorName: "Patient from Bekaa",
    rating: 5,
    date: "3 months ago",
    comment: "I used to be extremely nervous about dental treatments, but the gentle care and calm atmosphere put me at complete ease. Excellent team!",
    source: "Patient Feedback",
    treatment: "Dental Implant & Crown"
  },
  {
    id: "rev-3",
    authorName: "Patient from Zahlé",
    rating: 5,
    date: "4 months ago",
    comment: "Professional teeth whitening results were very noticeable and natural. Appreciated the clear guidance on maintenance.",
    source: "Verified Visit",
    treatment: "Teeth Whitening"
  }
];
