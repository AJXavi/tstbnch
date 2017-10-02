const express = require('express')
const app = express()

var obj={
"name":"Hendrix",
"DOB":"17/11/1999",
"college":"K.L.N college of engineering",
"contact":
{
"mobile":
[
{"number":"7694773735","carrier":"Airtel"},
{"number":"9163315772","carrier":"BerrySpot"}
],
"address":
      {"city":"Madurai","pincode":"625009"}
}

};

app.get('/getname', function (req, res) {
//console.log(obj.name);
x = "name:"+obj.name;
res.send(x)
})

app.get('/getcollege', function (req, res) {

x = "college:"+obj.college;
res.end(x)
})

app.get('/getcontact', function (req, res) {

x = "number1:"+obj.contact.mobile[0].number +"\n number2:"+obj.contact.mobile[1].number;
res.end(x)
})

app.get('/getaddress', function (req, res) {

x = "address:"+obj.contact.address.city +"\n"+obj.contact.address.pincode;
res.end(x)
})

app.listen(2000);
console.log("node express app started at http://localhost:2000");
