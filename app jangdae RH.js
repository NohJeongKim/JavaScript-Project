const toogleBtn = document.querySelector(".nav__toogleBtn");
const menu = document.querySelector(".nav__menu");
const icons = document.querySelector(".nav__icons");

toogleBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
  icons.classList.toggle("active");
});
