import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';
import Publications from '../components/Publications';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';

const AllProjects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-bg-main dark:bg-darkbg transition-colors duration-300">
      <SEOHead
        title="Mohammad Haroon Portfolio Projects | Full Stack Developer"
        description="Explore the complete Mohammad Haroon portfolio: AI-powered platforms, e-commerce solutions, WordPress development, and modern web applications built with React, Node.js, and Python."
        keywords="Mohammad Haroon, Mohammad Haroon Portfolio, Mohammad Haroon projects, Full Stack Developer portfolio, React projects, WordPress projects, AI development, E-commerce platforms, Web development portfolio"
        canonicalUrl="https://devowl.me/projects"
        ogType="website"
        breadcrumbs={[
          { name: "Home", url: "https://devowl.me/" },
          { name: "All Projects", url: "https://devowl.me/projects" }
        ]}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Mohammad Haroon - Project Portfolio",
          "description": "Complete portfolio of projects by Mohammad Haroon, a Full Stack Web Developer specializing in React, Node.js, Python, and WordPress.",
          "author": {
            "@type": "Person",
            "name": "Mohammad Haroon",
            "alternateName": "Muhammad Haroon",
            "url": "https://devowl.me/"
          },
          "mainEntity": {
            "@type": "ItemList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Meeting AI", "url": "https://devowl.me/project/meet-ai" },
              { "@type": "ListItem", "position": 2, "name": "Syeen - Business Collaboration Platform", "url": "https://devowl.me/project/syeen" },
              { "@type": "ListItem", "position": 3, "name": "Foncentra - E-Learning Platform", "url": "https://devowl.me/project/foncentra" },
              { "@type": "ListItem", "position": 4, "name": "GearNix - E-commerce Platform", "url": "https://devowl.me/project/ecommerce" },
              { "@type": "ListItem", "position": 5, "name": "Aperture Futures - AI Intelligence Platform", "url": "https://devowl.me/project/aperture-futures" },
              { "@type": "ListItem", "position": 6, "name": "Wordy app - WordPress Language Learning App", "url": "https://devowl.me/project/wordy-app" }
            ]
          }
        }}
      />
      <Navbar />
      <div className="pt-16">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-wrap gap-3" aria-label="Projects page navigation">
          <Link to="/" className="text-sm font-medium text-ink-secondary dark:text-darkink-secondary hover:text-primary-500 transition-colors">
            Home
          </Link>
          <Link to="/#about" className="text-sm font-medium text-ink-secondary dark:text-darkink-secondary hover:text-primary-500 transition-colors">
            About
          </Link>
          <Link to="/#contact" className="text-sm font-medium text-ink-secondary dark:text-darkink-secondary hover:text-primary-500 transition-colors">
            Contact
          </Link>
        </nav>
        <Projects />
        <Publications />
      </div>
      <Footer />
    </div>
  );
};

export default AllProjects;
