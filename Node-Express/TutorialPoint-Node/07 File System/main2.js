var fs = require('fs');
console.log("going to write into exixting file");
fs.writeFile('input.txt', "This Is Node JS Tutorial",function(err) {
  if (err) {
    console.log(err);
  }
  console.log("Data written successfully!");
  console.log("Let's read newly written data");
  fs.readFile('input.txt', function (err, data) {
      if (err) {
         return console.error(err);
      }
      console.log("Asynchronous read: " + data.toString());
   }); 
})
