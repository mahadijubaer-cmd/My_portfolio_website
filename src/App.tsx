import { useEffect, useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
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
import { gsap, ScrollTrigger, SplitText } from './animation/gsap';
import { experience, profile, projects } from './content';
import { TechLogo } from './TechLogo';
import { technologies } from './technologies';

const navItems = [
  ['Work', '#work'],
  ['About', '#about'],
  ['Tools', '#tools'],
  ['Journey', '#journey'],
  ['Contact', '#contact'],
] as const;

export default function App() {
  const root = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const [theme, setTheme] = useState<'dark' | 'light'>(() =>
    document.documentElement.dataset.theme === 'light' ? 'light' : 'dark',
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showIntro, setShowIntro] = useState(
    () => sessionStorage.getItem('mj-intro-seen') !== 'true',
  );
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);
  useEffect(() => {
    if (!showIntro) return;
    const fallback = window.setTimeout(() => {
      sessionStorage.setItem('mj-intro-seen', 'true');
      setShowIntro(false);
    }, 1900);
    return () => window.clearTimeout(fallback);
  }, [showIntro]);
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

  useGSAP(
    () => {
      if (navigator.userAgent.includes('jsdom')) return;
      const mm = gsap.matchMedia();
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (showIntro) {
        gsap
          .timeline({
            onComplete: () => {
              sessionStorage.setItem('mj-intro-seen', 'true');
              setShowIntro(false);
            },
          })
          .to('.intro-progress-bar', {
            scaleX: 1,
            duration: reduced ? 0.1 : 1.05,
            ease: 'power3.inOut',
          })
          .to(
            '.intro-count',
            {
              innerText: 100,
              duration: reduced ? 0.1 : 1,
              snap: { innerText: 1 },
              ease: 'power2.out',
            },
            0,
          )
          .to(
            '.intro-panel',
            { yPercent: -100, duration: reduced ? 0.12 : 0.7, ease: 'power4.inOut' },
            '+=.08',
          );
      }
      if (!reduced) {
        const split = SplitText.create('.hero-display', {
          type: 'lines',
          mask: 'lines',
          aria: 'auto',
        });
        gsap.from(split.lines, {
          yPercent: 110,
          rotate: 2,
          duration: 1.1,
          stagger: 0.11,
          ease: 'power4.out',
          delay: showIntro ? 1.15 : 0.1,
        });
        gsap.from('.hero-support > *', {
          y: 20,
          autoAlpha: 0,
          duration: 0.75,
          stagger: 0.09,
          ease: 'power3.out',
          delay: showIntro ? 1.38 : 0.28,
        });
        gsap.from('.hero-portrait-frame', {
          clipPath: 'inset(100% 0 0 0)',
          scale: 1.08,
          duration: 1.25,
          ease: 'power4.out',
          delay: showIntro ? 1.2 : 0.18,
        });
        gsap.to('.manifesto-line-a', {
          xPercent: -18,
          ease: 'none',
          scrollTrigger: {
            trigger: '.manifesto',
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        });
        gsap.fromTo(
          '.manifesto-line-b',
          { xPercent: -18 },
          {
            xPercent: 0,
            ease: 'none',
            scrollTrigger: {
              trigger: '.manifesto',
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1,
            },
          },
        );
        gsap.utils.toArray<HTMLElement>('.about-paragraph').forEach((item) =>
          gsap.from(item, {
            y: 55,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: { trigger: item, start: 'top 82%', once: true },
          }),
        );
        mm.add('(min-width: 901px)', () => {
          const track = document.querySelector<HTMLElement>('.tech-track');
          if (!track) return;
          gsap.to(track, {
            x: () => -(track.scrollWidth - window.innerWidth + 120),
            ease: 'none',
            scrollTrigger: {
              trigger: '.tools-stage',
              start: 'top top',
              end: () => `+=${technologies.length * 145}`,
              scrub: 1,
              pin: true,
              invalidateOnRefresh: true,
            },
          });
        });
        gsap.from('.journey-path-fill', {
          scaleY: 0,
          transformOrigin: 'top',
          ease: 'none',
          scrollTrigger: {
            trigger: '.journey-list',
            start: 'top 70%',
            end: 'bottom 70%',
            scrub: 1,
          },
        });
        gsap.utils.toArray<HTMLElement>('.journey-node').forEach((node) =>
          gsap.from(node, {
            scale: 0,
            duration: 0.45,
            ease: 'back.out(2)',
            scrollTrigger: { trigger: node, start: 'top 72%', once: true },
          }),
        );
        gsap.to('.contact-marquee-track', {
          xPercent: -30,
          ease: 'none',
          scrollTrigger: {
            trigger: '.contact-section',
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        });
      }
      document.fonts.ready.then(() => ScrollTrigger.refresh());
      return () => mm.revert();
    },
    { scope: root, dependencies: [showIntro], revertOnUpdate: true },
  );

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };
  return (
    <div ref={root}>
      {showIntro && (
        <div className="intro-panel" aria-hidden="true">
          <div className="intro-mark">
            MJ<span>Systems in motion</span>
          </div>
          <div className="intro-meter">
            <i className="intro-progress-bar" />
            <span>
              <b className="intro-count">0</b>%
            </span>
          </div>
        </div>
      )}
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
        <section id="top" className="hero-stage section-shell" aria-labelledby="hero-title">
          <p className="eyebrow">Software · Systems · Product</p>
          <h1 id="hero-title" className="hero-display">
            <span>FULL-STACK</span>
            <span>SOFTWARE</span>
            <span>ENGINEER</span>
          </h1>
          <div className="hero-portrait-frame">
            <img
              src={`${import.meta.env.BASE_URL}images/mahadi-jubaer-portrait.jpg`}
              alt="Mahadi Jubaer wearing a dark suit on a rooftop overlooking Dhaka"
              width="1000"
              height="1000"
              fetchPriority="high"
            />
            <span className="portrait-stamp">
              DHAKA
              <br />
              2026
            </span>
          </div>
          <div className="hero-support">
            <p>
              Building scalable SaaS, cloud, and AI-enabled systems from interface to
              infrastructure.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                Explore selected work <ArrowDownRight size={18} />
              </a>
              <a
                className="button button-secondary"
                href={profile.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub <ArrowUpRight size={18} />
              </a>
            </div>
            <div className="hero-status">
              <i />
              Currently building at Alpha Net Bangladesh
            </div>
          </div>
          <div className="hero-orbit" aria-hidden="true">
            SAAS · CLOUD · AI · DEVOPS ·
          </div>
        </section>
        <section className="manifesto" aria-label="Engineering philosophy">
          <div className="manifesto-line manifesto-line-a">
            THOUGHTFUL SYSTEMS — BUILT TO SCALE —
          </div>
          <div className="manifesto-line manifesto-line-b">FROM PRODUCT IDEA — TO PRODUCTION —</div>
        </section>
        <section id="about" className="about-story content-section" aria-labelledby="about-title">
          <div className="section-shell about-story-grid">
            <div className="about-portrait">
              <img
                src={`${import.meta.env.BASE_URL}images/mahadi-jubaer-portrait.jpg`}
                alt=""
                width="1000"
                height="1000"
                loading="lazy"
              />
              <div className="system-nodes" aria-hidden="true">
                <span>01 Interface</span>
                <span>02 API</span>
                <span>03 Data</span>
                <span>04 Infrastructure</span>
              </div>
            </div>
            <div className="about-narrative">
              <p className="section-kicker">01 / About</p>
              <h2 id="about-title">I connect every layer of a product.</h2>
              <p className="about-paragraph about-lead">
                I’m a Full-Stack Software Engineer at Alpha Net Bangladesh, working on Alora Cloud
                and related SaaS and cloud-based products.
              </p>
              <p className="about-paragraph">
                I contribute across the complete software lifecycle—from requirements and system
                architecture to frontend and backend implementation, testing, deployment, and
                infrastructure.
              </p>
              <p className="about-paragraph">
                My work combines Python and FastAPI services, React and Next.js interfaces,
                PostgreSQL and Redis data systems, and cloud-native delivery with Docker,
                Kubernetes, Linux, Git, and CI/CD.
              </p>
              <div className="about-facts">
                <div>
                  <span>Based in</span>
                  <strong>Dhaka, Bangladesh</strong>
                </div>
                <div>
                  <span>Building</span>
                  <strong>Alora Cloud</strong>
                </div>
                <div>
                  <span>Education</span>
                  <strong>BRAC University</strong>
                </div>
                <div>
                  <span>Focus</span>
                  <strong>SaaS · AI · Cloud</strong>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="tools" className="tools-stage content-section" aria-labelledby="tools-title">
          <div className="tools-header section-shell">
            <p className="section-kicker">02 / Technology system</p>
            <h2 id="tools-title">Tools I use to move ideas forward.</h2>
            <p>From interface craft to infrastructure—each tool has a role in the system.</p>
          </div>
          <div className="tech-track">
            {technologies.map((technology) => (
              <TechLogo technology={technology} key={technology.name} />
            ))}
          </div>
          <div className="tools-progress section-shell" aria-hidden="true">
            <span>SCROLL TO EXPLORE</span>
            <i />
          </div>
        </section>
        <section id="work" className="work-sequence content-section" aria-labelledby="work-title">
          <div className="section-shell">
            <div className="work-heading">
              <p className="section-kicker">03 / Selected systems</p>
              <h2 id="work-title">Built for real workflows.</h2>
              <p>
                Engineering contributions across enterprise SaaS, digital giving, and multi-tenant
                operations.
              </p>
            </div>
            <div className="project-stack">
              {projects.map((project) => (
                <article className={`project-scene project-${project.tone}`} key={project.slug}>
                  <div className="project-scene-visual">
                    <span aria-hidden="true">{project.index}</span>
                    {project.image ? (
                      <figure className="project-image">
                        <img
                          src={`${import.meta.env.BASE_URL}${project.image}`}
                          alt={project.imageAlt}
                          loading="lazy"
                        />
                        <figcaption>{project.title} / Live product</figcaption>
                      </figure>
                    ) : (
                      <div className="project-terminal" aria-hidden="true">
                        <small>{project.category}</small>
                        <strong>{project.title}</strong>
                        <div>
                          <i />
                          <i />
                          <i />
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="project-scene-copy">
                    <span>{project.index} / 03</span>
                    <p className="project-category">{project.category}</p>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <ul>
                      {project.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                      ))}
                    </ul>
                    <div className="project-scene-footer">
                      <span>{project.role}</span>
                      <a href={project.href} target="_blank" rel="noreferrer">
                        {project.linkLabel}
                        <ArrowUpRight size={18} />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section
          id="journey"
          className="journey-section content-section"
          aria-labelledby="journey-title"
        >
          <div className="section-shell">
            <p className="section-kicker">04 / Journey</p>
            <h2 id="journey-title">Learning by building.</h2>
            <div className="journey-list">
              <div className="journey-path">
                <i className="journey-path-fill" />
              </div>
              {experience.map((item, index) => (
                <article className="journey-item" key={item.title}>
                  <span className="journey-node">0{index + 1}</span>
                  <p className="journey-date">{item.date}</p>
                  <div>
                    <h3>{item.title}</h3>
                    <p className="journey-org">{item.organization}</p>
                  </div>
                  <p className="journey-summary">{item.summary}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section
          id="contact"
          className="contact-section content-section"
          aria-labelledby="contact-title"
        >
          <div className="contact-marquee" aria-hidden="true">
            <div className="contact-marquee-track">
              LET’S BUILD · LET’S SCALE · LET’S BUILD · LET’S SCALE ·
            </div>
          </div>
          <div className="section-shell contact-inner">
            <p className="section-kicker">05 / Contact</p>
            <h2 id="contact-title">Make the next system matter.</h2>
            <p>
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
          </div>
        </section>
      </main>
      <footer className="site-footer section-shell">
        <p>© {new Date().getFullYear()} Mahadi Jubaer</p>
        <p>Systems in motion. Built with intent.</p>
        <a href="#top">
          Back to top
          <ArrowUpRight size={15} />
        </a>
      </footer>
    </div>
  );
}
