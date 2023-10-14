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

function getWinner(player, computerSelection) {
    player.toLowerCase();

    if (player === computerSelection) {
        return "Stalemate";
    }

    if (player === "rock" && computerSelection === "paper") {
        ++computerScore;
        return "You Lose! Paper beats Rock";
    }
    else if (player === "paper" && computerSelection === "rock") {
        ++playerScore;
        return "You Win! Paper beats Rock";
    }

    if (player === "rock" && computerSelection === "scissors") {
        ++playerScore;
        return "You Win! Rock beats Scissors";
    }
    else if (player === "scissors" && computerSelection === "rock") {
        ++computerScore;
        return "You Lose! Rock beats Scissors";
    }

    if (player === "scissors" && computerSelection === "paper") {
        ++playerScore;
        return "You Win! Scissors beats Paper";
    }
    else if (player === "paper" && computerSelection === "scissors") {
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
        div.textContent = getWinner("rock", getComputerChoice());
        score.textContent = `Player Score = ${playerScore}, Computer Score = ${computerScore}`;
    });

    const paperButton = document.querySelector(".btn-paper");
    paperButton.addEventListener("click", () => {
        div.textContent = getWinner("paper", getComputerChoice());
        score.textContent = `Player Score = ${playerScore}, Computer Score = ${computerScore}`;
    });

    const scissorsButton = document.querySelector(".btn-scissors");
    scissorsButton.addEventListener("click", () => {
        div.textContent = getWinner("scissors", getComputerChoice());
        score.textContent = `Player Score = ${playerScore}, Computer Score = ${computerScore}`;
    });

    body.appendChild(div);
    body.appendChild(score);
}

game();