document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".navbar a");
  const currentPath = window.location.pathname;

  navLinks.forEach(link => {
    const linkPath = link.getAttribute("href");

    // Handle Home (both "/" and "/index.html")
    if (
      (currentPath === "/" || currentPath.endsWith("/index.html")) &&
      (linkPath === "/index.html" || linkPath === "/")
    ) {
      link.classList.add("active");
    }

    // Handle About page
    else if (currentPath.endsWith("/pages/about.html") && linkPath.endsWith("/pages/about.html")) {
      link.classList.add("active");
    }

    // Handle Testimonial page
    else if (currentPath.endsWith("/pages/testimonial.html") && linkPath.endsWith("/pages/testimonial.html")) {
      link.classList.add("active");
    }

    // ✅ Handle Certificates page
    else if (currentPath.endsWith("/pages/certificates.html") && linkPath.endsWith("/pages/certificates.html")) {
      link.classList.add("active");
    }

    // Handle Contact page
    else if (currentPath.endsWith("/pages/contact.html") && linkPath.endsWith("/pages/contact.html")) {
      link.classList.add("active");
    }

    // Remove "active" from all others
    else {
      link.classList.remove("active");
    }
  });
});

