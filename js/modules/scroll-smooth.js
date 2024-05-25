export default function initScrollSmooth() {
  const linksInternos = document.querySelectorAll('.header-menu a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const sectionTarget = document.querySelector(href);
    sectionTarget.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  [...linksInternos].forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}
