var events = require('events');
var eventEmitter = new events.EventEmitter();
var event1 = function event1() {
    console.log("event1 Executed");
}
var event2 = function event2() {
    console.log("event2 Executed");
}
//3.bind another connection
eventEmitter.addListener('connection', event1)
//2.bind the connection with function
eventEmitter.on('connection', event2)
//4.add a eventListner
var eventListner = events.EventEmitter.listenerCount(eventEmitter, 'connection');
console.log("Currently Active Event :" + eventListner);
//1.fired an event name connection
eventEmitter.emit('connection');
//5.now remove event1
eventEmitter.removeListener('connection',event1);
console.log("event1 Stops");
//6.again fire an event
eventEmitter.emit('connection');
//7. listen to active event
var eventListner = events.EventEmitter.listenerCount(eventEmitter, 'connection');
console.log("Currently Active Event :" + eventListner);
