let score = 20;
let highscore = 0;
let randomNumber = Math.floor(Math.random() * 21);

let inputPrompt = document.querySelector('input');
console.log(inputPrompt);

//check if result is < > or = answer.
//if it's < or >, return message and subtract 1 from score.
//if it's =, return winning message AND update highscore.
function checkResult(randomNumber, inputPrompt, score) {
  if (inputPrompt < randomNumber) {
    alert('too small!');
    score--;
  } else if (inputPrompt > randomNumber) {
    alert('too big!');
    score--;
  } else {
    alert('winner winner chicken dinner!');
    if (score > highscore) {
      highscore = score;
    }
  }
}
