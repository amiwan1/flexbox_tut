const nav = document.getElementById("nav-links");
const navBtn = document.getElementById("nav-toggle");
// date set up
const date = (document.getElementById("date").innerHTML =
  new Date().getFullYear());

// nav toggle
navBtn.addEventListener("click", () => {
  nav.classList.toggle("show-links");
});

// smooth scroll
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    nav.classList.remove("show-links");

    const id = e.target.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    let position = element.offsetTop - 62;

    window.scrollTo({
      left: 0,
      top: position,
      behavior: "smooth",
    });
  });
});
