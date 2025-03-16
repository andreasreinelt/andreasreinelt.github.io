/* Navigation Menu Script
  this is for mobile navigation only (screen size less than 768px)
  a hamburger menu is shown and this is animated for smooth opening/closing from the side
*/

function initMenu() {
  const menu = document.querySelector(".nav-menu");
  const menuToggle = document.getElementById("menu-toggle");
  const mainContent = document.getElementById("main-content");

  const closeMenu = () => {
    if (menu.classList.contains("open")) {
      menu.classList.remove("open");
      menu.classList.add("closing");
      mainContent.removeAttribute("inert");

      setTimeout(() => {
        menu.classList.remove("closing");
        menu.style.display = "none";
      }, 300);
    }
  };

  menuToggle.addEventListener("click", () => {
    if (menu.classList.contains("open")) {
      closeMenu();
    } else {
      menu.style.display = "flex";
      menu.classList.add("open");
      // inert to main-content makes the site not useable when the menu is open, so you can just use the menu
      mainContent.setAttribute("inert", "");
    }
  });

  document.addEventListener("click", (event) => {
    if (!menu.contains(event.target) && event.target !== menuToggle) {
      closeMenu();
    }
  });

  const menuItems = document.querySelectorAll(".nav-menu li a");
  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      closeMenu();
    });
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      menu.style.display = "";
      menu.classList.remove("open");
      menu.classList.remove("closing");
    }
  });
}