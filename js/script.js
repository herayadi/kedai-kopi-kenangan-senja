// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");

// ketika hamburger menu diklik
document.querySelector("#hamburger-menu").onclick = function (e) {
  e.preventDefault();// <- supaya klik tidak reload ke atas halaman
  navbarNav.classList.toggle("active");
};

//klik diluar sidebar untuk hilangkan navbar
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
