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

function markActiveNavigation() {
  const activeNav = document.body.dataset.activeNav;

  if (!activeNav) {
    return;
  }

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.classList.toggle("is-active", link.dataset.nav === activeNav);
  });
}

export function setupPageShell() {
  updateCurrentYear();
  setupHeaderState();
  setupMobileNavigation();
  markActiveNavigation();
}
