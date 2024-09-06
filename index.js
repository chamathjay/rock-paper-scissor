console.log("Hello");
const choiceList = ["rock", "paper", "scissors"];

function getComputerChoice() {
  let computerChoiceIndex = Math.floor(Math.random() * 3);
  let computerChoice = choiceList[computerChoiceIndex];
  return computerChoice;
}

function getHumanChoice() {
  let humanChoice = prompt("Enter your choice: ");
  humanChoice = humanChoice.toLowerCase();
  if (
    humanChoice == "rock" ||
    humanChoice == "paper" ||
    humanChoice == "scissors"
  ) {
    return humanChoice;
  } else {
    return "Invalid choice";
  }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice == computerChoice) {
    return "It's a tie, play again?";
  } else if (humanChoice == "rock" && computerChoice == "paper") {
    computerScore += 1;
    return "You lose! Paper beats Rock.";
  } else if (humanChoice == "rock" && computerChoice == "scissors") {
    humanScore += 1;
    return "You Win! Rock beats Scissors.";
  } else if (humanChoice == "paper" && computerChoice == "scissors") {
    computerScore += 1;
    return "You Lose! Scissors beat Paper.";
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    humanScore += 1;
    return "You Win! Paper beats Rock.";
  } else if (humanChoice == "scissors" && computerChoice == "rock") {
    computerScore += 1;
    return "You Lose! Rock beats Scissors.";
  } else if (humanChoice == "scissors" && computerChoice == "paper") {
    humanScore += 1;
    return "You Win! Scissors beat Paper.";
  }
}

let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();

console.log(computerChoice);
console.log(humanChoice);
console.log(playRound(humanChoice, computerChoice));
