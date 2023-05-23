const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  let previousColor;
  let newColor;

  do {
    newColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  } while (newColor === previousColor);

  document.body.style.backgroundColor = newColor;
  color.textContent = newColor;
});
