document.addEventListener('DOMContentLoaded', () => {

  const hamburger = document.getElementById('hamburger');
  const navLinks = document.querySelector('.nav-links');

  // --- Reusable Panel Logic ---
  const setupPanel = (buttonSelector, panelSelector, activeClass) => {
    const openButton = document.querySelector(buttonSelector);
    const panel = document.querySelector(panelSelector);
    // Find any close button inside the panel, regardless of its specific class
    const closeButton = panel.querySelector('[class*="crossbtn"]');

    if (!openButton || !panel || !closeButton) {
      console.error("Panel elements not found for:", buttonSelector);
      return;
    }

    openButton.addEventListener('click', (e) => {
      e.preventDefault();
      // Close other panels before opening a new one
      document.querySelectorAll('.slide-in-panel').forEach(p => p.classList.remove('is-visible'));
      panel.classList.add('is-visible');
    });

    closeButton.addEventListener('click', () => {
      panel.classList.remove('is-visible');
    });
  };

  // Initialize both panels
  setupPanel('a[href="#skills"]', '#skills-panel', 'is-visible');
  setupPanel('a[href="#experience"]', '#experience-panel', 'is-visible');


  // --- Hamburger Menu Logic ---
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('open');
  });

  // --- Close mobile menu when a link is clicked ---
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      // Check if the mobile menu is active before removing classes
      if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        hamburger.classList.remove('open');
      }
    });
  });

});