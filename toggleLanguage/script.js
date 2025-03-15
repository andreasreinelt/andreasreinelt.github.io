/* Language Toggle Script
  provides a language switcher that dynamically updates the content based on the selected language
  elements have a data-lang attribute
  will also fire trigger languageChanged to make everything work with the dark mode toggle
*/

function initLanguageToggle() {

  // reads the language the user is using and sets en as default, unless browser is set to german
  let userLang = (navigator.language || navigator.userLanguage || "").toLowerCase();
  let currentLang = userLang.startsWith("de") ? "de" : "en";

  const toggle = document.getElementById("language-toggle");
  const toggleText = toggle.querySelector('.toggle-text');
  const elements = document.querySelectorAll("[data-lang]");

  function updateContent() {
    elements.forEach(el => {
      el.classList.toggle("hidden", el.getAttribute("data-lang") !== currentLang);
    });

    const textDe = toggle.getAttribute("data-text-de") || "Switch to English";
    const textEn = toggle.getAttribute("data-text-en") || "Wechsel zu Deutsch";
    toggleText.innerText = currentLang === "de" ? textDe : textEn;

    toggle.setAttribute('data-current-lang', currentLang);

    // Event trigger to update NightMode Toggle to the right language
    toggle.dispatchEvent(new CustomEvent('languageChanged', { detail: currentLang }));
  }

  toggle.addEventListener("click", () => {
    currentLang = currentLang === "de" ? "en" : "de";
    updateContent();
  });

  updateContent();
}