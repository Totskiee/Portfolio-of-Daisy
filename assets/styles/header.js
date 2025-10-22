document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".navbar a");

  // Get current page filename (e.g. "about.html")
  let currentPage = window.location.pathname.split("/").pop();

  // If the user is at the root ("/"), assume it's index.html
  if (currentPage === "" || currentPage === "/") {
    currentPage = "index.html";
  }

  // Remove "active" class from all links, then add it to the current one
  navLinks.forEach(link => {
    const linkPage = link.getAttribute("href").split("/").pop();
    if (linkPage === currentPage) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});
