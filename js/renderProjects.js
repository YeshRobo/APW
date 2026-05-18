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

function createProjectSection(title, value) {
  const section = createElement("div", "project-section");
  section.append(createElement("h4", null, title));
  section.append(value instanceof Node ? value : createElement("p", null, value));
  return section;
}

function createProjectLinks(links) {
  const linkContainer = createElement("div", "project-links");

  links.forEach((linkData) => {
    if (linkData.disabled || !linkData.href) {
      const disabledLink = createElement("span", "project-link is-disabled", linkData.label);
      disabledLink.setAttribute("aria-disabled", "true");
      linkContainer.append(disabledLink);
      return;
    }

    const link = createElement("a", "project-link", linkData.label);
    link.href = linkData.href;

    if (linkData.external || linkData.href.startsWith("http")) {
      link.target = "_blank";
      link.rel = "noreferrer";
    }

    linkContainer.append(link);
  });

  return linkContainer;
}

function createProjectCard(project) {
  const card = createElement("article", "project-card project-card-summary");
  card.id = project.id;

  const header = createElement("div", "project-card-header");
  header.append(createElement("h3", null, project.title));
  header.append(createElement("p", "agent-type", project.agentType));

  card.append(header);
  card.append(createProjectSection("Summary", project.summary));
  card.append(createProjectSection("Key Technologies", createTagList(project.technologies)));
  card.append(createProjectSection("Buttons", createProjectLinks(project.links)));

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