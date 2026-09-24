import React from 'react';
import { useClinic } from '../context/ClinicContext';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Navigation, 
  Instagram, 
  ExternalLink, 
  AlertCircle,
  MessageCircle
} from 'lucide-react';

export const LocationMap: React.FC = () => {
  const { clinic, getWhatsAppLink, isWhatsAppConfigured } = useClinic();

  // Embedded map for Zahlé, Lebanon
  const embedMapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26500.677561845194!2d35.88562725!3d33.84627165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f49618b76ce81%3A0x63351ec1433f524!2sZahl%C3%A9%2C%20Lebanon!5e0!3m2!1sen!2slb!4v1700000000000!5m2!1sen!2slb";

  return (
    <section 
      id="contact"
      aria-label="Find Us - Dental & Beyond Zahlé"
      className="py-20 bg-[#FAF9F6] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 text-stone-700 text-xs font-semibold tracking-wide uppercase">
            Location & Contact
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 font-serif-display">
            Find Us in Zahlé
          </h2>
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
            Conveniently accessible in the heart of the Bekaa Valley. Reach out for appointments, emergency inquiries, or consultation directions.
          </p>
        </div>

        {/* 2-Column Layout: Details on Left, Interactive Map on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Business & Contact Info */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/80 shadow-xs flex flex-col justify-between space-y-6 text-left">
            
            <div className="space-y-6">
              
              {/* Address */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-800">
                  <MapPin className="w-4 h-4" />
                  <span>Clinic Address</span>
                </div>
                <h3 className="text-xl font-bold text-stone-900 font-serif-display">
                  Dental & Beyond
                </h3>
                <p className="text-sm text-stone-700 leading-relaxed">
                  {clinic.city}, {clinic.region}, {clinic.country}
                </p>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-50 border border-amber-200 text-amber-900 text-[11px]">
                  <AlertCircle className="w-3 h-3 text-amber-600 shrink-0" />
                  <span>Exact street address: Information to be confirmed by Dental & Beyond</span>
                </div>
              </div>

              {/* Contact Channels */}
              <div className="space-y-3 pt-2 border-t border-stone-100">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-stone-100 flex items-center justify-center text-stone-700 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-stone-500 font-medium block">Phone Number</span>
                    <span className="text-xs sm:text-sm font-semibold text-stone-800">
                      {clinic.phone}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-700 shrink-0">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-stone-500 font-medium block">WhatsApp</span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs sm:text-sm font-semibold text-stone-800">
                        {isWhatsAppConfigured ? clinic.whatsapp : "To be confirmed by Dental & Beyond"}
                      </span>
                      <a
                        href={getWhatsAppLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-emerald-700 font-bold hover:underline"
                      >
                        Chat Now
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-rose-50 flex items-center justify-center text-rose-700 shrink-0">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-stone-500 font-medium block">Official Instagram</span>
                    <a
                      href={clinic.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm font-bold text-cyan-800 hover:underline flex items-center gap-1"
                    >
                      <span>@{clinic.instagram}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="space-y-2 pt-2 border-t border-stone-100">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-700">
                  <Clock className="w-4 h-4 text-stone-500" />
                  <span>Opening Hours</span>
                </div>
                <div className="space-y-1.5 text-xs sm:text-sm">
                  {clinic.openingHours.map((sched, idx) => (
                    <div key={idx} className="flex justify-between text-stone-700 py-1 border-b border-stone-50">
                      <span className="font-medium">{sched.day}</span>
                      <span className="font-semibold text-stone-900">{sched.hours}</span>
                    </div>
                  ))}
                </div>
                <p className="text-[11px] text-stone-500 italic pt-1">
                  * Hours subject to final confirmation by Dental & Beyond clinic management.
                </p>
              </div>

            </div>

            {/* Directions Action Button */}
            <div className="pt-4 border-t border-stone-100">
              <a
                id="get-directions-btn"
                href={clinic.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-cyan-800 hover:bg-cyan-900 shadow-xs transition-all active:scale-98"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions on Google Maps</span>
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Google Map */}
          <div className="lg:col-span-7 bg-white rounded-2xl overflow-hidden border border-stone-200/80 shadow-xs flex flex-col">
            <div className="p-4 bg-stone-50 border-b border-stone-200/80 flex items-center justify-between text-xs text-stone-600">
              <span className="flex items-center gap-1.5 font-semibold text-stone-800">
                <MapPin className="w-4 h-4 text-cyan-700" />
                <span>Zahlé, Lebanon • Interactive Map</span>
              </span>
              <span className="text-[11px] text-stone-500">Coordinates: 33.8463° N, 35.9020° E</span>
            </div>

            <div className="relative flex-1 min-h-[380px] lg:min-h-[480px]">
              <iframe
                title="Dental & Beyond Clinic Location in Zahlé"
                src={embedMapUrl}
                className="w-full h-full border-0 absolute inset-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                aria-label="Google Maps centered on Zahlé, Lebanon"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
