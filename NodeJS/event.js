 var events = require('events');
var eventEmitter = new events.EventEmitter();
var i;

eventEmitter.on('first', function() {
console.log("EVENT 1");
for(i=0;i<5;i++)
    console.log(i);
eventEmitter.emit('second');
}  );


eventEmitter.on('second', function(){
console.log("EVENT 2");
for(i=4;i>-1;i--)
   console.log(i); 
});


eventEmitter.emit('first');
console.log("Program Ended.");
