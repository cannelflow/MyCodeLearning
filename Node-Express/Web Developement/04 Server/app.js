var http = require('http');
var port =8080;
var server = http.createServer(function (req,res) {
  console.log("Askef For " + req.url);
  res.writeHead({"Content-Type":"text/plain"});
  res.write("Hello World !!!");
  res.end();
});
server.listen(port,function() {
  console.log("Server Running At Port " + port);
});
