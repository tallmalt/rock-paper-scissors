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


//Main fuction to play a game
function playGame() {
  //Declare variables required to play the game
  let humanScore = 0;
  let computerScore = 0;
  let roundsPlayed = 0;


  //Play a single round of a the game
  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      console.log(`You both chose ${humanChoice}\nThis round is a draw!`);
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "scissors" && computerChoice === "paper")  ||
      (humanChoice === "paper" && computerChoice === "rock")
    ) {humanScore++;
      console.log(`You chose ${humanChoice} and the computer chose ${computerChoice}, ${humanChoice} beats ${computerChoice}!\nYou win the round.`);
    } else {
      computerScore++;
      console.log(`You chose ${humanChoice} and the computer chose ${computerChoice}, ${computerChoice} beats ${humanChoice}!\nThe computer wins the round.`);
    }
  }
  

  //Loop to play 5 rounds
  while (roundsPlayed < 5) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    roundsPlayed++;
  }
  

  //Display end of game results
  if (humanScore === computerScore) {
    console.log(`The game was a tie!\nFinal score : You: ${humanScore} - Computer ${computerScore}`);
  } else if (humanScore > computerScore) {
      console.log(`The human wins the game!\nFinal score : Human: ${humanScore} - Computer ${computerScore}`);
  } else {
    console.log(`The computer wins the game!\nFinal score : Computer: ${computerScore} - Human: ${humanScore}`);
  }
}


playGame();

//playRound(humanSelection, computerSelection);

//console.log for testing. Will remove when satisfied
