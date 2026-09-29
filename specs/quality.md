# Quality Requirements

## 1. Accessibility

The target is WCAG 2.2 Level AA for all Version 1 content and functionality.

### Q-A11Y-01 — Structure

- One primary `h1` per page.
- Headings form a logical hierarchy.
- Use `header`, `nav`, `main`, `section`, `article`, and `footer` appropriately.
- Sections with navigation targets MUST have accessible names.
- A skip link MUST move focus to main content.

### Q-A11Y-02 — Keyboard and focus

- Every action is keyboard operable.
- No keyboard traps.
- Focus order follows visual/logical order.
- `:focus-visible` treatment is strongly visible with at least 3:1 contrast against adjacent colors where applicable.
- Sticky content MUST not obscure focused elements.
- Dialog/menu patterns follow appropriate ARIA behavior.

### Q-A11Y-03 — Contrast and resize

- Normal text contrast: at least 4.5:1.
- Large text contrast: at least 3:1.
- Meaningful UI component and focus boundaries: at least 3:1 where WCAG requires.
- Content remains usable at 200% browser zoom.
- Reflow works at 320 CSS pixels without two-dimensional scrolling except intrinsically two-dimensional content.

### Q-A11Y-04 — Images and icons

- Informative images have useful alternative text.
- Decorative images use empty alt.
- Icon-only controls have accessible names.
- Project screenshots are described according to their purpose.

### Q-A11Y-05 — Motion

- Reduced-motion preference is honored as specified in `interaction.md`.
- No content flashes more than permitted accessibility thresholds.
- Motion is not the only mechanism for conveying state.

### Q-A11Y-06 — Language and forms

- Document language is declared.
- Link labels make sense in context; repeated `Click here` is prohibited.
- Inputs use labels, autocomplete tokens where relevant, instructions, and associated errors.
- Status feedback uses appropriate live-region behavior without excessive announcements.

## 2. Performance

### Q-PERF-01 — Lighthouse release budgets

Test the production build in Lighthouse mobile mode. Required median/representative result after at least three runs:

- Performance: ≥ 90
- Accessibility: ≥ 95
- Best Practices: ≥ 95
- SEO: ≥ 95

### Q-PERF-02 — Core Web Vitals targets

Lab and later field data SHOULD meet the `good` thresholds:

- LCP ≤ 2.5 seconds
- INP ≤ 200 milliseconds when field data becomes available
- CLS ≤ 0.1

### Q-PERF-03 — Resource budgets

Initial production target, compressed transfer:

- JavaScript ≤ 170KB
- CSS ≤ 50KB
- Critical above-fold images ≤ 300KB combined
- Total initial page transfer ≤ 1MB
- Font files ≤ 180KB combined

A budget overrun MUST be justified in `decisions.md` and MUST not cause Lighthouse targets to fail.

### Q-PERF-04 — Loading

- No unnecessary render-blocking third-party scripts.
- Fonts use `font-display: swap` or a suitable alternative.
- Below-fold images are lazy loaded.
- Images have dimensions to prevent layout shift.
- The LCP asset is discoverable early and is not lazy loaded.

## 3. Search engine optimization

Every public page MUST provide:

- unique descriptive `<title>`;
- unique meta description;
- canonical URL after production domain is known;
- crawlable semantic content;
- correct heading structure;
- Open Graph title, description, image, URL, and type;
- Twitter/X card metadata where useful;
- favicon and application icons;
- valid `robots.txt` and sitemap for public routes.

The home page MUST include JSON-LD describing Mahadi as a `Person`, with approved name, URL, image when available, professional description, and `sameAs` links for LinkedIn and GitHub. Structured data MUST match visible content and pass Google's validator.

## 4. Social sharing

- Default social image: 1200×630 pixels.
- Important project pages SHOULD have project-specific social images.
- Social images MUST remain understandable when cropped and MUST not rely on tiny text.
- Production sharing previews MUST be checked in at least one generic Open Graph debugger or equivalent fetch inspection.

## 5. Browser and device support

Support the latest two stable major versions at release time of:

- Chrome/Chromium
- Edge
- Firefox
- Safari desktop
- Safari iOS
- Chrome Android

The site SHOULD remain readable and navigable in older evergreen browsers even if nonessential visual effects degrade.

## 6. Reliability

- Zero broken internal links.
- Zero unintended 404 assets.
- Zero uncaught console errors in primary journeys.
- All public external links checked before release.
- GitHub Pages direct navigation behavior verified for every route.
- A missing optional asset does not make text unreadable.

## 7. Privacy

- No tracking by default.
- No secrets or private identifiers.
- No form data is collected unless the form policy is implemented and disclosed.
- External services MUST be documented before inclusion.
