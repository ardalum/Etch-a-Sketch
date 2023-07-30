// Select the container element
const container = document.querySelector(".container");

let promptForSize = Number(prompt("Enter a number from 1 to 100"));

let gridSize = promptForSize * promptForSize;

let gridSizeString = `repeat(${promptForSize}, 1fr)`;

container.style.gridTemplateColumns = gridSizeString;

const createElem = function (grids) {
  // placeholder to convert the generated bgcolor toString
  let bgColorString;
  // function that will genreate a random colors
  const randBgColor = function () {
    const x = Math.floor(Math.random() * 256);
    const y = Math.floor(Math.random() * 256);
    const z = Math.floor(Math.random() * 256);
    const bgColor = `rgb(${x}, ${y}, ${z})`;
    bgColorString = bgColor.toString();
  };

  // Loop that will create the element based on the grids that is specified
  for (let i = 0; i < grids; i++) {
    const newElem = document.createElement("div");
    newElem.className = "grid-div";
    container.appendChild(newElem);
  }

  const gridDiv = document.querySelectorAll(".grid-div");

  gridDiv.forEach((element) => {
    element.addEventListener("mouseover", () => {
      randBgColor();
      element.style.backgroundColor = bgColorString;
    });
  });
};

createElem(gridSize);
