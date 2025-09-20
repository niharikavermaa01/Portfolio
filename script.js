document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.querySelector('.nav-links');
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('open');
  });

    const glowElement = document.getElementById("mouse-glow-effect");
    window.addEventListener('mousemove', (event) => {
      const { clientX, clientY } = event;
      glowElement.style.left = `${clientX}px`;
      glowElement.style.top = `${clientY}px`;
    });

  // --- Close mobile menu when a link is clicked ---
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        hamburger.classList.remove('open');
      }
    });
  });
});

// --- 3D TILT EFFECT LOGIC ---
const tiltElements = document.querySelectorAll(".skill-card, .timeline-content, .project-card");
// The rest of the code remains the same


