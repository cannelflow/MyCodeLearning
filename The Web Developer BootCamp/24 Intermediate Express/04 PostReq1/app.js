/* jshint node: true */
var express = require('express');
var app = express();

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
    var friends = ['A','B','C','D','E'];
    res.render('pages/friends',{friends:friends});
});

//post friend list
app.post('/addfriend', function(req, res) {
    res.send('Add New Friend Here');
});

app.listen(8080);
console.log('8080 is the magic port');