# Delivery and Operations Specification

## 1. Branch and commit policy

- `main` is the deployable branch.
- Feature work SHOULD occur on short-lived branches and merge through reviewed pull requests once the initial project baseline exists.
- Commits SHOULD be coherent and use imperative summaries.
- Implementation changes that alter requirements MUST include the specification update.
- Generated build output SHOULD NOT be committed unless the selected GitHub Pages strategy explicitly requires it.

## 2. Continuous integration

GitHub Actions MUST run on pull requests and pushes to `main`:

1. checkout;
2. install the pinned Node version;
3. `npm ci`;
4. formatting check;
5. lint;
6. type check;
7. tests;
8. production build;
9. optional automated accessibility and Lighthouse checks when stable.

Deployment MUST depend on successful required checks.

## 3. Environment

- Pin Node through `.nvmrc`, `.node-version`, or `engines` plus CI configuration.
- Use npm and commit `package-lock.json`.
- Document local commands in the root README once implementation begins.
- Environment variables MUST be listed in an `.env.example` without secrets if any are introduced.
- Version 1 SHOULD require no secret to build.

## 4. GitHub Pages deployment

- Deploy the Vite production artifact through the official GitHub Pages Actions flow or another documented supported flow.
- Configure Vite's base path for the repository URL until a custom domain is attached.
- Enable HTTPS.
- Deployment workflow MUST avoid publishing source-only/private development files unnecessarily.
- The public site MUST be reproducible from repository content and documented tooling.

## 5. Domain strategy

Initial URL MAY use the GitHub Pages project URL. A custom domain is recommended but not required for Version 1.

If a custom domain is introduced:

- choose a concise professional domain;
- configure DNS according to GitHub Pages guidance;
- commit the required `CNAME` file where applicable;
- enforce HTTPS;
- update canonical, Open Graph, sitemap, structured data, and README URLs;
- verify both apex and `www` behavior;
- avoid exposing unnecessary personal registration data where registrar privacy is available.

## 6. Release checklist

Before production publication:

- all `CONTENT_REQUIRED` items are resolved or intentionally waived in `decisions.md`;
- all acceptance gates pass;
- resume and social preview are current;
- metadata uses the production URL;
- no placeholders or secrets exist;
- browser/accessibility/content/performance QA is complete;
- deployment and rollback process is understood.

## 7. Rollback

- Every production deployment MUST correspond to a Git commit.
- A known-good commit can be redeployed through the same workflow.
- DNS changes MUST be managed separately and conservatively.
- Content corrections involving false or private information MUST be treated as urgent and deployed immediately after review.

## 8. Maintenance

At least quarterly, or whenever circumstances change:

- update availability, resume, experience, and projects;
- check external links;
- review dependency updates and vulnerabilities;
- verify deployment workflow;
- sample Lighthouse and accessibility results;
- renew or verify custom-domain configuration if applicable.

## 9. Ownership

Mahadi owns content approval, public identity, and final release approval. Implementation agents or collaborators may propose edits but MUST NOT invent professional facts or silently alter normative requirements.
