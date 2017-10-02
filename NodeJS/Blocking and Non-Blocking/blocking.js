var http = require('http');
var fs = require("fs");
//create a server object:
http.createServer(function (req, res) {
	var t = new Date().getTime();
    while (new Date().getTime() < t + 5000);//wait for 15secs
  res.write('Waiting done !!! \n duration:5s\n'); //write a response to the client
  
   var data = fs.readFileSync('myfile.txt');  
   res.write(data.toString());  // blocking for duration of 5 sec
  
  res.end(); //end the response
}).listen(10); //the server object listens on port 8080

console.log("Server listening at post 10...");