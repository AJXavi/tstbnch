function func(){
var data={

"User_name":"Jeron",

"Name":{
     "F_name":"Arp","M_name":"Jrn","L_name":"Xvr"
       },

"Parent_info":{
     "Father_name":"Divk",
     "Mother_name":"Brnta"
              },

"Phone":[
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

	
var temp=JSON.stringify(data.mail[0].Primary);
document.getElementById("jj").innerHTML = data.mail[0].Primary;
}
