const rock = document.querySelector("#rock");
const paper = document.querySelector ("#paper");
const scissors = document.querySelector("#scissors");
const results = document.querySelector("#results");
const player = document.createElement("p");
const computer = document.createElement("p");
const playerScore = document.createElement("p");
const computerScore = document.createElement("p");
const playerScoreText = playerScore.textContent;
const computerScoreText = computerScore.textContent;

player.textContent = "player";
computer.textContent = "computer";
playerScore.textContent = 0;
computerScore.textContent = 0;

/*onClick {
parent.appendChild(player);
parent.appendChild(computer)
if runRound() = playerWins;
playerScore.textcontent;
else if runRound() = computerWins;
computerScore.textcontent++
if playerscore = 5 && playerscore > computerScore {
winner(playerscore)
}
}*/
function winner(name) {
  return "You " + name
}

rock.addEventListener("click", () => {
  if(+playerScoreText === 5 && +playerScoreText > +computerScoreText) {
    winner("win");
    stopPropagation();
  } else if (+computerScoreText === 5 && +computerScoreText > +playerScoreText) {
    winner("lose");
    stopPropagation();
  }
  results.appendChild(player);
  results.appendChild(computer);
  let roundResult = playRound("rock");
  if(roundResult == "win" ) {
    playerScore.textContent = +playerScore.textContent + 1;
  } else if (roundResult == "lose") {
    computerScore.textContent = +computerScore.textContent + 1;
  }
  results.appendChild(playerScore);
  results.appendChild(computerScore);

});
paper.addEventListener("click", () => {
  let result = document.createElement("p");
  result.textContent = playRound("paper");
  results.appendChild(result);
});
scissors.addEventListener("click", () => {
  let result = document.createElement("p");
  result.textContent = playRound("scissors");
  results.appendChild(result);
});

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

  if (computerSelection === "rock" && playerSelection === "paper" 
    || computerSelection === "scissors" && playerSelection === "rock" 
    || computerSelection === "paper" && playerSelection === "scissors"){
      console.log("win");
      return "win";
  } else if (computerSelection === playerSelection) {
    console.log("stalemate")
      return "Stalemate!"
  } else if (computerSelection === "paper" && playerSelection === "rock" 
            || computerSelection === "rock" && playerSelection === "scissors" 
            || computerSelection === "scissors" && playerSelection === "paper"){
      console.log("lose")
      return "lose";
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

