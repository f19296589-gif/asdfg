import React from 'react';
import { useClinic } from '../context/ClinicContext';
import { 
  Calendar, 
  MapPin, 
  ShieldCheck, 
  Sparkles, 
  Clock, 
  Instagram,
  ArrowRight,
  MessageCircle
} from 'lucide-react';

export const Hero: React.FC<{
  onBookClick: () => void;
  onExploreTreatments: () => void;
}> = ({ onBookClick, onExploreTreatments }) => {
  const { clinic, getWhatsAppLink } = useClinic();

  return (
    <section 
      id="home"
      aria-label="Welcome to Dental & Beyond"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-[#F5F4EF] via-[#FAF9F6] to-white"
    >
      {/* Subtle architectural background accents */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-cyan-100/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 -ml-24 w-80 h-80 rounded-full bg-amber-50/50 blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Clinic Narrative & Primary CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Location & Brand Verification Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-stone-200/90 shadow-2xs text-xs font-medium text-stone-700">
              <span className="w-2 h-2 rounded-full bg-cyan-600 animate-pulse" />
              <MapPin className="w-3.5 h-3.5 text-cyan-800" />
              <span className="font-semibold text-stone-900">{clinic.city}, {clinic.country}</span>
              <span className="text-stone-300">|</span>
              <a 
                href={clinic.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-800 hover:text-cyan-950 flex items-center gap-1 font-semibold transition-colors"
              >
                <Instagram className="w-3.5 h-3.5" />
                @{clinic.instagram}
              </a>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-stone-900 font-serif-display leading-[1.15]">
                Modern Dentistry. <br />
                <span className="text-cyan-900 italic font-normal">Beautiful Smiles.</span>
              </h1>
              <p className="text-lg sm:text-xl text-stone-700 font-normal leading-relaxed max-w-2xl">
                Welcome to <span className="font-semibold text-stone-900">Dental & Beyond</span>, your dental clinic in Zahlé, Lebanon. 
                Providing patient-centered cosmetic dentistry, implantology, smile transformations, and gentle oral healthcare with state-of-the-art clinical standards.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                id="hero-book-btn"
                onClick={onBookClick}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-base font-semibold text-white bg-cyan-800 hover:bg-cyan-900 shadow-md hover:shadow-lg transition-all active:scale-98"
              >
                <Calendar className="w-5 h-5" />
                <span>Book an Appointment</span>
              </button>

              <a
                id="hero-whatsapp-btn"
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-base font-semibold text-emerald-900 bg-emerald-50 hover:bg-emerald-100/80 border border-emerald-200 transition-all shadow-2xs"
              >
                <MessageCircle className="w-5 h-5 text-emerald-600" />
                <span>Chat on WhatsApp</span>
              </a>

              <button
                id="hero-explore-treatments-btn"
                onClick={onExploreTreatments}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3.5 rounded-xl text-sm font-medium text-stone-600 hover:text-stone-900 hover:bg-stone-100/80 transition-colors"
              >
                <span>View Treatments</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Value Indicators */}
            <div className="pt-6 border-t border-stone-200/70 grid grid-cols-3 gap-4">
              <div className="flex items-start gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-cyan-50 flex items-center justify-center text-cyan-800 shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-stone-900">Hospital Sterilization</h4>
                  <p className="text-[11px] text-stone-600 leading-tight">Rigorous multi-cycle protocol</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center text-amber-800 shrink-0 mt-0.5">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-stone-900">Smile Design</h4>
                  <p className="text-[11px] text-stone-600 leading-tight">Veneers & custom contouring</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-800 shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-stone-900">Zahlé Clinic</h4>
                  <p className="text-[11px] text-stone-600 leading-tight">Central Bekaa access</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Authentic Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Visual Card */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-stone-200/80 bg-white group">
                <img
                  src="https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1000&q=80"
                  alt="Dental & Beyond Clinic in Zahlé"
                  className="w-full h-[420px] object-cover object-center group-hover:scale-102 transition-transform duration-700"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />
                
                {/* Image Overlay Details */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center justify-between text-xs">
                    <span className="px-2.5 py-1 rounded-md bg-white/20 backdrop-blur-md text-white font-medium border border-white/20">
                      Dental & Beyond
                    </span>
                    <span className="text-stone-200 text-[11px]">
                      Zahlé, Lebanon
                    </span>
                  </div>
                  <p className="text-sm font-medium mt-1.5 text-stone-100">
                    A calm, modern clinical environment built around patient tranquility.
                  </p>
                </div>
              </div>

              {/* Floating Instagram Reference Card */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-stone-200/90 shadow-lg max-w-[260px] text-left">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center shrink-0">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-stone-900">@dentalandbeyond</h5>
                    <p className="text-[11px] text-stone-500">Official Instagram Page</p>
                  </div>
                </div>
                <p className="text-[11px] text-stone-600 mt-2 leading-snug">
                  Explore recent cases, treatment insights, and clinic updates directly on our feed.
                </p>
              </div>

              {/* Floating Clinical Care Badge */}
              <div className="absolute -top-4 -right-4 bg-cyan-900 text-white px-3.5 py-2 rounded-xl shadow-md border border-cyan-800 flex items-center gap-2 text-xs font-medium">
                <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
                <span>Modern Aesthetics</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
