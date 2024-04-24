const container = document.querySelector(".container");

function randomizeColor(target) {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);

  let rgb = "rgb(" + red + "," + green + "," + blue + ")";

  target.style.backgroundColor = rgb;
  
}

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
  let userSquares = Number(prompt("Squares per side (max 100)?", 50));
  
  if (isNaN(userSquares)) {
    alert("Numbers only you cheeky bastard!");
    return;
  }

  if (userSquares < 0) {
    alert("Try again! Must be a number greater than 0.");
    return;
  } else if (userSquares >= 100) {
    alert("Try again! Must be a number less than 100.");
    return;
  }
  
  makeGrid(userSquares);

  showGridSize(userSquares);
  
  let squares = document.querySelectorAll("div.grid-square");
  squares.forEach(sq => {
    sq.addEventListener("mouseover", function() {randomizeColor(sq)})
  })

}

const btn = document.querySelector("button");
btn.addEventListener("click", inputPopup);




