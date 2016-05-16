var fs = require('fs');
var data = "Hello World From TutorialPoint"
var writerStream = fs.createWriteStream('output.txt');
writerStream.write(data,'utf8');
writerStream.end();
writerStream.on('finish',function() {
  console.log("Write Completed");
})
writerStream.on('error',function(err) {
  console.log(err.stack);
});
console.log("Programme Ended");
