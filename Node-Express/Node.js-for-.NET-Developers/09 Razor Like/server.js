var express = require('express');
var http = require('http');
var app = express();

var port = process.env.port || 1337; //define port

var server = http.createServer(app); //create server

app.set("view engine", "vash"); //ejs view engine

//methods
app.get("/", function (req, res) {
    res.render("index", { title: "Express+Vash" });
});
app.get("/api/user", function (req, res) {
    res.set({ "Content-Type": "application/json" });
    res.send({ name: "cannelflow", isValid: false, group: "Admin" });
});
server.listen(port);
console.log("Server Started At Port " + port);