# Content Specification

## 1. Source-of-truth rules

Public claims MUST originate from Mahadi, an approved resume, an approved project repository, or another verifiable source. LinkedIn may inform content after Mahadi provides an export or manually confirms it, but content MUST NOT be scraped or guessed.

All implementation content MUST be stored in typed structured data where practical. Components MUST render data and MUST NOT duplicate biographical facts across files.

## 2. Content readiness

Canonical facts extracted from owner-provided LinkedIn screenshots are recorded in `profile-content.md`. The following matrix controls launch readiness:

| ID | Input | Status | Release requirement |
| --- | --- | --- | --- |
| C-REQ-01 | Full display name | Confirmed | Use `MAHADI JUBAER` / title case where appropriate |
| C-REQ-02 | Professional title | Confirmed with affiliation caveat | Use approved positioning from `profile-content.md` |
| C-REQ-03 | Value proposition | Draftable from confirmed profile | Final 12–28 words require owner approval |
| C-REQ-04 | About biography | Source supplied | Edit to 80–180 words and obtain owner approval |
| C-REQ-05 | Email | Confirmed | `mahadi.jubaer@alora.cloud` |
| C-REQ-06 | Location | Confirmed | Dhaka, Bangladesh |
| C-REQ-07 | Availability | `CONTENT_REQUIRED` | Employment, freelance, collaboration, or unavailable |
| C-REQ-08 | Skills | Confirmed visible set | Group and prioritize per `profile-content.md` |
| C-REQ-09 | Journey | Confirmed | Employment and education supplied |
| C-REQ-10 | Projects | Three names and destinations confirmed; detail incomplete | Validate contributions, stack, media, and outcomes |
| C-REQ-11 | Resume | `CONTENT_REQUIRED` | Approved public-safe PDF |
| C-REQ-12 | Portrait | Original supplied and approved | Preserve master; create optimized responsive derivatives during implementation |
| C-REQ-13 | Project media | Preview thumbnails only | Original screenshots/assets required |
| C-REQ-14 | Social preview | `CONTENT_REQUIRED` | Approved 1200×630 image or generated branded asset |

## 3. Profile data contract

The implementation SHOULD model profile content equivalent to:

```ts
type Profile = {
  name: string;
  shortName: string;
  title: string;
  valueProposition: string;
  bio: string[];
  email: string;
  location?: string;
  availability?: {
    status: "available" | "selective" | "unavailable";
    label: string;
    opportunities: string[];
  };
  portrait?: ImageAsset;
  resumeUrl: string;
  social: {
    github: string;
    linkedin: string;
  };
};
```

## 4. Project data contract

```ts
type Project = {
  slug: string;
  title: string;
  summary: string;
  description?: string;
  year: number;
  status: "live" | "completed" | "in-progress" | "archived";
  featured: boolean;
  order: number;
  role: string;
  team?: string;
  technologies: string[];
  image: ImageAsset;
  liveUrl?: string;
  sourceUrl?: string;
  caseStudy?: {
    problem: string[];
    users?: string[];
    constraints?: string[];
    decisions: Array<{ title: string; body: string }>;
    implementation: string[];
    outcomes?: Array<{ label: string; value: string; evidence?: string }>;
    lessons: string[];
    nextSteps?: string[];
  };
};

type ImageAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
};
```

Rules:

- `slug` MUST be lowercase kebab-case and stable after publication.
- `summary` SHOULD be 18–35 words.
- `technologies` SHOULD include 3–6 relevant technologies, not every package.
- `role` MUST describe Mahadi's actual contribution.
- `outcomes` MUST be verifiable. Vanity or invented metrics are forbidden.
- Missing URLs MUST be omitted rather than represented as `#`.

## 5. Journey and skill contracts

```ts
type JourneyItem = {
  id: string;
  type: "experience" | "education" | "freelance" | "certification" | "milestone";
  title: string;
  organization: string;
  location?: string;
  start: string;
  end?: string;
  current?: boolean;
  highlights: string[];
  url?: string;
};

type SkillGroup = {
  name: string;
  skills: Array<{
    name: string;
    evidenceProjectSlugs?: string[];
  }>;
};
```

Dates MUST be internally consistent. Approximate or unknown dates MUST be clearly labeled and not silently invented.

## 6. Voice and editorial style

- Use clear international English.
- Use first person for biography and contact copy; use concise neutral descriptions for projects.
- Prefer concrete verbs: built, designed, implemented, optimized, tested, deployed.
- Avoid unsupported superlatives: best, expert, world-class, revolutionary.
- Avoid filler: passionate, hardworking, results-driven, cutting-edge, pixel-perfect—unless context makes the statement demonstrably meaningful.
- Expand uncommon abbreviations on first use.
- Headings use sentence case.
- Technology brand capitalization MUST be correct: JavaScript, TypeScript, React, Node.js, GitHub.
- Copy MUST be proofread before release.

## 7. Image content

- Portrait imagery MUST look professional and authentic; AI-generated likenesses MUST NOT represent Mahadi.
- Screenshots MUST show the actual project and SHOULD avoid sensitive user data.
- Images MUST not contain essential text that is absent from HTML.
- File names MUST be descriptive, for example `project-name-dashboard.webp`.
- Alternative text describes the image's informational purpose, not `image of`.
- Decorative images use `alt=""`.

## 8. Privacy and integrity

- Do not publish home address, private phone number, government identifiers, private email, credentials, secrets, or unapproved client information.
- Resume content MUST be reviewed for public exposure.
- Testimonials require explicit permission and accurate attribution.
- Third-party logos and screenshots MUST be used only where legally and contextually appropriate.
