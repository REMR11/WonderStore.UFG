const toTopTemplate = `
  <button class="material-symbols-outlined" id="to-top-btn" type="button" onclick="toTop()">
    arrow_upward
  </button>
  `;

function toTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}

window.addEventListener('scroll', () => {
  const toTopBtn = document.getElementById("to-top-btn");

  if(document.documentElement.scrollTop > 500) {
    toTopBtn.classList.add("show");
  } else {
    toTopBtn.classList.remove("show");
  }
});

window.toTop = toTop;

(() => {
  document.body.insertAdjacentHTML("beforeend", toTopTemplate);
})();