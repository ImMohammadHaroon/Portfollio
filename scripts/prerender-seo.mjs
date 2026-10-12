// Runs after `vite build`: writes one static HTML file per route (head tags, JSON-LD and readable
// content for crawlers that do not execute JavaScript), plus sitemap.xml, robots.txt and llms.txt.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  DEFAULT_IMAGE,
  SITE_NAME,
  SITE_URL,
  canonicalFor,
  experience,
  pages,
  person,
  projects,
  publication,
} from '../src/seo/siteData.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
const today = new Date().toISOString().slice(0, 10);

const HEAD_BLOCK = /<!-- seo:head -->[\s\S]*?<!-- \/seo:head -->/;
const BODY_MARKER = '<!-- seo:body -->';
if (!HEAD_BLOCK.test(template) || !template.includes(BODY_MARKER)) {
  throw new Error('dist/index.html is missing the seo:head / seo:body markers from index.html');
}

const esc = (value) =>
  String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const assetFiles = fs.existsSync(path.join(dist, 'assets')) ? fs.readdirSync(path.join(dist, 'assets')) : [];
const imageFor = (name) => {
  const file = name && assetFiles.find((f) => f.startsWith(`${name}-`) && /\.(webp|png|jpe?g)$/.test(f));
  return file ? `${SITE_URL}/assets/${file}` : DEFAULT_IMAGE;
};

const personId = `${SITE_URL}/#person`;
const websiteId = `${SITE_URL}/#website`;

const personNode = {
  '@type': 'Person',
  '@id': personId,
  name: person.name,
  alternateName: person.alternateNames,
  url: `${SITE_URL}/`,
  mainEntityOfPage: canonicalFor('/mohammad-haroon'),
  image: DEFAULT_IMAGE,
  jobTitle: person.jobTitle,
  description: person.summary,
  email: `mailto:${person.email}`,
  telephone: person.telephone,
  address: {
    '@type': 'PostalAddress',
    addressLocality: person.locality,
    addressRegion: person.region,
    addressCountry: person.country,
  },
  alumniOf: { '@type': 'CollegeOrUniversity', name: person.university },
  hasCredential: {
    '@type': 'EducationalOccupationalCredential',
    name: 'Full Stack Developer (MERN Stack) Internship Certificate',
    credentialCategory: 'Internship Certificate',
    recognizedBy: { '@type': 'Organization', name: 'ML Bench' },
  },
  knowsAbout: person.knowsAbout,
  sameAs: person.sameAs,
};

const websiteNode = {
  '@type': 'WebSite',
  '@id': websiteId,
  name: SITE_NAME,
  alternateName: ['Mohammad Haroon', 'devowl.me'],
  url: `${SITE_URL}/`,
  inLanguage: 'en',
  publisher: { '@id': personId },
};

const publicationNode = {
  '@type': 'ScholarlyArticle',
  '@id': `${SITE_URL}/#publication`,
  headline: publication.title,
  datePublished: publication.datePublished,
  url: publication.url,
  isPartOf: { '@type': 'Periodical', name: publication.journal },
  author: publication.authors.map((name, i) => (i === 0 ? { '@id': personId } : { '@type': 'Person', name })),
};

const breadcrumbs = (trail) => ({
  '@type': 'BreadcrumbList',
  itemListElement: trail.map(([name, itemPath], i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name,
    item: canonicalFor(itemPath),
  })),
});

const structuredData = (page, url, image) => {
  const graph = [personNode, websiteNode];
  const base = {
    '@id': `${url}#webpage`,
    url,
    name: page.title,
    description: page.description,
    isPartOf: { '@id': websiteId },
    inLanguage: 'en',
    dateModified: today,
  };

  if (page.type === 'home' || page.type === 'profile') {
    graph.push({ '@type': 'ProfilePage', ...base, mainEntity: { '@id': personId }, about: { '@id': personId } });
    graph.push(publicationNode);
  } else if (page.type === 'projects') {
    graph.push({
      '@type': 'CollectionPage',
      ...base,
      about: { '@id': personId },
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: projects.map((p, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          url: canonicalFor(p.path),
          name: p.name,
        })),
      },
    });
    graph.push(breadcrumbs([['Home', '/'], ['Projects', '/projects']]));
  } else {
    graph.push({ '@type': 'WebPage', ...base, about: { '@id': `${url}#project` }, author: { '@id': personId } });
    graph.push({
      '@type': 'CreativeWork',
      '@id': `${url}#project`,
      name: page.name,
      description: page.summary,
      image,
      url,
      keywords: page.technologies.join(', '),
      creator: { '@id': personId },
    });
    graph.push(breadcrumbs([['Home', '/'], ['Projects', '/projects'], [page.name, page.path]]));
  }

  return JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replace(/</g, '\\u003c');
};

