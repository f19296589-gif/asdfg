import React from 'react';
import { useClinic } from '../context/ClinicContext';
import { Instagram, Heart, MessageCircle, ExternalLink } from 'lucide-react';

export const InstagramFeed: React.FC = () => {
  const { instagramPosts, clinic } = useClinic();

  return (
    <section 
      id="instagram-feed"
      aria-label="Follow Dental & Beyond on Instagram"
      className="py-16 bg-white border-b border-stone-200/60 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 text-left">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-rose-700 text-xs font-semibold tracking-wide uppercase mb-2">
              <Instagram className="w-3.5 h-3.5" />
              <span>Instagram Community</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 font-serif-display">
              Follow Dental & Beyond
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              Join our community on Instagram for daily smile stories, clinical procedures, and clinic announcements from Zahlé.
            </p>
          </div>

          <a
            id="instagram-follow-cta-btn"
            href={clinic.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-purple-600 via-rose-500 to-amber-500 hover:opacity-95 shadow-xs transition-opacity shrink-0"
          >
            <Instagram className="w-4 h-4" />
            <span>Follow @{clinic.instagram}</span>
            <ExternalLink className="w-3 h-3 ml-0.5 opacity-80" />
          </a>
        </div>

        {/* 6-Image Instagram Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {instagramPosts.slice(0, 6).map((post) => (
            <a
              key={post.id}
              href={clinic.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-xl overflow-hidden bg-stone-100 border border-stone-200/70 block shadow-2xs hover:shadow-md transition-all"
            >
              <img
                src={post.imageUrl}
                alt="Dental & Beyond Instagram Post"
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                loading="lazy"
              />

              {/* Hover overlay with likes and comments */}
              <div className="absolute inset-0 bg-stone-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center p-3 text-white">
                <Instagram className="w-6 h-6 mb-2 text-rose-400" />
                <div className="flex items-center gap-3 text-xs font-bold">
                  <span className="flex items-center gap-1">
                    <Heart className="w-3.5 h-3.5 fill-current text-rose-400" />
                    {post.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-3.5 h-3.5 fill-current text-cyan-300" />
                    {post.comments}
                  </span>
                </div>
                <p className="text-[10px] text-stone-200 line-clamp-2 mt-2 text-center">
                  {post.caption}
                </p>
              </div>

              {/* Instagram badge in corner */}
              <div className="absolute top-2 right-2 p-1 rounded-md bg-black/30 backdrop-blur-xs text-white opacity-80 group-hover:opacity-0 transition-opacity">
                <Instagram className="w-3 h-3" />
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
