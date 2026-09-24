import React from 'react';
import { Treatment } from '../types';
import { ArrowRight, Clock, CheckCircle, Calendar } from 'lucide-react';

export const TreatmentCard: React.FC<{
  treatment: Treatment;
  onSelect: (treatment: Treatment) => void;
  onBook: (treatmentId: string) => void;
}> = ({ treatment, onSelect, onBook }) => {
  return (
    <article 
      id={`treatment-card-${treatment.id}`}
      className="group bg-white rounded-2xl overflow-hidden border border-stone-200/80 shadow-xs hover:shadow-md hover:border-cyan-200 transition-all duration-300 flex flex-col h-full text-left"
    >
      {/* Image Banner */}
      <div className="relative aspect-16/10 overflow-hidden bg-stone-100">
        <img
          src={treatment.imageUrl}
          alt={treatment.imageAlt}
          className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-white/95 text-cyan-900 backdrop-blur-xs border border-stone-200/60 shadow-2xs">
            {treatment.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-stone-900 group-hover:text-cyan-900 transition-colors font-serif-display">
            {treatment.name}
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 line-clamp-3 leading-relaxed">
            {treatment.shortDesc}
          </p>
        </div>

        {/* Suitable For preview chips */}
        <div className="space-y-2 pt-2 border-t border-stone-100">
          <span className="text-[11px] font-semibold text-stone-700 uppercase tracking-wider block">
            Common Indications:
          </span>
          <ul className="space-y-1">
            {treatment.suitableFor.slice(0, 2).map((item, idx) => (
              <li key={idx} className="flex items-start gap-1.5 text-xs text-stone-700">
                <CheckCircle className="w-3.5 h-3.5 text-cyan-700 shrink-0 mt-0.5" />
                <span className="line-clamp-1">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer Actions */}
        <div className="pt-3 border-t border-stone-100 flex items-center justify-between gap-2 mt-auto">
          <button
            onClick={() => onSelect(treatment)}
            className="text-xs font-semibold text-cyan-800 hover:text-cyan-950 flex items-center gap-1 group/btn transition-colors focus:outline-hidden"
          >
            <span>Learn More & FAQs</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
          </button>

          <button
            onClick={() => onBook(treatment.id)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-cyan-900 bg-cyan-50 hover:bg-cyan-100/90 transition-colors border border-cyan-200/60"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book</span>
          </button>
        </div>

      </div>
    </article>
  );
};
