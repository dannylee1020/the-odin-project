function computerPlay() {
  choice = ["rock", "paper", "scissors"];
  index = Math.random() * choice.length;

  return choice[Math.floor(index)];
}

function playRound(playerHand, computerHand) {
  rule = {
    rock: ["scissors", "paper"],
    paper: ["rock", "scissors"],
    scissors: ["paper", "rock"],
  };

  if (rule[playerHand.toLowerCase()][0] == computerHand.toLowerCase()) {
    return [`You win! :) ${playerHand} beats ${computerHand}!`, "player"];
  } else if (rule[playerHand.toLowerCase()][1] == computerHand.toLowerCase()) {
    return [`You lose! :( ${computerHand} beats ${playerHand}`, "computer"];
  } else {
    return ["It is a draw -___-", "draw"];
  }
}

function game(e) {
  const playerHand = e.target.value;
  const computerHand = computerPlay();

  [message, winner] = playRound(playerHand, computerHand);

  if (winner == "player") {
    player++;
  } else if (winner == "computer") {
    computer++;
  } else {
    console.log(message);
  }

  pScore.textContent = `Player score: ${player}`;
  cScore.textContent = `Computer score: ${computer}`;

  console.log(message);

  if (Math.max(player, computer) == 5) {
    announce =
      player > computer ? "THE WINNER: PLAYER!" : "THE WINNER: COMPUTER!";

    div.textContent = announce;
  }
}

let player = 0;
let computer = 0;

const div = document.createElement("div");
const pScore = document.createElement("div");
const cScore = document.createElement("div");

document.body.append(div);
div.appendChild(pScore);
div.appendChild(cScore);

window.addEventListener("click", game);
