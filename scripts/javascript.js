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

function incrementScoreIfWon(player, computer) {
    if (playerWon(player, computer)) {
        ++playerScore;
    }
    else if (computerWon(player, computer)) {
        ++computerScore;
    }
}

function createWinningMessage(player, computer) {
    if (playerWon(player, computer)) {
        return `You Win! ${player} beats ${computer}`;
    }
    else if (computerWon(player, computer)) {
        return `You Lose! ${computer} beats ${player}`;
    }
}

function getWinner(player, computer) {
    player.toLowerCase();

    if (player === computer) {
        return "Stalemate";
    }

    if (player === "rock" && computer === "paper") {
        ++computerScore;
        return "You Lose! Paper beats Rock";
    }
    else if (player === "paper" && computer === "rock") {
        ++playerScore;
        return "You Win! Paper beats Rock";
    }

    if (player === "rock" && computer === "scissors") {
        ++playerScore;
        return "You Win! Rock beats Scissors";
    }
    else if (player === "scissors" && computer === "rock") {
        ++computerScore;
        return "You Lose! Rock beats Scissors";
    }

    if (player === "scissors" && computer === "paper") {
        ++playerScore;
        return "You Win! Scissors beats Paper";
    }
    else if (player === "paper" && computer === "scissors") {
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