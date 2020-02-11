var colors = [
    "rgb(255, 0, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 0, 255)",
    "rgb(255, 255, 255)",
    "rgb(0, 0, 0)",
    "rgb(255, 255, 0)"
]
var squares = document.querySelectorAll(".squares");
var colorDisplay = document.querySelector("#colorDisplay");
var h1 = document.querySelector("h1");
var message = document.querySelector("#message");
var pickedColor;

run();

var resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", function () {
    generateNewColors() //has to be before pickColor();
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;

    setSquaresColor(squares, colors);
});

function run() {
    generateNewColors() //has to be before pickColor();
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;

    setSquaresColor(squares, colors);
    addEventListeners();
}

function setSquaresColor(squares, colors) {
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
    randomNumber = Math.floor(Math.random() * colors.length);
    return colors[randomNumber];
}

function generateRGB() {
    var numberOne = Math.floor((Math.random() * 256));
    var numberTwo = Math.floor((Math.random() * 256));
    var numberThree = Math.floor((Math.random() * 256));
    var rgbString = "rgb(" + numberOne + ", " + numberTwo + ", " + numberThree + ")";
    return rgbString;
}

function generateNewColors() {
    for (i = 0; i < colors.length; i++) {
        colors[i] = generateRGB();
    }
}

function victoryChangeColors(rightColor) {
    for (i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = rightColor;
    }
}