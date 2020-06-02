const http = require('http');

const server = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Welcome!! This site is created by Dev-Compost reader!");
});

const port = process.env.PORT || 8080;
server.listen(port);