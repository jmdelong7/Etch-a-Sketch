const container = document.querySelector(".container");

let squaresPerRow = 16;

for (i = 0; i < squaresPerRow; i++) {
  let gridContainer = document.createElement("div");
  gridContainer.setAttribute("class", "grid-container");
  container.appendChild(gridContainer);
  
  for (k = 0; k < squaresPerRow; k++) {
    let square = document.createElement("div");
    square.setAttribute("class", "grid-square");
    gridContainer.appendChild(square);
  }
}

function changeColor(target, color) {
  target.style.backgroundColor = color;
}

let squares = document.querySelectorAll("div.grid-square");
squares.forEach(sq => {
  sq.addEventListener("mouseover", function() {changeColor(sq, "blue")})
})
