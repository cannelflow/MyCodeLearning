/*global prompt,alert,console*/
/*jslint plusplus: true */
var i;
console.log("Print Reverse ");

function printReverse(arg) {
    'use strict';
    for (i = arg.length - 1; i >= 0; i--) {
        console.log(arg[i]);
    }
}
printReverse(["A", "B", "C", "D", "E"]);

console.log("Check Uniform");

function isUniform(arg) {
    'use strict';
    for (i = 1; i < arg.length; i++) {
        if (arg[i] !== arg[0]) {
            return false;
        }
    }
    return true;
}
isUniform([1, 1, 1, 1]);

console.log("Sum Of Array");

function sumArray(arg) {
    'use strict';
    var sum = 0;
    for (i = 0; i < arg.length; i++) {
        sum += arg[i];
    }
    console.log(sum);
}
sumArray([1, 2, 3, 4, 5, 6]);

console.log("Maximum Number");
function isMax(arg) {
    'use strict';
    var max = arg[0];
    for (i = 1;i < arg.length; i++) {
        if (arg[i] > max) {
            max = arg[i];
        }
    }
    console.log(max);
}
isMax([1,2,3,4]);

