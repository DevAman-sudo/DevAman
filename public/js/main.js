// DOM elements //
const mainNav = document.getElementById('main_nav');
const logo = document.querySelector('.logo');
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const toTop = document.querySelector('.to-top');

// navbar animation //
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 0) {
        mainNav.style.transition = "0.3s ease-in";
        mainNav.style.height = '6.5rem';
        mainNav.style.background = "#C70039";
        logo.style.fontSize = "2.3rem";
    } else {
        mainNav.style.transition = "0.2s ease-in";
        mainNav.style.height = "7.5rem";
        mainNav.style.background = "transparent";
        logo.style.fontSize = "2.5rem";
    }
});

// Hamburger Menu //
let menuOpen = false;
hamburger.addEventListener("click", () => {
    // hamburger animation //
    if (!menuOpen) {
        hamburger.classList.add('open-menu');
        menuOpen = true;
    } else {
        hamburger.classList.remove('open-menu');
        menuOpen = false;
    }

    // toggle function //
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });
});

// Scroll To Top //
window.addEventListener('scroll' , () => {
    if (window.pageYOffset > 100) {
        toTop.classList.add('active');
    } else {
        toTop.classList.remove('active');
    }
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