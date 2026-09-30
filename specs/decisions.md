# Decision Log

This file records architectural decisions and approved deviations. New entries MUST be appended; existing history SHOULD not be rewritten except to correct factual errors.

## DEC-001 — Specification-first governance

- Date: 2026-09-29
- Status: Accepted
- Decision: The `specs/` directory is the single source of truth. Implementation must follow it, and material implementation changes require corresponding specification changes.
- Reason: The project owner requested a specification-first workflow and one authoritative location for all requirements.
- Consequence: Chat messages, source comments, and mockups do not override this directory.

## DEC-002 — Static React portfolio

- Date: 2026-09-29
- Status: Accepted
- Decision: Build Version 1 with React, TypeScript, Vite, and static deployment.
- Reason: The portfolio needs modern interaction and maintainable components but no server-side business logic.
- Consequence: Runtime backend features and dynamic social imports are excluded unless later specified.

## DEC-003 — GitHub Pages hosting

- Date: 2026-09-29
- Status: Accepted
- Decision: Use GitHub Pages for initial hosting with GitHub Actions deployment.
- Reason: The source repository is on GitHub, the output is static, and Pages supports HTTPS and custom domains.
- Consequence: Base paths and any client-side routing must be designed for GitHub Pages.

## DEC-004 — Modern editorial visual direction

- Date: 2026-09-29
- Status: Accepted as baseline
- Decision: Use a modern editorial developer aesthetic with strong typography, disciplined grids, dark/light themes, project-led imagery, and an electric-lime baseline accent.
- Reason: This creates a distinctive but professional presentation without depending on novelty effects.
- Consequence: Final token tuning is allowed, but a materially different visual direction requires owner approval and a new decision entry.

## DEC-005 — No inferred personal claims

- Date: 2026-09-29
- Status: Accepted
- Decision: Unknown profile details remain explicit content requirements; they are not inferred from inaccessible LinkedIn content or unrelated search results.
- Reason: Professional integrity and accuracy are more important than filling every section immediately.
- Consequence: Production launch is blocked until required content is supplied, approved, or deliberately waived.

## DEC-006 — Owner-provided LinkedIn screenshots as profile source

- Date: 2026-09-29
- Status: Accepted
- Decision: Treat the nine LinkedIn screenshots supplied directly by Mahadi as an approved source for the visible profile facts recorded in `profile-content.md`.
- Reason: Automated LinkedIn access was unavailable, and the owner supplied current screenshots from the editable profile view.
- Consequence: Visible facts may be used for implementation. Information not visible in the screenshots remains unresolved and MUST NOT be inferred. Any conflict with a later resume or explicit correction requires owner confirmation.

## DEC-007 — Approved contact and portfolio assets

- Date: 2026-09-29
- Status: Accepted
- Decision: Use `mahadi.jubaer@alora.cloud` as the public contact email; use the owner-supplied professional portrait as the primary profile image; and recognize the supplied URLs for Alora Cloud, Mohseen, and Smart Cafe Management as canonical project destinations.
- Reason: Mahadi supplied these values and the original portrait directly for the portfolio.
- Decision: Use the owner-supplied Mohseen launch-event portrait in the hero and keep the rooftop portrait in About so the two major identity sections do not repeat the same image.
- Reason: Mahadi explicitly requested the replacement and supplied the event image directly.
- Consequence: Implementation may use these assets without further identity confirmation, while project contribution details and employer-sensitive material still require approval.

## DEC-008 — Expressive GSAP-led redesign

- Date: 2026-09-30
- Status: Accepted for implementation
- Decision: Evolve the current editorial portfolio into a more expressive, motion-led experience inspired by the pacing and visual energy of Run Rob Run. Use GSAP as the single primary animation engine and introduce a curated branded technology-logo system.
- Reason: Mahadi requested a more attractive creative-developer presentation, GSAP animations, and recognizable tool logos.
- Consequence: The redesign must follow `animation-redesign.md`, preserve content integrity and accessibility, and meet the existing performance gates. It may borrow interaction principles but MUST NOT reproduce another portfolio's artwork, copy, layout, animation timings, or identity.

## Decision template

```md
## DEC-NNN — Title

- Date: YYYY-MM-DD
- Status: Proposed | Accepted | Superseded | Rejected
- Decision: ...
- Reason: ...
- Consequence: ...
- Supersedes: DEC-NNN (if applicable)
```
