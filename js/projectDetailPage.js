import { setupPageShell } from "./pageShell.js";

async function loadProjectDetails(version = Date.now()) {
  const module = await import(`../data/projectDetails.js?v=${version}`);
  return module.projectDetails;
}

function createElement(tagName, className, textContent) {
  const element = document.createElement(tagName);

  if (className) {
    element.className = className;
  }

  if (textContent !== undefined) {
    element.textContent = textContent;
  }

  return element;
}

function setText(selector, value) {
  const element = document.querySelector(selector);

  if (element && value) {
    element.textContent = value;
  }
}

function renderTagList(container, items) {
  if (!container) {
    return;
  }

  container.replaceChildren(
    ...items.map((item) => createElement("span", "tech-tag", item))
  );
}

function createBulletList(items) {
  const list = createElement("ul", "detail-list");

  items.forEach((item) => {
    list.append(createElement("li", null, item));
  });

  return list;
}

function createTextBlock(title, body) {
  const block = createElement("section", "detail-block");
  block.append(createElement("h2", null, title));
  block.append(createElement("p", null, body));
  return block;
}

function createDetailGroup(label, value) {
  const group = createElement("div", "project-detail");
  group.append(createElement("p", "project-detail-label", label));
  group.append(Array.isArray(value) ? createBulletList(value) : createElement("p", null, value));
  return group;
}

function createPhasePanel(phase) {
  const panel = createElement("article", "detail-panel");
  panel.append(createElement("h3", null, phase.title));
  panel.append(createDetailGroup(phase.needLabel, phase.need));
  panel.append(createDetailGroup(phase.usedLabel, phase.used));

  if (phase.contribution?.length) {
    panel.append(createDetailGroup("My contribution", phase.contribution));
  }

  return panel;
}

function createAgentLoop(project) {
  const block = createElement("section", "detail-block");
  block.append(createElement("h2", null, "Agent Loop"));

  const flow = createElement("div", "detail-flow");
  ["Current System State", "Perception", "Agent Core", "Action", "Safety / Constraints", "System State Change"].forEach((item) => {
    flow.append(createElement("span", null, item));
  });
  block.append(flow);

  const grid = createElement("div", "detail-panel-grid");
  project.phases.forEach((phase) => grid.append(createPhasePanel(phase)));
  block.append(grid);

  return block;
}

function createButton(buttonData) {
  if (buttonData.disabled || !buttonData.href) {
    const disabledButton = createElement("span", "detail-button is-disabled", buttonData.label);
    disabledButton.setAttribute("aria-disabled", "true");
    return disabledButton;
  }

  const link = createElement("a", "detail-button", buttonData.label);
  link.href = buttonData.href;

  if (buttonData.external || buttonData.href.startsWith("http")) {
    link.target = "_blank";
    link.rel = "noreferrer";
  }

  return link;
}

function createLinksSection(project) {
  const block = createElement("section", "detail-block");
  block.append(createElement("h2", null, "Links"));

  const actions = createElement("div", "detail-actions");
  const backLink = createElement("a", "detail-button primary", "Back to Portfolio");
  backLink.href = "../index.html#portfolio";
  actions.append(backLink);
  project.buttons.forEach((button) => actions.append(createButton(button)));

  block.append(actions);
  return block;
}

function createPipeline(items) {
  const flow = createElement("div", "pipeline-flow");
  items.forEach((item) => flow.append(createElement("span", null, item)));
  return flow;
}

function createExtraSection(sectionData) {
  const block = createElement("section", "detail-block");
  block.append(createElement("h2", null, sectionData.title));

  if (sectionData.body) {
    block.append(createElement("p", null, sectionData.body));
  }

  if (sectionData.pipeline) {
    block.append(createPipeline(sectionData.pipeline));
  }

  if (sectionData.placeholders) {
    const placeholderGrid = createElement("div", "placeholder-grid");
    sectionData.placeholders.forEach((item) => {
      placeholderGrid.append(createElement("span", null, item));
    });
    block.append(placeholderGrid);
  }

  return block;
}

function renderProjectPage(project) {
  document.title = `${project.title} | Yeshwanth Reddy Gurredy`;

  const description = document.querySelector('meta[name="description"]');
  if (description) {
    description.setAttribute("content", project.summary);
  }

  setText("[data-project-title]", project.title);
  setText("[data-agent-type]", project.agentType);
  setText("[data-project-summary]", project.summary);
  renderTagList(document.querySelector("[data-project-tags]"), project.tags);

  const heroActions = document.querySelector("[data-project-hero-actions]");
  if (heroActions) {
    const backLink = createElement("a", "button secondary", "Back to Portfolio");
    backLink.href = "../index.html#portfolio";
    heroActions.replaceChildren(backLink);
  }

  const container = document.querySelector("[data-project-detail]");
  if (!container) {
    return;
  }

  const sections = [
    createTextBlock("Problem", project.problem),
    createTextBlock("Current System State", project.currentSystemState),
    createAgentLoop(project),
    createTextBlock("System State Change", project.systemStateChange),
    createTextBlock("Evidence / Outcome", project.evidence),
    createTextBlock("Limitations", project.limitations),
    createTextBlock("Next Steps", project.nextSteps),
  ];

  project.extraSections?.forEach((section) => {
    sections.push(createExtraSection(section));
  });

  sections.push(createLinksSection(project));
  container.replaceChildren(...sections);
}

document.addEventListener("DOMContentLoaded", async () => {
  const projectId = document.body.dataset.projectId;
  const projectDetails = await loadProjectDetails();
  const project = projectDetails[projectId];

  setupPageShell();

  if (!project) {
    setText("[data-project-title]", "Project not found");
    setText("[data-project-summary]", "Return to the portfolio to choose another project.");
    return;
  }

  renderProjectPage(project);
});