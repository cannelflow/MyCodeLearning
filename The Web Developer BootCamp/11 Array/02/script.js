/*global prompt,alert,console*/
/*jslint plusplus: true */
var arr = ["A", "B", "C", "D", "E"];
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
number.forEach(function (arr) {
    if (arr % 3 === 0) {
        console.log(arr);
    }
});