// DOM elements //
const toggleButton = document.getElementById('toggle_button');
const navbarLinks = document.getElementById('navbar_links');

toggleButton.addEventListener('click' , () => {
   navbarLinks.classList.toggle('active'); 
});