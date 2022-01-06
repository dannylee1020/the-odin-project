const main = () => {
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

    const createGameBoard = () => {
        for (let i = 0; i < 9; i++) {
            gameBoard.push("");
        }
    };

    const handleCellPlayed = (cell, num) => {
        cell.textContent = currentPlayer;
        gaemBoard[num] = currentPlayer;
    };

    const handleCellClicked = (e) => {
        const targetCell = e.target;
        const targetIdx = targetCell.getAttribute("data-cell");

        handleCellPlayed(targetCell, targetIdx);
        handleResultValidation();
    };

    const handleResultValidation = () => {
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
            winningMessage();
            return;
        }

        if (!gameBoard.includes("")) {
            drawMessage();
            return;
        }

        handlePlayerChange();
    };

    const handlePlayerChange = () => {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
    };

    const winningMessage = () => {
        statusDisplay.textContent = `**** Player ${currentPlayer} has won! ****`;
    };

    const drawMessage = () => {
        statusDisplay.textContent = "**** Draw ****";
    };

    const handleResetGame = () => {
        gameBoard = [];
        currentPlayer = "X";
        statusDisplay.textContent = "Game Status";
        let cells = document.querySelectorAll(".cell");
        cells.forEach((cell) => (cell.textContent = ""));
    };

    // handle click events

    const clickedCell = () => {
        let cells = document.querySelector("cell");
        cells.forEach(
            (cell) => cell.addEventListner("click"),
            handleCellClicked
        );
    };

    const clickedReset = () => {
        let restart = document.querySelector(".restart-button");
        restart.addEventListener("click", handleResetGame);
    };

    return {
        createGameBoard,
        clickedCell,
        clickedReset,
    };
};

const execute = main();

execute.createGameBoard();
execute.clickedCell();
execute.clickedReset();

// let currentPlayer = "X";
// let gameBoard = [];
// let winningConditions = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
// ];

// let statusDisplay = document.querySelector(".status-display");

// function createGameBoard() {
//     for (let i = 0; i < 9; i++) {
//         gameBoard.push("");
//     }
// }

// function handleCellPlayed(cell, index) {
//     cell.textContent = currentPlayer;
//     gameBoard[index] = currentPlayer;
// }

// function handleCellClicked(e) {
//     const clickedCell = e.target;
//     const cellNumber = parseInt(clickedCell.getAttribute("data-cell"));

//     // handling already taken cell, we ignore click
//     if (gameBoard[cellNumber] !== "") {
//         return;
//     }

//     handleCellPlayed(clickedCell, cellNumber);
//     handleResultValidation();
// }

// function handleResultValidation() {
//     let roundWon = false;
//     for (let i = 0; i < winningConditions.length; i++) {
//         let idx = winningConditions[i];
//         let a = gameBoard[idx[0]];
//         let b = gameBoard[idx[1]];
//         let c = gameBoard[idx[2]];

//         if (a === "" || b === "" || c === "") {
//             continue;
//         }

//         if (a === b && b === c) {
//             roundWon = true;
//             break;
//         }
//     }

//     if (roundWon) {
//         winnerBanner();
//         return;
//     }

//     if (!gameBoard.includes("")) {
//         drawBanner();
//         return;
//     }

//     handlePlayerChange();
// }

// function handlePlayerChange() {
//     currentPlayer = currentPlayer === "X" ? "O" : "X";
// }

// function handleRestartGame() {
//     gameBoard = [];
//     currentPlayer = "X";
//     let cells = document.querySelectorAll(".cell");
//     cells.forEach((cell) => (cell.textContent = ""));
//     statusDisplay.textContent = "Game Status";
//     createGameBoard();
// }

// function winnerBanner() {
//     let banner = `Player ${currentPlayer} has won!`;
//     statusDisplay.textContent = banner;
// }

// function drawBanner() {
//     let banner = `The game is draw`;
//     statusDisplay.textContent = banner;
// }

// // add event to restart
// let restart_button = document.querySelector(".restart-button");
// restart_button.addEventListener("click", handleRestartGame);

// // add event to each cell
// let cells = document.querySelectorAll(".cell");
// cells.forEach((cell) => cell.addEventListener("click", handleCellClicked));

// createGameBoard();
