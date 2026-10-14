document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector("[data-site-nav-toggle]");

  if (!toggle) return;

  const menu = document.getElementById(toggle.dataset.siteNavToggle);

  if (!menu) return;

  const setExpanded = (expanded) => {
    toggle.setAttribute("aria-expanded", String(expanded));
    menu.classList.toggle("show", expanded);
  };

  toggle.addEventListener("click", () => {
    setExpanded(toggle.getAttribute("aria-expanded") !== "true");
  });

  menu.addEventListener("click", (event) => {
    if (event.target.closest("a") && window.matchMedia("(max-width: 767px)").matches) {
      setExpanded(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
      setExpanded(false);
      toggle.focus();
    }
  });

  window.matchMedia("(min-width: 768px)").addEventListener("change", (event) => {
    if (event.matches) setExpanded(false);
  });
});
