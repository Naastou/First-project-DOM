const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  let previousColor;
  let newColor;

  do {
    newColor = getRandomColor();
  } while (newColor === previousColor);

  previousColor = newColor;

  document.body.style.backgroundColor = colors[newColor];
  color.textContent = colors[newColor];
});
function getRandomColor() {
  return Math.floor(Math.random() * colors.length);
}
