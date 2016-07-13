/* jshint node: true */
var express = require('express');
var app = express();

//======================
//serve from public dir
//======================

app.use(express.static("public"));

//======================
//set view engine
//======================

app.set("view engine","ejs");

//======================
//        Routes
//======================

app.get('/', function (req, res) {
    res.render('home');
});
app.get('/fallinlovewith/:thing', function (req, res) {
    var thing = req.params.thing;
    res.render('love',{thingVar: thing});
});
app.get('/post', function (req, res) {
   var post = [{title:"Post 1",author:"Author 1"},
              {title:"Post 2",author:"Author 2"},
              {title:"Post 3",author:"Author 3"},
              {title:"Post 4",author:"Author 4"}];
    res.render('post',{posts:post});
});

//======================
//        Server
//======================

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});