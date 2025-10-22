document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".navbar a");
  const path = window.location.pathname;

  // normalize the current page name (remove folders, handle root)
  let currentPage = path.substring(path.lastIndexOf("/") + 1);

  // if the user is at the root ("/"), make it act like index.html
  if (currentPage === "" || currentPage === "/") {
    currentPage = "index.html";
  }

  navLinks.forEach(link => {
    // get only the filename of each link (e.g. "about.html")
    const linkPage = link.getAttribute("href").split("/").pop();

    // check if it matches current page
    if (linkPage === currentPage) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});
