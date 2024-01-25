"use strict";

import { GetComputerChoice } from "./GetComputerChoice.js";
import { PlayRound } from "./PlayRound.js";

let playerScore = 0;
let computerScore = 0;

function game() {
  const body = document.querySelector("body");
  const div = document.createElement("div");
  const score = document.createElement("div");

  const rockButton = document.querySelector(".btn-rock");
  rockButton.addEventListener("click", () => {
    div.textContent = PlayRound("rock", GetComputerChoice());
    score.textContent = `Player Score = ${playerScore}, Computer Score = ${computerScore}`;
  });

  const paperButton = document.querySelector(".btn-paper");
  paperButton.addEventListener("click", () => {
    div.textContent = PlayRound("paper", GetComputerChoice());
    score.textContent = `Player Score = ${playerScore}, Computer Score = ${computerScore}`;
  });

  const scissorsButton = document.querySelector(".btn-scissors");
  scissorsButton.addEventListener("click", () => {
    div.textContent = PlayRound("scissors", GetComputerChoice());
    score.textContent = `Player Score = ${playerScore}, Computer Score = ${computerScore}`;
  });

  body.appendChild(div);
  body.appendChild(score);
}

game();
