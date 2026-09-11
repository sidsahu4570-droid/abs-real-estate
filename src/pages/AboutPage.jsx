import React from 'react';
import { Building2, ShieldCheck, Award, Users, CheckCircle2, ArrowRight, HeartHandshake, Compass } from 'lucide-react';
import { companyInfo } from '../data/companyData';

export default function AboutPage({ setActivePage, openEnquiryModal }) {
  return (
    <div className="space-y-16 pb-16 animate-fadeIn">
      
      {/* Header Banner */}
      <section className="relative pt-8 pb-12 sm:pt-12 sm:pb-16 bg-[#F5F2EB] border-b border-slate-200/80 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">
            Corporate Profile
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-slate-900 mt-2">
            About TriveniInfra Home & Height
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto mt-2">
            Delivering quality residential plots and infrastructure development in Prayagraj.
          </p>
        </div>
      </section>

      {/* Main Narrative Split Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-block px-3 py-1 rounded-md bg-amber-100 text-amber-900 border border-amber-300 text-xs font-bold uppercase">
              ABOUT TRIVENIINFRA
            </div>

            <h2 className="font-serif text-3xl font-bold text-slate-900 leading-snug">
              Now Get the Best Residential Plots in <span className="text-amber-800">Prayagraj</span>
            </h2>

            <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
              <p>{companyInfo.aboutText1}</p>
              <p>{companyInfo.aboutText2}</p>
              <p>{companyInfo.aboutText3}</p>
            </div>

            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={() => openEnquiryModal('General Query')}
                className="bg-amber-800 hover:bg-amber-900 text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-lg shadow-sm transition-all"
              >
                Enquire for Plots
              </button>

              <button
                onClick={() => {
                  setActivePage('director');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-white text-slate-800 hover:text-amber-800 border border-slate-300 text-xs font-bold px-6 py-3 rounded-lg shadow-sm transition-colors"
              >
                Read Director Desk Message
              </button>
            </div>

          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-md border border-slate-200">
              <img 
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80" 
                alt="TriveniInfra Township Infrastructure" 
                className="w-full h-96 lg:h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-80"></div>
              
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200 text-slate-900 space-y-2">
                <div className="font-serif text-lg font-bold">
                  Built for Customer Satisfaction
                </div>
                <p className="text-xs text-slate-600">
                  We strive to ensure quality in design, project management, execution, and infrastructure production.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Corporate Pillars (Section on Light Beige) */}
      <section className="bg-[#F5F2EB] py-16 border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="light-card p-8 rounded-2xl space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-800">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-slate-900">Our Vision</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                To be the most trusted real estate and infrastructure development company in Prayagraj by offering genuine pricing, transparent transactions, and inspirational living spaces.
              </p>
            </div>

            <div className="light-card p-8 rounded-2xl space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-800">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-slate-900">Our Mission</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Building long-term customer relationships and delighting families by converting their dream homes into reality with top-notch road infrastructure, parks, and amenities.
              </p>
            </div>

            <div className="light-card p-8 rounded-2xl space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-800">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-slate-900">Quality Promise</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Enforcing rigorous standards across land acquisition, site planning, 30-ft internal roads, 40-ft entrance boulevards, and legal demarcation.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
