/*global prompt,alert,console*/
/*jslint plusplus: true */
var button1 = document.querySelector(".button1");
var button2 = document.querySelector(".button2");
var p1Display = document.querySelector(".p1display");
var p2Display = document.querySelector(".p2display");
var reset = document.querySelector(".reset");
var setVal = document.querySelector(".setVal");
var winVal = document.querySelector(".maxVal");
var val1 = 0;
var val2 = 0;
var maxVal = 5;
var gameOver = false;


function reUse() {
    'use strict';
    val1 = 0;
    val2 = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove("win");
    p2Display.classList.remove("win");
    gameOver = false;
}


button1.addEventListener('click', function () {
    'use strict';
    if (gameOver === false) {
        val1++;
        if (val1 === maxVal) {
            p1Display.classList.add("win");
            gameOver = true;
        }
        p1Display.textContent = val1;
    }
});


button2.addEventListener('click', function () {
    'use strict';
    if (gameOver === false) {
        val2++;
        if (val2 === maxVal) {
            p2Display.classList.add("win");
            gameOver = true;
        }
        p2Display.textContent = val2;
    }
});


reset.addEventListener('click', function () {
    'use strict';
    reUse();
});


setVal.addEventListener('change', function () {
    'use strict';
    winVal.textContent = setVal.value;
    maxVal = Number(setVal.value);
    reUse();
});
