const nav = document.querySelector(".nav_section");
const cont = document.querySelector(".slider");
const topOfNav = nav.offsetTop;

function fixNav() {
  if (window.scrollY >= topOfNav) {
    cont.style.paddingTop = nav.offsetHeight + "px";
    nav.classList.add("fixed-nav");
  } else {
    cont.style.paddingTop = 0;
    nav.classList.remove("fixed-nav");
  }
}
window.addEventListener("scroll", fixNav);
