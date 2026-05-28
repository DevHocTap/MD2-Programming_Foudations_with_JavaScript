const colors = ["red", "blue", "green", "yellow", "purple"];
const changeBtn = document.getElementById("change-btn");
const colorNameSpan = document.getElementById("colorName");
const bodyElement = document.querySelector("body");

changeBtn.addEventListener("click", function () {
  const randomIndex = Math.floor(Math.random() * colors.length);
  const selectedColor = colors[randomIndex];
  bodyElement.style.backgroundColor = selectedColor;
  colorNameSpan.textContent = selectedColor;
  if (selectedColor === "yellow") {
    colorNameSpan.style.color = "#333";
  } else {
    colorNameSpan.style.color = selectedColor;
  }
});
