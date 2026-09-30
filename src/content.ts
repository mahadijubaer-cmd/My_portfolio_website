export const profile = {
  name: 'Mahadi Jubaer',
  role: 'Full-Stack Software Engineer',
  location: 'Dhaka, Bangladesh',
  email: 'mahadi.jubaer@alora.cloud',
  github: 'https://github.com/mahadijubaer-cmd',
  linkedin: 'https://www.linkedin.com/in/mahadi-jubaer-9101263a5/',
} as const;

export const projects = [
  {
    index: '01',
    slug: 'alora-cloud',
    title: 'Alora Cloud Platform',
    category: 'Enterprise platform ecosystem',
    description:
      'Contributing across development and quality engineering for an AI-native ecosystem spanning SaaS applications, shared platform services, cloud infrastructure, communications, and workflow automation.',
    role: 'Junior Developer · QA',
    tags: ['SaaS', 'Cloud-native', 'AI workflows'],
    href: 'https://alora.cloud/',
    linkLabel: 'Visit Alora Cloud',
    tone: 'blue',
  },
  {
    index: '02',
    slug: 'mohseen',
    title: 'Mohseen',
    category: 'Digital Islamic giving platform',
    description:
      'Contributing to a digital giving experience that helps donors support causes through flexible payment methods, including mobile banking, cards, bank transfer, payment gateways, and QR payments.',
    role: 'Engineering contributor',
    tags: ['Fintech', 'Payments', 'Web platform'],
    href: 'https://mohseen.bd/',
    linkLabel: 'Visit Mohseen',
    tone: 'green',
  },
  {
    index: '03',
    slug: 'smart-cafe-management',
    title: 'Smart Cafe Management',
    category: 'Multi-tenant SaaS platform',
    description:
      'A production-oriented management platform designed around multi-tenant SaaS architecture, operational workflows, secure access, and a scalable backend foundation.',
    role: 'Full-stack engineer',
    tags: ['FastAPI', 'PostgreSQL', 'Multi-tenant'],
    href: 'https://github.com/mahadijubaer-cmd/Smart_cafe_management',
    linkLabel: 'View source code',
    tone: 'amber',
  },
] as const;

export const skillGroups = [
  {
    number: '01',
    title: 'Backend',
    summary: 'APIs, authentication, real-time systems, and dependable service architecture.',
    skills: ['Python', 'FastAPI', 'Django REST', 'SQLAlchemy', 'REST APIs', 'WebSockets'],
  },
  {
    number: '02',
    title: 'Frontend',
    summary: 'Responsive interfaces built with a product mindset and maintainable foundations.',
    skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS'],
  },
  {
    number: '03',
    title: 'Data & infrastructure',
    summary: 'Cloud-native delivery, relational data, caching, containers, and automation.',
    skills: ['PostgreSQL', 'MySQL', 'Redis', 'Docker', 'Kubernetes', 'Linux', 'CI/CD'],
  },
  {
    number: '04',
    title: 'Architecture & AI',
    summary: 'Scalable SaaS systems, quality engineering, and intelligent product workflows.',
    skills: ['System design', 'Multi-tenancy', 'RAG', 'AI automation', 'API testing', 'DevOps'],
  },
] as const;

export const experience = [
  {
    date: 'May 2026 — Present',
    title: 'Junior Software Engineer',
    organization: 'Alpha Net Bangladesh',
    summary:
      'Working across full-stack product development, backend services, API and database design, real-time features, testing, containerized environments, and CI/CD for Alora Cloud and related platforms.',
  },
  {
    date: 'Dec 2025 — May 2026',
    title: 'FastAPI Developer Intern',
    organization: 'Alpha Net Bangladesh',
    summary:
      'Designed and deployed backend services and REST APIs with Python, FastAPI, and PostgreSQL, including multi-role authentication, access control, and containerized delivery.',
  },
  {
    date: '2022 — 2026',
    title: 'Bachelor of Engineering, Computer Science',
    organization: 'BRAC University',
    summary:
      'Built the computer science foundation behind my work in software engineering, systems, data, and product development.',
  },
] as const;
