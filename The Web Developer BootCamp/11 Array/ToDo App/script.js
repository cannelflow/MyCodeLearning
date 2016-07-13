/*global prompt,alert,console*/
/*jslint plusplus: true */
var toDo = [];
var input = prompt("What Would You Like To Do");
while (input !== 'quit') {
    if (input === 'list') {
        console.log(toDo);
    } else if (input === 'new') {
        var newVal = prompt("Enter Your ToDo List Now");
        toDo.push(newVal);
    }
    var input = prompt("What Would You Like To Do");
}
console.log("You Quit The App Thanks For Using !!!");