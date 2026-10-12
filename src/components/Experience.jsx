import React, { useState, useEffect, useRef } from 'react';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const experienceRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (experienceRef.current) {
      observer.observe(experienceRef.current);
    }

    return () => {
      if (experienceRef.current) {
        observer.unobserve(experienceRef.current);
      }
    };
  }, []);

  const experiences = [
    {
      id: 1,
      title: 'Web Developer',
      company: 'Arkidu Development',
      duration: 'April 2024 - Feb 2025',
      location: 'Islamabad, Remote',
      description: 'Specialized in building and customizing responsive WordPress websites with a focus on user experience.',
      responsibilities: [
        'Built and customized responsive WordPress websites using Elementor',
        'Implemented WordPress plugins and custom functionality',
        'Collaborated with clients to deliver high-quality web solutions',
      ],
      color: 'from-indigo-500 to-purple-600',
    },
  ];

  return (
    <section ref={experienceRef} id="experience" className="min-h-screen bg-white dark:bg-gray-900 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Work Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey and contributions in web development
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 hidden lg:block"></div>
          
          {/* Mobile Timeline Line */}
          <div className="absolute left-8 top-0 w-0.5 h-full bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 lg:hidden"></div>

          {/* Experience Items */}
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`relative mb-12 lg:mb-24 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              } transition-all duration-1000`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="lg:flex lg:items-center">
                {/* Content Card */}
                <div className={`lg:w-5/12 ${index % 2 === 0 ? 'lg:ml-auto lg:pl-12' : 'lg:mr-auto lg:pr-12'} ml-16 lg:ml-0`}>
                  <div className="group relative bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
                    {/* Gradient Accent */}
                    <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${exp.color} rounded-l-2xl`}></div>
                    
                    {/* Company & Duration */}
                    <div className="mb-4">
                      <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                          {exp.title}
                        </h3>
                        <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 text-sm font-semibold rounded-full">
                          Current
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-lg font-semibold text-purple-600 dark:text-purple-400 mb-1">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
                        </svg>
                        {exp.company}
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {exp.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Responsibilities */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-800 dark:text-white mb-3 uppercase tracking-wide">
                        Key Responsibilities
                      </h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                            <svg className="w-5 h-5 text-indigo-500 dark:text-indigo-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-8 lg:left-1/2 top-8 lg:transform lg:-translate-x-1/2 z-10">
                  <div className={`w-6 h-6 bg-gradient-to-br ${exp.color} rounded-full border-4 border-white dark:border-gray-900 shadow-lg group-hover:scale-125 transition-transform duration-300`}></div>
                  <div className={`absolute inset-0 w-6 h-6 bg-gradient-to-br ${exp.color} rounded-full animate-ping opacity-20`}></div>
                </div>

                {/* Connecting Line to Dot (Desktop) */}
                <div className={`hidden lg:block absolute top-8 ${index % 2 === 0 ? 'left-1/2 ml-3' : 'right-1/2 mr-3'} w-12 h-0.5 bg-gradient-to-r ${index % 2 === 0 ? exp.color : `${exp.color.split(' ')[0]} ${exp.color.split(' ')[1]}`}`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300">
            <svg className="w-5 h-5 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="font-medium">Open to new opportunities</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