const headFor = (page) => {
  const url = canonicalFor(page.path);
  const image = page.type === 'project' ? imageFor(page.image) : DEFAULT_IMAGE;
  const ogType = page.type === 'project' ? 'article' : 'profile';
  return [
    `<title>${esc(page.title)}</title>`,
    `<meta name="description" content="${esc(page.description)}" />`,
    '<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />',
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="${ogType}" />`,
    `<meta property="og:site_name" content="${esc(SITE_NAME)}" />`,
    '<meta property="og:locale" content="en_US" />',
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:title" content="${esc(page.title)}" />`,
    `<meta property="og:description" content="${esc(page.description)}" />`,
    `<meta property="og:image" content="${image}" />`,
    `<meta property="og:image:alt" content="${esc(page.type === 'project' ? `${page.name} by Mohammad Haroon` : 'Mohammad Haroon')}" />`,
    ...(ogType === 'profile'
      ? ['<meta property="profile:first_name" content="Mohammad" />', '<meta property="profile:last_name" content="Haroon" />']
      : []),
    '<meta name="twitter:card" content="summary_large_image" />',
    `<meta name="twitter:title" content="${esc(page.title)}" />`,
    `<meta name="twitter:description" content="${esc(page.description)}" />`,
    `<meta name="twitter:image" content="${image}" />`,
    '<link rel="alternate" type="text/plain" title="LLM summary" href="/llms.txt" />',
    `<script type="application/ld+json">${structuredData(page, url, image)}</script>`,
  ].join('\n  ');
};

const link = (href, text) => `<a href="${href}">${esc(text)}</a>`;
const list = (items) => `<ul>${items.map((item) => `<li>${item}</li>`).join('')}</ul>`;

const siteNav = `<nav aria-label="Site">${[
  link('/', 'Home'),
  link('/mohammad-haroon', 'About Mohammad Haroon'),
  link('/projects', 'Projects'),
  link('/#contact', 'Contact'),
].join(' · ')}</nav>`;

const projectList = list(
  projects.map((p) => `${link(p.path, p.name)} — ${esc(p.summary)} <em>Built with ${esc(p.technologies.join(', '))}.</em>`),
);

const experienceList = list(
  experience.map((e) => `<strong>${esc(e.title)}</strong>, ${esc(e.company)} (${esc(e.period)}): ${esc(e.description)}`),
);

const contactBlock = `<h2>Contact Mohammad Haroon</h2>
<p>Email: ${link(`mailto:${person.email}`, person.email)}. Location: ${esc(person.locality)}, ${esc(person.countryName)} (available for remote work).
Profiles: ${link(person.sameAs[0], 'GitHub')}, ${link(person.sameAs[1], 'LinkedIn')}, ${link(person.sameAs[2], 'Instagram')}.</p>`;

const publicationBlock = `<h2>Research publication</h2>
<p>${link(publication.url, publication.title)} — ${esc(publication.journal)}, January 2026. Authors: ${esc(publication.authors.join(', '))}.</p>`;

const faqBlock = `<h2>Quick facts about Mohammad Haroon</h2>
<dl>
<dt>Who is Mohammad Haroon?</dt><dd>${esc(person.summary)}</dd>
<dt>What does Haroon specialise in?</dt><dd>MERN stack development (MongoDB, Express.js, React.js, Node.js), full stack web applications, e-commerce, AI-powered tools with RAG, and WordPress websites.</dd>
<dt>Where did he study?</dt><dd>Bachelor of Computer Science, ${esc(person.university)}.</dd>
<dt>Where has he worked?</dt><dd>Full Stack Developer Intern (MERN Stack) at ML Bench, freelance web developer on Fiverr and Freelancer, and Web Developer at Arkidu Development.</dd>
<dt>Is his name also written Muhammad Haroon?</dt><dd>Yes. Mohammad Haroon is also written Muhammad Haroon; this website, devowl.me, is his official portfolio.</dd>
</dl>`;

