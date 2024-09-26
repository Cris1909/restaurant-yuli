const quantitySpan = document.querySelector("#quantity");
const decreaseButton = document.querySelector("#decrease");
const increaseButton = document.querySelector("#increase");

decreaseButton.addEventListener("click", () => {
  const currentValue = parseInt(quantitySpan.textContent);
  if (currentValue > 1) {
    quantitySpan.innerHTML = currentValue - 1;
  }
});

increaseButton.addEventListener("click", () => {
  const currentValue = parseInt(quantitySpan.textContent);
  quantitySpan.innerHTML = currentValue + 1;
});
