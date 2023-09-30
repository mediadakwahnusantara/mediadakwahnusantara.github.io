const muridnakal_open_btn = document.querySelector(".muridnakal-open-btn");
const muridnakal_close_btn = document.querySelector(".muridnakal-close-btn");
const muridnakal_nav = document.querySelectorAll(".muridnakal-nav");

muridnakal_open_btn.addEventListener("click", () => {
  muridnakal_nav.forEach((nav_el) => {
    nav_el.classList.add("visible");
  });
});

muridnakal_close_btn.addEventListener("click", () => {
  muridnakal_nav.forEach((nav_el) => {
    nav_el.classList.remove("visible");
  });
});

// GET IN TOUCH COMPONENT
const floating_btn = document.querySelector(".floating-btn");
const close_btn = document.querySelector(".close-btn");
const social_panel_container = document.querySelector(
  ".social-panel-container"
);

floating_btn.addEventListener("click", () => {
  social_panel_container.classList.toggle("visible");
});

close_btn.addEventListener("click", () => {
  social_panel_container.classList.remove("visible");
});
