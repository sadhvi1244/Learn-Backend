//provide routing usign vanilla nodejs not express
import http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200, {
      "Content-Type": "text/html",
    });
    res.end("Home Page");
  } else if (req.url === "/about" && req.method === "GET") {
    res.writeHead(200, {
      "Content-Type": "text/html",
    });
    res.end("About Page");
  } else {
    res.writeHead(404, {
      "Content-Type": "text/plain",
    });
    res.statusCode = 404;
    res.end("404 Not Found");
  }
});

server.listen(8000, () => {
  console.log("Server is listening on port 8000...");
});
