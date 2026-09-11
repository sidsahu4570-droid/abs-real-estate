import React, { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  Phone, 
  MessageSquare, 
  ArrowRight, 
  ShieldCheck, 
  Award, 
  Users, 
  TrendingUp, 
  CheckCircle2, 
  Sparkles, 
  ChevronRight, 
  Download, 
  Search, 
  Star,
  Quote,
  Trees,
  Compass,
  FileText
} from 'lucide-react';
import { companyInfo, directorData, projectsData, testimonials } from '../data/companyData';

export default function HomePage({ setActivePage, openEnquiryModal }) {
  const mainProject = projectsData.find(p => p.id === 'prayag-new-city') || projectsData[0];

  return (
    <div className="space-y-16 pb-16">
      
      {/* 1. HERO SECTION (RICH LUXURY HIGH-CONTRAST HERO) */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-slate-950 border-b border-amber-900/30">
        
        {/* Large High Quality Background Image with Dark Luxury Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80" 
            alt="Prayagraj Real Estate Development" 
            className="w-full h-full object-cover object-center scale-105"
          />
          {/* Deep Luxury Dark & Amber Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/80 to-slate-950/60 sm:from-slate-950/90 sm:via-slate-900/75 sm:to-slate-950/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40"></div>
        </div>

        {/* Hero Content Box */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:py-28 w-full">
          <div className="max-w-3xl space-y-6">
            
            {/* Top Label */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/40 text-amber-300 text-xs font-bold uppercase tracking-widest backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
              <span>Leading Real Estate Company in Prayagraj</span>
            </div>

            {/* Main Slogan Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Best Residential Plots in <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200">Prayagraj</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-slate-200 text-sm sm:text-lg leading-relaxed font-normal max-w-2xl text-shadow-sm">
              {companyInfo.heroText}
            </p>

            {/* Feature Highlights Pills */}
            <div className="flex flex-wrap gap-2.5 pt-1">
              <span className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-lg bg-slate-900/80 border border-slate-700/80 text-xs text-slate-200 font-semibold shadow-md backdrop-blur-md">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Genuine Rates</span>
              </span>
              <span className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-lg bg-slate-900/80 border border-slate-700/80 text-xs text-slate-200 font-semibold shadow-md backdrop-blur-md">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>30-Ft Roads & 40-Ft Entrance</span>
              </span>
              <span className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-lg bg-slate-900/80 border border-slate-700/80 text-xs text-slate-200 font-semibold shadow-md backdrop-blur-md">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>Prime Jhusi & Rewa Road Locations</span>
              </span>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3">
              <button
                onClick={() => {
                  setActivePage('projects');
                }}
                className="bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 hover:from-amber-500 hover:to-amber-700 text-white font-bold text-xs uppercase tracking-wider px-7 py-3.5 rounded-lg shadow-lg shadow-amber-950/50 hover:shadow-amber-800/40 transition-all flex items-center justify-center space-x-2 w-full sm:w-auto"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 text-amber-200" />
              </button>

              <button
                onClick={() => openEnquiryModal('Prayag New City')}
                className="bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-lg border border-white/30 backdrop-blur-md transition-all flex items-center justify-center space-x-2 w-full sm:w-auto"
              >
                <span>Enquire Now</span>
              </button>

              <a
                href={`tel:${companyInfo.contacts.primaryPhone}`}
                className="hidden md:flex bg-slate-900/60 hover:bg-slate-900/80 text-amber-300 font-bold text-xs px-5 py-3.5 rounded-lg border border-amber-400/30 backdrop-blur-md transition-all items-center space-x-2"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call Hotline</span>
              </a>

              <a
                href={`https://wa.me/${companyInfo.contacts.whatsapp}?text=Hello%20TriveniInfra,%20I%20am%20interested%20in%20residential%20plots.`}
                target="_blank"
                rel="noreferrer"
                className="hidden md:flex bg-emerald-950/60 hover:bg-emerald-900/80 text-emerald-300 font-bold text-xs px-5 py-3.5 rounded-lg border border-emerald-500/40 backdrop-blur-md transition-all items-center space-x-2"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp</span>
              </a>
            </div>

          </div>
        </div>

      </section>

      {/* 2. TRUST / COMPANY HIGHLIGHTS (SECTION 1: WHITE BACKGROUND) */}
      <section className="bg-white py-16 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">
              Why TriveniInfra
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">
              Built On Integrity & Quality Infrastructure
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Delivering premium residential plot opportunities and professional development across Prayagraj.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="light-card p-7 rounded-2xl space-y-3 relative group">
              <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-800">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-slate-900">
                Premium Residential Plots
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Carefully planned residential townships offering demarcated plots with 30-ft internal roads and 40-ft main entrance.
              </p>
            </div>

            <div className="light-card p-7 rounded-2xl space-y-3 relative group">
              <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-800">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-slate-900">
                Genuine Pricing
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Fair, transparent, and affordable market pricing without heavy EMI burdens or hidden charges for home buyers.
              </p>
            </div>

            <div className="light-card p-7 rounded-2xl space-y-3 relative group">
              <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-800">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-slate-900">
                Quality Infrastructure
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Dedicated parks, walking tracks, school facilities, shopping areas, and sports club built into our masterplans.
              </p>
            </div>

            <div className="light-card p-7 rounded-2xl space-y-3 relative group">
              <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-800">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-slate-900">
                Customer Focused
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Skilled team of real estate experts focused on building long-term relationships, trust, and client satisfaction.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. ABOUT SECTION (SECTION 2: VERY LIGHT WARM BEIGE BACKGROUND) */}
      <section className="bg-[#F5F2EB] py-16 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Image Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-md border border-slate-200">
                <img 
                  src="https://www.homeandheightpvtltd.com/img/homeand_hight.jpeg" 
                  alt="TriveniInfra Corporate Office" 
                  className="w-full h-80 lg:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 p-4 bg-white/95 backdrop-blur-md rounded-xl border border-slate-200 text-slate-900">
                  <div className="font-serif text-sm font-bold">
                    TriveniInfra Corporate Headquarters
                  </div>
                  <div className="text-xs text-amber-800 font-semibold">
                    Cooper Road, Civil Line, Prayagraj
                  </div>
                </div>
              </div>
            </div>

            {/* Text Column */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-block px-3 py-1 rounded-md bg-amber-100 text-amber-900 border border-amber-300 text-xs font-bold uppercase tracking-wider">
                ABOUT TRIVENIINFRA
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 leading-snug">
                Now Get the Best Residential Plots in <span className="text-amber-800">Prayagraj</span>
              </h2>

              <p className="text-slate-700 text-sm leading-relaxed">
                Are you looking for your own property? <strong>TriveniInfra Home & Height Pvt. Ltd.</strong> is the best choice you can rely on. Headquartered in Prayagraj, our company focuses on providing premium quality residential plots without heavy 24-month or 36-month EMI burdens.
              </p>

              <p className="text-slate-600 text-xs leading-relaxed">
                The co-members of the leading real estate company in Prayagraj strive to ensure quality in the areas of design, project management, execution and infrastructure development. We work with an aim of building lifelong customer relationships, not just selling plots.
              </p>

              <div className="pt-3 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => {
                    setActivePage('about');
                  }}
                  className="bg-amber-800 hover:bg-amber-900 text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-lg shadow-sm transition-all flex items-center space-x-2"
                >
                  <span>Learn More About Us</span>
                  <ChevronRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => {
                    setActivePage('director');
                  }}
                  className="text-xs text-slate-700 hover:text-amber-800 font-bold underline underline-offset-4"
                >
                  Director Desk Message →
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 4. FEATURED PROJECTS (SECTION 3: WHITE BACKGROUND) */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">
                Flagship Developments
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mt-1">
                Explore Our Townships & Projects
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Prime location residential plots with complete infrastructure in Prayagraj.
              </p>
            </div>

            <button
              onClick={() => {
                setActivePage('projects');
              }}
              className="text-xs font-bold text-amber-800 hover:text-amber-900 flex items-center space-x-1"
            >
              <span>View All Projects</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projectsData.map((project) => (
              <div 
                key={project.id}
                className="light-card rounded-2xl overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  {/* Project Image */}
                  <div className="relative h-56 overflow-hidden bg-slate-100">
                    <img 
                      src={project.heroImage} 
                      alt={project.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-md bg-amber-800 text-white font-bold text-[11px] uppercase tracking-wider shadow-sm">
                      {project.tag}
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-slate-900/80 to-transparent text-white">
                      <h3 className="font-serif text-2xl font-bold leading-tight">
                        {project.name}
                      </h3>
                      <div className="text-xs text-amber-200 flex items-center space-x-1 mt-0.5 font-medium">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{project.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6 space-y-4">
                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                      {project.overview}
                    </p>

                    {/* Highlights Grid */}
                    <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100 text-[11px]">
                      {project.highlights.map((hl, idx) => (
                        <div key={idx} className="bg-slate-50 p-2 rounded-md border border-slate-200/80">
                          <span className="text-slate-500 block text-[10px]">{hl.label}</span>
                          <span className="text-slate-900 font-bold">{hl.value}</span>
                        </div>
                      ))}
                    </div>

                    {/* Key Features Preview */}
                    <div className="space-y-1.5 pt-1">
                      <span className="text-[11px] font-bold text-amber-800 uppercase tracking-wider block">
                        Amenities Highlight:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {project.features.slice(0, 4).map((feat, idx) => (
                          <span key={idx} className="text-[11px] bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md border border-slate-200 font-medium">
                            {feat}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Footer */}
                <div className="p-6 pt-0 flex items-center gap-3">
                  <button
                    onClick={() => {
                      setActivePage(`project-detail:${project.id}`);
                    }}
                    className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold py-2.5 rounded-lg border border-slate-300 text-center transition-colors"
                  >
                    View Project
                  </button>

                  <button
                    onClick={() => openEnquiryModal(project.name)}
                    className="flex-1 bg-amber-800 hover:bg-amber-900 text-white font-bold text-xs uppercase tracking-wider py-2.5 rounded-lg text-center shadow-sm transition-all"
                  >
                    Enquire Now
                  </button>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CONNECTIVITY SPOTLIGHT (SECTION 4: VERY LIGHT NEUTRAL GREY/BEIGE) */}
      <section className="bg-[#F1F5F9] py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8 space-y-2">
            <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">
              Connectivity Benchmark
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
              Prayag New City – Prime Strategic Distances
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Integrated township located in Rahimapur, Jhusi, Prayagraj near proposed bypass with quick connectivity to all key hubs.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {mainProject.connectivity.slice(0, 6).map((c, i) => (
              <div key={i} className="bg-white p-4 rounded-xl border border-slate-200 text-center space-y-1 shadow-sm">
                <div className="text-amber-800 font-serif text-xl font-bold">
                  {c.distance}
                </div>
                <div className="text-xs text-slate-800 font-semibold">
                  {c.place}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <button
              onClick={() => {
                setActivePage('project-detail:prayag-new-city');
              }}
              className="text-xs font-bold text-amber-800 hover:text-amber-900 underline underline-offset-4"
            >
              See All 11 Connectivity Landmarks & Masterplan →
            </button>
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS (SECTION 5: VERY LIGHT WARM BEIGE) */}
      <section className="bg-[#F7F5F0] py-16 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">
              Client Feedback
            </span>
            <h2 className="font-serif text-3xl font-bold text-slate-900">
              What Our Customers Say
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Real customer experiences from plot owners across TriveniInfra developments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 6).map((t, idx) => (
              <div key={idx} className="light-card p-6 rounded-2xl space-y-4 relative flex flex-col justify-between">
                <div>
                  <Quote className="w-8 h-8 text-amber-700/20 mb-2" />
                  <p className="text-xs text-slate-700 italic leading-relaxed font-medium">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <h4 className="font-serif text-sm font-bold text-slate-900">
                      {t.name}
                    </h4>
                    <span className="text-[10px] text-amber-800 font-semibold">Verified Buyer</span>
                  </div>
                  <div className="flex text-amber-500 space-x-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. ENQUIRY CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border-2 border-amber-800/30 p-8 sm:p-12 rounded-3xl text-center relative overflow-hidden shadow-card-soft">
          
          <div className="max-w-3xl mx-auto space-y-6 relative z-10">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">
              Ready to Own Your Dream Plot in <span className="text-amber-800">Prayagraj?</span>
            </h2>
            <p className="text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
              Contact our sales desk directly or submit an enquiry to receive site map details, pricing breakdowns, and plot availability.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <button
                onClick={() => openEnquiryModal('General Query')}
                className="bg-amber-800 hover:bg-amber-900 text-white font-bold text-xs uppercase tracking-wider px-8 py-3.5 rounded-lg shadow-sm transition-all"
              >
                Submit Enquiry Now
              </button>

              <a
                href={`tel:${companyInfo.contacts.primaryPhone}`}
                className="bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold text-xs px-6 py-3.5 rounded-lg border border-slate-300 flex items-center space-x-2 transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-800" />
                <span>{companyInfo.contacts.primaryPhone}</span>
              </a>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
