import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import StickyMobileCTA from './components/StickyMobileCTA';
import EnquiryModal from './components/EnquiryModal';
import LightboxModal from './components/LightboxModal';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import DirectorDeskPage from './pages/DirectorDeskPage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import PlotAvailabilityPage from './pages/PlotAvailabilityPage';
import DocumentsPage from './pages/DocumentsPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [enquiryInitialProject, setEnquiryInitialProject] = useState('');

  // Lightbox Modal state
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openEnquiryModal = (projectName = '') => {
    setEnquiryInitialProject(projectName);
    setIsEnquiryModalOpen(true);
  };

  const openLightbox = (images, index = 0) => {
    setLightboxImages(images);
    setLightboxIndex(index);
    setIsLightboxOpen(true);
  };

  const renderCurrentPage = () => {
    if (activePage.startsWith('project-detail:')) {
      const projectId = activePage.split('project-detail:')[1];
      return (
        <ProjectDetailPage
          projectId={projectId}
          setActivePage={setActivePage}
          openEnquiryModal={openEnquiryModal}
          openLightbox={openLightbox}
        />
      );
    }

    switch (activePage) {
      case 'home':
        return <HomePage setActivePage={setActivePage} openEnquiryModal={openEnquiryModal} />;
      case 'about':
        return <AboutPage setActivePage={setActivePage} openEnquiryModal={openEnquiryModal} />;
      case 'director':
        return <DirectorDeskPage openEnquiryModal={openEnquiryModal} />;
      case 'projects':
        return <ProjectsPage setActivePage={setActivePage} openEnquiryModal={openEnquiryModal} />;
      case 'availability':
        return <PlotAvailabilityPage openEnquiryModal={openEnquiryModal} />;
      case 'documents':
        return <DocumentsPage openLightbox={openLightbox} />;
      case 'gallery':
        return <GalleryPage openLightbox={openLightbox} />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage setActivePage={setActivePage} openEnquiryModal={openEnquiryModal} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF8] text-slate-800 font-sans selection:bg-amber-100 selection:text-amber-900">
      
      {/* Sticky Luxury Navbar */}
      <Navbar 
        activePage={activePage} 
        setActivePage={setActivePage} 
        openEnquiryModal={openEnquiryModal} 
      />

      {/* Main Page Body */}
      <main className="flex-grow">
        {renderCurrentPage()}
      </main>

      {/* Footer */}
      <Footer 
        setActivePage={setActivePage} 
        openEnquiryModal={openEnquiryModal} 
      />

      {/* Floating Bottom Action Bar for Mobile */}
      <StickyMobileCTA 
        openEnquiryModal={openEnquiryModal} 
      />

      {/* Lead Capture Modal */}
      <EnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={() => setIsEnquiryModalOpen(false)}
        initialProject={enquiryInitialProject}
      />

      {/* Fullscreen Lightbox Modal */}
      <LightboxModal
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        images={lightboxImages}
        currentIndex={lightboxIndex}
        setCurrentIndex={setLightboxIndex}
      />

    </div>
  );
}
