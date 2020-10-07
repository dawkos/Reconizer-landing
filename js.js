const burger = document.querySelector(".burger-menu");
const closeMenu = document.querySelector(".close");
const menu = document.querySelector(".mobile-nav");

closeMenu.addEventListener("click", closeMenuBtn);
burger.addEventListener("click", openMenu);

function openMenu() {
    menu.style.display = "flex";
}

function closeMenuBtn() {
    menu.style.display = "none";
}