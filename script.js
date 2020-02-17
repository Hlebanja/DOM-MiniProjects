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

function run() {
    generateNewColors(numSquares) //has to be before pickColor();
    pickColor();
    setSquaresColors();
    setupSquares();
}

resetButton.addEventListener("click", function () {
    generateNewColors(numSquares) //has to be before pickColor();
    pickColor();
    setSquaresColors();
    h1.style.backgroundColor = "steelblue";
});

easyBtn.addEventListener("click", function () {
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numSquares = 3;
    generateNewColors(numSquares);
    pickColor();
    setSquaresColors();
    h1.style.backgroundColor = "#steelblue";
});

hardBtn.addEventListener("click", function () {
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares = 6;
    generateNewColors(numSquares);
    pickColor();
    setSquaresColors();
    h1.style.backgroundColor = "#steelblue";
});

function setSquaresColors() {
    generateNewColors(numSquares);
    pickColor();
    resetButton.textContent = "New Colors";

    for (var i = 0; i < squares.length; i++) {
        if(colors[i]) { //check if colors[i] is empty
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
}

function setupSquares() {
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
    pickedColor = colors[randomNumber];
    colorDisplay.textContent = pickedColor;
    message.innerHTML = "";
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
    for (var i = 0; i < length; i++) {
        arr.push(generateRGB());
    }
    colors = arr;
}

function victoryChangeColors(rightColor) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = rightColor;
    }
}