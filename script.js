document.querySelectorAll('.menu').forEach(icon => {icon.addEventListener('click', toggleMenu)});

function toggleMenu() {
   const menu = document.querySelector('.menu-links');
   const icon = document.querySelector('.hamburger-icon');
   menu.classList.toggle('active');
   icon.classList.toggle('active');
}