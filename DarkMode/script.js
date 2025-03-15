/* Dark Mode Toggle Script
  dark mode based on the system preference or user selection. selection is not saved. 
  language change is also possible, there is an eventlistener languageChanged added for that
*/

function initDarkMode() {
  const toggle = document.getElementById('darkmode-toggle');
  const languageToggle = document.getElementById('language-toggle');

  function updateDarkModeUI() {
    const currentLang = languageToggle.getAttribute('data-current-lang') || 'de';
    const isDark = document.body.classList.contains('dark-mode');

    const tooltipText = isDark
      ? (currentLang === 'de' ? 'Wechsel zu hellem Modus' : 'Switch to light mode')
      : (currentLang === 'de' ? 'Wechsel zu dunklem Modus' : 'Switch to dark mode');
    
    toggle.title = tooltipText;

    const labelText = isDark
      ? (currentLang === 'de' ? 'Heller Modus' : 'Light Mode')
      : (currentLang === 'de' ? 'Dunkler Modus' : 'Dark Mode');

    toggle.innerHTML = (isDark ? '💡' : '🌙') + ` <span class="darkmode-label">${labelText}</span>`;
  }

  function setDarkMode(isDark) {
    document.body.classList.toggle('dark-mode', isDark);
    updateDarkModeUI();
  }

  toggle.addEventListener('click', (event) => {
    event.preventDefault();
    const isDark = document.body.classList.toggle('dark-mode');
    setDarkMode(isDark);
  });

  languageToggle.addEventListener('languageChanged', updateDarkModeUI);

  const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  setDarkMode(isSystemDark);
}