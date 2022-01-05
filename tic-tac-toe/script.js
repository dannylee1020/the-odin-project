// const main = () => {

// }

let currentPlayer = "X";
let gameBoard = [];
let winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

let statusDisplay = document.querySelector(".status-display");

function createGameBoard() {
    for (let i = 0; i < 9; i++) {
        gameBoard.push("");
    }
}

function handleCellPlayed(cell, index) {
    cell.textContent = currentPlayer;
    gameBoard[index] = currentPlayer;
}

function handleCellClicked(e) {
    const clickedCell = e.target;
    const cellNumber = parseInt(clickedCell.getAttribute("data-cell"));

    // handling already taken cell, we ignore click
    if (gameBoard[cellNumber] !== "") {
        return;
    }

    handleCellPlayed(clickedCell, cellNumber);
    handleResultValidation();
}

function handleResultValidation() {
    let roundWon = false;
    for (let i = 0; i < winningConditions.length; i++) {
        let idx = winningConditions[i];
        let a = gameBoard[idx[0]];
        let b = gameBoard[idx[1]];
        let c = gameBoard[idx[2]];

        if (a === "" || b === "" || c === "") {
            continue;
        }

        if (a === b && b === c) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        winnerBanner();
        return;
    }

    if (!gameBoard.includes("")) {
        drawBanner();
        return;
    }

    handlePlayerChange();
    console.log(gameBoard);
    console.log(currentPlayer);
}

function handlePlayerChange() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function handleRestartGame() {
    gameBoard = [];
    currentPlayer = "X";
    let cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => (cell.textContent = ""));
    statusDisplay.textContent = "Game Status";
    createGameBoard();
}

function winnerBanner() {
    let banner = `Player ${currentPlayer} has won!`;
    statusDisplay.textContent = banner;
}

function drawBanner() {
    let banner = `The game is draw`;
    statusDisplay.textContent = banner;
}

// add event to restart
let restart_button = document.querySelector(".restart-button");
restart_button.addEventListener("click", handleRestartGame);

// add event to each cell
let cells = document.querySelectorAll(".cell");
cells.forEach((cell) => cell.addEventListener("click", handleCellClicked));

createGameBoard();
