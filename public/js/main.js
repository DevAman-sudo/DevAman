// DOM elements //
const mainNav = document.getElementById('main_nav');
const logo = document.querySelector('.logo');
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

// gsap animations //
const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");

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