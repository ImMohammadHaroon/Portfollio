import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { canonicalFor, findPage } from '../seo/siteData';

const setMeta = (attribute, key, content) => {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
};

const setCanonical = (href) => {
  let element = document.head.querySelector('link[rel="canonical"]');
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', 'canonical');
    document.head.appendChild(element);
  }
  element.setAttribute('href', href);
};

const PageTitle = ({ title = 'Mohammad Haroon' }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    const page = findPage(pathname);

    if (!page) {
      document.title = title;
      setMeta('name', 'robots', 'noindex, follow');
      return;
    }

    const url = canonicalFor(page.path);
    document.title = page.title;
    setMeta('name', 'description', page.description);
    setMeta('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1');
    setMeta('property', 'og:title', page.title);
    setMeta('property', 'og:description', page.description);
    setMeta('property', 'og:url', url);
    setMeta('name', 'twitter:title', page.title);
    setMeta('name', 'twitter:description', page.description);
    setCanonical(url);
  }, [pathname, title]);

  return null;
};

export default PageTitle;
