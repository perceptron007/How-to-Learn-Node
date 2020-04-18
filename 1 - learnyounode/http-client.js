// Exercise 7
const http = require("http");
const url = process.argv[2];

// - HTTP Get mothod the callback is of response type which is a node stream.
// - You can listen to different event on response object and the data event is the one in which you will
// have access to data.
// - 
http.get(url, (response) => {
  response.on("data", (data) => console.log(data.toString()));
});

