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

function playerWon(player, computer) {
    return (player === "paper" && computer === "rock") 
        || (player === "rock" && computer === "scissors") 
        || (player === "scissors" && computer === "paper");
}

function computerWon(player, computer) {
    return (computer === "paper" && player === "rock")
        || (computer === "rock" && player === "scissors")
        || (computer === "scissors" && player === "paper");
}

let playerScore = 0;
let computerScore = 0;

function playRound(player, computer) {
    player.toLowerCase();

    if (player === computer) {
        return "Stalemate";
    }
    else if (playerWon(player, computer)) {
        return `You Win! ${player} beats ${computer}`;
    }
    else if (computerWon(player, computer)) {
        return `You Lose! ${computer} beats ${player}`;
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