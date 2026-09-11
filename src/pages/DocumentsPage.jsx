import React from 'react';
import { FileText, Download, Eye, ShieldCheck, Map, BookOpen, Grid, FileCheck } from 'lucide-react';
import { documentsData } from '../data/companyData';

export default function DocumentsPage({ openLightbox }) {
  const getDocIcon = (iconName) => {
    switch (iconName) {
      case 'FileCheck': return <FileCheck className="w-6 h-6 text-amber-800" />;
      case 'Shield': return <ShieldCheck className="w-6 h-6 text-amber-800" />;
      case 'Map': return <Map className="w-6 h-6 text-amber-800" />;
      case 'BookOpen': return <BookOpen className="w-6 h-6 text-amber-800" />;
      case 'Grid': return <Grid className="w-6 h-6 text-amber-800" />;
      default: return <FileText className="w-6 h-6 text-amber-800" />;
    }
  };

  return (
    <div className="space-y-16 pb-16 animate-fadeIn">
      
      {/* Header Banner */}
      <section className="relative pt-8 pb-12 sm:pt-12 sm:pb-16 bg-[#F5F2EB] border-b border-slate-200/80 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">
            Resources & Downloads
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-slate-900 mt-2">
            Company Documents & Library
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto mt-2">
            Access legal registration documents, site maps, project pamphlets, plot guidelines, and joining forms.
          </p>
        </div>
      </section>

      {/* Documents Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {documentsData.map((doc) => (
            <div 
              key={doc.id}
              className="light-card p-6 rounded-2xl space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center">
                    {getDocIcon(doc.icon)}
                  </div>
                  <span className="text-[11px] font-bold text-amber-900 bg-amber-100 border border-amber-300 px-2.5 py-1 rounded-full uppercase">
                    {doc.category}
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-bold text-slate-900">
                    {doc.title}
                  </h3>
                  <span className="text-[11px] text-slate-500 block mt-0.5 font-semibold">
                    {doc.type}
                  </span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {doc.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <a
                  href={doc.fileUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold py-2.5 rounded-lg border border-slate-300 flex items-center justify-center space-x-1.5 transition-colors"
                >
                  <Eye className="w-4 h-4 text-amber-800" />
                  <span>View Online</span>
                </a>

                <a
                  href={doc.fileUrl}
                  target="_blank"
                  rel="noreferrer"
                  download
                  className="flex-1 bg-amber-800 hover:bg-amber-900 text-white font-bold text-xs uppercase tracking-wider py-2.5 rounded-lg flex items-center justify-center space-x-1.5 shadow-sm transition-all"
                >
                  <Download className="w-4 h-4 text-amber-200" />
                  <span>Download</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
