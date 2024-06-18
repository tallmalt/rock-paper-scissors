//Global array of possible choices
const CHOICELIST = ["rock", "paper", "scissors"];


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
  let humanScore = 0;
  let computerScore = 0;
  

  let roundsPlayed = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      console.log("This round is a draw!");
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      humanScore++;
      console.log(`The human wins the round, ${humanChoice} beats ${computerChoice}!`);
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      humanScore++;
      console.log(`The human wins the round, ${humanChoice} beats ${computerChoice}!`);
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      humanScore++;
      console.log(`The human wins the round, ${humanChoice} beats ${computerChoice}!`);
    } else {
      computerScore++;
      console.log(`The computer wins the round, ${computerChoice} beats ${humanChoice}!`);
    }
  }
  
  while (roundsPlayed < 5) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    roundsPlayed++;
  }
  
  if (humanScore === computerScore) {
    console.log(`The game was a tie!\nFinal score: Human: ${humanScore} - Computer ${computerScore}`)
  } else if (humanScore > computerScore) {
      console.log(`The human wins the game!\nFinal score : Human: ${humanScore} - Computer ${computerScore}`)
  } else {
    console.log(`The computer wins the game!\nFinal score : Computer: ${computerScore} - Human ${humanScore}`)
  }
}


playGame()

//playRound(humanSelection, computerSelection);

//console.log for testing. Will remove when satisfied
