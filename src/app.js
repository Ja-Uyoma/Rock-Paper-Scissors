"use strict";

import { GetComputerChoice } from "./GetComputerChoice.js";
import { ComputerHasWon, UserHasWon } from "./WinConditions.js";

let playerScore = 0;
let computerScore = 0;
const playerScoreBoard = document.querySelector(".player-score span");
const computerScoreBoard = document.querySelector(".computer-score span");

const playRound = (user, computer) => {
  if (UserHasWon(user, computer)) {
    ++playerScore;
    playerScoreBoard.textContent = playerScore;
    return `You win! ${user} beats ${computer}.`;
  } else if (ComputerHasWon(user, computer)) {
    ++computerScore;
    computerScoreBoard.textContent = computerScore;
    return `You lose! ${computer} beats ${user}.`;
  }

  return `Stalemate!`;
};

function game() {
  const body = document.querySelector("body");
  const div = document.createElement("div");
  const dialog = document.querySelector("dialog");
  const dialogBtn = document.querySelector("dialog > button");

  const rockButton = document.querySelector(".btn-rock");
  rockButton.addEventListener("click", () => {
    let computer = GetComputerChoice();
    let text = playRound("rock", computer);

    if (playerScore >= 5 || computerScore >= 5) {
      dialog.showModal();
    }

    div.textContent = text;
  });

  const paperButton = document.querySelector(".btn-paper");
  paperButton.addEventListener("click", () => {
    let computer = GetComputerChoice();
    let text = playRound("paper", computer);

    if (playerScore >= 5 || computerScore >= 5) {
      dialog.showModal();
    }

    div.textContent = text;
  });

  const scissorsButton = document.querySelector(".btn-scissors");
  scissorsButton.addEventListener("click", () => {
    let computer = GetComputerChoice();
    let text = playRound("scissors", computer);

    if (playerScore >= 5 || computerScore >= 5) {
      dialog.showModal();
    }

    div.textContent = text;
  });

  dialogBtn.addEventListener("click", () => {
    dialog.close();
    playerScore = 0;
    computerScore = 0;
    div.textContent = "";
    playerScoreBoard.textContent = "0";
    computerScoreBoard.textContent = "0";
  });

  body.appendChild(div);
}

game();
