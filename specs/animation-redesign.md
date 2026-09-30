# Expressive Portfolio Redesign and GSAP Implementation Plan

Status: **Approved implementation plan**

Version: **1.0.0**

Date: **2026-09-30**

## 1. Objective

Transform the existing clean editorial portfolio into a distinctive creative-engineering experience with stronger visual rhythm, playful but controlled motion, and an immediately recognizable technology identity.

The redesign is inspired by the qualities of `https://www.runrobrun.com/` and the GSAP ecosystem. It MUST NOT clone the reference site's artwork, wording, music concept, exact layout, animation sequence, or proprietary assets.

The desired outcome is:

- as expressive as a creative developer portfolio;
- as credible as a senior engineering profile;
- visually memorable within the first 15 seconds;
- usable without motion, pointer hover, or high-end hardware;
- focused on Mahadi's real work rather than decorative spectacle.

## 2. Reference analysis

### 2.1 Qualities to adapt from Run Rob Run

The reference establishes its identity through:

- a large, typography-led opening composition;
- a dual professional identity presented as a visual statement;
- rhythmic repetition and kinetic headline treatments;
- portrait sequences used as motion material rather than a static avatar;
- numbered expertise statements with generous scale and pacing;
- a tool showcase that behaves like an interactive reel;
- cinematic, full-width work presentation;
- oversized section transitions and unconventional whitespace;
- a strong closing statement and direct contact invitation.

These are principles to reinterpret for Mahadi's identity as a full-stack and platform engineer.

### 2.2 GSAP capabilities selected

The redesign will use:

- GSAP core for timelines, transforms, staggering, and controlled easing;
- `@gsap/react` and `useGSAP()` for component-scoped setup and automatic cleanup;
- ScrollTrigger for section progress, pinned scenes, scrubbed movement, and entrance triggers;
- SplitText for responsive masked line/word reveals if the installed GSAP distribution supports it cleanly;
- `gsap.matchMedia()` for desktop/mobile and reduced-motion variants;
- CSS transitions for simple button and color-state changes where GSAP adds no value.

GSAP animations MUST be scoped and reverted during React unmount. ScrollTrigger MUST be registered explicitly so production tree shaking cannot remove it.

## 3. Revised creative direction

### 3.1 Concept

**Systems in motion.**

Mahadi builds connected systems: interface to API, API to data, application to infrastructure, and idea to production. Motion should visualize those relationships.

The design language combines:

- editorial typography;
- engineering diagrams and connection lines;
- modular cards resembling system nodes;
- bold lime/acid-green accents;
- deep ink and warm paper themes;
- large monochrome technology marks;
- portrait-led human moments;
- measured horizontal and vertical motion.

### 3.2 Personality

The site should feel:

- inventive, not chaotic;
- technical, not corporate;
- confident, not boastful;
- cinematic, not slow;
- playful in transitions, precise in information.

### 3.3 Visual constants

- Preserve the existing dark/light theme foundation.
- Retain electric lime as the signature accent.
- Introduce one supporting electric blue for infrastructure/data scenes.
- Use a high-contrast grotesk display face and a neutral body face.
- Use oversized type up to approximately 14vw in transitional scenes.
- Use visible grid lines, system-node dots, arrows, counters, and technical labels.
- Prefer rectangular/full-bleed imagery over generic glass cards.

## 4. Revised page experience

### 4.1 Loading introduction

Purpose: establish polish while allowing critical fonts and portrait media to settle.

Behavior:

1. A compact `MJ` mark and numeric progress indicator appear.
2. A line or system path draws from 0 to 100.
3. The overlay splits vertically or masks upward to reveal the hero.
4. Total duration MUST be 1.2–1.8 seconds on a warm cache.
5. The intro MUST run only once per session.
6. If reduced motion is requested, show a 150ms fade with no counter animation.
7. The loader MUST never wait indefinitely for noncritical external resources.

### 4.2 Hero: dual engineering identity

Replace the static split hero with a stage-like composition:

- Top line: `FULL-STACK` enters from the left.
- Bottom line: `SYSTEMS ENGINEER` or `SOFTWARE ENGINEER` enters from the right.
- Mahadi's portrait sits between or behind the words with controlled clipping.
- A small rotating/orbiting label communicates `Dhaka · SaaS · Cloud · AI`.
- Pointer movement MAY add a maximum 8–12px portrait/parallax offset on fine-pointer devices.
- A scroll cue transitions into the architecture statement.
- Hero text MUST remain semantic HTML and visible before JavaScript enhancement.

