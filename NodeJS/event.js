 
var events = require('events');
  
 
var eventEmitter = new events.EventEmitter();
  
var i;




eventEmitter.on('first', function() {
  
for(i=0;i<5;i++)

    console.log(i);
eventEmitter.emit('secondevent');
  
}  );


eventEmitter.on('second', function(){
  
   for(i=4;i>-1;i--)

   console.log(i); 
});


eventEmitter.emit('firstevent');
  
console.log("Program Ended."); 