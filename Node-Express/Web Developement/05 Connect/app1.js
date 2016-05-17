var connect = require("connect");
var util = require('util');
var port = 8080;
var interceptorFunction = function(req,res,next) {
  console.log(util.format('Request For %s with method %s',req.url,req.method));
  next();
}
var server = connect()
    .use('/log',interceptorFunction)
    .use(function(req, res) {
        res.end("Hello From Connect");
    })
    .listen(port, function() {
    console.log("Server Is Running At Port : " + port);
});
