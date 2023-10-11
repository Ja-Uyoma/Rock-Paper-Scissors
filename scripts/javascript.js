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

function playRound(playerSelection, computerSelection) {
    playerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return "Stalemate";
    }

    if (playerSelection === "rock" && computerSelection === "paper") {
        return "You Lose! Paper beats Rock";
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You Win! Paper beats Rock";
    }

    if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You Win! Rock beats Scissors";
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You Lose! Rock beats Scissors";
    }

    if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You Win! Scissors beats Paper";
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You Lose! Scissors beats Paper";
    }
}

function game() {
    const MAX_ROUNDS = 5;

    const playerSelection = prompt("What is your choice?");
    const computerSelection = getComputerChoice();
        
    console.log(playRound(playerSelection, computerSelection));
}