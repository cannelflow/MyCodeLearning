/*global prompt,alert,console*/
/*jslint plusplus: true */
console.log('Print All Number Between -10 & 19');
var i;
for (i = -10; i < 19; i++) {
    console.log(i);
}
console.log('Print All Even Number Between 10 & 40');
/*
for (i = 10; i <= 40; i += 2) {
    console.log(i);
}
*/
for (i = 10; i <= 40; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
console.log('Print All Odd Number Between 300 & 333');
/*
for (i = 301; i <= 333; i += 2) {
    console.log(i);
}
*/
for (i = 301; i <= 333; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}
console.log('Print All Number Divisible By 5 & 3 Between 5 & 50');
for (i = 5; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i);
    }
}
