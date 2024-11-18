const button = document.getElementById("flip-button");
const colorCode = document.getElementById("color-code");

function getRandomHexColor() {
  const hex = Math.floor(Math.random() * 16777215).toString(16);
  return `#${hex.padStart(6, "0")}`;

button.addEventListener("click", () => {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  colorCode.textContent = newColor;
});
