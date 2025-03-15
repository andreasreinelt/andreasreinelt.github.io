/* Global Initialization Script 
  initializes all essential functions on page load
*/

document.addEventListener("DOMContentLoaded", () => {

  // Main Menu Script for small screens
  initMenu();

  // toggleLanguage Button
  initLanguageToggle();

  // DarkMode Button
  initDarkMode();

  /* Updates CSS --header-height to be the right hight of the header because of sticky position to make correct 
  scrolling possible, 20px are added in CSS to show a margin */
  function updateHeaderHeight() {
    const header = document.querySelector("header");
    if (header) {
      document.documentElement.style.setProperty("--header-height", `${header.offsetHeight}px`);
    }
  }

  window.addEventListener("load", updateHeaderHeight);
  window.addEventListener("resize", updateHeaderHeight);

});