const emojiMap = {
  rock: "✊",
  paper: "✋",
  scissors: "✌️",
};

let playerScore = 0;
let computerScore = 0;

function getComputersChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function findWinner(player, computer) {
  if (player === computer) return "draw";
  if (
    (player === "rock" && computer === "scissors") ||
    (player === "scissors" && computer === "paper") ||
    (player === "paper" && computer === "rock")
  ) {
    return "player";
  } else {
    return "computer";
  }
}

function play(playersChoice) {
  const computersChoice = getComputersChoice();
  const result = findWinner(playersChoice, computersChoice);

  document.getElementById("player-choice").textContent =
    emojiMap[playersChoice];
  document.getElementById("computer-choice").textContent =
    emojiMap[computersChoice];

  if (result === "player") {
    playerScore++;
    document.getElementById("result").textContent = "You Win";
  } else if (result === "computer") {
    computerScore++;
    document.getElementById("result").textContent = "Computer wins";
  } else {
    document.getElementById("result").textContent = "It's a Draw";
  }

  document.getElementById("player-score").textContent = playerScore;
  document.getElementById("computer-score").textContent = computerScore;
}

function restartGame() {
  playerScore = 0;
  computerScore = 0;

  document.getElementById("player-score").textContent = playerScore;
  document.getElementById("computer-score").textContent = computerScore;
  document.getElementById("result").textContent = "PLAY!";
  document.getElementById("player-choice").textContent = "...";
  document.getElementById("computer-choice").textContent = "...";
}
