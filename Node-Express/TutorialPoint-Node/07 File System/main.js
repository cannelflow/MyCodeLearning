var fs = require('fs');
console.log('going to open a file');
fs.open('input.txt','r+',function (err,fd) {
  if (err) {
    console.log("Handle Me !!!");
  } else {
    console.log("Success !!!");
  }
});
