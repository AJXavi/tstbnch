var express = require('express');

var app = express();

var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/MongoDatabase";



app.get('/insert', function(request, res) {



  var name = request.query.name;

  var city = request.query.city;

  MongoClient.connect(url, function(err, db) {

    if (err) throw err;

    var myobj = {

      name: name,

      City: city
    };

    db.collection("people").insertOne(myobj, function(err, res) {

      if (err) throw err;

      console.log("1 record inserted");

      db.close();
    });

  });

  res.sendfile("index.html");

});



app.get('/search', function(request, res) {



  var name = request.query.name;

  MongoClient.connect(url, function(err, db) {

    if (err) throw err;

    var query = {

      name: name

    };

    db.collection("people").find(query).toArray(function(err, result) {

      if (err) throw err;

      console.log(result);

      db.close();
    });

  });

  res.sendfile("index.html");

});



app.get('/disp', function(request, res) {



  var i;

  MongoClient.connect(url, function(err, db) {

    if (err) throw err;

    db.collection("people").find({}).toArray(function(err, result) {

      if (err) throw err;

      for (i = 0; i < result.length; i++)

        console.log(result[i].name + '\t' + result[i].City);

      db.close(); });

 });

  res.sendfile("index.html");

});



app.get('/update', function(request, res) {



  var o_name = request.query.oldname;

  var n_name = request.query.newname;

  var city = request.query.city;

  MongoClient.connect(url, function(err, db) {

    if (err) throw err;

    var myquery = {

      name: o_name
    };

    var newvalues = {

      name: n_name,

      City: city
    };

    db.collection("people").updateOne(myquery, newvalues, function(err, res) {

      if (err) throw err;

      console.log(res.result.n + " document updated");

      db.close();

    });

  });


  res.sendfile("index.html");

});


app.get('/del', function(request, res) {



  var name = request.query.name;

  MongoClient.connect(url, function(err, db) {

    if (err) throw err;

    var myquery = {
      name: name
    };

    db.collection("people").remove(myquery, function(err, obj) {

      if (err) throw err;

      console.log(obj.result.n + " record(s) deleted");

      db.close();

    });

  });

  res.sendfile("index.html");

});



app.listen(3000);

console.log("node express app started at http://localhost:3000");
