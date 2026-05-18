# Agents at Every Level of Intelligence

This is a GitHub Pages-ready static website for Yeshwanth Reddy Gurredy's technical portfolio and philosophy project about agents as engineered systems.

The core idea is simple: an agent perceives the current state of a system, processes that perception inside an Agent Core, and acts to create a changed system state.

The site uses plain HTML, CSS, and JavaScript. There is no React setup, no build step, and no package manager required.

## Agent Framework

The website is built around this framework:

```text
Current System State
-> Perception
-> Agent Core
-> Action
-> Changed System State
```

The Agent Core is one part of the loop. It receives perception, forms an internal representation of the current system state, and selects or produces the next action.

Agents change systems from one state to another. A system can be physical, digital, biological, or organizational.

## Site Structure

The homepage order is:

1. Hero
2. Core Philosophy
3. Spectrum of Agents
4. Agent Framework
5. Agent Systems Portfolio
6. About
7. Contact

The Agent Systems Portfolio section contains a short guide card, detailed project cards, and a skills strip. Concrete evidence belongs inside each project's Evidence / Outcome field.

The site also includes standalone static pages:

- `philosophy.html` - Deeper explanation of the Agent Core framework.
- `projects/uav-gimbal.html` - UAV Gimbal case study.
- `projects/exoskeleton.html` - Exoskeleton case study.
- `projects/retail-people-counting.html` - Retail People Counting Analytics System case study.
- `projects/library-agent.html` - Library Agent case study.
- `projects/rl-safe-navigation.html` - RL Car Navigation case study.

Each project page follows this structure:

1. Project Hero
2. Problem
3. Current System State
4. Agent Loop
5. Technologies Used
6. My Contribution
7. Evidence / Outcome
8. Limitations
9. Next Steps
10. Links

## Project Data

Homepage project cards are data-driven. To add, remove, or edit project cards, update `data/projects.js` instead of writing project markup in `index.html`.

Detailed project pages are rendered from `data/projectDetails.js` by `js/projectDetailPage.js`.

Each project object uses this structure:

```js
{
  id: "project-id",
  title: "Project Title",
  agentType: "Agent Type",
  problem: "...",
  currentSystemState: "...",
  perceptionNeeds: "...",
  perceptionTools: ["..."],
  perceptionContribution: ["..."],
  agentCoreNeeds: "...",
  agentCoreImplementation: ["..."],
  agentCoreContribution: ["..."],
  actionNeeds: "...",
  actionTools: ["..."],
  actionContribution: ["..."],
  safetyNeeds: "...",
  safetyImplementation: ["..."],
  systemStateChange: "...",
  evidenceOutcome: "...",
  links: [
    { label: "Details", href: "projects/project-page.html" },
    { label: "View Code", href: "https://github.com/...", external: true },
    { label: "Demo Coming Soon", disabled: true }
  ]
}
```

The renderer in `js/renderProjects.js` displays each project as:

```text
Project Title — Agent Type

Problem
Current System State
Perception: what it needs, what was used, my contribution
Agent Core: what it needs, what was used, my contribution
Action: what it needs, what was used, my contribution
Safety / Constraints
System State Change
Evidence / Outcome
Links
```

Use disabled link labels for private code, private data, planned demos, or future notes. Do not show fake public-code buttons for projects where code cannot be shared.

## Public Code and Case Studies

Some projects have public code; others are case studies because the work is hardware-specific, research-private, or enterprise-private.

| Project | Public code status | Site button strategy |
| --- | --- | --- |
| UAV Gimbal | Code private | Case Study, Code Private, Demo Coming Soon |
| Exoskeleton | Data private | Case Study, Data Private, Research Notes Coming Soon |
| Retail People Counting Analytics System | Code private | Case Study, Code Private, Architecture Coming Soon |
| Library Agent | Public code | View Code, Case Study, Demo Coming Soon |
| RL Car Navigation | Public code | View Code, Case Study, Demo Coming Soon |

## Editing Map

Use this map when you want to change the website:

