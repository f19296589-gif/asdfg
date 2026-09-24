import React, { useState } from 'react';
import { useClinic } from '../context/ClinicContext';
import { Review } from '../types';
import { Star, ShieldCheck, MessageSquarePlus, CheckCircle2 } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const { reviews } = useClinic();
  const [userReviews, setUserReviews] = useState<Review[]>(reviews);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [newAuthor, setNewAuthor] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [newTreatment, setNewTreatment] = useState('Cosmetic Dentistry');
  const [newComment, setNewComment] = useState('');
  const [submittedThanks, setSubmittedThanks] = useState(false);

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const newRev: Review = {
      id: 'rev-' + Date.now(),
      authorName: newAuthor.trim() || 'Patient from Zahlé',
      rating: newRating,
      date: 'Just now',
      comment: newComment.trim(),
      source: 'Patient Feedback',
      treatment: newTreatment
    };

    setUserReviews([newRev, ...userReviews]);
    setSubmittedThanks(true);
    setNewComment('');
    setNewAuthor('');
    setTimeout(() => {
      setSubmittedThanks(false);
      setShowReviewForm(false);
    }, 2500);
  };

  return (
    <section 
      id="reviews"
      aria-label="Patient Testimonials"
      className="py-20 bg-[#FAF9F6] border-b border-stone-200/60 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 text-stone-700 text-xs font-semibold tracking-wide uppercase">
            Patient Feedback
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 font-serif-display">
            Patient Experiences
          </h2>
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
            Real feedback from patients treated at Dental & Beyond in Zahlé, reflecting our commitment to gentle treatment and aesthetic results.
          </p>
          
          <div className="inline-flex items-center gap-2 p-2.5 rounded-xl bg-white border border-stone-200/80 text-xs text-stone-600 shadow-2xs">
            <ShieldCheck className="w-4 h-4 text-cyan-800" />
            <span>Strict Verification Policy: Only authentic patient submissions are presented.</span>
          </div>
        </div>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {userReviews.map((rev) => (
            <div
              key={rev.id}
              className="p-6 rounded-2xl bg-white border border-stone-200/80 shadow-xs flex flex-col justify-between space-y-4 text-left"
            >
              <div className="space-y-3">
                {/* Rating stars */}
                <div className="flex items-center gap-1 text-amber-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < rev.rating ? 'fill-amber-400 text-amber-400' : 'text-stone-300'}`}
                    />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                <div>
                  <h4 className="font-bold text-stone-900">{rev.authorName}</h4>
                  {rev.treatment && (
                    <span className="text-stone-500 text-[11px] block">{rev.treatment}</span>
                  )}
                </div>
                <div className="text-right">
                  <span className="px-2 py-0.5 rounded-md bg-stone-100 text-stone-600 text-[10px] font-medium block">
                    {rev.source}
                  </span>
                  <span className="text-[10px] text-stone-400">{rev.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action to share real feedback */}
        <div className="max-w-md mx-auto text-center">
          {!showReviewForm ? (
            <button
              onClick={() => setShowReviewForm(true)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-stone-700 bg-white hover:bg-stone-50 border border-stone-200/80 shadow-2xs transition-colors"
            >
              <MessageSquarePlus className="w-4 h-4 text-cyan-800" />
              <span>Have you visited Dental & Beyond in Zahlé? Leave your feedback</span>
            </button>
          ) : (
            <form 
              onSubmit={handleAddReview} 
              className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-4 text-left animate-in fade-in duration-200"
            >
              <h4 className="text-sm font-bold text-stone-900 font-serif-display">
                Share Your Patient Experience
              </h4>

              {submittedThanks && (
                <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Thank you! Your feedback has been recorded.</span>
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-stone-600 mb-1">Your Name or Initials</label>
                <input
                  type="text"
                  placeholder="e.g. Patient from Zahlé"
                  value={newAuthor}
                  onChange={(e) => setNewAuthor(e.target.value)}
                  className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-lg text-xs"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-600 mb-1">Treatment Received</label>
                <input
                  type="text"
                  placeholder="e.g. Teeth Whitening, Veneers, Checkup"
                  value={newTreatment}
                  onChange={(e) => setNewTreatment(e.target.value)}
                  className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-lg text-xs"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-600 mb-1">Rating</label>
                <select
                  value={newRating}
                  onChange={(e) => setNewRating(Number(e.target.value))}
                  className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-lg text-xs"
                >
                  <option value={5}>⭐⭐⭐⭐⭐ (5 - Excellent)</option>
                  <option value={4}>⭐⭐⭐⭐ (4 - Very Good)</option>
                  <option value={3}>⭐⭐⭐ (3 - Good)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-600 mb-1">Review Comments</label>
                <textarea
                  rows={3}
                  required
                  placeholder="How was your experience at the clinic?"
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-lg text-xs"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => setShowReviewForm(false)}
                  className="px-3 py-1.5 rounded-lg text-xs text-stone-600 hover:bg-stone-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg text-xs font-semibold text-white bg-cyan-800 hover:bg-cyan-900"
                >
                  Submit Feedback
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};
