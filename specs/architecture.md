# Technical Architecture Specification

## 1. Required stack

The initial implementation MUST use:

- React
- TypeScript with strict checking
- Vite
- Tailwind CSS or a documented equivalent token-based CSS approach
- Motion for React/Framer Motion only where CSS is insufficient
- Lucide React or a similarly accessible SVG icon set
- npm with a committed lockfile
- GitHub Actions for validation and deployment
- GitHub Pages for Version 1 hosting

Any replacement of these choices is a material decision and MUST be recorded in `decisions.md`.

## 2. Architecture principles

- Static-first; no production server is required.
- Content separated from components.
- Semantic HTML before custom behavior.
- Components remain small, composable, and typed.
- Dependencies require a demonstrated benefit.
- No runtime dependency on LinkedIn or GitHub APIs.
- No secrets in browser code, repository history, or build output.

## 3. Expected repository structure

```text
/
├── .github/workflows/
├── public/
│   ├── favicon assets
│   ├── robots.txt
│   └── resume/
├── specs/
├── src/
│   ├── assets/
│   │   ├── profile/
│   │   └── projects/
│   ├── components/
│   │   ├── layout/
│   │   ├── sections/
│   │   └── ui/
│   ├── data/
│   ├── hooks/
│   ├── pages/
│   ├── styles/
│   ├── types/
│   ├── App.tsx
│   └── main.tsx
├── tests/
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

Directories MAY be simplified where a category has only one trivial file; separation of content, sections, reusable UI, and assets MUST remain clear.

## 4. Rendering and routing

- The home page MUST work as a static entry point.
- If project pages are implemented with client-side routing on GitHub Pages, direct URL and refresh behavior MUST be solved and tested.
- Preferred solutions are static generation/pre-rendering or a deliberate GitHub Pages SPA fallback.
- Hash routing SHOULD be avoided for public project pages unless deployment constraints make it necessary and the decision is documented.
- Every public route MUST have a meaningful document title and metadata. If client rendering cannot provide crawlable route metadata, project routes MUST be pre-rendered or omitted from Version 1.

## 5. Data and validation

- Content SHOULD be exported from typed modules matching `content.md`.
- Build-time validation MUST catch missing required fields, duplicate slugs, invalid project ordering, and malformed URLs where feasible.
- Components MUST not contain fallback fictional content.
- Dates SHOULD use machine-readable values and human-readable presentation.

## 6. Styling

- Design tokens MUST define colors, typography, spacing, radii, shadows, layers, and motion.
- Semantic token names are required; raw values SHOULD not be repeated across components.
- Component variants SHOULD use a consistent utility such as `class-variance-authority` only if warranted.
- Arbitrary values SHOULD be limited to cases not represented by tokens.
- Global CSS MUST cover font loading, document defaults, focus behavior, reduced motion, and theme variables.

## 7. Media pipeline

- Source photographs and screenshots SHOULD be retained outside the shipped bundle if very large.
- Production raster images SHOULD use AVIF or WebP with appropriate dimensions.
- Hero/LCP imagery MUST not be lazy loaded and SHOULD use suitable priority hints.
- Below-fold images MUST use native lazy loading.
- Every `img` MUST provide intrinsic width and height.
- Responsive images SHOULD use `srcset`/`sizes` or build-tool equivalents.
- SVG icons SHOULD be inline components; icon-only controls require accessible names.

## 8. Dependency policy

- Do not add a package for behavior achievable clearly in a few lines of platform code.
- Production dependencies MUST be maintained, license-compatible, and necessary.
- Package versions MUST be locked.
- High/critical production dependency vulnerabilities MUST block release unless reviewed and documented.

## 9. Security and privacy

- Use HTTPS in production.
- Add `rel="noopener noreferrer"` to untrusted new-tab links.
- Do not use `dangerouslySetInnerHTML` for portfolio content.
- Do not expose environment secrets through `VITE_*` variables.
- No analytics, cookies, fingerprinting, or tracking in Version 1.
- If analytics is later added, privacy and consent requirements MUST be specified first.
- A Content Security Policy SHOULD be introduced if compatible with GitHub Pages and chosen assets.

## 10. Failure resilience

- Core identity, project text, and links MUST be server-delivered/static HTML where the chosen build permits.
- Failure of animation code MUST not hide content.
- Failure of local storage MUST not break theme controls.
- Missing optional data MUST omit the associated component cleanly.
- No unhandled console errors are permitted in production journeys.

## 11. Code quality

- TypeScript `strict` MUST be enabled.
- ESLint MUST run without errors.
- Formatting MUST be deterministic.
- Production build MUST complete without warnings that indicate broken behavior or oversized accidental assets.
- Reusable components MUST have clear props and avoid implicit global coupling.
