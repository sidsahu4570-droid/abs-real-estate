import React, { useState } from 'react';
import { X, Send, CheckCircle2, Phone, MessageSquare, Building2, User, Mail, FileText, Grid } from 'lucide-react';
import { companyInfo } from '../data/companyData';

export default function EnquiryModal({ isOpen, onClose, initialProject = '' }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    project: initialProject || 'Prayag New City',
    plotSize: '1200 Sq. Ft.',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9+\-\s]{10,15}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  const resetAndClose = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      project: initialProject || 'Prayag New City',
      plotSize: '1200 Sq. Ft.',
      message: ''
    });
    setErrors({});
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-xl bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden">
        
        {/* Modal Header */}
        <div className="bg-[#F5F2EB] p-5 sm:p-6 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-800">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-slate-900 leading-tight">
                Plot Enquiry & Consultation
              </h3>
              <p className="text-xs text-amber-800 font-semibold">
                TriveniInfra Home & Height Pvt. Ltd.
              </p>
            </div>
          </div>

          <button
            onClick={resetAndClose}
            className="p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors"
            aria-label="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-700 border border-emerald-300 rounded-full flex items-center justify-center mx-auto animate-bounce">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="font-serif text-2xl font-bold text-slate-900">
                Enquiry Submitted Successfully!
              </h4>
              <p className="text-sm text-slate-700 max-w-md mx-auto leading-relaxed">
                Thank you <strong className="text-amber-800">{formData.fullName}</strong>. Our senior real estate consultant will get in touch with you at <strong className="text-amber-800">{formData.phone}</strong> shortly.
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs text-slate-600 max-w-md mx-auto space-y-1.5 text-left">
                <div><span className="text-slate-500">Project Interested:</span> <span className="text-slate-900 font-semibold">{formData.project}</span></div>
                <div><span className="text-slate-500">Preferred Size:</span> <span className="text-slate-900 font-semibold">{formData.plotSize}</span></div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={resetAndClose}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold px-6 py-3 rounded-lg transition-colors border border-slate-300"
                >
                  Close Window
                </button>
                <a
                  href={`https://wa.me/${companyInfo.contacts.whatsapp}?text=Hello%20TriveniInfra,%20I%20just%20submitted%20an%20enquiry%20for%20${encodeURIComponent(formData.project)}.`}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold px-6 py-3 rounded-lg flex items-center justify-center space-x-2 transition-colors shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Connect via WhatsApp</span>
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Name */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5 flex items-center space-x-1.5">
                  <User className="w-3.5 h-3.5 text-amber-800" />
                  <span>Full Name *</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Rajesh Sharma"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className={`w-full bg-slate-50 border ${errors.fullName ? 'border-rose-500' : 'border-slate-300'} rounded-lg px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-amber-800 focus:bg-white transition-colors`}
                />
                {errors.fullName && <p className="text-xs text-rose-600 mt-1">{errors.fullName}</p>}
              </div>

              {/* Phone & Email Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5 flex items-center space-x-1.5">
                    <Phone className="w-3.5 h-3.5 text-amber-800" />
                    <span>Phone Number *</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="e.g. +91 9876543210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`w-full bg-slate-50 border ${errors.phone ? 'border-rose-500' : 'border-slate-300'} rounded-lg px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-amber-800 focus:bg-white transition-colors`}
                  />
                  {errors.phone && <p className="text-xs text-rose-600 mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5 flex items-center space-x-1.5">
                    <Mail className="w-3.5 h-3.5 text-amber-800" />
                    <span>Email Address (Optional)</span>
                  </label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full bg-slate-50 border ${errors.email ? 'border-rose-500' : 'border-slate-300'} rounded-lg px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-amber-800 focus:bg-white transition-colors`}
                  />
                  {errors.email && <p className="text-xs text-rose-600 mt-1">{errors.email}</p>}
                </div>
              </div>

              {/* Project & Plot Size Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5 flex items-center space-x-1.5">
                    <Building2 className="w-3.5 h-3.5 text-amber-800" />
                    <span>Project Interested In</span>
                  </label>
                  <select
                    value={formData.project}
                    onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-amber-800 focus:bg-white transition-colors font-medium"
                  >
                    <option value="Prayag New City">Prayag New City (Jhusi)</option>
                    <option value="Maa Sarda New City">Maa Sarda New City</option>
                    <option value="Prayag New Colony">Prayag New Colony (Rewa Rd)</option>
                    <option value="General Query">General Investment Query</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5 flex items-center space-x-1.5">
                    <Grid className="w-3.5 h-3.5 text-amber-800" />
                    <span>Preferred Plot Size</span>
                  </label>
                  <select
                    value={formData.plotSize}
                    onChange={(e) => setFormData({ ...formData, plotSize: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-amber-800 focus:bg-white transition-colors font-medium"
                  >
                    <option value="1000 Sq. Ft.">1000 Sq. Ft. (25 x 40)</option>
                    <option value="1200 Sq. Ft.">1200 Sq. Ft. (30 x 40)</option>
                    <option value="1500 Sq. Ft.">1500 Sq. Ft. (30 x 50)</option>
                    <option value="1800 Sq. Ft.">1800 Sq. Ft. (36 x 50)</option>
                    <option value="2400 Sq. Ft.">2400 Sq. Ft. (40 x 60)</option>
                    <option value="Custom Size">Other / Custom Requirement</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5 flex items-center space-x-1.5">
                  <FileText className="w-3.5 h-3.5 text-amber-800" />
                  <span>Message / Specific Requirements</span>
                </label>
                <textarea
                  rows="3"
                  placeholder="Share details like budget, expected visit date, or specific plot preferences..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-amber-800 focus:bg-white transition-colors"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-amber-800 hover:bg-amber-900 text-white font-bold text-sm uppercase tracking-wider py-3.5 rounded-lg shadow-sm transition-all flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4 text-amber-200" />
                  <span>Submit Enquiry</span>
                </button>
              </div>

              <div className="pt-2 text-center text-[11px] text-slate-500">
                Or call us directly at <a href={`tel:${companyInfo.contacts.primaryPhone}`} className="text-amber-800 underline font-bold">{companyInfo.contacts.primaryPhone}</a>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
}
