import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SEOHead from '../../components/SEOHead';
import ProjectPageNav from '../../components/ProjectPageNav';
import maritimeLinkCover from '../../assets/maritimelink.jpeg';

const MaritimeLink = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const frame = requestAnimationFrame(() => setIsVisible(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  const featureList = [
    {
      title: 'Four-Persona Platform',
      description: 'Dedicated dashboards and onboarding for professionals (seafarers), recruiters, training providers, and platform admins — each with role-specific layouts and route protection.',
      icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
    },
    {
      title: 'Maritime CV & Resume Builder',
      description: 'Structured maritime resumes with sea service logs, licenses, STCW certificates, medical/travel documents, biometrics, referees, and PDF export via html2canvas + jsPDF.',
      icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
    },
    {
      title: 'Document Wallet',
      description: 'Upload, categorize, and track expiring maritime credentials — licenses, STCW, medical certificates, seaman\'s book, travel docs — with shareable document packs via secure tokens.',
      icon: 'M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z'
    },
    {
      title: 'Jobs Marketplace',
      description: 'Professionals browse, save, and apply to maritime roles; recruiters create jobs, review applicants, and invite AI-matched candidates; admins oversee and flag listings.',
      icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
    },
    {
      title: 'Training & Course Bookings',
      description: 'Training providers publish courses and manage sessions; professionals book via Stripe checkout; demand planning surfaces expiring certificates for course scheduling.',
      icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
    },
    {
      title: 'KYC & Compliance Gating',
      description: 'Multi-stage account review and identity verification (ID upload, selfie, document metadata) with modal guards blocking marketplace actions until KYC is approved.',
      icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
    },
    {
      title: 'Real-Time Messaging',
      description: 'Threaded conversations between professionals, recruiters, trainers, and admins via REST APIs and Socket.IO with cursor pagination and read receipts.',
      icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
    },
    {
      title: 'Stripe Payments & Payouts',
      description: 'Membership subscriptions for professionals and course booking checkout; Stripe Connect onboarding for training provider payouts with success/reauth return flows.',
      icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z'
    },
    {
      title: 'Super-Admin Operations',
      description: 'Platform oversight for accounts, companies, KYC submissions, marketplace listings, support cases, transaction history, revenue dashboards, and system alerts.',
      icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z'
    }
  ];

  const challengeList = [
    {
      title: 'Fragmented Credential Management',
      description: 'Seafarers maintain scattered licenses and certificates across emails, folders, and physical copies with no unified expiry tracking.'
    },
    {
      title: 'Disconnected Hiring Pipeline',
      description: 'Recruiters lack a structured candidate search layer tied to verified maritime credentials and complete sea service histories.'
    },
    {
      title: 'Training Demand Blind Spots',
      description: 'Training providers cannot easily see which certificates are expiring across the workforce to plan course offerings proactively.'
    },
    {
      title: 'Trust & Compliance Complexity',
      description: 'A maritime marketplace requires multi-stage account review, KYC identity verification, and role-based access across four distinct user personas.'
    }
  ];

  const architectureHighlights = [
    {
      title: 'Layered SPA Architecture',
      description: 'React Router nested layouts with service-oriented API access — pages import service singletons that use a centralized custom fetch HttpClient with JWT injection.'
    },
    {
      title: 'Layout-Based Route Protection',
      description: 'Each persona (professional, recruiter, training provider, admin) has dedicated layouts enforcing session checks, account review gates, and KYC providers.'
    },
    {
      title: 'Two-Stage Access Model',
      description: 'Stage 1 limits navigation for PENDING accounts; Stage 2 blocks marketplace actions until KYC is approved via useKycGuard() modals across dashboards.'
    },
    {
      title: 'Decoupled Real-Time Layer',
      description: 'Socket.IO handles chat messages and professional alerts with defensive multi-event-name subscriptions, separate from REST business logic on Render.'
    }
  ];

  const technicalChallenges = [
    {
      title: 'Multi-Persona Routing at Scale',
      problem: 'A single App.jsx maps 340+ lines of routes across four user types with overlapping /admin path prefixes for recruiters and super-admins.',
      solution: 'Separated super-admin paths via isSuperAdminAppPath() guards, layout-based protection per persona, and distinct API prefixes (/api/professional, /api/recruiter, /api/trainer, /api/admin).'
    },
    {
      title: 'KYC State Across Layouts',
      problem: 'KYC wizard progress, submission status, and profile sync must stay consistent across nested dashboard routes and sidebar navigation.',
      solution: 'Built KycContext provider with useKycWizard hook, custom events (kycProfileUpdated), and mergeAuthUserProfile() to sync localStorage userProfile after every KYC action.'
    },
    {
      title: 'JWT Session Lifecycle',
      problem: 'Client-side JWT expiry, cross-tab logout, and distinguishing expired tokens from role-mismatch 401 responses without unnecessary global logouts.',
      solution: 'sessionManager schedules logout from JWT exp claim, listens for storage events on authToken, and httpClient only redirects on 401 when the token is missing or expired.'
    },
    {
      title: 'Document Category API Mismatch',
      problem: 'Backend rejects STCW_CERTIFICATES as a standalone enum while the UI presents STCW as a distinct wallet folder.',
      solution: 'Mapped STCW uploads to ACADEMIC_QUALIFICATIONS in documentWalletCategories.js while preserving user-facing STCW labels in the wallet interface.'
    }
  ];

  const futureEnhancements = [
    { title: 'React Query / SWR', description: 'Introduce server-state caching with stale-while-revalidate for dashboard metrics, job listings, and notification feeds.' },
    { title: 'Route-Level Code Splitting', description: 'Lazy-load pages with React.lazy() — currently App.jsx eagerly imports all persona routes increasing initial bundle size.' },
    { title: 'Centralized ProtectedRoute', description: 'Extract duplicated layout guard logic into a reusable route guard component to reduce per-layout session check duplication.' },
    { title: 'Phone OTP Resend', description: 'Wire recruiter phone verification resend to the backend API — currently marked TODO in RecruiterPhoneVerification.jsx.' },
    { title: 'Expanded Test Coverage', description: 'Grow beyond KYC/account status unit tests to E2E flows for signup, job apply, course booking, and KYC submission.' }
  ];

  return (
    <div className="min-h-screen bg-bg-main dark:bg-darkbg">
      <SEOHead
        title="MaritimeLink - Maritime Workforce Platform | Mohammad Haroon Portfolio"
        description="MaritimeLink: A production React SPA connecting seafarers, recruiters, training providers, and admins through maritime CVs, document wallets, job marketplace, course bookings, KYC compliance, and real-time messaging."
        keywords="MaritimeLink, maritime workforce, seafarer platform, React, Vite, Socket.IO, Stripe, KYC, maritime recruitment, training provider, Mohammad Haroon, Full Stack Developer"
        canonicalUrl="https://devowl.me/project/maritime-link"
        ogType="article"
        publishedDate="2025-06-01"
        modifiedDate="2026-06-16"
        breadcrumbs={[
          { name: 'Home', url: 'https://devowl.me/' },
          { name: 'Projects', url: 'https://devowl.me/projects' },
          { name: 'MaritimeLink', url: 'https://devowl.me/project/maritime-link' }
        ]}
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: 'MaritimeLink',
          author: {
            '@type': 'Person',
            name: 'Mohammad Haroon',
            alternateName: 'Mohammad Haroon',
            url: 'https://devowl.me/'
          },
          description: 'Frontend SPA for the MaritimeLink maritime workforce platform — credential management, job marketplace, training bookings, KYC compliance, and real-time messaging across four user personas.',
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'Web',
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD'
          },
          keywords: 'Maritime, React, Vite, Socket.IO, Stripe, KYC, Full Stack Development',
          datePublished: '2025-06-01',
          programmingLanguage: ['JavaScript', 'React', 'JSX']
        }}
      />
      <Navbar />

      <div className="relative bg-bg-main dark:bg-darkbg py-20 overflow-hidden">
        <div className="absolute inset-0 bg-bg-subtle dark:bg-darksubtle"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJWMzRoLTJ6bTAtNGgydi0yaC0ydjJ6bS00IDBoMnYtMmgtMnYyem0wLTRoMnYtMmgtMnYyem0wLTRoMnYtMmgtMnYyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-primary-500 text-white text-sm font-semibold rounded-full">
                Full-Stack Development
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-ink-primary dark:text-darkink-primary mb-6">
              MaritimeLink
            </h1>
            <p className="text-xl text-ink-secondary dark:text-darkink-secondary max-w-3xl mx-auto leading-relaxed">
              Your Gateway to Maritime Excellence — a production React SPA unifying seafarer credential management,
              recruitment, training bookings, and platform administration for the global maritime workforce.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className={`mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={maritimeLinkCover}
              alt="MaritimeLink Platform Interface"
              className="w-full h-auto object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        <article className="prose prose-lg dark:prose-invert max-w-none">
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl font-bold text-ink-primary dark:text-darkink-primary mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-primary-500 rounded-full"></span>
              Project Overview
            </h2>
            <p className="text-ink-secondary dark:text-darkink-secondary text-lg leading-relaxed mb-6">
              MaritimeLink Frontend is a single-page web application serving as the user interface for the
              MaritimeLink maritime workforce platform, owned by MaritimeLink Ltd. It connects four distinct user
              personas — professionals (seafarers, officers, crew), recruiters, training providers, and platform
              administrators — through dedicated dashboards, onboarding flows, and role-specific feature sets.
            </p>
            <p className="text-ink-secondary dark:text-darkink-secondary text-lg leading-relaxed mb-8">
              The platform solves fragmented maritime hiring and certification by unifying structured CV/resume
              management, a document wallet with expiry tracking, a jobs and training marketplace with Stripe
              payments, multi-stage KYC identity verification, and real-time messaging via Socket.IO. All business
              logic and persistence live in a separate backend API hosted on Render — this repository is frontend-only,
              deployed on Vercel as a static SPA.
            </p>
          </div>

          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl font-bold text-ink-primary dark:text-darkink-primary mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-primary-500 rounded-full"></span>
              The Challenge
            </h2>
            <div className="bg-bg-subtle dark:bg-darksubtle rounded-xl p-8 mb-8 border border-border dark:border-darkborder">
              <p className="text-ink-secondary dark:text-darkink-secondary text-lg leading-relaxed mb-4">
                Maritime workforce platforms must bridge operational, compliance, and commercial needs:
              </p>
              <ul className="space-y-4 text-ink-secondary dark:text-darkink-secondary">
                {challengeList.map((item, index) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-semibold mt-1">
                      {index + 1}
                    </span>
                    <span>
                      <strong className="text-ink-primary dark:text-darkink-primary">{item.title}:</strong>{' '}
                      {item.description}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl font-bold text-ink-primary dark:text-darkink-primary mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-primary-500 rounded-full"></span>
              Architecture & System Design
            </h2>
            <p className="text-ink-secondary dark:text-darkink-secondary text-lg leading-relaxed mb-6">
              The frontend follows a layered SPA pattern with service-oriented API access — pages call service
              singletons that use a custom HttpClient for JWT injection, 401 handling, and FormData support:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {architectureHighlights.map((item) => (
                <div key={item.title} className="bg-success-soft dark:bg-darksubtle rounded-lg p-6 border border-border dark:border-darkborder">
                  <h4 className="font-semibold text-ink-primary dark:text-darkink-primary mb-2">{item.title}</h4>
                  <p className="text-ink-secondary dark:text-darkink-secondary text-sm">{item.description}</p>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-semibold text-ink-primary dark:text-darkink-primary mb-4">
              User Personas & Entry Routes
            </h3>
            <div className="bg-bg-surface dark:bg-darksurface rounded-lg p-6 border border-border dark:border-darkborder mb-8 overflow-x-auto">
              <table className="w-full text-sm text-ink-secondary dark:text-darkink-secondary">
                <thead>
                  <tr className="text-left border-b border-border dark:border-darkborder">
                    <th className="pb-3 pr-4 font-semibold text-ink-primary dark:text-darkink-primary">Persona</th>
                    <th className="pb-3 pr-4 font-semibold text-ink-primary dark:text-darkink-primary">Entry Route</th>
                    <th className="pb-3 font-semibold text-ink-primary dark:text-darkink-primary">Primary Purpose</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border dark:divide-darkborder">
                  <tr>
                    <td className="py-3 pr-4">Professional</td>
                    <td className="py-3 pr-4 font-mono text-xs">/signin</td>
                    <td className="py-3">CV, document wallet, job applications, course bookings, messaging</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Recruiter</td>
                    <td className="py-3 pr-4 font-mono text-xs">/recruiter/login</td>
                    <td className="py-3">Candidate search, job posting, applicant review, messaging</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Training Provider</td>
                    <td className="py-3 pr-4 font-mono text-xs">/training-provider/login</td>
                    <td className="py-3">Course publishing, session management, Stripe payouts, demand planning</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Platform Admin</td>
                    <td className="py-3 pr-4 font-mono text-xs">/admin/login</td>
                    <td className="py-3">Accounts, KYC review, marketplace oversight, revenue, support cases</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl font-bold text-ink-primary dark:text-darkink-primary mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-primary-500 rounded-full"></span>
              Technology Stack
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-bg-surface dark:bg-darksurface rounded-xl p-6 border border-border dark:border-darkborder shadow-sm">
                <h4 className="font-semibold text-ink-primary dark:text-darkink-primary mb-4 text-lg">Frontend Core</h4>
                <div className="flex flex-wrap gap-2">
                  {['React 18', 'Vite 7', 'Tailwind CSS', 'React Router 6', 'JSX / ES Modules', 'Vitest'].map((tech) => (
                    <span key={tech} className="px-3 py-1.5 bg-bg-subtle dark:bg-darksubtle text-ink-secondary dark:text-darkink-secondary text-sm font-medium rounded-full border border-border dark:border-darkborder">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-bg-surface dark:bg-darksurface rounded-xl p-6 border border-border dark:border-darkborder shadow-sm">
                <h4 className="font-semibold text-ink-primary dark:text-darkink-primary mb-4 text-lg">Integrations</h4>
                <div className="flex flex-wrap gap-2">
                  {['Socket.IO Client', 'Stripe.js', 'react-hot-toast', 'recharts', 'html2canvas', 'jsPDF', 'jszip'].map((tech) => (
                    <span key={tech} className="px-3 py-1.5 bg-bg-subtle dark:bg-darksubtle text-ink-secondary dark:text-darkink-secondary text-sm font-medium rounded-full border border-border dark:border-darkborder">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-bg-surface dark:bg-darksurface rounded-xl p-6 border border-border dark:border-darkborder shadow-sm">
                <h4 className="font-semibold text-ink-primary dark:text-darkink-primary mb-4 text-lg">State & Auth</h4>
                <div className="flex flex-wrap gap-2">
                  {['localStorage Session', 'KycContext', 'JWT Bearer', 'Custom HttpClient', 'Layout Guards', 'Custom Events'].map((tech) => (
                    <span key={tech} className="px-3 py-1.5 bg-bg-subtle dark:bg-darksubtle text-ink-secondary dark:text-darkink-secondary text-sm font-medium rounded-full border border-border dark:border-darkborder">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-bg-surface dark:bg-darksurface rounded-xl p-6 border border-border dark:border-darkborder shadow-sm">
                <h4 className="font-semibold text-ink-primary dark:text-darkink-primary mb-4 text-lg">Infrastructure</h4>
                <div className="flex flex-wrap gap-2">
                  {['Vercel (SPA)', 'Render API', 'Vite Dev Proxy', 'PostCSS', 'lucide-react', 'react-icons'].map((tech) => (
                    <span key={tech} className="px-3 py-1.5 bg-bg-subtle dark:bg-darksubtle text-ink-secondary dark:text-darkink-secondary text-sm font-medium rounded-full border border-border dark:border-darkborder">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl font-bold text-ink-primary dark:text-darkink-primary mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-primary-500 rounded-full"></span>
              Key Features
            </h2>
            <div className="space-y-4 mb-8">
              {featureList.map((feature) => (
                <div key={feature.title} className="flex gap-4 items-start bg-bg-surface dark:bg-darksurface rounded-xl p-6 border border-border dark:border-darkborder hover:shadow-lg transition-shadow">
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

          <div className={`transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl font-bold text-ink-primary dark:text-darkink-primary mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-primary-500 rounded-full"></span>
              Technical Challenges & Solutions
            </h2>
            <div className="space-y-6 mb-8">
              {technicalChallenges.map((item) => (
                <div key={item.title} className="bg-bg-subtle dark:bg-darksubtle rounded-xl p-6 border-l-4 border-primary-500">
                  <h4 className="text-xl font-semibold text-ink-primary dark:text-darkink-primary mb-3">{item.title}</h4>
                  <p className="text-ink-secondary dark:text-darkink-secondary mb-3">{item.problem}</p>
                  <p className="text-ink-muted dark:text-darkink-muted">
                    <strong className="text-primary-500">Solution:</strong> {item.solution}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl font-bold text-ink-primary dark:text-darkink-primary mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-primary-500 rounded-full"></span>
              Deployment & Infrastructure
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-bg-surface dark:bg-darksurface rounded-xl p-6 border border-border dark:border-darkborder text-center">
                <div className="text-lg font-bold text-primary-500 mb-2">Frontend</div>
                <div className="text-ink-secondary dark:text-darkink-secondary font-medium">Vercel</div>
                <div className="text-sm text-ink-muted dark:text-darkink-muted mt-2">
                  React SPA with vercel.json rewrites and Vite production build to dist/
                </div>
              </div>
              <div className="bg-bg-surface dark:bg-darksurface rounded-xl p-6 border border-border dark:border-darkborder text-center">
                <div className="text-lg font-bold text-primary-500 mb-2">Backend API</div>
                <div className="text-ink-secondary dark:text-darkink-secondary font-medium">Render</div>
                <div className="text-sm text-ink-muted dark:text-darkink-muted mt-2">
                  REST + WebSocket API at maritime-apis.onrender.com with JWT auth
                </div>
              </div>
              <div className="bg-bg-surface dark:bg-darksurface rounded-xl p-6 border border-border dark:border-darkborder text-center">
                <div className="text-lg font-bold text-primary-500 mb-2">Payments</div>
                <div className="text-ink-secondary dark:text-darkink-secondary font-medium">Stripe</div>
                <div className="text-sm text-ink-muted dark:text-darkink-muted mt-2">
                  Course bookings, membership checkout, and Connect payouts for training providers
                </div>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl font-bold text-ink-primary dark:text-darkink-primary mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-primary-500 rounded-full"></span>
              Future Enhancements
            </h2>
            <ul className="space-y-4 text-ink-secondary dark:text-darkink-secondary mb-8">
              {futureEnhancements.map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span>
                    <strong className="text-ink-primary dark:text-darkink-primary">{item.title}:</strong>{' '}
                    {item.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className={`transition-all duration-1000 delay-1100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-primary-500 rounded-2xl p-8 md:p-12 text-white">
              <h2 className="text-3xl font-bold mb-4">Unifying the Maritime Workforce</h2>
              <p className="text-lg leading-relaxed mb-6 text-white/90">
                MaritimeLink brings credential management, recruitment, training, compliance, and real-time
                communication into a single production-ready platform. From officer onboarding and document wallets
                to recruiter candidate search and training provider demand planning, every workflow is designed
                for the operational realities of global maritime hiring.
              </p>
              <p className="text-lg leading-relaxed text-white/90">
                This project demonstrates expertise in large-scale React SPA architecture, multi-persona routing,
                JWT session management, KYC compliance UX, Stripe payment integration, Socket.IO real-time messaging,
                and service-layer API design — built for MaritimeLink Ltd as a frontend-only client to a dedicated backend API.
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

export default MaritimeLink;
