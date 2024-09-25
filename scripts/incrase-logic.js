const quantitySpan = document.getElementById("quantity");
const decreaseButton = document.getElementById("decrease");
const increaseButton = document.getElementById("increase");

decreaseButton.addEventListener("click", () => {
  let currentValue = parseInt(quantitySpan.textContent);
  if (currentValue > 1) {
    quantitySpan.innerHTML = currentValue - 1;
  }
});

increaseButton.addEventListener("click", () => {
  let currentValue = parseInt(quantitySpan.textContent);
  quantitySpan.innerHTML = currentValue + 1;
});
