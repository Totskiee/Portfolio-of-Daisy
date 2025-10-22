document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".navbar a");

  // Get current page name (e.g. "about.html" or "")
  let currentPage = window.location.pathname.split("/").pop();

  // If at root (e.g., "/" or empty), treat it as index.html
  if (currentPage === "" || currentPage === "/") {
    currentPage = "index.html";
  }

  navLinks.forEach(link => {
    const linkPage = link.getAttribute("href").split("/").pop();

    // Add active class only to the current page
    if (linkPage === currentPage) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});
