/**
 * Generate a random number in the range [0, 2] inclusive representing the computer's move
 * @returns A string representing the computer's move
 */
export const GetComputerChoice = () => {
  const choice = Math.floor(Math.random() * 3);

  if (choice === 0) {
    return { text: "rock", emoji: "✊" };
  } else if (choice === 1) {
    return { text: "paper", emoji: "✋" };
  } else if (choice === 2) {
    return { text: "scissors", emoji: "✌" };
  }

  return "";
};
