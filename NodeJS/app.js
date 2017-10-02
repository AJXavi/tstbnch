const express = require('express')
const app = express()
var data={

"user_name":"Jeron",

"name":{
     "F_name":"Arp","M_name":"Jrn","L_name":"Xvr"
       },

"parent_info":{
     "Father_name":"Divk",
     "Mother_name":"Brnta"
              },

"phone":[
          {
     "Num":"123456"
          },
          {
     "Num1":"654321"
          },
          {
     "Num2":"6431"
          }
        ],

"mail":[
        {"Primary":"jrncl@m.cm"},
        {"Seco":"jrnajx@m.cm"}
       ]
};

app.get('/', function (req, res) {
  nameVar="All :" + JSON.stringify(data);
  res.send(nameVar)
})

app.get('/getname', function (req, res) {
  nameVar="Name :" + data.user_name  ;
  res.send(nameVar)
})

app.get('/getmail', function (req, res) {
  nameVar=" Mail :" + data.mail[0].Primary  ;
  res.send(nameVar)
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})