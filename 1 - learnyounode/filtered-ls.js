'use strict';
// Exercise 5
// Use test folder for local testing.
// It has txt and md file.
const fs = require('fs');
const path = (process.argv)[2];
const filter = (process.argv)[3];

const dir = fs.readdir(path, (err, data) => {
  if(err) {
    console.log(err);
  } else {
    const files = data.filter((file) => file.endsWith(`.${filter}`));
    files.forEach((file) => console.log(file));
  }
})