var http = require("http")
var server = http.createServer(function (req, res) {
    console.log(req.url)
    res.write("<html><body><h1>"+ req.url +"</h1></body></html>");
    res.end();
});
server.listen(1337);
