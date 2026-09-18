import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import MeetingAIImage from '../assets/meeting-ai.webp';
import SyeenImage from '../assets/Syeen.webp';
import EcommerceImage from '../assets/EcommerceProject.webp';
import FoncentraImage from '../assets/foncentra.webp';
import ApertureImage from '../assets/bluelines-lifeline-rag.webp';
import WordyImage from '../assets/wordy.webp';

const Projects = () => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const projectsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);

  const projects = [
    {
      id: 1,
      title: 'Meeting AI',
      description: 'A production-grade full-stack platform that automates the meeting workflow — live WebRTC conferencing, audio recording, Whisper transcription, GPT-powered notes, task extraction, and contextual AI chat across web and Google Meet.',
      image: MeetingAIImage,
      category: 'Full-Stack Development',
      technologies: ['React', 'Node.js', 'WebRTC', 'OpenAI', 'Supabase', 'Socket.io'],
      link: '/project/meet-ai'
    },
    {
      id: 2,
      title: 'Syeen: Talent & Business Collaboration Platform',
      description: 'A comprehensive WordPress-powered platform connecting businesses with top talent through intelligent job matching, streamlined applications, and real-time collaboration tools.',
      image: SyeenImage,
      category: 'Web Development',
      technologies: ['WordPress', 'PHP', 'Elementor', 'MySQL', 'JavaScript', 'AJAX'],
      link: '/project/syeen'
    },
    {
      id: 3,
      title: 'GearNix: E-commerce Platform',
      description: 'A fully-functional e-commerce platform for gaming gear featuring React.js frontend, Node.js backend, and integrated payment processing with JazzCash, EasyPaisa, and bank cards.',
      image: EcommerceImage,
      category: 'Full-Stack Development',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Payment APIs', 'JWT'],
      link: '/project/ecommerce'
    },
    {
      id: 4,
      title: 'Foncentra: E-Learning Platform',
      description: 'A modern digital reading and e-learning platform delivering valuable insights through blogs, articles, and eBooks with GSAP-powered animations and responsive design.',
      image: FoncentraImage,
      category: 'Web Development',
      technologies: ['WordPress', 'GSAP', 'JavaScript', 'CSS3', 'PHP', 'Custom Theme'],
      link: '/project/foncentra'
    },
    {
      id: 6,
      title: 'Aperture Futures: UN Security Council Intelligence',
      description: 'An AI-powered platform for UN Security Council intelligence featuring RAG architecture with three flagship products: BlueLines (resolution research), LiveLines (meeting analysis), and CrossLines (negotiation simulator).',
      image: ApertureImage,
      category: 'AI & Machine Learning',
      technologies: ['React', 'Python', 'Flask', 'RAG', 'LangChain', 'OpenAI', 'Vector DB'],
      link: '/project/aperture-futures'
    },
    {
      id: 7,
      title: 'Wordy app: Gentle Language Learning',
      description: 'A WordPress-powered language learning app that shows mini flashcards naturally across daily workflows, using smart repetition for vocabulary growth without interrupting focus.',
      image: WordyImage,
      category: 'Web Development',
      technologies: ['WordPress', 'PHP', 'JavaScript', 'jQuery', 'AJAX', 'WP REST API'],
      link: '/project/wordy-app'
    }
  ];

  const categories = ['All', 'AI & Machine Learning', 'Web Development', 'Full-Stack Development'];

  const isAllProjectsPage = location.pathname === '/projects';
  const latestProjects = [...projects].reverse().slice(0, 6);
  const visibleProjects = isAllProjectsPage ? projects : latestProjects;

  const filteredProjects = activeFilter === 'All'
    ? visibleProjects
    : visibleProjects.filter(project => project.category === activeFilter);

  return (
    <section ref={projectsRef} id="work" className="min-h-screen bg-bg-subtle dark:bg-darksubtle py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-ink-primary dark:text-darkink-primary mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-ink-muted dark:text-darkink-muted max-w-2xl mx-auto mb-8">
            Explore my recent work showcasing web development expertise and creative solutions
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${activeFilter === category
                  ? 'bg-primary-500 text-ink-inverse scale-105'
                  : 'bg-bg-surface dark:bg-darksurface text-ink-secondary dark:text-darkink-secondary border border-border dark:border-darkborder hover:border-primary-500 hover:scale-105'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Link
              key={project.id}
              to={project.link}
              className={`group relative bg-bg-surface dark:bg-darksurface border border-border dark:border-darkborder rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 transform hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} - project by Mohammad Haroon`}
                  loading="lazy"
                  decoding="async"
                  width="400"
                  height="256"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />

                {/* Category Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-3 py-1 bg-bg-surface/90 dark:bg-darksurface/90 backdrop-blur-sm text-xs font-semibold text-ink-primary dark:text-darkink-primary rounded-full border border-border dark:border-darkborder">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-ink-primary dark:text-darkink-primary mb-3 line-clamp-2 group-hover:text-primary-500 transition-colors">
                  {project.title}
                </h3>

                <p className="text-ink-muted dark:text-darkink-muted text-sm mb-4 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-bg-subtle dark:bg-darksubtle text-ink-secondary dark:text-darkink-secondary text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <span className="inline-flex items-center gap-2 text-primary-500 font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                  <span>View Project</span>
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </div>

              {/* Bottom Accent Line */}
              <div className="h-1 bg-primary-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <svg
              className="w-24 h-24 text-ink-muted dark:text-darkink-muted mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-ink-muted dark:text-darkink-muted text-lg">No projects found in this category</p>
          </div>
        )}

        {location.pathname !== '/projects' && (
          <div className="text-center mt-16">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary-500 hover:bg-primary-600 active:bg-primary-700 text-ink-inverse font-semibold rounded-lg transition-colors duration-300"
            >
              <span>View All Projects</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
