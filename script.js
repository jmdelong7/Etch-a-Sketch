const container = document.querySelector(".container");

function changeColor(target, color) {
  target.style.backgroundColor = color;
}

function makeGrid(squaresPerRow) {
  let gridContainers = document.querySelectorAll("div.grid-container");

  if (gridContainers.length > 0) {
    gridContainers.forEach(gC => {
      gC.remove();
    })
  }

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

function showGridSize(squaresPerRow) {
  let sizeIndicator = document.querySelector("p.grid-size");
  sizeIndicator.textContent = (`${squaresPerRow} x ${squaresPerRow}`);
}

function inputPopup() {
  let userSquares = prompt("Squares per side (max 100)?");
  
  if (userSquares < 0) {
    alert("Try again! Must be a number greater than 0.");
    return
  } else if (userSquares >= 100) {
    alert("Try again! Must be a number less than 100.")
    return
  }
  
  makeGrid(userSquares);

  showGridSize(userSquares);
  
  let squares = document.querySelectorAll("div.grid-square");
  squares.forEach(sq => {
    sq.addEventListener("mouseover", function() {changeColor(sq, "blue")})
  })

}

const btn = document.querySelector("button");
btn.addEventListener("click", inputPopup);