Recommended copy:

> FULL-STACK / SOFTWARE ENGINEER

Supporting line:

> Building scalable SaaS, cloud, and AI-enabled systems from interface to infrastructure.

### 4.3 Engineering manifesto transition

Create a full-width repeated phrase sequence inspired by the reference's rhythmic statements:

- `THOUGHTFUL SYSTEMS — BUILT TO SCALE`
- `FROM PRODUCT IDEA — TO PRODUCTION`

Each phrase appears twice in opposing directions. Scroll progress moves the lines horizontally by a controlled amount. Movement MUST stop under reduced motion and MUST not create horizontal page overflow.

### 4.4 About: pinned portrait and narrative

Desktop behavior:

- Pin the portrait panel for approximately one viewport of scroll.
- Reveal About paragraphs one at a time beside it.
- Use a subtle image crop/scale transition as the narrative advances.
- Animate factual labels—Dhaka, Alpha Net Bangladesh, Alora Cloud, BRAC University—as connected system nodes.

Mobile behavior:

- No pinning.
- Portrait and text remain in normal document flow.
- Use short line-mask reveals or no reveal under reduced motion.

### 4.5 Technology orbit and tool reel

This is the primary new tool-logo experience.

#### Desktop

- A pinned horizontal reel progresses through four groups: Frontend, Backend, Data, Cloud/DevOps.
- Each technology is represented by an authentic monochrome SVG logo, human-readable label, and category.
- The active logo scales from approximately 0.72 to 1, sharpens from muted to full contrast, and reveals a concise capability statement.
- Background connection lines respond to active group progress.
- The reel supports wheel/scroll progress; it MUST NOT require dragging.

#### Mobile

- Render a two-column or horizontal snap list in normal flow.
- No pinned horizontal scrolling.
- Logos remain at least 40px visual size with readable labels.

#### Initial logo set

Frontend:

- React
- Next.js
- TypeScript
- JavaScript
- Tailwind CSS

Backend:

- Python
- FastAPI
- Django
- REST API symbol (custom neutral icon, not a brand)

Data:

- PostgreSQL
- MySQL
- Redis

Cloud and delivery:

- Docker
- Kubernetes
- Linux
- Git
- GitHub Actions or a neutral CI/CD symbol

AI architecture:

- Use custom neutral visual symbols for RAG, agents, AI automation, and system design rather than implying endorsement by a model vendor.

#### Logo sourcing

- Prefer the tree-shakeable `simple-icons` npm package.
- Import only selected icon objects; MUST NOT bundle the complete icon catalog.
- Render paths through a local accessible `TechLogo` component.
- Every logo MUST have a visible text label; logos are not sufficient identification by themselves.
- Use monochrome theme-aware fills by default. Brand color MAY appear on hover/active state if contrast remains valid.
- Review the license/trademark metadata and official brand guidelines for each selected mark.
- Do not imply sponsorship, certification, or partnership.

### 4.6 Selected work: cinematic project sequence

Replace stacked static project cards with a desktop scroll sequence:

- Section begins with a large `SELECTED SYSTEMS` transition.
- One project visual is pinned while project index, title, category, and description update.
- Transition between projects uses clipping/masking and 3–5% media scale, not 3D spinning.
- A progress counter changes `01 / 03`, `02 / 03`, `03 / 03`.
- Project colors remain distinct: Alora blue, Mohseen green, SCMS amber.
- External links remain visible and keyboard accessible throughout.
- When real screenshots arrive, replace concept panels without changing layout contracts.

Mobile MUST render ordinary stacked project cards with lightweight entrance animation. The portfolio MUST not trap mobile users in a long pinned scene.

### 4.7 Journey: animated system timeline

- Use one vertical system path connecting Education → Internship → Junior Engineer.
- Draw the path as the section enters.
- Activate each node as it crosses a viewport threshold.
- Keep complete text in normal flow.
- Do not animate dates or content in a way that delays reading.

### 4.8 Contact finale

- Use an oversized looping phrase such as `LET'S BUILD · LET'S SCALE ·` behind the contact content.
- Pointer proximity MAY deform or attract the email button by no more than 6px.
- The email remains a normal link.
- GitHub and LinkedIn use visible labels.
- The closing scene MUST not autoplay audio.

## 5. Motion language

### 5.1 Easing

