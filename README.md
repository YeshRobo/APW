# Agents at Every Level of Intelligence

This is a GitHub Pages-ready static website for Yeshwanth Reddy Gurredy's personal portfolio and philosophy project about agents as engineered systems.

The core idea is that agents exist at every intelligence level. An agent is any system that can perceive, think, and act. When agents are organized properly, they use information and energy to transform matter, motion, or knowledge.

The site presents that idea as a professional engineering framework and connects it to UAV gimbals, embedded controls, human-exoskeleton research, ThingWorx information systems, information agents, and adaptive decision agents.

## Project System

Projects are data-driven. To add, remove, or edit projects, update `data/projects.js` instead of rewriting the HTML.

Each project follows this structure:

```text
Title - Agent Type

Problem:
Built System:
Technologies:
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
  agentInterpretation: "...",
  links: {
    code: "#",
    details: "#",
    demo: "#"
  }
}
```

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
- `data/projects.js` - Editable project data for the modular project card system.
- `js/main.js` - App entry point for navigation, canvas, current year, and project rendering.
- `js/renderProjects.js` - Builds project cards from `data/projects.js`.
- `css/base.css` - Variables, reset styles, typography defaults, and accessibility helpers.
- `css/layout.css` - Page layout, responsive grids, sections, header, and footer.
- `css/components.css` - Cards, buttons, tags, project sections, contact links, and other reusable components.
- `README.md` - Project overview, local preview instructions, and deployment steps.
- `assets/` - Placeholder folder for future files such as a resume PDF or images.

## Customization Notes

- Update the LinkedIn link in `index.html` before publishing widely.
- Add `assets/resume.pdf` if you want the resume link to work.
- Edit project entries in `data/projects.js` as your UAV gimbal, exoskeleton, library agent, and RL navigation work evolves.
- Adjust colors in `css/base.css`, layout rules in `css/layout.css`, and card/button styles in `css/components.css`.
