var events = require('events');
var eventEmitter = new events.EventEmitter();
var ringBell = function ringBell() {
    console.log('ring ring ring : Door Opened');
    eventEmitter.emit('doorClose');
}
eventEmitter.on('doorOpen', ringBell);
eventEmitter.on('doorClose', function() {
  console.log('Ding Dong Ding : Door Closed');
});
eventEmitter.emit('doorOpen')
