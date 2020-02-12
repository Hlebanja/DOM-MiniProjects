var numSquares = 6;
var colors = []
var pickedColor;

var squares = document.querySelectorAll(".squares");
var colorDisplay = document.querySelector("#colorDisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");

var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");



run();

var resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", function () {
    generateNewColors(numSquares) //has to be before pickColor();
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;

    setSquaresColor();
    h1.style.backgroundColor = "#232323";
});

function run() {
    generateNewColors(numSquares) //has to be before pickColor();
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;

    setSquaresColor();
    addEventListeners();
}

function setSquaresColor() {
    for (i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
}

function addEventListeners() {
    for (i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", function () {
            var clickedColor = this.style.backgroundColor;
            if (clickedColor === pickedColor) {
                victoryChangeColors(pickedColor);
                h1.style.backgroundColor = pickedColor;
                message.innerHTML = "Correct!";
            } else {
                message.innerHTML = "Try again";
                this.style.backgroundColor = "#232323";
            }
        });
    }
}

function pickColor() {
    //if length=6 pick between 0 and 5; if 3 between 0 and 2 
    var randomNumber = Math.floor(Math.random() * colors.length);
    return colors[randomNumber];
}

function generateRGB() {
    var numberOne = Math.floor((Math.random() * 256));
    var numberTwo = Math.floor((Math.random() * 256));
    var numberThree = Math.floor((Math.random() * 256));
    var rgbString = "rgb(" + numberOne + ", " + numberTwo + ", " + numberThree + ")";
    return rgbString;
}

function generateNewColors(length) {
    var arr = [];
    for (i = 0; i < length - 1; i++) {
        arr.push(generateRGB());
    }
    colors = arr;
}

function victoryChangeColors(rightColor) {
    for (i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = rightColor;
    }
}