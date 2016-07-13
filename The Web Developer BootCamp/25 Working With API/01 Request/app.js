/* jshint node: true */
var request = require('request');

//request url
request('http://www.google.com', function (error, response, body) {
  if (!error && response.statusCode === 200) {
    console.log(body); // Show the HTML for the Google homepage. 
  }
});

app.listen(8080);
console.log('8080 is the magic port');