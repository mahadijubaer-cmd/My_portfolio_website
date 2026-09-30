import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  Clipboard,
  Github,
  Linkedin,
  Menu,
  Moon,
  Sun,
  X,
} from 'lucide-react';
import { experience, profile, projects, skillGroups } from './content';

const navItems = [
  ['Work', '#work'],
  ['About', '#about'],
  ['Skills', '#skills'],
  ['Journey', '#journey'],
  ['Contact', '#contact'],
] as const;

export default function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>(() =>
    document.documentElement.dataset.theme === 'light' ? 'light' : 'dark',
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.body.classList.add('menu-is-open');
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.classList.remove('menu-is-open');
      window.removeEventListener('keydown', onKey);
    };
  }, [menuOpen]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };
  // Content is visible by default. Motion is reserved for the hero and direct
  // interactions so screenshots, printing, and observer failures never hide it.
  const reveal = {};

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Mahadi Jubaer, home">
          <span className="brand-mark">MJ</span>
          <span className="brand-name">Mahadi Jubaer</span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <button
            className="icon-button"
            type="button"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a className="header-contact" href="#contact">
            Let’s talk <ArrowDownRight size={17} />
          </a>
          <button
            ref={menuButtonRef}
            className="icon-button menu-button"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {menuOpen && (
          <nav id="mobile-menu" className="mobile-nav" aria-label="Mobile navigation">
            {navItems.map(([label, href], index) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)}>
                <span>0{index + 1}</span>
                {label}
              </a>
            ))}
          </nav>
        )}
      </header>

      <main id="main">
        <section id="top" className="hero section-shell" aria-labelledby="hero-title">
          <div className="hero-copy">
            <motion.p className="eyebrow" {...reveal}>
              Full-Stack Software Engineer · Dhaka
            </motion.p>
            <motion.h1 id="hero-title" {...reveal}>
              Building scalable software for <em>real impact.</em>
            </motion.h1>
            <motion.p className="hero-intro" {...reveal}>
              I’m Mahadi Jubaer, a Full-Stack Software Engineer at Alpha Net Bangladesh, working on
              Alora Cloud. I build SaaS platforms, backend systems, modern web applications, and
              AI-enabled product experiences.
            </motion.p>
            <motion.div className="hero-actions" {...reveal}>
              <a className="button button-primary" href="#work">
                View selected work <ArrowDownRight size={18} />
              </a>
              <a
                className="button button-secondary"
                href={profile.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub <ArrowUpRight size={18} />
              </a>
            </motion.div>
            <motion.div className="hero-meta" {...reveal}>
              <span>
                <i className="status-dot" />
                Currently building at Alpha Net Bangladesh
              </span>
              <span>Python · FastAPI · React · Cloud</span>
            </motion.div>
          </div>
          <motion.div
            className="portrait-wrap"
            initial={reduceMotion ? {} : { opacity: 0, scale: 0.96 }}
            animate={reduceMotion ? {} : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.75 }}
          >
            <div className="portrait-label">
              <span>Based in</span>Dhaka, Bangladesh
            </div>
            <img
              src={`${import.meta.env.BASE_URL}images/mahadi-jubaer-portrait.jpg`}
              alt="Mahadi Jubaer wearing a dark suit on a rooftop overlooking Dhaka"
              width="1000"
              height="1000"
              fetchPriority="high"
            />
            <div className="portrait-orbit" aria-hidden="true">
              ENGINEER · BUILDER · PROBLEM SOLVER ·
            </div>
          </motion.div>
        </section>

        <section id="work" className="section-shell content-section" aria-labelledby="work-title">
          <motion.div className="section-heading" {...reveal}>
            <p className="section-kicker">01 / Selected work</p>
            <h2 id="work-title">Products built with purpose.</h2>
            <p>
              Selected platforms where engineering decisions meet real users and operational needs.
            </p>
          </motion.div>
          <div className="projects-grid">
            {projects.map((project) => (
              <motion.article
                className={`project-card project-${project.tone}`}
                key={project.slug}
                {...reveal}
              >
                <div className="project-visual" aria-hidden="true">
                  <span className="project-number">{project.index}</span>
                  <div className="visual-window">
                    <div className="window-top">
                      <i />
                      <i />
                      <i />
                    </div>
                    <div className="window-content">
                      <span>{project.category}</span>
                      <strong>{project.title}</strong>
                      <div className="visual-lines">
                        <i />
                        <i />
                        <i />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="project-body">
                  <p className="project-category">{project.category}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <div className="project-footer">
                    <span>{project.role}</span>
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.linkLabel} (opens in a new tab)`}
                    >
                      {project.linkLabel}
                      <ArrowUpRight size={18} />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="about" className="about-section content-section" aria-labelledby="about-title">
          <div className="section-shell about-grid">
            <motion.div className="section-heading sticky-heading" {...reveal}>
              <p className="section-kicker">02 / About</p>
              <h2 id="about-title">Engineering reliable products from idea to production.</h2>
            </motion.div>
            <motion.div className="about-copy" {...reveal}>
              <p className="about-lead">
                I’m a Full-Stack Software Engineer at Alpha Net Bangladesh, working on Alora Cloud
                and related SaaS and cloud-based products.
              </p>
              <p>
                I contribute across the complete software lifecycle—from understanding requirements
                and designing system architecture to building frontend and backend systems, testing
                software, and supporting deployment and infrastructure.
              </p>
              <p>
                My backend work focuses on Python, FastAPI, REST APIs, PostgreSQL, Redis,
                SQLAlchemy, authentication, role-based access control, and real-time communication.
                On the frontend, I build modern interfaces using React, Next.js, TypeScript,
                JavaScript, and Tailwind CSS.
              </p>
              <p>
                I’m especially interested in scalable SaaS platforms, AI-enabled applications,
                intelligent workflows, distributed architecture, and engineering products that can
                move reliably from concept to production.
              </p>
              <div className="about-facts">
                <div>
                  <span>Based in</span>
                  <strong>Dhaka, Bangladesh</strong>
                </div>
                <div>
                  <span>Working on</span>
                  <strong>Alora Cloud</strong>
                </div>
                <div>
                  <span>Studied at</span>
                  <strong>BRAC University</strong>
                </div>
                <div>
                  <span>Focus</span>
                  <strong>SaaS · AI · Cloud</strong>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section
          id="skills"
          className="section-shell content-section"
          aria-labelledby="skills-title"
        >
          <motion.div className="section-heading heading-row" {...reveal}>
            <div>
              <p className="section-kicker">03 / Capabilities</p>
              <h2 id="skills-title">Across the full stack.</h2>
            </div>
            <p>Tools are useful. Knowing where and why to use them is the real skill.</p>
          </motion.div>
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <motion.article key={group.title} className="skill-card" {...reveal}>
                <span className="skill-number">{group.number}</span>
                <h3>{group.title}</h3>
                <p>{group.summary}</p>
                <ul>
                  {group.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </section>

        <section
          id="journey"
          className="journey-section content-section"
          aria-labelledby="journey-title"
        >
          <div className="section-shell">
            <motion.div className="section-heading" {...reveal}>
              <p className="section-kicker">04 / Journey</p>
              <h2 id="journey-title">Building, learning, shipping.</h2>
            </motion.div>
            <div className="timeline">
              {experience.map((item, index) => (
                <motion.article className="timeline-item" key={item.title} {...reveal}>
                  <span className="timeline-index">0{index + 1}</span>
                  <p className="timeline-date">{item.date}</p>
                  <div>
                    <h3>{item.title}</h3>
                    <p className="timeline-org">{item.organization}</p>
                  </div>
                  <p className="timeline-summary">{item.summary}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="contact-section content-section"
          aria-labelledby="contact-title"
        >
          <div className="section-shell contact-inner">
            <motion.div {...reveal}>
              <p className="section-kicker">05 / Contact</p>
              <h2 id="contact-title">Let’s build something that matters.</h2>
              <p className="contact-copy">
                I’m currently building products at Alpha Net Bangladesh. For thoughtful engineering
                conversations, collaboration, or product ideas, my inbox is open.
              </p>
              <a className="email-link" href={`mailto:${profile.email}`}>
                {profile.email}
                <ArrowUpRight />
              </a>
              <div className="contact-actions">
                <button className="button button-primary" type="button" onClick={copyEmail}>
                  {copied ? <Check size={18} /> : <Clipboard size={18} />}{' '}
                  {copied ? 'Email copied' : 'Copy email'}
                </button>
                <a className="social-link" href={profile.linkedin} target="_blank" rel="noreferrer">
                  <Linkedin size={19} />
                  LinkedIn
                  <ArrowUpRight size={16} />
                </a>
                <a className="social-link" href={profile.github} target="_blank" rel="noreferrer">
                  <Github size={19} />
                  GitHub
                  <ArrowUpRight size={16} />
                </a>
              </div>
              <span className="sr-only" aria-live="polite">
                {copied ? 'Email copied' : ''}
              </span>
            </motion.div>
          </div>
        </section>
      </main>
      <footer className="site-footer section-shell">
        <p>© {new Date().getFullYear()} Mahadi Jubaer</p>
        <p>Designed for clarity. Built with care.</p>
        <a href="#top">
          Back to top
          <ArrowUpRight size={15} />
        </a>
      </footer>
    </>
  );
}
