import React from 'react';
import { 
  MapPin, 
  CheckCircle2, 
  Download, 
  ArrowLeft, 
  Phone, 
  MessageSquare, 
  Sparkles, 
  Car, 
  Train, 
  Plane, 
  Building, 
  GraduationCap, 
  Activity, 
  ShieldCheck, 
  Waves, 
  Bus,
  Layers,
  Trees,
  Grid
} from 'lucide-react';
import { projectsData, companyInfo } from '../data/companyData';

export default function ProjectDetailPage({ projectId, setActivePage, openEnquiryModal, openLightbox }) {
  const project = projectsData.find(p => p.id === projectId) || projectsData[0];

  const getConnectivityIcon = (iconName) => {
    switch (iconName) {
      case 'Car': return <Car className="w-5 h-5 text-amber-800" />;
      case 'Train': return <Train className="w-5 h-5 text-amber-800" />;
      case 'Plane': return <Plane className="w-5 h-5 text-amber-800" />;
      case 'Building': return <Building className="w-5 h-5 text-amber-800" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5 text-amber-800" />;
      case 'Activity': return <Activity className="w-5 h-5 text-amber-800" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-amber-800" />;
      case 'Waves': return <Waves className="w-5 h-5 text-amber-800" />;
      case 'Bus': return <Bus className="w-5 h-5 text-amber-800" />;
      default: return <MapPin className="w-5 h-5 text-amber-800" />;
    }
  };

  return (
    <div className="space-y-16 pb-20 animate-fadeIn">
      
      {/* 1. PROJECT HERO (BRIGHT LIGHT HERO) */}
      <section className="relative min-h-[50vh] flex items-end pt-4 pb-12 sm:pt-8 sm:pb-16 bg-[#FAFAF8] border-b border-slate-200">
        <div className="absolute inset-0 z-0">
          <img 
            src={project.heroImage} 
            alt={project.name} 
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-hero-light-overlay"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <button
            onClick={() => {
              setActivePage('projects');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center space-x-2 text-xs text-slate-800 hover:text-amber-800 font-bold mb-4 bg-white/90 px-3.5 py-1.5 rounded-full border border-slate-300 shadow-sm"
          >
            <ArrowLeft className="w-4 h-4 text-amber-800" />
            <span>Back to All Projects</span>
          </button>

          <div className="space-y-3">
            <div className="inline-block px-3 py-1 rounded-md bg-amber-100 text-amber-900 border border-amber-300 text-xs font-bold uppercase tracking-wider">
              {project.tag}
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-slate-900 leading-tight">
              {project.name}
            </h1>

            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-700 font-semibold">
              <span className="flex items-center space-x-1.5 text-amber-800 font-bold">
                <MapPin className="w-4 h-4" />
                <span>{project.location}</span>
              </span>
              <span>•</span>
              <span className="text-slate-600">{project.subName}</span>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3">
            <button
              onClick={() => openEnquiryModal(project.name)}
              className="bg-amber-800 hover:bg-amber-900 text-white font-bold text-xs uppercase tracking-wider px-7 py-3.5 rounded-lg shadow-sm transition-all flex items-center justify-center space-x-2 w-full sm:w-auto"
            >
              <span>Enquire About Plots</span>
            </button>

            <a
              href={`tel:${companyInfo.contacts.primaryPhone}`}
              className="hidden md:flex bg-white text-slate-900 hover:bg-slate-50 text-xs font-bold px-6 py-3.5 rounded-lg border border-slate-300 items-center space-x-2 shadow-sm transition-colors"
            >
              <Phone className="w-4 h-4 text-amber-800" />
              <span>Call Sales Desk</span>
            </a>
          </div>

        </div>
      </section>

      {/* 2. OVERVIEW & HIGHLIGHTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          <div className="lg:col-span-8 space-y-6">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
              Project Overview
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed bg-white p-6 rounded-2xl border border-slate-200 shadow-sm font-normal">
              {project.overview}
            </p>

            {/* Plot Sizes Available */}
            <div className="space-y-3 pt-2">
              <h3 className="font-serif text-lg font-bold text-slate-900 flex items-center space-x-2">
                <Grid className="w-5 h-5 text-amber-800" />
                <span>Available Plot Sizes & Options</span>
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.plotSizes.map((size, idx) => (
                  <span key={idx} className="bg-amber-50 border border-amber-300 text-amber-900 font-bold px-4 py-2 rounded-lg text-xs">
                    {size}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Key Specs Box */}
          <div className="lg:col-span-4">
            <div className="light-card p-6 rounded-2xl space-y-4">
              <h3 className="font-serif text-lg font-bold text-slate-900 border-b border-slate-200 pb-3">
                Key Township Highlights
              </h3>
              <div className="space-y-3 text-xs">
                {project.highlights.map((hl, idx) => (
                  <div key={idx} className="flex items-center justify-between py-2 border-b border-slate-100">
                    <span className="text-slate-600 font-medium">{hl.label}</span>
                    <span className="text-amber-800 font-bold">{hl.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. AMENITIES SECTION (BEIGE BACKGROUND) */}
      <section className="bg-[#F5F2EB] py-12 sm:py-16 border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="max-w-xl space-y-1">
            <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">
              Lifestyle Infrastructure
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
              Township Features & Amenities
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {project.features.map((feat, idx) => (
              <div 
                key={idx} 
                className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center space-x-3.5 hover:border-amber-700/40 hover:shadow-md transition-all"
              >
                <div className="w-8 h-8 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4.5 h-4.5 text-emerald-700" />
                </div>
                <span className="text-xs sm:text-sm text-slate-800 font-bold leading-snug">{feat}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CONNECTIVITY GRID (11 DISTANCES) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <div className="max-w-xl space-y-1">
            <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">
              Location Advantages
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
              Connectivity & Nearby Landmarks
            </h2>
            <p className="text-xs text-slate-600">
              Calculated distances to crucial transport, administrative, and civic hubs across Prayagraj.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {project.connectivity.map((conn, idx) => (
              <div key={idx} className="light-card p-4 rounded-2xl flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0">
                  {getConnectivityIcon(conn.icon)}
                </div>
                <div>
                  <div className="font-serif text-lg font-bold text-amber-800">
                    {conn.distance}
                  </div>
                  <div className="text-xs text-slate-800 font-semibold">
                    {conn.place}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SITE MAP AREA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="light-card p-8 rounded-3xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">
                Master Plan & Layout
              </span>
              <h2 className="font-serif text-2xl font-bold text-slate-900 mt-1">
                Official Site Map Diagram
              </h2>
            </div>

            <a
              href={project.siteMapUrl}
              target="_blank"
              rel="noreferrer"
              className="bg-slate-100 hover:bg-slate-200 text-amber-800 border border-slate-300 text-xs font-bold px-5 py-2.5 rounded-lg flex items-center space-x-2 transition-colors self-start sm:self-auto"
            >
              <Download className="w-4 h-4 text-amber-800" />
              <span>Download Master Map</span>
            </a>
          </div>

          <div 
            onClick={() => openLightbox([{ url: project.siteMapUrl, title: `${project.name} Site Map`, category: 'Site Layout' }], 0)}
            className="relative rounded-2xl overflow-hidden border border-slate-300 cursor-pointer group shadow-sm"
          >
            <img 
              src={project.siteMapUrl} 
              alt={`${project.name} Site Map`} 
              className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors flex items-center justify-center">
              <span className="bg-white text-slate-900 font-bold border border-slate-200 text-xs px-4 py-2.5 rounded-lg shadow-md">
                Click to View Fullsize Map
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. ENQUIRY CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F5F2EB] border border-amber-800/30 p-8 sm:p-10 rounded-3xl text-center space-y-4 shadow-sm">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
            Interested in {project.name}?
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto">
            Book a site visit or request plot availability and price details directly from TriveniInfra.
          </p>

          <div className="pt-2 flex justify-center gap-4">
            <button
              onClick={() => openEnquiryModal(project.name)}
              className="bg-amber-800 hover:bg-amber-900 text-white font-bold text-xs uppercase tracking-wider px-8 py-3.5 rounded-lg shadow-sm transition-all"
            >
              Enquire About This Project
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
