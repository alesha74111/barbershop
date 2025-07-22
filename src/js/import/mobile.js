(() => {
  const mobileRefs = {
    openMobileBtn: document.querySelector("[data-mobile-open]"),
    closeMobileBtn: document.querySelector("[data-mobile-close]"),
    mobileMenu: document.querySelector("[data-mobile-menu]"),
  };
  mobileRefs.openMobileBtn.addEventListener("click", toggleModal);
  mobileRefs.closeMobileBtn.addEventListener("click", toggleModal);
  mobileRefs.mobileMenu.addEventListener("click", removeModal);
  const mobileLinks = document.querySelectorAll(".mobile-menu__item .nav__link");
  const mobileButton = document.querySelector(".mobile-menu__item .mobile-menu__button");
  mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
      mobileRefs.mobileMenu.classList.remove("is-open");
      document.body.classList.remove("no-scroll");
    });
  });
  mobileButton.addEventListener("click", () => {
      mobileRefs.mobileMenu.classList.remove("is-open");
      document.body.classList.add("no-scroll");
    });
  function toggleModal() {
    document.body.classList.toggle("no-scroll");
    mobileRefs.mobileMenu.classList.toggle("is-open");
  }
  function removeModal(e) {
    if (e.target === mobileRefs.mobileMenu) {
      toggleModal();
    }
  }
})();