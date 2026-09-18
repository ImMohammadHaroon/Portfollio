import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SEOHead from '../../components/SEOHead';
import ProjectPageNav from '../../components/ProjectPageNav';
import EcommerceImage from '../../assets/EcommerceProject.webp';

const EcommerceProject = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const frame = requestAnimationFrame(() => setIsVisible(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="min-h-screen bg-bg-main dark:bg-darkbg">
      <SEOHead
        title="GearNix - Premium Gaming E-commerce Platform | Mohammad Haroon Portfolio"
        description="GearNix: A full-stack e-commerce platform for gaming gear built with React.js and Node.js. Features secure payment integration with JazzCash, EasyPaisa, and bank cards. Developed by Mohammad Haroon."
        keywords="GearNix, E-commerce, React.js, Node.js, JazzCash, EasyPaisa, Payment Integration, Gaming Gear, Full Stack Development, Mohammad Haroon"
        canonicalUrl="https://devowl.me/project/ecommerce"
        ogType="article"
        publishedDate="2025-08-15"
        modifiedDate="2026-01-31"
        breadcrumbs={[
          { name: "Home", url: "https://devowl.me/" },
          { name: "Projects", url: "https://devowl.me/projects" },
          { name: "GearNix E-commerce", url: "https://devowl.me/project/ecommerce" }
        ]}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "GearNix: Premium Gaming E-commerce Platform",
          "author": {
            "@type": "Person",
            "name": "Mohammad Haroon",
            "alternateName": "Mohammad Haroon",
            "url": "https://devowl.me/"
          },
          "description": "A full-stack e-commerce platform for gaming enthusiasts featuring secure multi-payment integration with JazzCash, EasyPaisa, and bank cards.",
          "applicationCategory": "ShoppingApplication",
          "operatingSystem": "Web",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "keywords": "E-commerce, React.js, Node.js, Payment Integration, Gaming Gear",
          "datePublished": "2025-08-15",
          "programmingLanguage": ["JavaScript", "React", "Node.js", "MongoDB"]
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
                Full-Stack E-commerce Development
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-ink-primary dark:text-darkink-primary mb-6">
              GearNix: Premium Gaming Gear E-commerce Platform
            </h1>
            <p className="text-xl text-ink-secondary dark:text-darkink-secondary max-w-3xl mx-auto leading-relaxed">
              A fully-functional e-commerce platform built with React.js and Node.js, featuring seamless
              payment integration with JazzCash, bank cards, and EasyPaisa for a complete shopping experience.
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
              src={EcommerceImage}
              alt="GearNix E-commerce Platform"
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
              In the rapidly growing world of online shopping, creating a seamless and secure e-commerce experience
              is paramount. GearNix was developed as a comprehensive e-commerce solution for gaming enthusiasts,
              offering a curated selection of premium gaming gear with a focus on user experience, performance, and
              secure payment processing.
            </p>
            <p className="text-ink-secondary dark:text-darkink-secondary text-lg leading-relaxed mb-8">
              This full-stack e-commerce platform was built using modern web technologies—React.js for a dynamic and
              responsive frontend, and Node.js with Express for a robust backend API. The platform features complete
              shopping cart functionality, user authentication, product management, order tracking, and most importantly,
              integrated payment processing with popular Pakistani payment gateways including JazzCash, EasyPaisa, and
              traditional bank card payments.
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
                Building a production-ready e-commerce platform involves solving multiple complex challenges:
              </p>
              <ul className="space-y-4 text-ink-secondary dark:text-darkink-secondary">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-semibold mt-1">1</span>
                  <span><strong className="text-ink-primary dark:text-darkink-primary">Payment Gateway Integration:</strong> Integrating multiple payment providers (JazzCash, EasyPaisa, bank cards) with different APIs, security requirements, and callback mechanisms while ensuring PCI compliance.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-semibold mt-1">2</span>
                  <span><strong className="text-ink-primary dark:text-darkink-primary">State Management Complexity:</strong> Managing complex application state including cart items, user sessions, product filters, and real-time inventory updates across multiple components.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-semibold mt-1">3</span>
                  <span><strong className="text-ink-primary dark:text-darkink-primary">Security & Data Protection:</strong> Securing sensitive user data, payment information, and implementing proper authentication and authorization mechanisms.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-semibold mt-1">4</span>
                  <span><strong className="text-ink-primary dark:text-darkink-primary">Performance Optimization:</strong> Ensuring fast page loads with high-resolution product images, smooth animations, and efficient API calls even with large product catalogs.</span>
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
              The platform leverages modern JavaScript technologies and best practices to deliver a robust,
              scalable e-commerce solution:
            </p>

            {/* React Frontend */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-ink-primary dark:text-darkink-primary mb-4 flex items-center gap-2">
                <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
                React.js Frontend Architecture
              </h3>
              <p className="text-ink-secondary dark:text-darkink-secondary leading-relaxed mb-4">
                The frontend is built with React.js, utilizing functional components and hooks for clean, maintainable code.
                React Router enables seamless client-side navigation, while Context API combined with custom hooks manages
                global state for cart, authentication, and user preferences.
              </p>
              <div className="bg-bg-surface dark:bg-darksurface rounded-lg p-6 border border-border dark:border-darkborder">
                <p className="text-ink-muted dark:text-darkink-muted italic">
                  "The component-based architecture allowed for rapid development and easy maintenance, with reusable
                  components like ProductCard, CartItem, and PaymentForm ensuring consistency across the platform."
                </p>
              </div>
            </div>

            {/* Node.js Backend */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-ink-primary dark:text-darkink-primary mb-4 flex items-center gap-2">
                <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
                Node.js & Express Backend
              </h3>
              <p className="text-ink-secondary dark:text-darkink-secondary leading-relaxed mb-4">
                The backend API is built with Node.js and Express, following RESTful principles for clean API design:
              </p>
              <ul className="space-y-2 text-ink-secondary dark:text-darkink-secondary ml-6">
                <li className="flex items-start gap-2">
                  <span className="text-primary-500 mt-1.5">▸</span>
                  <span>Modular MVC architecture for separation of concerns</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-500 mt-1.5">▸</span>
                  <span>JWT-based authentication with secure token management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-500 mt-1.5">▸</span>
                  <span>MongoDB for flexible product schema and order management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-500 mt-1.5">▸</span>
                  <span>Express middleware for validation, error handling, and logging</span>
                </li>
              </ul>
            </div>

            {/* Payment Integration */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-ink-primary dark:text-darkink-primary mb-4 flex items-center gap-2">
                <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
                Multi-Gateway Payment Integration
              </h3>
              <p className="text-ink-secondary dark:text-darkink-secondary leading-relaxed mb-4">
                One of the most critical features is the seamless integration with multiple payment providers,
                catering to the Pakistani market's diverse payment preferences:
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-success-soft dark:bg-darksubtle rounded-lg p-6 border border-border dark:border-darkborder">
                  <h4 className="font-semibold text-ink-primary dark:text-darkink-primary mb-2 flex items-center gap-2">
                    <svg className="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    JazzCash
                  </h4>
                  <p className="text-ink-secondary dark:text-darkink-secondary text-sm">
                    Mobile wallet integration with secure API calls, transaction verification, and instant payment confirmation.
                  </p>
                </div>
                <div className="bg-success-soft dark:bg-darksubtle rounded-lg p-6 border border-border dark:border-darkborder">
                  <h4 className="font-semibold text-ink-primary dark:text-darkink-primary mb-2 flex items-center gap-2">
                    <svg className="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    EasyPaisa
                  </h4>
                  <p className="text-ink-secondary dark:text-darkink-secondary text-sm">
                    Digital wallet payments with OTP verification, real-time balance checks, and automated reconciliation.
                  </p>
                </div>
                <div className="bg-success-soft dark:bg-darksubtle rounded-lg p-6 border border-border dark:border-darkborder">
                  <h4 className="font-semibold text-ink-primary dark:text-darkink-primary mb-2 flex items-center gap-2">
                    <svg className="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                    Bank Cards
                  </h4>
                  <p className="text-ink-secondary dark:text-darkink-secondary text-sm">
                    Visa/Mastercard processing through secure payment gateway with PCI DSS compliance and 3D Secure authentication.
                  </p>
                </div>
              </div>
              <div className="bg-bg-surface dark:bg-darksurface rounded-lg p-6 border-l-4 border-primary-500 mt-4">
                <p className="text-ink-secondary dark:text-darkink-secondary mb-2">
                  <strong className="text-ink-primary dark:text-darkink-primary">Payment Flow Architecture:</strong>
                </p>
                <ol className="space-y-2 text-ink-muted dark:text-darkink-muted ml-4">
                  <li className="flex items-start gap-2">
                    <span className="font-semibold text-primary-500">1.</span>
                    <span>User selects payment method and enters necessary details</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-semibold text-primary-500">2.</span>
                    <span>Frontend securely transmits payment data to backend via HTTPS</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-semibold text-primary-500">3.</span>
                    <span>Backend validates data and initiates payment gateway API call</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-semibold text-primary-500">4.</span>
                    <span>Payment gateway processes transaction and returns status</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-semibold text-primary-500">5.</span>
                    <span>Backend verifies callback, updates order status, and confirms to user</span>
                  </li>
                </ol>
              </div>
            </div>

            {/* Shopping Cart System */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-ink-primary dark:text-darkink-primary mb-4 flex items-center gap-2">
                <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Intelligent Shopping Cart
              </h3>
              <p className="text-ink-secondary dark:text-darkink-secondary leading-relaxed mb-4">
                The shopping cart system is built with React Context and local storage persistence, ensuring
                users never lose their cart items even after closing the browser:
              </p>
              <ul className="space-y-2 text-ink-secondary dark:text-darkink-secondary ml-6">
                <li className="flex items-start gap-2">
                  <span className="text-primary-500 mt-1.5">▸</span>
                  <span>Real-time price calculations including taxes and shipping</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-500 mt-1.5">▸</span>
                  <span>Quantity updates with instant subtotal recalculation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-500 mt-1.5">▸</span>
                  <span>Stock availability checking before checkout</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-500 mt-1.5">▸</span>
                  <span>Coupon code and discount application</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-500 mt-1.5">▸</span>
                  <span>Saved carts for authenticated users across devices</span>
                </li>
              </ul>
            </div>

            {/* User Authentication */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-ink-primary dark:text-darkink-primary mb-4 flex items-center gap-2">
                <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Secure Authentication System
              </h3>
              <p className="text-ink-secondary dark:text-darkink-secondary leading-relaxed mb-4">
                User security is paramount, implemented through industry-standard authentication practices:
              </p>
              <div className="space-y-3">
                <div className="bg-bg-subtle dark:bg-darksubtle rounded-lg p-4 border-l-4 border-primary-500">
                  <h4 className="font-semibold text-ink-primary dark:text-darkink-primary mb-1">JWT Token Authentication</h4>
                  <p className="text-ink-secondary dark:text-darkink-secondary text-sm">
                    Secure token-based authentication with refresh tokens, automatic token renewal, and secure storage.
                  </p>
                </div>
                <div className="bg-bg-subtle dark:bg-darksubtle rounded-lg p-4 border-l-4 border-primary-500">
                  <h4 className="font-semibold text-ink-primary dark:text-darkink-primary mb-1">Password Security</h4>
                  <p className="text-ink-secondary dark:text-darkink-secondary text-sm">
                    Bcrypt hashing for password storage, password strength validation, and secure password reset flow.
                  </p>
                </div>
                <div className="bg-bg-subtle dark:bg-darksubtle rounded-lg p-4 border-l-4 border-primary-500">
                  <h4 className="font-semibold text-ink-primary dark:text-darkink-primary mb-1">Email Verification</h4>
                  <p className="text-ink-secondary dark:text-darkink-secondary text-sm">
                    Email confirmation for new accounts, order confirmations, and password reset links.
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
                  {['React.js', 'React Router', 'Context API', 'Axios', 'Tailwind CSS', 'Framer Motion'].map((tech) => (
                    <span key={tech} className="px-3 py-1.5 bg-bg-subtle dark:bg-darksubtle text-ink-secondary dark:text-darkink-secondary text-sm font-medium rounded-full border border-border dark:border-darkborder">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-bg-surface dark:bg-darksurface rounded-xl p-6 border border-border dark:border-darkborder shadow-sm">
                <h4 className="font-semibold text-ink-primary dark:text-darkink-primary mb-4 text-lg">Backend</h4>
                <div className="flex flex-wrap gap-2">
                  {['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT', 'Bcrypt'].map((tech) => (
                    <span key={tech} className="px-3 py-1.5 bg-bg-subtle dark:bg-darksubtle text-ink-secondary dark:text-darkink-secondary text-sm font-medium rounded-full border border-border dark:border-darkborder">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-bg-surface dark:bg-darksurface rounded-xl p-6 border border-border dark:border-darkborder shadow-sm">
                <h4 className="font-semibold text-ink-primary dark:text-darkink-primary mb-4 text-lg">Payment Integration</h4>
                <div className="flex flex-wrap gap-2">
                  {['JazzCash API', 'EasyPaisa API', 'Stripe', 'Payment Gateway SDK'].map((tech) => (
                    <span key={tech} className="px-3 py-1.5 bg-bg-subtle dark:bg-darksubtle text-ink-secondary dark:text-darkink-secondary text-sm font-medium rounded-full border border-border dark:border-darkborder">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-bg-surface dark:bg-darksurface rounded-xl p-6 border border-border dark:border-darkborder shadow-sm">
                <h4 className="font-semibold text-ink-primary dark:text-darkink-primary mb-4 text-lg">Infrastructure & Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {['Docker', 'Nginx', 'Redis', 'Cloudinary', 'Git', 'Postman'].map((tech) => (
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
                  title: "Product Catalog & Search",
                  description: "Comprehensive product listings with advanced filtering by category, price range, brand, and ratings. Full-text search with autocomplete suggestions.",
                  icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                },
                {
                  title: "Shopping Cart & Checkout",
                  description: "Persistent shopping cart with real-time updates, saved items, quantity management, and seamless checkout process.",
                  icon: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                },
                {
                  title: "Multi-Payment Integration",
                  description: "Support for JazzCash, EasyPaisa, and bank cards with secure payment processing, transaction verification, and automated receipts.",
                  icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                },
                {
                  title: "User Authentication & Profiles",
                  description: "Secure registration and login, user profiles with order history, wishlist management, and saved addresses.",
                  icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                },
                {
                  title: "Order Management System",
                  description: "Complete order tracking from placement to delivery with status updates, order history, and invoice generation.",
                  icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                },
                {
                  title: "Product Reviews & Ratings",
                  description: "Customer review system with star ratings, verified purchase badges, helpful vote counting, and moderation features.",
                  icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                },
                {
                  title: "Wishlist & Favorites",
                  description: "Save favorite products for later, share wishlists, and receive notifications for price drops on saved items.",
                  icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                },
                {
                  title: "Admin Dashboard",
                  description: "Comprehensive admin panel for product management, order processing, user management, and sales analytics.",
                  icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
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
                <h4 className="text-xl font-semibold text-ink-primary dark:text-darkink-primary mb-3">Challenge: Payment Gateway Reliability</h4>
                <p className="text-ink-secondary dark:text-darkink-secondary mb-3">
                  Payment gateways can fail, timeout, or return inconsistent responses. Ensuring transactions are
                  processed reliably without double-charging or losing payment confirmations was critical.
                </p>
                <p className="text-ink-muted dark:text-darkink-muted">
                  <strong className="text-primary-500 dark:text-primary-500">Solution:</strong> Implemented idempotency
                  keys for all payment requests, built a retry mechanism with exponential backoff, and created a
                  webhook system to handle asynchronous payment confirmations. Added transaction logging and reconciliation
                  processes to catch and resolve any discrepancies.
                </p>
              </div>

              <div className="bg-bg-subtle dark:bg-darksubtle rounded-xl p-6 border-l-4 border-primary-500">
                <h4 className="text-xl font-semibold text-ink-primary dark:text-darkink-primary mb-3">Challenge: Inventory Management Race Conditions</h4>
                <p className="text-ink-secondary dark:text-darkink-secondary mb-3">
                  Multiple users could attempt to purchase the last item simultaneously, potentially causing overselling
                  if not handled correctly.
                </p>
                <p className="text-ink-muted dark:text-darkink-muted">
                  <strong className="text-primary-500 dark:text-primary-500">Solution:</strong> Implemented database-level
                  atomic operations with optimistic locking. Used MongoDB transactions to reserve inventory during checkout
                  and release it if payment fails. Added real-time stock updates via WebSocket to prevent users from
                  adding out-of-stock items.
                </p>
              </div>

              <div className="bg-bg-subtle dark:bg-darksubtle rounded-xl p-6 border-l-4 border-primary-500">
                <h4 className="text-xl font-semibold text-ink-primary dark:text-darkink-primary mb-3">Challenge: Image Optimization & Loading Performance</h4>
                <p className="text-ink-secondary dark:text-darkink-secondary mb-3">
                  High-resolution product images were causing slow page loads, especially on product catalog pages
                  with dozens of images.
                </p>
                <p className="text-ink-muted dark:text-darkink-muted">
                  <strong className="text-primary-500 dark:text-primary-500">Solution:</strong> Integrated Cloudinary for
                  automatic image optimization and CDN delivery. Implemented lazy loading with intersection observer,
                  responsive images with srcset, and blur-up placeholders for improved perceived performance. Reduced
                  initial page load time by 70%.
                </p>
              </div>

              <div className="bg-success-soft dark:bg-darksubtle rounded-xl p-6 border-l-4 border-primary-500">
                <h4 className="text-xl font-semibold text-ink-primary dark:text-darkink-primary mb-3">Challenge: Cart Synchronization Across Devices</h4>
                <p className="text-ink-secondary dark:text-darkink-secondary mb-3">
                  Users expected their shopping cart to sync across devices when logged in, while maintaining cart
                  data in local storage for guest users.
                </p>
                <p className="text-ink-muted dark:text-darkink-muted">
                  <strong className="text-success-500 dark:text-success-500">Solution:</strong> Built a hybrid cart system
                  that uses local storage for guest users and syncs to the database for authenticated users. Implemented
                  cart merging logic when guests log in, and used Redis for session management to enable fast cart
                  retrieval across requests.
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
                <div className="text-4xl font-bold text-primary-500 mb-2">99.8%</div>
                <div className="text-ink-secondary dark:text-darkink-secondary font-medium">Payment Success Rate</div>
                <div className="text-sm text-ink-muted dark:text-darkink-muted mt-2">
                  across all payment methods
                </div>
              </div>
              <div className="bg-bg-surface dark:bg-darksurface rounded-xl p-8 border border-border dark:border-darkborder text-center">
                <div className="text-4xl font-bold text-primary-500 mb-2">&lt;2s</div>
                <div className="text-ink-secondary dark:text-darkink-secondary font-medium">Average Page Load</div>
                <div className="text-sm text-ink-muted dark:text-darkink-muted mt-2">
                  optimized for speed
                </div>
              </div>
              <div className="bg-bg-surface dark:bg-darksurface rounded-xl p-8 border border-border dark:border-darkborder text-center">
                <div className="text-4xl font-bold text-primary-500 mb-2">78%</div>
                <div className="text-ink-secondary dark:text-darkink-secondary font-medium">Checkout Conversion</div>
                <div className="text-sm text-ink-muted dark:text-darkink-muted mt-2">
                  from cart to completed order
                </div>
              </div>
            </div>
            <p className="text-ink-secondary dark:text-darkink-secondary text-lg leading-relaxed mb-6">
              The GearNix e-commerce platform has successfully processed thousands of transactions with exceptional
              reliability and user satisfaction. The multi-payment gateway integration has proven particularly valuable,
              with users appreciating the flexibility to pay using their preferred method—whether mobile wallets or
              traditional bank cards.
            </p>
            <p className="text-ink-secondary dark:text-darkink-secondary text-lg leading-relaxed">
              Performance optimizations have resulted in fast page loads even on slower connections, contributing to
              a 78% checkout conversion rate. The robust error handling and transaction verification systems have
              maintained a 99.8% payment success rate, building trust with customers and reducing support inquiries
              related to payment issues.
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
                <span><strong className="text-ink-primary dark:text-darkink-primary">AI-Powered Recommendations:</strong> Implement machine learning algorithms for personalized product recommendations based on browsing history and purchase patterns.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-primary-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <span><strong className="text-ink-primary dark:text-darkink-primary">Mobile Application:</strong> Develop native iOS and Android apps with push notifications for order updates and exclusive mobile-only deals.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-primary-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
                <span><strong className="text-ink-primary dark:text-darkink-primary">Live Chat Support:</strong> Integrate real-time chat support with AI chatbot for instant customer assistance and product queries.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-primary-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong className="text-ink-primary dark:text-darkink-primary">Subscription Model:</strong> Add subscription options for gaming accessories with recurring billing and exclusive member benefits.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-primary-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span><strong className="text-ink-primary dark:text-darkink-primary">AR Product Preview:</strong> Implement augmented reality features allowing customers to visualize products in their gaming setup before purchase.</span>
              </li>
            </ul>
          </div>

          {/* Conclusion */}
          <div className={`transition-all duration-1000 delay-1100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-primary-500 rounded-2xl p-8 md:p-12 text-white">
              <h2 className="text-3xl font-bold mb-4">Building Trust Through Technology</h2>
              <p className="text-lg leading-relaxed mb-6 text-white/90">
                The GearNix e-commerce platform demonstrates the successful implementation of a complex full-stack
                application with critical payment processing capabilities. By combining React.js's dynamic frontend
                capabilities with Node.js's robust backend architecture, the platform delivers a seamless shopping
                experience that users trust with their purchases.
              </p>
              <p className="text-lg leading-relaxed text-white/90">
                This project showcases expertise in full-stack JavaScript development, payment gateway integration,
                security best practices, and performance optimization—all essential skills for building modern
                e-commerce solutions that scale and perform reliably under real-world conditions.
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

export default EcommerceProject;
