import { useEffect } from 'react';

const SEOHead = ({
    title = "Mohammad Haroon | Full Stack Developer & Freelance Web Developer",
    description = 'Mohammad Haroon is a Full Stack Developer and freelance web developer from Bahawalpur, Pakistan, specializing in React.js, Node.js, MongoDB, and WordPress.',
    keywords = "Mohammad Haroon, Mohammad Haroon Portfolio, Full Stack Developer, Freelance Web Developer, Web Developer Bahawalpur, React Developer, WordPress Developer, Portfolio",
    canonicalUrl = 'https://devowl.me/',
    ogImage = 'https://devowl.me/profile-photo.webp',
    ogType = 'website',
    author = 'Mohammad Haroon',
    publishedDate = null,
    modifiedDate = null,
    structuredData = null,
    breadcrumbs = null,
    noIndex = false,
}) => {
    useEffect(() => {
        // Update document title
        document.title = title;

        // Update or create meta tags
        const updateMetaTag = (name, content, isProperty = false) => {
            const attribute = isProperty ? 'property' : 'name';
            let element = document.querySelector(`meta[${attribute}="${name}"]`);

            if (element) {
                element.setAttribute('content', content);
            } else {
                element = document.createElement('meta');
                element.setAttribute(attribute, name);
                element.setAttribute('content', content);
                document.head.appendChild(element);
            }
        };

        // Update meta description
        updateMetaTag('description', description);
        updateMetaTag('keywords', keywords);
        updateMetaTag('author', author);

        // Update Open Graph tags
        updateMetaTag('og:title', title, true);
        updateMetaTag('og:description', description, true);
        updateMetaTag('og:url', canonicalUrl, true);
        updateMetaTag('og:image', ogImage, true);
        updateMetaTag('og:type', ogType, true);
        updateMetaTag('og:site_name', "Mohammad Haroon Portfolio", true);
        updateMetaTag('og:locale', 'en_US', true);

        // Update Twitter Card tags
        updateMetaTag('twitter:card', 'summary_large_image');
        updateMetaTag('twitter:title', title);
        updateMetaTag('twitter:description', description);
        updateMetaTag('twitter:image', ogImage);

        // Article-specific meta tags
        if (ogType === 'article' && publishedDate) {
            updateMetaTag('article:published_time', publishedDate, true);
            updateMetaTag('article:author', author, true);
            if (modifiedDate) {
                updateMetaTag('article:modified_time', modifiedDate, true);
            }
        }

        // Robots meta
        if (noIndex) {
            updateMetaTag('robots', 'noindex, follow');
        } else {
            updateMetaTag('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
        }

        // Update canonical link (skip for non-indexable pages such as 404)
        const canonical = document.querySelector('link[rel="canonical"]');
        if (noIndex) {
            if (canonical) {
                canonical.remove();
            }
        } else if (canonical) {
            canonical.setAttribute('href', canonicalUrl);
        } else {
            const newCanonical = document.createElement('link');
            newCanonical.setAttribute('rel', 'canonical');
            newCanonical.setAttribute('href', canonicalUrl);
            document.head.appendChild(newCanonical);
        }

        // Handle structured data (JSON-LD)
        const existingScript = document.querySelector('script[data-seo-structured-data]');
        if (existingScript) {
            existingScript.remove();
        }

        if (structuredData) {
            const script = document.createElement('script');
            script.type = 'application/ld+json';
            script.setAttribute('data-seo-structured-data', 'true');
            script.textContent = JSON.stringify(structuredData);
            document.head.appendChild(script);
        }

        // Handle breadcrumbs structured data
        const existingBreadcrumbScript = document.querySelector('script[data-seo-breadcrumbs]');
        if (existingBreadcrumbScript) {
            existingBreadcrumbScript.remove();
        }

        if (breadcrumbs && breadcrumbs.length > 0) {
            const breadcrumbSchema = {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": breadcrumbs.map((crumb, index) => ({
                    "@type": "ListItem",
                    "position": index + 1,
                    "name": crumb.name,
                    "item": crumb.url
                }))
            };
            const script = document.createElement('script');
            script.type = 'application/ld+json';
            script.setAttribute('data-seo-breadcrumbs', 'true');
            script.textContent = JSON.stringify(breadcrumbSchema);
            document.head.appendChild(script);
        }

        // Cleanup function
        return () => {
            const structuredScript = document.querySelector('script[data-seo-structured-data]');
            if (structuredScript) structuredScript.remove();
            const breadcrumbScript = document.querySelector('script[data-seo-breadcrumbs]');
            if (breadcrumbScript) breadcrumbScript.remove();
        };
    }, [title, description, keywords, canonicalUrl, ogImage, ogType, author, publishedDate, modifiedDate, structuredData, breadcrumbs, noIndex]);

    return null;
};

export default SEOHead;

