/* jshint node: true */
var express = require('express');
var app = express();
//======================
//        Routes
//======================
app.get('/', function (req, res) {
    res.render('home.ejs');
});
app.get('/fallinlovewith/:thing', function (req, res) {
    var thing = req.params.thing;
    res.render('love.ejs',{thingVar: thing});
});
app.get('/post', function (req, res) {
   var post = [{title:"Post 1",author:"Author 1"},
              {title:"Post 2",author:"Author 2"},
              {title:"Post 3",author:"Author 3"},
              {title:"Post 4",author:"Author 4"}];
    res.render('post.ejs',{posts:post});
});
//======================
//        Server
//======================
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});