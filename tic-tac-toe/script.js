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
        gameBoard[num] = currentPlayer;
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
        createGameBoard();
    };

    // handle click events

    const clickedCell = () => {
        let cells = document.querySelectorAll(".cell");
        cells.forEach((cell) =>
            cell.addEventListener("click", handleCellClicked)
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
