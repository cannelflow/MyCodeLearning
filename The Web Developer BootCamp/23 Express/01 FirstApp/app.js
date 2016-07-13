var express = require('express');
var app = express();
//===================
//      Route
//===================
app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.get('/bye',function (req,res) {
    res.send('Buy World!!!');
});
app.get('/come',function (req,res) {
    res.send('Come Again');
});
//===================
//   create server
//===================
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
