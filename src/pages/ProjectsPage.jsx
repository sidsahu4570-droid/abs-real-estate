import React from 'react';
import { MapPin, CheckCircle2, ChevronRight, Sparkles, Building2 } from 'lucide-react';
import { projectsData } from '../data/companyData';

export default function ProjectsPage({ setActivePage, openEnquiryModal }) {
  return (
    <div className="space-y-16 pb-16 animate-fadeIn">
      
      {/* Header Banner */}
      <section className="relative pt-8 pb-12 sm:pt-12 sm:pb-16 bg-[#F5F2EB] border-b border-slate-200/80 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">
            Township Portfolio
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-slate-900 mt-2">
            Our Real Estate Projects
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto mt-2">
            Explore premium residential townships with broad roads, parks, and prime connectivity in Prayagraj.
          </p>
        </div>
      </section>

      {/* Projects List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {projectsData.map((project) => (
          <div 
            key={project.id}
            className="light-card rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8"
          >
            {/* Image Column */}
            <div className="lg:col-span-5 relative h-72 lg:h-96 rounded-2xl overflow-hidden bg-slate-100">
              <img 
                src={project.heroImage} 
                alt={project.name} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 px-3 py-1 rounded-md bg-amber-800 text-white font-bold text-xs uppercase tracking-wider shadow-sm">
                {project.tag}
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 space-y-5">
              
              <div>
                <div className="text-xs text-amber-800 font-bold flex items-center space-x-1 mb-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{project.location}</span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
                  {project.name}
                </h2>
                <p className="text-xs text-slate-600 font-semibold mt-0.5">
                  {project.subName}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {project.overview}
              </p>

              {/* Amenities Pills */}
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-800 uppercase tracking-wider block">
                  Township Features & Amenities:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-800 font-medium">
                  {project.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center space-x-2.5 bg-slate-50 p-2.5 px-3 rounded-xl border border-slate-200">
                      <div className="w-6 h-6 rounded-full bg-emerald-100/70 border border-emerald-300 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                      </div>
                      <span className="font-semibold text-slate-800">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="pt-2 flex flex-wrap gap-4 items-center">
                <button
                  onClick={() => {
                    setActivePage(`project-detail:${project.id}`);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="bg-amber-800 hover:bg-amber-900 text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-lg shadow-sm transition-all flex items-center space-x-1.5"
                >
                  <span>Explore Dedicated Detail Page</span>
                  <ChevronRight className="w-4 h-4 text-amber-200" />
                </button>

                <button
                  onClick={() => openEnquiryModal(project.name)}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold px-6 py-3 rounded-lg border border-slate-300 transition-colors"
                >
                  Enquire About Plots
                </button>
              </div>

            </div>

          </div>
        ))}
      </section>

    </div>
  );
}
