import { renderProjects } from "./renderProjects.js";

function updateCurrentYear() {
  const currentYear = document.querySelector("#current-year");

  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }
}

function setupHeaderState() {
  const header = document.querySelector("#site-header");

  function updateHeaderState() {
    header?.classList.toggle("is-scrolled", window.scrollY > 16);
  }

  updateHeaderState();
  window.addEventListener("scroll", updateHeaderState, { passive: true });
}

function setupMobileNavigation() {
  const menuButton = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector("#primary-menu");
  const navAnchors = document.querySelectorAll(".nav-links a");

  if (!menuButton || !navLinks) {
    return;
  }

  menuButton.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    document.body.classList.toggle("menu-open", isOpen);
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  navAnchors.forEach((anchor) => {
    anchor.addEventListener("click", () => {
      navLinks.classList.remove("is-open");
      document.body.classList.remove("menu-open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}

function setupActiveNavigation() {
  const navAnchors = document.querySelectorAll(".nav-links a");
  const observedSections = [...document.querySelectorAll("main section[id]")];

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        navAnchors.forEach((anchor) => {
          const isActive = anchor.getAttribute("href") === `#${entry.target.id}`;
          anchor.classList.toggle("is-active", isActive);
        });
      });
    },
    {
      rootMargin: "-45% 0px -45% 0px",
      threshold: 0,
    }
  );

  observedSections.forEach((section) => sectionObserver.observe(section));
}

function setupHeroCanvas() {
  const canvas = document.querySelector("#agent-canvas");
  const context = canvas?.getContext("2d");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  if (!canvas || !context) {
    return;
  }

  const nodes = [];
  const nodeCount = 46;
  let width = 0;
  let height = 0;
  let animationFrame = null;

  function resizeCanvas() {
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    width = canvas.offsetWidth;
    height = canvas.offsetHeight;
    canvas.width = Math.floor(width * pixelRatio);
    canvas.height = Math.floor(height * pixelRatio);
    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
  }

  function createNodes() {
    nodes.length = 0;

    for (let index = 0; index < nodeCount; index += 1) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: 1.8 + Math.random() * 2.8,
        velocityX: -0.18 + Math.random() * 0.36,
        velocityY: -0.16 + Math.random() * 0.32,
        phase: Math.random() * Math.PI * 2,
      });
    }
  }

  function drawNode(node, time) {
    const pulse = Math.sin(time * 0.0016 + node.phase) * 0.35;
    context.beginPath();
    context.arc(node.x, node.y, node.radius + pulse, 0, Math.PI * 2);
    context.fillStyle = "rgba(98, 230, 209, 0.78)";
    context.fill();
  }

  function drawConnections() {
    for (let firstIndex = 0; firstIndex < nodes.length; firstIndex += 1) {
      for (let secondIndex = firstIndex + 1; secondIndex < nodes.length; secondIndex += 1) {
        const firstNode = nodes[firstIndex];
        const secondNode = nodes[secondIndex];
        const distance = Math.hypot(firstNode.x - secondNode.x, firstNode.y - secondNode.y);

        if (distance < 150) {
          const opacity = 1 - distance / 150;
          context.beginPath();
          context.moveTo(firstNode.x, firstNode.y);
          context.lineTo(secondNode.x, secondNode.y);
          context.strokeStyle = `rgba(141, 247, 168, ${opacity * 0.28})`;
          context.lineWidth = 1;
          context.stroke();
        }
      }
    }
  }

  function drawFlowLines(time) {
    const lines = 8;

    for (let index = 0; index < lines; index += 1) {
      const progress = ((time * 0.00008 + index / lines) % 1) * width;
      const y = height * (0.18 + index * 0.09);

      context.beginPath();
      context.moveTo(progress - 90, y);
      context.lineTo(progress + 90, y + Math.sin(time * 0.001 + index) * 20);
      context.strokeStyle = "rgba(242, 184, 75, 0.16)";
      context.lineWidth = 1.2;
      context.stroke();
    }
  }

  function updateNodes() {
    nodes.forEach((node) => {
      node.x += node.velocityX;
      node.y += node.velocityY;

      if (node.x < -20) node.x = width + 20;
      if (node.x > width + 20) node.x = -20;
      if (node.y < -20) node.y = height + 20;
      if (node.y > height + 20) node.y = -20;
    });
  }

  function render(time = 0) {
    context.clearRect(0, 0, width, height);
    context.fillStyle = "#090a0a";
    context.fillRect(0, 0, width, height);

    drawFlowLines(time);
    drawConnections();
    nodes.forEach((node) => drawNode(node, time));

    if (!reducedMotion.matches) {
      updateNodes();
      animationFrame = requestAnimationFrame(render);
    }
  }

  function initializeCanvas() {
    resizeCanvas();
    createNodes();
    cancelAnimationFrame(animationFrame);
    render();
  }

  initializeCanvas();
  window.addEventListener("resize", initializeCanvas);
}

document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  updateCurrentYear();
  setupHeaderState();
  setupMobileNavigation();
  setupActiveNavigation();
  setupHeroCanvas();
});