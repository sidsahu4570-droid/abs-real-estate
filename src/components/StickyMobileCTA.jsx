import React from 'react';
import { Phone, MessageSquare, Sparkles } from 'lucide-react';
import { companyInfo } from '../data/companyData';

export default function StickyMobileCTA({ openEnquiryModal }) {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-t border-slate-200 p-2.5 px-4 shadow-lg flex items-center justify-between gap-2">
      
      {/* Call Button */}
      <a
        href={`tel:${companyInfo.contacts.primaryPhone}`}
        className="flex-1 bg-slate-100 border border-slate-300 text-slate-800 font-bold py-2.5 px-3 rounded-lg flex items-center justify-center space-x-1.5 text-xs active:scale-95 transition-transform"
      >
        <Phone className="w-4 h-4 text-amber-800" />
        <span>Call</span>
      </a>

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${companyInfo.contacts.whatsapp}?text=Hello%20TriveniInfra,%20I%20am%20interested%20in%20residential%20plots%20in%20Prayagraj.`}
        target="_blank"
        rel="noreferrer"
        className="flex-1 bg-emerald-50 border border-emerald-300 text-emerald-800 font-bold py-2.5 px-3 rounded-lg flex items-center justify-center space-x-1.5 text-xs active:scale-95 transition-transform"
      >
        <MessageSquare className="w-4 h-4 text-emerald-700" />
        <span>WhatsApp</span>
      </a>

      {/* Enquire Button */}
      <button
        onClick={() => openEnquiryModal()}
        className="flex-[1.4] bg-amber-800 hover:bg-amber-900 text-white font-bold py-2.5 px-3 rounded-lg flex items-center justify-center space-x-1.5 text-xs shadow-sm active:scale-95 transition-transform uppercase tracking-wider"
      >
        <Sparkles className="w-4 h-4 fill-amber-200 text-amber-200" />
        <span>Enquire</span>
      </button>

    </div>
  );
}
