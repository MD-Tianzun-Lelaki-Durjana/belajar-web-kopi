// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu diclick
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// tanpa harus click di hamburger-menu, tapi bisa diclick di luar sidebar untuk menghilangkan navbar-nav nya
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
