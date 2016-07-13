/*global prompt,alert,console*/
/*jslint plusplus: true */
console.log('Function To Check For Even');
function isEven(num) {
    "use strict";
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
isEven(4);
isEven(21);
isEven(68);
isEven(333);

console.log('Function To Get Factorial Of Number');
function fact(num) {
    "use strict";
    if (num < 1) {
        return 1;
    } else {
        return num * fact(num - 1);
    }
}
fact(5);
fact(2);
fact(10);
fact(0);

console.log('Replace Character In A String');
function rep(str) {
    "use strict";
    if (str.indexOf('-') > 0) {
        return str.replace(/-/g, '_');
    } else {
        return str;
    }
}
rep("hello-world");
rep('Hello');