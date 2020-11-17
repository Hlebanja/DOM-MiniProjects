'use strict';

let randomNumber = 1 + Math.floor(Math.random() * 4);
let scoreCounter = document.querySelector('.score');
let highscore = document.querySelector('.highscore');

let inputPrompt;
let checkButton = document.querySelector('.check');

checkButton.addEventListener('click', function () {
  inputPrompt = document.querySelector('input');

  checkResult(randomNumber, inputPrompt.value, scoreCounter);
});

//check if result is < > or = answer.
//if it's < or >, return message and subtract 1 from score.
//if it's =, return winning message AND update highscore.
function checkResult(randomNumber, userGuess, scoreCounter) {
  if (userGuess < randomNumber) {
    reduceScore();
    alert('too small!');
  } else if (userGuess > randomNumber) {
    reduceScore();
    alert('too big!');
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
