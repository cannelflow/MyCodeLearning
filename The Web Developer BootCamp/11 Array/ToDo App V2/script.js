/*global prompt,alert,console*/
/*jslint plusplus: true */
var toDo = [];
var input = prompt("What Would You Like To Do");
while (input !== 'quit') {
    if (input === 'list') {
        toList();
    } else if (input === 'new') {
        toNew();
    } else if (input === 'delete') {
        toDelete();
    }
    var input = prompt("What Would You Like To Do");
}
console.log("You Quit The App Thanks For Using !!!");

function toList() {
    console.log('**********');
    toDo.forEach(function (todo, index) {
        console.log(index + ': ' + todo);
    });
    console.log('**********');
}

function toNew() {
    var newVal = prompt("Enter Your ToDo List Now");
    toDo.push(newVal);
    console.log("Successfully Added");
}

function toDelete() {
    var num = prompt("Which Index You Want To Delete");
    toDo.splice(num, 1);
    console.log("Deleted SuccessFully");
}