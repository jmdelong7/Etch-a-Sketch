const container = document.querySelector(".container");

let squaresPerRow = 16;

for (i = 0; i < squaresPerRow; i++) {
  let square = document.createElement("div");
  square.setAttribute("class", "grid-square");
  container.appendChild(square);
}