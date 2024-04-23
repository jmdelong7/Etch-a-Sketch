const container = document.querySelector(".container");

function changeColor(target, color) {
  target.style.backgroundColor = color;
}

function makeGrid(squaresPerRow) {
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

  let numPixels = container.offsetWidth / squaresPerRow;
  let squares = document.querySelectorAll("div.grid-square");
  squares.forEach(sq => {
    sq.style.width = `${numPixels}px`;
    sq.style.height = `${numPixels}px`;
  })

}

function inputPopup() {
  let userSquares = prompt("Enter number of squares per side.");
  makeGrid(userSquares);
  
  let squares = document.querySelectorAll("div.grid-square");
  squares.forEach(sq => {
    sq.addEventListener("mouseover", function() {changeColor(sq, "blue")})
})

}

const btn = document.querySelector("button");
btn.addEventListener("click", inputPopup);




