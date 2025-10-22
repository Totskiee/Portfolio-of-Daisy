// header.js
document.addEventListener("DOMContentLoaded", () => {
  // Get the current page path (like /pages/about.html)
  const currentPath = window.location.pathname;

  // Get all nav links
  const navLinks = document.querySelectorAll(".navbar a");

  navLinks.forEach(link => {
    const linkPath = link.getAttribute("href");

    // If the link matches the current page path, highlight it
    if (currentPath.endsWith(linkPath.split("/").pop())) {
      link.classList.add("active");
    }
  });
});
