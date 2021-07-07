const toggleMenu = document.querySelector("#toggle__menu");
const menuItems = document.querySelector("#menu__items");
const topHeader = document.querySelector(".nav__area");

const openMenu = function () {
  toggleMenu.classList.toggle("fa-bars");
  toggleMenu.classList.toggle("fa-times");
  menuItems.classList.toggle("hidden");
  topHeader.classList.toggle("nav__area-tab");
};

toggleMenu.addEventListener("click", openMenu);
