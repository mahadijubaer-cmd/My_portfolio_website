# Interaction Specification

## 1. General principles

Interactions MUST be predictable, reversible where relevant, keyboard accessible, and non-blocking. Motion supports hierarchy and feedback; it MUST NOT be required to discover content.

## 2. In-page navigation

- Anchor navigation MUST use real fragment URLs.
- Smooth scrolling MAY be applied when reduced motion is not requested.
- The destination heading MUST not be hidden beneath the sticky header; use `scroll-margin` or equivalent.
- Browser history and direct fragment loading MUST remain functional.
- Current-section indication MAY use intersection observation but MUST not rewrite history continuously.

## 3. Mobile navigation

On open:

- the control exposes `aria-expanded="true"` and the menu relationship;
- focus moves into the menu when implemented as a modal dialog, or follows a documented non-modal pattern;
- focus remains logically contained for a modal pattern;
- Escape closes the menu;
- selecting a navigation item closes the menu;
- focus returns to the opener after an explicit close where appropriate.

The menu MUST remain closable without pointer input.

## 4. Theme behavior

- Themes: `dark` and `light`.
- On first visit, use stored preference if valid; otherwise use operating-system preference; otherwise dark.
- User selection MUST be stored locally.
- The theme control MUST have an accessible label describing the action or current state.
- Theme initialization SHOULD occur before first paint to avoid a visible flash.
- Both themes MUST expose identical content and functionality.

## 5. Motion system

### Allowed motion

- opacity and small transform reveals;
- subtle project-image scale/translation on hover;
- navigation/menu transitions;
- concise state feedback;
- optional decorative background movement with low intensity.

### Limits

- Typical microinteraction: 120–250ms.
- Section reveal: 300–600ms.
- Initial sequence SHOULD complete within 900ms.
- Essential content MUST NOT wait for animation completion.
- Avoid scroll-jacking, parallax tied aggressively to scroll, perpetual marquee text, bouncing prompts, and cursor trails.

### Reduced motion

When `prefers-reduced-motion: reduce` is active:

- smooth scrolling MUST be disabled;
- entrance and hover movement MUST be removed or replaced by near-instant opacity changes;
- decorative continuous motion MUST stop;
- no functionality may be lost.

## 6. Hover and pointer behavior

- Hover effects MUST only enhance interfaces with hover capability.
- Information MUST NOT be available only on hover.
- Touch users MUST receive direct access to all actions.
- A custom cursor is excluded from Version 1 unless separately specified and tested; the native cursor is preferred.

## 7. Copy-email behavior

If a copy-email control is included:

- the visible email remains selectable or linked;
- activation copies the public email;
- success feedback says `Email copied` and is announced politely;
- failure feedback reveals/selects the email and suggests manual copy;
- feedback MUST clear or reset without removing access to the address.

## 8. Contact form policy

Version 1 defaults to direct email and social links. A form MAY be enabled only when all conditions are met:

- a real form-delivery provider is configured;
- fields are limited to name, email, subject/interest, and message;
- every field has a persistent label;
- required status and validation errors are programmatic and visible;
- submit has pending, success, and failure states;
- failure preserves entered content;
- spam protection does not create an inaccessible challenge;
- the destination email is verified;
- no secret is committed to the client repository;
- privacy implications are disclosed where required.

The form MUST NOT pretend success when delivery is not confirmed.

## 9. External navigation

- Live demos and source repositories MAY open in a new tab.
- Resume SHOULD open in a new tab unless an explicit download interaction is provided.
- Same-site navigation SHOULD remain in the current tab.
- New-tab behavior MUST not be applied indiscriminately.

## 10. Error feedback

Errors MUST explain what happened and how to recover. Error text MUST not rely only on color. Native browser behavior SHOULD be preserved unless a custom behavior demonstrably improves usability.
