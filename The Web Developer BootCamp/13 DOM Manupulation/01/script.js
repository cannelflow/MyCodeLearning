/*global prompt,alert,console*/
/*jslint plusplus: true */
var body = document.querySelector("body");
var isBlue = false;
setInterval(function () {
    'use strict';
    if (isBlue) {
        body.style.background = 'white';
    } else {
        body.style.background = 'blue';
    }
    //we changed the value here
    isBlue = !isBlue;
}, 1000);