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

function createTagList(items) {
  const tagList = createElement("div", "tech-list");

  items.forEach((item) => {
    tagList.append(createElement("span", "tech-tag", item));
  });

  return tagList;
}

function createBulletList(items) {
  const list = createElement("ul", "project-bullet-list");

  items.forEach((item) => {
    list.append(createElement("li", null, item));
  });

  return list;
}

function createValueElement(value) {
  if (Array.isArray(value)) {
    return createTagList(value);
  }

  return createElement("p", null, value);
}

function createProjectSection(title, value) {
  const section = createElement("div", "project-section");
  section.append(createElement("h4", null, title));
  section.append(value instanceof Node ? value : createValueElement(value));
  return section;
}

function createProjectDetail(label, value, variant) {
  const detail = createElement("div", "project-detail");
  detail.append(createElement("p", "project-detail-label", label));
  detail.append(variant === "bullets" ? createBulletList(value) : createValueElement(value));
  return detail;
}

function createProjectPhase(title, details) {
  const phase = createElement("section", "project-phase");
  phase.append(createElement("h4", null, title));

  details.forEach((detail) => {
    phase.append(createProjectDetail(detail.label, detail.value, detail.variant));
  });

  return phase;
}

function createProjectLoop(project) {
  const loop = createElement("div", "project-loop");

  loop.append(
    createProjectPhase("Perception", [
      { label: "What it needs to perceive", value: project.perceptionNeeds },
      { label: "What was used", value: project.perceptionTools },
      { label: "My contribution", value: project.perceptionContribution, variant: "bullets" },
    ])
  );
  loop.append(
    createProjectPhase("Agent Core", [
      { label: "What it needs to do", value: project.agentCoreNeeds },
      { label: "What was used", value: project.agentCoreImplementation },
      { label: "My contribution", value: project.agentCoreContribution, variant: "bullets" },
    ])
  );
  loop.append(
    createProjectPhase("Action", [
      { label: "What it needs to change", value: project.actionNeeds },
      { label: "What was used", value: project.actionTools },
      { label: "My contribution", value: project.actionContribution, variant: "bullets" },
    ])
  );
  loop.append(
    createProjectPhase("Safety / Constraints", [
      { label: "What must be prevented", value: project.safetyNeeds },
      { label: "What was used to keep it safe", value: project.safetyImplementation },
    ])
  );

  return loop;
}

function createProjectLinks(links) {
  const linkContainer = createElement("div", "project-links");
  const linkLabels = [
    ["code", "Code"],
    ["details", "Details"],
    ["demo", "Demo"],
  ];

  linkLabels.forEach(([key, label]) => {
    const href = links?.[key];

    if (href) {
      const link = createElement("a", "project-link", label);
      link.href = href;

      if (href.startsWith("http")) {
        link.target = "_blank";
        link.rel = "noreferrer";
      }

      linkContainer.append(link);
      return;
    }

    const disabledLink = createElement("span", "project-link is-disabled", `${label}: Coming Soon`);
    disabledLink.setAttribute("aria-label", `${label} coming soon`);
    linkContainer.append(disabledLink);
  });

  return linkContainer;
}

function createProjectCard(project) {
  const card = createElement("article", "project-card");
  card.id = project.id;

  const header = createElement("div", "project-card-header");
  header.append(createElement("h3", null, `${project.title} \u2014 ${project.agentType}`));

  card.append(header);
  card.append(createProjectSection("Problem", project.problem));
  card.append(createProjectSection("State to Change", project.stateToChange));
  card.append(createProjectLoop(project));
  card.append(createProjectSection("Matter-State Transformation", project.matterStateTransformation));
  card.append(createProjectSection("Evidence / Outcome", project.evidenceOutcome));
  card.append(createProjectSection("Links", createProjectLinks(project.links)));

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