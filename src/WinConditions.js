/**
 * Determine if the player won a round of the game
 * @param {string} player The player's move
 * @param {string} computer The computer's move
 * @returns True if the player won the round, and false otherwise
 */
export const PlayerHasWon = (player, computer) => {
  return (
    (player === "paper" && computer === "rock") ||
    (player === "rock" && computer === "scissors") ||
    (player === "scissors" && computer === "paper")
  );
};

/**
 * Determine if the computer won a round of the game
 * @param {string} player The player's move
 * @param {string} computer The computer's move
 * @returns True if the computer won, and false otherwise
 */
export const ComputerHasWon = (player, computer) => {
  return !PlayerHasWon(player, computer);
};
