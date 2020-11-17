'use strict';

let randomNumber;
let scoreCounter = document.querySelector('.score');
let highscore = document.querySelector('.highscore');
let gameMessage = document.querySelector('.message');
let checkButton = document.querySelector('.check');
let againButton = document.querySelector('.again');
let inputPrompt = document.querySelector('input');
let answerIcon = document.querySelector('.number');
let gameBody = document.querySelector('body');

resetGame();

checkButton.addEventListener('click', function () {
  inputPrompt = document.querySelector('input');
  checkResult(randomNumber, parseInt(inputPrompt.value));
});

againButton.addEventListener('click', function () {
  resetGame();
});

function resetGame() {
  randomNumber = 1 + Math.floor(Math.random() * 20);
  scoreCounter.textContent = '20';
  gameMessage.textContent = 'Start guessing...';
  inputPrompt.value = 0;
  answerIcon.textContent = '?';
  changeBackgorund('#222');
  // answerIcon.textContent = randomNumber;
}

function checkResult(randomNumber, userGuess) {
  if (!isInputValid(userGuess)) {
    alert('invalid input. Please insert a number between 1 and 20');
  } else if (userGuess < randomNumber) {
    reduceScore();
    gameMessage.textContent = 'Too small...';
  } else if (userGuess > randomNumber) {
    reduceScore();
    gameMessage.textContent = 'Too big...';
  } else {
    victoryMessage();
    if (parseInt(scoreCounter.textContent) > parseInt(highscore.textContent)) {
      highscore.textContent = scoreCounter.textContent;
    }
  }
}

function isInputValid(input) {
  if (typeof input != 'number' || input < 1 || input > 20) {
    return false;
  } else {
    return true;
  }
}

function victoryMessage() {
  gameMessage.textContent = 'winner winner chicken dinner!';
  answerIcon.textContent = randomNumber;
  changeBackgorund('#60b347');
}

function changeBackgorund(color) {
  gameBody.style.backgroundColor = color;
}

function reduceScore() {
  scoreCounter.textContent = parseInt(scoreCounter.textContent) - 1;
}
