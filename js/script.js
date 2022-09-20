// const navLinks = document.getElementById("navLinks");
// function showMenu() {
//   navLinks.style.left = "0";
// }
// function hideMenu() {
//   navLinks.style.left = "-300px";
// }

const navLinks = document.getElementById("navLinks");
const openMenu = document.querySelector(".fa-solid.fa-bars");
const closeMenu = document.querySelector(".fa-solid.fa-xmark");

openMenu.addEventListener("click", function () {
  navLinks.classList.add("hidden");
});
closeMenu.addEventListener("click", function () {
  navLinks.classList.remove("hidden");
});
