import React, { useState } from 'react';
import { Maximize2, Image as ImageIcon } from 'lucide-react';
import { galleryData } from '../data/companyData';

export default function GalleryPage({ openLightbox }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Prayag New City', 'Site Maps', 'Infrastructure', 'Amenities', 'Corporate'];

  const filteredImages = selectedCategory === 'All'
    ? galleryData
    : galleryData.filter(img => img.category === selectedCategory);

  return (
    <div className="space-y-16 pb-16 animate-fadeIn">
      
      {/* Header Banner */}
      <section className="relative pt-8 pb-12 sm:pt-12 sm:pb-16 bg-[#F5F2EB] border-b border-slate-200/80 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">
            Visual Showcase
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-slate-900 mt-2">
            Project Gallery
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto mt-2">
            Explore site development, entrance gates, roads, green parks, and infrastructure milestones.
          </p>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                selectedCategory === cat
                  ? 'bg-amber-800 text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:text-slate-900 border border-slate-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry / Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((img, idx) => (
            <div
              key={img.id}
              onClick={() => openLightbox(filteredImages, idx)}
              className="light-card rounded-2xl overflow-hidden group cursor-pointer relative"
            >
              <div className="relative h-64 overflow-hidden bg-slate-100">
                <img
                  src={img.url}
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-90 group-hover:opacity-75 transition-opacity"></div>

                <div className="absolute top-3 right-3 p-2 rounded-lg bg-white/90 backdrop-blur-md text-amber-800 border border-slate-200 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>

                <div className="absolute bottom-4 left-4 right-4 space-y-1 text-white">
                  <span className="text-[10px] font-bold text-amber-200 bg-amber-900/70 border border-amber-500/30 px-2 py-0.5 rounded-md uppercase">
                    {img.category}
                  </span>
                  <h3 className="font-serif text-lg font-bold leading-tight">
                    {img.title}
                  </h3>
                  <p className="text-xs text-slate-200 line-clamp-1">
                    {img.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
