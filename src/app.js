"use strict";

import { GetComputerChoice } from "./GetComputerChoice.js";
import { PlayRound } from "./PlayRound.js";
import { ComputerHasWon, Stalemate, UserHasWon } from "./WinConditions.js";

let playerScore = 0;
let computerScore = 0;

function game() {
  const body = document.querySelector("body");
  const div = document.createElement("div");
  const score = document.createElement("div");

  const rockButton = document.querySelector(".btn-rock");
  rockButton.addEventListener("click", () => {
    let computer = GetComputerChoice();
    let text = "";

    if (UserHasWon("rock", computer)) {
      ++playerScore;
      text = `You win! rock beats ${computer}!\n Your Score = ${playerScore}, Computer's score = ${computerScore}`;
    } else if (ComputerHasWon("rock", computer)) {
      ++computerScore;
      text = `You Lose! ${computer} beats rock!\n Your Score = ${playerScore}, Computer's score = ${computerScore}`;
    } else if (Stalemate("rock", computer)) {
      text = "stalemate!";
    }

    if (playerScore >= 5 || computerScore >= 5) {
      text = "Game Over!";
    }

    div.textContent = text;
  });

  const paperButton = document.querySelector(".btn-paper");
  paperButton.addEventListener("click", () => {
    let computer = GetComputerChoice();
    let text = "";

    if (UserHasWon("paper", computer)) {
      ++playerScore;
      text = `You win! paper beats ${computer}!\n Your Score = ${playerScore}, Computer's score = ${computerScore}`;
    } else if (ComputerHasWon("paper", computer)) {
      ++computerScore;
      text = `You Lose! ${computer} beats paper!\n Your Score = ${playerScore}, Computer's score = ${computerScore}`;
    } else if (Stalemate("paper", computer)) {
      text = "stalemate!";
    }

    if (playerScore >= 5 || computerScore >= 5) {
      text = "Game Over!";
    }

    div.textContent = text;
  });

  const scissorsButton = document.querySelector(".btn-scissors");
  scissorsButton.addEventListener("click", () => {
    let computer = GetComputerChoice();
    let text = "";

    if (UserHasWon("scissors", computer)) {
      ++playerScore;
      text = `You win! scissors beats ${computer}!\n Your Score = ${playerScore}, Computer's score = ${computerScore}`;
    } else if (ComputerHasWon("scissors", computer)) {
      ++computerScore;
      text = `You Lose! ${computer} beats scissors!\n Your Score = ${playerScore}, Computer's score = ${computerScore}`;
    } else if (Stalemate("scissors", computer)) {
      text = "stalemate!";
    }

    if (playerScore >= 5 || computerScore >= 5) {
      text = "Game Over!";
    }

    div.textContent = text;
  });

  body.appendChild(div);
  body.appendChild(score);
}

game();
