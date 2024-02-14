let lastScroll = 0;

window.addEventListener("scroll", () => {
  if (lastScroll < window.scrollY) {
    navbar.style.top = "-60px";
  } else {
    navbar.style.top = "0px";
  }
  lastScroll = window.scrollY;
});
