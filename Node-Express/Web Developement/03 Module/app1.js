var msg = function (message) {

    console.log('Message: ' + message);
};

var date = function (message) {

    console.log(new Date().toUTCString() + ' - Message: ' + message)
};

module.exports.msg = msg;
module.exports.date = date;
