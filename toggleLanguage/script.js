document.addEventListener("DOMContentLoaded", () => {
  let currentLang = "de";
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
  }

  toggle.addEventListener("click", () => {
    currentLang = currentLang === "de" ? "en" : "de";
    updateContent();
  });

  updateContent();
});