import React, { useState, useEffect, useRef } from 'react';
import mlBenchCertificate from '../assets/ml-bench-certificakte.pdf?url';

const ExperienceTimeline = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleCards((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = document.querySelectorAll('.experience-card');
    cards.forEach((card) => observerRef.current.observe(card));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const experiences = [
    {
      title: 'Full Stack Developer Intern (MERN Stack)',
      company: 'ML Bench',
      duration: 'June 2026 – August 2026',
      durationDetail: '2 Months',
      location: 'Remote',
      status: 'completed',
      logo: 'ML',
      certificate: {
        url: mlBenchCertificate,
        title: 'ML Bench Internship Certificate',
      },
      description:
        'Completed a 2-month Full Stack internship at ML Bench, building and maintaining web applications using MongoDB, Express.js, React.js, and Node.js. Contributed to real-world projects across frontend UI, REST APIs, and database design.',
      responsibilities: [
        'Building and maintaining web applications with the MERN stack',
        'Contributing to frontend UI, REST APIs, and database design',
        'Collaborating on real-world projects with the engineering team',
      ],
      technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Tailwind CSS'],
      achievements: [],
    },
    {
      title: 'Freelance Web Developer',
      company: 'Fiverr & Freelancer',
      duration: 'Feb 2025 – May 2026',
      location: 'Remote',
      description:
        'Delivered WordPress and React.js solutions to international clients with a focus on performance and user experience.',
      responsibilities: [
        'Developed WordPress websites with custom themes and Elementor',
        'Built responsive React.js applications',
        'Delivered 6 client projects with on-time delivery',
      ],
      technologies: [
        'WordPress',
        'React.js',
        'Elementor',
        'JavaScript',
      ],
      achievements: [],
    },
    {
      title: 'Web Developer',
      company: 'Arkidu Development',
      duration: 'April 2024 - Feb 2025',
      location: 'Islamabad, Remote',
      description:
        'Built and customized responsive WordPress websites with a focus on user experience.',
      responsibilities: [
        'Developed WordPress websites using Elementor',
        'Implemented plugins and custom functionality',
      ],
      technologies: [
        'WordPress',
        'Elementor',
        'PHP',
        'JavaScript',
      ],
      achievements: [],
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 bg-bg-subtle dark:bg-darksubtle relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-ink-primary dark:text-darkink-primary text-center mb-4">
          Professional Experience
        </h2>
        <p className="text-ink-muted dark:text-darkink-muted text-center text-lg mb-16">
          My journey in web development
        </p>

        {/* Timeline Container */}
        <div className="relative">
          {/* Timeline Line - Desktop Center, Mobile Left */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary-500 hidden sm:block"></div>

          {/* Experience Cards */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                data-index={index}
                className={`experience-card relative ${
                  index % 2 === 0 ? 'md:pr-[50%]' : 'md:pl-[50%]'
                }`}
              >
                {/* Timeline Dot */}
                <div
                  className={`absolute hidden md:block top-8 ${
                    index % 2 === 0 ? 'right-[-8px]' : 'left-[-8px]'
                  } w-4 h-4 bg-primary-500 rounded-full border-4 border-bg-surface dark:border-darksurface z-10`}
                ></div>

                {/* Mobile Timeline Dot */}
                <div className="absolute md:hidden left-[27px] top-8 w-4 h-4 bg-primary-500 rounded-full border-4 border-bg-surface dark:border-darksurface z-10"></div>

                {/* Card Content */}
                <div
                  className={`ml-16 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'
                  } bg-bg-surface dark:bg-darksurface border border-border dark:border-darkborder rounded-2xl p-8 hover:bg-bg-subtle dark:hover:bg-darksubtle hover:border-primary-500 hover:scale-[1.02] transition-all duration-500 transform ${
                    exp.status === 'in-progress' ? 'ring-1 ring-primary-500/20' : ''
                  } ${
                    visibleCards.includes(index)
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-10 opacity-0'
                  }`}
                  style={{
                    transitionDelay: `${index * 150}ms`,
                  }}
                >
                  {/* Header: logo, title, badge */}
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-4">
                    {exp.logo && (
                      <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary-soft dark:bg-primary-500/10 border border-border dark:border-darkborder flex items-center justify-center">
                        <span className="text-lg font-bold text-primary-500 tracking-tight">{exp.logo}</span>
                      </div>
                    )}

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                        <h3 className="text-2xl md:text-3xl font-bold text-primary-500">
                          {exp.title}
                        </h3>

                        {exp.status === 'in-progress' && (
                          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-success-soft dark:bg-success-500/10 border border-success-500/30 text-success-500 text-xs font-semibold uppercase tracking-wide">
                            <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success-500 opacity-75" />
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-success-500" />
                            </span>
                            In Progress
                          </span>
                        )}

                        {exp.status === 'completed' && (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-soft dark:bg-primary-500/10 border border-primary-500/30 text-primary-500 text-xs font-semibold uppercase tracking-wide">
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                            </svg>
                            Completed
                          </span>
                        )}
                      </div>

                      {/* Company & Duration */}
                      <div className="flex flex-wrap items-center gap-2 text-ink-secondary dark:text-darkink-secondary">
                        <span className="text-lg font-bold">{exp.company}</span>
                        <span className="text-ink-muted dark:text-darkink-muted">•</span>
                        <span className="text-sm font-mono">{exp.duration}</span>
                        {exp.durationDetail && (
                          <>
                            <span className="text-ink-muted dark:text-darkink-muted">•</span>
                            <span className="text-sm font-mono">{exp.durationDetail}</span>
                          </>
                        )}
                        <span className="text-ink-muted dark:text-darkink-muted">•</span>
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-ink-muted dark:text-darkink-muted mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Key Responsibilities */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-ink-primary dark:text-darkink-primary mb-3">
                      Key Responsibilities
                    </h4>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, idx) => (
                        <li
                          key={idx}
                          className="flex items-start text-ink-muted dark:text-darkink-muted text-sm"
                        >
                          <svg
                            className="w-5 h-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-ink-primary dark:text-darkink-primary mb-3">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-primary-soft text-primary-500 border border-border rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {exp.achievements.length > 0 && (
                    <>
                      {/* Achievements */}
                      <div>
                        <h4 className="text-lg font-semibold text-ink-primary dark:text-darkink-primary mb-3">
                          Notable Achievements
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, idx) => (
                            <li
                              key={idx}
                              className="flex items-start text-ink-muted dark:text-darkink-muted text-sm"
                            >
                              <svg
                                className="w-5 h-5 text-success-500 mr-2 mt-0.5 flex-shrink-0"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  )}

                  {exp.certificate && (
                    <div className="mt-6 pt-6 border-t border-border dark:border-darkborder">
                      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                        <h4 className="text-lg font-semibold text-ink-primary dark:text-darkink-primary">
                          Certificate
                        </h4>
                        <a
                          href={exp.certificate.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-500 hover:bg-primary-600 text-ink-inverse text-sm font-semibold transition-colors"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          View certificate
                        </a>
                      </div>
                      <div className="rounded-xl overflow-hidden border border-border dark:border-darkborder bg-bg-subtle dark:bg-darksubtle">
                        <iframe
                          src={`${exp.certificate.url}#toolbar=0&navpanes=0`}
                          title={exp.certificate.title}
                          className="w-full h-[280px] sm:h-[360px] md:h-[420px] bg-white"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
