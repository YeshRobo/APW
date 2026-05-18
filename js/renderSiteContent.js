let siteContent = null;

async function loadSiteContent(version = Date.now()) {
  const module = await import(`../data/siteContent.js?v=${version}`);
  siteContent = module.siteContent;
}

function getContentValue(path) {
  return path.split(".").reduce((value, key) => value?.[key], siteContent);
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

function renderTextBindings() {
  document.querySelectorAll("[data-content]").forEach((element) => {
    const value = getContentValue(element.dataset.content);

    if (value !== undefined) {
      element.textContent = value;
    }
  });
}

function renderMeta() {
  document.title = siteContent.meta.title;

  const description = document.querySelector('meta[name="description"]');
  if (description) {
    description.setAttribute("content", siteContent.meta.description);
  }
}

function renderBrand() {
  const brandLink = document.querySelector("[data-brand-link]");

  if (brandLink) {
    brandLink.setAttribute("aria-label", siteContent.brand.ariaLabel);
  }
}

function renderNavigation() {
  const navigation = document.querySelector("[data-navigation]");

  if (!navigation) {
    return;
  }

  const navItems = siteContent.navigation.map((item) => {
    const listItem = document.createElement("li");
    const link = createElement("a", null, item.label);
    link.href = item.href;
    listItem.append(link);
    return listItem;
  });

  navigation.replaceChildren(...navItems);
}

function renderLinkList(containerSelector, links) {
  const container = document.querySelector(containerSelector);

  if (!container) {
    return;
  }

  const linkElements = links.map((linkData) => {
    const link = createElement("a", null, linkData.label);
    link.href = linkData.href;

    if (linkData.external) {
      link.target = "_blank";
      link.rel = "noreferrer";
    }

    return link;
  });

  container.replaceChildren(...linkElements);
}

function renderHeroHighlights() {
  const highlightContainer = document.querySelector("[data-hero-highlights]");

  if (!highlightContainer) {
    return;
  }

  const highlights = siteContent.hero.highlights.map((highlight) =>
    createElement("span", null, highlight)
  );

  highlightContainer.replaceChildren(...highlights);
}

function renderHeroActions() {
  const actionContainer = document.querySelector("[data-hero-actions]");

  if (!actionContainer) {
    return;
  }

  const actions = siteContent.hero.actions.map((action) => {
    const link = createElement("a", `button ${action.style}`, action.label);
    link.href = action.href;
    return link;
  });

  actionContainer.replaceChildren(...actions);
}

function renderParagraphList(containerSelector, paragraphs) {
  const container = document.querySelector(containerSelector);

  if (!container) {
    return;
  }

  container.replaceChildren(...paragraphs.map((paragraph) => createElement("p", null, paragraph)));
}

function renderPhilosophyCopy() {
  const container = document.querySelector("[data-philosophy-copy]");

  if (!container) {
    return;
  }

  const paragraphs = siteContent.philosophy.paragraphs.map((paragraph) =>
    createElement("p", null, paragraph)
  );
  const equation = createElement("div", "equation-panel");
  equation.setAttribute("aria-label", siteContent.philosophy.equation.label);

  const equationParts = siteContent.philosophy.equation.parts.map((part) =>
    createElement("span", null, part.replace("\\u2192", "\u2192"))
  );
  const result = createElement("strong", null, siteContent.philosophy.equation.result);

  equation.replaceChildren(...equationParts, result);
  container.replaceChildren(...paragraphs, equation);
}

function renderFrameworkCards() {
  const container = document.querySelector("[data-framework-cards]");

  if (!container) {
    return;
  }

  const cards = siteContent.framework.cards.map((card) => {
    const article = createElement("article", "info-card");
    article.append(createElement("span", "card-index", card.index));
    article.append(createElement("h3", null, card.title));
    article.append(createElement("p", null, card.description));
    return article;
  });

  container.replaceChildren(...cards);
}

function renderPortfolioSkillList() {
  const container = document.querySelector("[data-skill-list]");

  if (!container) {
    return;
  }

  container.replaceChildren(
    ...siteContent.portfolio.skills.map((skill) => createElement("span", null, skill))
  );
}

function renderPortfolioGuideFlow() {
  const container = document.querySelector("[data-portfolio-guide-flow]");

  if (!container) {
    return;
  }

  container.replaceChildren(
    ...siteContent.portfolio.guide.flow.map((item) => createElement("span", null, item))
  );
}

function renderSpectrumList() {
  const container = document.querySelector("[data-spectrum-list]");

  if (!container) {
    return;
  }

  container.replaceChildren(
    ...siteContent.spectrum.items.map((item) => createElement("li", null, item))
  );
}

export async function renderSiteContent(version) {
  await loadSiteContent(version);
  renderMeta();
  renderTextBindings();
  renderBrand();
  renderNavigation();
  renderHeroHighlights();
  renderHeroActions();
  renderPhilosophyCopy();
  renderFrameworkCards();
  renderPortfolioGuideFlow();
  renderPortfolioSkillList();
  renderSpectrumList();
  renderParagraphList("[data-about-copy]", siteContent.about.paragraphs);
  renderLinkList("[data-contact-links]", siteContent.contact.links);
}