//Global array of possible choices
const CHOICELIST = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

//Get computer choice
function getComputerChoice() {
  return CHOICELIST[Math.floor(Math.random() * 3)];
}

//Get human choice
function getHumanChoice() {
  let humanInput = "";
  while (CHOICELIST.indexOf(humanInput) === -1) {
    humanInput = prompt("Choose rock, paper or scissors.").toLowerCase()
  };
  return humanInput;
}



function playGame() {
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      return console.log("This round is a draw!")
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      humanScore++;
      return console.log(`The human wins the round, ${humanChoice} beats ${computerChoice}!`)
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      humanScore++;
      return console.log(`The human wins the round, ${humanChoice} beats ${computerChoice}!`)
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      humanScore++;
      return console.log(`The ${roundWinner} wins the round, ${humanChoice} beats ${computerChoice}!`)
    } else {
      computerScore++
      return console.log(`The computer wins the round, ${humanChoice} beats ${computerChoice}!`)
    }
  let roundsPlayed = 0
  while (roundsPlayed < 5) {
    playRound(humanSelection, computerSelection)
    roundsPlayed++
  }
  console.log(`Game over. The final score is Human: ${humanScore} - Computer: ${computerScore}`)
  }
}

playGame()

//playRound(humanSelection, computerSelection);

//console.log for testing. Will remove when satisfied
