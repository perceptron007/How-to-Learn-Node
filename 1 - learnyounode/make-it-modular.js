// Exercise 6
const path = (process.argv)[2];
const filter = (process.argv)[3];

const myModule = require('./mymodule');

myModule(path, filter, function(err, data){
  if(err)
    console.log(err)
  data.forEach((file) => console.log(file));
}) 
