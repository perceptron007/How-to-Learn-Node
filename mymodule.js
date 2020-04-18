// Exercise 6

const fs = require('fs');

module.exports = logFiles = (path, extension, callback) => {
  return fs.readdir(path, (err, data) => {
    if(err) {
      callback(err);
    } else {
      const files = data.filter((file) => file.endsWith(`.${extension}`));
      callback(null, files);
    }
  })
}