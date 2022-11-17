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

const navbar = document.querySelector(".header--navbar-nav");

navbar.addEventListener("click", function (e) {
  e.preventDefault();

  if (e.target.classList.contains("header--navbar-link")) {
    const id = e.target.getAttribute("href");

    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

// const header = document.querySelector(".header");

// const nav = document.querySelector(".header--navbar");
// const navHeight = nav.getBoundingClientRect().height;

// const navSticky = function (entries) {
//   const [entry] = entries;

//   if (!entry.isIntersecting) {
//     nav.classList.add("sticky");
//   } else {
//     nav.classList.remove("sticky");
//   }
// };
// const navObserver = new IntersectionObserver(navSticky, {
//   root: null,
//   threshold: 0,
//   rootMargin: `-${navHeight}px`,
// });

// navObserver.observe(header);
