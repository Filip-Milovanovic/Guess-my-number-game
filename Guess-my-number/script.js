"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
//Cekamo klik na button sa klasom check, onda ovo function je ono sto treba da se desi kad se klikne, u osvom slucaju je to da ispisemo value iz inputa
//Sve sto dobijamo od korisnika preko inputa je STRING

document.querySelector(".check").addEventListener("click", function () {
  // document.querySelector(".message").textContent = "Correct number!";
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);
  console.log(typeof guess);

  //No number
  if (!guess) {
    displayMessage("No number!");
    //We won
  } else if (guess === secretNumber) {
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
    document.querySelector(".number").textContent = secretNumber;
    displayMessage("Correct number!");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    //Guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "Too high!" : "Too low!");

      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You lost the game!");
      document.querySelector(".score").textContent = 0;
    }
  }
});

////////////////////////////////////////////
// CHALLANGE #1 - Again button

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor = "#222";
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector(".score").textContent = score;
  displayMessage("Start guessing...");
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
});
