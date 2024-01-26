import { UserHasWon, ComputerHasWon, Stalemate } from "./WinConditions.js";

/**
 * Determine which player has won a round of the game, and return a string congratulating the winner
 * @param {string} user The user's move during this round of the game
 * @param {string} computer The computer's move during this round of the game
 * @returns A string congratulating the winner of the round
 */
export const PlayRound = (user, computer) => {
  if (Stalemate(user, computer)) {
    return "Stalemate";
  } else if (UserHasWon(user, computer)) {
    return `You Win! ${capitalizeFirstLetterInWord(user)} beats ${capitalizeFirstLetterInWord(computer)}`;
  } else if (ComputerHasWon(user, computer)) {
    return `You Lose! ${capitalizeFirstLetterInWord(computer)} beats ${capitalizeFirstLetterInWord(user)}`;
  }
};

/**
 * Capitalize the first letter in a word
 * @param {string} word The word whose first letter is to be capitalized
 * @returns A new string containing the word with its first letter capitalized
 */
const capitalizeFirstLetterInWord = (word) => {
  return word[0].toUpperCase() + word.slice(1, word.length);
};
