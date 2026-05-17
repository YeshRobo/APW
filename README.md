# Agents at Every Level of Intelligence

This is a GitHub Pages-ready static website for Yeshwanth Reddy Gurredy's personal portfolio and philosophy project about agents as engineered systems.

The core idea is that agents exist at every intelligence level. An agent is any system that perceives the current state of matter, processes it inside an Agent Core, and acts to create a new state of matter.

The site presents that idea as a professional engineering framework and connects it to UAV gimbals, embedded controls, human-exoskeleton research, ThingWorx information systems, information agents, and adaptive decision agents.

## Agent Core Framework

The website uses this main framework:

```text
Current State of Matter
-> Perception
-> Agent Core
-> Action
-> New State of Matter
```

The Agent Core is the internal space where perception becomes representation, representation becomes thinking, and thinking becomes action.

The Agent Core can take different forms:

- Human: mind
- UAV gimbal: control algorithm
- RL car: learned policy, Q-table, or decision model
- Library agent: retrieval, organization, and reasoning system
- Organization: people, rules, plans, communication, and decision structure

The site avoids describing agents as transforming motion or knowledge separately. The correct framing is that agents transform the state of matter.

## Project System

Projects are data-driven. To add, remove, or edit projects, update `data/projects.js` instead of rewriting the HTML.

Most non-project website text is also data-driven. To edit section headings, hero text, contact links, skills, framework cards, experience cards, and the agent spectrum, update `data/siteContent.js`.

## Editing Map

Use this map when you want to change the website:

| What you want to change | Edit this file | Look for this section |
| --- | --- | --- |
| Browser title or description | `data/siteContent.js` | `meta` |
| Header name or initials | `data/siteContent.js` | `brand` |
| Navigation links | `data/siteContent.js` | `navigation` |
| Hero title, subtitle, intro, buttons | `data/siteContent.js` | `hero` |
| Core philosophy text and equation | `data/siteContent.js` | `philosophy` |
| Matter State / Perception / Agent Core / Action framework cards | `data/siteContent.js` | `framework` |
| Projects section heading | `data/siteContent.js` | `projectsSection` |
| Project cards, Agent Core, and matter-state details | `data/projects.js` | project objects |
| Experience evidence cards | `data/siteContent.js` | `experience.cards` |
| Skills strip | `data/siteContent.js` | `experience.skills` |
| Agent spectrum scale | `data/siteContent.js` | `spectrum` |
| About section | `data/siteContent.js` | `about` |
| Contact links | `data/siteContent.js` | `contact.links` |
| Footer owner/back-to-top text | `data/siteContent.js` | `footer` |
| Colors | `css/base.css` | `:root` variables |
| Page layout and grids | `css/layout.css` | section/grid classes |
| Card/button/tab styling | `css/components.css` | component classes |

The HTML in `index.html` is now mostly the page skeleton. The visible content is filled by `js/renderSiteContent.js` and `js/renderProjects.js` from the files in `data/`.

Each project follows this structure:

```text
Title - Agent Type

Problem:
Built System:
Technologies:
Agent Core:
Matter-State Transformation:
Agent Interpretation:
Links:
```

Each object in `data/projects.js` includes:

```js
{
  id: "project-id",
  title: "Project Title",
  agentType: "Agent Type",
  problem: "...",
  builtSystem: "...",
  technologies: ["..."],
  agentCore: "...",
  matterStateTransformation: "...",
  agentInterpretation: "...",
  links: {
    code: "#",
    details: "#",
    demo: "#"
  }
}
```

To add a new project:

1. Open `data/projects.js`.
2. Copy one existing project object.
3. Change the `id`, `title`, `agentType`, and text fields.
4. List the technologies in the `technologies` array.
5. Describe the project-specific Agent Core in `agentCore`.
6. Describe the before-to-after matter-state change in `matterStateTransformation`.
7. Update the `links` values when code, details, or demos are available.

## Local Preview

Because this project uses JavaScript ES modules, preview it with a local server. Opening `index.html` directly may block module imports in some browsers.

For a local server, run one of these commands from the project folder:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

If you use VS Code, you can also preview the site with any static file server extension.

## Deploy With GitHub Pages

1. Create a GitHub repository for the portfolio.
2. Add these files to the repository root.
3. Commit and push the files to GitHub.
4. Open the repository on GitHub.
5. Go to **Settings** > **Pages**.
6. Under **Build and deployment**, choose **Deploy from a branch**.
7. Select the branch you want to publish, usually `main`.
8. Select the root folder, usually `/`, then save.

GitHub Pages will publish the site using `index.html` as the entry file.

## Files Included

- `index.html` - Main website structure, static sections, and the project container rendered by JavaScript.
- `data/siteContent.js` - Editable website content for hero, philosophy, framework, experience, spectrum, about, contact, and footer sections.
- `data/projects.js` - Editable project data for the modular project card system.
- `js/main.js` - App entry point for navigation, canvas, current year, and project rendering.
- `js/renderSiteContent.js` - Fills the HTML sections using `data/siteContent.js`.
- `js/renderProjects.js` - Builds project cards from `data/projects.js`.
- `css/base.css` - Variables, reset styles, typography defaults, and accessibility helpers.
- `css/layout.css` - Page layout, responsive grids, sections, header, and footer.
- `css/components.css` - Cards, buttons, tags, project sections, contact links, and other reusable components.
- `README.md` - Project overview, local preview instructions, and deployment steps.
- `assets/` - Placeholder folder for future files such as a resume PDF or images.

## Customization Notes

- Update the LinkedIn link in `data/siteContent.js` before publishing widely.
- Add `assets/resume.pdf` if you want the resume link to work.
- Edit project entries in `data/projects.js` as your UAV gimbal, exoskeleton, library agent, and RL navigation work evolves.
- Adjust colors in `css/base.css`, layout rules in `css/layout.css`, and card/button styles in `css/components.css`.
