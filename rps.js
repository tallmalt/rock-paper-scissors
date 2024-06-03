//Global array of possible choices
const choiceList = ["rock", "paper", "scissors"];

//Get computer's choice
function getComputerChoice() {
  return choiceList[Math.floor(Math.random() * 3)];
}

//Get human's choice
function getHumanChoice() {
  let humanChoice = ""
  while (choiceList.indexOf(humanChoice) === -1) {
    humanChoice = prompt("Choose rock, paper or scissors.").toLowerCase();
  }
  return humanChoice

}
//console.log for testing. Will remove when satisfied
console.log(getComputerChoice())
console.log(getHumanChoice())