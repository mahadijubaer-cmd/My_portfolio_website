# Product Requirements

## 1. Audiences

### P-AUD-01 — Recruiter or hiring manager

Needs to identify role fit, technical capability, project quality, location/availability, resume, and contact details quickly.

### P-AUD-02 — Potential client

Needs to understand what Mahadi can build, whether the work looks credible, how he approaches projects, and how to initiate contact.

### P-AUD-03 — Engineer or collaborator

Needs project context, technology choices, source links, and evidence of engineering quality.

### P-AUD-04 — Search/social visitor

May land on a deep project URL and MUST still receive identity, navigation, context, and contact access.

## 2. Primary jobs to be done

- P-JOB-01: Determine Mahadi's professional role and value proposition.
- P-JOB-02: Review his best work and understand his contribution.
- P-JOB-03: Verify capabilities through source code, live demos, case studies, and background.
- P-JOB-04: Download or open his resume.
- P-JOB-05: Contact him through a reliable channel.

## 3. Information architecture

### P-IA-01 — Global navigation

The home-page navigation MUST link to:

1. Work
2. About
3. Skills
4. Journey
5. Contact

It MUST also expose a Resume action, theme control, and an accessible mobile menu where needed.

### P-IA-02 — Home page order

The default reading order MUST be:

1. Header/navigation
2. Hero
3. Selected Work
4. About
5. Skills
6. Journey
7. Contact
8. Footer

The order MAY change only through a specification amendment based on real content priorities.

### P-IA-03 — Project routes

Project case studies SHOULD use human-readable routes such as `/projects/project-slug/`. A project without enough case-study material MUST remain a home-page project card and MUST NOT receive a thin detail page.

## 4. Global functional requirements

### P-FUN-01 — Persistent identity

The header MUST display Mahadi's name or approved monogram and return to the home-page top.

### P-FUN-02 — Navigation

Navigation links MUST scroll or route to the intended content, update the URL meaningfully where appropriate, and never rely on JavaScript-only pseudo-links.

### P-FUN-03 — Resume

The Resume action MUST point to an approved, current PDF. The UI MUST state whether it opens or downloads. The file MUST be text-selectable where possible and MUST NOT expose private data not intended for public use.

### P-FUN-04 — External links

GitHub, LinkedIn, live-demo, and source links MUST use valid anchors. Links opening a new tab MUST indicate that behavior to assistive technology and use `rel="noopener noreferrer"`.

### P-FUN-05 — Contact

At least one reliable contact method MUST be visible in the Contact section. Email MUST be a functional `mailto:` link or an explicitly copyable address. A form MAY be introduced only under the conditions in `interaction.md`.

### P-FUN-06 — No dead ends

Every project detail page MUST provide navigation back to Selected Work and access to Contact.

## 5. Section requirements

### P-SEC-01 — Hero

The initial viewport MUST communicate:

- full approved name;
- approved professional title;
- one concise value proposition;
- primary `View selected work` action;
- secondary Resume action;
- location/availability only if approved;
- GitHub and LinkedIn access.

The hero MUST NOT use a typewriter effect for essential information. Decorative copy MAY animate only after it is present in the accessibility tree and readable without animation.

### P-SEC-02 — Selected Work

The section MUST contain 3–4 projects at launch if that number of credible projects exists. Each card MUST include:

- project title;
- concise outcome- or purpose-oriented description;
- project image with meaningful alternative text or empty alt when decorative;
- Mahadi's role;
- selected technology labels;
- available actions: case study, live site, and/or source;
- an honest status when the project is not deployed.

Projects MUST be ordered by quality and relevance, not automatically by date.

### P-SEC-03 — About

The About section MUST use first-person, specific language. It SHOULD explain specialization, approach, current direction, and one appropriate personal detail. It MUST NOT exceed approximately 180 words without a strong content reason.

### P-SEC-04 — Skills

Skills MUST be grouped by function, such as Frontend, Backend, Languages, Data, and Workflow. A skill MUST appear only if Mahadi can discuss or demonstrate it. Numeric proficiency percentages MUST NOT be used.

### P-SEC-05 — Journey

Journey MUST present approved experience, education, freelance work, certifications, or significant milestones chronologically. Each entry MUST include title, organization, date range, and concise evidence-oriented details where available.

### P-SEC-06 — Contact

Contact MUST include a direct invitation, availability statement if applicable, email, LinkedIn, and GitHub. It SHOULD set an expectation for the kinds of opportunities Mahadi welcomes.

### P-SEC-07 — Footer

The footer MUST contain the current year, Mahadi's name, key social links, and a return-to-top mechanism. It MAY include a short build-credit line.

## 6. Project case-study requirements

A case study MUST contain:

- title, summary, and representative image;
- project status and date;
- problem or purpose;
- target user where known;
- Mahadi's exact role and contribution;
- constraints;
- relevant design/engineering decisions;
- implementation summary and stack;
- outcome using verifiable evidence;
- lessons or future improvements;
- live/source links when available;
- related project or return navigation.

Case studies MUST clearly distinguish solo work from team work. Metrics MUST include context and a source or MUST be omitted.

## 7. User journeys

### P-JRN-01 — Recruiter scan

Landing → understands role in Hero → reviews first project → scans Skills/Journey → opens Resume or Contact.

### P-JRN-02 — Technical review

Landing/deep link → reads project context → opens live/source link → returns to portfolio → contacts Mahadi.

### P-JRN-03 — Mobile contact

Landing on a 320–430px device → opens menu or scrolls → reaches Contact → activates email/LinkedIn without precision tapping.

## 8. Error and empty states

- Missing optional links MUST not render empty controls.
- A broken project image MUST have useful textual context and must be caught before release.
- If routing is used, unknown routes MUST render a branded 404 with Home and Contact actions.
- Content still being prepared MUST not be represented by `Lorem ipsum`, `Coming soon` cards, or fictional examples in production.
