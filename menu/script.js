document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".nav-menu");
  const menuToggle = document.getElementById("menu-toggle");

  menuToggle.addEventListener("click", () => {
    if (menu.classList.contains("open")) {
      menu.classList.remove("open");
      menu.classList.add("closing");

      setTimeout(() => {
        menu.classList.remove("closing");
        menu.style.display = "none";
      }, 300);
    } else {
      menu.style.display = "flex";
      menu.classList.add("open");
    }
  });

  document.addEventListener("click", (event) => {
    if (!menu.contains(event.target) && event.target !== menuToggle) {
      if (menu.classList.contains("open")) {
        menu.classList.remove("open");
        menu.classList.add("closing");

        setTimeout(() => {
          menu.classList.remove("closing");
          menu.style.display = "none";
        }, 300);
      }
    }
  });
});