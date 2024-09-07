console.log("Hello");
const choiceList = ["rock", "paper", "scissors"];

function getComputerChoice() {
  let computerChoiceIndex = Math.floor(Math.random() * 3);
  let computerChoice = choiceList[computerChoiceIndex];
  return computerChoice;
}

function getHumanChoice() {
  let validChoice = true;

  while (validChoice) {
    let humanChoice = prompt("Enter your choice: ");
    humanChoice = humanChoice.toLowerCase();
    if (
      humanChoice == "rock" ||
      humanChoice == "paper" ||
      humanChoice == "scissors"
    ) {
      return humanChoice;
    } else {
      console.log("Invalid Choice, try again.");
    }
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice == computerChoice) {
    return "It's a tie, play again?";
  } else if (humanChoice == "rock" && computerChoice == "paper") {
    return "You lose! Paper beats Rock.";
  } else if (humanChoice == "rock" && computerChoice == "scissors") {
    return "You win! Rock beats Scissors.";
  } else if (humanChoice == "paper" && computerChoice == "scissors") {
    return "You lose! Scissors beat Paper.";
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    return "You win! Paper beats Rock.";
  } else if (humanChoice == "scissors" && computerChoice == "rock") {
    return "You lose! Rock beats Scissors.";
  } else if (humanChoice == "scissors" && computerChoice == "paper") {
    return "You win! Scissors beat Paper.";
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    console.log(`Round ${i + 1}`);
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    console.log(`Computer chose ${computerChoice}`);
    console.log(`You chose ${humanChoice}`);

    let result = playRound(humanChoice, computerChoice);
    console.log(result);

    if (result.includes("win")) {
      humanScore += 1;
    } else if (result.includes("lose")) {
      computerScore += 1;
    }
  }
  console.log(`Final Score: ${humanScore}`);
}

playGame();
