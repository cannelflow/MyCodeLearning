var connect = require("connect");
var util = require('util');
var serveStatic = require('serve-static')
var port = 8080;
var server = connect()
    .use(serveStatic(__dirname+'/public'))
    .use(function(req, res) {
        res.end("Hello From Connect");
    })
    .listen(port, function() {
    console.log("Server Is Running At Port : " + port);
});
