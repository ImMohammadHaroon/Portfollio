import React from 'react';
import { motion } from 'framer-motion';

const MotionDiv = motion.div;

const Skills = () => {
  // Array of skills with their names and icon URLs (using CDN for official logos)
  const skills = [
    {
      name: 'HTML5',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    },
    {
      name: 'CSS3',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    },
    {
      name: 'JavaScript',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    },
    {
      name: 'React.js',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    },
    {
      name: 'Framer Motion',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg',
    },
    {
      name: 'Node.js',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    },
    {
      name: 'Tailwind CSS',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
    },
    {
      name: 'Bootstrap',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
    },
    {
      name: 'WordPress',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg',
    },
    {
      name: 'Elementor',
      icon: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/elementor-icon.png',
    },
    {
      name: 'REST API',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg',
    },
    {
      name: 'Git',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    },
    {
      name: 'GitHub',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    },
    {
      name: 'Webflow',
      icon: 'https://raw.githubusercontent.com/gilbarbara/logos/main/logos/webflow.svg',
    },
    {
      name: 'GSAP',
      icon: 'https://raw.githubusercontent.com/gilbarbara/logos/main/logos/greensock-icon.svg',
    },
    {
      name: 'Python',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    },
    {
      name: 'FastAPI',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg',
    },
    {
      name: 'MongoDB',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    },
    {
      name: 'WooCommerce',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/woocommerce/woocommerce-original.svg',
    },
    {
      name: 'Flask',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg',
    },
  ];

  // Duplicate the skills array to create seamless infinite scroll
  const duplicatedSkills = [...skills, ...skills, ...skills];

  return (
    <section id="skills" className="py-20 bg-bg-main dark:bg-darkbg overflow-hidden">
      <div className="w-full">
        {/* Section Header */}
        <div className="text-center mb-16 px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-ink-primary dark:text-darkink-primary mb-4">
            My Skills
          </h2>
          <p className="text-lg text-ink-muted dark:text-darkink-muted max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Infinite Scroll Container */}
        <div className="relative">
          {/* Edge overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-bg-main/95 dark:bg-darkbg/95 z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-bg-main/95 dark:bg-darkbg/95 z-10 pointer-events-none"></div>

          {/* Scrolling Skills */}
          <div className="overflow-hidden">
            <MotionDiv
              className="flex gap-8 py-8"
              animate={{
                x: [0, -1 * (skills.length * 160)],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear",
                },
              }}
            >
              {duplicatedSkills.map((skill, index) => (
                <SkillCard key={`${skill.name}-${index}`} skill={skill} />
              ))}
            </MotionDiv>
          </div>
        </div>
      </div>
    </section>
  );
};

// Skill Card Component
const SkillCard = ({ skill }) => {
  return (
    <MotionDiv
      className="flex flex-col items-center justify-center min-w-[140px] p-6 bg-bg-surface dark:bg-darksurface border border-border dark:border-darkborder rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 group"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* Skill Icon */}
      <div className="w-16 h-16 mb-4 flex items-center justify-center">
        <img
          src={skill.icon}
          alt={`${skill.name} logo`}
          className="w-full h-full object-contain filter group-hover:drop-shadow-lg transition-all duration-300"
          loading="lazy"
        />
      </div>

      {/* Skill Name */}
      <h3 className="text-sm font-semibold text-ink-primary dark:text-darkink-primary text-center">
        {skill.name}
      </h3>
    </MotionDiv>
  );
};

export default Skills;
