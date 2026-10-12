import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';
import Publications from '../components/Publications';
import Footer from '../components/Footer';
import PageTitle from '../components/PageTitle';

const AllProjects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-bg-main dark:bg-darkbg transition-colors duration-300">
      <PageTitle title="Mohammad Haroon Portfolio Projects | Full Stack Developer" />
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
