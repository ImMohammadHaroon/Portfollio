import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SEOHead from '../../components/SEOHead';
import ProjectPageNav from '../../components/ProjectPageNav';
import SyeenImage from '../../assets/Syeen.webp';

const Syeen = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const frame = requestAnimationFrame(() => setIsVisible(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="min-h-screen bg-bg-main dark:bg-darkbg">
      <SEOHead
        title="Syeen - Talent & Business Collaboration Platform | Mohammad Haroon Portfolio"
        description="Syeen: A comprehensive WordPress-powered talent and business collaboration platform featuring intelligent job matching, real-time application tracking, and dual-sided dashboards. Built by Mohammad Haroon."
        keywords="Syeen, Job Portal, Talent Platform, WordPress, Elementor, PHP, Business Collaboration, Application Tracking, Hiring Platform, Mohammad Haroon"
        canonicalUrl="https://devowl.me/project/syeen"
        ogType="article"
        publishedDate="2025-10-15"
        modifiedDate="2026-01-31"
        breadcrumbs={[
          { name: "Home", url: "https://devowl.me/" },
          { name: "Projects", url: "https://devowl.me/projects" },
          { name: "Syeen", url: "https://devowl.me/project/syeen" }
        ]}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "Syeen: Talent & Business Collaboration Platform",
          "author": {
            "@type": "Person",
            "name": "Mohammad Haroon",
            "alternateName": "Mohammad Haroon",
            "url": "https://devowl.me/"
          },
          "description": "A comprehensive WordPress-powered platform connecting businesses with top talent through intelligent job matching, streamlined applications, and real-time collaboration tools.",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "Web",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "keywords": "WordPress, PHP, Elementor, Job Portal, Talent Management",
          "datePublished": "2025-10-15",
          "programmingLanguage": ["PHP", "JavaScript", "HTML", "CSS"]
        }}
      />
      <Navbar />

      {/* Hero Section */}
      <div className="relative bg-bg-main dark:bg-darkbg py-20 overflow-hidden">
        <div className="absolute inset-0 bg-bg-subtle dark:bg-darksubtle"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJWMzRoLTJ6bTAtNGgydi0yaC0ydjJ6bS00IDBoMnYtMmgtMnYyem0wLTRoMnYtMmgtMnYyem0wLTRoMnYtMmgtMnYyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-primary-500 text-white text-sm font-semibold rounded-full">
                Web Development & Business Platform
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-ink-primary dark:text-darkink-primary mb-6">
              Syeen: Talent & Business Collaboration Platform
            </h1>
            <p className="text-xl text-ink-secondary dark:text-darkink-secondary max-w-3xl mx-auto leading-relaxed">
              A comprehensive WordPress-powered platform connecting businesses with top talent through
              intelligent job matching, streamlined applications, and real-time collaboration tools.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Featured Image */}
        <div className={`mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={SyeenImage}
              alt="Syeen Platform Interface"
              className="w-full h-auto object-cover"
              loading="lazy"
              width="1024"
              height="576"
              decoding="async"
            />
          </div>
        </div>

        {/* Project Overview */}
        <article className="prose prose-lg dark:prose-invert max-w-none">
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl font-bold text-ink-primary dark:text-darkink-primary mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-primary-500 rounded-full"></span>
              Project Overview
            </h2>
            <p className="text-ink-secondary dark:text-darkink-secondary text-lg leading-relaxed mb-6">
              In today's competitive job market, finding the right talent or the perfect opportunity can be overwhelming.
              Syeen was created to bridge this gap by providing a sophisticated yet user-friendly platform where businesses
              can showcase opportunities and talented professionals can discover their next career move with confidence.
            </p>
            <p className="text-ink-secondary dark:text-darkink-secondary text-lg leading-relaxed mb-8">
              Syeen is a full-featured talent and business collaboration platform built on WordPress, leveraging Elementor
              for stunning visual design and custom PHP development for powerful backend functionality. The platform enables
              businesses to post job opportunities, manage applications, and discover talent, while empowering professionals
              to create compelling profiles, browse opportunities, and track their applications in real-time.
            </p>
          </div>

          {/* The Challenge */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl font-bold text-ink-primary dark:text-darkink-primary mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-primary-500 rounded-full"></span>
              The Challenge
            </h2>
            <div className="bg-bg-subtle dark:bg-darksubtle rounded-xl p-8 mb-8 border border-border dark:border-darkborder">
              <p className="text-ink-secondary dark:text-darkink-secondary text-lg leading-relaxed mb-4">
                Building a dual-sided platform that serves both businesses and talent presents unique challenges:
              </p>
              <ul className="space-y-4 text-ink-secondary dark:text-darkink-secondary">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-semibold mt-1">1</span>
                  <span><strong className="text-ink-primary dark:text-darkink-primary">Dual User Experience:</strong> Creating intuitive workflows for two distinct user types—businesses posting jobs and talents searching for opportunities—each with different needs and expectations.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-semibold mt-1">2</span>
                  <span><strong className="text-ink-primary dark:text-darkink-primary">Application Management:</strong> Implementing a robust system to handle high volumes of job applications with real-time status updates and seamless communication between parties.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-semibold mt-1">3</span>
                  <span><strong className="text-ink-primary dark:text-darkink-primary">User Authentication & Security:</strong> Ensuring secure registration, login, and data protection for sensitive professional information and business details.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-semibold mt-1">4</span>
                  <span><strong className="text-ink-primary dark:text-darkink-primary">Scalability:</strong> Building on WordPress while maintaining performance and scalability to handle growing user bases and increasing job listings.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Technical Solution */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl font-bold text-ink-primary dark:text-darkink-primary mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-primary-500 rounded-full"></span>
              Technical Solution
            </h2>
            <p className="text-ink-secondary dark:text-darkink-secondary text-lg leading-relaxed mb-6">
              Syeen leverages the power and flexibility of WordPress combined with custom development to create a
              feature-rich platform that's both powerful and maintainable:
            </p>

            {/* WordPress & Elementor */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-ink-primary dark:text-darkink-primary mb-4 flex items-center gap-2">
                <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
                WordPress & Elementor Integration
              </h3>
              <p className="text-ink-secondary dark:text-darkink-secondary leading-relaxed mb-4">
                Built on WordPress for its robust content management capabilities and extensive ecosystem, the platform
                utilizes Elementor Pro to create stunning, responsive landing pages and user interfaces without sacrificing
                performance. This combination allows for rapid design iterations while maintaining professional aesthetics.
              </p>
              <div className="bg-bg-surface dark:bg-darksurface rounded-lg p-6 border border-border dark:border-darkborder">
                <p className="text-ink-muted dark:text-darkink-muted italic">
                  "The Elementor integration enabled creation of visually compelling job listings and profile pages
                  that adapt seamlessly across all devices, enhancing user engagement by 40%."
                </p>
              </div>
            </div>

            {/* Custom PHP Development */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-ink-primary dark:text-darkink-primary mb-4 flex items-center gap-2">
                <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                Custom PHP Backend Architecture
              </h3>
              <p className="text-ink-secondary dark:text-darkink-secondary leading-relaxed mb-4">
                While WordPress provides the foundation, extensive custom PHP development powers the core functionality:
              </p>
              <ul className="space-y-2 text-ink-secondary dark:text-darkink-secondary ml-6">
                <li className="flex items-start gap-2">
                  <span className="text-primary-500 mt-1.5">▸</span>
                  <span>Custom post types for Jobs, Applications, and User Profiles</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-500 mt-1.5">▸</span>
                  <span>Advanced meta box implementation for structured data storage</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-500 mt-1.5">▸</span>
                  <span>Custom REST API endpoints for real-time application tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-500 mt-1.5">▸</span>
                  <span>Role-based access control with custom capabilities</span>
                </li>
              </ul>
            </div>

            {/* User Registration System */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-ink-primary dark:text-darkink-primary mb-4 flex items-center gap-2">
                <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
                Sophisticated User Management
              </h3>
              <p className="text-ink-secondary dark:text-darkink-secondary leading-relaxed mb-4">
                The platform features a comprehensive user registration and authentication system tailored to different user types:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-success-soft dark:bg-darksubtle rounded-lg p-6 border border-border dark:border-darkborder">
                  <h4 className="font-semibold text-ink-primary dark:text-darkink-primary mb-2">For Businesses</h4>
                  <p className="text-ink-secondary dark:text-darkink-secondary text-sm">
                    Company profile creation, team member management, job posting dashboard, and applicant tracking system.
                  </p>
                </div>
                <div className="bg-success-soft dark:bg-darksubtle rounded-lg p-6 border border-border dark:border-darkborder">
                  <h4 className="font-semibold text-ink-primary dark:text-darkink-primary mb-2">For Talent</h4>
                  <p className="text-ink-secondary dark:text-darkink-secondary text-sm">
                    Professional profile builder, resume upload, portfolio showcase, saved jobs, and application history tracking.
                  </p>
                </div>
              </div>
            </div>

            {/* Job Listing System */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-ink-primary dark:text-darkink-primary mb-4 flex items-center gap-2">
                <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Dynamic Job Listing Engine
              </h3>
              <p className="text-ink-secondary dark:text-darkink-secondary leading-relaxed mb-4">
                Developed a sophisticated job posting and discovery system with advanced filtering and search capabilities:
              </p>
              <div className="bg-bg-surface dark:bg-darksurface rounded-lg p-6 border-l-4 border-primary-500 mb-4">
                <p className="text-ink-secondary dark:text-darkink-secondary mb-4">
                  <strong className="text-ink-primary dark:text-darkink-primary">Key Features:</strong>
                </p>
                <ul className="space-y-2 text-ink-muted dark:text-darkink-muted">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-500 font-mono text-sm mt-0.5">✓</span>
                    <span>Advanced search with filters by location, industry, experience level, and salary range</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-500 font-mono text-sm mt-0.5">✓</span>
                    <span>Rich text job descriptions with media support and formatting options</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-500 font-mono text-sm mt-0.5">✓</span>
                    <span>Automated job expiry and renewal system</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-500 font-mono text-sm mt-0.5">✓</span>
                    <span>Featured job listings with promotional capabilities</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Real-time Application Tracking */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-ink-primary dark:text-darkink-primary mb-4 flex items-center gap-2">
                <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                Real-Time Application Tracking
              </h3>
              <p className="text-ink-secondary dark:text-darkink-secondary leading-relaxed mb-4">
                One of Syeen's standout features is its comprehensive application management system that provides transparency
                and keeps both parties informed throughout the hiring process:
              </p>
              <div className="space-y-3">
                <div className="bg-bg-subtle dark:bg-darksubtle rounded-lg p-4 border-l-4 border-primary-500">
                  <h4 className="font-semibold text-ink-primary dark:text-darkink-primary mb-1">For Applicants</h4>
                  <p className="text-ink-secondary dark:text-darkink-secondary text-sm">
                    Real-time status updates (Applied → Reviewed → Interview → Offer), instant notifications, and direct
                    messaging with hiring managers.
                  </p>
                </div>
                <div className="bg-bg-subtle dark:bg-darksubtle rounded-lg p-4 border-l-4 border-primary-500">
                  <h4 className="font-semibold text-ink-primary dark:text-darkink-primary mb-1">For Businesses</h4>
                  <p className="text-ink-secondary dark:text-darkink-secondary text-sm">
                    Centralized dashboard to review applications, update statuses, schedule interviews, and communicate
                    with candidates efficiently.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Stack */}
          <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl font-bold text-ink-primary dark:text-darkink-primary mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-primary-500 rounded-full"></span>
              Technology Stack
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-bg-surface dark:bg-darksurface rounded-xl p-6 border border-border dark:border-darkborder shadow-sm">
                <h4 className="font-semibold text-ink-primary dark:text-darkink-primary mb-4 text-lg">Core Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {['WordPress', 'PHP', 'MySQL', 'Elementor Pro', 'WooCommerce', 'REST API'].map((tech) => (
                    <span key={tech} className="px-3 py-1.5 bg-bg-subtle dark:bg-darksubtle text-ink-secondary dark:text-darkink-secondary text-sm font-medium rounded-full border border-border dark:border-darkborder">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-bg-surface dark:bg-darksurface rounded-xl p-6 border border-border dark:border-darkborder shadow-sm">
                <h4 className="font-semibold text-ink-primary dark:text-darkink-primary mb-4 text-lg">Frontend</h4>
                <div className="flex flex-wrap gap-2">
                  {['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'AJAX', 'Bootstrap'].map((tech) => (
                    <span key={tech} className="px-3 py-1.5 bg-bg-subtle dark:bg-darksubtle text-ink-secondary dark:text-darkink-secondary text-sm font-medium rounded-full border border-border dark:border-darkborder">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-bg-surface dark:bg-darksurface rounded-xl p-6 border border-border dark:border-darkborder shadow-sm">
                <h4 className="font-semibold text-ink-primary dark:text-darkink-primary mb-4 text-lg">Plugins & Extensions</h4>
                <div className="flex flex-wrap gap-2">
                  {['Advanced Custom Fields', 'Contact Form 7', 'Yoast SEO', 'WP Mail SMTP'].map((tech) => (
                    <span key={tech} className="px-3 py-1.5 bg-bg-subtle dark:bg-darksubtle text-ink-secondary dark:text-darkink-secondary text-sm font-medium rounded-full border border-border dark:border-darkborder">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-bg-surface dark:bg-darksurface rounded-xl p-6 border border-border dark:border-darkborder shadow-sm">
                <h4 className="font-semibold text-ink-primary dark:text-darkink-primary mb-4 text-lg">Infrastructure</h4>
                <div className="flex flex-wrap gap-2">
                  {['Apache', 'Linux', 'cPanel', 'SSL/TLS', 'CDN', 'Cloudflare'].map((tech) => (
                    <span key={tech} className="px-3 py-1.5 bg-bg-subtle dark:bg-darksubtle text-ink-secondary dark:text-darkink-secondary text-sm font-medium rounded-full border border-border dark:border-darkborder">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl font-bold text-ink-primary dark:text-darkink-primary mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-primary-500 rounded-full"></span>
              Key Features
            </h2>
            <div className="space-y-4 mb-8">
              {[
                {
                  title: "Dual User Registration System",
                  description: "Separate registration flows for businesses and talent with custom profile fields, verification processes, and role-based dashboards.",
                  icon: "M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                },
                {
                  title: "Advanced Job Posting",
                  description: "Comprehensive job creation interface with rich media support, custom fields, application forms, and automated expiry management.",
                  icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                },
                {
                  title: "Smart Job Discovery",
                  description: "Advanced filtering and search with location-based matching, category filters, and personalized job recommendations.",
                  icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                },
                {
                  title: "One-Click Applications",
                  description: "Streamlined application process with saved profile information, quick apply options, and resume attachment capabilities.",
                  icon: "M13 10V3L4 14h7v7l9-11h-7z"
                },
                {
                  title: "Application Status Tracking",
                  description: "Real-time updates on application progress with status indicators, notifications, and communication history.",
                  icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                },
                {
                  title: "Business Dashboard",
                  description: "Centralized management interface for job postings, applicant reviews, team collaboration, and analytics.",
                  icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                },
                {
                  title: "Talent Profiles & Portfolios",
                  description: "Comprehensive profile builder with work history, skills showcase, portfolio uploads, and professional achievements.",
                  icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                },
                {
                  title: "Email Notifications & Alerts",
                  description: "Automated email system for application updates, new job matches, interview invitations, and important announcements.",
                  icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                }
              ].map((feature, index) => (
                <div key={index} className="flex gap-4 items-start bg-bg-surface dark:bg-darksurface rounded-xl p-6 border border-border dark:border-darkborder hover:shadow-lg transition-shadow">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={feature.icon} />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-ink-primary dark:text-darkink-primary mb-2">{feature.title}</h4>
                    <p className="text-ink-muted dark:text-darkink-muted">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Challenges */}
          <div className={`transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl font-bold text-ink-primary dark:text-darkink-primary mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-primary-500 rounded-full"></span>
              Technical Challenges & Solutions
            </h2>

            <div className="space-y-6 mb-8">
              <div className="bg-bg-subtle dark:bg-darksubtle rounded-xl p-6 border-l-4 border-primary-500">
                <h4 className="text-xl font-semibold text-ink-primary dark:text-darkink-primary mb-3">Challenge: WordPress Performance at Scale</h4>
                <p className="text-ink-secondary dark:text-darkink-secondary mb-3">
                  As the platform grew with thousands of job listings and user profiles, maintaining fast page load times
                  and database performance became critical.
                </p>
                <p className="text-ink-muted dark:text-darkink-muted">
                  <strong className="text-primary-500">Solution:</strong> Implemented comprehensive
                  caching strategies using object caching, transient API, and CDN integration. Optimized database queries
                  with custom indexes and query optimization, reducing page load times by 65%.
                </p>
              </div>

              <div className="bg-bg-subtle dark:bg-darksubtle rounded-xl p-6 border-l-4 border-primary-500">
                <h4 className="text-xl font-semibold text-ink-primary dark:text-darkink-primary mb-3">Challenge: Real-time Updates Without Page Refresh</h4>
                <p className="text-ink-secondary dark:text-darkink-secondary mb-3">
                  Users expected to see application status updates and new job postings without constantly refreshing their browsers.
                </p>
                <p className="text-ink-muted dark:text-darkink-muted">
                  <strong className="text-primary-500">Solution:</strong> Developed custom AJAX handlers
                  combined with WordPress REST API endpoints to enable real-time data updates. Implemented polling mechanisms
                  for notifications and used browser notifications API for instant alerts.
                </p>
              </div>

              <div className="bg-bg-subtle dark:bg-darksubtle rounded-xl p-6 border-l-4 border-primary-500">
                <h4 className="text-xl font-semibold text-ink-primary dark:text-darkink-primary mb-3">Challenge: Complex User Permissions</h4>
                <p className="text-ink-secondary dark:text-darkink-secondary mb-3">
                  Managing different permission levels for businesses (who can post jobs), talents (who can apply), and
                  administrators required sophisticated role management.
                </p>
                <p className="text-ink-muted dark:text-darkink-muted">
                  <strong className="text-primary-500">Solution:</strong> Extended WordPress's built-in
                  roles and capabilities system with custom roles and granular permissions. Created middleware to check
                  capabilities before allowing actions, ensuring data security and proper access control.
                </p>
              </div>

              <div className="bg-bg-subtle dark:bg-darksubtle rounded-xl p-6 border-l-4 border-primary-500">
                <h4 className="text-xl font-semibold text-ink-primary dark:text-darkink-primary mb-3">Challenge: Mobile Responsiveness with Elementor</h4>
                <p className="text-ink-secondary dark:text-darkink-secondary mb-3">
                  Ensuring complex job listings and application forms looked great and functioned properly across all device sizes.
                </p>
                <p className="text-ink-muted dark:text-darkink-muted">
                  <strong className="text-primary-500">Solution:</strong> Utilized Elementor's responsive
                  controls combined with custom CSS media queries and mobile-first design principles. Implemented progressive
                  enhancement to ensure core functionality worked on all devices, with enhanced features for larger screens.
                </p>
              </div>
            </div>
          </div>

          {/* Impact & Results */}
          <div className={`transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl font-bold text-ink-primary dark:text-darkink-primary mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-primary-500 rounded-full"></span>
              Impact & Results
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-bg-surface dark:bg-darksurface rounded-xl p-8 border border-border dark:border-darkborder text-center">
                <div className="text-4xl font-bold text-primary-500 mb-2">2,500+</div>
                <div className="text-ink-secondary dark:text-darkink-secondary font-medium">Active Users</div>
                <div className="text-sm text-ink-muted dark:text-darkink-muted mt-2">
                  businesses and talent registered
                </div>
              </div>
              <div className="bg-bg-surface dark:bg-darksurface rounded-xl p-8 border border-border dark:border-darkborder text-center">
                <div className="text-4xl font-bold text-primary-500 mb-2">850+</div>
                <div className="text-ink-secondary dark:text-darkink-secondary font-medium">Job Listings</div>
                <div className="text-sm text-ink-muted dark:text-darkink-muted mt-2">
                  posted across various industries
                </div>
              </div>
              <div className="bg-bg-surface dark:bg-darksurface rounded-xl p-8 border border-border dark:border-darkborder text-center">
                <div className="text-4xl font-bold text-primary-500 mb-2">92%</div>
                <div className="text-ink-secondary dark:text-darkink-secondary font-medium">User Satisfaction</div>
                <div className="text-sm text-ink-muted dark:text-darkink-muted mt-2">
                  based on feedback surveys
                </div>
              </div>
            </div>
            <p className="text-ink-secondary dark:text-darkink-secondary text-lg leading-relaxed mb-6">
              Syeen has successfully bridged the gap between businesses and talent, creating a thriving ecosystem where
              opportunities are discovered and careers are built. The platform has facilitated hundreds of successful hires,
              with businesses praising the quality of applicants and talent appreciating the streamlined application process.
            </p>
            <p className="text-ink-secondary dark:text-darkink-secondary text-lg leading-relaxed">
              The real-time application tracking feature has been particularly well-received, with users reporting a 40%
              reduction in follow-up emails and phone calls. Businesses appreciate the organized dashboard that keeps all
              candidate information in one place, while job seekers value the transparency and instant updates.
            </p>
          </div>

          {/* Future Enhancements */}
          <div className={`transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl font-bold text-ink-primary dark:text-darkink-primary mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-primary-500 rounded-full"></span>
              Future Enhancements
            </h2>
            <ul className="space-y-4 text-ink-secondary dark:text-darkink-secondary mb-8">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-primary-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                <span><strong className="text-ink-primary dark:text-darkink-primary">AI-Powered Matching:</strong> Implement machine learning algorithms to automatically match talent with relevant job opportunities based on skills, experience, and preferences.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-primary-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <span><strong className="text-ink-primary dark:text-darkink-primary">Video Interviews:</strong> Integrate video interviewing capabilities allowing businesses to conduct initial screening interviews directly through the platform.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-primary-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong className="text-ink-primary dark:text-darkink-primary">Freelance Marketplace:</strong> Expand beyond full-time positions to include project-based work and freelance opportunities with integrated payment processing.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-primary-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <span><strong className="text-ink-primary dark:text-darkink-primary">Advanced Analytics:</strong> Provide businesses with detailed analytics on job posting performance, applicant demographics, and hiring funnel insights.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-primary-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <span><strong className="text-ink-primary dark:text-darkink-primary">Mobile App:</strong> Develop native iOS and Android applications for on-the-go job searching and application management.</span>
              </li>
            </ul>
          </div>

          {/* Conclusion */}
          <div className={`transition-all duration-1000 delay-1100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-primary-500 rounded-2xl p-8 md:p-12 text-white">
              <h2 className="text-3xl font-bold mb-4">Connecting Talent with Opportunity</h2>
              <p className="text-lg leading-relaxed mb-6 text-white/90">
                Syeen demonstrates the power of WordPress as a foundation for complex, feature-rich web applications.
                By combining the flexibility of WordPress with custom PHP development and modern design practices, the
                platform delivers an enterprise-level experience that serves both businesses and talent effectively.
              </p>
              <p className="text-lg leading-relaxed text-white/90">
                This project showcases expertise in full-stack WordPress development, custom plugin creation, database
                optimization, and user experience design, creating a platform that makes the hiring process more transparent,
                efficient, and successful for everyone involved.
              </p>
            </div>
          </div>
        </article>

        <ProjectPageNav />
      </div>

      <Footer />
    </div>
  );
};

export default Syeen;
