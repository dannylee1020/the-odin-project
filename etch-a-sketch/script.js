function makeSquareGrid(rows) {
  for (let i = 0; i < rows; i++) {
    const row = document.createElement("div");
    row.className = "row";
    row.id = "row" + i;
    container.appendChild(row);

    for (let j = 0; j < rows; j++) {
      const cell = document.createElement("div");
      cell.className = "cell";
      row.appendChild(cell);
    }
  }

  //creating hover effect
  const cells = document.querySelectorAll("div.cell");
  cells.forEach((cell) =>
    cell.addEventListener("mouseover", function (e) {
      const colorArr = ["red", "green", "blue", "black"];
      let colorIdx = Math.floor(Math.random() * colorArr.length);
      e.target.style.backgroundColor = colorArr[colorIdx];
    })
  );
}

function resetGrid(e) {
  let gridVal = parseInt(prompt("What is the dimension of the new square?"));
  if (gridVal > 100) {
    gridVal = parseInt(
      prompt("Dimension too big. Choose a number less than 100")
    );
  }
  let rowsToRemove = document.querySelectorAll("div.row");
  rowsToRemove.forEach((row) => container.removeChild(row));

  makeSquareGrid(gridVal);
}

// adding container
const container = document.querySelector("#container");

// add button on top
const resetButton = document.createElement("button");
resetButton.style.height = "30px";
resetButton.style.width = "60px";
resetButton.textContent = "Reset!";
resetButton.style.margin = "10px";

document.body.insertBefore(resetButton, container);

makeSquareGrid(16);
resetButton.addEventListener("click", resetGrid);
