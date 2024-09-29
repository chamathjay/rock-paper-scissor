document.addEventListener("DOMContentLoaded", () => {
  console.log("Hello");
  const choiceList = ["rock", "paper", "scissors"];
  const para = document.querySelector("#para1");
  const buttons = document.querySelector(".buttons-container");
  const resetContainer = document.querySelector(".reset-container");

  let humanScore = 0;
  let computerScore = 0;
  const rounds = 5;
  let currentRound = 0;

  function getComputerChoice() {
    let computerChoiceIndex = Math.floor(Math.random() * 3);
    let computerChoice = choiceList[computerChoiceIndex];
    return computerChoice;
  }

  function playRound(humanChoice) {
    const computerChoice = getComputerChoice();

    para.innerHTML += `You chose ${humanChoice}. <br>`;
    para.innerHTML += `Computer chose ${computerChoice}. <br>`;

    if (humanChoice == computerChoice) {
      return "It's a tie, play again? <br>";
    } else if (
      (humanChoice == "rock" && computerChoice == "scissors") ||
      (humanChoice == "paper" && computerChoice == "rock") ||
      (humanChoice == "scissors" && computerChoice == "paper")
    ) {
      humanScore++;
      return `You win! ${humanChoice} beat ${computerChoice}. <br>`;
    } else {
      computerScore++;
      return `You lose! ${computerChoice} beat ${humanChoice}. <br>`;
    }
  }

  function playGame() {
    let menu = document.querySelector(".buttons-container");

    menu.addEventListener("click", (event) => {
      let target = event.target.closest("button");
      if (target.matches("button") && currentRound < rounds) {
        const humanChoice = target.id.split("-")[0]; // Extract "rock", "paper", or "scissors"
        const result = playRound(humanChoice);
        para.innerHTML += result + "<br>";

        document.createElement("h2");
        currentRound++;
      }
      if (currentRound >= rounds) {
        para.innerHTML += `<h3>Final Score:</h3> <p>You: ${humanScore}<br>Computer: ${computerScore}`;
        buttons.innerHTML = "";
        resetContainer.innerHTML = `<button id="reset"> Play Again? </button>`;
        document
          .querySelector("#reset")
          .addEventListener("click", () => location.reload());
      }
    });
  }

  playGame();
});
