const http =require('http');

const server = http.createServer((req , resp) => {
    resp.setHeader('Content-Type', 'text/html');
    resp.end("<h4> Hello World</h4>");
    process.exit();
});

server.listen(4800);