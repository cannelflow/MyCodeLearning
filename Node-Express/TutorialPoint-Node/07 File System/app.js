var fs = require('fs');
//Synchronus Read
var data = fs.readFileSync('input.txt');
console.log("Output from Asynchronus Read : " + data.toString());
//ASynchronus Read
fs.readFile('input.txt',function(err,data) {
  if(err){
    console.log("Handle This First");
  }else {
    console.log("Output from Synchronus Read : " + data.toString());
  }
})
console.log("Programme Ends Here");
