async function loadProjects(version = Date.now()) {
  const module = await import(`../data/projects.js?v=${version}`);
  return module.projects;
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
  card.append(createProjectSection("Agent Core", createElement("p", null, project.agentCore)));
  card.append(
    createProjectSection(
      "Matter-State Transformation",
      createElement("p", null, project.matterStateTransformation)
    )
  );
  card.append(
    createProjectSection(
      "Agent Interpretation",
      createElement("p", null, project.agentInterpretation)
    )
  );
  card.append(createProjectLinks(project.links));

  return card;
}

export async function renderProjects(version) {
  const projectContainer = document.querySelector("[data-projects]");

  if (!projectContainer) {
    return;
  }

  const projects = await loadProjects(version);

  projectContainer.replaceChildren(...projects.map(createProjectCard));
}