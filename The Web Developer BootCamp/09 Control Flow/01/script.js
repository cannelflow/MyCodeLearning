/*global prompt,alert,console*/
var age = 25;
if (age < 0) {
    console.log("You Are Not Born Yet!");
}
if (age === 21) {
    console.log("Happy 21st Birth Day!!");
}
if (age % 2 !== 0) {
    console.log("Your Age Is Odd!");
}
if (Math.sqrt(age) % 1 === 0) {
    console.log("Your Age Is Perfect Square!");
} else {
    console.log("Do Anything You Like!");
}
