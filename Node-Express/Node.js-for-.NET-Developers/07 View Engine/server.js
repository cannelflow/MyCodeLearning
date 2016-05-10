var express = require('express');
var http = require('http');
var app = express();
//define port
var port = process.env.port || 1337;
//create server
var server = http.createServer(app);
//SetUp The View Engine no need of require here
app.set("view engine","jade");
//methods
app.get("/", function (req, res) {
   // res.send("<html><body><h1>Express</h1></body></html>");
    res.render("jade/index", {title:"Express+Jade"});
});
app.get("/api/user", function (req, res) {
    res.set({ "Content-Type": "application/json" });
    res.send({ name: "cannelflow", isValid: false, group: "Admin" });
});
server.listen(port);
console.log("Server Started At Port " + port);