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
//======================
//        Server
//======================
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});