"use strict";

function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3);

    if (choice == 0) {
        return "rock";
    }
    else if (choice == 1) {
        return "paper";
    }
    else if (choice == 2) {
        return "scissors";
    }
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    playerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return "Stalemate";
    }

    if (playerSelection === "rock" && computerSelection === "paper") {
        ++computerScore;
        return "You Lose! Paper beats Rock";
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        ++playerScore;
        return "You Win! Paper beats Rock";
    }

    if (playerSelection === "rock" && computerSelection === "scissors") {
        ++playerScore;
        return "You Win! Rock beats Scissors";
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        ++computerScore;
        return "You Lose! Rock beats Scissors";
    }

    if (playerSelection === "scissors" && computerSelection === "paper") {
        ++playerScore;
        return "You Win! Scissors beats Paper";
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        ++computerScore;
        return "You Lose! Scissors beats Paper";
    }
}

function game() {
    const body = document.querySelector("body");
    const div = document.createElement("div");
    const score = document.createElement("div");

    const rockButton = document.querySelector(".btn-rock");
    rockButton.addEventListener("click", () => {
        div.textContent = playRound("rock", getComputerChoice());
        score.textContent = `Player Score = ${playerScore}, Computer Score = ${computerScore}`;
    });

    const paperButton = document.querySelector(".btn-paper");
    paperButton.addEventListener("click", () => {
        div.textContent = playRound("paper", getComputerChoice());
        score.textContent = `Player Score = ${playerScore}, Computer Score = ${computerScore}`;
    });

    const scissorsButton = document.querySelector(".btn-scissors");
    scissorsButton.addEventListener("click", () => {
        div.textContent = playRound("scissors", getComputerChoice());
        score.textContent = `Player Score = ${playerScore}, Computer Score = ${computerScore}`;
    });

    body.appendChild(div);
    body.appendChild(score);
}

game();