var maxTime = 1000;
var evenDoubler = function (n, callback) {
    waitTime = Math.floor(Math.random() * (maxTime + 1));
    if (n % 2 !== 0) {
        setTimeout(function () {
            callback(new Error("Odd input"));
        }, waitTime);
    } else {
        setTimeout(function () {
            callback(null, n * 2, waitTime)
        }, waitTime);
    }
}
var handleResult = function (err, result, time) {
    if (err) {
        console.log("Error : " + err.message)
    } else {
        console.log("Error : " + result + " Time Is " + time);
    }
}
var count = 0;
for (var i = 0; i < 10; i++) {
    console.log("Calling For Value : " + i);
    evenDoubler(i, handleResult);
}
console.log("-----");