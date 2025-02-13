// Make the navbar background opaque when scrolling down
window.addEventListener("scroll", () => {
  const navbar = document.querySelector("nav");
  navbar.classList.toggle("active", window.scrollY > 0);
});

// Hamburger menu script for mobile responsiveness
const menuToggleInput = document.querySelector(".menu-toggle input");
const navList = document.querySelector("nav ul");

menuToggleInput.addEventListener("click", () => {
  navList.classList.toggle("slide");
});

// Show scroll-up button when the page is scrolled down
window.addEventListener("scroll", () => {
  const scrollUpButton = document.querySelector(".fa-arrow-up");
  if (window.scrollY > 0) {
    scrollUpButton.classList.add("active");
  } else {
    scrollUpButton.classList.remove("active");
  }
});
