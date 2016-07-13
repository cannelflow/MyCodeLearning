/* jshint browser: true */
var numSquare = 6;
var colors = selectColor(numSquare);
var pickedColor = pickColor();
var square = document.querySelectorAll(".square");
var colorMatch = document.querySelector(".pickedColor");
var textResult = document.querySelector(".textResult");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector(".reset");
var mode = document.querySelectorAll('.mode');
var i;

for (i = 0; i < square.length; i++) {
    //add different color to square
    square[i].style.background = colors[i];
    //add eventlistner to square
    square[i].addEventListener('click', squareClick);
}

colorMatch.textContent = pickedColor;

//logic for reset button
resetButton.addEventListener('click', function () {
    reset();
});

//pick random color from color array
function pickColor() {
    var randNumber = Math.floor(Math.random() * colors.length);
    return colors[randNumber];
}

//check if guess is true or false
function squareClick() {
    /*jshint validthis:true */
    'use strict';
    var selectedColor = (this.style.background);
    if (selectedColor === pickedColor) {
        squareColor(selectedColor);
        h1.style.background = selectedColor;
        resetButton.textContent = "Play Again?";
    } else {
        this.style.background = 'rgb(52, 73, 94)';
        textResult.textContent = "Try Again";
    }
}

//check if guess is true or false
function squareColor(selectedColor) {
    'use strict';
    for (i = 0; i < square.length; i++) {
        square[i].style.background = selectedColor;
    }
    textResult.textContent = "Correct";
}

//generate color array
function selectColor(num) {
    var arr = [];
    for (i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}

//generate random color
function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}


//logic for mode
for (i = 0; i < mode.length; i++) {
    mode[i].addEventListener('click',abc);
}

function abc () {
        mode[0].classList.remove('selected');
        mode[1].classList.remove('selected');
        this.classList.add('selected');
        this.textContent === 'Easy' ? numSquare = 3 : numSquare = 6;
        reset();
    }

function reset() {
    colors = selectColor(numSquare);
    // change color for square
    for (i = 0; i < square.length; i++) {
        if (colors[i]) {

            square[i].style.display = 'block';
            square[i].style.background = colors[i];
        } else {
            square[i].style.display = 'none';
        }
    }
    //change color display
    pickedColor = pickColor();
    colorMatch.textContent = pickedColor;
    //change background color of display
    h1.style.background = '#22A7F0';
    textResult.textContent = "";
    resetButton.textContent = "New Colors";
}