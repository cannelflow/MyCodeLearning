var express = require('express');
var http = require('http');
var app = express();
//define port
var port = process.env.port || 1337;
//create server
var server = http.createServer(app);
//methods
app.get("/", function (req,res) {
    res.send("<html><body><h1>Express</h1></body></html>");
});
app.get("/api/user", function (req, res) {
    res.set({"Content-Type":"application/json"});
    res.send({name:"cannelflow",isValid:false,group:"Admin"});
});
server.listen(port);
console.log("Server Started At Port " + port);