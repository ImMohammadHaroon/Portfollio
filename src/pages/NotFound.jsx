import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SEOHead from "../components/SEOHead";
import { useTheme } from "../context/ThemeContext";
import { Glitchy404 } from "@/components/ui/glitchy-404-1";

const NotFound = () => {
  const { theme } = useTheme();
  const [displayWidth, setDisplayWidth] = useState(800);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const update = () => setDisplayWidth(Math.min(800, window.innerWidth - 48));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const glitchColor = theme === "dark" ? "#ffffff" : "#000000";

  return (
    <div className="min-h-screen bg-bg-main dark:bg-darkbg transition-colors duration-300 flex flex-col">
      <SEOHead
        title="404 — Page Not Found | Mohammad Haroon Portfolio"
        description="The page you are looking for could not be found."
        ogType="website"
        noIndex
      />
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-16">
        <div className="w-full max-w-4xl flex flex-col items-center gap-8 text-center">
          <div className="w-full flex justify-center overflow-hidden">
            <Glitchy404
              width={displayWidth}
              height={232}
              color={glitchColor}
            />
          </div>
          <div className="space-y-3">
            <h1 className="text-2xl md:text-3xl font-bold text-ink-primary dark:text-darkink-primary">
              Page not found
            </h1>
            <p className="text-ink-muted dark:text-darkink-muted max-w-md mx-auto">
              The link may be broken or the page may have been removed.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 font-medium bg-primary-soft dark:bg-darksubtle text-ink-primary dark:text-darkink-primary hover:opacity-90 transition-opacity"
            >
              Back to home
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 font-medium bg-primary-500 text-white hover:bg-primary-600 transition-colors"
            >
              View projects
            </Link>
            <Link
              to="/#contact"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 font-medium border border-border dark:border-darkborder text-ink-primary dark:text-darkink-primary hover:border-primary-500 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
