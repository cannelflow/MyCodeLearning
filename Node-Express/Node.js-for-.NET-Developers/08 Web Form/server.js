var express = require('express');
var http = require('http');
var ejsEngine = require('ejs-locals'); 
var app = express();

var port = process.env.port || 1337; //define port

var server = http.createServer(app); //create server

app.engine("ejs", ejsEngine); //support master pages
app.set("view engine","ejs"); //ejs view engine

//methods
app.get("/", function (req, res) {
    res.render("ejs/index", { title: "Express+EJS" });
});
app.get("/api/user", function (req, res) {
    res.set({ "Content-Type": "application/json" });
    res.send({ name: "cannelflow", isValid: false, group: "Admin" });
});
server.listen(port);
console.log("Server Started At Port "  + port);