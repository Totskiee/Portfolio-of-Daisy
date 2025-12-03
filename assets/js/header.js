document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".navbar a");
  let currentPath = window.location.pathname;

  // Normalize the path (handle Netlify / Live Server differences)
  if (currentPath.endsWith("/") || currentPath === "") {
    currentPath = "/index.html";
  } else if (!currentPath.endsWith(".html")) {
    currentPath += ".html";
  }

  navLinks.forEach(link => {
    let linkPath = link.getAttribute("href");

    // Normalize link paths too
    if (linkPath === "/" || linkPath === "./") {
      linkPath = "/index.html";
    } else if (!linkPath.endsWith(".html") && !linkPath.includes("#")) {
      linkPath += ".html";
    }

    // Compare normalized paths
    if (currentPath.endsWith(linkPath)) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});
