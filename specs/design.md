# Design System Specification

## 1. Creative direction

The product MUST feel modern, assured, technical, and human. The selected direction is **modern editorial developer**: strong typography, disciplined grid, restrained depth, high-quality project imagery, and one vivid accent.

The design MUST NOT resemble a generic template through excessive gradients, floating technology logos, skill meters, terminal clichés, or indiscriminate glassmorphism.

## 2. Color system

Final values MAY be tuned during visual implementation, but semantic roles and contrast requirements are fixed.

### Dark theme baseline

| Token | Baseline | Purpose |
| --- | --- | --- |
| `--color-bg` | `#0A0B0D` | Page background |
| `--color-surface` | `#121418` | Cards and elevated regions |
| `--color-surface-2` | `#191C21` | Hover/elevated surface |
| `--color-text` | `#F4F1E8` | Primary text |
| `--color-text-muted` | `#A8ADB7` | Secondary text |
| `--color-border` | `#2A2E35` | Dividers and card borders |
| `--color-accent` | `#B8FF5A` | Primary accent |
| `--color-accent-ink` | `#101407` | Text on accent |
| `--color-danger` | `#FF6B6B` | Errors only |

### Light theme baseline

| Token | Baseline | Purpose |
| --- | --- | --- |
| `--color-bg` | `#F6F4EE` | Page background |
| `--color-surface` | `#FFFFFF` | Cards and elevated regions |
| `--color-surface-2` | `#ECE9E1` | Hover/elevated surface |
| `--color-text` | `#15171A` | Primary text |
| `--color-text-muted` | `#555C66` | Secondary text |
| `--color-border` | `#D8D5CD` | Dividers and card borders |
| `--color-accent` | `#4D7800` | Accessible accent text/control |
| `--color-accent-ink` | `#FFFFFF` | Text on accent |

Color values MAY change only after contrast verification. Color MUST NOT be the sole carrier of meaning.

## 3. Typography

- Display preference: Space Grotesk, Manrope, Sora, or a final approved equivalent.
- Body preference: Inter, DM Sans, or a system fallback.
- The production implementation SHOULD self-host WOFF2 fonts and use only required weights.
- A resilient system fallback stack MUST be specified.
- Body text MUST be at least 16px equivalent, with 1.5–1.7 line height.
- Long-form text MUST be constrained to approximately 60–75 characters per line.
- Hero title SHOULD use fluid sizing near `clamp(3rem, 9vw, 7.5rem)` subject to fit and zoom testing.
- Text MUST remain selectable and MUST NOT be baked into imagery.

## 4. Layout and spacing

- Use a mobile-first fluid container.
- Maximum main-content width SHOULD be 1280px.
- Page gutter baseline: 20px mobile, 32px tablet, 48–64px desktop.
- Main grid: 4 columns mobile conceptually, 8 tablet, 12 desktop.
- Section block spacing SHOULD use fluid values roughly equivalent to 80–160px.
- Spacing MUST derive from a consistent scale, preferably 4, 8, 12, 16, 24, 32, 48, 64, 96, 128.
- Layout MUST tolerate copy growth and MUST NOT depend on exact text line breaks.

## 5. Responsive behavior

Design MUST be content-driven; breakpoints are implementation tools, not device assumptions. Baseline verification widths:

- 320px
- 375px
- 430px
- 768px
- 1024px
- 1280px
- 1440px

At narrow widths:

- navigation collapses to an accessible menu;
- multi-column sections become one column;
- project actions remain visible and tappable;
- large decorative elements are reduced or removed;
- no content causes horizontal page scrolling.

At wide widths, lines and cards MUST remain constrained rather than expanding indefinitely.

## 6. Component requirements

### D-CMP-01 — Header

- Sticky with a subtle background/border after scroll.
- Minimum interactive target of 44×44 CSS pixels where practical.
- Must not obscure focused content or anchored section headings.

### D-CMP-02 — Buttons and links

- Primary, secondary, and text-link variants.
- Distinct default, hover, active, focus-visible, disabled, and loading states where applicable.
- Focus indicators MUST remain visible in both themes.
- Icons MUST supplement, not replace, ambiguous labels.

### D-CMP-03 — Project cards

- Image region with stable aspect ratio.
- Text region with title, summary, role/stack, and actions.
- Entire card MAY be linked only if nested interactive elements are avoided.
- Hover treatment MUST have an equivalent focus treatment.

### D-CMP-04 — Skill chips

- Informational by default, not buttons.
- Wrap naturally without clipping.
- No proficiency visualization.

### D-CMP-05 — Timeline

- Chronological structure MUST remain understandable without decorative line graphics.
- Dates and organizations MUST be programmatically associated with each entry.

### D-CMP-06 — Mobile menu

- Clear open and close controls.
- Full keyboard operation and logical focus behavior.
- Sufficient contrast and touch targets.
- Background scrolling SHOULD be prevented while open.

## 7. Imagery and effects

- Project media is the primary visual evidence.
- Use AVIF/WebP with suitable fallbacks where required.
- Use subtle CSS gradients, fine borders, and optional low-opacity grain.
- Decorative glow MUST not reduce text contrast.
- Avoid heavy blur over large viewport areas on low-powered mobile devices.
- Portrait treatment SHOULD be editorial and natural, not a circular avatar by default.

## 8. States

Every interactive component MUST define:

- default;
- hover where hover exists;
- focus-visible;
- active/pressed;
- disabled where applicable;
- error/success for inputs;
- loading only where an asynchronous operation exists.

Skeleton loaders MUST NOT be used for static content.

## 9. Visual acceptance

- No clipped text at supported widths or 200% zoom.
- No accidental horizontal scrollbar at 320px.
- Both themes pass contrast requirements.
- Layout remains usable with images disabled or failed.
- Focus styles are visually unmistakable.
- Project hierarchy remains clear without hover.
