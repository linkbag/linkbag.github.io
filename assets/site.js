(() => {
  const lang = document.documentElement.lang.startsWith("zh") ? "zh" : "en";
  const saved = localStorage.getItem("webster-site-language");
  if (location.pathname === "/" && saved === "zh") {
    location.replace("/zh/");
    return;
  }
  localStorage.setItem("webster-site-language", lang);
  document.querySelectorAll(".lang-switch a").forEach((link) => {
    link.addEventListener("click", () => {
      localStorage.setItem(
        "webster-site-language",
        link.lang.startsWith("zh") ? "zh" : "en",
      );
    });
  });

  const menuButton = document.querySelector(".menu-toggle");
  const mobileNav = document.querySelector(".mobile-nav");
  const closeMenu = () => {
    if (!menuButton || !mobileNav) return;
    mobileNav.hidden = true;
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute(
      "aria-label",
      lang === "zh" ? "打开菜单" : "Open menu",
    );
  };
  menuButton?.addEventListener("click", () => {
    const opening = mobileNav.hidden;
    mobileNav.hidden = !opening;
    menuButton.setAttribute("aria-expanded", String(opening));
    menuButton.setAttribute(
      "aria-label",
      opening
        ? lang === "zh"
          ? "关闭菜单"
          : "Close menu"
        : lang === "zh"
          ? "打开菜单"
          : "Open menu",
    );
  });
  mobileNav
    ?.querySelectorAll("a")
    .forEach((link) => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });

  const filterButtons = [...document.querySelectorAll(".filter-chip")];
  const sections = [...document.querySelectorAll(".category-section")];
  for (const button of filterButtons) {
    button.addEventListener("click", () => {
      const selected = button.dataset.filter;
      for (const item of filterButtons) {
        const active = item === button;
        item.classList.toggle("is-active", active);
        item.setAttribute("aria-pressed", String(active));
      }
      for (const section of sections) {
        section.hidden =
          selected !== "all" && section.dataset.category !== selected;
      }
    });
  }
})();
