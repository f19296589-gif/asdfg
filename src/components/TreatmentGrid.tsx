import React, { useState, useMemo } from 'react';
import { useClinic } from '../context/ClinicContext';
import { TreatmentCard } from './TreatmentCard';
import { Treatment } from '../types';
import { Search, Sparkles } from 'lucide-react';

export const TreatmentGrid: React.FC<{
  onBookTreatment: (treatmentId: string) => void;
}> = ({ onBookTreatment }) => {
  const { treatments, setSelectedTreatmentModal } = useClinic();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Aesthetics', 'Restorative', 'Alignment', 'General', 'Specialized', 'Surgery'];

  const filteredTreatments = useMemo(() => {
    return treatments.filter(t => {
      const matchesCategory = selectedCategory === 'All' || t.category === selectedCategory;
      const matchesSearch = searchQuery === '' || 
        t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.suitableFor.some(item => item.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [treatments, selectedCategory, searchQuery]);

  return (
    <section 
      id="treatments"
      aria-label="Dental Treatments and Services"
      className="py-20 bg-[#FAF9F6] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-100/70 text-cyan-900 text-xs font-semibold tracking-wide uppercase">
            Clinical Services
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 font-serif-display">
            Comprehensive Dental Treatments
          </h2>
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
            From subtle cosmetic smile enhancement to surgical oral rehabilitation, each procedure is performed with precision diagnostics and patient comfort in Zahlé.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto no-scrollbar">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                    isSelected
                      ? 'bg-cyan-800 text-white shadow-2xs'
                      : 'bg-white text-stone-600 hover:text-stone-900 hover:bg-stone-100 border border-stone-200/80'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              placeholder="Search treatments..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-white rounded-xl border border-stone-200 text-xs sm:text-sm text-stone-900 placeholder-stone-400 focus:outline-hidden focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600 shadow-2xs"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-700"
              >
                Clear
              </button>
            )}
          </div>

        </div>

        {/* Treatments Grid */}
        {filteredTreatments.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredTreatments.map((treatment) => (
              <TreatmentCard
                key={treatment.id}
                treatment={treatment}
                onSelect={(t) => setSelectedTreatmentModal(t)}
                onBook={onBookTreatment}
              />
            ))}
          </div>
        ) : (
          <div className="p-12 text-center bg-white rounded-2xl border border-stone-200">
            <Sparkles className="w-8 h-8 text-stone-400 mx-auto mb-3" />
            <h3 className="text-base font-semibold text-stone-900">No treatments match your search</h3>
            <p className="text-xs text-stone-500 mt-1">Try resetting the category filter or searching for another procedure.</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 text-xs font-semibold text-cyan-800 bg-cyan-50 rounded-lg hover:bg-cyan-100 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
