/*global prompt,alert,console*/
/*jslint plusplus: true */
var arr = ["A", "B", "C", "D", "E"];
var i;
console.log("By For Loop");
for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
console.log("By forEach Loop");
arr.forEach(function (arr) {
    console.log(arr);
});