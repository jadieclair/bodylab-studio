// Create a custom navigation background on user behaviour

const navbarBg = document.querySelector("#navbar-bg");

// Add navbar background styles to pages
window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    navbarBg.classList.add("scrolled");
  } else {
    navbarBg.classList.remove("scrolled");
  }
});
