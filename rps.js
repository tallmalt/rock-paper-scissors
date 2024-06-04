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

function playRound(humanChoice, computerChoice) {
  let gameWinner;
  if (humanChoice === computerChoice) {
    gameWinner = "draw";
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    gameWinner = "human";
    humanScore++;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    gameWinner = "human";
    humanScore++;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    gameWinner = "human";
    humanScore++;
  } else {
    gameWinner = "computer";
    computerScore++;
  }
  
}

//const humanSelection = getHumanChoice();
//const computerSelection = getComputerChoice();

//playRound(humanSelection, computerSelection);

//console.log for testing. Will remove when satisfied
