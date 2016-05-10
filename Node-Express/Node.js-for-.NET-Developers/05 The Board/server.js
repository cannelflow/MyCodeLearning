var http = require('http');
var port = process.env.port || 1337;
var server = http.createServer(function (req, res) {
    console.log("Requested Url Is : " + req.url);
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<html><body><h1>"+req.url+"</h1></body></html>");
    res.end();
});
server.listen(port);
console.log("Server Started At Port " + port);