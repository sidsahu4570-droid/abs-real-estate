import React, { useState, useEffect, useLayoutEffect } from 'react';
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
  const [activePage, setActivePage] = useState(() => {
    const hash = typeof window !== 'undefined' ? window.location.hash.replace('#', '') : '';
    return hash || 'home';
  });
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [enquiryInitialProject, setEnquiryInitialProject] = useState('');

  // Lightbox Modal state
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // 1. Disable browser's automatic scroll restoration and handle Back/Forward navigation
  useEffect(() => {
    if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const handlePopState = (e) => {
      if (e.state && e.state.page) {
        setActivePage(e.state.page);
      } else {
        const hash = window.location.hash.replace('#', '');
        setActivePage(hash || 'home');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // 2. GUARANTEED GLOBAL SCROLL TO TOP ON PAGE NAVIGATION
  useLayoutEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    // Instant reset synchronously before browser paint
    scrollToTop();

    // Secondary reset on next animation frame
    const rafId = requestAnimationFrame(() => {
      scrollToTop();
    });

    // Safety fallback timer for dynamic content mounting
    const timerId = setTimeout(() => {
      scrollToTop();
    }, 50);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(timerId);
    };
  }, [activePage]);

  // Wrapper for setting active page with history push state
  const handlePageChange = (newPage) => {
    setActivePage(newPage);
    try {
      if (typeof window !== 'undefined') {
        window.history.pushState({ page: newPage }, '', `#${newPage}`);
      }
    } catch (err) {
      // Ignore if pushState blocked
    }
  };

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
          setActivePage={handlePageChange}
          openEnquiryModal={openEnquiryModal}
          openLightbox={openLightbox}
        />
      );
    }

    switch (activePage) {
      case 'home':
        return <HomePage setActivePage={handlePageChange} openEnquiryModal={openEnquiryModal} />;
      case 'about':
        return <AboutPage setActivePage={handlePageChange} openEnquiryModal={openEnquiryModal} />;
      case 'director':
        return <DirectorDeskPage openEnquiryModal={openEnquiryModal} />;
      case 'projects':
        return <ProjectsPage setActivePage={handlePageChange} openEnquiryModal={openEnquiryModal} />;
      case 'availability':
        return <PlotAvailabilityPage openEnquiryModal={openEnquiryModal} />;
      case 'documents':
        return <DocumentsPage openLightbox={openLightbox} />;
      case 'gallery':
        return <GalleryPage openLightbox={openLightbox} />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage setActivePage={handlePageChange} openEnquiryModal={openEnquiryModal} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF8] text-slate-800 font-sans selection:bg-amber-100 selection:text-amber-900">
      
      {/* Sticky Luxury Navbar */}
      <Navbar 
        activePage={activePage} 
        setActivePage={handlePageChange} 
        openEnquiryModal={openEnquiryModal} 
      />

      {/* Main Page Body */}
      <main className="flex-grow">
        {renderCurrentPage()}
      </main>

      {/* Footer */}
      <Footer 
        setActivePage={handlePageChange} 
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
