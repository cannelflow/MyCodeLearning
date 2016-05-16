var fs = require("fs");
var zlib = require('zlib');
var gzip = zlib.createGzip();
var inp = fs.createReadStream('input.txt.gz');
var out = fs.createWriteStream('input.txt');
inp.pipe(gzip).pipe(out);
console.log("File DeCompressed.");
