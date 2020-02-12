var numSquares = 6;
var colors = []
var pickedColor;

var squares = document.querySelectorAll(".squares");
var colorDisplay = document.querySelector("#colorDisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");

var resetButton = document.getElementById("resetButton");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var modeButtons = document.querySelectorAll(".mode");


run();

resetButton.addEventListener("click", function () {
    generateNewColors(numSquares) //has to be before pickColor();
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;

    setSquaresColor();
    h1.style.backgroundColor = "#232323";
});

easyBtn.addEventListener("click", function () {
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    generateNewColors(3);
    pickedColor = pickedColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener("click", function () {
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    generateNewColors(6);
    pickedColor = pickedColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
        squares[i].style.display = "block";
    }
});

function run() {
    generateNewColors(numSquares) //has to be before pickColor();
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;

    setSquaresColor();
    addEventListeners();
}

function setSquaresColor() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
}

function addEventListeners() {
    for (var i = 0; i < squares.length; i++) {
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
    for (var i = 0; i < length - 1; i++) {
        arr.push(generateRGB());
    }
    colors = arr;
}

function victoryChangeColors(rightColor) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = rightColor;
    }
}