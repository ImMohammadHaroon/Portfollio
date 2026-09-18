import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from "@vercel/analytics/react";
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import SectionLoader from './components/SectionLoader';

// Lazy load pages for code splitting
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const MeetingAI = lazy(() => import('./pages/projects/MeetingAI'));
const Syeen = lazy(() => import('./pages/projects/Syeen'));
const EcommerceProject = lazy(() => import('./pages/projects/EcommerceProject'));
const Foncentra = lazy(() => import('./pages/projects/Foncentra'));
const ApertureFutures = lazy(() => import('./pages/projects/ApertureFutures'));
const WordyApp = lazy(() => import('./pages/projects/WordyApp'));
const AllProjects = lazy(() => import('./pages/AllProjects'));
const NotFound = lazy(() => import('./pages/NotFound'));

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    const id = hash.replace('#', '');
    let attempts = 0;
    const maxAttempts = 30;
    const navOffset = 80;

    const tryScroll = () => {
      const element = document.getElementById(id);
      if (element) {
        const top = element.getBoundingClientRect().top + window.scrollY - navOffset;
        window.scrollTo({ top, behavior: 'smooth' });
        return;
      }
      if (attempts < maxAttempts) {
        attempts += 1;
        setTimeout(tryScroll, 100);
      }
    };

    tryScroll();
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <SpeedInsights />
      <Analytics />
      <CustomCursor />
      <div className="min-h-screen bg-bg-main dark:bg-darkbg transition-colors duration-300">
        <Suspense fallback={<SectionLoader />}>
          <Routes>
            <Route path="/" element={
              <>
                <Navbar />
                <Home />
              </>
            } />
            <Route path="/mohammad-haroon" element={<About />} />
            <Route path="/muhammad-haroon" element={<Navigate to="/mohammad-haroon" replace />} />
            <Route path="/about" element={<Navigate to="/mohammad-haroon" replace />} />
            <Route path="/projects" element={<AllProjects />} />
            <Route path="/project/meet-ai" element={<MeetingAI />} />
            <Route path="/project/syeen" element={<Syeen />} />
            <Route path="/project/ecommerce" element={<EcommerceProject />} />
            <Route path="/project/foncentra" element={<Foncentra />} />
            <Route path="/project/aperture-futures" element={<ApertureFutures />} />
            <Route path="/project/wordy-app" element={<WordyApp />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
