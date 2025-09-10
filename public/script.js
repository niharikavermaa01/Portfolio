const skillsLink = document.getElementsByClassName('.skills-grid');
const skillsSection = document.getElementsByClassName('skills');

skillsLink.addEventListener('click', function(event) {
  event.preventDefault(); // prevent default jump
  skillsSection.scrollIntoView({ behavior: 'smooth' }); // smooth scroll
  document.body.classList.add('highlight-skills'); // dim other sections
});