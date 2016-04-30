var http = require("http")
var express = require("express")
var underscore = require("underscore")
var app = express();
app.get("/", function (req, res) {
    res.send("<html><body><h1>Express Learning </h1></body></html>");
})
var server = http.createServer(app);
server.listen(1338);
