for (let i = 1; i < 8; i++) {
  document.addEventListener("DOMContentLoaded", function () {
    const triggerImage = document.getElementById(`triggerImage${i}`);
    const modalImage = document.getElementById(`modalImage1`);
    const imageModal = new bootstrap.Modal(
      document.getElementById(`imageModal1`)
    );
    const modalHeader = document.getElementById("imageModalLabel");
    const closeModalButton = document.getElementById("closeModalButton");

    triggerImage.addEventListener("click", function () {
      modalImage.src = this.src;
      imageModal.show();
      modalHeader.textContent = this.alt;
    });

    closeModalButton.addEventListener("click", function () {
      imageModal.hide();
    });
  });
}
