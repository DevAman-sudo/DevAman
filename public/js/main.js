// DOM elements //
const mainNav = document.getElementById('main_nav');
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

// navbar animation //
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 0) {
        mainNav.style.transition = "0.3s ease-in";
        mainNav.style.height = '6.5rem';
    } else {
        mainNav.style.height = "7.5rem";
    }
});


// Hamburger Menu //
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});