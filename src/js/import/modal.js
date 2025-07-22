(() => {
const modalRefs = {
  openModalBtns: document.querySelectorAll("[data-open-modal]"), 
  closeModalBtn: document.querySelector("[data-close-modal]"),
  backdrop: document.querySelector("[data-backdrop]"),
};
modalRefs.openModalBtns.forEach(btn => {
  btn.addEventListener("click", toggleModal);
});
modalRefs.closeModalBtn.addEventListener("click", toggleModal);
modalRefs.backdrop.addEventListener("click", onModalBackdropClick);
function toggleModal() {
  document.body.classList.toggle("no-scroll");
  modalRefs.backdrop.classList.toggle("is-hidden");
}
function onModalBackdropClick(event) {
  if (event.target === event.currentTarget) {
    toggleModal();
  }
}
})();