"use strict";

import { GetComputerChoice } from "./GetComputerChoice.js";
import { PlayerHasWon, ComputerHasWon } from "./WinConditions.js";

/**
 * Determine which player has won a round of the game, and return a string congratulating the winner
 * @param {string} player The player's move during this round of the game
 * @param {string} computer The computer's move during this round of the game
 * @returns A string congratulating the winner of the round
 */
function playRound(player, computer) {
  player = player.toLowerCase();

  if (player === computer) {
    return "Stalemate";
  } else if (PlayerHasWon(player, computer)) {
    return `You Win! ${capitalizeFirstLetterInWord(player)} beats ${capitalizeFirstLetterInWord(computer)}`;
  } else if (ComputerHasWon(player, computer)) {
    return `You Lose! ${capitalizeFirstLetterInWord(computer)} beats ${capitalizeFirstLetterInWord(player)}`;
  }
}

/**
 * Capitalize the first letter in a word
 * @param {string} word The word whose first letter is to be capitalized
 * @returns A new string containing the word with its first letter capitalized
 */
function capitalizeFirstLetterInWord(word) {
  return word[0].toUpperCase() + word.slice(1, word.length);
}

let playerScore = 0;
let computerScore = 0;

function game() {
  const body = document.querySelector("body");
  const div = document.createElement("div");
  const score = document.createElement("div");

  const rockButton = document.querySelector(".btn-rock");
  rockButton.addEventListener("click", () => {
    div.textContent = playRound("rock", GetComputerChoice());
    score.textContent = `Player Score = ${playerScore}, Computer Score = ${computerScore}`;
  });

  const paperButton = document.querySelector(".btn-paper");
  paperButton.addEventListener("click", () => {
    div.textContent = playRound("paper", GetComputerChoice());
    score.textContent = `Player Score = ${playerScore}, Computer Score = ${computerScore}`;
  });

  const scissorsButton = document.querySelector(".btn-scissors");
  scissorsButton.addEventListener("click", () => {
    div.textContent = playRound("scissors", GetComputerChoice());
    score.textContent = `Player Score = ${playerScore}, Computer Score = ${computerScore}`;
  });

  body.appendChild(div);
  body.appendChild(score);
}

game();
