/* jshint node: true */
var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var app = express();
var friends = ['A', 'B', 'C', 'D', 'E'];
// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({
    extended: false
}));

//set dir for public file like css ans js
app.use(express.static("public"));

// set the view engine to ejs
app.set('view engine', 'ejs');

// render result page 
app.get('/result', function (req, res) {
    var query = req.query.name;
    var url = "http://www.omdbapi.com/?s="+query;
    request(url, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                var data = JSON.parse(body);
               // res.send(data.Search[0].Title);
                res.render('pages/result',{data:data});
            }
        });

});

//render index page
app.get('/', function (req, res) {
    res.render('pages/index');
});


app.listen(8080);
console.log('8080 is the magic port');