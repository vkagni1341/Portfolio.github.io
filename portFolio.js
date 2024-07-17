document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('.nav-items a[href^="#"]');

    links.forEach(link => {
      link.addEventListener("click", function(e) {
        e.preventDefault();

        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          // Calculate distance from the top of the page to the target element
          const offsetTop = targetElement.offsetTop;

          // Smooth scroll animation
          window.scrollTo({
            top: offsetTop,
            behavior: "smooth"
          });
        }
      });
    });
  });