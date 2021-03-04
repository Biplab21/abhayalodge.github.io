burger = document.querySelector(".hamburger");
navbar = document.querySelector(".navbar");
h_nav = document.querySelector(".h_nav");
services = document.querySelector(".services");
packages = document.querySelector(".packages");

burger.addEventListener('click', () => {
    navbar.classList.toggle('h_nav');
});

// services.addEventListener('click', () => {
//     if (navbar.classList = h_nav)
//     {
//         navbar.classList.remove('h_nav');
//     }
//     else
//     {
//         navbar.classList.toggle('h_nav');
//     }
// });

