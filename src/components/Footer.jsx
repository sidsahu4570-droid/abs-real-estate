import React from 'react';
import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  ChevronRight, 
  Facebook, 
  Twitter, 
  Linkedin, 
  MessageSquare,
  ShieldCheck
} from 'lucide-react';
import { companyInfo } from '../data/companyData';

export default function Footer({ setActivePage, openEnquiryModal }) {
  const handleNav = (pageId, detailId = null) => {
    if (detailId) {
      setActivePage(`project-detail:${detailId}`);
    } else {
      setActivePage(pageId);
    }
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 text-sm relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => handleNav('home')}>
              <div className="w-10 h-10 rounded-xl bg-amber-700 flex items-center justify-center text-white font-serif font-bold text-xl shadow-sm">
                <Building2 className="w-6 h-6 text-amber-200" />
              </div>
              <div>
                <div className="font-serif text-lg font-bold text-white leading-tight">
                  TriveniInfra
                </div>
                <div className="text-[10px] text-amber-400 tracking-wider uppercase font-semibold">
                  Home & Height Pvt. Ltd.
                </div>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed">
              TriveniInfra Home & Height Pvt. Ltd. is a real estate and infrastructure development company headquartered in Prayagraj, dedicated to offering best residential plots with genuine rates and quality development.
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <a 
                href={companyInfo.socials.facebook} 
                target="_blank" 
                rel="noreferrer" 
                className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-amber-400 hover:border-amber-500/50 transition-colors"
                aria-label="Facebook Page"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href={`https://wa.me/${companyInfo.contacts.whatsapp}`} 
                target="_blank" 
                rel="noreferrer" 
                className="w-9 h-9 rounded-lg bg-emerald-950/80 border border-emerald-700/50 flex items-center justify-center text-emerald-400 hover:bg-emerald-600 hover:text-white transition-colors"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-2">
              <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/60 text-xs text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Genuine Rates & Clear Legal Titles</span>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links & Projects */}
          <div className="space-y-4">
            <h4 className="font-serif text-base font-bold text-white tracking-wide border-b border-slate-800 pb-2">
              Quick Links & Projects
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-amber-400 transition-colors flex items-center space-x-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-500" />
                  <span>Home</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-amber-400 transition-colors flex items-center space-x-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-500" />
                  <span>About Company</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('director')} className="hover:text-amber-400 transition-colors flex items-center space-x-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-500" />
                  <span>Director Desk</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('projects', 'prayag-new-city')} className="hover:text-amber-400 transition-colors flex items-center space-x-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-500" />
                  <span>Prayag New City (Jhusi)</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('projects', 'maa-sarda-new-city')} className="hover:text-amber-400 transition-colors flex items-center space-x-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-500" />
                  <span>Maa Sarda New City</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('availability')} className="hover:text-amber-400 transition-colors flex items-center space-x-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-500" />
                  <span>Plot Availability Lookup</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('documents')} className="hover:text-amber-400 transition-colors flex items-center space-x-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-500" />
                  <span>Downloads & Documents</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-amber-400 transition-colors flex items-center space-x-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-500" />
                  <span>Contact & Enquiry</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Office Addresses */}
          <div className="space-y-4">
            <h4 className="font-serif text-base font-bold text-white tracking-wide border-b border-slate-800 pb-2">
              Our Locations
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-slate-200 block">Registered Head Office:</span>
                  <span className="text-slate-400 leading-relaxed">21B/2/12B, Cooper Road, Civil Line, Prayagraj</span>
                </div>
              </div>

              <div className="flex items-start space-x-2.5">
                <Building2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-slate-200 block">Plot Address (Prayag New City):</span>
                  <span className="text-slate-400 leading-relaxed">Rahimapur, Jhusi, Prayagraj</span>
                </div>
              </div>

              <div className="flex items-start space-x-2.5">
                <Building2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-slate-200 block">Plot Address (Prayag Colony):</span>
                  <span className="text-slate-400 leading-relaxed">Rewa Road, Baredhiya, Jari, Prayagraj</span>
                </div>
              </div>

              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-slate-300 block">Zonal Offices:</span>
                  <span className="text-slate-400">Gyanpur, Bhadohi & Jaunpur</span>
                </div>
              </div>
            </div>
          </div>

          {/* Col 4: Contact & Action */}
          <div className="space-y-4">
            <h4 className="font-serif text-base font-bold text-white tracking-wide border-b border-slate-800 pb-2">
              Contact & Hotline
            </h4>

            <div className="space-y-2 text-xs">
              <div className="flex items-center space-x-2 text-slate-300">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>+91-0532-4054097</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-300">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>+91-7237054762</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-300">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>+91-8318189369</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-300 pt-1">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="truncate">{companyInfo.contacts.email}</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => openEnquiryModal()}
                className="w-full bg-amber-700 hover:bg-amber-800 text-white font-bold text-xs uppercase tracking-wider py-3 rounded-lg shadow-sm text-center transition-all"
              >
                Request Plot Consultation
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} {companyInfo.name}. All Rights Reserved.</p>
          
          <div className="flex items-center space-x-4">
            <span>Genuine Rates • Quality Infrastructure</span>
            <span className="text-slate-700">•</span>
            <span className="text-slate-400">{companyInfo.designerCredit}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
