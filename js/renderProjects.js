import { projects } from "../data/projects.js";

const agentLoopSections = [
  ["perceive", "Perceive"],
  ["think", "Think"],
  ["act", "Act"],
  ["transform", "Transform"],
];

function createElement(tagName, className, textContent) {
  const element = document.createElement(tagName);

  if (className) {
    element.className = className;
  }

  if (textContent) {
    element.textContent = textContent;
  }

  return element;
}

function createTechnologyTags(technologies) {
  const techList = createElement("div", "tech-list");

  technologies.forEach((technology) => {
    techList.append(createElement("span", "tech-tag", technology));
  });

  return techList;
}

function createProjectSection(title, bodyElement) {
  const section = createElement("div", "project-section");
  section.append(createElement("h4", null, title));
  section.append(bodyElement);
  return section;
}

function createProjectLinks(links) {
  const linkContainer = createElement("div", "project-links");
  const linkLabels = [
    ["code", "Code"],
    ["details", "Details"],
    ["demo", "Demo"],
  ];

  linkLabels.forEach(([key, label]) => {
    const link = createElement("a", null, label);
    link.href = links[key] || "#";
    linkContainer.append(link);
  });

  return linkContainer;
}

function createWorkedOnList(items) {
  const list = createElement("ul", "worked-on-list");

  items.forEach((item) => {
    list.append(createElement("li", null, item));
  });

  return list;
}

function createAgentLoopContent(sectionLabel, sectionData) {
  const content = createElement("div", "agent-loop-content");
  content.append(createElement("h4", null, sectionLabel));
  content.append(createElement("p", "agent-loop-summary", sectionData.summary));
  content.append(createElement("p", "worked-on-label", "What I worked on"));
  content.append(createWorkedOnList(sectionData.workedOn));
  return content;
}

function createAgentLoopPanel(project) {
  const panel = createElement("div", "agent-loop-panel");
  const panelId = `${project.id}-agent-loop`;
  panel.id = panelId;
  panel.hidden = true;

  const intro = createElement(
    "p",
    "agent-loop-intro",
    "Open each layer to see how the project perceives, thinks, acts, and transforms something useful."
  );
  const tabs = createElement("div", "agent-loop-tabs");
  const contentRegion = createElement("div", "agent-loop-content-region");

  function setActiveLoopSection(activeKey) {
    const activeEntry = agentLoopSections.find(([key]) => key === activeKey);

    tabs.querySelectorAll("button").forEach((button) => {
      const isActive = button.dataset.loopKey === activeKey;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    contentRegion.replaceChildren(
      createAgentLoopContent(activeEntry[1], project.agentLoop[activeKey])
    );
  }

  agentLoopSections.forEach(([key, label]) => {
    const tab = createElement("button", "agent-loop-tab", label);
    tab.type = "button";
    tab.dataset.loopKey = key;
    tab.setAttribute("aria-pressed", "false");
    tab.addEventListener("click", () => setActiveLoopSection(key));
    tabs.append(tab);
  });

  panel.append(intro, tabs, contentRegion);
  setActiveLoopSection("perceive");

  return panel;
}

function createProjectToggle(project, panel) {
  const toggle = createElement("button", "project-toggle", "Open agent loop");
  toggle.type = "button";
  toggle.setAttribute("aria-expanded", "false");
  toggle.setAttribute("aria-controls", panel.id);

  function setExpanded(isExpanded) {
    panel.hidden = !isExpanded;
    toggle.setAttribute("aria-expanded", String(isExpanded));
    toggle.textContent = isExpanded ? "Close agent loop" : "Open agent loop";
  }

  toggle.addEventListener("click", () => {
    setExpanded(panel.hidden);
  });

  return { toggle, setExpanded };
}

function createProjectCard(project) {
  const card = createElement("article", "project-card");
  card.id = project.id;

  const header = createElement("div", "project-card-header");
  header.append(createElement("h3", null, project.title));
  header.append(createElement("span", "agent-type", project.agentType));

  card.append(header);
  card.append(createProjectSection("Problem", createElement("p", null, project.problem)));
  card.append(createProjectSection("Built System", createElement("p", null, project.builtSystem)));
  card.append(createProjectSection("Technologies", createTechnologyTags(project.technologies)));
  card.append(
    createProjectSection(
      "Agent Interpretation",
      createElement("p", null, project.agentInterpretation)
    )
  );
  const agentLoopPanel = createAgentLoopPanel(project);
  const { toggle, setExpanded } = createProjectToggle(project, agentLoopPanel);
  card.append(toggle);
  card.append(agentLoopPanel);
  card.append(createProjectLinks(project.links));

  card.addEventListener("click", (event) => {
    if (event.target.closest("a, button")) {
      return;
    }

    setExpanded(agentLoopPanel.hidden);
  });

  return card;
}

export function renderProjects() {
  const projectContainer = document.querySelector("[data-projects]");

  if (!projectContainer) {
    return;
  }

  projectContainer.replaceChildren(...projects.map(createProjectCard));
}