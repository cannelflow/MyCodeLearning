/*global prompt,alert,console*/
/*jslint plusplus: true */
var btn = document.querySelector("button");
var body = document.querySelector("body");
//var isPurple = false;
//btn.addEventListener('click', function () {
//    'use strict';
//    if (isPurple) {
//        body.style.background  = "white";
//    } else {
//        body.style.background = "purple";
//    }
//    isPurple = !isPurple;
//});
btn.addEventListener('click', function () {
    'use strict';
    body.classList.toggle("purple");
});