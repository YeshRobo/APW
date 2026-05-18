# Agents at Every Level of Intelligence

This is a GitHub Pages-ready static website for Yeshwanth Reddy Gurredy's technical portfolio and philosophy project about agents as engineered systems.

The core idea is simple: an agent perceives the current state of matter, processes it inside an Agent Core, and acts to create a new state of matter.

The site uses plain HTML, CSS, and JavaScript. There is no React setup, no build step, and no package manager required.

## Agent Core Framework

The website is built around this framework:

```text
Current State of Matter
-> Perception
-> Agent Core
-> Action
-> New State of Matter
```

The Agent Core is the internal space where perception becomes representation, representation becomes thinking, and thinking becomes action.

Agents transform the state of matter. Motion, documents, tools, machines, bodies, and cities are states or arrangements of matter.

## Page Structure

The full page order is:

1. Hero
2. Core Philosophy
3. Spectrum of Agents
4. Agent Framework
5. Agent Systems Portfolio
6. About
7. Contact

The Agent Systems Portfolio section contains a short guide card, detailed project cards, and a skills strip. Concrete evidence belongs inside each project's Evidence / Outcome field.

## Project Data

Projects are data-driven. To add, remove, or edit project cards, update `data/projects.js` instead of writing project markup in `index.html`.

Each project object uses this structure:

```js
{
  id: "project-id",
  title: "Project Title",
  agentType: "Agent Type",
  problem: "...",
  stateToChange: "...",
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
  matterStateTransformation: "...",
  evidenceOutcome: "...",
  links: {
    code: "",
    details: "",
    demo: ""
  }
}
```

The renderer in `js/renderProjects.js` displays each project as:

```text
Project Title — Agent Type

Problem
State to Change
Perception: what it needs, what was used, my contribution
Agent Core: what it needs, what was used, my contribution
Action: what it needs, what was used, my contribution
Safety / Constraints
Matter-State Transformation
Evidence / Outcome
Links
```

Leave a link value empty when the link is not ready. The card will show that link as Coming Soon.

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
| Matter State / Perception / Agent Core / Action cards | `data/siteContent.js` | `framework` |
| Agent Systems Portfolio heading, guide card, and skills | `data/siteContent.js` | `portfolio` |
| Project cards and agent-loop fields | `data/projects.js` | project objects |
| About section | `data/siteContent.js` | `about` |
| Contact links | `data/siteContent.js` | `contact.links` |
| Footer owner/back-to-top text | `data/siteContent.js` | `footer` |
| Colors | `css/base.css` | `:root` variables |
| Page layout and grids | `css/layout.css` | section/grid classes |
| Card, button, and project styling | `css/components.css` | component classes |

Most visible content is filled by `js/renderSiteContent.js` and `js/renderProjects.js` from the files in `data/`.

## Add a New Project

1. Open `data/projects.js`.
2. Copy one existing project object.
3. Paste it inside the `projects` array.
4. Change `id`, `title`, and `agentType`.
5. Update the `perception*`, `agentCore*`, and `action*` fields with what the agent needs, what was used, and your contribution.
6. Update the safety fields.
7. Keep `evidenceOutcome` short and concrete.
8. Add real URLs in `links` when code, details, or demos are ready.

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
- `data/siteContent.js` - Editable website content for hero, philosophy, spectrum, framework, portfolio evidence, about, contact, and footer sections.
- `data/projects.js` - Editable project data for the modular Agent Systems Portfolio cards.
- `js/main.js` - App entry point for navigation, canvas, current year, and data rendering.
- `js/renderSiteContent.js` - Fills the page using `data/siteContent.js`.
- `js/renderProjects.js` - Builds project cards from `data/projects.js`.
- `css/base.css` - Variables, reset styles, typography defaults, and accessibility helpers.
- `css/layout.css` - Page layout, responsive grids, sections, header, and footer.
- `css/components.css` - Cards, buttons, tags, project sections, contact links, and other reusable components.
- `assets/` - Optional static assets.