| What you want to change | Edit this file | Look for this section |
| --- | --- | --- |
| Browser title or description | `data/siteContent.js` | `meta` |
| Header name or initials | `data/siteContent.js` | `brand` |
| Navigation links | `data/siteContent.js` | `navigation` |
| Hero title, subtitle, intro, buttons | `data/siteContent.js` | `hero` |
| Core philosophy text and equation | `data/siteContent.js` | `philosophy` |
| Spectrum of Agents | `data/siteContent.js` | `spectrum` |
| Current System State / Perception / Agent Core / Action cards | `data/siteContent.js` | `framework` |
| Agent Systems Portfolio heading, guide card, and skills | `data/siteContent.js` | `portfolio` |
| Project cards and agent-loop fields | `data/projects.js` | project objects |
| Project detail pages | `data/projectDetails.js` | project detail objects |
| About section | `data/siteContent.js` | `about` |
| Contact links | `data/siteContent.js` | `contact.links` |
| Footer owner/back-to-top text | `data/siteContent.js` | `footer` |
| Colors | `css/base.css` | `:root` variables |
| Page layout and grids | `css/layout.css` | section/grid classes |
| Card, button, and project styling | `css/components.css` | component classes |

Homepage visible content is filled by `js/renderSiteContent.js` and `js/renderProjects.js` from the files in `data/`. Project detail pages are filled by `js/projectDetailPage.js` from `data/projectDetails.js`.

## Add a New Project

1. Open `data/projects.js`.
2. Copy one existing project object.
3. Paste it inside the `projects` array.
4. Change `id`, `title`, and `agentType`.
5. Update the `perception*`, `agentCore*`, and `action*` fields with what the agent needs, what was used, and your contribution.
6. Update the safety fields.
7. Keep `evidenceOutcome` short and concrete.
8. Add a `Details` link in `links` that points to the new page under `projects/`.
9. Add only real public-code URLs. Use disabled labels such as `Code Private`, `Data Private`, or `Demo Coming Soon` when needed.

## Add a New Project Page

1. Add a new object to `data/projectDetails.js`.
2. Copy one existing HTML file in `projects/` and rename it.
3. Change the `data-project-id` value on the `<body>` to match the new object key.
4. Update the page title and fallback description.
5. Add a `Details` link for the project in `data/projects.js`.
6. Keep the project page honest about public code, private code, private data, limitations, and next steps.

## Run Locally

Because this project uses JavaScript ES modules, preview it with a local server. Opening `index.html` directly may block module imports in some browsers.

From the project folder, run:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Deploy on GitHub Pages

1. Push the repository to GitHub.
2. Open the repository on GitHub.
3. Go to Settings > Pages.
4. Under Build and deployment, choose Deploy from a branch.
5. Select the branch to publish, usually `main`.
6. Select the root folder `/`.
7. Save the settings.

GitHub Pages will publish the site using `index.html` as the entry file.

## Files Included

- `index.html` - Page skeleton and static fallback content.
- `philosophy.html` - Deeper Agent Core framework page.
- `projects/*.html` - Static entry files for individual project detail pages.
- `data/siteContent.js` - Editable website content for hero, philosophy, spectrum, framework, portfolio guide, skills, about, contact, and footer sections.
- `data/projects.js` - Editable project data for the modular Agent Systems Portfolio cards.
- `data/projectDetails.js` - Editable detailed content for project case-study pages.
- `js/main.js` - App entry point for navigation, canvas, current year, and data rendering.
- `js/pageShell.js` - Shared header, mobile navigation, active navigation, and footer year behavior for standalone pages.
- `js/projectDetailPage.js` - Builds project detail pages from `data/projectDetails.js`.
- `js/philosophyPage.js` - Initializes shell behavior for the deeper philosophy page.
- `js/renderSiteContent.js` - Fills the page using `data/siteContent.js`.
- `js/renderProjects.js` - Builds project cards from `data/projects.js`.
- `css/base.css` - Variables, reset styles, typography defaults, and accessibility helpers.
- `css/layout.css` - Page layout, responsive grids, sections, header, and footer.
- `css/components.css` - Cards, buttons, tags, project sections, contact links, and other reusable components.
- `assets/` - Optional static assets.
