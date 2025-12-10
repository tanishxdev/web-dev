// server.js

const http = require("http");

// Create a server using Node.js
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello from Node.js server");
});

// Port listening
server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
