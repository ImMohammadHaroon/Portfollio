// Shared by the React app (PageTitle) and scripts/prerender-seo.mjs, so keep it free of asset imports.

export const SITE_URL = 'https://www.devowl.me';
export const SITE_NAME = 'Mohammad Haroon Portfolio';
export const DEFAULT_IMAGE = `${SITE_URL}/profile-photo.webp`;

export const person = {
  name: 'Mohammad Haroon',
  alternateNames: ['Muhammad Haroon', 'Haroon'],
  jobTitle: 'Full Stack MERN Stack Developer',
  email: 'devowl14@gmail.com',
  telephone: '+923428979314',
  locality: 'Bahawalpur',
  region: 'Punjab',
  country: 'PK',
  countryName: 'Pakistan',
  university: 'Cholistan University of Veterinary & Animal Sciences (CUVAS), Bahawalpur',
  summary:
    'Mohammad Haroon is a Full Stack MERN Stack Developer and web developer based in Bahawalpur, Pakistan. He builds responsive web applications, e-commerce platforms, AI-powered tools and WordPress websites using MongoDB, Express.js, React.js, Node.js and modern JavaScript.',
  sameAs: [
    'https://github.com/ImMohammadHaroon',
    'https://www.linkedin.com/in/devowl',
    'https://www.instagram.com/mohammad_haro.on',
  ],
  knowsAbout: [
    'MERN Stack',
    'MongoDB',
    'Express.js',
    'React.js',
    'Node.js',
    'JavaScript',
    'Tailwind CSS',
    'REST APIs',
    'WordPress',
    'Elementor',
    'WooCommerce',
    'Python',
    'FastAPI',
    'Flask',
    'Retrieval-Augmented Generation (RAG)',
    'Full Stack Web Development',
    'E-commerce Development',
  ],
};

export const experience = [
  {
    title: 'Full Stack Developer Intern (MERN Stack)',
    company: 'ML Bench',
    period: 'June 2026 – August 2026',
    description:
      'Built and maintained web applications using MongoDB, Express.js, React.js and Node.js, contributing to frontend UI, REST APIs and database design.',
  },
  {
    title: 'Freelance Web Developer',
    company: 'Fiverr & Freelancer',
    period: 'February 2025 – May 2026',
    description:
      'Delivered WordPress and React.js solutions to international clients, including 6 client projects delivered on time.',
  },
  {
    title: 'Web Developer',
    company: 'Arkidu Development',
    period: 'April 2024 – February 2025',
    description: 'Built and customized responsive WordPress websites using Elementor, plugins and custom functionality.',
  },
];

export const publication = {
  title:
    'AI-Driven Intelligent Chatbots for Conversational English Practice: A Solution for Speaking Anxiety in Pakistani Students',
  journal: 'ACADEMIA International Journal for Social Sciences (AIJSS)',
  datePublished: '2026-01',
  authors: ['Muhammad Haroon', 'Dr. Abdul Khaliq', 'Muhammad Wahaj Sajid'],
  url: 'https://doi.org/10.63056/academia.5.1(a).2026.1892',
};

