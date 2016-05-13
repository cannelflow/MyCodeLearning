var fs = require('fs');
//Sync Way Means Programme Blocks Everthing Untill It Finished
var data = fs.readFileSync('index.txt');
console.log("OutPut From Sync Way : " + data.toString());
//Async Way Programme don't wait to finish
fs.readFile('index.txt', 'utf-8', function(err, data) {
    if (err) {
        console.log("You HAVE tO dEAL wITH mE fIRST");
    }
    console.log("OutPut From ASync Way : " + data);
})
console.log("Programme Ended");
