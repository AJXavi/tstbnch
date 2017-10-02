const express = require('express')

const app = express()
var msg;
app.get('/i',function(req,res)
{

	var MongoClient = require('mongodb').MongoClient;
	var url = "mongodb://localhost:27017/demodb";

	MongoClient.connect(url, function(err, db) {
	  if (err) throw err;
	  var myobj = { name: "Berryspot", address: "Pottapalayam" };
	  db.collection("dummy").insertOne(myobj, function(err, res) {
	    if (err) throw err;
	    console.log("1 document inserted");
	    db.close();
	  });
	}); res.end("Successfully wrote");
})
app.get('/f',function(req,res)
{
	var MongoClient = require('mongodb').MongoClient;
	var url = "mongodb://localhost:27017/demodb";

	MongoClient.connect(url, function(err, db){
		if(err) throw err;
		db.collection("dummy").findOne({}, function(err, result) {
		    if (err) throw err;
		    console.log(result);
		    db.close();
				msg = "Name :"+ result.name + "\nAddress :" + result.address ;
		  });
	}); res.end(msg);
})
app.listen(2000, function () {
  console.log('Example app listening on port 2000!')
})
