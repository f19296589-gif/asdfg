import React, { useState } from 'react';
import { useClinic } from '../context/ClinicContext';
import { BeforeAfterCase } from '../types';
import { Sparkles, Calendar, ArrowRight, Info } from 'lucide-react';

export const BeforeAfter: React.FC<{
  onBookTreatment: (treatmentId?: string) => void;
}> = ({ onBookTreatment }) => {
  const { beforeAfterCases } = useClinic();
  const [activeCaseId, setActiveCaseId] = useState<string>(beforeAfterCases[0]?.id || '');
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const activeCase = beforeAfterCases.find(c => c.id === activeCaseId) || beforeAfterCases[0];

  const handleSliderMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    const container = e.currentTarget.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const offsetX = clientX - container.left;
    const percentage = Math.max(0, Math.min(100, (offsetX / container.width) * 100));
    setSliderPosition(percentage);
  };

  return (
    <section 
      id="transformations"
      aria-label="Smile Transformations"
      className="py-20 bg-[#FAF9F6] border-b border-stone-200/60 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100/70 text-amber-900 text-xs font-semibold tracking-wide uppercase">
            Clinical Case Results
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 font-serif-display">
            Smile Transformations
          </h2>
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
            Realizing restorative balance through minimally invasive cosmetic dentistry, aligner therapy, and biological smile architecture in Zahlé.
          </p>
        </div>

        {/* Case Selector Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-8">
          {beforeAfterCases.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveCaseId(item.id);
                setSliderPosition(50);
              }}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                activeCase.id === item.id
                  ? 'bg-cyan-800 text-white shadow-xs'
                  : 'bg-white text-stone-600 hover:text-stone-900 border border-stone-200/80 hover:bg-stone-50'
              }`}
            >
              <span>Case {idx + 1}: {item.treatmentName.split('(')[0]}</span>
            </button>
          ))}
        </div>

        {/* Interactive Comparison Stage */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Interactive Slider Area */}
            <div className="lg:col-span-8 p-4 sm:p-6 bg-stone-950 flex flex-col justify-center">
              <div 
                className="relative aspect-4/3 rounded-xl overflow-hidden cursor-ew-resize select-none border border-stone-800"
                onMouseMove={(e) => isDragging && handleSliderMove(e)}
                onTouchMove={(e) => isDragging && handleSliderMove(e)}
                onMouseDown={() => setIsDragging(true)}
                onMouseUp={() => setIsDragging(false)}
                onTouchStart={() => setIsDragging(true)}
                onTouchEnd={() => setIsDragging(false)}
                onClick={handleSliderMove}
              >
                {/* AFTER Image (Bottom Layer) */}
                <img
                  src={activeCase.afterImageUrl}
                  alt={`After treatment: ${activeCase.treatmentName}`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <span className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md bg-cyan-900/90 text-white text-[11px] font-bold tracking-wider uppercase backdrop-blur-xs">
                  After Treatment
                </span>

                {/* BEFORE Image (Top Layer clipped by sliderPosition) */}
                <div 
                  className="absolute inset-0 overflow-hidden border-r-2 border-white shadow-xl"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <img
                    src={activeCase.beforeImageUrl}
                    alt={`Before treatment: ${activeCase.treatmentName}`}
                    className="absolute inset-0 w-full h-full object-cover max-w-none"
                    style={{ width: '100%', height: '100%' }}
                  />
                  <span className="absolute bottom-3 left-3 px-2.5 py-1 rounded-md bg-stone-900/90 text-white text-[11px] font-bold tracking-wider uppercase backdrop-blur-xs">
                    Before
                  </span>
                </div>

                {/* Draggable Divider Line & Knob */}
                <div 
                  className="absolute top-0 bottom-0 pointer-events-none"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white shadow-lg border border-stone-300 flex items-center justify-center text-stone-700 text-xs font-bold">
                    ↔
                  </div>
                </div>

              </div>

              {/* Slider instruction */}
              <div className="flex items-center justify-between text-stone-400 text-xs mt-3 px-1">
                <span>◀ Slide left to reveal After</span>
                <span className="font-mono text-stone-300">{Math.round(sliderPosition)}%</span>
                <span>Slide right to reveal Before ▶</span>
              </div>
            </div>

            {/* Case Details Sidebar */}
            <div className="lg:col-span-4 p-6 sm:p-8 flex flex-col justify-between space-y-6 text-left bg-white">
              <div className="space-y-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-800 block">
                  Clinical Examination
                </span>
                <h3 className="text-xl font-bold text-stone-900 font-serif-display leading-tight">
                  {activeCase.treatmentName}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {activeCase.description}
                </p>

                {activeCase.duration && (
                  <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-100 text-xs text-stone-700">
                    <strong className="font-semibold text-stone-900">Treatment Timeline:</strong> {activeCase.duration}
                  </div>
                )}
              </div>

              {/* Individual Results May Vary Notice */}
              <div className="p-3 rounded-xl bg-amber-50 border border-amber-200/70 text-amber-900 text-xs space-y-1">
                <div className="flex items-center gap-1.5 font-bold">
                  <Info className="w-3.5 h-3.5 text-amber-700" />
                  <span>Notice:</span>
                </div>
                <p className="text-[11px] text-stone-700 leading-snug">
                  "{activeCase.disclaimer}" Individual results may vary depending on patient anatomy and dental health.
                </p>
              </div>

              <button
                onClick={() => onBookTreatment()}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-semibold text-white bg-cyan-800 hover:bg-cyan-900 shadow-xs transition-all active:scale-98"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Smile Consultation</span>
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
