const $ = document.querySelector.bind(document);

const resizeBtn = $("[data-resize-btn]");

resizeBtn.addEventListener("click", function (e) {
  e.preventDefault();
  document.body.classList.toggle("sb-expanded");
})
