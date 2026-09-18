import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SEOHead from '../../components/SEOHead';
import ProjectPageNav from '../../components/ProjectPageNav';
import MeetingAIImage from '../../assets/meeting-ai.webp';

const MeetingAI = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const frame = requestAnimationFrame(() => setIsVisible(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  const featureList = [
    {
      title: 'Live WebRTC Conferencing',
      description: 'Peer-to-peer audio/video meetings with Socket.io signaling, ICE candidate exchange, mute controls, and host-side mixed audio recording.',
      icon: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z'
    },
    {
      title: 'Recorded Meeting Processing',
      description: 'Upload pre-recorded audio (MP3, WAV, M4A, OGG, WebM) for async transcription, note generation, and task extraction.',
      icon: 'M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z'
    },
    {
      title: 'Whisper Transcription & Translation',
      description: 'OpenAI Whisper (whisper-1) transcribes and translates audio to English, with GPT-4o mini polishing grammar and clarity.',
      icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
    },
    {
      title: 'Intelligent Meeting Notes',
      description: 'Structured markdown summaries covering key discussion points, decisions, action items, and next steps.',
      icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
    },
    {
      title: 'Automated Task Extraction',
      description: 'GPT-4o mini analyzes transcripts and assigns action items to the correct participants automatically.',
      icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4'
    },
    {
      title: 'Contextual AI Chatbot',
      description: 'Ask questions about any meeting — the assistant answers using the full transcript, notes, tasks, and conversation history.',
      icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
    },
    {
      title: 'Google Meet Chrome Extension',
      description: 'Manifest V3 extension injects a record button into Google Meet, captures tab audio via offscreen documents, and uploads for processing.',
      icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9'
    },
    {
      title: 'Organization-Based Collaboration',
      description: 'Multi-tenant teams with domain-based org membership, email invites, Row Level Security, and org-scoped meeting access.',
      icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
    }
  ];

  const challengeList = [
    {
      title: 'Manual Documentation Overhead',
      description: 'Post-meeting transcription and summarization is time-consuming and often skipped entirely.'
    },
    {
      title: 'Task Accountability Gaps',
      description: 'Action items from discussions are frequently lost, misassigned, or never tracked.'
    },
    {
      title: 'Inefficient Knowledge Retrieval',
      description: 'Finding specific information from past meetings requires reviewing hours of recordings or notes.'
    },
    {
      title: 'Information Silos',
      description: 'Teams lack secure, centralized storage and sharing for meeting artifacts across organizations.'
    }
  ];

  const architectureHighlights = [
    {
      title: 'Microservices-Inspired Monorepo',
      description: 'Three independently deployable services — React frontend (Vercel), Node.js backend (Render), and Chrome extension — coupled via REST and WebSocket events.'
    },
    {
      title: 'Real-Time WebRTC Signaling',
      description: 'Socket.io handles peer discovery, SDP offer/answer exchange, and ICE candidates for NAT traversal in live meetings.'
    },
    {
      title: 'Async AI Processing Pipeline',
      description: 'Transcription and summarization run asynchronously; the frontend polls status endpoints so users can navigate away during processing.'
    },
    {
      title: 'Database-Driven Access Control',
      description: 'Supabase Row Level Security enforces multi-tenant data isolation — users only access meetings they created or were invited to.'
    }
  ];

  const technicalChallenges = [
    {
      title: 'WebRTC Peer Connection Management',
      problem: 'Establishing reliable P2P connections across varying network conditions with multiple simultaneous participants.',
      solution: 'Built a room-based Socket.io signaling layer with offer/answer/ICE candidate routing, RNNoise WASM noise suppression, and a Web Audio API mixer for host-side recording.'
    },
    {
      title: 'Chrome Extension MV3 Recording',
      problem: 'Manifest V3 restricts background script capabilities and cannot capture Google Meet tab audio directly from the service worker.',
      solution: 'Orchestrated tab capture via getMediaStreamId in the service worker, with an offscreen document handling RecordRTC recording and base64 blob transfer back for upload.'
    },
    {
      title: 'Multi-Language Transcription',
      problem: 'Meetings may contain mixed languages (e.g., Urdu and English) requiring accurate transcription and readable output.',
      solution: 'Used OpenAI Whisper translations API for automatic English output, followed by GPT-4o mini sentence correction to preserve meaning while improving clarity.'
    },
    {
      title: 'Contextual Chat Without Hallucination',
      problem: 'LLM chatbots can generate plausible but incorrect answers when queried about meeting content.',
      solution: 'Implemented chatWithContext() that grounds every response in the meeting transcript, generated notes, extracted tasks, and prior chat history before calling GPT-4o mini.'
    }
  ];

  const futureEnhancements = [
    { title: 'Persistent Job Queue', description: 'Replace in-memory async processing with Redis + Bull for crash-resilient transcription jobs with retry logic.' },
    { title: 'Real-Time Community Chat', description: 'Upgrade community discussion from polling to Supabase real-time subscriptions for instant message delivery.' },
    { title: 'Full-Text Search', description: 'PostgreSQL tsvector indexing across transcripts so teams can search meeting content from the dashboard.' },
    { title: 'Video Recording & Screen Share', description: 'Extend RecordRTC to capture peer video streams and complete the partially implemented screen share UI.' },
    { title: 'Third-Party Integrations', description: 'Webhooks and API endpoints to push extracted tasks to Asana, Jira, Monday.com, and calendar apps.' }
  ];

  return (
    <div className="min-h-screen bg-bg-main dark:bg-darkbg">
      <SEOHead
        title="Meeting AI - Full-Stack Meeting Automation Platform | Mohammad Haroon Portfolio"
        description="Meeting AI: A production-grade platform for live WebRTC conferencing, Whisper transcription, GPT-powered meeting notes, automated task extraction, contextual AI chat, and Google Meet recording via Chrome extension."
        keywords="Meeting AI, WebRTC, OpenAI Whisper, GPT-4o, meeting transcription, live conferencing, Chrome extension, Google Meet, Supabase, Socket.io, Mohammad Haroon, Full Stack Developer, React, Node.js"
        canonicalUrl="https://devowl.me/project/meet-ai"
        ogType="article"
        publishedDate="2025-01-15"
        modifiedDate="2026-06-11"
        breadcrumbs={[
          { name: 'Home', url: 'https://devowl.me/' },
          { name: 'Projects', url: 'https://devowl.me/projects' },
          { name: 'Meeting AI', url: 'https://devowl.me/project/meet-ai' }
        ]}
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: 'Meeting AI',
          author: {
            '@type': 'Person',
            name: 'Mohammad Haroon',
            alternateName: 'Mohammad Haroon',
            url: 'https://devowl.me/'
          },
          description: 'Full-stack platform automating meeting workflows with live WebRTC conferencing, AI transcription, intelligent notes, task extraction, and contextual chat.',
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'Web',
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD'
          },
          keywords: 'WebRTC, OpenAI, Whisper, GPT-4o, Full Stack Development, Real-time Conferencing',
          datePublished: '2025-01-15',
          programmingLanguage: ['JavaScript', 'React', 'Node.js', 'TypeScript']
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
                Full-Stack Development
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-ink-primary dark:text-darkink-primary mb-6">
              Meeting AI
            </h1>
            <p className="text-xl text-ink-secondary dark:text-darkink-secondary max-w-3xl mx-auto leading-relaxed">
              A production-grade web application that automates the complete meeting workflow — live conferencing,
              recording, AI transcription, intelligent notes, task extraction, and contextual search.
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
              src={MeetingAIImage}
              alt="Meeting AI Platform Interface"
              className="w-full h-auto object-cover"
              loading="lazy"
              width="1024"
              height="576"
              decoding="async"
            />
          </div>
        </div>

        <article className="prose prose-lg dark:prose-invert max-w-none">
          {/* Project Overview */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl font-bold text-ink-primary dark:text-darkink-primary mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-primary-500 rounded-full"></span>
              Project Overview
            </h2>
            <p className="text-ink-secondary dark:text-darkink-secondary text-lg leading-relaxed mb-6">
              Meeting AI is a full-stack, production-grade web application that automates the end-to-end meeting
              workflow for remote and hybrid teams. It combines live WebRTC peer-to-peer conferencing, high-fidelity
              audio recording, OpenAI Whisper transcription with automatic English translation, GPT-4o mini-powered
              meeting notes, automated task assignment, and a contextual AI chatbot — all secured behind
              organization-based access control.
            </p>
            <p className="text-ink-secondary dark:text-darkink-secondary text-lg leading-relaxed mb-8">
              The platform supports three primary workflows: uploading pre-recorded audio for async processing,
              conducting live collaborative meetings with automatic post-meeting processing, and recording Google
              Meet calls directly via a Chrome extension. Teams build a searchable repository of meeting insights
              without manual note-taking.
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
                Traditional meeting workflows create persistent friction for modern teams:
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

          {/* Architecture */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl font-bold text-ink-primary dark:text-darkink-primary mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-primary-500 rounded-full"></span>
              Architecture & System Design
            </h2>
            <p className="text-ink-secondary dark:text-darkink-secondary text-lg leading-relaxed mb-6">
              The system follows a microservices-inspired monorepo with three independently deployable services
              connected via REST APIs and Socket.io WebSocket events:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {architectureHighlights.map((item) => (
                <div key={item.title} className="bg-success-soft dark:bg-darksubtle rounded-lg p-6 border border-border dark:border-darkborder">
                  <h4 className="font-semibold text-ink-primary dark:text-darkink-primary mb-2">{item.title}</h4>
                  <p className="text-ink-secondary dark:text-darkink-secondary text-sm">{item.description}</p>
                </div>
              ))}
            </div>

            {/* Data Flow */}
            <h3 className="text-2xl font-semibold text-ink-primary dark:text-darkink-primary mb-4">
              AI Processing Pipeline
            </h3>
            <div className="bg-bg-surface dark:bg-darksurface rounded-lg p-6 border border-border dark:border-darkborder mb-8">
              <ol className="space-y-3 text-ink-secondary dark:text-darkink-secondary text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary-500 font-mono mt-0.5">1.</span>
                  <span>Audio uploaded to Supabase Storage (web upload, live recording, or Chrome extension capture)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-500 font-mono mt-0.5">2.</span>
                  <span>OpenAI Whisper (<code>whisper-1</code>) transcribes and translates to English</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-500 font-mono mt-0.5">3.</span>
                  <span>GPT-4o mini corrects grammar, generates structured meeting notes, and extracts action items</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-500 font-mono mt-0.5">4.</span>
                  <span>Tasks assigned to participants; transcript, notes, and chatbot become available on the meeting detail page</span>
                </li>
              </ol>
            </div>
          </div>

          {/* Technology Stack */}
          <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl font-bold text-ink-primary dark:text-darkink-primary mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-primary-500 rounded-full"></span>
              Technology Stack
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-bg-surface dark:bg-darksurface rounded-xl p-6 border border-border dark:border-darkborder shadow-sm">
                <h4 className="font-semibold text-ink-primary dark:text-darkink-primary mb-4 text-lg">Frontend</h4>
                <div className="flex flex-wrap gap-2">
                  {['React 19', 'Vite', 'Tailwind CSS', 'Socket.io Client', 'RecordRTC', 'Framer Motion', 'Three.js', 'Axios'].map((tech) => (
                    <span key={tech} className="px-3 py-1.5 bg-bg-subtle dark:bg-darksubtle text-ink-secondary dark:text-darkink-secondary text-sm font-medium rounded-full border border-border dark:border-darkborder">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-bg-surface dark:bg-darksurface rounded-xl p-6 border border-border dark:border-darkborder shadow-sm">
                <h4 className="font-semibold text-ink-primary dark:text-darkink-primary mb-4 text-lg">Backend</h4>
                <div className="flex flex-wrap gap-2">
                  {['Node.js', 'Express 5', 'Socket.io', 'OpenAI SDK', 'Multer', 'Nodemailer', 'Nanoid'].map((tech) => (
                    <span key={tech} className="px-3 py-1.5 bg-bg-subtle dark:bg-darksubtle text-ink-secondary dark:text-darkink-secondary text-sm font-medium rounded-full border border-border dark:border-darkborder">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-bg-surface dark:bg-darksurface rounded-xl p-6 border border-border dark:border-darkborder shadow-sm">
                <h4 className="font-semibold text-ink-primary dark:text-darkink-primary mb-4 text-lg">AI & Data</h4>
                <div className="flex flex-wrap gap-2">
                  {['OpenAI Whisper', 'GPT-4o mini', 'Supabase Auth', 'PostgreSQL', 'Row Level Security', 'Supabase Storage'].map((tech) => (
                    <span key={tech} className="px-3 py-1.5 bg-bg-subtle dark:bg-darksubtle text-ink-secondary dark:text-darkink-secondary text-sm font-medium rounded-full border border-border dark:border-darkborder">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-bg-surface dark:bg-darksurface rounded-xl p-6 border border-border dark:border-darkborder shadow-sm">
                <h4 className="font-semibold text-ink-primary dark:text-darkink-primary mb-4 text-lg">Extension & DevOps</h4>
                <div className="flex flex-wrap gap-2">
                  {['Chrome MV3', 'Offscreen Document', 'Tab Capture API', 'Vercel', 'Render', 'RNNoise WASM'].map((tech) => (
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

          {/* Technical Challenges */}
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

          {/* Deployment */}
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
                  React SPA with edge deployment and automatic CI/CD
                </div>
              </div>
              <div className="bg-bg-surface dark:bg-darksurface rounded-xl p-8 border border-border dark:border-darkborder text-center">
                <div className="text-lg font-bold text-primary-500 mb-2">Backend</div>
                <div className="text-ink-secondary dark:text-darkink-secondary font-medium">Render</div>
                <div className="text-sm text-ink-muted dark:text-darkink-muted mt-2">
                  Node.js with native WebSocket support for Socket.io signaling
                </div>
              </div>
              <div className="bg-bg-surface dark:bg-darksurface rounded-xl p-6 border border-border dark:border-darkborder text-center">
                <div className="text-lg font-bold text-primary-500 mb-2">Database & Auth</div>
                <div className="text-ink-secondary dark:text-darkink-secondary font-medium">Supabase</div>
                <div className="text-sm text-ink-muted dark:text-darkink-muted mt-2">
                  PostgreSQL with RLS, JWT auth, and S3-compatible file storage
                </div>
              </div>
            </div>
          </div>

          {/* Future Enhancements */}
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

          {/* Conclusion */}
          <div className={`transition-all duration-1000 delay-1100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-primary-500 rounded-2xl p-8 md:p-12 text-white">
              <h2 className="text-3xl font-bold mb-4">Automating the Complete Meeting Workflow</h2>
              <p className="text-lg leading-relaxed mb-6 text-white/90">
                Meeting AI combines WebRTC real-time conferencing, OpenAI-powered transcription and summarization,
                and organization-scoped collaboration into a single production-ready platform. From live meetings
                to Google Meet recordings, every workflow ends with searchable transcripts, structured notes,
                assigned tasks, and an AI assistant grounded in meeting context.
              </p>
              <p className="text-lg leading-relaxed text-white/90">
                This project demonstrates full-stack expertise across React, Node.js, WebRTC signaling, Chrome
                extension development, Supabase multi-tenancy, and LLM integration — built for performance,
                security, and extensibility.
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

export default MeetingAI;
