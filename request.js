const http = require('http');
const fs = require('fs');

http.createServer((req, resp) => {

    console.log(req.url);

    if (req.url == "/home") {

        fs.readFile("home.html", (err, data) => {
            resp.write(data);
            resp.end();
        });

    }

    else if (req.url == "/about") {

        fs.readFile("about.html", (err, data) => {
            resp.write(data);
            resp.end();
        });

    }

    else {

        resp.write("<h1>Page not found</h1>");
        resp.end();

    }

}).listen(6800);