const $ = document.querySelector.bind(document);

$("#open-bottom-sheet").addEventListener("click", function () {
  $("#bottom-sheet").classList.add("open");
  $("#bottom-sheet-backdrop").classList.add("open");
});

$("#close-bottom-sheet").addEventListener("click", function () {
  $("#bottom-sheet").classList.remove("open");
  $("#bottom-sheet-backdrop").classList.remove("open");
});

$("#bottom-sheet-backdrop").addEventListener("click", function () {
  $("#bottom-sheet").classList.remove("open");
  $("#bottom-sheet-backdrop").classList.remove("open");
});
