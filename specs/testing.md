# Verification and Test Specification

## 1. Test layers

### T-LAY-01 — Static checks

Required on every pull request and deployment:

- dependency installation from lockfile;
- TypeScript type check;
- ESLint;
- formatting check;
- production build;
- content/schema validation;
- broken internal reference check where tooling permits.

### T-LAY-02 — Unit/component tests

Tests MUST cover logic with meaningful behavior, including:

- theme preference resolution and persistence;
- project ordering/filtering if present;
- conditional rendering of optional links;
- content validation;
- menu open/close and keyboard behavior;
- contact-form state logic if a form is introduced.

Purely visual static wrappers do not require superficial tests.

### T-LAY-03 — End-to-end tests

Automated browser tests SHOULD cover:

1. Home page loads with the approved identity.
2. Skip link reaches main content.
3. Navigation reaches every section.
4. Mobile menu opens, closes, handles Escape, and follows focus rules.
5. Theme switches and survives reload.
6. Featured projects expose the correct available links.
7. Resume URL returns the expected document.
8. Contact email action is available.
9. Unknown route returns the designed 404 when routing exists.
10. Reduced-motion mode does not hide content.

### T-LAY-04 — Automated accessibility

Run axe or an equivalent tool against:

- home page in both themes;
- mobile menu open state;
- each project page template;
- 404 page;
- form error and success states if implemented.

Automated tests do not replace manual accessibility testing.

## 2. Manual accessibility checklist

Before release, a tester MUST:

- navigate all functionality using keyboard only;
- verify focus is always visible;
- verify logical focus order;
- test skip link and anchor destinations;
- test mobile menu focus/Escape behavior;
- inspect landmarks, headings, names, roles, and key announcements with a screen reader;
- verify browser zoom at 200%;
- verify reflow at 320 CSS pixels;
- enable reduced motion and confirm compliance;
- confirm text and component contrast in both themes;
- confirm meaningful images have appropriate alt text;
- confirm external/new-tab links are understandable.

Recommended combinations are NVDA + Chrome/Firefox on Windows and VoiceOver + Safari on iOS/macOS when available.

## 3. Responsive matrix

At minimum, manually inspect:

| Viewport | Orientation/use |
| --- | --- |
| 320×568 | Small mobile edge case |
| 375×667 | Common mobile |
| 430×932 | Large mobile |
| 768×1024 | Tablet portrait |
| 1024×768 | Tablet/compact landscape |
| 1280×800 | Laptop |
| 1440×900 | Desktop |

At each size verify header, hero, project cards, typography, timeline, contact actions, footer, theme, and overflow.

## 4. Content QA

- Compare all personal facts with approved source material.
- Confirm spelling of name, organizations, technologies, and project titles.
- Confirm all dates and current-status labels.
- Confirm solo/team attribution.
- Confirm metrics and testimonials have evidence/permission.
- Open every internal, external, live, source, resume, social, and email link.
- Ensure no placeholder copy, sample data, debug labels, or private information remains.

## 5. Visual QA

- Compare both themes across the responsive matrix.
- Verify no layout shift from images or fonts beyond the CLS budget.
- Verify hover and focus parity.
- Verify image cropping preserves important content.
- Verify browser fallback fonts do not break layout.
- Verify long project titles, long organization names, and wrapped skill labels.
- Verify content with images disabled.

## 6. Performance procedure

1. Build the production bundle.
2. Serve the exact production output locally or from a preview URL.
3. Run Lighthouse mobile at least three times in a stable environment.
4. Record the median result and investigate material variance.
5. Inspect LCP element, unused JavaScript, image sizing, font loading, and layout shifts.
6. Verify budgets in `quality.md`.

One anomalously high run MUST NOT be used to mask consistently failing performance.

## 7. Deployment smoke test

After deployment:

- load the canonical URL over HTTPS;
- hard-refresh every route;
- verify assets load under the configured base path;
- verify navigation and fragments;
- verify Resume, GitHub, LinkedIn, live, source, and email links;
- verify social metadata from the public URL;
- verify `robots.txt` and sitemap;
- verify no production console errors;
- verify theme persistence;
- test one mobile and one desktop browser.

## 8. Defect severity

- **Blocker:** deployment unavailable, false public claim, leaked secret/private data, inaccessible core journey, broken primary contact/resume, or data loss.
- **Critical:** major section unavailable, routing refresh failure, severe mobile overflow, Lighthouse gate materially missed, or repeated runtime error.
- **Major:** incorrect content, broken secondary link, keyboard/focus defect, poor contrast, or substantial visual regression.
- **Minor:** cosmetic inconsistency that does not impede comprehension or action.

No Blocker, Critical, or Major defects may remain open at release.
