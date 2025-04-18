function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

document.querySelector(".change-color").addEventListener("click", function () {
  const randomColorHex = getRandomHexColor();
  document.body.style.backgroundColor = randomColorHex;

  const rgbColor = hexToRgb(randomColorHex);
  document.querySelector(
    ".color"
  ).textContent = `rgb(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b})`;
});

function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return { r, g, b };
}
