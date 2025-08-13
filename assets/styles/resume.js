document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("resumeModal");
  const openBtn = document.getElementById("resumeBtn");
  const cancelBtn = document.getElementById("cancelBtn");

  openBtn.addEventListener("click", function () {
    modal.style.display = "flex";
  });

  cancelBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // Close modal when clicking outside content
  window.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
