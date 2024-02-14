const navbar = document.querySelector("nav");
let a = "";

setInterval(() => {
  a = window.scrollY;
}, 10);

window.addEventListener("scroll", () => {
  let b = window.scrollY;
  if (a < b && a > 10) {
    navbar.style.top = "-60px";
  } else {
    navbar.style.top = "0px";
  }
});