- Primary reveal: `power3.out`.
- Editorial mask: `power4.out`.
- Interface feedback: `power2.out`.
- Continuous/scrubbed movement: `none` or carefully mapped progress.
- Elastic/bounce easing MAY appear only in small logo/node accents.

### 5.2 Timing

- Hover response: 160–240ms.
- Text-line reveal: 600–900ms.
- Section transition: 700–1100ms.
- Loader: maximum 1800ms under normal conditions.
- Stagger between words/items: 20–70ms.

### 5.3 Limits

- Maximum two pinned desktop sections: tool reel and selected work.
- About MAY use a sticky CSS layout rather than a third GSAP pin.
- Maximum scrub distance per pinned sequence: approximately 250–350vh.
- No scroll hijacking, forced snapping, hidden scrollbar, or custom wheel physics.
- No continuous animation outside the hero orbit/contact marquee unless it pauses offscreen.
- No essential content may start with CSS `visibility: hidden` without an inline no-JS-safe restoration strategy.

## 6. Accessibility and reduced motion

When `prefers-reduced-motion: reduce` is active:

- skip the animated loader;
- disable SplitText movement and render original text;
- remove parallax, scrub, pinned motion scenes, magnetic buttons, and marquees;
- render tools and projects as normal grids/stacks;
- preserve all content, links, labels, order, and visual hierarchy;
- allow brief opacity changes of 100–150ms only.

Additional requirements:

- Split text must retain an accessible name; nested links require a separate screen-reader-safe treatment.
- Focus order follows DOM order, never visual animation order.
- Hover effects have focus-visible equivalents.
- Animated logos have visible text labels.
- Keyboard users can reach every project and tool link without traversing decorative elements.
- Motion must not flash, oscillate rapidly, or create vestibular zoom effects.

## 7. Technical architecture change

### 7.1 Dependencies

Add:

- `gsap`
- `@gsap/react`
- `simple-icons`

Remove after migration:

- `motion`

The project MUST NOT ship two general-purpose animation engines.

### 7.2 Component architecture

```text
src/
├── animation/
│   ├── gsap.ts                 # plugin registration
│   ├── motion-preferences.ts   # shared media-query behavior
│   └── refresh.ts              # font/image-aware ScrollTrigger refresh
├── components/
│   ├── animation/
│   │   ├── IntroLoader.tsx
│   │   ├── SplitHeading.tsx
│   │   ├── KineticMarquee.tsx
│   │   └── SystemPath.tsx
│   ├── sections/
│   │   ├── HeroStage.tsx
│   │   ├── Manifesto.tsx
│   │   ├── AboutStory.tsx
│   │   ├── ToolReel.tsx
│   │   ├── ProjectSequence.tsx
│   │   ├── JourneyTimeline.tsx
│   │   └── ContactFinale.tsx
│   └── ui/
│       └── TechLogo.tsx
├── data/
│   └── technologies.ts
└── hooks/
    ├── useFinePointer.ts
    └── useSessionIntro.ts
```

### 7.3 GSAP lifecycle

- Register plugins once in `src/animation/gsap.ts`.
- Every animated section owns a root `ref`.
- Use `useGSAP(callback, { scope: rootRef, dependencies, revertOnUpdate: true })`.
- Create responsive variants through `gsap.matchMedia()` inside the scoped callback.
- Return/revert every SplitText instance and ScrollTrigger.
- Refresh ScrollTrigger after fonts and critical images settle.
- Do not query global class names from unrelated components.
- Do not store GSAP timeline objects in React state.

### 7.4 Progressive enhancement

- Server/static markup renders all content visibly.
- GSAP applies starting transforms with `gsap.set()` only after initialization.
- Add an `is-motion-ready` root class only after timelines are constructed.
- If JavaScript or a plugin fails, the unanimated site remains complete.

## 8. Performance budget

The current quality thresholds remain binding. Additional redesign budgets:

- GSAP and selected plugins SHOULD add no more than 70KB gzip.
- Selected technology logo code SHOULD add no more than 25KB gzip.
- Total initial JavaScript target remains at or below 170KB gzip; use code splitting if needed.
- No canvas/WebGL dependency in this redesign.
- Only animate `transform`, `opacity`, `clip-path`, or SVG stroke properties where practical.
- Avoid animating layout properties such as width, height, top, and left during scroll.
- Use `will-change` only while an element is actively animating.
- Kill offscreen perpetual animations.
- Test CPU-throttled mobile behavior and low-power mode manually.

## 9. Implementation phases

### Phase 0 — Baseline and safeguards

