/*global prompt,alert,console*/
/*jslint plusplus: true */
var byId = document.getElementById("hilighted");
console.dir(byId);
var byClass = document.getElementsByClassName("bolded");
console.dir(byClass[0]);
var byTag = document.getElementsByTagName("li");
console.dir(byTag[0]);
var queryName = document.querySelector("#hilighted");
queryName.style.color = "red";