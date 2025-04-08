//The http module in Node.js allows you to create HTTP server and client functionalities. It’s built-in, so you don’t need to install it using npm.

import http from "http";

//create our server using the http module
//The createServer method takes a callback function that is called every time a request is made to the server.
//The callback function takes two arguments: req (the request object) and res (the response object).
// The req object contains information about the request, such as the URL and headers, while the res object is used to send a response back to the client.

const server = http.createServer((req, res) => {
  //console.log(req); //Log the request object to the console
  // res.setHeader("Content-Type", "text/html"); //Set the content type of the response to HTML
  // res.statusCode = 404; //Set the status code of the response to 404 (Not Found)
  // res.statusMessage = "Not Found"; //Set the status message of the response to "Not Found"

  //shorthand for setting the status code and message
  res.writeHead(202, "Good", { "Content-Type": "text/html" });

  res.write("<h1>Hello World</h1>"); //Write a response to the client
  res.write("<p>This is a paragraph</p>"); //Write another response to the client
  res.end();
  //End the response, indicating that no more data will be sent
});

//The server listens on port 3000 and logs a message to the console when it starts.
server.listen(8000, () => {
  console.log("Server is running on port 8000");
});
