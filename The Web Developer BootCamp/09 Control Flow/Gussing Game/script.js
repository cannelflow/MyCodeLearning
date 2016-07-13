/*global prompt,alert,console*/
var num = 7;
//below will give string 
var gussedNum = Number(prompt("Guess A Number"));
if (gussedNum < num) {
    console.log("Too Low Guess Again");
} else if (gussedNum > num) {
    console.log("Too High Guess Again!");
} else {
    console.log("Correct");
}
