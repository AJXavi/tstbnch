
const fs = require('fs');
fs.readFile('myfile.txt', errdetect);

fs.readFile('input.txt', errdetect);

function errdetect(err,suxus){
 if (err){
  console.error("Error OCcuReD\n",err);
  return;
 }
 console.log(suxus.toString());
}
