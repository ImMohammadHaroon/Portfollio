import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SEOHead from '../../components/SEOHead';
import ProjectPageNav from '../../components/ProjectPageNav';
import WordyImage from '../../assets/wordy.webp';

const WordyApp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const frame = requestAnimationFrame(() => setIsVisible(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  const featureList = [
    {
      title: 'Natural In-Flow Popups',
      description: 'Words appear gently during work, browsing, emails, and videos so learning fits naturally into daily routines.',
      icon: 'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z'
    },
    {
      title: 'Smart Repetition Engine',
      description: 'Automatic repetition cycles improve vocabulary retention without forcing boring drill-based sessions.',
      icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'
    },
    {
      title: 'Multi-Language Learning',
      description: 'Supports English, German, Russian, and Italian, with more language packs planned for upcoming releases.',
      icon: 'M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7m-7 0a5 5 0 0010 0m-10 0a5 5 0 0110 0m0 0a18.045 18.045 0 01-3.482-5.5M15 9h.01M19 9h.01M9 12h.01'
    },
    {
      title: 'Wordy Pro Experience',
      description: 'Unlocks unlimited word lists, detailed progress stats, personalized insights, and robust offline mode.',
      icon: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.962a1 1 0 00.95.69h4.167c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.961c.3.922-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.196-1.539-1.118l1.287-3.961a1 1 0 00-.364-1.118L2.98 9.389c-.783-.57-.38-1.81.588-1.81h4.167a1 1 0 00.95-.69l1.364-3.962z'
    },
    {
      title: 'Visual Customization',
      description: 'Includes 6 beautiful color schemes and popup transparency controls to keep the interface calm and comfortable.',
      icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01'
    },
    {
      title: 'Cross-App Mini Flashcards',
      description: 'Micro-learning cards stay available across common workflows, making consistency effortless for busy professionals.',
      icon: 'M7 8h10M7 12h4m1 8h5a2 2 0 002-2V6a2 2 0 00-2-2H7a2 2 0 00-2 2v2m0 8l-3-3m0 0l3-3m-3 3h12'
    }
  ];

  const challengeList = [
    'Designing vocabulary prompts that remain helpful without interrupting deep focus.',
    'Balancing repetition frequency for retention while avoiding cognitive fatigue.',
    'Managing multilingual word libraries and progress states through a simple admin workflow.',
    'Supporting premium offline behavior with smooth sync and consistent UX across sessions.'
  ];

  const summaryRows = [
    { aspect: 'Learning Method', details: 'Gentle pop-ups + smart repetition' },
    { aspect: 'Languages', details: 'English, German, Russian, Italian+' },
    { aspect: 'Pro Features', details: 'Offline mode, detailed stats, unlimited lists' },
    { aspect: 'Customization', details: '6 color schemes + transparency controls' },
    { aspect: 'Platforms', details: 'Web experience, optimized for early macOS release' },
    { aspect: 'Tech Core', details: 'WordPress + PHP + JavaScript/jQuery/AJAX' }
  ];

  return (
    <div className="min-h-screen bg-bg-main dark:bg-darkbg">
      <SEOHead
        title="Wordy app - WordPress Language Learning App | Mohammad Haroon Portfolio"
        description="Wordy app is a WordPress-powered language learning project that delivers gentle mini pop-ups and smart repetition for natural vocabulary growth in daily workflows."
        keywords="Wordy app, language learning app, WordPress project, smart repetition, flashcards, English German Russian Italian, Mohammad Haroon"
        canonicalUrl="https://devowl.me/project/wordy-app"
        ogType="article"
        publishedDate="2026-03-03"
        modifiedDate="2026-03-03"
        breadcrumbs={[
          { name: 'Home', url: 'https://devowl.me/' },
          { name: 'Projects', url: 'https://devowl.me/projects' },
          { name: 'Wordy app', url: 'https://devowl.me/project/wordy-app' }
        ]}
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: 'Wordy app',
          author: {
            '@type': 'Person',
            name: 'Mohammad Haroon',
            alternateName: 'Mohammad Haroon',
            url: 'https://devowl.me/'
          },
          description:
            'A gentle language learning app that shows mini vocabulary pop-ups naturally during daily work, browsing, and communication with smart spaced repetition.',
          applicationCategory: 'EducationalApplication',
          operatingSystem: 'Web, macOS',
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD'
          },
          url: 'https://wordytrainer.com/',
          programmingLanguage: ['PHP', 'JavaScript', 'HTML', 'CSS'],
          keywords: 'WordPress, Language Learning, Repetition, Flashcards, ACF, WP REST API'
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
                WordPress Language Learning Product
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-ink-primary dark:text-darkink-primary mb-6">
              Wordy app – Quiet, Smart Vocabulary Growth
            </h1>
            <p className="text-xl text-ink-secondary dark:text-darkink-secondary max-w-3xl mx-auto leading-relaxed">
              A language learning experience designed for busy professionals, where words appear gently in your routine so memory builds naturally without boring drills.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className={`mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-border dark:border-darkborder">
            <img
              src={WordyImage}
              alt="Wordy app language learning interface"
              className="w-full h-auto object-cover"
              loading="lazy"
              width="1024"
              height="576"
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
              Wordy app ka core mission simple hai: users ki daily routine ko break kiye bina vocabulary improve karna. Traditional flashcard sessions ki jagah app small, contextual pop-ups show karta hai while users work, browse, write emails, or watch content.
            </p>
            <p className="text-ink-secondary dark:text-darkink-secondary text-lg leading-relaxed mb-8">
              The platform is built on a WordPress foundation with custom PHP logic, AJAX-powered interactivity, and scalable content modeling so the client can rapidly evolve vocabulary content while keeping the experience fast and polished.
            </p>
          </div>

          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl font-bold text-ink-primary dark:text-darkink-primary mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-primary-500 rounded-full"></span>
              The Challenge
            </h2>
            <div className="bg-bg-subtle dark:bg-darksubtle rounded-xl p-8 mb-8 border border-border dark:border-darkborder">
              <p className="text-ink-secondary dark:text-darkink-secondary text-lg leading-relaxed mb-4">
                Building a non-intrusive language assistant for busy professionals required solving product and technical challenges together:
              </p>
              <ul className="space-y-4 text-ink-secondary dark:text-darkink-secondary">
                {challengeList.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-semibold mt-1">{index + 1}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl font-bold text-ink-primary dark:text-darkink-primary mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-primary-500 rounded-full"></span>
              Technical Solution
            </h2>
            <p className="text-ink-secondary dark:text-darkink-secondary text-lg leading-relaxed mb-6">
              Wordy app combines a reliable CMS workflow with lightweight frontend interactions so micro-learning appears naturally during real work sessions.
            </p>
            <div className="bg-bg-surface dark:bg-darksurface rounded-lg p-6 border-l-4 border-primary-500 mb-8">
              <p className="text-ink-secondary dark:text-darkink-secondary mb-4">
                <strong className="text-ink-primary dark:text-darkink-primary">Implementation Highlights:</strong>
              </p>
              <ul className="space-y-2 text-ink-muted dark:text-darkink-muted">
                <li className="flex items-start gap-2">
                  <span className="text-primary-500 font-mono text-sm mt-0.5">✓</span>
                  <span>Word and language data managed through WordPress structures for quick content operations.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-500 font-mono text-sm mt-0.5">✓</span>
                  <span>AJAX/jQuery powered mini popups for real-time, low-latency vocabulary prompts.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-500 font-mono text-sm mt-0.5">✓</span>
                  <span>Smart repetition and progress syncing via WP REST API and client-side state.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-500 font-mono text-sm mt-0.5">✓</span>
                  <span>Offline-ready Pro mode using Service Workers + IndexedDB for continuity.</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-ink-primary dark:text-darkink-primary mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-primary-500 rounded-full"></span>
              Technology Stack
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-bg-surface dark:bg-darksurface rounded-xl p-6 border border-border dark:border-darkborder shadow-sm">
                <h4 className="font-semibold text-ink-primary dark:text-darkink-primary mb-4 text-lg">Core Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {['WordPress', 'PHP', 'HTML5', 'CSS3'].map((tech) => (
                    <span key={tech} className="px-3 py-1.5 bg-bg-subtle dark:bg-darksubtle text-ink-secondary dark:text-darkink-secondary text-sm font-medium rounded-full border border-border dark:border-darkborder">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-bg-surface dark:bg-darksurface rounded-xl p-6 border border-border dark:border-darkborder shadow-sm">
                <h4 className="font-semibold text-ink-primary dark:text-darkink-primary mb-4 text-lg">Interactive Layer</h4>
                <div className="flex flex-wrap gap-2">
                  {['JavaScript', 'jQuery', 'AJAX', 'Mini Flashcards'].map((tech) => (
                    <span key={tech} className="px-3 py-1.5 bg-bg-subtle dark:bg-darksubtle text-ink-secondary dark:text-darkink-secondary text-sm font-medium rounded-full border border-border dark:border-darkborder">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-bg-surface dark:bg-darksurface rounded-xl p-6 border border-border dark:border-darkborder shadow-sm">
                <h4 className="font-semibold text-ink-primary dark:text-darkink-primary mb-4 text-lg">WordPress Ecosystem</h4>
                <div className="flex flex-wrap gap-2">
                  {['Appilo Theme', 'ACF', 'Custom Gutenberg Blocks', 'WP REST API'].map((tech) => (
                    <span key={tech} className="px-3 py-1.5 bg-bg-subtle dark:bg-darksubtle text-ink-secondary dark:text-darkink-secondary text-sm font-medium rounded-full border border-border dark:border-darkborder">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-bg-surface dark:bg-darksurface rounded-xl p-6 border border-border dark:border-darkborder shadow-sm">
                <h4 className="font-semibold text-ink-primary dark:text-darkink-primary mb-4 text-lg">Pro Capability Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {['Service Workers', 'IndexedDB', 'Offline Mode', 'Smart Repetition Logic'].map((tech) => (
                    <span key={tech} className="px-3 py-1.5 bg-bg-subtle dark:bg-darksubtle text-ink-secondary dark:text-darkink-secondary text-sm font-medium rounded-full border border-border dark:border-darkborder">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl font-bold text-ink-primary dark:text-darkink-primary mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-primary-500 rounded-full"></span>
              Key Features
            </h2>
            <div className="space-y-4 mb-8">
              {featureList.map((feature, index) => (
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

            <h2 className="text-3xl font-bold text-ink-primary dark:text-darkink-primary mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-primary-500 rounded-full"></span>
              Summary
            </h2>
            <div className="rounded-xl border border-border dark:border-darkborder overflow-hidden mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 bg-bg-subtle dark:bg-darksubtle">
                {summaryRows.map((row) => (
                  <div key={row.aspect} className="p-5 border-b md:border-b border-border dark:border-darkborder md:[&:nth-last-child(-n+2)]:border-b-0 md:[&:nth-child(odd)]:border-r">
                    <p className="text-sm font-semibold text-ink-primary dark:text-darkink-primary mb-1">{row.aspect}</p>
                    <p className="text-ink-secondary dark:text-darkink-secondary">{row.details}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-success-soft dark:bg-darksubtle rounded-xl p-8 border border-border dark:border-darkborder">
              <p className="text-ink-secondary dark:text-darkink-secondary text-lg leading-relaxed mb-6">
                Wordy app is positioned as a quiet companion for language learning: low-friction, high-consistency, and practical for professionals who cannot commit to long daily study sessions.
              </p>
              <a
                href="https://wordytrainer.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 hover:bg-primary-600 active:bg-primary-700 text-ink-inverse font-semibold rounded-lg transition-colors duration-300"
              >
                <span>Visit Live Project</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 3h7m0 0v7m0-7L10 14M5 5v14h14" />
                </svg>
              </a>
            </div>
          </div>
        </article>

        <ProjectPageNav />
      </div>

      <Footer />
    </div>
  );
};

export default WordyApp;