const bodyFor = (page) => {
  let main;
  if (page.type === 'home') {
    main = `<h1>${esc(page.heading)}</h1>
<p>${esc(person.summary)}</p>
<p>Read the full ${link('/mohammad-haroon', 'Mohammad Haroon profile')} or browse the ${link('/projects', 'Mohammad Haroon portfolio projects')}.</p>
<h2>Skills</h2><p>${esc(person.knowsAbout.join(', '))}.</p>
<h2>Professional experience</h2>${experienceList}
<h2>Featured projects</h2>${projectList}
${publicationBlock}
${contactBlock}`;
  } else if (page.type === 'profile') {
    main = `<h1>${esc(page.heading)}</h1>
<p>${esc(person.summary)}</p>
<p>He completed a Bachelor of Computer Science from ${esc(person.university)} and a 2-month Full Stack Developer (MERN Stack) internship at ML Bench. Previously he delivered freelance projects on Fiverr and Freelancer and worked as a Web Developer at Arkidu Development.</p>
${faqBlock}
<h2>Experience</h2>${experienceList}
<h2>Skills</h2><p>${esc(person.knowsAbout.join(', '))}.</p>
${publicationBlock}
<h2>Projects</h2>${projectList}
${contactBlock}`;
  } else if (page.type === 'projects') {
    main = `<h1>${esc(page.heading)}</h1>
<p>Web development, MERN stack, AI and WordPress projects designed and built by ${link('/mohammad-haroon', 'Mohammad Haroon')}, a full stack developer from Bahawalpur, Pakistan.</p>
${projectList}
${publicationBlock}
${contactBlock}`;
  } else {
    const others = projects.filter((p) => p.path !== page.path);
    main = `<p>${link('/', 'Home')} › ${link('/projects', 'Projects')} › ${esc(page.name)}</p>
<h1>${esc(page.heading)}</h1>
<p>${esc(page.summary)}</p>
<p>Designed and developed by ${link('/mohammad-haroon', 'Mohammad Haroon')}, ${esc(person.jobTitle.toLowerCase())}.</p>
<h2>Technology stack</h2><p>${esc(page.technologies.join(', '))}.</p>
<h2>More projects by Mohammad Haroon</h2>${list(others.map((p) => link(p.path, p.name)))}
${contactBlock}`;
  }

  return `<div style="max-width:960px;margin:0 auto;padding:96px 24px 48px;font-family:Inter,system-ui,sans-serif;line-height:1.6">
${siteNav}
<main>${main}</main>
</div>`;
};

const outputPath = (pagePath) =>
  pagePath === '/' ? path.join(dist, 'index.html') : path.join(dist, `${pagePath.slice(1)}.html`);

for (const page of pages) {
  const html = template.replace(HEAD_BLOCK, headFor(page)).replace(BODY_MARKER, bodyFor(page));
  const file = outputPath(page.path);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html);
}

const priority = { home: '1.0', profile: '0.9', projects: '0.8', project: '0.7' };
fs.writeFileSync(
  path.join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) =>
      `  <url><loc>${canonicalFor(page.path)}</loc><lastmod>${today}</lastmod><priority>${priority[page.type]}</priority></url>`,
  )
  .join('\n')}
</urlset>
`,
);

const aiCrawlers = [
  'Googlebot',
  'Bingbot',
  'Google-Extended',
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-SearchBot',
  'Claude-User',
  'PerplexityBot',
  'Perplexity-User',
  'Applebot',
  'Applebot-Extended',
  'DuckDuckBot',
  'CCBot',
];
fs.writeFileSync(
  path.join(dist, 'robots.txt'),
  `${aiCrawlers.map((bot) => `User-agent: ${bot}\nAllow: /`).join('\n\n')}

User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`,
);

fs.writeFileSync(
  path.join(dist, 'llms.txt'),
  `# Mohammad Haroon

> ${person.summary} This website (devowl.me) is his official portfolio. His name is also written Muhammad Haroon.

- Role: ${person.jobTitle}
- Location: ${person.locality}, ${person.countryName} (remote-friendly)
- Education: Bachelor of Computer Science, ${person.university}
- Contact: ${person.email}
- GitHub: ${person.sameAs[0]}
- LinkedIn: ${person.sameAs[1]}

## Experience

${experience.map((e) => `- ${e.title}, ${e.company} (${e.period}): ${e.description}`).join('\n')}

## Pages

${pages
  .filter((page) => page.type !== 'project')
  .map((page) => `- [${page.title}](${canonicalFor(page.path)}): ${page.description}`)
  .join('\n')}

## Projects

${projects.map((p) => `- [${p.name}](${canonicalFor(p.path)}): ${p.summary} Built with ${p.technologies.join(', ')}.`).join('\n')}

## Publication

- [${publication.title}](${publication.url}) — ${publication.journal}, January 2026. Authors: ${publication.authors.join(', ')}.
`,
);

console.log(`SEO prerender: wrote ${pages.length} pages, sitemap.xml, robots.txt and llms.txt`);
