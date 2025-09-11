const skillsPanel = document.querySelector(".skills");
const closeBtn = document.querySelector(".crossbtn");
const body = document.querySelector("body");
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

// Open when navbar "Skills" is clicked
document.querySelector('.nav-links a[href="#skills"]').addEventListener("click", function(e) {
  e.preventDefault();
  skillsPanel.classList.add("active");
});

closeBtn.addEventListener("click", function() {
  skillsPanel.classList.remove("active");
});

// remove skill panel when click scroll
window.addEventListener("scroll", () => {
  if (skillsPanel.classList.contains("active")) {
    skillsPanel.classList.remove("active");
  }
});

// responsiveness
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("open");
});

document.querySelectorAll(".nav-links li a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    hamburger.classList.remove("open");
  });
});
