const fs = require('fs');

const fileName = process.argv[2] || "./f.txt"; 

fs.writeFile(fileName, "Coding for fun, that's my motto!", { flag: "a" }, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log('The file has been saved!');
  }
});