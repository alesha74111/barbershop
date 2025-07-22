(() => {
function changeHeaderBackground() {
  const header = document.querySelector("[data-header]");
  const headerOffsetTrigger = header.offsetHeight - 50;
  const pageOffset = window.scrollY;
  const logo = document.querySelector("#logo");

  if (pageOffset > headerOffsetTrigger) {
    header.classList.add("header__wrapper--scrolled");
    logo.classList.remove("logo--black");
  } else {
    header.classList.remove("header__wrapper--scrolled");
    logo.classList.add("logo--black");
  }
}
window.addEventListener("scroll", changeHeaderBackground);
  changeHeaderBackground();
})();