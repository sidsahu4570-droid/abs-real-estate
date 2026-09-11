import React, { useState } from 'react';
import { Search, Filter, Building2, CheckCircle2, Clock, XCircle, Sparkles, Phone, AlertCircle } from 'lucide-react';
import { samplePlotInventory, projectsData } from '../data/companyData';

export default function PlotAvailabilityPage({ openEnquiryModal }) {
  const [selectedProject, setSelectedProject] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPlots = samplePlotInventory.filter((plot) => {
    const matchesProject = selectedProject === 'all' || plot.project === selectedProject;
    const matchesStatus = selectedStatus === 'all' || plot.status.toLowerCase() === selectedStatus.toLowerCase();
    const matchesQuery = searchQuery === '' || 
      plot.plotNo.toLowerCase().includes(searchQuery.toLowerCase()) ||
      plot.size.toLowerCase().includes(searchQuery.toLowerCase()) ||
      plot.projectName.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesProject && matchesStatus && matchesQuery;
  });

  const getStatusBadge = (status) => {
    switch (status.toLowerCase()) {
      case 'available':
        return (
          <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-300 text-xs font-bold">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
            <span>Available</span>
          </span>
        );
      case 'reserved':
      case 'hold':
        return (
          <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-900 border border-amber-300 text-xs font-bold">
            <Clock className="w-3.5 h-3.5 text-amber-700" />
            <span>On Hold</span>
          </span>
        );
      case 'booked':
      case 'sold':
        return (
          <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full bg-rose-50 text-rose-800 border border-rose-300 text-xs font-bold">
            <XCircle className="w-3.5 h-3.5 text-rose-700" />
            <span>Booked / Sold</span>
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-800 text-xs font-semibold">
            <span>{status}</span>
          </span>
        );
    }
  };

  return (
    <div className="space-y-16 pb-16 animate-fadeIn">
      
      {/* Header Banner */}
      <section className="relative pt-8 pb-12 sm:pt-12 sm:pb-16 bg-[#F5F2EB] border-b border-slate-200/80 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">
            Inventory & Selection
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-slate-900 mt-2">
            Plot Availability Lookup
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto mt-2">
            Search plot numbers, status, sizes, and facing options across TriveniInfra townships in Prayagraj.
          </p>
        </div>
      </section>

      {/* Main Filter & Inventory Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Verification Note */}
        <div className="bg-amber-50/80 border border-amber-200 rounded-2xl p-4 sm:p-5 flex items-start space-x-3 text-xs text-slate-800">
          <AlertCircle className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-bold text-amber-900 block">Official Inventory Note:</span>
            <p className="text-slate-700">
              Plot allocations are dynamically registered. For real-time spot registration, legal clearance documents, or site visit scheduling, please submit an enquiry or call our Civil Lines corporate office.
            </p>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="light-card p-6 rounded-2xl grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          
          {/* Search Input */}
          <div className="md:col-span-4 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              placeholder="Search Plot No (e.g. A-101)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-lg pl-10 pr-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-amber-800 focus:bg-white transition-colors"
            />
          </div>

          {/* Project Filter */}
          <div className="md:col-span-4">
            <select
              value={selectedProject}
              onChange={(e) => setSelectedProject(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-amber-800 focus:bg-white font-medium transition-colors"
            >
              <option value="all">All Projects (Prayag New City, Maa Sarda, etc.)</option>
              <option value="prayag-new-city">Prayag New City (Jhusi)</option>
              <option value="maa-sarda-new-city">Maa Sarda New City</option>
              <option value="prayag-new-colony">Prayag New Colony (Rewa Rd)</option>
            </select>
          </div>

          {/* Status Filter */}
          <div className="md:col-span-4">
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-amber-800 focus:bg-white font-medium transition-colors"
            >
              <option value="all">All Plot Statuses</option>
              <option value="available">Available Only</option>
              <option value="reserved">Reserved / On Hold</option>
              <option value="booked">Booked / Sold</option>
            </select>
          </div>

        </div>

        {/* Plot Inventory Table / Cards */}
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs text-slate-600 px-2 font-medium">
            <span>Showing <strong className="text-slate-900">{filteredPlots.length}</strong> plot records</span>
            <span>Refreshed Daily</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredPlots.map((plot) => (
              <div 
                key={plot.id}
                className="light-card p-5 rounded-2xl space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-slate-500">
                      {plot.projectName}
                    </span>
                    {getStatusBadge(plot.status)}
                  </div>

                  <div>
                    <div className="font-serif text-2xl font-bold text-slate-900">
                      Plot {plot.plotNo}
                    </div>
                    <div className="text-xs text-amber-800 font-bold mt-0.5">
                      {plot.size} ({plot.dimension})
                    </div>
                  </div>

                  <div className="space-y-1 text-xs text-slate-600 pt-2 border-t border-slate-100">
                    <div className="flex justify-between">
                      <span>Facing:</span>
                      <span className="text-slate-900 font-bold">{plot.facing}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Road Width:</span>
                      <span className="text-slate-900 font-bold">{plot.roadWidth}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <button
                    onClick={() => openEnquiryModal(`${plot.projectName} - Plot ${plot.plotNo}`)}
                    className="w-full bg-amber-800 hover:bg-amber-900 text-white font-bold text-xs py-2.5 rounded-lg transition-colors shadow-sm"
                  >
                    Enquire For Plot {plot.plotNo}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>

    </div>
  );
}
