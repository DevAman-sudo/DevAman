// DOM elements //
const mainNav = document.getElementById('main_nav');
const logo = document.querySelector('.logo');
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

// navbar animation //
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 0) {
        mainNav.style.transition = "0.3s ease-in";
        mainNav.style.height = '6.5rem';
        mainNav.style.background = "black";
        logo.style.fontSize = "2.3rem";
    } else {
        mainNav.style.transition = "0.2s ease-in";
        mainNav.style.height = "7.5rem";
        mainNav.style.background = "transparent";
        logo.style.fontSize = "2.5rem";
    }
});


// Hamburger Menu //
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});

// typed js //
const typed = new Typed('.type', {
  strings: [
      "Developer. ",
      "Programmer. ",
      "Bug Hunter. "
      ],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true
});
