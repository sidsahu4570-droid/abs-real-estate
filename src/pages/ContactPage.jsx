import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Building2, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  Clock, 
  ShieldCheck,
  User,
  FileText,
  Grid
} from 'lucide-react';
import { companyInfo } from '../data/companyData';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    project: 'Prayag New City',
    plotSize: '1200 Sq. Ft.',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9+\-\s]{10,15}$/.test(formData.phone)) {
      newErrors.phone = 'Valid phone number is required';
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

  return (
    <div className="space-y-16 pb-16 animate-fadeIn">
      
      {/* Header Banner */}
      <section className="relative pt-8 pb-12 sm:pt-12 sm:pb-16 bg-[#F5F2EB] border-b border-slate-200/80 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">
            Connect With Us
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-slate-900 mt-2">
            Contact & Office Locations
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto mt-2">
            Visit our corporate office in Civil Lines, Prayagraj or reach out directly to our project sales desk.
          </p>
        </div>
      </section>

      {/* Main Grid: Form + Address Info */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-7">
            <div className="light-card p-6 sm:p-10 rounded-3xl space-y-6">
              
              <div>
                <span className="text-xs font-bold text-amber-800 uppercase tracking-wider">
                  Real Estate Enquiry Form
                </span>
                <h2 className="font-serif text-2xl font-bold text-slate-900 mt-1">
                  Send Us a Direct Message
                </h2>
                <p className="text-xs text-slate-600 mt-1">
                  Fill out the form below to receive site visit scheduling, price lists, and availability.
                </p>
              </div>

              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-300 rounded-2xl p-8 text-center space-y-4">
                  <CheckCircle2 className="w-12 h-12 text-emerald-700 mx-auto" />
                  <h3 className="font-serif text-xl font-bold text-slate-900">
                    Thank You, {formData.fullName}!
                  </h3>
                  <p className="text-xs text-slate-700">
                    Your enquiry has been received. Our sales executive will call you at <strong className="text-amber-800">{formData.phone}</strong> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: '',
                        phone: '',
                        email: '',
                        project: 'Prayag New City',
                        plotSize: '1200 Sq. Ft.',
                        message: ''
                      });
                    }}
                    className="bg-slate-100 text-xs font-bold text-slate-800 px-6 py-2.5 rounded-lg border border-slate-300 hover:bg-slate-200"
                  >
                    Submit Another Query
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5 flex items-center space-x-1">
                      <User className="w-3.5 h-3.5 text-amber-800" />
                      <span>Full Name *</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Anand Kumar"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className={`w-full bg-slate-50 border ${errors.fullName ? 'border-rose-500' : 'border-slate-300'} rounded-lg px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-amber-800 focus:bg-white transition-colors`}
                    />
                    {errors.fullName && <p className="text-xs text-rose-600 mt-1">{errors.fullName}</p>}
                  </div>

                  {/* Phone & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5 flex items-center space-x-1">
                        <Phone className="w-3.5 h-3.5 text-amber-800" />
                        <span>Phone Number *</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="+91-7237054762"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full bg-slate-50 border ${errors.phone ? 'border-rose-500' : 'border-slate-300'} rounded-lg px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-amber-800 focus:bg-white transition-colors`}
                      />
                      {errors.phone && <p className="text-xs text-rose-600 mt-1">{errors.phone}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5 flex items-center space-x-1">
                        <Mail className="w-3.5 h-3.5 text-amber-800" />
                        <span>Email Address</span>
                      </label>
                      <input
                        type="email"
                        placeholder="yourname@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-amber-800 focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  {/* Project & Plot Size */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5 flex items-center space-x-1">
                        <Building2 className="w-3.5 h-3.5 text-amber-800" />
                        <span>Project Interested In</span>
                      </label>
                      <select
                        value={formData.project}
                        onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-amber-800 focus:bg-white font-medium transition-colors"
                      >
                        <option value="Prayag New City">Prayag New City (Jhusi)</option>
                        <option value="Maa Sarda New City">Maa Sarda New City</option>
                        <option value="Prayag New Colony">Prayag New Colony (Rewa Rd)</option>
                        <option value="General Query">General Query</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5 flex items-center space-x-1">
                        <Grid className="w-3.5 h-3.5 text-amber-800" />
                        <span>Preferred Plot Size</span>
                      </label>
                      <select
                        value={formData.plotSize}
                        onChange={(e) => setFormData({ ...formData, plotSize: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-amber-800 focus:bg-white font-medium transition-colors"
                      >
                        <option value="1000 Sq. Ft.">1000 Sq. Ft.</option>
                        <option value="1200 Sq. Ft.">1200 Sq. Ft.</option>
                        <option value="1500 Sq. Ft.">1500 Sq. Ft.</option>
                        <option value="1800 Sq. Ft.">1800 Sq. Ft.</option>
                        <option value="2400 Sq. Ft.">2400 Sq. Ft.</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5 flex items-center space-x-1">
                      <FileText className="w-3.5 h-3.5 text-amber-800" />
                      <span>Message / Specific Requirements</span>
                    </label>
                    <textarea
                      rows="4"
                      placeholder="Specify requirements or convenient time for site visit..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-amber-800 focus:bg-white transition-colors"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-amber-800 hover:bg-amber-900 text-white font-bold text-sm uppercase tracking-wider py-3.5 rounded-lg shadow-sm transition-all flex items-center justify-center space-x-2"
                  >
                    <Send className="w-4 h-4 text-amber-200" />
                    <span>Submit Enquiry</span>
                  </button>

                </form>
              )}

            </div>
          </div>

          {/* Right Column: Office Cards & Hotline */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Hotline Box */}
            <div className="light-card p-6 rounded-3xl space-y-4 border-l-4 border-amber-800">
              <h3 className="font-serif text-lg font-bold text-slate-900 flex items-center space-x-2">
                <Phone className="w-5 h-5 text-amber-800" />
                <span>Hotline Phone Numbers</span>
              </h3>
              
              <div className="space-y-2 text-sm text-slate-800">
                {companyInfo.contacts.phones.map((p, idx) => (
                  <a 
                    key={idx}
                    href={`tel:${p.value}`}
                    className="flex items-center justify-between p-3 rounded-lg bg-slate-50 border border-slate-200 hover:border-amber-800 transition-colors"
                  >
                    <span className="font-bold text-slate-900">{p.display}</span>
                    <span className="text-xs text-amber-800 font-bold">Click to Call →</span>
                  </a>
                ))}
              </div>

              <div className="pt-2">
                <a
                  href={`mailto:${companyInfo.contacts.email}`}
                  className="flex items-center space-x-2 text-xs text-slate-700 hover:text-amber-800 font-medium"
                >
                  <Mail className="w-4 h-4 text-amber-800" />
                  <span>{companyInfo.contacts.email}</span>
                </a>
              </div>
            </div>

            {/* Office Locations */}
            <div className="space-y-4">
              <h3 className="font-serif text-lg font-bold text-slate-900 border-b border-slate-200 pb-2">
                All 5 Office & Project Locations
              </h3>

              {companyInfo.offices.map((off, idx) => (
                <div key={idx} className="light-card p-5 rounded-2xl space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-sm font-bold text-slate-900">
                      {off.title}
                    </span>
                    <span className="text-[10px] font-bold text-amber-900 bg-amber-100 border border-amber-300 px-2 py-0.5 rounded-full uppercase">
                      {off.type}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {off.address}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* Embedded Map Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="light-card p-6 rounded-3xl space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-serif text-lg font-bold text-slate-900 flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-amber-800" />
              <span>Prayagraj Location Map</span>
            </h3>
            <span className="text-xs text-slate-500 font-medium">Civil Line & Jhusi Hub</span>
          </div>

          <div className="h-80 rounded-2xl overflow-hidden border border-slate-200">
            <iframe
              title="TriveniInfra Office Location Prayagraj"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.8277259164287!2d81.8317!3d25.4526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398534c7ef2df673%3A0x6b100bb5d812345!2sCivil%20Lines%2C%20Prayagraj%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

    </div>
  );
}
