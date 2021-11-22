let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

//Generate target value:
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
}

//Define the winner:
const compareGuesses = (currentHumanGuess, computerGuess, target) => {
  let humanDiff = Math.abs(currentHumanGuess - target);
  let computerDiff = Math.abs(computerGuess - target);
  if (humanDiff < computerDiff) {
    return true
  } else if (humanDiff > computerDiff) {
    return false
  } else {
    return 'Try again!'
  }
}

//Update the score:
const updateScore = winner => {
  if (winner === 'human') {
    humanScore += 1;
  } else if (winner === 'computer') {
    computerScore += 1;
  } else {
    return 'Something went wrong!';
  }
}

//Update the round number:
const advanceRound = () => {
  currentRoundNumber += 1;
}