export const projects = [
  {
    path: '/project/meet-ai',
    name: 'Meeting AI',
    image: 'meeting-ai',
    title: 'Meeting AI – Full-Stack Meeting Automation Platform | Mohammad Haroon',
    description:
      'Meeting AI by Mohammad Haroon: a full-stack React and Node.js platform with WebRTC conferencing, Whisper transcription, GPT-powered notes, task extraction and AI chat.',
    summary:
      'A production-grade web application that automates the complete meeting workflow — live conferencing, recording, AI transcription, intelligent notes, task extraction and contextual search.',
    technologies: ['React', 'Node.js', 'WebRTC', 'OpenAI', 'Supabase', 'Socket.io'],
  },
  {
    path: '/project/syeen',
    name: 'Syeen: Talent & Business Collaboration Platform',
    image: 'Syeen',
    title: 'Syeen – Talent & Business Collaboration Platform | Mohammad Haroon',
    description:
      'Syeen, built by web developer Mohammad Haroon: a WordPress, PHP and Elementor platform connecting businesses with talent through job matching and application tracking.',
    summary:
      'A WordPress-powered platform connecting businesses with talent through intelligent job matching, streamlined applications and real-time collaboration tools.',
    technologies: ['WordPress', 'PHP', 'Elementor', 'MySQL', 'JavaScript', 'AJAX'],
  },
  {
    path: '/project/ecommerce',
    name: 'GearNix: E-commerce Platform',
    image: 'EcommerceProject',
    title: 'GearNix – MERN Stack E-commerce Platform | Mohammad Haroon',
    description:
      'GearNix, a MERN stack e-commerce store by Mohammad Haroon built with React.js, Node.js, Express and MongoDB, with JazzCash, EasyPaisa and bank card payments.',
    summary:
      'A fully functional gaming-gear e-commerce platform with a React.js frontend, Node.js and Express backend, MongoDB database and payment integration with JazzCash, EasyPaisa and bank cards.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Payment APIs', 'JWT'],
  },
  {
    path: '/project/foncentra',
    name: 'Foncentra: E-Learning Platform',
    image: 'foncentra',
    title: 'Foncentra – E-Learning & Digital Publishing Platform | Mohammad Haroon',
    description:
      'Foncentra by Mohammad Haroon: a custom WordPress e-learning and digital publishing platform for blogs, articles and eBooks with GSAP animations and responsive design.',
    summary:
      'A digital reading and e-learning platform delivering blogs, articles and eBooks, built on a custom WordPress theme with GSAP-powered animations.',
    technologies: ['WordPress', 'GSAP', 'JavaScript', 'CSS3', 'PHP', 'Custom Theme'],
  },
  {
    path: '/project/aperture-futures',
    name: 'Aperture Futures: UN Security Council Intelligence',
    image: 'bluelines-lifeline-rag',
    title: 'Aperture Futures – AI RAG Platform for UN Security Council | Mohammad Haroon',
    description:
      'Aperture Futures by Mohammad Haroon: an AI-powered RAG platform with React, Python, Flask and LangChain for UN Security Council research, meeting analysis and negotiation simulation.',
    summary:
      'An AI-powered platform for UN Security Council intelligence using retrieval-augmented generation, with three products: BlueLines (resolution research), LiveLines (meeting analysis) and CrossLines (negotiation simulator).',
    technologies: ['React', 'Python', 'Flask', 'RAG', 'LangChain', 'OpenAI', 'Vector DB'],
  },
  {
    path: '/project/wordy-app',
    name: 'Wordy app: Gentle Language Learning',
    image: 'wordy',
    title: 'Wordy App – WordPress Language Learning App | Mohammad Haroon',
    description:
      'Wordy, a WordPress language learning app by Mohammad Haroon that shows mini flashcards across daily workflows, using smart repetition for vocabulary growth.',
    summary:
      'A WordPress-powered language learning app that shows mini flashcards naturally across daily workflows, using smart repetition for vocabulary growth without interrupting focus.',
    technologies: ['WordPress', 'PHP', 'JavaScript', 'jQuery', 'AJAX', 'WP REST API'],
  },
];

export const pages = [
  {
    path: '/',
    type: 'home',
    title: 'Mohammad Haroon | MERN Stack & Full Stack Web Developer Portfolio',
    description:
      'Mohammad Haroon is a MERN stack and full stack web developer from Bahawalpur, Pakistan. Explore his portfolio of React.js, Node.js, MongoDB, AI and WordPress projects.',
    heading: 'Mohammad Haroon — MERN Stack & Full Stack Web Developer',
  },
  {
    path: '/mohammad-haroon',
    type: 'profile',
    title: 'Mohammad Haroon Profile | Web Developer from Bahawalpur, Pakistan',
    description:
      'Profile of Mohammad Haroon (Muhammad Haroon), a MERN stack developer from Bahawalpur, Pakistan: education at CUVAS, ML Bench internship, freelance work and skills.',
    heading: 'About Mohammad Haroon',
  },
  {
    path: '/projects',
    type: 'projects',
    title: 'Mohammad Haroon Portfolio Projects | MERN Stack Developer',
    description:
      'Portfolio projects by Mohammad Haroon, MERN stack developer: Meeting AI, GearNix e-commerce, Aperture Futures AI platform, Syeen, Foncentra and Wordy app.',
    heading: 'Projects by Mohammad Haroon',
  },
  ...projects.map((project) => ({ ...project, type: 'project', heading: project.name })),
];

export const NOT_FOUND_TITLE = '404 — Page Not Found | Mohammad Haroon Portfolio';

export const findPage = (pathname) => {
  const normalized = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
  return pages.find((page) => page.path === normalized);
};

export const canonicalFor = (path) => (path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`);
