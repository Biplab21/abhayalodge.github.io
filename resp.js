burger = document.querySelector(".hamburger");
navbar = document.querySelector(".navbar");
h_nav = document.querySelector(".h_nav");
services = document.getElementById("#services");
closenav = document.querySelector(".close_nav");
packages = document.getElementById("#packages");

burger.addEventListener('click', () => {
    navbar.classList.toggle('h_nav');
});

closenav.addEventListener('click', () => {
    navbar.classList.toggle('h_nav');
});
