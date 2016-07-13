/* jshint node: true */
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var friends = ['A','B','C','D','E'];
// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }));

//set dir for public file like css ans js
app.use(express.static("public"));

// set the view engine to ejs
app.set('view engine', 'ejs');

// render index page 
app.get('/', function(req, res) {
    res.render('pages/index');
});

//render friends page
app.get('/friends', function(req, res) {
    res.render('pages/friends',{friends:friends});
});

//post friend list
app.post('/addfriend', function(req, res) {
    var name = req.body.name;
    friends.push(name);
    res.redirect('/friends');
});

app.listen(8080);
console.log('8080 is the magic port');