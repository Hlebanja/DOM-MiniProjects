'use strict';

let randomNumber = 1 + Math.floor(Math.random() * 4);

let scoreCounter = document.querySelector('.score');
let highscore = document.querySelector('.highscore');
let gameMessage = document.querySelector('.message');
let checkButton = document.querySelector('.check');
let inputPrompt;

checkButton.addEventListener('click', function () {
  inputPrompt = document.querySelector('input');
  checkResult(randomNumber, inputPrompt.value, scoreCounter);
});

document.querySelector('.number').textContent = randomNumber;

function checkResult(randomNumber, userGuess, scoreCounter) {
  if (userGuess < randomNumber) {
    reduceScore();
    gameMessage.textContent = 'Too small...';
  } else if (userGuess > randomNumber) {
    reduceScore();
    gameMessage.textContent = 'Too big...';
  } else {
    alert('winner winner chicken dinner!');
    if (parseInt(scoreCounter.textContent) > parseInt(highscore.textContent)) {
      highscore.textContent = scoreCounter.textContent;
    }
  }
}

function reduceScore() {
  scoreCounter.textContent = parseInt(scoreCounter.textContent) - 1;
}
