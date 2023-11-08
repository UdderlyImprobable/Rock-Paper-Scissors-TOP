function getComputerChoice() {
  let x = Math.floor(Math.random()*100) + 1;
  if(x <= 34) {
    return "Rock";
  } else if(x <= 67) {
    return "Paper";
  } else {
    return "Scissors"
  }
  
}