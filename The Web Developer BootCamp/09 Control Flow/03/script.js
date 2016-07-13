/*global prompt,alert,console*/

/*
var answer = prompt("Are We There Yet");
if (answer === 'yes') {
    console.log('We Made It!!');
} else {
    var answer = prompt("Are We There Yet");
}
*/

/*
var answer = prompt("Are We There Yet");
//while answer is not equal to yes
while (answer !== 'yes' && answer !== 'yeah') {
    var answer = prompt("Are We There Yet");
}
alert('We Made It!!');
*/

var answer = prompt("Are We There Yet");
while (answer.indexOf('yes') === -1) {
    var answer = prompt("Are We There Yet");
}
alert('We Made It!!');
