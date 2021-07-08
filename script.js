const toggleMenu = document.querySelector("#toggle__menu");
const menuItems = document.querySelector("#menu__items");
const topHeader = document.querySelector(".top__header");
// const cards = document.querySelectorAll(".card2");
// console.log(cards);

toggleMenu.addEventListener("click", function () {
  toggleMenu.classList.toggle("fa-bars");
  toggleMenu.classList.toggle("fa-times");
  menuItems.classList.toggle("hidden");
  topHeader.classList.toggle("top__header-tab");
});

window.addEventListener("scroll", function () {
  topHeader.classList.toggle("sticky-nav", window.scrollY > 0);
});
