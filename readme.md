 # LEARN YOU THE NODE.JS FOR MUCH WIN!

 ## MY FIRST I/O! (Exercise 3 of 13)
 ─────────────────────────────────────────────────────────────────────────────
 ### HINTS

  To perform a filesystem operation you are going to need the fs module from
  the Node core library. To load this kind of module, or any other "global"
  module, use the following incantation:

     const fs = require('fs')

  Now you have the full fs module available in a variable named fs.

  All synchronous (or blocking) filesystem methods in the fs module end with
  'Sync'. To read a file, you'll need to use
  fs.readFileSync('/path/to/file'). This method will return a Buffer object
  containing the complete contents of the file.

  Documentation on the fs module can be found by pointing your browser here:
  file://C:\Users\Admin\AppData\Roaming\npm\node_modules\learnyounode\docs-n
  odejs\fs.html

  Buffer objects are Node's way of efficiently representing arbitrary arrays
  of data, whether it be ascii, binary or some other format. Buffer objects
  can be converted to strings by simply calling the toString() method on
  them. e.g. const str = buf.toString().

  Documentation on Buffers can be found by pointing your browser here:
  file://C:\Users\Admin\AppData\Roaming\npm\node_modules\learnyounode\docs-n
  odejs\buffer.html

  If you're looking for an easy way to count the number of newlines in a
  string, recall that a JavaScript String can be .split() into an array of
  substrings and that '\n' can be used as a delimiter. Note that the test
  file does not have a newline character ('\n') at the end of the last line,
  so using this method you'll end up with an array that has one more element
  than the number of newlines.

 ─────────────────────────────────────────────────────────────────────────────  


 ## HTTP CLIENT (Exercise 7 of 13)

  Create a file named http-client.js.

  Write a program that performs an HTTP GET request to a URL provided to you
  as the first co mmand-line argument. Write the String contents of each  
  "data" event from the response to a new line on the console (stdout).  
   
 ─────────────────────────────────────────────────────────────────────────────  
   
 ### HINTS

  For this exercise you will need to use the http core module.

  Documentation on the http module can be found by pointing your browser
  here:
  file://C:\Users\Admin\AppData\Roaming\npm\node_modules\learnyounode\docs-n
  odejs\http.html

  The http.get() method is a shortcut for simple GET requests, use it to
  simplify your solution. The first argument to http.get() can be the URL
  you want to GET; provide a callback as the second argument.

  Unlike other callback functions, this one has the signature:

     function callback (response) { /* ... */ }

  Where the response object is a Node Stream object. You can treat Node
  Streams as objects that emit events. The three events that are of most
  interest are: "data", "error" and "end". You listen to an event like so:

     response.on('data', function (data) { /* ... */ })

  The "data" event is emitted when a chunk of data is available and can be
  processed. The size of the chunk depends upon the underlying data source.

  The response object / Stream that you get from http.get() also has a
  setEncoding() method. If you call this method with "utf8", the "data"
  events will emit Strings rather than the standard Node Buffer objects
  which you have to explicitly convert to Strings.

