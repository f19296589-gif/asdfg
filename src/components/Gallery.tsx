import React, { useState, useEffect } from 'react';
import { useClinic } from '../context/ClinicContext';
import { GalleryItem, GalleryCategory } from '../types';
import { 
  Maximize2, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Instagram, 
  Calendar,
  Sparkles,
  Info
} from 'lucide-react';

export const Gallery: React.FC<{
  onBookClick: () => void;
}> = ({ onBookClick }) => {
  const { gallery, clinic } = useClinic();
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('all');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const filterTabs: { id: GalleryCategory; label: string }[] = [
    { id: 'all', label: 'All Photos' },
    { id: 'clinic', label: 'Clinic & Facilities' },
    { id: 'team', label: 'Our Team & Care' },
    { id: 'treatments', label: 'Treatments & Tech' },
    { id: 'transformations', label: 'Smile Transformations' }
  ];

  const filteredItems = gallery.filter(item => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  const openLightbox = (index: number) => {
    setActiveLightboxIndex(index);
  };

  const closeLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const handleNext = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex + 1) % filteredItems.length);
    }
  };

  const handlePrev = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIndex, filteredItems.length]);

  const activeItem: GalleryItem | null = activeLightboxIndex !== null ? filteredItems[activeLightboxIndex] : null;

  return (
    <section 
      id="gallery"
      aria-label="Dental & Beyond Photo Gallery"
      className="py-20 bg-white border-b border-stone-200/60 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 text-stone-700 text-xs font-semibold tracking-wide uppercase">
            Visual Tour
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 font-serif-display">
            Dental & Beyond Gallery
          </h2>
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
            Explore our clinic atmosphere in Zahlé, treatment suites, advanced dental diagnostics, and clinical smiles.
          </p>

          <div className="inline-flex items-center gap-2 text-xs text-stone-500 pt-1">
            <span>Primary source: Official Instagram</span>
            <a
              href={clinic.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-800 hover:underline font-semibold flex items-center gap-1"
            >
              <Instagram className="w-3.5 h-3.5" />
              @{clinic.instagram}
            </a>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                activeCategory === tab.id
                  ? 'bg-cyan-800 text-white shadow-xs'
                  : 'bg-[#FAF9F6] text-stone-600 hover:text-stone-900 border border-stone-200/80 hover:bg-stone-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(idx)}
              className="group relative rounded-2xl overflow-hidden bg-stone-100 border border-stone-200/80 shadow-2xs hover:shadow-md cursor-pointer transition-all duration-300 flex flex-col text-left"
            >
              {/* Image Container */}
              <div className="relative aspect-4/3 overflow-hidden bg-stone-200">
                <img
                  src={item.imageUrl}
                  alt={item.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-stone-950/0 group-hover:bg-stone-950/20 transition-colors" />

                {/* Subcategory Pill */}
                {item.subcategory && (
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[11px] font-semibold bg-white/95 text-stone-900 shadow-2xs backdrop-blur-xs">
                    {item.subcategory}
                  </span>
                )}

                {/* Zoom Icon */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-xs">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              {/* Caption Preview */}
              <div className="p-4 bg-white flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-sm font-bold text-stone-900 group-hover:text-cyan-900 transition-colors font-serif-display">
                    {item.title}
                  </h4>
                  <p className="text-xs text-stone-600 mt-1 line-clamp-2 leading-relaxed">
                    {item.caption}
                  </p>
                </div>
                {item.note && (
                  <p className="text-[10px] text-amber-700 italic mt-2">
                    {item.note}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Notice */}
        <div className="mt-12 p-4 rounded-xl bg-stone-50 border border-stone-200 text-center max-w-2xl mx-auto text-xs text-stone-600">
          <p>
            <strong>Clinic Authorized Imagery:</strong> Dental & Beyond prioritizes authentic clinical documentation. If you are the clinic administrator, authorized photographs can be directly added or updated via the settings panel.
          </p>
        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      {activeItem && (
        <div 
          id="gallery-lightbox"
          className="fixed inset-0 z-50 bg-stone-950/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          {/* Lightbox Header */}
          <div className="flex items-center justify-between text-white max-w-7xl mx-auto w-full pb-2">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-semibold">
                {activeItem.subcategory || activeItem.category.toUpperCase()}
              </span>
              <span className="text-xs text-stone-400">
                {activeLightboxIndex! + 1} / {filteredItems.length}
              </span>
            </div>

            <button
              onClick={closeLightbox}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-hidden"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Lightbox Center Area with Navigation */}
          <div 
            className="relative flex-1 flex items-center justify-center max-w-5xl mx-auto w-full my-auto px-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Prev Button */}
            <button
              onClick={handlePrev}
              className="absolute left-0 p-3 rounded-full bg-black/50 hover:bg-black/80 text-white transition-all backdrop-blur-xs focus:outline-hidden"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Main Lightbox Image */}
            <div className="max-h-[70vh] max-w-full flex items-center justify-center overflow-hidden rounded-xl shadow-2xl">
              <img
                src={activeItem.imageUrl}
                alt={activeItem.imageAlt}
                className="max-h-[68vh] max-w-full object-contain rounded-lg shadow-xl"
              />
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-0 p-3 rounded-full bg-black/50 hover:bg-black/80 text-white transition-all backdrop-blur-xs focus:outline-hidden"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Lightbox Caption & Details Footer */}
          <div 
            className="max-w-3xl mx-auto w-full bg-stone-900/90 border border-stone-800 rounded-xl p-4 text-white text-left mt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="space-y-1 max-w-xl">
              <h3 className="text-base font-bold font-serif-display text-white">
                {activeItem.title}
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                {activeItem.caption}
              </p>
              {activeItem.note && (
                <p className="text-[11px] text-amber-400">
                  {activeItem.note}
                </p>
              )}
            </div>

            <button
              onClick={() => {
                closeLightbox();
                onBookClick();
              }}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold text-white bg-cyan-700 hover:bg-cyan-600 transition-colors shrink-0"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Appointment</span>
            </button>
          </div>

        </div>
      )}

    </section>
  );
};
