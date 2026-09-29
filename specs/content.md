# Content Specification

## 1. Source-of-truth rules

Public claims MUST originate from Mahadi, an approved resume, an approved project repository, or another verifiable source. LinkedIn may inform content after Mahadi provides an export or manually confirms it, but content MUST NOT be scraped or guessed.

All implementation content MUST be stored in typed structured data where practical. Components MUST render data and MUST NOT duplicate biographical facts across files.

## 2. Required content inputs

The following are `CONTENT_REQUIRED` before production release:

| ID | Input | Minimum requirement |
| --- | --- | --- |
| C-REQ-01 | Full display name | Exact spelling and capitalization |
| C-REQ-02 | Professional title | One primary role, optionally one specialization |
| C-REQ-03 | Value proposition | 12–28 words, specific and credible |
| C-REQ-04 | About biography | 80–180 approved words |
| C-REQ-05 | Email | Public professional address |
| C-REQ-06 | Location | City/country or approved broader region; optional only if intentionally private |
| C-REQ-07 | Availability | Employment, freelance, collaboration, or unavailable |
| C-REQ-08 | Skills | Grouped and approved list |
| C-REQ-09 | Journey | Education/experience/milestones with dates |
| C-REQ-10 | Projects | At least 2 credible projects; target 3–4 |
| C-REQ-11 | Resume | Approved PDF with public-safe details |
| C-REQ-12 | Portrait | Approved high-resolution image, or explicit decision to omit |
| C-REQ-13 | Project media | At least one optimized image per featured project |
| C-REQ-14 | Social preview | Approved 1200×630 image or generated branded asset |

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
