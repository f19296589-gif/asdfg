import React from 'react';
import { useClinic } from '../context/ClinicContext';
import { 
  HeartHandshake, 
  Sparkles, 
  MapPin, 
  CheckCircle2, 
  Instagram,
  Microscope,
  Calendar
} from 'lucide-react';

export const About: React.FC<{
  onBookClick: () => void;
}> = ({ onBookClick }) => {
  const { clinic, getWhatsAppLink } = useClinic();

  const principles = [
    {
      icon: <HeartHandshake className="w-5 h-5 text-cyan-800" />,
      title: "Patient-Centered Dialogue",
      desc: "Every procedure begins with a calm conversation. We explain diagnosis, timeline, and options clearly before any treatment starts."
    },
    {
      icon: <Microscope className="w-5 h-5 text-cyan-800" />,
      title: "Minimally Invasive Dentistry",
      desc: "We prioritize preserving natural healthy tooth structure using conservative preparation techniques and modern bonding materials."
    },
    {
      icon: <Sparkles className="w-5 h-5 text-cyan-800" />,
      title: "Natural Smile Aesthetics",
      desc: "Cosmetic restorations are shaped according to your natural facial proportions, skin tone, and lips, avoiding artificial or unnatural appearances."
    },
    {
      icon: <MapPin className="w-5 h-5 text-cyan-800" />,
      title: "Rooted in Zahlé",
      desc: "Dedicated to providing residents of Zahlé and the Bekaa Valley with accessible, world-class dental care without requiring long travel."
    }
  ];

  return (
    <section 
      id="about" 
      aria-label="About Dental & Beyond"
      className="py-20 bg-white border-t border-b border-stone-200/60 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 text-stone-700 text-xs font-semibold tracking-wide uppercase">
            About Our Practice
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 font-serif-display">
            Elevating Dental Care in Zahlé
          </h2>
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
            At <span className="font-semibold text-stone-800">Dental & Beyond</span>, clinical skill meets patient comfort. 
            We believe dental visits should be transparent, reassuring, and tailored to the unique anatomy of your smile.
          </p>
        </div>

        {/* Story & Visual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Column: Visual Storytelling */}
          <div className="lg:col-span-6 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-sm border border-stone-200/80 aspect-4/5 bg-stone-100">
                  <img
                    src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80"
                    alt="Dental & Beyond Treatment Suite"
                    className="w-full h-full object-cover hover:scale-103 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/70 text-left">
                  <span className="text-xs font-bold text-stone-900 uppercase tracking-wider block">Clinical Hygiene</span>
                  <p className="text-xs text-stone-600 mt-1">Multi-stage autoclaving and strict sterilization controls for complete patient safety.</p>
                </div>
              </div>

              <div className="space-y-4 pt-6 sm:pt-10">
                <div className="p-4 rounded-xl bg-cyan-900 text-white text-left shadow-sm">
                  <span className="text-xs font-semibold uppercase tracking-wider text-cyan-200 block">Zahlé, Lebanon</span>
                  <p className="text-sm font-medium mt-1 text-stone-100">Caring for smiles across the Bekaa Valley.</p>
                  <a
                    href={clinic.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-cyan-200 hover:text-white font-medium mt-2"
                  >
                    <Instagram className="w-3.5 h-3.5" />
                    <span>@{clinic.instagram}</span>
                  </a>
                </div>

                <div className="rounded-2xl overflow-hidden shadow-sm border border-stone-200/80 aspect-4/5 bg-stone-100">
                  <img
                    src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80"
                    alt="Smile consultation and diagnostic planning"
                    className="w-full h-full object-cover hover:scale-103 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Narrative */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <h3 className="text-2xl sm:text-3xl font-bold text-stone-900 font-serif-display leading-snug">
              Modern Dentistry Designed Around You
            </h3>
            
            <p className="text-stone-600 leading-relaxed text-base">
              Dental & Beyond was established with a clear mandate: to blend high-precision dental science with a warm, stress-free clinical atmosphere. 
              Whether you require routine dental prophylaxis, replacement of compromised teeth with titanium implants, or a subtle aesthetic enhancement through veneers, our team approaches every procedure with conservative care and technical rigor.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyan-800 shrink-0 mt-0.5" />
                <p className="text-sm text-stone-700">
                  <strong className="font-semibold text-stone-900">Customized Treatment Pathways:</strong> No one-size-fits-all treatments. Each smile is analyzed according to your individual dental history, function, and desires.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyan-800 shrink-0 mt-0.5" />
                <p className="text-sm text-stone-700">
                  <strong className="font-semibold text-stone-900">Stress-Free Atmosphere:</strong> We take extra time with patients who experience dental anxiety, explaining every step beforehand so you remain in full control.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyan-800 shrink-0 mt-0.5" />
                <p className="text-sm text-stone-700">
                  <strong className="font-semibold text-stone-900">Direct Doctor Follow-Up:</strong> Post-treatment care and instructions are clearly provided so recovery is smooth and uncomplicated.
                </p>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-3">
              <button
                onClick={onBookClick}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-cyan-800 hover:bg-cyan-900 shadow-xs transition-all"
              >
                <Calendar className="w-4 h-4" />
                <span>Schedule a Consultation</span>
              </button>

              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200/80 border border-stone-200 transition-colors"
              >
                <span>Ask via WhatsApp</span>
              </a>
            </div>

          </div>

        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-stone-100">
          {principles.map((item, idx) => (
            <div 
              key={idx} 
              className="p-6 rounded-2xl bg-[#FAF9F6] border border-stone-200/70 hover:border-cyan-200 hover:shadow-sm transition-all text-left"
            >
              <div className="w-10 h-10 rounded-xl bg-white border border-stone-200/80 flex items-center justify-center mb-4 shadow-2xs">
                {item.icon}
              </div>
              <h4 className="text-base font-bold text-stone-900 mb-1.5">{item.title}</h4>
              <p className="text-xs text-stone-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
