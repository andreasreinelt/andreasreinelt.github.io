document.addEventListener("DOMContentLoaded", () => {

  // Main Menu Script for small screens
  initMenu();

  // toggleLanguage Button
  initLanguageToggle();

  // DarkMode Button
  initDarkMode();

  function updateHeaderHeight() {
    const header = document.querySelector("header");
    if (header) {
      document.documentElement.style.setProperty("--header-height", `${header.offsetHeight}px`);
    }
  }
  
  window.addEventListener("load", updateHeaderHeight);
  window.addEventListener("resize", updateHeaderHeight);
  
});