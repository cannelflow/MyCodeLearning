var express = require('express');
var app = express();
var fs = require('fs');
var user = {
   "user4" : {
      "name" : "mohit",
      "password" : "password4",
      "profession" : "teacher",
      "id": 4
   }
}
app.get('/addUser',function(req,res) {
  fs.readFile(__dirname+"/"+"user.json",function(err,data) {
    data = JSON.parse(data);
    data["user4"] = user["user4"];
    console.log(data);
    res.end(JSON.stringify(data));
  });
})
var server = app.listen(8080, function () {

  var host = server.address().address
  var port = server.address().port
  console.log("Server Started At Port "+ port)

})
