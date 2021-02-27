burger = document.querySelector(".hamburger");
navbar = document.querySelector(".navbar");
logo = document.querySelector(".logo");

burger.addEventListener('click', () => {
    logo.classList.toggle('v_class');
    navbar.classList.toggle('h_nav');
});