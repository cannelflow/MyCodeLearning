var path = require("path");
// Normalization
console.log('normalization : ' + path.normalize('/test/test1//2slashes/1slash/tab/..'));
// Join
console.log('joint path : ' + path.join('/test', 'test1', '2slashes/1slash', 'tab', '..'));
// Resolv
console.log('resolve : ' + path.resolve('main.js'));
// extNam
console.log('ext name : ' + path.extname('main.js'));
