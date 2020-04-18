// Exercise 9
const http = require("http");
const urls = (process.argv).slice(2,5);
let totalURLS = urls.length;
const results = [];

// We are using forEach method because for each index forEach has its own closure.
// TotalURLs is used to keep track of how many URL are yet to be visited.
urls.forEach((url, index) => {
  const result = [];
  http.get(url, (response) => {
    response.setEncoding('utf8');
    response.on('data', (data) => result.push(data))
    response.on('end', () => {
      results[index] = result.join("");
      fetched();
    })
  })
})

// This function is called after the stream for each URL called is completed and it marks the URL as
// visited via totalURLs count
fetched = () => {
    if(--totalURLS !== 0) 
     return;
    results.forEach((result) => console.log(result))
}