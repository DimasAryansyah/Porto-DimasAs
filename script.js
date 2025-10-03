// Toggle menu dan ikon hamburger
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active"); // ubah hamburger jadi X
  navLinks.classList.toggle("show"); // tampilkan / sembunyikan menu
});

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});