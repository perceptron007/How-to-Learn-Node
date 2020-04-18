// Exercise 4
const fs = require('fs');
const path = (process.argv)[2];
const buffer = fs.readFile(path, 'utf-8', (err, data) => {
  if(err)
    return console.log(err);
  console.log(data.toString().split('\n').length - 1);
})