document.addEventListener("DOMContentLoaded", function() {
    const navbarLinks = document.querySelectorAll("nav a");

    navbarLinks.forEach(link => {
      link.addEventListener("click", event => {
        event.preventDefault();

        const targetSectionId = link.getAttribute("href");
        const targetSection = document.querySelector(targetSectionId);

        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: "smooth"
          });
        }
      });
    });

    // Check if the page was refreshed
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
      window.scrollTo(0, 0);
    }
  });