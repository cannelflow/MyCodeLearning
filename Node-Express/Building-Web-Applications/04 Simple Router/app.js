var express = require('express');
var app = express();
var port = 8080;
app.get("/",function (req,res) {
  res.send("Hello World !!");
});
app.get("/books",function (req,res) {
  res.send("Hello Books !!");  
});
app.listen(port, function(err) {
    console.log("Server Is Now Running At Port: " + port);
});
