// DOM elements //
const mainNavbar = document.getElementById('main_navbar');
const menu = document.getElementById('menu');
const navLinksUl = document.getElementById('nav_links_ul');

window.addEventListener('scroll', () => {

    if (window.pageYOffset > 0) {
        mainNavbar.style.transition = "0.3s ease-in";
        mainNavbar.style.height = '6.5rem';
        mainNavbar.classList.add('bg_black');
        mainNavbar.classList.add('txt_white');
    } else {
        mainNavbar.style.transition = "0.3s ease-in";
        mainNavbar.style.height = "7.5rem";
        mainNavbar.classList.remove('bg_black');
        mainNavbar.classList.remove('txt_white');
    }

});

menu.addEventListener('click', () => {
    if (navLinksUl.style.display == "none") {
        navLinksUl.style.display = "flex";
    } else {
        navLinksUl.style.display = "none";
    }
});