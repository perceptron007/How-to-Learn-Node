// Exercise 8
const http = require("http");
const url = process.argv[2];

// Set Encoding is pretty useful because if not for that we would recieve data in buffers
const result = [];
http.get(url, (response) => {
  response.setEncoding('utf8')
  response.on("data", (data) => result.push(data));
  response.on("end", () => {
    console.log(result.reduce((acc, item) => acc + item.length, 0));
    console.log(result.join(""));
  })
});