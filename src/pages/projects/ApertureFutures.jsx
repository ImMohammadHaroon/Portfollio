import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SEOHead from '../../components/SEOHead';
import ProjectPageNav from '../../components/ProjectPageNav';
import ApertureImage from '../../assets/bluelines-lifeline-rag.webp';

const ApertureFutures = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const frame = requestAnimationFrame(() => setIsVisible(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="min-h-screen bg-bg-main dark:bg-darkbg">
      <SEOHead
        title="Aperture Futures - AI-Powered UN Security Council Intelligence | Mohammad Haroon Portfolio"
        description="Aperture Futures: An AI-powered platform transforming UN Security Council intelligence with RAG architecture. Features BlueLines, LiveLines, and CrossLines for real-time insights and negotiation modeling. Built by Mohammad Haroon."
        keywords="Aperture Futures, AI, RAG Architecture, UNSC, International Relations, Diplomacy, Python, React, LLM, Machine Learning, Mohammad Haroon"
        canonicalUrl="https://devowl.me/project/aperture-futures"
        ogType="article"
        publishedDate="2025-11-01"
        modifiedDate="2026-01-31"
        breadcrumbs={[
          { name: "Home", url: "https://devowl.me/" },
          { name: "Projects", url: "https://devowl.me/projects" },
          { name: "Aperture Futures", url: "https://devowl.me/project/aperture-futures" }
        ]}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "Aperture Futures: AI-Powered UN Security Council Intelligence Platform",
          "author": {
            "@type": "Person",
            "name": "Mohammad Haroon",
            "alternateName": "Mohammad Haroon",
            "url": "https://devowl.me/"
          },
          "description": "An AI-powered platform transforming UN Security Council intelligence through advanced RAG architecture, empowering governments, diplomats, and advocacy networks with real-time insights and negotiation intelligence.",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "Web",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "keywords": "AI, RAG, International Relations, UNSC, Diplomacy, NLP",
          "datePublished": "2025-11-01",
          "programmingLanguage": ["Python", "JavaScript", "React", "Flask"]
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
                AI & International Relations
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-ink-primary dark:text-darkink-primary mb-6">
              Aperture Futures: Anticipating Change
            </h1>
            <p className="text-xl text-ink-secondary dark:text-darkink-secondary max-w-3xl mx-auto leading-relaxed">
              An AI-powered platform transforming UN Security Council intelligence through advanced RAG architecture,
              empowering governments, diplomats, and advocacy networks with real-time insights, strategic analysis,
              and negotiation intelligence.
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
              src={ApertureImage}
              alt="Aperture Futures Platform"
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
              The United Nations Security Council operates at the intersection of global peace, international law,
              and high-stakes diplomacy. Yet accessing and analyzing the massive volume of resolutions, meeting
              records, and negotiation dynamics remains a significant challenge for governments, advocacy organizations,
              and researchers who need timely, actionable intelligence to shape outcomes.
            </p>
            <p className="text-ink-secondary dark:text-darkink-secondary text-lg leading-relaxed mb-8">
              Aperture Futures is a specialized technology advisory platform built at the forefront of UN Security
              Council (UNSC) affairs. Developed using React.js and Python Flask, it provides three flagship AI-powered
              products that transform how stakeholders engage with the Council's debates, negotiations, and decisions.
              <strong className="text-ink-primary dark:text-darkink-primary"> BlueLines</strong> enables intelligent research and
              drafting of Security Council resolutions through semantic search and AI-assisted writing.
              <strong className="text-ink-primary dark:text-darkink-primary"> LiveLines</strong> delivers rapid reporting and
              analysis of UNSC meetings with real-time summaries and key insights.
              <strong className="text-ink-primary dark:text-darkink-primary"> CrossLines</strong> simulates negotiation dynamics
              and predicts diplomatic positioning to inform strategic decision-making. At its core, the platform
              leverages Retrieval-Augmented Generation (RAG) architecture with Large Language Models to deliver
              contextually accurate, source-grounded intelligence from decades of UNSC documentation.
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
                Building an AI platform for international diplomacy presents unique challenges that go far beyond typical
                document search and analysis:
              </p>
              <ul className="space-y-4 text-ink-secondary dark:text-darkink-secondary">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-semibold mt-1">1</span>
                  <span><strong className="text-ink-primary dark:text-darkink-primary">Massive Document Corpus:</strong> Processing and indexing decades of UNSC resolutions, meeting records, voting patterns, and diplomatic statements across multiple languages and complex legal terminology.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-semibold mt-1">2</span>
                  <span><strong className="text-ink-primary dark:text-darkink-primary">Accuracy & Source Attribution:</strong> Ensuring AI-generated insights are factually accurate, properly sourced, and traceable to official UN documents—critical for diplomatic and policy work.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-semibold mt-1">3</span>
                  <span><strong className="text-ink-primary dark:text-darkink-primary">Real-Time Intelligence:</strong> Delivering up-to-date analysis of live UNSC meetings and rapidly evolving diplomatic situations where timing is crucial for strategic positioning.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-semibold mt-1">4</span>
                  <span><strong className="text-ink-primary dark:text-darkink-primary">Negotiation Complexity:</strong> Modeling the intricate dynamics of multi-stakeholder negotiations involving 15 Security Council members with diverse interests, voting patterns, and geopolitical alignments.</span>
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
              Aperture Futures leverages cutting-edge AI architecture and modern web technologies to deliver
              reliable, actionable intelligence for high-stakes diplomatic work:
            </p>

            {/* RAG Architecture */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-ink-primary dark:text-darkink-primary mb-4 flex items-center gap-2">
                <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                Retrieval-Augmented Generation (RAG) Architecture
              </h3>
              <p className="text-ink-secondary dark:text-darkink-secondary leading-relaxed mb-4">
                The platform implements a sophisticated RAG pipeline that combines the power of Large Language Models
                with accurate information retrieval from verified UN documents:
              </p>
              <div className="bg-bg-surface dark:bg-darksurface rounded-lg p-6 border border-border dark:border-darkborder mb-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-primary-500/10 dark:bg-primary-500/30 text-primary-500 dark:text-primary-500 rounded-lg flex items-center justify-center font-bold text-sm">1</span>
                    <div>
                      <h4 className="font-semibold text-ink-primary dark:text-darkink-primary mb-1">Document Ingestion & Vectorization</h4>
                      <p className="text-ink-muted dark:text-darkink-muted text-sm">
                        UNSC documents are processed, chunked, and embedded into high-dimensional vector space using
                        state-of-the-art embedding models, creating a searchable knowledge base.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-primary-500/10 dark:bg-primary-500/30 text-primary-500 dark:text-primary-500 rounded-lg flex items-center justify-center font-bold text-sm">2</span>
                    <div>
                      <h4 className="font-semibold text-ink-primary dark:text-darkink-primary mb-1">Semantic Retrieval</h4>
                      <p className="text-ink-muted dark:text-darkink-muted text-sm">
                        User queries are embedded and matched against the vector database to retrieve the most relevant
                        documents, passages, and contextual information.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-primary-500/10 dark:bg-primary-500/30 text-primary-500 dark:text-primary-500 rounded-lg flex items-center justify-center font-bold text-sm">3</span>
                    <div>
                      <h4 className="font-semibold text-ink-primary dark:text-darkink-primary mb-1">Augmented Generation</h4>
                      <p className="text-ink-muted dark:text-darkink-muted text-sm">
                        Retrieved context is passed to Large Language Models that generate accurate, source-grounded
                        responses with proper citations and document references.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-primary-500/10 dark:bg-primary-500/30 text-primary-500 dark:text-primary-500 rounded-lg flex items-center justify-center font-bold text-sm">4</span>
                    <div>
                      <h4 className="font-semibold text-ink-primary dark:text-darkink-primary mb-1">Validation & Attribution</h4>
                      <p className="text-ink-muted dark:text-darkink-muted text-sm">
                        All generated content includes verifiable source citations, confidence scores, and direct links
                        to original UN documents for transparency and accountability.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-success-soft dark:bg-darksubtle rounded-lg p-6 border-l-4 border-primary-500">
                <p className="text-ink-muted dark:text-darkink-muted italic">
                  "The RAG architecture ensures that AI-generated insights are always grounded in verified UN documentation,
                  making the platform reliable for high-stakes diplomatic and policy work where accuracy is paramount."
                </p>
              </div>
            </div>

            {/* Flask Backend */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-ink-primary dark:text-darkink-primary mb-4 flex items-center gap-2">
                <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
                Python Flask Backend with AI Integration
              </h3>
              <p className="text-ink-secondary dark:text-darkink-secondary leading-relaxed mb-4">
                The Flask backend serves as the AI engine, handling document processing, vector operations, and LLM interactions:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-bg-surface dark:bg-darksurface rounded-lg p-5 border border-border dark:border-darkborder">
                  <h4 className="font-semibold text-ink-primary dark:text-darkink-primary mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                    Document Processing Pipeline
                  </h4>
                  <p className="text-ink-muted dark:text-darkink-muted text-sm">
                    Automated ingestion, parsing, and indexing of UN documents with intelligent chunking strategies
                    optimized for semantic search and retrieval.
                  </p>
                </div>
                <div className="bg-bg-surface dark:bg-darksurface rounded-lg p-5 border border-border dark:border-darkborder">
                  <h4 className="font-semibold text-ink-primary dark:text-darkink-primary mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                    Vector Database Integration
                  </h4>
                  <p className="text-ink-muted dark:text-darkink-muted text-sm">
                    High-performance vector storage and similarity search using specialized databases optimized
                    for fast retrieval across millions of document embeddings.
                  </p>
                </div>
                <div className="bg-bg-surface dark:bg-darksurface rounded-lg p-5 border border-border dark:border-darkborder">
                  <h4 className="font-semibold text-ink-primary dark:text-darkink-primary mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                    LLM API Management
                  </h4>
                  <p className="text-ink-muted dark:text-darkink-muted text-sm">
                    Efficient orchestration of multiple Large Language Model APIs with prompt engineering,
                    token optimization, and response caching for cost-effective operations.
                  </p>
                </div>
                <div className="bg-bg-surface dark:bg-darksurface rounded-lg p-5 border border-border dark:border-darkborder">
                  <h4 className="font-semibold text-ink-primary dark:text-darkink-primary mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                    RESTful API Endpoints
                  </h4>
                  <p className="text-ink-muted dark:text-darkink-muted text-sm">
                    Well-designed API architecture serving React frontend with endpoints for search, analysis,
                    document generation, and real-time meeting intelligence.
                  </p>
                </div>
              </div>
            </div>

            {/* React Frontend */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-ink-primary dark:text-darkink-primary mb-4 flex items-center gap-2">
                <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                React.js Frontend with Professional UX
              </h3>
              <p className="text-ink-secondary dark:text-darkink-secondary leading-relaxed mb-4">
                The React frontend delivers a sophisticated user experience tailored for diplomatic and research professionals:
              </p>
              <ul className="space-y-2 text-ink-secondary dark:text-darkink-secondary ml-6 mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-primary-500 mt-1.5">▸</span>
                  <span>Clean, professional interface optimized for rapid information access and analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-500 mt-1.5">▸</span>
                  <span>Real-time search with instant results and intelligent filtering across all three products</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-500 mt-1.5">▸</span>
                  <span>Interactive document viewer with inline citations and source verification</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-500 mt-1.5">▸</span>
                  <span>Collaborative workspace for drafting, annotating, and sharing analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-500 mt-1.5">▸</span>
                  <span>Responsive design ensuring access from government offices, conferences, or field locations</span>
                </li>
              </ul>
            </div>

            {/* Three Products */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-ink-primary dark:text-darkink-primary mb-4 flex items-center gap-2">
                <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                Three Flagship AI Products
              </h3>
              <div className="space-y-4">
                <div className="bg-bg-subtle dark:bg-darksubtle rounded-lg p-6 border-l-4 border-primary-500">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-lg">BL</span>
                    </div>
                    <h4 className="text-xl font-bold text-ink-primary dark:text-darkink-primary">BlueLines</h4>
                  </div>
                  <p className="text-ink-secondary dark:text-darkink-secondary mb-3">
                    <strong>Security Council Resolutions Research & Drafting Tool</strong>
                  </p>
                  <p className="text-ink-muted dark:text-darkink-muted">
                    Intelligent search across decades of UNSC resolutions with semantic understanding. AI-assisted
                    drafting helps diplomats craft new resolutions using precedent language, legal terminology, and
                    successful negotiation patterns. Identifies relevant past resolutions, tracks thematic evolution,
                    and suggests optimal phrasing based on historical success rates.
                  </p>
                </div>

                <div className="bg-bg-subtle dark:bg-darksubtle rounded-lg p-6 border-l-4 border-primary-500">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-lg">LL</span>
                    </div>
                    <h4 className="text-xl font-bold text-ink-primary dark:text-darkink-primary">LiveLines</h4>
                  </div>
                  <p className="text-ink-secondary dark:text-darkink-secondary mb-3">
                    <strong>Rapid Reporting & AI Analysis of UNSC Meetings</strong>
                  </p>
                  <p className="text-ink-muted dark:text-darkink-muted">
                    Real-time monitoring and instant analysis of ongoing Security Council meetings. Generates
                    comprehensive summaries, extracts key statements, identifies shifts in member positions, and
                    highlights emerging consensus or conflict points. Provides diplomatic teams with actionable
                    intelligence while meetings are still in progress.
                  </p>
                </div>

                <div className="bg-bg-subtle dark:bg-darksubtle rounded-lg p-6 border-l-4 border-primary-500">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-lg">CL</span>
                    </div>
                    <h4 className="text-xl font-bold text-ink-primary dark:text-darkink-primary">CrossLines</h4>
                  </div>
                  <p className="text-ink-secondary dark:text-darkink-secondary mb-3">
                    <strong>Negotiation Dynamics Simulator</strong>
                  </p>
                  <p className="text-ink-muted dark:text-darkink-muted">
                    Advanced modeling of Security Council negotiation scenarios using historical voting patterns,
                    geopolitical alignments, and diplomatic relationships. Simulates potential outcomes based on
                    different strategic approaches, predicts member positions on emerging issues, and identifies
                    optimal negotiation strategies and coalition-building opportunities.
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
                <h4 className="font-semibold text-ink-primary dark:text-darkink-primary mb-4 text-lg">Frontend</h4>
                <div className="flex flex-wrap gap-2">
                  {['React.js', 'JavaScript ES6+', 'Tailwind CSS', 'React Router', 'Axios', 'React Query'].map((tech) => (
                    <span key={tech} className="px-3 py-1.5 bg-primary-500/10 dark:bg-primary-500/20 text-primary-500 dark:text-primary-500 text-sm font-medium rounded-full border border-primary-500/20">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-bg-surface dark:bg-darksurface rounded-xl p-6 border border-border dark:border-darkborder shadow-sm">
                <h4 className="font-semibold text-ink-primary dark:text-darkink-primary mb-4 text-lg">Backend & AI</h4>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'Flask', 'LangChain', 'OpenAI GPT', 'Vector Database', 'REST API'].map((tech) => (
                    <span key={tech} className="px-3 py-1.5 bg-primary-500/10 dark:bg-primary-500/20 text-primary-500 dark:text-primary-500 text-sm font-medium rounded-full border border-primary-500/20">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-bg-surface dark:bg-darksurface rounded-xl p-6 border border-border dark:border-darkborder shadow-sm">
                <h4 className="font-semibold text-ink-primary dark:text-darkink-primary mb-4 text-lg">AI/ML Infrastructure</h4>
                <div className="flex flex-wrap gap-2">
                  {['RAG Architecture', 'Embeddings', 'Semantic Search', 'NLP', 'Prompt Engineering'].map((tech) => (
                    <span key={tech} className="px-3 py-1.5 bg-primary-500/10 dark:bg-primary-500/20 text-primary-500 dark:text-primary-500 text-sm font-medium rounded-full border border-primary-500/20">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-bg-surface dark:bg-darksurface rounded-xl p-6 border border-border dark:border-darkborder shadow-sm">
                <h4 className="font-semibold text-ink-primary dark:text-darkink-primary mb-4 text-lg">Data & Infrastructure</h4>
                <div className="flex flex-wrap gap-2">
                  {['PostgreSQL', 'Redis', 'Docker', 'AWS', 'CI/CD', 'Git'].map((tech) => (
                    <span key={tech} className="px-3 py-1.5 bg-primary-500/10 dark:bg-primary-500/20 text-primary-500 dark:text-primary-500 text-sm font-medium rounded-full border border-primary-500/20">
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
                  title: "Semantic Document Search",
                  description: "AI-powered search that understands context and intent, finding relevant documents even when exact keywords don't match. Surfaces related resolutions, precedents, and thematic connections across decades of UNSC records.",
                  icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                },
                {
                  title: "AI-Assisted Resolution Drafting",
                  description: "Intelligent writing assistance that suggests diplomatic language, legal terminology, and proven phrasing based on successful historical resolutions. Ensures consistency with UN conventions and previous Council decisions.",
                  icon: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                },
                {
                  title: "Real-Time Meeting Intelligence",
                  description: "Live monitoring and instant analysis of ongoing UNSC meetings with automated transcription, speaker identification, sentiment analysis, and key moment extraction for immediate strategic response.",
                  icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                },
                {
                  title: "Negotiation Scenario Modeling",
                  description: "Advanced simulation of diplomatic negotiations using machine learning models trained on historical voting patterns, alliance structures, and geopolitical factors to predict outcomes and optimize strategies.",
                  icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                },
                {
                  title: "Source Attribution & Verification",
                  description: "Every AI-generated insight includes verifiable citations with direct links to original UN documents, page numbers, and confidence scores. Ensures transparency and accountability for diplomatic work.",
                  icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                },
                {
                  title: "Historical Trend Analysis",
                  description: "Track evolution of topics, language, and diplomatic positions over time. Visualize shifts in Council priorities, identify emerging themes, and understand long-term patterns in international relations.",
                  icon: "M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                },
                {
                  title: "Collaborative Workspace",
                  description: "Team-based analysis and drafting environment with version control, commenting, annotation tools, and secure sharing for diplomatic teams working across time zones and organizations.",
                  icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                },
                {
                  title: "Multi-Language Support",
                  description: "Process and analyze documents in all six official UN languages (English, French, Spanish, Russian, Chinese, Arabic) with cross-language search and translation capabilities for global accessibility.",
                  icon: "M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
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
                <h4 className="text-xl font-semibold text-ink-primary dark:text-darkink-primary mb-3">Challenge: Hallucination Prevention in High-Stakes Context</h4>
                <p className="text-ink-secondary dark:text-darkink-secondary mb-3">
                  In diplomatic work, even minor factual errors can have serious consequences. Standard LLMs are prone to
                  "hallucinating" facts that sound plausible but are incorrect—completely unacceptable for UNSC intelligence.
                </p>
                <p className="text-ink-muted dark:text-darkink-muted">
                  <strong className="text-primary-500">Solution:</strong> Implemented strict RAG
                  architecture where every AI response must be grounded in retrieved documents. Added confidence scoring,
                  fact-checking layers, and source verification. LLM is explicitly instructed to acknowledge uncertainty
                  rather than generate unsupported claims. All responses include direct quotes and document references
                  that users can verify independently.
                </p>
              </div>

              <div className="bg-bg-subtle dark:bg-darksubtle rounded-xl p-6 border-l-4 border-primary-500">
                <h4 className="text-xl font-semibold text-ink-primary dark:text-darkink-primary mb-3">Challenge: Processing Massive Multilingual Document Corpus</h4>
                <p className="text-ink-secondary dark:text-darkink-secondary mb-3">
                  The UN Security Council has produced thousands of resolutions and meeting records since 1945, in multiple
                  languages and varying formats. Creating a unified, searchable knowledge base from this heterogeneous
                  corpus presented significant data engineering challenges.
                </p>
                <p className="text-ink-muted dark:text-darkink-muted">
                  <strong className="text-primary-500">Solution:</strong> Built automated document
                  ingestion pipeline with intelligent format detection, OCR for scanned documents, and multilingual text
                  extraction. Implemented sophisticated chunking strategy that preserves semantic meaning while optimizing
                  for retrieval. Used cross-lingual embeddings to enable search across languages. Created metadata
                  enrichment system that tags documents with dates, topics, countries, and themes for enhanced filtering.
                </p>
              </div>

              <div className="bg-bg-subtle dark:bg-darksubtle rounded-xl p-6 border-l-4 border-primary-500">
                <h4 className="text-xl font-semibold text-ink-primary dark:text-darkink-primary mb-3">Challenge: Real-Time Analysis with Low Latency</h4>
                <p className="text-ink-secondary dark:text-darkink-secondary mb-3">
                  LiveLines required near-instantaneous analysis of ongoing meetings where diplomatic teams need immediate
                  insights to inform their responses. Standard RAG pipelines can take seconds to process, which is too
                  slow for real-time intelligence.
                </p>
                <p className="text-ink-muted dark:text-darkink-muted">
                  <strong className="text-primary-500">Solution:</strong> Architected multi-tier processing
                  system with instant preliminary analysis using lightweight models, followed by comprehensive deep analysis.
                  Implemented aggressive caching of common queries and pre-computed embeddings for frequently accessed
                  documents. Used WebSocket connections for real-time streaming of meeting transcriptions and incremental
                  analysis updates. Optimized prompt engineering to minimize token usage and reduce LLM API latency.
                </p>
              </div>

              <div className="bg-bg-subtle dark:bg-darksubtle rounded-xl p-6 border-l-4 border-primary-500">
                <h4 className="text-xl font-semibold text-ink-primary dark:text-darkink-primary mb-3">Challenge: Modeling Complex Geopolitical Dynamics</h4>
                <p className="text-ink-secondary dark:text-darkink-secondary mb-3">
                  CrossLines needed to accurately model the intricate web of alliances, rivalries, historical relationships,
                  and shifting positions among Security Council members. Simple voting pattern analysis was insufficient
                  for predicting nuanced diplomatic behavior.
                </p>
                <p className="text-ink-muted dark:text-darkink-muted">
                  <strong className="text-primary-500">Solution:</strong> Developed multi-dimensional
                  modeling approach combining historical voting data, bilateral relationships, geopolitical context, issue
                  categorization, and temporal trends. Trained machine learning models on decades of Council behavior with
                  feature engineering capturing alliance networks, issue positions, and power dynamics. Integrated
                  real-world geopolitical events and news to contextualize predictions. Built simulation engine that runs
                  Monte Carlo scenarios across different strategic approaches, providing probability distributions rather
                  than single predictions.
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
                <div className="text-4xl font-bold text-primary-500 mb-2">75%</div>
                <div className="text-ink-secondary dark:text-darkink-secondary font-medium">Faster Research</div>
                <div className="text-sm text-ink-muted dark:text-darkink-muted mt-2">
                  reduction in time spent on document research and precedent analysis
                </div>
              </div>
              <div className="bg-bg-surface dark:bg-darksurface rounded-xl p-8 border border-border dark:border-darkborder text-center">
                <div className="text-4xl font-bold text-primary-500 mb-2">50,000+</div>
                <div className="text-ink-secondary dark:text-darkink-secondary font-medium">Documents Indexed</div>
                <div className="text-sm text-ink-muted dark:text-darkink-muted mt-2">
                  UNSC resolutions and meeting records searchable with AI
                </div>
              </div>
              <div className="bg-bg-surface dark:bg-darksurface rounded-xl p-8 border border-border dark:border-darkborder text-center">
                <div className="text-4xl font-bold text-primary-500 mb-2">Real-Time</div>
                <div className="text-ink-secondary dark:text-darkink-secondary font-medium">Meeting Intelligence</div>
                <div className="text-sm text-ink-muted dark:text-darkink-muted mt-2">
                  instant analysis during live UNSC sessions
                </div>
              </div>
            </div>
            <p className="text-ink-secondary dark:text-darkink-secondary text-lg leading-relaxed mb-6">
              Aperture Futures has transformed how diplomatic teams, advocacy organizations, and research institutions
              engage with the UN Security Council. By reducing research time by 75%, the platform allows professionals
              to spend more time on strategic thinking and less on manual document searches. The real-time intelligence
              capabilities have proven especially valuable during critical negotiations, where immediate access to
              precedents and contextual analysis can influence outcomes.
            </p>
            <p className="text-ink-secondary dark:text-darkink-secondary text-lg leading-relaxed">
              The RAG architecture has achieved exceptional accuracy with properly attributed sources, building trust
              among users in high-stakes contexts. Diplomatic teams report significantly improved situational awareness
              during negotiations, while advocacy groups can quickly identify relevant precedents to support their
              positions. The platform demonstrates the transformative potential of AI in international relations when
              implemented with rigorous attention to accuracy, verification, and user needs.
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong className="text-ink-primary dark:text-darkink-primary">Expand to Other UN Bodies:</strong> Extend the platform to cover General Assembly, Economic and Social Council, and specialized agencies, creating a comprehensive UN intelligence suite.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-primary-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
                <span><strong className="text-ink-primary dark:text-darkink-primary">Advanced Conversational Interface:</strong> Implement natural language dialogue system allowing users to have extended conversations with the AI about complex diplomatic scenarios.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-primary-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                <span><strong className="text-ink-primary dark:text-darkink-primary">Proactive Intelligence Alerts:</strong> Develop notification system that automatically alerts users to relevant developments, emerging patterns, or significant Council activity based on their interests.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-primary-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <span><strong className="text-ink-primary dark:text-darkink-primary">Enhanced Visualization Tools:</strong> Create interactive visualizations of diplomatic networks, voting coalitions, thematic evolution, and negotiation dynamics for intuitive analysis.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-primary-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <span><strong className="text-ink-primary dark:text-darkink-primary">Mobile Application:</strong> Develop iOS and Android apps for on-the-go access to intelligence during conferences, meetings, and field operations with offline capabilities.</span>
              </li>
            </ul>
          </div>

          {/* Conclusion */}
          <div className={`transition-all duration-1000 delay-1100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-primary-500 rounded-2xl p-8 md:p-12 text-white">
              <h2 className="text-3xl font-bold mb-4">Delivering the Future of Diplomatic Intelligence</h2>
              <p className="text-lg leading-relaxed mb-6 text-white/90">
                Aperture Futures demonstrates how cutting-edge AI technology can be responsibly applied to high-stakes
                international relations work. By implementing rigorous RAG architecture that prioritizes accuracy and
                verification, the platform has earned trust in contexts where errors can have serious consequences.
              </p>
              <p className="text-lg leading-relaxed text-white/90">
                This project showcases expertise in advanced AI/ML implementation, full-stack development with React and
                Flask, natural language processing, large-scale data engineering, and deep understanding of domain-specific
                requirements in international diplomacy. It proves that AI can enhance rather than replace human expertise
                when built with careful attention to accuracy, transparency, and real-world needs—anticipating change and
                delivering the future of UN Security Council intelligence.
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

export default ApertureFutures;
