import React, { Suspense, lazy } from 'react';
import Hero from '../components/Hero';
import ScrollToTop from '../components/ScrollToTop';
import SEOHead from '../components/SEOHead';
import aboutImage from '../assets/about.jpeg';

// Lazy load heavy components to improve initial page load speed
const Skills = lazy(() => import('../components/Skills'));
const ExperienceTimeline = lazy(() => import('../components/ExperienceTimeline'));
const Projects = lazy(() => import('../components/Projects'));
const Publications = lazy(() => import('../components/Publications'));
const Contact = lazy(() => import('../components/Contact'));
const Footer = lazy(() => import('../components/Footer'));

import SectionLoader from '../components/SectionLoader';

const Home = () => {
  const homeFaqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Who is Mohammad Haroon?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Mohammad Haroon is a Full Stack Web Developer based in Bahawalpur, Pakistan. He builds React.js, Node.js, MongoDB, WordPress, and e-commerce web projects.',
        },
      },
      {
        '@type': 'Question',
        name: 'What services does Mohammad Haroon offer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Mohammad Haroon offers full-stack web development, React.js applications, WordPress and Elementor development, e-commerce development, and SEO-focused website improvements.',
        },
      },
      {
        '@type': 'Question',
        name: 'Where is Mohammad Haroon based?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Mohammad Haroon is based in Bahawalpur, Pakistan and is available for freelance web development work.',
        },
      },
    ],
  };

  return (
    <div>
      <SEOHead
        title="Mohammad Haroon | Full Stack Developer & Freelance Web Developer"
        description="Mohammad Haroon is a Full Stack Developer and freelance web developer from Bahawalpur, Pakistan, specializing in React.js, Node.js, MongoDB, and WordPress."
        keywords="Mohammad Haroon, Mohammad Haroon Portfolio, Full Stack Developer, Freelance Web Developer, Web Developer Bahawalpur, React Developer, WordPress Developer, MERN Stack, Pakistan Developer, JavaScript Expert, Node.js Developer"
        canonicalUrl="https://devowl.me/"
        ogImage="https://devowl.me/profile-photo.webp"
        structuredData={homeFaqSchema}
      />
      <Hero />

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center bg-bg-main dark:bg-darkbg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-ink-primary dark:text-darkink-primary mb-16 text-center">
            About Me
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Image */}
            <div className="relative group order-2 lg:order-1">
              <div className="absolute -inset-1 bg-primary-soft dark:bg-darksubtle rounded-2xl opacity-70 transition duration-500"></div>
              <div className="relative">
                <img
                  src={aboutImage}
                  alt="Mohammad Haroon, full stack developer"
                  className="relative rounded-2xl shadow-2xl w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  loading="lazy"
                  width="600"
                  height="800"
                  decoding="async"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Right - Content */}
            <div className="space-y-8 order-1 lg:order-2">
              {/* Introduction */}
              <p className="text-lg md:text-xl text-ink-secondary dark:text-darkink-secondary leading-relaxed">
                I'm <span className="font-bold text-primary-500">Mohammad Haroon</span>, a passionate Full Stack Web Developer based in Bahawalpur, Pakistan.
                With expertise in React.js, WordPress, and modern web technologies, I create responsive,
                interactive web experiences that solve real-world problems.
              </p>

              <p className="text-base md:text-lg text-ink-muted dark:text-darkink-muted leading-relaxed">
                I completed my Bachelor of Computer Science from Cholistan University of Veterinary &
                Animal Sciences (CUVAS), Bahawalpur, combining academic knowledge with practical development skills to deliver exceptional web solutions. I specialize in building cutting-edge e-commerce platforms, dynamic web applications, and SEO-optimized websites that drive results.
              </p>

              <div className="space-y-3 pt-2">
                <h3 className="text-2xl font-bold text-ink-primary dark:text-darkink-primary">
                  About Mohammad Haroon
                </h3>
                <p className="text-base md:text-lg text-ink-muted dark:text-darkink-muted leading-relaxed">
                  Mohammad Haroon is a Full Stack Web Developer in
                  Bahawalpur, Pakistan. He builds React.js, Node.js, MongoDB, WordPress, e-commerce, and
                  SEO-focused web projects for clients and teams.
                </p>
              </div>

              {/* Key Achievements */}
              <div className="space-y-6 pt-4">
                <h3 className="text-2xl font-bold text-ink-primary dark:text-darkink-primary flex items-center">
                  <span className="w-1 h-8 bg-primary-500 rounded-full mr-3"></span>
                  Key Achievements
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="group p-5 bg-bg-surface dark:bg-darksurface rounded-xl hover:shadow-lg transition-all duration-300 border border-border dark:border-darkborder hover:border-primary-500">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v2H8v2h8v-2h-2v-2h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H3V4h18v12z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-ink-primary dark:text-darkink-primary mb-1">10+ Websites</p>
                        <p className="text-xs text-ink-muted dark:text-darkink-muted">Responsive WordPress sites with Elementor</p>
                      </div>
                    </div>
                  </div>

                  <div className="group p-5 bg-bg-surface dark:bg-darksurface rounded-xl hover:shadow-lg transition-all duration-300 border border-border dark:border-darkborder hover:border-primary-500">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-ink-primary dark:text-darkink-primary mb-1">E-Commerce</p>
                        <p className="text-xs text-ink-muted dark:text-darkink-muted">Full-stack solutions with React & Node.js</p>
                      </div>
                    </div>
                  </div>

                  <div className="group p-5 bg-bg-surface dark:bg-darksurface rounded-xl hover:shadow-lg transition-all duration-300 border border-border dark:border-darkborder hover:border-primary-500">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-ink-primary dark:text-darkink-primary mb-1">SEO Expert</p>
                        <p className="text-xs text-ink-muted dark:text-darkink-muted">Optimization & lead generation strategies</p>
                      </div>
                    </div>
                  </div>

                  <div className="group p-5 bg-bg-surface dark:bg-darksurface rounded-xl hover:shadow-lg transition-all duration-300 border border-border dark:border-darkborder hover:border-primary-500">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-ink-primary dark:text-darkink-primary mb-1">REST APIs</p>
                        <p className="text-xs text-ink-muted dark:text-darkink-muted">Modern JavaScript frameworks mastery</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <a
                  href="#contact"
                  className="inline-flex items-center px-8 py-4 bg-primary-500 hover:bg-primary-600 active:bg-primary-700 text-ink-inverse font-semibold rounded-lg transition-colors duration-300 group"
                >
                  <span>Let's Work Together</span>
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <Suspense fallback={<SectionLoader />}>
        <Skills />
      </Suspense>

      {/* Experience Section */}
      <Suspense fallback={<SectionLoader />}>
        <ExperienceTimeline />
      </Suspense>

      {/* Projects Section */}
      <Suspense fallback={<SectionLoader />}>
        <Projects />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Publications />
      </Suspense>

      {/* Contact Section */}
      <Suspense fallback={<SectionLoader />}>
        <Contact />
      </Suspense>

      {/* Footer */}
      <Suspense fallback={<div className="h-20 bg-darkbg"></div>}>
        <Footer />
      </Suspense>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
};

export default Home;
