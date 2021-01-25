const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_OPTION = ROCK;
let gameIsRunning = false;
const DRAW = "DRAW";
const RESULT_PLAYER_WINS = "PLAYER_WINS";
const RESULT_COMPUTER_WINS = "COMPUTER_WINS";

const getPlayerChoice = () => {
  const playerChoice = prompt(
    `${ROCK}, ${PAPER} or ${SCISSORS}?`,
    ``
  ).toUpperCase();
  if (
    playerChoice !== ROCK &&
    playerChoice !== PAPER &&
    playerChoice !== SCISSORS
  ) {
    alert(`invalid choice!! we selected ${DEFAULT_OPTION} for you!`);
    return DEFAULT_OPTION;
  }
  return playerChoice;
};

const getComputerChoice = () => {
  const randomNum = Math.random();
  if (randomNum < 0.34) {
    return ROCK;
  } else if (randomNum < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const getWinner = (cCHoice, pCHoice) => {
  if (cCHoice === pCHoice) {
    return DRAW;
  } else if (
    (cCHoice === ROCK && pCHoice === PAPER) ||
    (cCHoice === PAPER && pCHoice === SCISSORS) ||
    (cCHoice === SCISSORS && pCHoice === ROCK)
  ) {
    return RESULT_PLAYER_WINS;
  } else {
    return RESULT_COMPUTER_WINS;
  }
};

startGameBtn.addEventListener("click", () => {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  const playerSelection = getPlayerChoice();
  console.log(playerSelection);
  const computerSelection = getComputerChoice();
  console.log(computerSelection);
  const winner = getWinner(computerSelection, playerSelection);
  console.log(winner);
  let message = `You picked ${playerSelection} and computer picked ${computerSelection} therefore you`;
  if(winner === DRAW){
    message = message + ' had a draw';
  } else if (winner === RESULT_COMPUTER_WINS){
    message = message + ' lost';
  } else{
    message = message +  ' won';
  }
  alert(message);
  gameIsRunning = false;
});
