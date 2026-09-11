import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Download } from 'lucide-react';

export default function LightboxModal({ isOpen, onClose, images, currentIndex, setCurrentIndex }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, images]);

  if (!isOpen || !images || images.length === 0) return null;

  const currentImage = images[currentIndex] || images[0];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 animate-fadeIn">
      {/* Top Controls */}
      <div className="absolute top-4 right-4 z-50 flex items-center space-x-3">
        <a
          href={currentImage.url}
          target="_blank"
          rel="noreferrer"
          download
          className="p-3 rounded-xl bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700 border border-slate-700 transition-colors"
          title="Open Original Image"
        >
          <Download className="w-5 h-5" />
        </a>
        <button
          onClick={onClose}
          className="p-3 rounded-xl bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700 border border-slate-700 transition-colors"
          title="Close Lightbox"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Prev Arrow */}
      {images.length > 1 && (
        <button
          onClick={handlePrev}
          className="absolute left-4 z-50 p-3 rounded-full bg-slate-800/80 text-slate-200 hover:text-gold-400 hover:bg-slate-700 border border-slate-700 transition-colors"
          aria-label="Previous Image"
        >
          <ChevronLeft className="w-7 h-7" />
        </button>
      )}

      {/* Main Image Container */}
      <div className="max-w-5xl max-h-[85vh] flex flex-col items-center justify-center p-2">
        <img
          src={currentImage.url}
          alt={currentImage.title || 'Project Image'}
          className="max-h-[72vh] max-w-full object-contain rounded-xl shadow-luxury border border-slate-800"
        />
        
        {/* Caption */}
        <div className="mt-4 text-center space-y-1">
          <div className="inline-block px-3 py-0.5 rounded-full bg-gold-500/20 text-gold-400 border border-gold-500/30 text-xs font-semibold uppercase tracking-widest mb-1">
            {currentImage.category || 'TriveniInfra Gallery'}
          </div>
          <h4 className="font-serif text-lg font-bold text-white">
            {currentImage.title}
          </h4>
          {currentImage.description && (
            <p className="text-xs text-slate-400 max-w-lg mx-auto">
              {currentImage.description}
            </p>
          )}
          <div className="text-[11px] text-slate-500 pt-1">
            Image {currentIndex + 1} of {images.length}
          </div>
        </div>
      </div>

      {/* Next Arrow */}
      {images.length > 1 && (
        <button
          onClick={handleNext}
          className="absolute right-4 z-50 p-3 rounded-full bg-slate-800/80 text-slate-200 hover:text-gold-400 hover:bg-slate-700 border border-slate-700 transition-colors"
          aria-label="Next Image"
        >
          <ChevronRight className="w-7 h-7" />
        </button>
      )}
    </div>
  );
}
