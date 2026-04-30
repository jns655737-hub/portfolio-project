// Scroll Spy (Active Nav Highlight)
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120; // adjust for navbar height
    const sectionHeight = section.offsetHeight;

    if (window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("text-pink-500", "font-bold");

    if (link.getAttribute("href") === "#" + currentSection) {
      link.classList.add("text-pink-500", "font-bold");
    }
  });
});