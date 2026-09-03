const http = require("http");
const userForm = require("./userForm");
const userDataForm = require("./userDataForm");

http.createServer((req, resp) => {

    if (req.url == "/") {

        userForm(req, resp);

    } else if (req.url == "/submit") {

        userDataForm(req, resp);

    } else {

        resp.writeHead(404, {
            "Content-Type": "text/plain"
        });

        resp.end("Page not found");
    }

}).listen(7900);