import React, { useState, useEffect } from 'react';
import { useLocation, Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about', path: '/mohammad-haroon' },
    { name: 'Projects', to: 'work', path: '/projects' },
    { name: 'Research', to: 'publications' },
    { name: 'Contact', to: 'contact' },
  ];

  const renderNavLink = (link, className, onNavigate) => {
    if (link.path) {
      return (
        <RouterLink
          key={link.to}
          to={link.path}
          onClick={onNavigate}
          className={className}
        >
          {link.name}
        </RouterLink>
      );
    }

    if (location.pathname === '/') {
      return (
        <ScrollLink
          key={link.to}
          to={link.to}
          smooth={true}
          duration={500}
          spy={true}
          offset={-80}
          onClick={onNavigate}
          className={className}
        >
          {link.name}
        </ScrollLink>
      );
    }

    return (
      <RouterLink
        key={link.to}
        to={`/#${link.to}`}
        onClick={onNavigate}
        className={className}
      >
        {link.name}
      </RouterLink>
    );
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-bg-surface/90 dark:bg-darksurface/90 backdrop-blur-lg shadow-sm border-b border-border/80 dark:border-darkborder/80'
        : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            {location.pathname === '/' ? (
              <ScrollLink
                to="home"
                smooth={true}
                duration={500}
                className="text-2xl md:text-3xl font-bold text-primary-500 cursor-pointer hover:text-primary-600 transition-colors"
              >
                Mohammad Haroon
              </ScrollLink>
            ) : (
              <RouterLink
                to="/"
                className="text-2xl md:text-3xl font-bold text-primary-500 cursor-pointer hover:text-primary-600 transition-colors"
              >
                Mohammad Haroon
              </RouterLink>
            )}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) =>
              renderNavLink(
                link,
                'text-ink-secondary dark:text-darkink-secondary hover:text-primary-500 px-3 py-2 rounded-md text-sm font-medium transition-all cursor-pointer hover:scale-110 transform'
              )
            )}

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-bg-subtle dark:bg-darksubtle hover:bg-border dark:hover:bg-darkborder transition-all transform hover:scale-110"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <svg
                  className="w-5 h-5 text-primary-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5 text-primary-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-bg-subtle dark:bg-darksubtle hover:bg-border dark:hover:bg-darkborder transition-all"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <svg
                  className="w-5 h-5 text-primary-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5 text-primary-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-ink-secondary dark:text-darkink-secondary hover:text-primary-500 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${mobileMenuOpen
          ? 'max-h-screen opacity-100'
          : 'max-h-0 opacity-0 overflow-hidden'
          }`}
      >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-bg-surface/95 dark:bg-darksurface/95 backdrop-blur-lg shadow-sm border-t border-border dark:border-darkborder">
          {navLinks.map((link) =>
            renderNavLink(
              link,
              'block text-ink-secondary dark:text-darkink-secondary hover:text-primary-500 px-3 py-2 rounded-md text-base font-medium transition-colors cursor-pointer',
              () => setMobileMenuOpen(false)
            )
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
