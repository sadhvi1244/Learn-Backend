//"Make routes using HTTPS server in vanilla Node.js (without Express)",

// They want to test your understanding of core Node.js, especially:

// Routing logic

// HTTPS setup

// File serving

// Basic request handling

// import https from 'https';
// import fs from 'fs';
// import path from 'path';
// import { fileURLToPath } from 'url';

// // For __dirname equivalent in ES modules
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // Read SSL certs
// const options = {
//   key: fs.readFileSync(path.join(__dirname, 'key.pem')),
//   cert: fs.readFileSync(path.join(__dirname, 'cert.pem')),
// };

// const server = https.createServer(options, (req, res) => {
//   const url = req.url;
//   res.setHeader('Content-Type', 'text/html');

//   if (url === '/') {
//     res.writeHead(200);
//     res.end('<h1>Home Page</h1>');
//   } else if (url === '/about') {
//     res.writeHead(200);
//     res.end('<h1>About Page</h1>');
//   } else if (url === '/contact') {
//     res.writeHead(200);
//     res.end('<h1>Contact Page</h1>');
//   } else {
//     res.writeHead(404);
//     res.end('<h1>404 - Page Not Found</h1>');
//   }
// });

// server.listen(8443, () => {
//   console.log('✅ HTTPS Server is running on https://localhost:8443');
// });
//"Make routes using HTTPS server in vanilla Node.js (without Express)",

//👇🏻youtube
import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.readFile("./public/home.html", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Internal Server Error");
      } else {
        res.end(data);
      }
    });
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.readFile("./public/about.html", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Internal Server Error");
      } else {
        res.end(data);
      }
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found");
  }
});

server.listen(8000, () => {
  console.log("✅ Server is listening on port 8000...");
});
