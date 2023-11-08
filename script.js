function getComputerChoice() {
  let x = Math.floor(Math.random()*100) + 1;
  if(x <= 34) {
    return "rock";
  } else if(x <= 67) {
    return "paper";
  } else {
    return "scissors"
  }
}

function playRound(playerSelection) {
  computerSelection = getComputerChoice();
  playerSelection = playerSelection.toLowerCase();

  if (computerSelection === "rock" && playerSelection === "paper" 
    || computerSelection === "scissors" && playerSelection === "rock" 
    || computerSelection === "paper" && playerSelection === "scissors"){
      return "You win!";
  } else if (computerSelection === playerSelection) {
      return "Stalemate!"
  } else if (computerSelection === "paper" && playerSelection === "rock" 
            || computerSelection === "rock" && playerSelection === "scissors" 
            || computerSelection === "scissors" && playerSelection === "paper"){
      return "Loser :)";
  } else {
      console.log(computerSelection, playerSelection)
  }
}

function game() {
  let computer = 0;
  let player = 0; 
  for(let i = 0; i < 9; i++) {
    let answer = playRound(prompt("Pick your weapon", ""));
    console.log(answer);
    if(answer === "You win!") {
      player++;
    }else if(answer === "Loser :)") {
      computer++
    } else { //make it so only wins and losses count as valid
      i--;
    }

  }
  return (computer = 5 && computer > player)? "You Lose :(": "Winner!"
}