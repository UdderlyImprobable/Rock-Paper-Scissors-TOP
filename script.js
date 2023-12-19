const rock = document.querySelector("#rock");
const paper = document.querySelector ("#paper");
const scissors = document.querySelector("#scissors");
const results = document.querySelector("#results");
const player = document.createElement("p");
const computer = document.createElement("p");
const playerScore = document.createElement("p");
const computerScore = document.createElement("p");
const finalResult = document.createElement("p");
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

rock.addEventListener("click", () => {
  winner();
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
  winner();
});

paper.addEventListener("click", () => {
  winner();
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
  winner();
});

scissors.addEventListener("click", () => {
  winner()
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
  winner();
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

function winner() {
  if(playerScore.textContent === "5" && +playerScore.textContent > +computerScore.textContent) {
    finalResult.textContent = "You Win";
    results.appendChild(finalResult);
    preventDefault();
  } else if (computerScore.textContent === "5" && +computerScore.textContent > +playerScore.textContent) {
    finalResult.textContent = "You Lose";
    results.appendChild(finalResult);
    preventDefault();
  }
}

/*
function game() {
  let computer = 0;
  let player = 0; 
  for(let i = 0; i < rounds; i++) {
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
*/

