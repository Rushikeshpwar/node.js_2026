const http = require('http');

const userData = [
    {
        username: "Rushikesh",
        age: 22,
        email: "rushikesh@gmail.com"
    },

    {
        username: "Rushikesh",
        age: 22,
        email: "rushikesh@gmail.com"
    },

    {
        username: "Rushikesh",
        age: 22,
        email: "rushikesh@gmail.com"
    }
];

http.createServer((req, resp) => {

    resp.setHeader('Content-Type', 'application/json');
    resp.write(JSON.stringify(userData));
    resp.end();

}).listen(4800);