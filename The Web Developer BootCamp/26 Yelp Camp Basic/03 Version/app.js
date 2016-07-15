/* jshint node: true */
var express = require('express');
var bodyParser = require('body-parser');
//var request = require('request');
var app = express();

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({
    extended: false
}));

//temprory database
var campground = [
    {name:"India",image:"https://farm4.staticflickr.com/3270/2617191414_c5d8a25a94.jpg"},
    {name:"Austrelia",image:"https://farm6.staticflickr.com/5181/5641024448_04fefbb64d.jpg"},
    {name:"America",image:"https://farm3.staticflickr.com/2464/3694344957_14180103ed.jpg"},
    {name:"France",image:"https://farm2.staticflickr.com/1281/4684194306_18ebcdb01c.jpg"}
];

//set dir for public file like css and js
app.use(express.static("public"));

// set the view engine to ejs
app.set('view engine', 'ejs');

//render index page
app.get('/', function (req, res) {
    res.render('pages/index');
});

// render campground page 
app.get('/campground', function (req, res) {
    res.render('pages/campground',{data:campground});
});

//add new campground
app.get('/campground/new', function (req, res) {
    res.render('pages/new');
});

//post new campground
app.post('/campground', function (req, res) {
    var newName = req.body.name;
    var newImage = req.body.image;
    var newData = {name:newName,image:newImage};
    campground.push(newData);
    res.redirect('/campground');
});

//render page not found

app.get('*', function (req, res) {
    res.send('Page Not Found Trt Something New');
});

//start server with message
app.listen(8080);
console.log('8080 is the magic port');