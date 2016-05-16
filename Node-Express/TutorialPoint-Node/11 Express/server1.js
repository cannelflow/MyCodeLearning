var express = require('express');
var port = 8080;
var app = express();
app.use(express.static('public'));
app.get('/',function(req,res) {
  console.log("Requested For : " + req.url);
  res.send("Hello World !!!");
});
var server = app.listen(port, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at ", host, port)
})
