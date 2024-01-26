/**
 * Determine if the player won a round of the game
 * @param {string} player The player's move
 * @param {string} computer The computer's move
 * @returns True if the user won the round, and false otherwise
 */
export const UserHasWon = (user, computer) => {
  return (
    (user === "paper" && computer === "rock") ||
    (user === "rock" && computer === "scissors") ||
    (user === "scissors" && computer === "paper")
  );
};

/**
 * Determine if the computer won a round of the game
 * @param {string} user The user's move
 * @param {string} computer The computer's move
 * @returns True if the computer won, and false otherwise
 */
export const ComputerHasWon = (user, computer) => {
  return !UserHasWon(user, computer);
};

/**
 * Determine if there was a stalemate
 * @param {string} user The user's move
 * @param {string} computer The computer's move
 * @returns True if there was a stalemate, false otherwise
 */
export const Stalemate = (user, computer) => {
  return user === computer;
};
