document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".navbar a");
  const currentPath = window.location.pathname;

  navLinks.forEach(link => {
    const linkPath = link.getAttribute("href");

    // Handle Home: make both "/" and "/index.html" count as Home
    if (
      (currentPath === "/" || currentPath.endsWith("/index.html")) &&
      (linkPath === "/index.html" || linkPath === "/")
    ) {
      link.classList.add("active");
    }
    // Handle all other pages normally
    else if (currentPath.endsWith(linkPath)) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});
