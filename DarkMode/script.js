function initDarkMode() {
  const toggle = document.getElementById('darkmode-toggle');
  const languageToggle = document.getElementById('language-toggle');

  function updateTooltip() {
    const currentLang = languageToggle.getAttribute('data-current-lang') || 'de';
    const isDark = document.body.classList.contains('dark-mode');

    if (currentLang === 'de') {
      toggle.title = isDark ? 'Wechsel zu hellem Modus' : 'Wechsel zu dunklem Modus';
    } else {
      toggle.title = isDark ? 'Switch to light mode' : 'Switch to dark mode';
    }
  }

  function setDarkMode(isDark) {
    document.body.classList.toggle('dark-mode', isDark);
    toggle.textContent = isDark ? '💡' : '🌙';
    updateTooltip();
  }

  toggle.addEventListener('click', (event) => {
    event.preventDefault();
    const isDark = document.body.classList.toggle('dark-mode');
    setDarkMode(isDark);
  });

  languageToggle.addEventListener('languageChanged', updateTooltip);

  const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  setDarkMode(isSystemDark);
}