(() => {
const scrollTopBtn = document.getElementById("scrollTopBtn");
function toggleScrollTopBtn() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    scrollTopBtn.classList.remove("hidden");
  } else {
    scrollTopBtn.classList.add("hidden");
  }
}
window.addEventListener("scroll", toggleScrollTopBtn);
scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
toggleScrollTopBtn();
})();