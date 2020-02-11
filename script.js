var colors = [
    "rgb(255, 0, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 0, 255)",
    "rgb(255, 255, 255)",
    "rgb(0, 0, 0)",
    "rgb(255, 255, 0)"
]

generateNewColors()

var squares = document.querySelectorAll(".squares");
var colorDisplay = document.querySelector("#colorDisplay");

var pickedColor = pickColor();
colorDisplay.textContent = pickedColor;

setSquaresColor(squares, colors);
addEventListeners(squares, pickedColor);

function setSquaresColor(squares, colors) {
    for (i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
}

function addEventListeners(squares, pickedColor) {
    for (i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", function () {
            var clickedColor = this.style.backgroundColor;
            if (clickedColor === pickedColor) {
                victoryChangeColors(squares, pickedColor);
            } else {
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

function victoryChangeColors(squares, rightColor) {
    for (i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = rightColor;
    }
}