import React from 'react';
import { Quote, Award, Briefcase, ShieldCheck, Building2, Phone, Mail } from 'lucide-react';
import { directorData, companyInfo } from '../data/companyData';

export default function DirectorDeskPage({ openEnquiryModal }) {
  return (
    <div className="space-y-16 pb-16 animate-fadeIn">
      
      {/* Header Banner */}
      <section className="relative pt-8 pb-12 sm:pt-12 sm:pb-16 bg-[#F5F2EB] border-b border-slate-200/80 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">
            Leadership & Vision
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-slate-900 mt-2">
            Director Desk
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto mt-2">
            Insights and leadership perspective from TriveniInfra Home & Height Pvt. Ltd.
          </p>
        </div>
      </section>

      {/* Main Director Editorial Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="light-card p-8 sm:p-12 rounded-3xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Director Portrait Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-md border-2 border-amber-800/30">
                <img 
                  src={directorData.image} 
                  alt={directorData.name} 
                  className="w-full h-96 lg:h-[480px] object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>

                <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200 text-center space-y-1 text-slate-900">
                  <h3 className="font-serif text-2xl font-bold">
                    {directorData.name}
                  </h3>
                  <div className="text-xs text-amber-800 font-bold uppercase tracking-widest">
                    {directorData.title}
                  </div>
                  <div className="text-[11px] text-slate-500 font-medium">
                    {directorData.company}
                  </div>
                </div>
              </div>

              {/* Experience Pill */}
              <div className="absolute -top-4 -right-4 bg-amber-800 text-white font-bold text-xs px-4 py-2 rounded-lg shadow-sm uppercase tracking-wider flex items-center space-x-1.5">
                <Award className="w-4 h-4 text-amber-200" />
                <span>10+ Years Experience</span>
              </div>
            </div>

            {/* Editorial Bio Column */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-block px-3 py-1 rounded-md bg-amber-100 text-amber-900 border border-amber-300 text-xs font-bold uppercase">
                Director's Message
              </div>

              <h2 className="font-serif text-3xl font-bold text-slate-900">
                Pioneering Strategic Transformations in Real Estate
              </h2>

              {/* Quote Highlight Box */}
              <div className="bg-[#F5F2EB] p-6 rounded-2xl border-l-4 border-amber-800 relative">
                <Quote className="w-8 h-8 text-amber-800/20 absolute top-4 right-4" />
                <p className="text-sm font-serif italic text-slate-800 leading-relaxed font-semibold">
                  "{directorData.quote}"
                </p>
                <div className="text-xs text-amber-900 mt-2 font-bold">
                  — {directorData.name}, Director
                </div>
              </div>

              {/* Bio Paragraphs */}
              <div className="space-y-4 text-sm text-slate-700 leading-relaxed font-normal">
                {directorData.bio.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Key Competencies Badges */}
              <div className="pt-2 flex flex-wrap gap-2 text-xs">
                <span className="bg-slate-100 text-slate-800 font-semibold px-3 py-1.5 rounded-lg border border-slate-300">
                  Land Acquisition & Underwriting
                </span>
                <span className="bg-slate-100 text-slate-800 font-semibold px-3 py-1.5 rounded-lg border border-slate-300">
                  Realty Consulting & Development
                </span>
                <span className="bg-slate-100 text-slate-800 font-semibold px-3 py-1.5 rounded-lg border border-slate-300">
                  Client Value & Integrity
                </span>
              </div>

              {/* Contact CTA */}
              <div className="pt-4 flex flex-wrap gap-4 items-center">
                <button
                  onClick={() => openEnquiryModal('Director Desk Query')}
                  className="bg-amber-800 hover:bg-amber-900 text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-lg shadow-sm transition-all"
                >
                  Schedule Consultation
                </button>

                <a
                  href={`tel:${companyInfo.contacts.primaryPhone}`}
                  className="text-xs text-slate-800 hover:text-amber-800 font-bold flex items-center space-x-1.5"
                >
                  <Phone className="w-4 h-4 text-amber-800" />
                  <span>{companyInfo.contacts.primaryPhone}</span>
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
