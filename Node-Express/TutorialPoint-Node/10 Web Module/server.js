var http = require('http');
var fs = require('fs');
var url = require('url');
var port = 8080;
var server = http.createServer(function(req, res) {
    var pathName = url.parse(req.url).pathname;
    console.log("Requested Url : " + pathName);
    fs.readFile(pathName.substr(1), function(err, data) {
        if (err) {
            console.log(err);
            res.writeHead(404, {'Content-Type': 'text/html'});
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data.toString());
        }
    })
});
server.listen(port, function() {
    console.log("Server Is Started At Port : " + port);
});
