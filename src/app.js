"use strict";

import { GetComputerChoice } from "./GetComputerChoice.js";
import { ComputerHasWon, UserHasWon } from "./WinConditions.js";

let playerScore = 0;
let computerScore = 0;

const updateAndLogScore = (user, computer) => {
  if (UserHasWon(user, computer)) {
    ++playerScore;
    return `You win! ${user} beats ${computer}.\n\nUser = ${playerScore}, Computer = ${computerScore}`;
  } else if (ComputerHasWon(user, computer)) {
    ++computerScore;
    return `You lose! ${computer} beats ${user}.\n\nUser = ${playerScore}, Computer = ${computerScore}`;
  }

  return `Stalemate!`;
};

function game() {
  const body = document.querySelector("body");
  const div = document.createElement("div");

  const rockButton = document.querySelector(".btn-rock");
  rockButton.addEventListener("click", () => {
    let computer = GetComputerChoice();
    let text = updateAndLogScore("rock", computer);

    if (playerScore >= 5 || computerScore >= 5) {
      text = "Game Over!";
    }

    div.textContent = text;
  });

  const paperButton = document.querySelector(".btn-paper");
  paperButton.addEventListener("click", () => {
    let computer = GetComputerChoice();
    let text = updateAndLogScore("paper", computer);

    if (playerScore >= 5 || computerScore >= 5) {
      text = "Game Over!";
    }

    div.textContent = text;
  });

  const scissorsButton = document.querySelector(".btn-scissors");
  scissorsButton.addEventListener("click", () => {
    let computer = GetComputerChoice();
    let text = updateAndLogScore("scissors", computer);

    if (playerScore >= 5 || computerScore >= 5) {
      text = "Game Over!";
    }

    div.textContent = text;
  });

  body.appendChild(div);
}

game();
