var express = require('express');
var app = express();
//=================
//      Route
//=================
app.get('/', function (req, res) {
    res.send('You Requested ' + req.url);
});
app.get('/eng', function (req, res) {
    res.send('You Requested ' + req.url);
});
app.get('/spn', function (req, res) {
    res.send('You Requested ' + req.url);
});
app.get('/r/:subreditt', function (req, res) {
    abc = req.params.subreditt;
    res.send('Welcome To' + abc + 'Subreditt');
});
app.get('/r/:subreditt/comment/:id/:title/', function (req, res) {
    abc = req.params.subreditt;
    abc1 = req.params.comment;
    abc2 = req.params.id;
    abc3 = req.params.title;
    res.send('Welcome To ' + abc3 + ' Subreditt');
});
app.get('*', function (req, res) {
    res.send('Sorry Page Not Found!!');
});
//=================
// Create Server
//=================
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});