// const main = () => {

// }

let currentPlayer = "X";
let gameboard = [];

function createGameBoard() {
    for (let i = 0; i < 9; i++) {
        gameboard.push("");
    }
}

function handleCellPlayed(cell, index) {
    cell.textContent = currentPlayer;
    gameboard[index] = currentPlayer;
}

function handleCellClicked(e) {
    const clickedCell = e.target;
    const cellNumber = parseInt(e.getAttribute("data-cell"));

    // handling already taken cell, we ignore click
    if (gameboard[index] !== "") {
        return;
    }

    handleCellPlayed(clickedCell, cellNumber);
}

function handleResultValidation() {}

function handlePlayerChange() {
    const currentPlayer = "X" ? "O" : "X";
}

function handleRestartGame() {
    gameboard = [];
    currentPlayer = "X";
    let cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => (cell.textContent = ""));
}
