var express = require('express');
var app = express();
//==============
//   Route
//==============
app.get('/', function (req, res) {
    res.send('Hi there welcome to my assignment');
});
app.get('/speak/:animal', function (req, res) {
   var sounds = {
       pig:"Oink",
       cow:"Moo",
       dog:"Woof Woof",
       cat:"Meow Meow"
   }
   var animal = req.params.animal.toLowerCase();
   var sound = sounds[animal];
    res.send("The " +animal+" Says " + sound);
});
app.get('/repeat/:msg/:times', function (req, res) {
    var val = req.params.msg;
    var num = Number(req.params.times);
    var result = "";
    for (var i =0; i <= num; i++) {
        result += val + " ";
    }
    res.send(result);
});
app.get('*', function (req, res) {
    res.send("Sorry  Page Not Found!!");
});
//==============
//   Server
//==============
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});