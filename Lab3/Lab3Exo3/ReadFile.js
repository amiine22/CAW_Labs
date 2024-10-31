var fs = require('node:fs');

fs.readFile('./f.txt', 'utf-8', (error,data)=>{
 if(error) {
  console.log(error);
 }else{
  console.log(data);
 }
});
 