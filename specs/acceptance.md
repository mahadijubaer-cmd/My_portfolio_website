# Acceptance Criteria and Definition of Done

## 1. Release gates

All applicable gates MUST pass for Version 1 release.

### Gate A — Content integrity

- [ ] A-01 All `CONTENT_REQUIRED` inputs are approved or explicitly waived.
- [ ] A-02 Name, title, biography, dates, organizations, and contact information are correct.
- [ ] A-03 Featured projects describe real work and Mahadi's actual contribution.
- [ ] A-04 No fabricated metrics, testimonials, experience, or proficiency values exist.
- [ ] A-05 Resume is current and public-safe.
- [ ] A-06 No placeholder or private content exists.

### Gate B — Product behavior

- [ ] B-01 Hero communicates identity, role, value, Work action, and Resume action.
- [ ] B-02 Work, About, Skills, Journey, Contact, and Footer satisfy `product.md`.
- [ ] B-03 Navigation reaches each section and direct fragments work.
- [ ] B-04 Every rendered link points to a valid destination.
- [ ] B-05 Contact offers at least one reliable direct method.
- [ ] B-06 Optional data and links are omitted cleanly.
- [ ] B-07 Project routes, if included, survive direct loading and refresh.
- [ ] B-08 Unknown routes show a useful 404 when routing is included.

### Gate C — Responsive design

- [ ] C-01 No unintended horizontal scrolling at 320px.
- [ ] C-02 Layout passes the responsive matrix in `testing.md`.
- [ ] C-03 Content remains usable at 200% zoom.
- [ ] C-04 Touch controls are at least 44×44 CSS pixels where practical.
- [ ] C-05 Long approved content wraps without clipping or overlap.
- [ ] C-06 Both themes are complete and visually coherent.

### Gate D — Accessibility

- [ ] D-01 WCAG 2.2 AA requirements in `quality.md` are met.
- [ ] D-02 Keyboard-only testing completes every primary journey.
- [ ] D-03 Focus is visible, ordered, and not obscured.
- [ ] D-04 Skip link, headings, landmarks, and names are correct.
- [ ] D-05 Images and icons have appropriate accessible alternatives/names.
- [ ] D-06 Color contrast passes in both themes.
- [ ] D-07 Reduced motion removes nonessential movement without hiding content.
- [ ] D-08 Automated accessibility scan has no serious or critical violations.

### Gate E — Performance

- [ ] E-01 Lighthouse Performance is at least 90 under the defined procedure.
- [ ] E-02 Other Lighthouse categories are at least 95.
- [ ] E-03 LCP and CLS meet targets in representative lab testing.
- [ ] E-04 Resource budgets pass or approved deviations are documented.
- [ ] E-05 Images are responsive, dimensioned, and correctly prioritized/lazy loaded.
- [ ] E-06 Fonts are optimized and do not cause unacceptable layout movement.

### Gate F — SEO and sharing

- [ ] F-01 Every public route has unique title and description.
- [ ] F-02 Canonical URLs point to production.
- [ ] F-03 Open Graph and social image previews work.
- [ ] F-04 Person JSON-LD is valid and matches visible content.
- [ ] F-05 `robots.txt` and sitemap are publicly reachable and correct.
- [ ] F-06 Semantic page structure is crawlable without interaction.

### Gate G — Engineering quality

- [ ] G-01 Strict type check, lint, formatting check, tests, and build pass.
- [ ] G-02 No secrets, private data, or high/critical unresolved production vulnerabilities exist.
- [ ] G-03 No uncaught console errors occur in primary journeys.
- [ ] G-04 Content is structured separately from presentation.
- [ ] G-05 Dependencies comply with `architecture.md`.
- [ ] G-06 Specification and implementation agree.

### Gate H — Production delivery

- [ ] H-01 GitHub Pages deploy completes from `main`.
- [ ] H-02 Public URL loads over HTTPS.
- [ ] H-03 Production base paths and hard refreshes work.
- [ ] H-04 Post-deployment smoke test passes.
- [ ] H-05 Production deployment maps to a known commit and can be rolled back.

## 2. Requirement traceability

| Area | Normative source | Primary verification |
| --- | --- | --- |
| Audience/journeys | `product.md` | Manual journey and E2E tests |
| Content truth | `content.md` | Owner review and content QA |
| Visual system | `design.md` | Responsive and visual QA |
| Interaction | `interaction.md` | Keyboard, E2E, reduced-motion tests |
| Code architecture | `architecture.md` | Review, static checks, production build |
| Accessibility | `quality.md` | Automated plus manual accessibility tests |
| Performance | `quality.md` | Lighthouse and bundle inspection |
| SEO | `quality.md` | DOM/metadata/validator inspection |
| Testing process | `testing.md` | CI evidence and signed checklist |
| Deployment | `delivery.md` | Workflow and production smoke test |

## 3. Definition of done for an individual feature

A feature is done only when:

1. it satisfies its applicable specification requirements;
2. real or explicitly marked development content is used appropriately;
3. responsive, keyboard, theme, and reduced-motion states are implemented;
4. tests proportional to its behavior are added and passing;
5. no accessibility or performance regression is introduced;
6. documentation/specification is updated when behavior changed;
7. implementation is reviewed in the production build, not only development mode.

## 4. Final approval

Mahadi must approve:

- public content and professional positioning;
- final visual direction;
- featured project selection/order;
- resume and contact exposure;
- production launch.

Technical completion alone does not authorize publication of unapproved personal content.
