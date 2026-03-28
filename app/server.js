const http = require("http");

const PORT = 3000;
const HOST = "0.0.0.0";

const server = http.createServer((req, res) => {
  if (req.url === "/health") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ status: "ok" }));
    return;
  }

  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello from Dev and Ops working together!\n");
});

server.listen(PORT, HOST, () => {
  console.log(`Server running on http://${HOST}:${PORT}`);
});
