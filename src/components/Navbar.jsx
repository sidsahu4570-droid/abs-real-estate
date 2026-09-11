import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ChevronDown, 
  Menu, 
  X, 
  Building2, 
  MessageSquare, 
  Sparkles,
  PhoneCall
} from 'lucide-react';
import { companyInfo } from '../data/companyData';

export default function Navbar({ activePage, setActivePage, openEnquiryModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [projectsDropdown, setProjectsDropdown] = useState(false);
  const [docsDropdown, setDocsDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (pageId, projectDetailId = null) => {
    if (projectDetailId) {
      setActivePage(`project-detail:${projectDetailId}`);
    } else {
      setActivePage(pageId);
    }
    setMobileMenuOpen(false);
    setProjectsDropdown(false);
    setDocsDropdown(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 transition-all duration-300">


      {/* Main Navbar (Pure White) */}
      <nav className={`transition-all duration-300 bg-white border-b border-slate-200 shadow-sm ${
        isScrolled ? 'py-3' : 'py-3.5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-700 via-amber-800 to-slate-900 flex items-center justify-center text-white font-serif font-bold text-xl shadow-sm group-hover:scale-105 transition-transform">
              <Building2 className="w-6 h-6 text-amber-200" />
            </div>
            <div>
              <div className="font-serif text-lg sm:text-xl font-bold tracking-tight text-slate-900 group-hover:text-amber-800 transition-colors leading-tight">
                TriveniInfra
              </div>
              <div className="text-[10px] sm:text-xs text-amber-800 tracking-widest uppercase font-semibold">
                Home & Height Pvt. Ltd.
              </div>
            </div>
          </div>

          {/* Desktop Links (Dark Text on Light Background) */}
          <div className="hidden lg:flex items-center space-x-7 text-sm font-semibold">
            <button 
              onClick={() => handleNavClick('home')}
              className={`transition-colors py-1 ${activePage === 'home' ? 'text-amber-800 font-bold border-b-2 border-amber-800' : 'text-slate-700 hover:text-amber-800'}`}
            >
              Home
            </button>

            <button 
              onClick={() => handleNavClick('about')}
              className={`transition-colors py-1 ${activePage === 'about' ? 'text-amber-800 font-bold border-b-2 border-amber-800' : 'text-slate-700 hover:text-amber-800'}`}
            >
              About Us
            </button>

            <button 
              onClick={() => handleNavClick('director')}
              className={`transition-colors py-1 ${activePage === 'director' ? 'text-amber-800 font-bold border-b-2 border-amber-800' : 'text-slate-700 hover:text-amber-800'}`}
            >
              Director Desk
            </button>

            {/* Projects Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setProjectsDropdown(true)}
              onMouseLeave={() => setProjectsDropdown(false)}
            >
              <button 
                onClick={() => handleNavClick('projects')}
                className={`flex items-center space-x-1 py-1 transition-colors ${
                  activePage.startsWith('projects') || activePage.startsWith('project-detail') 
                    ? 'text-amber-800 font-bold border-b-2 border-amber-800' 
                    : 'text-slate-700 hover:text-amber-800'
                }`}
              >
                <span>Projects</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${projectsDropdown ? 'rotate-180 text-amber-800' : ''}`} />
              </button>

              {projectsDropdown && (
                <div className="absolute top-full left-0 w-64 bg-white border border-slate-200 rounded-xl shadow-lg py-2 z-50">
                  <div className="px-3 py-1.5 text-[11px] font-bold text-amber-800 uppercase tracking-wider">
                    Our Townships
                  </div>
                  <button
                    onClick={() => handleNavClick('projects')}
                    className="w-full text-left px-4 py-2 text-sm text-slate-800 hover:bg-amber-50 hover:text-amber-900 transition-colors flex items-center justify-between font-medium"
                  >
                    <span>All Projects Overview</span>
                  </button>
                  <div className="h-px bg-slate-100 my-1"></div>
                  <button
                    onClick={() => handleNavClick('projects', 'prayag-new-city')}
                    className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-900 transition-colors"
                  >
                    Prayag New City (Jhusi)
                  </button>
                  <button
                    onClick={() => handleNavClick('projects', 'maa-sarda-new-city')}
                    className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-900 transition-colors"
                  >
                    Maa Sarda New City
                  </button>
                  <button
                    onClick={() => handleNavClick('projects', 'prayag-new-colony')}
                    className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-900 transition-colors"
                  >
                    Prayag New Colony (Rewa Rd)
                  </button>
                </div>
              )}
            </div>

            {/* Documents Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setDocsDropdown(true)}
              onMouseLeave={() => setDocsDropdown(false)}
            >
              <button 
                onClick={() => handleNavClick('documents')}
                className={`flex items-center space-x-1 py-1 transition-colors ${
                  activePage === 'documents' ? 'text-amber-800 font-bold border-b-2 border-amber-800' : 'text-slate-700 hover:text-amber-800'
                }`}
              >
                <span>Documents</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${docsDropdown ? 'rotate-180 text-amber-800' : ''}`} />
              </button>

              {docsDropdown && (
                <div className="absolute top-full left-0 w-60 bg-white border border-slate-200 rounded-xl shadow-lg py-2 z-50">
                  <button
                    onClick={() => handleNavClick('documents')}
                    className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-900 transition-colors"
                  >
                    Company Documents & PAN
                  </button>
                  <button
                    onClick={() => handleNavClick('documents')}
                    className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-900 transition-colors"
                  >
                    Site Maps & Pamphlets
                  </button>
                  <button
                    onClick={() => handleNavClick('documents')}
                    className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-900 transition-colors"
                  >
                    Joining / Booking Forms
                  </button>
                </div>
              )}
            </div>

            <button 
              onClick={() => handleNavClick('availability')}
              className={`transition-colors py-1 ${activePage === 'availability' ? 'text-amber-800 font-bold border-b-2 border-amber-800' : 'text-slate-700 hover:text-amber-800'}`}
            >
              Plot Availability
            </button>

            <button 
              onClick={() => handleNavClick('gallery')}
              className={`transition-colors py-1 ${activePage === 'gallery' ? 'text-amber-800 font-bold border-b-2 border-amber-800' : 'text-slate-700 hover:text-amber-800'}`}
            >
              Gallery
            </button>

            <button 
              onClick={() => handleNavClick('contact')}
              className={`transition-colors py-1 ${activePage === 'contact' ? 'text-amber-800 font-bold border-b-2 border-amber-800' : 'text-slate-700 hover:text-amber-800'}`}
            >
              Contact Us
            </button>
          </div>

          {/* Action CTA & Mobile Toggle */}
          <div className="flex items-center space-x-3">
            <button
              onClick={() => openEnquiryModal()}
              className="hidden sm:flex items-center space-x-2 bg-gradient-to-r from-amber-700 to-amber-800 hover:from-amber-800 hover:to-amber-900 text-white font-semibold text-xs uppercase tracking-wider px-4.5 py-2.5 rounded-lg shadow-sm hover:shadow transition-all"
            >
              <Sparkles className="w-4 h-4 fill-amber-200 text-amber-200" />
              <span>Enquire Now</span>
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-lg bg-slate-100 text-slate-800 hover:text-amber-800 hover:bg-slate-200 transition-colors border border-slate-200"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Slide-Over Drawer (Pure White) */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-[65px] bg-white z-40 border-t border-slate-200 px-6 py-6 overflow-y-auto flex flex-col justify-between">
            <div className="space-y-3">
              <button 
                onClick={() => handleNavClick('home')}
                className={`w-full text-left py-2.5 text-base font-semibold transition-colors border-b border-slate-100 flex items-center justify-between ${activePage === 'home' ? 'text-amber-800' : 'text-slate-800'}`}
              >
                <span>Home</span>
              </button>

              <button 
                onClick={() => handleNavClick('about')}
                className={`w-full text-left py-2.5 text-base font-semibold transition-colors border-b border-slate-100 flex items-center justify-between ${activePage === 'about' ? 'text-amber-800' : 'text-slate-800'}`}
              >
                <span>About Us</span>
              </button>

              <button 
                onClick={() => handleNavClick('director')}
                className={`w-full text-left py-2.5 text-base font-semibold transition-colors border-b border-slate-100 flex items-center justify-between ${activePage === 'director' ? 'text-amber-800' : 'text-slate-800'}`}
              >
                <span>Director Desk</span>
              </button>

              <div className="space-y-1 py-2 border-b border-slate-100">
                <button 
                  onClick={() => handleNavClick('projects')}
                  className="w-full text-left text-base font-bold text-amber-800 py-1 flex items-center justify-between"
                >
                  <span>Projects</span>
                </button>
                <div className="pl-4 space-y-2 mt-1 text-sm font-medium">
                  <button onClick={() => handleNavClick('projects', 'prayag-new-city')} className="block text-slate-700 hover:text-amber-800 py-1">
                    • Prayag New City (Jhusi)
                  </button>
                  <button onClick={() => handleNavClick('projects', 'maa-sarda-new-city')} className="block text-slate-700 hover:text-amber-800 py-1">
                    • Maa Sarda New City
                  </button>
                  <button onClick={() => handleNavClick('projects', 'prayag-new-colony')} className="block text-slate-700 hover:text-amber-800 py-1">
                    • Prayag New Colony (Rewa Rd)
                  </button>
                </div>
              </div>

              <button 
                onClick={() => handleNavClick('availability')}
                className={`w-full text-left py-2.5 text-base font-semibold transition-colors border-b border-slate-100 flex items-center justify-between ${activePage === 'availability' ? 'text-amber-800' : 'text-slate-800'}`}
              >
                <span>Plot Availability</span>
              </button>

              <button 
                onClick={() => handleNavClick('documents')}
                className={`w-full text-left py-2.5 text-base font-semibold transition-colors border-b border-slate-100 flex items-center justify-between ${activePage === 'documents' ? 'text-amber-800' : 'text-slate-800'}`}
              >
                <span>Documents & Downloads</span>
              </button>

              <button 
                onClick={() => handleNavClick('gallery')}
                className={`w-full text-left py-2.5 text-base font-semibold transition-colors border-b border-slate-100 flex items-center justify-between ${activePage === 'gallery' ? 'text-amber-800' : 'text-slate-800'}`}
              >
                <span>Gallery</span>
              </button>

              <button 
                onClick={() => handleNavClick('contact')}
                className={`w-full text-left py-2.5 text-base font-semibold transition-colors border-b border-slate-100 flex items-center justify-between ${activePage === 'contact' ? 'text-amber-800' : 'text-slate-800'}`}
              >
                <span>Contact Us</span>
              </button>
            </div>

            <div className="pt-6 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openEnquiryModal();
                }}
                className="w-full bg-amber-800 hover:bg-amber-900 text-white font-bold py-3.5 rounded-lg text-center text-sm uppercase tracking-wider shadow-sm"
              >
                Enquire About Plots Now
              </button>

              <a
                href={`tel:${companyInfo.contacts.primaryPhone}`}
                className="w-full bg-slate-100 border border-slate-200 text-slate-800 font-semibold py-3 rounded-lg flex items-center justify-center space-x-2 text-sm"
              >
                <PhoneCall className="w-4 h-4 text-amber-800" />
                <span>Call Hotline: {companyInfo.contacts.primaryPhone}</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
