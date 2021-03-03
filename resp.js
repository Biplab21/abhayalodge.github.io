burger = document.querySelector(".hamburger");
navbar = document.querySelector(".navbar");

burger.addEventListener('click', () => {
    navbar.classList.toggle('h_nav');
});