1. Capture current desktop/mobile screenshots and Lighthouse baseline.
2. Add visual regression screenshots for 390px and 1440px.
3. Preserve current content tests and production fallback deployment.
4. Add a feature branch for the redesign.

Exit criteria: current behavior is reproducibly testable.

### Phase 1 — Animation foundation

1. Install GSAP, `@gsap/react`, and Simple Icons.
2. Add plugin registration and scoped animation utilities.
3. Implement motion preference helpers.
4. Remove Motion usage section by section, then uninstall it.
5. Add tests proving content remains visible when animation initialization fails.

Exit criteria: GSAP lifecycle and reduced-motion infrastructure pass tests.

### Phase 2 — Hero and identity system

1. Build session loader.
2. Recompose hero with split directional typography and portrait mask.
3. Add restrained pointer parallax.
4. Add manifesto transition.
5. Validate keyboard, zoom, reduced motion, and mobile wrapping.

Exit criteria: hero communicates identity immediately and introduces no layout shift.

### Phase 3 — Technology reel

1. Create typed technology data.
2. Build accessible `TechLogo` from selected Simple Icons.
3. Implement desktop pinned reel.
4. Implement normal-flow mobile fallback.
5. Add brand/trademark attribution note to internal documentation.

Exit criteria: every logo has a readable name and all priority technologies are represented.

### Phase 4 — Work and About scenes

1. Build responsive About story.
2. Convert project stack into desktop pinned sequence.
3. Preserve mobile stacked cards.
4. Add project progress and mask transitions.
5. Insert real screenshots later through the existing media contract.

Exit criteria: all project links work and project content remains truthful.

### Phase 5 — Journey and contact polish

1. Implement SVG/system-path timeline.
2. Build contact marquee and small magnetic response.
3. Unify all easing, durations, and section transitions.
4. Remove experimental or redundant effects.

Exit criteria: one coherent motion language is visible across the page.

### Phase 6 — Hardening and release

1. Run lint, typecheck, unit tests, production build, and dependency audit.
2. Add automated reduced-motion and mobile layout tests.
3. Run axe against both themes and mobile menu states.
4. Test Chrome, Firefox, Edge, Safari/iOS, and Chrome Android.
5. Run three Lighthouse mobile passes and use the median.
6. Inspect memory/CPU behavior during pinned scenes.
7. Deploy preview, perform visual review, then publish.

Exit criteria: all applicable `acceptance.md` gates pass.

## 10. Testing matrix specific to motion

| Scenario | Expected result |
| --- | --- |
| JavaScript disabled/fails | All profile content and links remain visible |
| Reduced motion | No loader sequence, pinning, scrub, marquee, or parallax |
| 320px width | No horizontal overflow or clipped split text |
| 200% zoom | Reading order and controls remain usable |
| Keyboard only | No decorative animation receives focus; all actions reachable |
| Touch device | No hover-only content; projects and tools usable directly |
| Slow CPU | Scroll remains responsive without sustained long tasks |
| Resize/orientation change | Split text and ScrollTriggers refresh without overlap |
| Browser back/forward | Scroll and navigation remain predictable |
| Print/save PDF | Content appears without animation transforms |

## 11. Acceptance criteria

- The redesign is recognizably Mahadi's engineering identity, not a copy of Run Rob Run.
- The hero uses expressive typography and portrait motion while preserving immediate clarity.
- Docker, Next.js, React, TypeScript, Python, FastAPI, PostgreSQL, Redis, Kubernetes, Linux, and Git are represented with labeled logos.
- GSAP is the only general animation engine in the final bundle.
- At least one meaningful text reveal, one pinned tool reel, one project transition system, and one SVG path animation are implemented.
- Mobile uses simplified normal-flow alternatives for pinned desktop scenes.
- Reduced-motion mode exposes the complete experience without spatial motion.
- No content is permanently hidden if IntersectionObserver, ScrollTrigger, SplitText, or local storage fails.
- Lighthouse and bundle budgets in `quality.md` pass.
- All existing contact, project, theme, SEO, and accessibility behavior remains functional.

## 12. Non-goals

- Copying another creator's visual assets, project layouts, text, or exact motion choreography.
- Autoplay music or sound effects.
- WebGL/Three.js merely for visual novelty.
- A custom cursor that replaces expected browser behavior.
- Scroll hijacking or mandatory drag interaction.
- Adding logos for tools Mahadi cannot credibly discuss or demonstrate.
